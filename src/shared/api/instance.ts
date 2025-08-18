// src/shared/api/instance.ts

import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use((config) => {
  // const token = localStorage.getItem('accessToken');
  // 임시로 토큰 추가
  const token = import.meta.env.VITE_TEMPORARY_TOKEN;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
