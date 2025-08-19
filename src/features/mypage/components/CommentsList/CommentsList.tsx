// src/features/mypage/components/CommentsList/CommentsList.tsx

import InfiniteList from '@/shared/components/InfiniteList/InfiniteList';

import type { NewsItem } from '@/features/news/types/news';
import NewsRowCard from '@/features/news/components/NewsCard/NewsRowCard/NewsRowCard';
import styles from './CommentsList.module.scss';
import { useMyPageCommentsInfinite } from '../../hooks/useMyPage';

export default function CommentsList() {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useMyPageCommentsInfinite();
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
