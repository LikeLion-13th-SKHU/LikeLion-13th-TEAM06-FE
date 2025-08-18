// src/features/events/api/events.api.ts

import instance from '@/shared/api/instance';

// 우리동네 행사/전시 목록 조회
export const getEvents = async (page?: number, size?: number, sort?: string) => {
  let query = '';
  if (page) query += `page=${page}`;
  if (size) query += `&size=${size}`;
  if (sort) query += `&sort=${sort}`;

  const response = await instance.get(`/art/all${query ? `?${query}` : ''}`);
  return response.data.data;
};
