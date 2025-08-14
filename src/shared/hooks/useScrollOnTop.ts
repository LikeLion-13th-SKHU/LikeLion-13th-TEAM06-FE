// src/shared/hooks/useScrollOnTop.ts

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop(behavior: ScrollBehavior = 'auto') {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, behavior]);
}
