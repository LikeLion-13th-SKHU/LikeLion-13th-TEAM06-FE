// src/shared/components/InfiniteList/InfiniteList.tsx

// src/shared/components/InfiniteList/InfiniteList.tsx
import { useEffect, useMemo, useRef } from 'react';

type InfiniteListProps<T> = {
  pages: { content: T[] }[] | undefined;
  getKey: (item: T) => string | number; // 중복 제거 key
  renderItem: (item: T) => React.ReactNode;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  onLoadMore: () => void;
  rootMargin?: string;
  emptyFallback?: React.ReactNode;
  loadingFallback?: React.ReactNode;
  fetchingMoreFallback?: React.ReactNode;
};

export default function InfiniteList<T>({
  pages,
  getKey,
  renderItem,
  hasNextPage,
  isFetchingNextPage,
  onLoadMore,
  rootMargin = '160px',
  emptyFallback = <div style={{ color: '#9CA3AF', textAlign: 'center' }}>결과가 없어요</div>,
  loadingFallback = <div style={{ textAlign: 'center' }}>로딩…</div>,
  fetchingMoreFallback = <div style={{ textAlign: 'center', color: '#9CA3AF' }}>불러오는 중…</div>,
}: InfiniteListProps<T>) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const items = useMemo(() => {
    const map = new Map<string | number, T>();
    pages?.forEach((p) => p.content.forEach((it) => map.set(getKey(it), it)));
    return Array.from(map.values());
  }, [pages, getKey]);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          if (hasNextPage && !isFetchingNextPage) onLoadMore();
        }
      },
      { rootMargin }
    );
    io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, [hasNextPage, isFetchingNextPage, onLoadMore, rootMargin]);

  if (!pages) return loadingFallback;
  if (items.length === 0) return <>{emptyFallback}</>;

  return (
    <>
      {items.map((it) => (
        <div key={getKey(it)}>{renderItem(it)}</div>
      ))}
      {isFetchingNextPage && fetchingMoreFallback}
      <div ref={sentinelRef} style={{ height: 1 }} />
      {!hasNextPage && (
        <div style={{ color: '#9CA3AF', textAlign: 'center', padding: 12 }}>마지막 콘텐츠에요</div>
      )}
    </>
  );
}
