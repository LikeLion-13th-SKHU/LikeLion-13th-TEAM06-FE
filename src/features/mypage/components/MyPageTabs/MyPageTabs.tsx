// src/features/mypage/components/MyPageTabs/MyPageTabs.tsx
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './MyPageTabs.module.scss';

export type MyPageTabId = 'likes' | 'comments';

type Props = {
  value?: MyPageTabId;
  onChange?: (tab: MyPageTabId) => void;

  counts?: { likes?: number; comments?: number };

  prefetch?: { likes?: () => void; comments?: () => void };

  sticky?: boolean;
  topOffsetPx?: number;
};

export default function MyPageTabs({
  value,
  onChange,
  counts,
  prefetch,
  sticky = true,
  topOffsetPx = 0,
}: Props) {
  const [sp, setSp] = useSearchParams();

  const current: MyPageTabId = useMemo(() => {
    const q = sp.get('tab');
    if (value) return value;
    return q === 'comments' ? 'comments' : 'likes';
  }, [sp, value]);

  const setTab = useCallback(
    (next: MyPageTabId) => {
      if (onChange) onChange(next);
      if (!value) {
        const nextSp = new URLSearchParams(sp);
        nextSp.set('tab', next);
        setSp(nextSp, { replace: true });
      }
    },
    [onChange, setSp, sp, value]
  );

  const likeRef = useRef<HTMLButtonElement | null>(null);
  const commentRef = useRef<HTMLButtonElement | null>(null);

  const handlePrefetch = (id: MyPageTabId) => {
    if (id === 'likes') prefetch?.likes?.();
    else prefetch?.comments?.();
  };

  useEffect(() => {
    if (!sticky) return;
    const px = Math.max(0, topOffsetPx);
    const el = document.documentElement;
    el.style.setProperty('--mypage-tabs-top', `calc(${px}px + env(safe-area-inset-top, 0px))`);
    return () => {
      el.style.removeProperty('--mypage-tabs-top');
    };
  }, [sticky, topOffsetPx]);

  return (
    <div
      className={`${styles.wrap} ${sticky ? styles.sticky : ''}`}
      role="tablist"
      aria-label="마이페이지 탭"
    >
      <button
        ref={likeRef}
        role="tab"
        aria-selected={current === 'likes'}
        aria-controls="panel-likes"
        id="tab-likes"
        className={`${styles.tab} ${current === 'likes' ? styles.active : ''}`}
        onClick={() => setTab('likes')}
        onMouseEnter={() => handlePrefetch('likes')}
        onFocus={() => handlePrefetch('likes')}
        onTouchStart={() => handlePrefetch('likes')}
        type="button"
      >
        좋아요
        {typeof counts?.likes === 'number' && <span className={styles.badge}>{counts.likes}</span>}
      </button>

      <button
        ref={commentRef}
        role="tab"
        aria-selected={current === 'comments'}
        aria-controls="panel-comments"
        id="tab-comments"
        className={`${styles.tab} ${current === 'comments' ? styles.active : ''}`}
        onClick={() => setTab('comments')}
        onMouseEnter={() => handlePrefetch('comments')}
        onFocus={() => handlePrefetch('comments')}
        onTouchStart={() => handlePrefetch('comments')}
        type="button"
      >
        댓글
        {typeof counts?.comments === 'number' && (
          <span className={styles.badge}>{counts.comments}</span>
        )}
      </button>

      <span className={styles.indicator} data-pos={current} />
    </div>
  );
}
