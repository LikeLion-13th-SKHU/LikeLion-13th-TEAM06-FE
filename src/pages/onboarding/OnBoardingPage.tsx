// src/pages/onboarding/OnBoardingPage.tsx
import { useEffect, useMemo, useState } from "react"; // ★ useEffect 추가
import { useNavigate } from "react-router-dom";
import styles from "./OnBoardingPage.module.scss";
import { getDraft, mergeDraft } from "@/shared/utils/onboardingDraft"; // ★ 추가

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

  // ★ 마운트 시 로컬스토리지 값으로 복원
  useEffect(() => {
    const draft = getDraft();
    if (draft.birth) {
      setYear(draft.birth.year ?? "");
      setMonth(draft.birth.month ?? "");
      setDay(draft.birth.day ?? "");
    }
  }, []);

  const valid = useMemo(() => {
    if (!year || !month || !day) return false;
    const d = new Date(Number(year), Number(month) - 1, Number(day));
    return (
      d.getFullYear() === Number(year) &&
      d.getMonth() + 1 === Number(month) &&
      d.getDate() === Number(day)
    );
  }, [year, month, day]);

  // ★ 다음 버튼에서 드래프트 저장 후 이동
  const goNext = () => {
    if (!valid) return;
    mergeDraft({ birth: { year: Number(year), month: Number(month), day: Number(day) } });
    nav("/onboarding/region"); // 기존 로직 유지
  };

  return (
    <div className={styles.page}>
      {/* 상단: 뒤로가기 + 진행바 */}
      <button className={styles.backBtn} onClick={() => nav(-1)} aria-label="뒤로가기">
        <span className={styles.backIcon}>←</span>
      </button>

      <div className={styles.progress}>
        <span className={`${styles.dot} ${styles.dotActive}`} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>

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
              className={`${styles.input} ${styles.num}`}
              inputMode="numeric" pattern="[0-9]*" placeholder="6"
              value={month === "" ? "" : String(month)}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, "");
                setMonth(v ? Math.min(Number(v), 12) : "");
              }}
            />
            <span className={styles.unit}>월</span>

            <input
              className={`${styles.input} ${styles.num}`}
              inputMode="numeric" pattern="[0-9]*" placeholder="17"
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

      {/* 하단 CTA */}
      <div className={styles.footer}>
        <button
          className={styles.nextBtn}
          onClick={goNext}                 // ★ 변경
          disabled={!valid}
        >
          다음 →
        </button>
      </div>
    </div>
  );
}
