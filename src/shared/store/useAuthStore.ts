// src/shared/store/useAuthStore.ts

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

interface AuthState extends AuthTokens {
  setTokens: (tokens: AuthTokens) => void;
  clearTokens: () => void;
  isLoggedIn: () => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: localStorage.getItem('accessToken') ?? '',
      refreshToken: localStorage.getItem('refreshToken') ?? '',
      setTokens: ({ accessToken, refreshToken }) => {
        set({ accessToken, refreshToken });
        localStorage.setItem('accessToken', accessToken ?? '');
        localStorage.setItem('refreshToken', refreshToken ?? '');
      },
      clearTokens: () => {
        set({ accessToken: '', refreshToken: '' });
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      },
      isLoggedIn: () => get().accessToken !== '',
      logout: () => get().clearTokens(),
    }),
    {
      name: 'auth-storage',
    }
  )
);
