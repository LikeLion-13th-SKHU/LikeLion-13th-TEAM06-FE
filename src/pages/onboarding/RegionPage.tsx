import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OnBoardingPage.module.scss";
import { getDraft, mergeDraft } from "@/shared/utils/onboardingDraft";

const QUICK_REGIONS = ["서울","경기","인천","부산","대구","전체"];

export default function RegionPage() {
  const nav = useNavigate();
  const [region, setRegion] = useState("");

  // 복원
  useEffect(() => {
    const d = getDraft();
    if (d.region) setRegion(d.region);
  }, []);

  const onNext = () => {
    if (!region) return;
    mergeDraft({ region }); // 저장
    if (region === "전체") nav("/onboarding/region/select");
    else nav("/onboarding/interests");
  };

  return (
    <div className={styles.page}>
      {/* ...뒤로가기/진행바 생략... */}
      <section className={styles.body}>
        <div className={styles.bar} aria-hidden />
        <h1 className={styles.title}>거주지</h1>
        <p className={styles.subtitle}>주요 활동 지역을 선택해 주세요.</p>

        <div className={styles.chipGroup}>
          {QUICK_REGIONS.map((r) => (
            <button
              key={r}
              type="button"
              className={`${styles.chip} ${region === r ? styles.chipSelected : ""}`}
              onClick={() => setRegion(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </section>

      <div className={styles.footer}>
        <button className={styles.nextBtn} onClick={onNext} disabled={!region}>
          다음 →
        </button>
      </div>
    </div>
  );
}
