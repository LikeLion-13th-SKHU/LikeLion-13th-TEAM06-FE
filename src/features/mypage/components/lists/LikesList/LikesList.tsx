// src/features/mypage/components/LikesList/LikesList.tsx

import InfiniteList from '@/shared/components/InfiniteList/InfiniteList';
import { useMyPageLikesInfinite } from '@/features/mypage/hooks/useMyPage';
import styles from './LikesList.module.scss';
import type { NewsItem } from '@/features/news/types/news';
import NewsRowCard from '@/features/news/components/NewsCard/NewsRowCard/NewsRowCard';

export default function LikesList() {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useMyPageLikesInfinite();
  return (
    <div className={styles.list}>
      <InfiniteList
        pages={data?.pages as { content: NewsItem[] }[] | undefined}
        getKey={(it: NewsItem) => it.newsId}
        renderItem={(it: NewsItem) => <NewsRowCard item={it} />}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        onLoadMore={fetchNextPage}
      />
    </div>
  );
}
