// src/features/mypage/components/InterestTags/InterestTags.tsx

import { INTERESTS, type InterestKey } from '@/shared/constants/interests';
import styles from './InterestTags.module.scss';

export default function InterestTags({ interests }: { interests: InterestKey[] }) {
  return (
    <div className={styles.tags}>
      {interests.map((key) => {
        const { label, emoji } = INTERESTS[key];
        return (
          <span key={key} className={styles.tag}>
            {emoji} {label}
          </span>
        );
      })}
    </div>
  );
}
