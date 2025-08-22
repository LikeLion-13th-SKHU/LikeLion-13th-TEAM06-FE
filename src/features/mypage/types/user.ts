// src/features/mypage/types/user.ts

import type { InterestKey } from '@/shared/constants/interests';
import type { RegionCode } from '@/shared/constants/region';

export type User = {
  age: number;
  interests: InterestKey[];
  location: RegionCode;
  memberPictureUrl: string;
  nickname: string;
  profileCompleted: boolean;
};
