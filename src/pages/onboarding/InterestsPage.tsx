import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OnBoardingPage.module.scss";
import { getDraft, mergeDraft } from "@/shared/utils/onboardingDraft";

const INTERESTS = ["IT/테크","경제/금융","정치","여행","스포츠"] as const;

export default function InterestsPage() {
  const nav = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  // 복원
  useEffect(() => {
    const d = getDraft();
    if (d.interests) setSelected(d.interests);
  }, []);

  const toggle = (it: string) => {
    setSelected((prev) => prev.includes(it) ? prev.filter((v) => v !== it) : [...prev, it]);
  };

  const onNext = () => {
    if (!selected.length) return;
    mergeDraft({ interests: selected });
    nav("/onboarding/finish");
  };

  return (
    <div className={styles.page}>
      {/* ... */}
      <section className={styles.body}>
        <div className={styles.bar} aria-hidden />
        <h1 className={styles.title}>관심사</h1>
        <p className={styles.subtitle}>관심 있는 주제를 선택해 주세요.</p>

        <div className={styles.grid}>
          {INTERESTS.map((it) => (
            <button key={it} type="button"
              className={`${styles.chip} ${selected.includes(it) ? styles.chipSelected : ""}`}
              onClick={() => toggle(it)}
            >
              {it}
            </button>
          ))}
        </div>
      </section>

      <div className={styles.footer}>
        <button className={styles.nextBtn} onClick={onNext} disabled={!selected.length}>
          다음 →
        </button>
      </div>
    </div>
  );
}
