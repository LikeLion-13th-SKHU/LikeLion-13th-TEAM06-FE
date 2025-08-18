// src/features/news/api/news.api.ts

import instance from '@/shared/api/instance';

// 뉴스 단일 조회
export const getNewsDetail = async (id: number) => {
  const response = await instance.get(`/news/${id}`);
  return response.data.data;
};

// 뉴스 전체 목록 조회
export const getNewsList = async () => {
  const response = await instance.get('/news/all');
  return response.data;
};

// 뉴스 댓글 생성
export const postNewsComment = async (id: number, comment: string) => {
  const response = await instance.post(`/newsComment`, { newsId: id, content: comment });
  return response.data;
};

// 뉴스 댓글 삭제
export const deleteNewsComment = async (id: number) => {
  const response = await instance.delete(`/newsComment/${id}`);
  return response.data;
};
