// src/features/news/components/NewsList/NewsColumnList/NewsColumnList.tsx

import NewsColumnCard from '@/features/news/components/NewsCard/NewsColumnCard/NewsColumnCard';
import type { NewsItem } from '@/features/news/types/news';
import styles from './NewsColumnList.module.scss';
import InfiniteList from '@/shared/components/InfiniteList/InfiniteList';

export default function NewsColumnList({
  data,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  infinite = true,
}: {
  data: { pages: { content: NewsItem[] }[] } | undefined;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  infinite?: boolean;
}) {
  return (
    <ul className={styles.newsColumnList}>
      {infinite ? (
        <InfiniteList
          pages={data?.pages as { content: NewsItem[] }[] | undefined}
          getKey={(it: NewsItem) => it.newsId}
          renderItem={(it: NewsItem) => <NewsColumnCard item={it} />}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          onLoadMore={fetchNextPage}
        />
      ) : (
        data?.pages?.[0]?.content?.map((it) => <NewsColumnCard key={it.newsId} item={it} />)
      )}
    </ul>
  );
}
