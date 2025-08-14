// src/features/news/components/detail/DetailRelatedNews/DetailRelatedNews.tsx

import { newsMock } from '@/features/news/mocks/newsMock';
import NewsRowList from '@/features/news/components/NewsList/NewsRowList/NewsRowList';
import styles from './DetailRelatedNews.module.scss';

export default function DetailRelatedNews() {
  return (
    <div className={styles.detailRelatedNews}>
      <h3 className={styles.detailRelatedNewsTitle}>관련 뉴스</h3>
      <NewsRowList items={newsMock} />
    </div>
  );
}
