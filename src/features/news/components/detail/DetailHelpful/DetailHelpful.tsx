// src/features/news/components/detail/DetailHelpful/DetailHelpful.tsx

import Button from '@/shared/components/Button/Button';
import styles from './DetailHelpful.module.scss';
import YellowLike from '@/assets/svg/yellowLike.svg';

export default function DetailHelpful() {
  return (
    <div className={styles.detailHelpful}>
      <h3 className={styles.detailHelpfulTitle}>해당 기사가 도움이 되었나요? </h3>
      <Button variant="outline" leftIcon={YellowLike}>
        도움이 되었어요
      </Button>
    </div>
  );
}
