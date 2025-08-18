// src/features/news/components/NewsList/NewsRowList/NewsRowList.tsx

import type { NewsItem } from '@/features/news/types/news';
import NewsRowCard from '@/features/news/components/NewsCard/NewsRowCard/NewsRowCard';
import styles from './NewsRowList.module.scss';
import InfiniteList from '@/shared/components/InfiniteList/InfiniteList';

export default function NewsRowList({
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
    <ul className={styles.newsRowList}>
      {infinite ? (
        <InfiniteList
          pages={data?.pages as { content: NewsItem[] }[] | undefined}
          getKey={(it: NewsItem) => it.newsId}
          renderItem={(it: NewsItem) => <NewsRowCard item={it} />}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          onLoadMore={fetchNextPage}
        />
      ) : (
        data?.pages?.[0]?.content?.map((it) => <NewsRowCard key={it.newsId} item={it} />)
      )}
    </ul>
  );
}
