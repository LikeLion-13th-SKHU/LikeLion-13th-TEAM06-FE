// src/features/mypage/mocks/userMock.ts

import type { User } from '../types/user';

export const userMock: User = {
  id: 1,
  nickname: 'test',
  email: 'test@test.com',
  avatarUrl: 'https://i.redd.it/m06ssnmxbg2e1.png',
  likeCount: 0,
  commentCount: 0,
  interests: [
    'test',
    'test2',
    'test3',
    'test4',
    'test5',
    'test6',
    'test7',
    'test8',
    'test9',
    'test10',
  ],
  region: '서울',
};
