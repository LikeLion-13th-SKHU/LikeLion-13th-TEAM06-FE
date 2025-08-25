import { useNavigate } from "react-router-dom";
import { useOnboardingStore } from "./useOnboardingStore";
import styles from "./FinishPage.module.scss";
import { useState } from "react";

export default function FinishPage() {
  const nav = useNavigate();
  const { dob, residence, interests, submitAll, isSubmitting } = useOnboardingStore();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    try {
      await submitAll();
      nav("/home", { replace: true });
    } catch (e: any) {
      setError(e?.message ?? "제출 중 문제가 발생했습니다.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.stepBar}>
        <span className={`${styles.dot} ${styles.active}`} />
        <span className={`${styles.dot} ${styles.active}`} />
        <span className={`${styles.dot} ${styles.active}`} />
      </div>

      <h2 className={styles.title}>동네링 시작하기</h2>
      <p className={styles.desc}>입력하신 정보를 확인해 주세요</p>

      <div className={styles.formArea}>
        <div className={styles.card}>
          <div><b>생년월일</b> : {dob.year}-{dob.month}-{dob.day}</div>
          <div><b>거주지</b> : {residence.region}</div>
          <div><b>관심사</b> : {interests.join(", ")}</div>
        </div>
        {error && <div className={styles.error}>{error}</div>}
      </div>

      <div className={styles.actions}>
        <button className={styles.ghost} onClick={() => nav("/onboarding/interests")}>수정하기</button>
        <button className={styles.primary} onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "제출 중..." : "시작하기"}
        </button>
      </div>
    </div>
  );
}



