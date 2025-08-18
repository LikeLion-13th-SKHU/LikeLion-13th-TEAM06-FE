// src/shared/query/keys.ts

export const qk = {
  news: (params?: object) => ['news', params] as const,
  newsDetail: (id: number) => ['news', 'detail', id] as const,
  events: (params?: object) => ['events', params] as const,
};
