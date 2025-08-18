// src/features/news/components/detail/SummaryCard/SummaryCard.tsx

import styles from './SummaryCard.module.scss';

type SummaryCardProps = {
  tags: string[]; // (최대 4)
  bullets: string[]; // (정확히 3줄 권장)
};

export default function SummaryCard({ tags, bullets }: SummaryCardProps) {
  return (
    <section className={styles.summaryCard} aria-label="기사 요약">
      <header className={styles.summaryHead}>
        <span className={styles.highlight}>AI가 요약한 내용</span>
      </header>

      <ul className={styles.bullets}>
        {Array.isArray(bullets) &&
          bullets.map((b, index) => (
            <li key={index}>
              <span className={styles.dot} aria-hidden="true">
                •
              </span>
              <span className={styles.text}>{b}</span>
            </li>
          ))}
      </ul>
      <div className={styles.tags} role="list">
        {tags.slice(0, 4).map((t) => (
          <button key={t} role="listitem" className={styles.tag}>
            # {t}
          </button>
        ))}
      </div>
    </section>
  );
}
