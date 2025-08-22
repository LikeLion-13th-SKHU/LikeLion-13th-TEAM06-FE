// src/features/news/components/detail/DetailBody/DetailBody.tsx

import styles from './DetailBody.module.scss';
import SummaryCard from '../SummaryCard/SummaryCard';
import { INTERESTS, type InterestKey } from '@/shared/constants/interests';

interface DetailBodyProps {
  title: string;
  htmlContent: string;
  date: string;
  summary: string[];
  interestTypes: string;
  tags: string[];
}

export default function DetailBody({
  title,
  htmlContent,
  date,
  summary,
  interestTypes,
  tags,
}: DetailBodyProps) {
  // 뉴스 카테고리가 없으면 렌더링 하지 않음
  if (!interestTypes) return null;

  return (
    <div className={styles.newsDetailBody}>
      <div className={styles.newsDetailBodyHeader}>
        <div className={styles.newsDetailBodyCategory}>
          <button className={styles.newsDetailBodyCategoryButton}>
            {INTERESTS[interestTypes as InterestKey].emoji}
            {INTERESTS[interestTypes as InterestKey].label}
          </button>
        </div>
        <h1 className={styles.newsDetailBodyTitle}>{title}</h1>
        <p className={styles.newsDetailBodyDate}>{date}</p>
      </div>

      <SummaryCard tags={tags} bullets={summary} />
      <div
        className={styles.newsDetailBodyContent}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
