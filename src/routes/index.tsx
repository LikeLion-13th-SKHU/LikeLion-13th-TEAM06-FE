// src/routes/index.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import NewsMoreHotPage from '@/pages/news/NewsMoreHotPage';
import NewsMoreForYouPage from '@/pages/news/NewsMoreForYouPage';
import NewsMoreLocalPage from '@/pages/news/NewsMoreLocalPage';
import NewsDetailPage from '@/pages/news/NewsDetailPage';
import EventsMore from '@/pages/events/EventsMorePage';
import MyPage from '@/pages/mypage/MyPage';
import EditProfilePage from '@/pages/mypage/EditProfilePage';
import EditInterestPage from '@/pages/mypage/EditPreferencePage';
import LoginPage from '@/pages/login/LoginPage';
import OnBoardingPage from '@/pages/onboarding/OnBoardingPage';
import AuthCallback from '@/pages/auth/AuthCallback';
import RegionPage from '@/pages/onboarding/RegionPage';
import RegionSelectPage from '@/pages/onboarding/RegionSelectPage';
import InterestsPage from '@/pages/onboarding/InterestsPage';
import FinishPage from '@/pages/onboarding/FinishPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/news/hot" element={<NewsMoreHotPage />} />
      <Route path="/news/for-you" element={<NewsMoreForYouPage />} />
      <Route path="/news/local" element={<NewsMoreLocalPage />} />
      <Route path="/news/:id" element={<NewsDetailPage />} />
      <Route path="/events" element={<EventsMore />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/edit-profile" element={<EditProfilePage />} />
      <Route path="/mypage/edit-interests" element={<EditInterestPage />} />
      <Route path="/onboarding" element={<OnBoardingPage />} />
      <Route path='/oauth/:provider' element={<AuthCallback />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/onboarding" element={<OnBoardingPage />} />         {/* 생년월일 */}
      <Route path="/onboarding/region" element={<RegionPage />} />
      <Route path="/onboarding/region/select" element={<RegionSelectPage />} />
      <Route path="/onboarding/interests" element={<InterestsPage />} />
      <Route path="/onboarding/finish" element={<FinishPage />} />
    </Routes>
  );
}
