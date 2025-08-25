import { useNavigate } from 'react-router-dom';
import { useOnboardingStore } from './useOnboardingStore';
import styles from './InterestsPage.module.scss';
import { INTERESTS } from '@/shared/constants/interests';
import InterestChip from '@/features/mypage/components/forms/PreferenceForm/InterestChip/InterestChip';

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
          {Object.values(INTERESTS).map((it) => (
            <InterestChip
              key={it.code}
              selected={interests.includes(it.code)}
              label={`${it.emoji} ${it.label}`}
              onClick={() => toggleInterest(it.code)}
            />
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.ghost} onClick={() => nav('/onboarding/residence')}>
          이전
        </button>
        <button
          className={styles.primary}
          disabled={!canNext}
          onClick={() => nav('/onboarding/finish')}
        >
          다음
        </button>
      </div>
    </div>
  );
}
