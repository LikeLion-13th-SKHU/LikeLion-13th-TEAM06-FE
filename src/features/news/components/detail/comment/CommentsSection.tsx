// src/features/news/components/detail/comment/CommentsSection.tsx

import { useEffect, useState } from 'react';
import styles from './Comments.module.scss';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import type { Comment } from '@/features/news/types/comment';
import Button from '@/shared/components/Button/Button';
import { useNewsCommentCreate } from '@/features/news/hooks/useNews';

interface CommentsSectionProps {
  articleId: number;
  initial?: Comment[];
}
export default function CommentsSection({ articleId, initial }: CommentsSectionProps) {
  const [isComposerOpen, setIsComposerOpen] = useState(false);

  useEffect(() => {
    const pad = isComposerOpen ? '92px' : '16px';
    document.documentElement.style.setProperty('--comments-bottom-pad', pad);
    return () => {
      document.documentElement.style.removeProperty('--comments-bottom-pad');
    };
  }, [isComposerOpen]);

  const { mutate: createComment } = useNewsCommentCreate(articleId);

  return (
    <section className={styles.root} aria-label="댓글">
      <div className={styles.header}>
        <h3>댓글</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsComposerOpen(true)}
          aria-label="댓글 작성"
        >
          댓글 작성
        </Button>
      </div>

      <div className={styles.list}>
        {initial?.map((c) => (
          <CommentItem
            key={c.newsCommentId}
            id={c.newsCommentId}
            memberName={c.memberName}
            memberImageUrl={c.memberImageUrl}
            content={c.content}
          />
        ))}
        {initial?.length === 0 && (
          <p style={{ color: '#9CA3AF', fontSize: 14 }}>첫 댓글을 남겨보세요!</p>
        )}
      </div>

      <CommentInput
        open={isComposerOpen}
        onClose={() => setIsComposerOpen(false)}
        onSubmit={createComment}
      />
    </section>
  );
}
