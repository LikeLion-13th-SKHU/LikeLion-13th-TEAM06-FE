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
}: {
  defaultValues: ProfileFormData;
  onSubmit: (data: ProfileFormData) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
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
        error={errors.nickname?.message}
        {...register('nickname')}
      />
      <TextInputField
        id="email"
        label="이메일"
        placeholder="example@domain.com"
        error={errors.email?.message}
        {...register('email')}
      />
      <Button type="submit" variant="solid" stretch disabled={!isValid}>
        저장
      </Button>
    </form>
  );
}
