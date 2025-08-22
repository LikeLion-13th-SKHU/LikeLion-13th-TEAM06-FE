// src/features/mypage/hooks/useMyPage.ts

import { useOffsetInfinite } from '@/shared/hooks/useInfinityQuery';
import { getMypageComments, getMypageInfo, getMypageLikes } from '../api/mypage.api';
import { qk } from '@/shared/query/keys';
import { useQuery } from '@tanstack/react-query';

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
