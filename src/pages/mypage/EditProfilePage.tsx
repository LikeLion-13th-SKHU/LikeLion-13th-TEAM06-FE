// src/pages/mypage/EditProfilePage.tsx

import ProfileForm from '@/features/mypage/components/forms/ProfileForm/ProfileForm';
import { useHeader } from '@/shared/contexts/HeaderContext';
import { useEffect } from 'react';
import { useEditMypageProfile, useMyPageInfo } from '@/features/mypage/hooks/useMyPage';
import { useToast } from '@/shared/contexts/ToastContext';
import { useNavigate } from 'react-router-dom';

export default function EditProfilePage() {
  const { setConfig } = useHeader();
  const toast = useToast();
  const navigate = useNavigate();
  const { data: user, isLoading, isError } = useMyPageInfo();

  const edit = useEditMypageProfile({
    onSuccess: () => {
      toast.success('프로필이 성공적으로 업데이트되었습니다.');
      navigate('/mypage');
    },
    onError: () => {
      toast.error('프로필 업데이트에 실패했습니다.');
    },
  });

  useEffect(() => {
    setConfig({
      kind: 'page',
      title: '프로필 편집',
      backTo: '/mypage',
    });
  }, [setConfig]);

  // 추후 로딩 컴포넌트 추가
  if (isLoading) return <div style={{ padding: 16 }}>로딩중…</div>;
  if (isError) return <div style={{ padding: 16 }}>내 정보를 불러오지 못했어요.</div>;
  if (!user) return <div style={{ padding: 16 }}>내 정보를 불러오지 못했어요.</div>;

  if (edit.isError) return <div style={{ padding: 16 }}>내 정보를 불러오지 못했어요.</div>;

  if (!user) return <div style={{ padding: 16 }}>내 정보를 불러오지 못했어요.</div>;

  return (
    <div style={{ padding: '16px 0' }}>
      <ProfileForm defaultValues={user} onSubmit={(values) => edit.mutate(values)} />
    </div>
  );
}
