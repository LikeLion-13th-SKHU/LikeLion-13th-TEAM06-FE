// src/features/news/components/NewsCard/NewsCard.tsx

import type { NewsItem } from '@/features/news/types/news';
import styles from './NewsRowCard.module.scss';
import likeIcon from '@/assets/svg/like.svg';

export default function NewsRowCard({ item }: { item: NewsItem }) {
  return (
    <article role="article" aria-label="뉴스 카드">
      <div className={styles.newsCardRoot}>
        <div className={styles.newsCardThumb}>
          <img src={item.thumbUrl} alt={item.title} />
        </div>
        <div className={styles.newsCardContent}>
          <h3 className={styles.newsCardTitle}>{item.title}</h3>
          <div className={styles.newsCardLikes}>
            <img src={likeIcon} alt="좋아요" />
            <span>{item.likes}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
