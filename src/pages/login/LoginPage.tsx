// src/pages/login/LoginPage.tsx
import styles from './LoginPage.module.scss';
import kakaoIcon from '@/assets/svg/kakao.svg';
import naverIcon from '@/assets/svg/naver.svg';
import googleIcon from '@/assets/svg/google.svg';
import { useHeader } from '@/shared/contexts/HeaderContext';
import { useEffect, useRef } from 'react';

const REDIRECT_URI = import.meta.env.VITE_API_REDIRECT_URI;
const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;

const genState = () => Math.random().toString(36).slice(2);

export default function LoginPage() {
  const { setConfig } = useHeader();
  const busyRef = useRef(false);

  const go = (href: string) => {
    if (busyRef.current) return;
    busyRef.current = true;
    window.location.href = href;
  };

  const handleNaver = () => {
    const url = new URL('https://nid.naver.com/oauth2.0/authorize');
    url.search = new URLSearchParams({
      response_type: 'code',
      client_id: NAVER_CLIENT_ID,
      redirect_uri: `${REDIRECT_URI}/oauth/naver`,
      state: genState(),
    }).toString();
    go(url.toString());
  };

  const handleGoogle = () => {
    const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
    url.search = new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      redirect_uri: `${REDIRECT_URI}/oauth/google`,
      response_type: 'code',
      scope: 'email profile',
      access_type: 'offline',
      include_granted_scopes: 'true',
      state: genState(),
    }).toString();
    go(url.toString());
  };

  const handleKakao = () => {
    const url = new URL('https://kauth.kakao.com/oauth/authorize');
    url.search = new URLSearchParams({
      response_type: 'code',
      client_id: KAKAO_CLIENT_ID,
      redirect_uri: `${REDIRECT_URI}/oauth/kakao`,
      state: genState(),
    }).toString();
    go(url.toString());
  };

  useEffect(() => {
    setConfig({ kind: 'none' });
  }, [setConfig]);

  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <h1 className={styles.title}>동네링</h1>
        <p className={styles.subtitle}>나만을 위한 맞춤형 뉴스</p>
      </div>

      <div className={styles.bottom}>
        <button
          type="button"
          className={styles.btnKakao}
          onClick={handleKakao}
          aria-label="카카오로 로그인"
        >
          <img src={kakaoIcon} alt="" className={styles.icon} aria-hidden />
          카카오톡으로 로그인
        </button>

        <button
          type="button"
          className={styles.btnNaver}
          onClick={handleNaver}
          aria-label="네이버로 로그인"
        >
          <img src={naverIcon} alt="" className={styles.icon} aria-hidden />
          네이버로 로그인
        </button>

        <button
          type="button"
          className={styles.btnGoogle}
          onClick={handleGoogle}
          aria-label="Google로 로그인"
        >
          <img src={googleIcon} alt="" className={styles.icon} aria-hidden />
          Google로 로그인
        </button>
      </div>
    </div>
  );
}
