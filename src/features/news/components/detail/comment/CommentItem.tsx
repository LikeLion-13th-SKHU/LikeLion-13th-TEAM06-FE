// src/features/news/components/detail/comment/CommentItem.tsx

import styles from './Comments.module.scss';

type CommentItemProps = {
  id: number;
  memberName: string;
  memberImageUrl: string;
  content: string;
  isMyComment: boolean;
  onDelete?: (id: number) => void;
};

export default function CommentItem({
  id,
  memberName,
  memberImageUrl,
  content,
  isMyComment,
  onDelete,
}: CommentItemProps) {
  return (
    <div className={styles.item} role="article" aria-label={`${memberName}의 댓글`}>
      <img
        className={styles.avatar}
        src={memberImageUrl || 'https://i.redd.it/m06ssnmxbg2e1.png'}
        alt="avatar"
      />
      <div className={styles.meta}>
        <span className={styles.nick}>{memberName}</span>
        {isMyComment && (
          <span className={styles.badge} aria-label="내 댓글 배지">
            내 댓글
          </span>
        )}
      </div>
      <button className={styles.delBtn} onClick={() => onDelete?.(id)} aria-label="댓글 삭제">
        삭제
      </button>

      <div className={styles.content}>{content}</div>
    </div>
  );
}
