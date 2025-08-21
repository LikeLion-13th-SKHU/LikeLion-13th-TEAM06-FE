// src/features/news/components/detail/DetailHelpful/DetailHelpful.tsx

import Button from '@/shared/components/Button/Button';
import styles from './DetailHelpful.module.scss';
import YellowLike from '@/assets/svg/yellowLike.svg';
import { useNewsLike } from '@/features/news/hooks/useNews';
import { useEffect, useState } from 'react';
import { useToast } from '@/shared/contexts/ToastContext';
import YellowSolidLike from '@/assets/svg/yellowSolidLike.svg';

type Props = {
  articleId: number;
  initiallyHelpful?: boolean;
  initiallyCount?: number;
};

export default function DetailHelpful({ articleId, initiallyHelpful, initiallyCount }: Props) {
  const toast = useToast();

  const { mutate: toggleNewsLike, isPending } = useNewsLike(articleId, {
    onSuccess: () => {
      toast.success('좋아요 상태가 반영되었습니다.');
    },
    onError: () => {
      toast.error('좋아요 상태 반영에 실패했습니다.');
    },
  });

  const [helpful, setHelpful] = useState(initiallyHelpful ?? false);
  const [count, setCount] = useState(initiallyCount ?? 0);

  useEffect(() => {
    setHelpful(!!initiallyHelpful);
  }, [initiallyHelpful]);

  useEffect(() => {
    setCount(initiallyCount ?? 0);
  }, [initiallyCount]);

  const handleClick = () => {
    if (isPending) return;

    const nextHelpful = !helpful;
    setHelpful(nextHelpful);
    setCount((c) => c + (nextHelpful ? 1 : -1));

    toggleNewsLike(undefined, {
      onError: () => {
        setHelpful(!nextHelpful);
        setCount((c) => c + (nextHelpful ? -1 : 1));
      },
    });
  };

  return (
    <div className={styles.detailHelpful}>
      <h3 className={styles.detailHelpfulTitle}>해당 기사가 도움이 되었나요? </h3>
      <Button
        variant={helpful ? 'solid' : 'outline'}
        leftIcon={helpful ? YellowSolidLike : YellowLike}
        onClick={handleClick}
        disabled={isPending}
      >
        도움이 되었어요 {count ? ` (${count})` : ''}
      </Button>
    </div>
  );
}
