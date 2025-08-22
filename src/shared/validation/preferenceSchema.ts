// src/shared/validation/preferenceSchema.ts

import { z } from 'zod';
import { INTERESTS } from '../constants/interests';

export const preferencesSchema = z.object({
  location: z.string().min(1, '지역을 선택해주세요'),
  interests: z
    .array(z.enum([...Object.values(INTERESTS).map((interest) => interest.code)]))
    .min(1, '관심사를 최소 1개 이상 선택해주세요'),
});
export type PreferencesFormData = z.infer<typeof preferencesSchema>;
