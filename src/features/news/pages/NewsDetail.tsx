// src/features/news/pages/NewsDetail.tsx

import { useHeader } from '@/shared/contexts/HeaderContext';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DetailBody from '@/features/news/components/detail/DetailBody/DetailBody';
import { newsDetailMock } from '@/features/news/mocks/newsMock';
import { useToast } from '@/shared/contexts/ToastContext';
import DetailHelpful from '@/features/news/components/detail/DetailHelpful/DetailHelpful';

export default function NewsDetail() {
  const { id } = useParams();
  const { setConfig } = useHeader();
  const toast = useToast();

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
            toast.success('링크가 복사되었습니다.');
          },
        },
      ],
    });
  }, [setConfig]);

  return (
    <div style={{ padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* unused 없애기 위한 코드 / 추후 삭제 필요 */}
      <div>{id}</div>
      <DetailBody title={newsDetailMock.title} htmlContent={newsDetailMock.htmlContent} />
      <DetailHelpful />
    </div>
  );
}
