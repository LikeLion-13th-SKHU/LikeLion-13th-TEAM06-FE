// src/features/news/hooks/useNews.ts

import { useQuery } from '@tanstack/react-query';
import { getNewsDetail } from '../api/news.api';
import { qk } from '@/shared/query/keys';

export function useNewsDetail(id: number) {
  return useQuery({
    queryKey: qk.newsDetail(id),
    queryFn: () => getNewsDetail(id),
    staleTime: 60_000,
  });
}
