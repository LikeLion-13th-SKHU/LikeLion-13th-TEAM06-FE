// src/features/news/mocks/commentsMock.ts

import type { Comment } from '@/features/news/types/comment';

export const commentsMock: Comment[] = [
  {
    id: '1',
    nickname: '나',
    userId: 'me',
    content: '댓글 1',
    createdAt: '2025-01-01',
  },
];
