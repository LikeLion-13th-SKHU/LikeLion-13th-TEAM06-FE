// src/routes/index.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import NewsMoreHotPage from '@/pages/news/NewsMoreHotPage';
import NewsMoreForYouPage from '@/pages/news/NewsMoreForYouPage';
import NewsMoreLocalPage from '@/pages/news/NewsMoreLocalPage';
import NewsDetailPage from '@/pages/news/NewsDetailPage';
import EventsMore from '@/pages/events/EventsMorePage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/news/hot" element={<NewsMoreHotPage />} />
      <Route path="/news/for-you" element={<NewsMoreForYouPage />} />
      <Route path="/news/local" element={<NewsMoreLocalPage />} />
      <Route path="/news/:id" element={<NewsDetailPage />} />
      <Route path="/events" element={<EventsMore />} />
    </Routes>
  );
}
