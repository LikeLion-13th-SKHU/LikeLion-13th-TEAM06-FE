// src/features/mypage/mocks/userMock.ts

import type { RegionCode } from '@/shared/constants/region';
import type { User } from '../types/user';

export const userMock: User = {
  id: 1,
  nickname: 'test',
  email: 'test@test.com',
  avatarUrl: 'https://i.redd.it/m06ssnmxbg2e1.png',
  likeCount: 0,
  commentCount: 0,
  interests: [
    'POLICY_GOVERNMENT',
    'INDUSTRY_COMPANY',
    'RESEARCH_TECHNOLOGY',
    'REGULATION_SYSTEM',
    'EXPORT_GLOBAL',
    'INVESTMENT_FINANCE',
    'HR_ORGANIZATION',
    'SOCIETY',
    'OTHERS',
  ],
  region: '서울' as RegionCode,
};
