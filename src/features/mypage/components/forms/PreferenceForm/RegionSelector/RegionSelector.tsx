// src/features/mypage/components/RegionSelector/RegionSelector.tsx

import { REGIONS, type RegionCode } from '@/shared/constants/region';
import styles from './RegionSelector.module.scss';

export default function RegionSelector({
  value,
  onChange,
  error,
  columns = 4, // 반응형 컬럼 수
}: {
  value: RegionCode | string;
  onChange: (code: RegionCode) => void;
  error?: string;
  columns?: 3 | 4;
}) {
  return (
    <div>
      <div
        className={`${styles.grid} ${columns === 3 ? styles.cols3 : styles.cols4}`}
        role="radiogroup"
        aria-label="관심 지역"
      >
        {REGIONS.map((code) => {
          const selected = value === code;
          return (
            <button
              key={code}
              type="button"
              role="radio"
              aria-checked={selected}
              className={`${styles.chip} ${selected ? styles.selected : ''}`}
              onClick={() => onChange(code)}
            >
              {code}
            </button>
          );
        })}
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
