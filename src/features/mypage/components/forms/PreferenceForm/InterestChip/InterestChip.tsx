// src/features/mypage/components/InterestChip/InterestChip.tsx

import styles from './InterestChip.module.scss';

export default function InterestChip({
  selected,
  label,
  onClick,
}: {
  selected: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={selected}
      className={`${styles.chip} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
