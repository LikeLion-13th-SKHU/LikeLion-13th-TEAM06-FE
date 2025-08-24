// src/shared/utils/onboardingDraft.ts
export type OnboardingDraft = {
  birth?: { year?: number; month?: number; day?: number };
  region?: string;            // 예: "서울" 또는 "서울 강남구"
  interests?: string[];       // 예: ["IT/테크", "경제"]
};

const LS_KEY = "onboarding_draft_v1";

export function getDraft(): OnboardingDraft {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as OnboardingDraft) : {};
  } catch {
    return {};
  }
}

export function setDraft(next: OnboardingDraft) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(next));
  } catch {}
}

export function mergeDraft(partial: Partial<OnboardingDraft>) {
  const cur = getDraft();
  setDraft({ ...cur, ...partial });
}

export function clearDraft() {
  localStorage.removeItem(LS_KEY);
}