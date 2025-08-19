// src/features/mypage/pages/MyPageHome.tsx

import { userMock } from '../mocks/userMock';
import ProfileCard from '../components/ProfileCard/ProfileCard';

export default function MyPageHome() {
  return (
    <div>
      <ProfileCard user={userMock} onEdit={() => {}} />
    </div>
  );
}
