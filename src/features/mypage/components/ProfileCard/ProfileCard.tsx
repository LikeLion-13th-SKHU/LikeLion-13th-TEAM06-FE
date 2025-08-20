// src/features/mypage/components/ProfileCard/ProfileCard.tsx

import type { User } from '../../types/user';
import InterestTags from '../InterestTags/InterestTags';
import styles from './ProfileCard.module.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function ProfileCard({ user }: { user: User }) {
  const navigate = useNavigate();
  const interests = user.interests ?? [];
  const regionText = user.region ?? '-';

  return (
    <section className={styles.card}>
      <button className={styles.avatarBtn} aria-label="프로필 이미지 변경">
        <img src={user.avatarUrl} alt="프로필 이미지" />
      </button>
      <div className={styles.info}>
        <div className={styles.nameRow}>
          <strong className={styles.name}>{user.nickname}</strong>
          <button className={styles.editBtn} onClick={() => navigate('/mypage/edit-profile')}>
            프로필 편집
          </button>
        </div>
        <div className={styles.line}>
          <span className={styles.label}>지역</span>
          <span className={styles.value}>{regionText}</span>
        </div>
        <div className={styles.line}>
          <span className={styles.label}>관심사</span>
          <div className={styles.value}>
            {interests.length ? (
              <InterestTags
                items={interests}
                maxVisible={6}
                onClickMore={() => {
                  navigate('/mypage/edit-interests');
                }}
              />
            ) : (
              <span className={styles.placeholder}>관심사를 설정해주세요</span>
            )}
          </div>
        </div>

        <Link to={'/mypage/edit-interests'} className={styles.editLink}>
          관심사 및 지역 편집하기
        </Link>
      </div>
    </section>
  );
}
