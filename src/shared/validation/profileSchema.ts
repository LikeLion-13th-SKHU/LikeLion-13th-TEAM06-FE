// src/shared/validation/profileSchema.ts

import { z } from 'zod';

export const profileSchema = z.object({
  nickname: z.string().min(2, '닉네임은 최소 2자 이상이어야 합니다.'),
  email: z.email('올바른 이메일 형식이어야 합니다.'),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
