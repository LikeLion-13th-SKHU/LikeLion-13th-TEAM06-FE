// src/features/news/pages/NewsMore.tsx

import { useHeader } from '@/shared/contexts/HeaderContext';
import { useEffect } from 'react';
import NewsRowList from '@/features/news/components/NewsList/NewsRowList/NewsRowList';
import NewsColumnList from '@/features/news/components/NewsList/NewsColumnList/NewsColumnList';
import { useNewsInterestList, useNewsLikeList, useNewsLocalList } from '../hooks/useNews';

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
      backTo: '/',
    });
  }, [setConfig, title]);

  const { data } =
    section === 'hot'
      ? useNewsLikeList(1, 10)
      : section === 'for-you'
        ? useNewsInterestList(1, 10)
        : section === 'local'
          ? useNewsLocalList(1, 10)
          : { data: { content: [] } };
  return (
    <div style={{ padding: '16px 0' }}>
      {section === 'hot' || section === 'for-you' ? (
        <NewsRowList items={data?.content} />
      ) : (
        <NewsColumnList items={data?.content} />
      )}
    </div>
  );
}
