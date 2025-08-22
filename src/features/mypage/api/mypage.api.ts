// src/features/mypage/api/mypage.api.ts

import instance from '@/shared/api/instance';

// 좋아요 목록 조회
export const getMypageLikes = async (page?: number, size?: number) => {
  let query = '';
  if (page) query += `page=${page}`;
  if (size) query += `&size=${size}`;
  const response = await instance.get(`/news/personalLike${query ? `?${query}` : ''}`);
  return response.data.data;
};

// 댓글 목록 조회
export const getMypageComments = async (page?: number, size?: number) => {
  let query = '';
  if (page) query += `page=${page}`;
  if (size) query += `&size=${size}`;
  const response = await instance.get(`/news/personalComment${query ? `?${query}` : ''}`);
  return response.data.data;
};

// 내 정보 조회
export const getMypageInfo = async () => {
  const response = await instance.get('/api/v1/member/info');
  return response.data.data;
};
