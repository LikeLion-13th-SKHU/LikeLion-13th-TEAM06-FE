// src/pages/mypage/EditPreferencePage.tsx

import { useHeader } from '@/shared/contexts/HeaderContext';
import { useEffect } from 'react';
import PreferenceForm from '@/features/mypage/components/PreferenceForm/PreferenceForm';

export default function EditPreferencePage() {
  const { setConfig } = useHeader();

  useEffect(() => {
    setConfig({
      kind: 'page',
      title: '관심사 및 지역 편집',
      backTo: '/mypage',
    });
  }, [setConfig]);
  return (
    <div style={{ padding: '16px 0' }}>
      <PreferenceForm
        defaultValues={{
          regionCode: '',
          interests: [],
        }}
        onSubmit={() => {}}
      />
    </div>
  );
}
