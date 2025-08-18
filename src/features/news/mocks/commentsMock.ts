// src/features/news/mocks/commentsMock.ts

import type { NewsComment } from '@/features/news/types/news';

export const commentsMock: NewsComment[] = [
  {
    newsCommentId: 1,
    memberName: '나',
    memberImageUrl: 'https://i.redd.it/m06ssnmxbg2e1.png',
    content: '댓글 1',
  },
];
