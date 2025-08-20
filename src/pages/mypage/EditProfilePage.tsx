// src/pages/mypage/EditProfilePage.tsx

import ProfileForm from '@/features/mypage/components/ProfileForm/ProfileForm';
import { userMock } from '@/features/mypage/mocks/userMock';
import { useHeader } from '@/shared/contexts/HeaderContext';
import { useEffect } from 'react';

export default function EditProfilePage() {
  const { setConfig } = useHeader();

  useEffect(() => {
    setConfig({
      kind: 'page',
      title: '프로필 편집',
      backTo: '/mypage',
    });
  }, [setConfig]);
  return (
    <div style={{ padding: '16px 0' }}>
      <ProfileForm defaultValues={userMock} onSubmit={() => {}} />
    </div>
  );
}
