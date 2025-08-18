// src/features/news/hooks/useNews.ts

import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getNewsDetail,
  getNewsInterestList,
  getNewsLikeList,
  getNewsLocalList,
  postNewsComment,
} from '../api/news.api';
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

// 뉴스 좋아요순 조회
export function useNewsLikeList(page?: number, size?: number, sort?: string) {
  return useQuery({
    queryKey: qk.newsLikeList(page, size, sort),
    queryFn: () => getNewsLikeList(page, size, sort),
    staleTime: 60_000,
  });
}

// 뉴스 지역별 + 관심사별 조회
export function useNewsLocalList(page?: number, size?: number, sort?: string) {
  return useQuery({
    queryKey: qk.newsLocalList(page, size, sort),
    queryFn: () => getNewsLocalList(page, size, sort),
    staleTime: 60_000,
  });
}

// 뉴스 관심사별 조회
export function useNewsInterestList(page?: number, size?: number, sort?: string) {
  return useQuery({
    queryKey: qk.newsInterestList(page, size, sort),
    queryFn: () => getNewsInterestList(page, size, sort),
    staleTime: 60_000,
  });
}
