// src/pages/HomePage.tsx

import { useHeader } from '@/shared/contexts/HeaderContext';
import { useEffect } from 'react';
import NewsSection from '@/features/news/components/NewsSection/NewsSection';

export default function HomePage() {
  const { setConfig } = useHeader();

  useEffect(() => {
    setConfig({
      kind: 'main',
      autoHide: true,
      rightActions: [
        { id: 'mypage', label: '마이페이지' },
        { id: 'notification', label: '알림' },
      ],
    });
  }, [setConfig]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', margin: '16px 0' }}>
      <NewsSection title="🔥 실시간 HOT ISSUE" link="/news/hot" />
      <NewsSection title="💡 은혜님 맞춤형 소식" link="/news/for-you" />
      <NewsSection title="☘️ 우리 동네 소식" link="/news/local" layout="column" />
    </div>
  );
}
