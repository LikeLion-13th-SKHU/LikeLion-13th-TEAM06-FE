// src/features/mypage/components/PreferenceForm/PreferenceForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { preferencesSchema, type PreferencesFormData } from '@/shared/validation/preferenceSchema';
import { INTERESTS, type InterestKey } from '@/shared/constants/interests';
import InterestChip from './InterestChip/InterestChip';
import Button from '@/shared/components/Button/Button';
import styles from './PreferenceForm.module.scss';
import RegionSelector from './RegionSelector/RegionSelector';

export default function PreferenceForm({
  defaultValues,
  onSubmit,
}: {
  defaultValues: PreferencesFormData;
  onSubmit: (data: PreferencesFormData) => void;
}) {
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<PreferencesFormData>({
    defaultValues,
    resolver: zodResolver(preferencesSchema),
  });

  const interests = watch('interests');
  const region = watch('regionCode');

  // 관심사 토글
  const toggleInterest = (code: InterestKey) => {
    const set = new Set(interests);
    if (set.has(code)) {
      set.delete(code);
    } else {
      set.add(code);
    }
    setValue('interests', Array.from(set), { shouldDirty: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <section className={styles.section}>
        <h3 className={styles.title}>관심 지역</h3>
        <RegionSelector
          value={region}
          onChange={(code) => setValue('regionCode', code, { shouldDirty: true })}
        />
        {errors.regionCode && <p className={styles.error}>{errors.regionCode.message}</p>}
      </section>

      <section className={styles.section}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>관심사</h3>
        </div>

        <div className={styles.chips}>
          {Object.values(INTERESTS).map((it) => (
            <InterestChip
              key={it.code}
              selected={interests.includes(it.code)}
              label={`${it.emoji} ${it.label}`}
              onClick={() => toggleInterest(it.code)}
            />
          ))}
        </div>
        {errors.interests && <p className={styles.error}>{errors.interests.message}</p>}
      </section>

      <div className={styles.footer}>
        <Button type="submit" disabled={!isDirty || isSubmitting} stretch>
          저장
        </Button>
      </div>
    </form>
  );
}
