import styles from "./LoginPage.module.scss";

// SVG 경로: src/assets/svg/*
import kakaoIcon from "@/assets/svg/kakao.svg";
import naverIcon from "@/assets/svg/naver.svg";
import googleIcon from "@/assets/svg/google.svg";
import { useHeader } from "@/shared/contexts/HeaderContext";
import { useEffect } from "react";

export default function LoginPage() {
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
        <button type="button" className={styles.btnKakao}>
          <img src={kakaoIcon} alt="kakao" className={styles.icon} />
          카카오로 로그인
        </button>

        <button type="button" className={styles.btnNaver}>
          <img src={naverIcon} alt="naver" className={styles.icon} />
          네이버로 로그인
        </button>

        <button type="button" className={styles.btnGoogle}>
          <img src={googleIcon} alt="google" className={styles.icon} />
          Google로 로그인
        </button>
      </div>
    </div>
  );
}
