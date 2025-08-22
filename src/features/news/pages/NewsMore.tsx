// src/features/news/pages/NewsMore.tsx

import { useHeader } from '@/shared/contexts/HeaderContext';
import { useEffect } from 'react';
import NewsRowList from '@/features/news/components/NewsList/NewsRowList/NewsRowList';
import NewsColumnList from '@/features/news/components/NewsList/NewsColumnList/NewsColumnList';
import { useNewsInterestList, useNewsLikeList, useNewsLocalList } from '../hooks/useNews';
import type { NewsItem } from '../types/news';

type Section = 'hot' | 'for-you' | 'local';

interface NewsMoreProps {
  title: string;
  section: Section;
}

export default function NewsMore({ title, section }: NewsMoreProps) {
  const { setConfig } = useHeader();

  useEffect(() => {
    setConfig({
      kind: 'page',
      title,
    });
  }, [title]);

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    section === 'hot'
      ? useNewsLikeList(0, 10)
      : section === 'for-you'
        ? useNewsInterestList(0, 10)
        : section === 'local'
          ? useNewsLocalList(0, 10)
          : { data: { content: [] } };
  return (
    <div style={{ padding: '16px 0' }}>
      {section === 'hot' || section === 'for-you' ? (
        <NewsRowList
          data={data as { pages: { content: NewsItem[] }[] } | undefined}
          hasNextPage={hasNextPage || false}
          isFetchingNextPage={isFetchingNextPage || false}
          fetchNextPage={fetchNextPage || (() => {})}
        />
      ) : (
        <NewsColumnList
          data={data as { pages: { content: NewsItem[] }[] } | undefined}
          hasNextPage={hasNextPage || false}
          isFetchingNextPage={isFetchingNextPage || false}
          fetchNextPage={fetchNextPage || (() => {})}
        />
      )}
    </div>
  );
}
