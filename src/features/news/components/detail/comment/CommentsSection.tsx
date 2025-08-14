// src/features/news/components/detail/comment/CommentsSection.tsx

import { useCallback, useEffect, useState } from 'react';
import styles from './Comments.module.scss';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import type { Comment } from '@/features/news/types/comment';
import Button from '@/shared/components/Button/Button';

type CommentsSectionProps = {
  articleId: string;
  me: { id: string };
  initial: Comment[];
};
export default function CommentsSection({ ...props }: CommentsSectionProps) {
  const [items, setItems] = useState<Comment[]>(props.initial ?? []);
  const [isComposerOpen, setIsComposerOpen] = useState(false);

  useEffect(() => {
    const pad = isComposerOpen ? '92px' : '16px';
    document.documentElement.style.setProperty('--comments-bottom-pad', pad);
    return () => {
      document.documentElement.style.removeProperty('--comments-bottom-pad');
    };
  }, [isComposerOpen]);

  const handleSubmit = useCallback(
    async (text: string) => {
      await Promise.resolve({
        id: 'tmp_' + Math.random().toString(36).slice(2),
        nickname: '으네',
        userId: props.me?.id || 'me',
        content: text,
        createdAt: new Date().toISOString(),
      }).then((created: Comment) => {
        if (created) setItems((prev) => [created, ...prev]);
      });
    },
    [props]
  );

  return (
    <section className={styles.root} aria-label="댓글">
      <div className={styles.header}>
        <h3>댓글 {items.length ? `(${items.length})` : ''}</h3>
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
        {items.map((c) => (
          <CommentItem
            key={c.id}
            id={c.id}
            nickname={c.nickname}
            content={c.content}
            isMine={c.userId === props.me?.id}
            createdAt={c.createdAt}
          />
        ))}
        {items.length === 0 && (
          <p style={{ color: '#9CA3AF', fontSize: 14 }}>첫 댓글을 남겨보세요!</p>
        )}
      </div>

      <CommentInput
        open={isComposerOpen}
        onClose={() => setIsComposerOpen(false)}
        onSubmit={handleSubmit}
      />
    </section>
  );
}
