// src/pages/onboarding/FinishPage.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OnBoardingPage.module.scss";
import { clearDraft, getDraft, type OnboardingDraft } from "@/shared/utils/onboardingDraft";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL; // 예: https://book-hub.site

export default function FinishPage() {
  const nav = useNavigate();
  const [draft, setDraft] = useState<OnboardingDraft>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDraft(getDraft());
  }, []);

  const submit = async () => {
    if (!draft.birth || !draft.region || !draft.interests?.length) {
      alert("입력되지 않은 항목이 있습니다.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API_BASE}/api/v1/onboarding`, {
        birth: draft.birth,           // {year, month, day}
        region: draft.region,         // "서울 강남구"
        interests: draft.interests,   // ["IT/테크", "경제"]
      });
      clearDraft();                   // ★ 성공 시 드래프트 제거
      nav("/", { replace: true });
    } catch (e: any) {
      alert(e?.response?.data?.message ?? "제출에 실패했습니다. 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.body} style={{ gap: 16 }}>
        <div className={styles.bar} aria-hidden />
        <h1 className={styles.title}>모두 완료!</h1>
        <p className={styles.subtitle}>
          생년월일: {draft.birth ? `${draft.birth.year}.${draft.birth.month}.${draft.birth.day}` : "미입력"}
          <br />
          지역: {draft.region ?? "미입력"}
          <br />
          관심사: {draft.interests?.join(", ") ?? "미입력"}
        </p>
      </section>

      <div className={styles.footer}>
        <button className={styles.nextBtn} onClick={submit} disabled={loading}>
          {loading ? "제출 중..." : "동네링 시작하기"}
        </button>
      </div>
    </div>
  );
}
