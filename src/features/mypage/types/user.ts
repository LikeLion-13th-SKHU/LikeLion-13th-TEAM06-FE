// src/features/mypage/types/user.ts

import type { RegionCode } from '@/shared/constants/region';
import type { InterestKey } from '@/shared/constants/interests';

export type User = {
  id: number;
  nickname: string;
  email: string;
  avatarUrl: string;
  likeCount: number;
  commentCount: number;
  interests?: InterestKey[];
  region?: RegionCode;
};
