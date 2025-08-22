// src/features/mypage/pages/MyPageHome.tsx

import ProfileCard from '../components/ProfileCard/ProfileCard';
import MyPageTabs from '../components/MyPageTabs/MyPageTabs';
import LikesList from '../components/lists/LikesList/LikesList';
import CommentsList from '../components/lists/CommentsList/CommentsList';
import { useSearchParams } from 'react-router-dom';
import { useMyPageInfo } from '../hooks/useMyPage';

export default function MyPageHome() {
  const [sp, setSp] = useSearchParams();
  const tab = (sp.get('tab') === 'comments' ? 'comments' : 'likes') as 'likes' | 'comments';

  const { data: user, isLoading } = useMyPageInfo();
  if (isLoading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ProfileCard user={user} />
      <MyPageTabs
        value={tab}
        onChange={(tab) => {
          const nextSp = new URLSearchParams(sp);
          nextSp.set('tab', tab);
          setSp(nextSp, { replace: true });
        }}
      />
      {tab === 'likes' && <LikesList />}
      {tab === 'comments' && <CommentsList />}
    </div>
  );
}
