// src/features/news/components/detail/DetailRelatedNews/DetailRelatedNews.tsx

import NewsRowList from '@/features/news/components/NewsList/NewsRowList/NewsRowList';
import styles from './DetailRelatedNews.module.scss';
import { useNewsLocalList } from '@/features/news/hooks/useNews';
import type { NewsItem } from '@/features/news/types/news';

export default function DetailRelatedNews() {
  const { data } = useNewsLocalList(0, 3);

  return (
    <div className={styles.detailRelatedNews}>
      <h3 className={styles.detailRelatedNewsTitle}>관련 뉴스</h3>
      <NewsRowList
        data={data as { pages: { content: NewsItem[] }[] } | undefined}
        hasNextPage={false}
        isFetchingNextPage={false}
        fetchNextPage={() => {}}
        infinite={false}
      />
    </div>
  );
}
