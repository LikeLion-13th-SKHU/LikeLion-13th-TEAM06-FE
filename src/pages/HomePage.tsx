// src/pages/HomePage.tsx

import { useHeader } from '@/shared/contexts/HeaderContext';
import { useEffect } from 'react';
import NewsSection from '@/features/news/components/NewsSection/NewsSection';
import { useMyPageInfo } from '@/features/mypage/hooks/useMyPage';
export default function HomePage() {
  const { setConfig } = useHeader();

  useEffect(() => {
    setConfig({
      kind: 'main',
      autoHide: true,
      rightActions: [
        { id: 'mypage', label: '마이페이지', onClick: () => (location.href = '/mypage') },
        { id: 'notification', label: '알림' },
      ],
    });
  }, []);

  const { data: user } = useMyPageInfo();
  if (!user) return <div>User not found</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', margin: '16px 0' }}>
      <NewsSection title="🔥 실시간 HOT ISSUE" link="/news/hot" type="hot" />
      <NewsSection
        title={`💡 ${user.nickname}님 맞춤형 소식`}
        link="/news/for-you"
        type="for-you"
      />
      <NewsSection title="☘️ 우리 동네 소식" link="/news/local" layout="column" type="local" />
      <NewsSection title="🎨 행사/전시" link="/events" layout="events" type="events" />
    </div>
  );
}
