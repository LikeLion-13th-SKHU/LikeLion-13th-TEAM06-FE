// src/features/news/components/detail/DetailBody/DetailBody.tsx

import styles from './DetailBody.module.scss';
import SummaryCard from '../SummaryCard/SummaryCard';

interface DetailBodyProps {
  title: string;
  htmlContent: string;
}

export default function DetailBody({ title, htmlContent }: DetailBodyProps) {
  return (
    <div className={styles.newsDetailBody}>
      <h1 className={styles.newsDetailBodyTitle}>{title}</h1>
      <SummaryCard
        tags={['정책', '안전', '지자체', '가이드라인']}
        bullets={[
          '국토교통부·소방청이 생활숙박시설 합법사용 지원 가이드라인 배포',
          '지자체 대상 즉시 적용 가능 항목 정리 및 기준 완화 포함',
          '업계·거주자 대상 사전 안내 절차 간소화로 이행 부담 완화',
        ]}
      />
      <div
        className={styles.newsDetailBodyContent}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
