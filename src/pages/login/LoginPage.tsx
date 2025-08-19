import styles from "./LoginPage.module.scss";

// svg 아이콘 import
import kakaoIcon from "@/assets/svg/kakao.svg";
import naverIcon from "@/assets/svg/naver.svg";
import googleIcon from "@/assets/svg/google.svg";

import { useHeader } from "@/shared/contexts/HeaderContext";
import { useEffect } from "react";

export default function LoginPage() {
  // 👉 버튼 클릭 시 각 provider의 OAuth URL로 이동
  const handleKakao = () => {
    const url =
      "https://kauth.kakao.com/oauth/authorize" +
      "?response_type=code" +
      "&client_id=fc6cc12eebbf26edfd0fcf3e53c52589" +
      "&redirect_uri=" + encodeURIComponent("https://book-hub.site/api/v1/login/kakao");
    window.location.href = url;
  };

  const handleNaver = () => {
    const url =
      "https://nid.naver.com/oauth2.0/authorize" +
      "?response_type=code" +
      "&client_id=ZjwZv3xGLhNl2DvyJe0f" +
      "&state=" + Math.random().toString(36).slice(2) + // state 랜덤 생성
      "&redirect_uri=" + encodeURIComponent("https://book-hub.site/api/v1/login/naver");
    window.location.href = url;
  };

  const handleGoogle = () => {
    const url =
      "https://accounts.google.com/o/oauth2/v2/auth" +
      "?client_id=723998638741-gb95nv0u7opsg2hshscinlnbvl1u8g46.apps.googleusercontent.com" +
      "&redirect_uri=" + encodeURIComponent("https://book-hub.site/api/v1/login/google") +
      "&response_type=code" +
      "&scope=" + encodeURIComponent("email profile");
    window.location.href = url;
  };

  const { setConfig } = useHeader();
  
    useEffect(() => {
      setConfig({
        kind: 'none',
      });
    }, [setConfig]);

  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <h1 className={styles.title}>동네링</h1>
        <p className={styles.subtitle}>나만을 위한 맞춤형 뉴스</p>
      </div>

      <div className={styles.bottom}>
        <button type="button" className={styles.btnKakao} onClick={handleKakao}>
          <img src={kakaoIcon} alt="kakao" className={styles.icon} />
          카카오톡으로 로그인
        </button>

        <button type="button" className={styles.btnNaver} onClick={handleNaver}>
          <img src={naverIcon} alt="naver" className={styles.icon} />
          네이버로 로그인
        </button>

        <button type="button" className={styles.btnGoogle} onClick={handleGoogle}>
          <img src={googleIcon} alt="google" className={styles.icon} />
          Google로 로그인
        </button>
      </div>
    </div>
  );
}

