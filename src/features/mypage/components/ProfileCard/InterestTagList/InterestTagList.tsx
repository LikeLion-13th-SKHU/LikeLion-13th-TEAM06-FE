// src/features/mypage/components/InterestTagList/InterestTagList.tsx

import type { InterestKey } from '@/shared/constants/interests';
import InterestTags from '../InterestTags/InterestTags';
import styles from './InterestTagList.module.scss';

export default function InterestTagList({
  items,
  maxVisible = 6,
  size = 'sm',
  onClickMore,
}: {
  items: InterestKey[];
  maxVisible?: number;
  size?: 'sm' | 'md';
  onClickMore?: () => void;
}) {
  const visible = items.slice(0, maxVisible);
  const remain = items.length - visible.length;

  return (
    <div className={`${styles.tags} ${styles[size]}`}>
      <InterestTags interests={visible} />
      {remain > 0 && (
        <button type="button" className={styles.more} onClick={onClickMore} aria-label="더보기">
          +{remain}
        </button>
      )}
    </div>
  );
}
