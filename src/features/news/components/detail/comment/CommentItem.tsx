// src/features/news/components/detail/comment/CommentItem.tsx

import styles from './Comments.module.scss';

type CommentItemProps = {
  id: string;
  avatarUrl?: string;
  nickname: string;
  createdAt: string;
  content: string;
  isMine?: boolean;
  onDelete?: (id: string) => void;
};

export default function CommentItem({
  id,
  nickname,
  createdAt,
  content,
  isMine,
  onDelete,
}: CommentItemProps) {
  return (
    <div className={styles.item} role="article" aria-label={`${nickname}의 댓글`}>
      <img className={styles.avatar} src="https://i.redd.it/m06ssnmxbg2e1.png " alt="avatar" />
      <div className={styles.meta}>
        <span className={styles.nick}>{nickname}</span>
        <span className={styles.createdAt}>{createdAt}</span>
      </div>
      {isMine ? (
        <button className={styles.delBtn} onClick={() => onDelete?.(id)} aria-label="댓글 삭제">
          삭제
        </button>
      ) : (
        <div />
      )}

      <div className={styles.content}>{content}</div>
    </div>
  );
}
