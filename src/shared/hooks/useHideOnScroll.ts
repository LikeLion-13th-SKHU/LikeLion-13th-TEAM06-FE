// src/shared/hooks/useHideOnScroll.ts
import { useEffect, useRef, useState } from 'react';

export function useHideOnScroll(threshold = 10) {
  const lastY = useRef(0);
  const ticking = useRef(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const delta = y - lastY.current;

          if (Math.abs(delta) > threshold) {
            if (delta > 0 && y > 0)
              setHidden(true); // 아래로 → 숨김
            else if (delta < 0) setHidden(false); // 위로 → 표시

            lastY.current = y;
          }

          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return hidden;
}
