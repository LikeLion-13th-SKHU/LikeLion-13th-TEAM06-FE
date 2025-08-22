// src/features/mypage/mocks/userMock.ts

import type { RegionCode } from '@/shared/constants/region';
import type { User } from '../types/user';

export const userMock: User = {
  age: 20,
  nickname: 'test',
  memberPictureUrl: 'https://i.redd.it/m06ssnmxbg2e1.png',
  profileCompleted: true,
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
  location: '서울' as RegionCode,
};
