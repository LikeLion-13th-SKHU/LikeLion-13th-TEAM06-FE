// src/routes/index.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import NewsMoreHotPage from '@/pages/news/NewsMoreHotPage';
import NewsMoreForYouPage from '@/pages/news/NewsMoreForYouPage';
import NewsMoreLocalPage from '@/pages/news/NewsMoreLocalPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news/hot" element={<NewsMoreHotPage />} />
        <Route path="/news/for-you" element={<NewsMoreForYouPage />} />
        <Route path="/news/local" element={<NewsMoreLocalPage />} />
      </Routes>
    </BrowserRouter>
  );
}
