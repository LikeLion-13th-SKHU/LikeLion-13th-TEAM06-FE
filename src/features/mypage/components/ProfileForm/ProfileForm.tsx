// src/features/mypage/components/ProfileForm/ProfileForm.tsx

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileSchema, type ProfileFormData } from '@/shared/validation/profileSchema';
import styles from './ProfileForm.module.scss';
import Button from '@/shared/components/Button/Button';
import TextInputField from '@/shared/components/TextInputField/TextInputField';

export default function ProfileForm({
  defaultValues,
  onSubmit,
  emailEditable = false,
}: {
  defaultValues: ProfileFormData;
  onSubmit: (data: ProfileFormData) => void;
  emailEditable?: boolean;
}) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues,
    resolver: zodResolver(profileSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <TextInputField
        id="nickname"
        label="닉네임"
        placeholder="닉네임을 입력하세요"
        {...register('nickname')}
      />
      <TextInputField
        id="email"
        label="이메일"
        placeholder="example@domain.com"
        disabled={!emailEditable}
        {...register('email')}
      />
      <Button type="submit" variant="solid" stretch disabled={!isValid}>
        저장
      </Button>
    </form>
  );
}
