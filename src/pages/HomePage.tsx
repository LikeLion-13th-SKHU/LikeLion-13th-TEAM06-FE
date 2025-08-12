// src/pages/HomePage.tsx

import { useHeader } from '@/shared/contexts/HeaderContext';
import { useEffect } from 'react';

export default function HomePage() {
  const { setConfig } = useHeader();

  useEffect(() => {
    setConfig({
      kind: 'main',
      autoHide: true,
      rightActions: [
        { id: 'bookmark', label: '북마크' },
        { id: 'mypage', label: '마이페이지' },
        { id: 'notification', label: '알림' },
      ],
    });
  }, [setConfig]);

  return <div>홈 콘텐츠</div>;
}
