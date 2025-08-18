// src/shared/api/paging.ts

// src/shared/api/paging.ts
export type SpringPage<T> = {
  content: T[];
  number: number; // 현재 페이지 (0-based일 수도 있음: 서버 확인)
  size: number;
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  empty: boolean;
};

export function getHasNextPage<T>(page: SpringPage<T>) {
  // 서버가 last=true/false를 주므로 그걸 최우선으로
  if (typeof page.last === 'boolean') return !page.last;
  // 보조: totalPages 기준
  if (typeof page.totalPages === 'number') {
    const next = page.number + 1;
    return next < page.totalPages;
  }
  // 최후: content 길이로 추정
  return (page.content?.length ?? 0) >= (page.size || 0);
}
