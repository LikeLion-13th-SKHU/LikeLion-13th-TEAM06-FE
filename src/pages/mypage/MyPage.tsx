// src/pages/mypage/MyPage.tsx

import { useHeader } from '@/shared/contexts/HeaderContext';
import { useEffect } from 'react';
import MyPageHome from '@/features/mypage/pages/MyPageHome';

export default function MyPage() {
  const { setConfig } = useHeader();

  useEffect(() => {
    setConfig({
      kind: 'page',
      title: '프로필',
    });
  }, []);
  return (
    <div style={{ padding: '16px 0' }}>
      <MyPageHome />
    </div>
  );
}
