// src/features/mypage/pages/MyPageHome.tsx

import { userMock } from '../mocks/userMock';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import MyPageTabs from '../components/MyPageTabs/MyPageTabs';
import LikesList from '../components/LikesList/LikesList';
import CommentsList from '../components/CommentsList/CommentsList';
import { useSearchParams } from 'react-router-dom';

export default function MyPageHome() {
  const [sp, setSp] = useSearchParams();
  const tab = (sp.get('tab') === 'comments' ? 'comments' : 'likes') as 'likes' | 'comments';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ProfileCard user={userMock} onEdit={() => {}} />
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
