// src/pages/onboarding/OnBoardingPage.tsx
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OnBoardingPage.module.scss";

export default function OnBoardingPage() {
  const nav = useNavigate();

  const now = new Date();
  const currentYear = now.getFullYear();
  const years = useMemo(() => {
    const a: number[] = [];
    for (let y = currentYear; y >= 1900; y--) a.push(y);
    return a;
  }, [currentYear]);

  const [year, setYear] = useState<number | "">("");
  const [month, setMonth] = useState<number | "">("");
  const [day, setDay] = useState<number | "">("");

  const isValid = useMemo(() => {
    if (!year || !month || !day) return false;
    const d = new Date(Number(year), Number(month) - 1, Number(day));
    return (
      d.getFullYear() === Number(year) &&
      d.getMonth() + 1 === Number(month) &&
      d.getDate() === Number(day)
    );
  }, [year, month, day]);

  return (
    <div className={styles.page}>
      <div className={styles.progress}>
        <span className={`${styles.dot} ${styles.dotActive}`} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>

      <button
        type="button"
        aria-label="뒤로가기"
        className={styles.backBtn}
        onClick={() => nav(-1)}
      >
        <span className={styles.backIcon}>&larr;</span>
      </button>

      <section className={styles.body}>
        <div className={styles.bar} aria-hidden="true" />
        <h1 className={styles.title}>생년월일</h1>
        <p className={styles.subtitle}>생년월일을 선택해 주세요.</p>

        <div className={styles.form}>
          <div className={styles.row}>
            <select
              className={`${styles.input} ${styles.select}`}
              value={year === "" ? "" : String(year)}
              onChange={(e) => setYear(e.target.value ? Number(e.target.value) : "")}
            >
              <option value="" disabled>연도 선택</option>
              {years.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
            <span className={styles.unit}>년</span>
          </div>

          <div className={`${styles.row} ${styles.rowCompact}`}>
            <input
              className={styles.input}
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="6"
              value={month === "" ? "" : String(month)}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, "");
                setMonth(v ? Math.min(Number(v), 12) : "");
              }}
            />
            <span className={styles.unit}>월</span>

            <input
              className={styles.input}
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="17"
              value={day === "" ? "" : String(day)}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, "");
                setDay(v ? Math.min(Number(v), 31) : "");
              }}
            />
            <span className={styles.unit}>일</span>
          </div>
        </div>
      </section>

      <div className={styles.footer}>
        <button
          type="button"
          className={styles.nextBtn}
          onClick={() => nav("/onboarding/region")}
          disabled={!isValid}
        >
          다음 →
        </button>
      </div>
    </div>
  );
}

