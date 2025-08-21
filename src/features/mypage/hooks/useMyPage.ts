// src/features/mypage/hooks/useMyPage.ts

import { useOffsetInfinite } from '@/shared/hooks/useInfinityQuery';
import { getMypageComments, getMypageLikes } from '../api/mypage.api';

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
