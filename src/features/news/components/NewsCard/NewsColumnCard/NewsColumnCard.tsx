// src/features/news/components/NewsCard/NewsColumnCard/NewsColumnCard.tsx

import type { NewsItem } from '@/features/news/types/news';
import styles from './NewsColumnCard.module.scss';
import likeIcon from '@/assets/svg/like.svg';

export default function NewsColumnCard({ item }: { item: NewsItem }) {
  return (
    <article role="article" aria-label="뉴스 카드">
      <div className={styles.newsColumnCardRoot}>
        <div className={styles.newsColumnCardThumb}>
          <img src={item.thumbUrl} alt={item.title} />
        </div>
        <div className={styles.newsColumnCardContent}>
          <h3 className={styles.newsColumnCardTitle}>{item.title}</h3>
          <div className={styles.newsColumnCardLikes}>
            <img src={likeIcon} alt="좋아요" />
            <span>{item.likes}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
