// src/features/news/components/detail/DetailBody/DetailBody.tsx

import styles from './DetailBody.module.scss';

interface DetailBodyProps {
  title: string;
  htmlContent: string;
}

export default function DetailBody({ title, htmlContent }: DetailBodyProps) {
  return (
    <div className={styles.newsDetailBody}>
      <h1 className={styles.newsDetailBodyTitle}>{title}</h1>
      <div
        className={styles.newsDetailBodyContent}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
