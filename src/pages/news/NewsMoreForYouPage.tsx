// src/pages/news/NewsMoreHotPage.tsx

import NewsMore from '@/features/news/pages/NewsMore';
import { useMyPageInfo } from '@/features/mypage/hooks/useMyPage';

export default function NewsMoreForYouPage() {
  const { data: user } = useMyPageInfo();
  if (!user) return <div>User not found</div>;

  return <NewsMore title={`💡 ${user.nickname}님 맞춤형 소식`} section="for-you" />;
}
