// src/features/news/types/comment.ts

export type Comment = {
  id: string;
  nickname: string;
  avatarUrl?: string;
  content: string;
  userId: string;
  createdAt: string;
};
