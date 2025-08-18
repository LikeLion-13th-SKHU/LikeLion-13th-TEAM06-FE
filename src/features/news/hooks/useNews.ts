// src/features/news/hooks/useNews.ts

import { useMutation, useQuery } from '@tanstack/react-query';
import { getNewsDetail, postNewsComment } from '../api/news.api';
import { qk } from '@/shared/query/keys';
import { queryClient } from '@/shared/query/client';

export function useNewsDetail(id: number) {
  return useQuery({
    queryKey: qk.newsDetail(id),
    queryFn: () => getNewsDetail(id),
    staleTime: 60_000,
  });
}

export function useNewsCommentCreate(id: number) {
  return useMutation({
    mutationFn: (comment: string) => postNewsComment(id, comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: qk.newsDetail(id) });
    },
  });
}
