// src/features/news/pages/NewsDetail.tsx

import { useHeader } from '@/shared/contexts/HeaderContext';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DetailBody from '@/features/news/components/detail/DetailBody/DetailBody';
import { useToast } from '@/shared/contexts/ToastContext';
import DetailHelpful from '@/features/news/components/detail/DetailHelpful/DetailHelpful';
import DetailRelatedNews from '@/features/news/components/detail/DetailRelatedNews/DetailRelatedNews';
import CommentsSection from '@/features/news/components/detail/comment/CommentsSection';
import { useNewsDetail } from '../hooks/useNews';

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

  const { data: newsDetail } = useNewsDetail(Number(id));
  return (
    <div style={{ padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <DetailBody
        title={newsDetail?.title || ''}
        htmlContent={newsDetail?.content || ''}
        date={newsDetail?.newsDate || ''}
        summary={newsDetail?.summary || ''}
      />
      <DetailHelpful
        articleId={Number(id)}
        initiallyHelpful={newsDetail?.liked}
        initiallyCount={newsDetail?.likeCount}
      />
      <DetailRelatedNews />
      <CommentsSection articleId={Number(id)} initial={newsDetail?.newsComment ?? []} />
    </div>
  );
}
