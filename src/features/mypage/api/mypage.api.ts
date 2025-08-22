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

// 프로필 편집
export const editMypageProfile = async (data: { nickname: string; email: string }) => {
  const response = await instance.put('/api/v1/member/profile', data);
  return response.data.data;
};

// 관심사 편집
export const editMypageInterests = async (data: { location: string; interests: string[] }) => {
  const response = await instance.put('/api/v1/member/interest', data);
  return response.data.data;
};
