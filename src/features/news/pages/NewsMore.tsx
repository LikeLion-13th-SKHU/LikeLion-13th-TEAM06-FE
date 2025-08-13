// src/features/news/pages/NewsMore.tsx

import { useHeader } from '@/shared/contexts/HeaderContext';
import { useEffect } from 'react';
import { newsMock } from '@/features/news/mocks/newsMock';
import NewsRowList from '@/features/news/components/NewsList/NewsRowList/NewsRowList';
import NewsColumnList from '@/features/news/components/NewsList/NewsColumnList/NewsColumnList';

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

  return (
    <div style={{ padding: '16px 0' }}>
      {section === 'hot' || section === 'local' ? (
        <NewsRowList items={newsMock} />
      ) : (
        <NewsColumnList items={newsMock} />
      )}
    </div>
  );
}
