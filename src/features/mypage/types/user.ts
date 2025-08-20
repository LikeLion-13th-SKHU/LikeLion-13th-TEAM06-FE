// src/features/mypage/types/user.ts

export type User = {
  id: number;
  nickname: string;
  email: string;
  avatarUrl: string;
  likeCount: number;
  commentCount: number;
  interests?: string[];
  region?: string;
};
