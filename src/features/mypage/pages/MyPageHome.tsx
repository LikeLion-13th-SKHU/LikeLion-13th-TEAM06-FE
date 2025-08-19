// src/features/mypage/pages/MyPageHome.tsx

import { userMock } from '../mocks/userMock';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import MyPageTabs from '../components/MyPageTabs/MyPageTabs';

export default function MyPageHome() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ProfileCard user={userMock} onEdit={() => {}} />
      <MyPageTabs />
    </div>
  );
}
