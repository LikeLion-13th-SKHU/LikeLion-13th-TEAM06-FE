import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OnBoardingPage.module.scss";
import { getDraft, mergeDraft } from "@/shared/utils/onboardingDraft";

const SIDO = ["서울","경기","인천","부산","대구"] as const;
const SIGUNGU_BY_SIDO: Record<string,string[]> = {
  서울:["강남구","서초구","송파구"], 경기:["수원시","성남시"], 인천:["미추홀구"], 부산:["해운대구"], 대구:["수성구"]
};

export default function RegionSelectPage() {
  const nav = useNavigate();
  const [sido, setSido] = useState("");
  const [sigungu, setSigungu] = useState("");

  // 복원 (draft.region이 "서울 강남구" 형식이라면 split)
  useEffect(() => {
    const d = getDraft();
    if (d.region && d.region.includes(" ")) {
      const [si, gu] = d.region.split(" ");
      setSido(si ?? "");
      setSigungu(gu ?? "");
    }
  }, []);

  const sigunguList = useMemo(() => (sido ? SIGUNGU_BY_SIDO[sido] ?? [] : []), [sido]);

  const onNext = () => {
    if (!sido || !sigungu) return;
    mergeDraft({ region: `${sido} ${sigungu}` });
    nav("/onboarding/interests");
  };

  return (
    <div className={styles.page}>
      {/* ... */}
      <section className={styles.body}>
        <div className={styles.bar} aria-hidden />
        <h1 className={styles.title}>상세 지역 선택</h1>
        <p className={styles.subtitle}>시/도와 구/군을 선택해 주세요.</p>

        <div className={styles.form}>
          <div className={styles.row}>
            <select className={`${styles.input} ${styles.select}`} value={sido}
                    onChange={(e) => { setSido(e.target.value); setSigungu(""); }}>
              <option value="" disabled>시/도</option>
              {SIDO.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className={styles.row}>
            <select className={`${styles.input} ${styles.select}`} value={sigungu}
                    onChange={(e) => setSigungu(e.target.value)} disabled={!sido}>
              <option value="" disabled>구/군</option>
              {sigunguList.map((g) => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
        </div>
      </section>

      <div className={styles.footer}>
        <button className={styles.nextBtn} onClick={onNext} disabled={!sido || !sigungu}>
          다음 →
        </button>
      </div>
    </div>
  );
}
