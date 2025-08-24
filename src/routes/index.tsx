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
      <Route path="/oauth/:provider" element={<AuthCallback />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
