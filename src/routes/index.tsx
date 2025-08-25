// src/routes/index.tsx
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import NewsMoreHotPage from "@/pages/news/NewsMoreHotPage";
import NewsMoreForYouPage from "@/pages/news/NewsMoreForYouPage";
import NewsMoreLocalPage from "@/pages/news/NewsMoreLocalPage";
import NewsDetailPage from "@/pages/news/NewsDetailPage";
import EventsMore from "@/pages/events/EventsMorePage";

import MyPage from "@/pages/mypage/MyPage";
import EditProfilePage from "@/pages/mypage/EditProfilePage";
import EditInterestPage from "@/pages/mypage/EditPreferencePage";

import LoginPage from "@/pages/login/LoginPage";
import AuthCallback from "@/pages/auth/AuthCallback";

// 온보딩 페이지들 import
import OnBoardingPage from "@/pages/onboarding/OnBoardingPage";
import ResidencePage from "@/pages/onboarding/ResidencePage";
import InterestsPage from "@/pages/onboarding/InterestsPage";
import FinishPage from "@/pages/onboarding/FinishPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* 뉴스 */}
      <Route path="/news/hot" element={<NewsMoreHotPage />} />
      <Route path="/news/for-you" element={<NewsMoreForYouPage />} />
      <Route path="/news/local" element={<NewsMoreLocalPage />} />
      <Route path="/news/:id" element={<NewsDetailPage />} />

      {/* 이벤트 */}
      <Route path="/events" element={<EventsMore />} />

      {/* 마이페이지 */}
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/edit-profile" element={<EditProfilePage />} />
      <Route path="/mypage/edit-interests" element={<EditInterestPage />} />

      {/* 인증 */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/oauth/:provider" element={<AuthCallback />} />

      {/* 온보딩 */}
      <Route path="/onboarding">
        {/* /onboarding 으로 들어오면 dob로 리다이렉트 */}
        <Route index element={<Navigate to="dob" replace />} />
        <Route path="dob" element={<OnBoardingPage />} />
        <Route path="residence" element={<ResidencePage />} />
        <Route path="interests" element={<InterestsPage />} />
        <Route path="finish" element={<FinishPage />} />
      </Route>

      {/* 404 fallback */}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}