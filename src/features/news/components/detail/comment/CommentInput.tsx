// src/features/news/components/detail/comment/CommentInput.tsx

import { useEffect, useRef, useState } from 'react';
import styles from './Comments.module.scss';

type CommentInputProps = {
  open: boolean;
  onClose?: () => void;
  onSubmit: (text: string) => Promise<void> | void;
};

export default function CommentInput({ open, onClose, onSubmit }: CommentInputProps) {
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const dockRef = useRef<HTMLDivElement | null>(null);
  const taRef = useRef<HTMLTextAreaElement | null>(null);

  // 열릴 때 포커스
  useEffect(() => {
    if (open) setTimeout(() => taRef.current?.focus(), 0);
    else setText('');
  }, [open]);

  // textarea 자동 높이
  useEffect(() => {
    const ta = taRef.current;
    if (!ta) return;
    ta.style.height = '0px';
    ta.style.height = Math.min(ta.scrollHeight, 120) + 'px';
  }, [text]);

  // 키보드(visualViewport) 대응
  useEffect(() => {
    if (!open) return;
    const vv = (window as Window & typeof globalThis).visualViewport as VisualViewport | undefined;
    const el = dockRef.current;
    if (!vv || !el) return;

    const onResize = () => {
      const bottomInset = Math.max(0, window.innerHeight - (vv.height + vv.offsetTop));
      el.classList.add(styles.withVV);
      el.style.setProperty('--vvb', bottomInset + 'px');
    };
    vv.addEventListener('resize', onResize);
    vv.addEventListener('scroll', onResize);
    onResize();
    return () => {
      vv.removeEventListener('resize', onResize);
      vv.removeEventListener('scroll', onResize);
      el.style.removeProperty('--vvb');
      el.classList.remove(styles.withVV);
    };
  }, [open]);

  const handleSubmit = async () => {
    const value = text.trim();
    if (!value) return;
    try {
      setSubmitting(true);
      await onSubmit(value);
      onClose?.(); // 전송 후 닫기(원하면 유지로 바꿔도 됨)
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className={styles.inputDock} ref={dockRef} role="dialog" aria-label="댓글 입력">
      <div className={styles.inputRow}>
        <textarea
          ref={taRef}
          className={styles.textarea}
          placeholder="댓글을 입력해주세요…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={1}
          maxLength={1000}
        />
        <button
          className={styles.submitBtn}
          onClick={handleSubmit}
          disabled={!text.trim() || submitting}
          aria-busy={submitting || undefined}
        >
          등록
        </button>
      </div>
    </div>
  );
}
