// src/pages/mypage/EditInterestPage.tsx

import { useHeader } from '@/shared/contexts/HeaderContext';
import { useEffect } from 'react';

export default function EditInterestPage() {
  const { setConfig } = useHeader();

  useEffect(() => {
    setConfig({
      kind: 'page',
      title: '관심사 편집',
      backTo: '/mypage',
    });
  }, [setConfig]);
  return <div style={{ padding: '16px 0' }}>EditInterestPage</div>;
}
