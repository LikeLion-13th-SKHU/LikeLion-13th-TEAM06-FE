// src/features/news/pages/NewsDetail.tsx

import { useHeader } from '@/shared/contexts/HeaderContext';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DetailBody from '@/features/news/components/detail/DetailBody/DetailBody';
import { newsDetailMock } from '@/features/news/mocks/newsMock';

export default function NewsDetail() {
  const { id } = useParams();
  const { setConfig } = useHeader();

  useEffect(() => {
    setConfig({
      kind: 'detail',
      title: '뉴스 상세',
      backTo: '/',
      rightActions: [
        {
          id: 'share',
          onClick: () => {
            navigator.clipboard.writeText(window.location.href);
          },
        },
      ],
    });
  }, [setConfig]);

  return (
    <div style={{ padding: '16px 0' }}>
      {/* unused 없애기 위한 코드 / 추후 삭제 필요 */}
      <div>{id}</div>
      <DetailBody title={newsDetailMock.title} htmlContent={newsDetailMock.htmlContent} />
    </div>
  );
}
