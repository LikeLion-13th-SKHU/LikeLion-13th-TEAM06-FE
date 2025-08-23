// src/pages/auth/AuthCallback.tsx
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

const BASE = import.meta.env.VITE_BASE_URL;

// 백엔드 코드 교환용 API 경로
const EXCHANGE_PATH: Record<string, string> = {
  google: "/api/v1/login/google",
  naver:  "/api/v1/login/naver",
  kakao:  "/api/v1/login/kakao",
};

const REDIRECT_BASE = import.meta.env.VITE_API_REDIRECT_URI;

const REDIRECT_URI: Record<string, string> = {
  google: `${REDIRECT_BASE}/google`,
  naver:  `${REDIRECT_BASE}/naver`,
  kakao:  `${REDIRECT_BASE}/kakao`,
};

export default function AuthCallback() {
  const { provider = "" } = useParams();
  const [params] = useSearchParams();
  const nav = useNavigate();
  const [msg, setMsg] = useState("로그인 처리 중...");

  useEffect(() => {
    const code = params.get("code");
    const state = params.get("state");
    const path = EXCHANGE_PATH[provider];
    const redirectUri = REDIRECT_URI[provider]; // provider별 redirectUri

    if (!code || !path || !redirectUri) {
      setMsg("잘못된 접근입니다.");
      setTimeout(() => nav("/login", { replace: true }), 1000);
      return;
    }

    console.log(`AuthCallback useEffect 실행! provider=${provider} code=${code}`);

    (async () => {
      try {
        const res = await axios.get(`${BASE}${path}`, {
          params: {
            code,
            redirectUri,
            state,
          },
        });

        const data = res.data.data;
        if (!data?.accessToken) throw new Error("토큰이 없습니다.");

        localStorage.setItem("accessToken", data.accessToken);
        if (data.refreshToken) localStorage.setItem("refreshToken", data.refreshToken);

        if (data.profileCompleted) {
          setMsg("로그인 성공! 홈으로 이동합니다...");
          setTimeout(() => nav("/", { replace: true }), 600);
        } else {
          setMsg("추가 정보가 필요합니다. 프로필 설정 페이지로 이동합니다...");
          setTimeout(() => nav("/onboarding", { replace: true }), 600);
        }
      } catch (e: any) {
        setMsg(
          e?.response?.data?.message ??
          e?.message ??
          "로그인에 실패했습니다. 다시 시도해 주세요."
        );
        setTimeout(() => nav("/login", { replace: true }), 1200);
      }
    })();
  }, [params, provider, nav]);

  return <div style={{ padding: 24 }}>{msg}</div>;
}
