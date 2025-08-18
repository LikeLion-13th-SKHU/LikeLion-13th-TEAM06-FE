// src/features/news/components/NewsList/NewsColumnList/NewsColumnList.tsx

import NewsColumnCard from '@/features/news/components/NewsCard/NewsColumnCard/NewsColumnCard';
import type { NewsItem } from '@/features/news/types/news';
import styles from './NewsColumnList.module.scss';

export default function NewsColumnList({ items }: { items: NewsItem[] }) {
  return (
    <ul className={styles.newsColumnList}>
      {items?.map((item) => (
        <NewsColumnCard key={item.newsId} item={item} />
      ))}
    </ul>
  );
}
