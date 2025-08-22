// src/features/news/types/comment.ts

export type Comment = {
  newsCommentId: number;
  memberName: string;
  content: string;
  memberImageUrl: string;
  isMyComment: boolean;
};
