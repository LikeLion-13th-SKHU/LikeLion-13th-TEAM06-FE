import { useNavigate } from "react-router-dom";
import { useOnboardingStore } from "./useOnboardingStore";
import styles from "./InterestsPage.module.scss";

const INTERESTS = ["스포츠","문화","경제","정치","생활","여행","기타"];

export default function InterestsPage() {
  const nav = useNavigate();
  const { interests, toggleInterest } = useOnboardingStore();
  const canNext = interests.length > 0;

  return (
    <div className={styles.container}>
      <div className={styles.stepBar}>
        <span className={`${styles.dot} ${styles.active}`} />
        <span className={`${styles.dot} ${styles.active}`} />
        <span className={`${styles.dot} ${styles.active}`} />
      </div>

      <h2 className={styles.title}>관심사를 선택해 주세요</h2>
      <p className={styles.desc}>최소 1개 이상 선택해 주세요</p>

      <div className={styles.formArea}>
        <div className={styles.chips}>
          {INTERESTS.map((i) => (
            <button
              key={i}
              className={`${styles.chip} ${interests.includes(i) ? styles.activeChip : ""}`}
              onClick={() => toggleInterest(i)}
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.ghost} onClick={() => nav("/onboarding/residence")}>이전</button>
        <button className={styles.primary} disabled={!canNext} onClick={() => nav("/onboarding/finish")}>
          다음
        </button>
      </div>
    </div>
  );
}

