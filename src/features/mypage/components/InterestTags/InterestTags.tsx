// src/features/mypage/components/InterestTags/InterestTags.tsx

import styles from './InterestTags.module.scss';

export type InterestTag = string;

export default function InterestTags({
  items,
  maxVisible = 6,
  size = 'sm',
  onClickMore,
}: {
  items: InterestTag[];
  maxVisible?: number;
  size?: 'sm' | 'md';
  onClickMore?: () => void;
}) {
  const visible = items.slice(0, maxVisible);
  const remain = items.length - visible.length;

  return (
    <div className={`${styles.tags} ${styles[size]}`}>
      {visible.map((t, i) => (
        <span key={`${t}-${i}`} className={styles.tag} title={t}>
          {t}
        </span>
      ))}
      {remain > 0 && (
        <button type="button" className={styles.more} onClick={onClickMore} aria-label="더보기">
          +{remain}
        </button>
      )}
    </div>
  );
}
