// src/pages/mypage/EditPreferencePage.tsx

import { useHeader } from '@/shared/contexts/HeaderContext';
import { useEffect } from 'react';
import PreferenceForm from '@/features/mypage/components/forms/PreferenceForm/PreferenceForm';
import { useEditMypageInterests, useMyPageInfo } from '@/features/mypage/hooks/useMyPage';
import { useToast } from '@/shared/contexts/ToastContext';
import { useNavigate } from 'react-router-dom';

export default function EditPreferencePage() {
  const { setConfig } = useHeader();
  const toast = useToast();
  const navigate = useNavigate();

  const { data: user, isLoading, isError } = useMyPageInfo();
  const edit = useEditMypageInterests({
    onSuccess: () => {
      toast.success('관심사가 성공적으로 업데이트되었습니다.');
      navigate('/mypage');
    },
    onError: () => {
      toast.error('관심사 업데이트에 실패했습니다.');
    },
  });

  useEffect(() => {
    setConfig({
      kind: 'page',
      title: '관심사 및 지역 편집',
      backTo: '/mypage',
    });
  }, [setConfig]);

  return (
    <div style={{ padding: '16px 0' }}>
      {isLoading && <div>로딩중…</div>}
      {!isLoading && (isError || !user) && <div>내 정보를 불러오지 못했어요.</div>}
      {!isLoading && user && (
        <PreferenceForm defaultValues={user} onSubmit={(v) => edit.mutate(v)} />
      )}
    </div>
  );
}
