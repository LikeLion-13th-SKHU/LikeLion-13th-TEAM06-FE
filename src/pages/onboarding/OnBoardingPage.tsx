import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboardingStore } from "./useOnboardingStore";
import styles from "./OnBoardingPage.module.scss";

export default function OnBoardingPage() {
  const nav = useNavigate();
  const { dob, setDob } = useOnboardingStore();

  const years = useMemo(() => {
    const now = new Date().getFullYear();
    return Array.from({ length: 100 }, (_, i) => now - i);
  }, []);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const daysInMonth = useMemo(() => {
    const y = dob.year ?? 2000;
    const m = dob.month ?? 1;
    return new Date(y, m, 0).getDate();
  }, [dob.year, dob.month]);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const canNext = !!dob.year && !!dob.month && !!dob.day;

  return (
    <div className={styles.container}>
      <div className={styles.stepBar}>
        <span className={`${styles.dot} ${styles.active}`} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>

      <h2 className={styles.title}>생년월일을 선택해 주세요</h2>
      <p className={styles.desc}>맞춤형 서비스를 위해 필요합니다</p>

      <div className={styles.formArea}>
        <div className={styles.row}>
          <select
            className={styles.select}
            value={dob.year ?? ""}
            onChange={(e) => setDob({ year: Number(e.target.value) })}
          >
            <option value="">년</option>
            {years.map((y) => <option key={y}>{y}</option>)}
          </select>
          <select
            className={styles.select}
            value={dob.month ?? ""}
            onChange={(e) => setDob({ month: Number(e.target.value) })}
          >
            <option value="">월</option>
            {months.map((m) => <option key={m}>{m}</option>)}
          </select>
          <select
            className={styles.select}
            value={dob.day ?? ""}
            onChange={(e) => setDob({ day: Number(e.target.value) })}
          >
            <option value="">일</option>
            {days.map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          className={styles.primary}
          disabled={!canNext}
          onClick={() => nav("/onboarding/residence")}
        >
          다음
        </button>
      </div>
    </div>
  );
}


