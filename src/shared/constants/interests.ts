// src/shared/constants/interests.ts

export const INTERESTS = {
  POLICY_GOVERNMENT: {
    code: 'POLICY_GOVERNMENT',
    label: '정책/정부',
    emoji: '🏛️',
  },
  INDUSTRY_COMPANY: {
    code: 'INDUSTRY_COMPANY',
    label: '산업/기업',
    emoji: '🏭',
  },
  RESEARCH_TECHNOLOGY: {
    code: 'RESEARCH_TECHNOLOGY',
    label: '연구/기술',
    emoji: '🔬',
  },
  REGULATION_SYSTEM: {
    code: 'REGULATION_SYSTEM',
    label: '규제/제도',
    emoji: '⚖️',
  },
  EXPORT_GLOBAL: {
    code: 'EXPORT_GLOBAL',
    label: '수출/글로벌',
    emoji: '🌍',
  },
  INVESTMENT_FINANCE: {
    code: 'INVESTMENT_FINANCE',
    label: '투자/금융',
    emoji: '💰',
  },
  HR_ORGANIZATION: {
    code: 'HR_ORGANIZATION',
    label: '인사/조직',
    emoji: '👥',
  },
  SOCIETY: {
    code: 'SOCIETY',
    label: '사회',
    emoji: '🌐',
  },
  OTHERS: {
    code: 'OTHERS',
    label: '기타',
    emoji: '📌',
  },
} as const;

export type InterestKey = keyof typeof INTERESTS;
export type Interest = (typeof INTERESTS)[InterestKey];
