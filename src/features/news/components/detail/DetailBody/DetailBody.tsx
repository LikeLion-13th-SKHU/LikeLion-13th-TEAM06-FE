// src/features/news/components/detail/DetailBody/DetailBody.tsx

import styles from './DetailBody.module.scss';
import SummaryCard from '../SummaryCard/SummaryCard';

interface DetailBodyProps {
  title: string;
  htmlContent: string;
  date: string;
  summary: string[];
}

export default function DetailBody({ title, htmlContent, date, summary }: DetailBodyProps) {
  return (
    <div className={styles.newsDetailBody}>
      <div className={styles.newsDetailBodyHeader}>
        <div className={styles.newsDetailBodyCategory}>
          <button className={styles.newsDetailBodyCategoryButton}>정책/정부</button>
        </div>
        <h1 className={styles.newsDetailBodyTitle}>{title}</h1>
        <p className={styles.newsDetailBodyDate}>{date}</p>
      </div>

      <SummaryCard tags={['정책', '안전', '지자체', '가이드라인']} bullets={summary} />
      <div
        className={styles.newsDetailBodyContent}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
