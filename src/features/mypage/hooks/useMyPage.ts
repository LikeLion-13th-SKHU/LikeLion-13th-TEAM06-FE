// src/features/mypage/hooks/useMyPage.ts

import { useOffsetInfinite } from '@/shared/hooks/useInfinityQuery';
import {
  getMypageComments,
  getMypageInfo,
  getMypageLikes,
  editMypageProfile,
  editMypageInterests,
} from '../api/mypage.api';
import { qk } from '@/shared/query/keys';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '@/shared/query/client';

// 좋아요 목록 조회
export function useMyPageLikesInfinite(size?: number) {
  return useOffsetInfinite({
    queryKey: ['mypage', 'likes'],
    fetchPage: ({ page, size }) => getMypageLikes(page, size),
    size: size || 20,
    startPage: 0,
    staleTime: 60_000,
    params: {},
  });
}

// 댓글 목록 조회
export function useMyPageCommentsInfinite(size?: number) {
  return useOffsetInfinite({
    queryKey: ['mypage', 'comments'],
    fetchPage: ({ page, size }) => getMypageComments(page, size),
    size: size || 20,
    startPage: 0,
    staleTime: 60_000,
    params: {},
  });
}

// 내 정보 조회
export function useMyPageInfo() {
  return useQuery({
    queryKey: qk.mypage(),
    queryFn: getMypageInfo,
  });
}

type EditOpts = {
  onSuccess?: (data: unknown, vars: unknown, ctx: unknown) => void;
  onError?: (err: unknown, vars: unknown, ctx: unknown) => void;
};

// 프로필 편집
export function useEditMypageProfile(opts?: EditOpts) {
  return useMutation({
    mutationFn: editMypageProfile,
    onSuccess: (data, vars, ctx) => {
      queryClient.invalidateQueries({ queryKey: qk.mypage() });
      opts?.onSuccess?.(data, vars, ctx);
    },
    onError: (error, vars, ctx) => {
      opts?.onError?.(error, vars, ctx);
    },
  });
}

// 관심사 편집
export function useEditMypageInterests(opts?: EditOpts) {
  return useMutation({
    mutationFn: editMypageInterests,
    onSuccess: (data, vars, ctx) => {
      queryClient.invalidateQueries({ queryKey: qk.mypage() });
      opts?.onSuccess?.(data, vars, ctx);
    },
    onError: (error, vars, ctx) => {
      opts?.onError?.(error, vars, ctx);
    },
  });
}
