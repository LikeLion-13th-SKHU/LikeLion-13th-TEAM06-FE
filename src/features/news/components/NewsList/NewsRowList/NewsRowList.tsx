// src/features/news/components/NewsList/NewsRowList/NewsRowList.tsx

import type { NewsItem } from '@/features/news/types/news';
import NewsRowCard from '@/features/news/components/NewsCard/NewsRowCard/NewsRowCard';
import styles from './NewsRowList.module.scss';

export default function NewsRowList({ items }: { items: NewsItem[] }) {
  return (
    <ul className={styles.newsRowList}>
      {items?.map((item) => (
        <NewsRowCard key={item.newsId} item={item} />
      ))}
    </ul>
  );
}
