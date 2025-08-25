// src/features/onboarding/useOnboardingStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getMemberInterest, putMemberInterest } from "../../api/member";
import { UI_TO_CODE, CODE_TO_UI } from "./interestsMap";

export type Dob = { year: number | null; month: number | null; day: number | null };
export type Residence = { region: string | null };

function parseBirthToYMD(raw?: string): Dob {
  if (!raw) return { year: null, month: null, day: null };
  const t = raw.trim();
  const parts = t.includes(".")
    ? t.split(".")
    : t.includes("-")
    ? t.split("-")
    : t.slice(0, 10).split("-");
  const [y, m, d] = parts.map((v) => Number(v));
  if (!y || !m || !d) return { year: null, month: null, day: null };
  return { year: y, month: m, day: d };
}

const formatDob = (d: Dob) =>
  `${d.year}-${String(d.month!).padStart(2, "0")}-${String(d.day!).padStart(2, "0")}`;

interface OnboardingStore {
  // 상태
  dob: Dob;
  residence: Residence;
  interests: string[];   // ✅ 명시적으로 string[]
  isSubmitting: boolean;
  hydrated: boolean;
  isPrefilling: boolean;

  // 액션
  setDob: (v: Partial<Dob>) => void;
  setResidence: (v: Partial<Residence>) => void;
  toggleInterest: (label: string) => void;
  setInterests: (arr: string[]) => void;

  // 서버 연동
  prefillFromServer: () => Promise<void>;
  resetDraft: () => void;
  submitAll: () => Promise<void>;
}

const initial: Pick<
  OnboardingStore,
  "dob" | "residence" | "interests" | "isSubmitting" | "hydrated" | "isPrefilling"
> = {
  dob: { year: null, month: null, day: null },
  residence: { region: null },
  interests: [],
  isSubmitting: false,
  hydrated: false,
  isPrefilling: false,
};

export const useOnboardingStore = create<OnboardingStore>()(
  persist(
    (set, get) => ({
      ...initial,

      // 기본 setters
      setDob: (v) => set((s) => ({ dob: { ...s.dob, ...v } })),
      setResidence: (v) => set((s) => ({ residence: { ...s.residence, ...v } })),
      toggleInterest: (label) =>
        set((s) => ({
          interests: s.interests.includes(label)
            ? s.interests.filter((x) => x !== label)
            : [...s.interests, label],
        })),
      setInterests: (arr) => set({ interests: arr }),

      // 서버 기본값 프리필 (birthDate/location/interests 코드 → UI 라벨)
      prefillFromServer: async () => {
        if (get().hydrated) return;
        set({ isPrefilling: true });
        try {
          const data = await getMemberInterest(); // { birthDate?, location?, interests? }
          const dob = parseBirthToYMD(data?.birthDate);

          set((s) => ({
            dob: {
              year: s.dob.year ?? dob.year,
              month: s.dob.month ?? dob.month,
              day: s.dob.day ?? dob.day,
            },
            residence: { region: s.residence.region ?? data?.location ?? null },
            interests:
              s.interests.length
                ? s.interests
                : ((data?.interests ?? []) as string[]).map((code) => CODE_TO_UI[code] ?? code),
            hydrated: true,
          }));
        } catch {
          set({ hydrated: true }); // 실패는 조용히 무시
        } finally {
          set({ isPrefilling: false });
        }
      },

      resetDraft: () => set({ ...initial }),

      // ✅ 최종 제출 (필드명: birthDate, location, interests)
      submitAll: async () => {
        const { dob, residence, interests } = get();
        if (!dob.year || !dob.month || !dob.day)
          throw new Error("생년월일을 완성해 주세요.");
        if (!residence.region)
          throw new Error("거주 지역을 선택해 주세요.");
        if (interests.length === 0)
          throw new Error("관심사를 1개 이상 선택해 주세요.");

        const payload = {
          birthDate: `${dob.year}-${String(dob.month).padStart(2, "0")}-${String(dob.day).padStart(2, "0")}`, // 서버 필드명
          location: residence.region!,                                                                           // 서버 필드명
          interests: interests.map((label) => UI_TO_CODE[label] ?? label),                                       // 서버 필드명
        };

        set({ isSubmitting: true });
        try {
          await putMemberInterest(payload); // PUT /api/v1/member/interest
          set({ ...initial });
          localStorage.removeItem("onboardingDraft_v3");
        } finally {
          set({ isSubmitting: false });
        }
      },
    }),
    {
      name: "onboardingDraft_v3",
      partialize: (s) => ({
        dob: s.dob,
        residence: s.residence,
        interests: s.interests,
        hydrated: s.hydrated,
      }),
    }
  )
);

