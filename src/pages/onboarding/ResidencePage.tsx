import { useNavigate } from "react-router-dom";
import { useOnboardingStore } from "./useOnboardingStore";
import styles from "./ResidencePage.module.scss";

const REGIONS = [
  "서울","부산","대구","인천","광주","대전","울산","세종",
  "경기","강원","충북","충남","전북","전남","경북","경남","제주"
];

export default function ResidencePage() {
  const nav = useNavigate();
  const { residence, setResidence } = useOnboardingStore();
  const canNext = !!residence.region;

  return (
    <div className={styles.container}>
      <div className={styles.stepBar}>
        <span className={`${styles.dot} ${styles.active}`} />
        <span className={`${styles.dot} ${styles.active}`} />
        <span className={styles.dot} />
      </div>

      <h2 className={styles.title}>거주지를 선택해 주세요</h2>
      <p className={styles.desc}>선택하신 지역 기반으로 더 맞춤형 소식을 보여드려요.</p>

      <div className={styles.formArea}>
        <div className={styles.chips}>
          {REGIONS.map((r) => (
            <button
              key={r}
              className={`${styles.chip} ${residence.region === r ? styles.activeChip : ""}`}
              onClick={() => setResidence({ region: r })}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.ghost} onClick={() => nav("/onboarding/dob")}>이전</button>
        <button
          className={styles.primary}
          disabled={!canNext}
          onClick={() => nav("/onboarding/interests")}
        >
          다음
        </button>
      </div>
    </div>
  );
}




