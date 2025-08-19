// src/features/mypage/components/ProfileCard/ProfileCard.tsx

import type { User } from '../../types/user';
import styles from './ProfileCard.module.scss';

export default function ProfileCard({ user, onEdit }: { user: User; onEdit: () => void }) {
  return (
    <section className={styles.card}>
      <button className={styles.avatarBtn} aria-label="프로필 이미지 변경">
        <img src={user.avatarUrl} alt="" />
      </button>
      <div className={styles.info}>
        <div className={styles.nameRow}>
          <strong className={styles.name}>{user.nickname}</strong>
          <button className={styles.editBtn} onClick={onEdit}>
            프로필 편집
          </button>
        </div>
        <p className={styles.email}>{user.email}</p>
        <div className={styles.metrics}>
          <span>좋아요 {user.likeCount}</span>
          <span>댓글 {user.commentCount}</span>
        </div>
      </div>
    </section>
  );
}
