// UI 라벨 → 서버 코드
export const UI_TO_CODE: Record<string, string> = {
  "정책/정부": "POLICY_GOVERNMENT",
  "산업/기업": "INDUSTRY_COMPANY",
  "연구/기술": "RESEARCH_TECH",
  "규제/제도": "REGULATION_SYSTEM",
  "수출/글로벌": "EXPORT_GLOBAL",
  "투자/금융": "INVEST_FINANCE",
  "인사/조직": "HR_ORG",
  "사회": "SOCIETY",
  "기타": "ETC",
};

// 서버 코드 → UI 라벨
export const CODE_TO_UI: Record<string, string> = Object.fromEntries(
  Object.entries(UI_TO_CODE).map(([label, code]) => [code, label])
);

// UI에서 선택할 때 보여줄 라벨 리스트
export const INTEREST_LABELS: string[] = Object.keys(UI_TO_CODE);
