// src/shared/query/keys.ts

export const qk = {
  news: (params?: object) => ['news', params] as const,
  newsDetail: (id: number) => ['news', 'detail', id] as const,
  newsLikeList: (page?: number, size?: number, sort?: string) =>
    ['news', 'like', page, size, sort] as const,
  newsLocalList: (page?: number, size?: number, sort?: string) =>
    ['news', 'local', page, size, sort] as const,
  newsInterestList: (page?: number, size?: number, sort?: string) =>
    ['news', 'interest', page, size, sort] as const,
  events: (page?: number, size?: number, sort?: string) => ['events', page, size, sort] as const,
  mypage: (params?: object) => ['mypage', params] as const,
};
