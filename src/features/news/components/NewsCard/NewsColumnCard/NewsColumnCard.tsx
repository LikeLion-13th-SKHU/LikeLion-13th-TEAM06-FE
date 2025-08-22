// src/features/news/components/NewsCard/NewsColumnCard/NewsColumnCard.tsx

import type { NewsItem } from '@/features/news/types/news';
import styles from './NewsColumnCard.module.scss';
import likeIcon from '@/assets/svg/like.svg';
import SolidLike from '@/assets/svg/solidLike.svg';
import { useNavigate } from 'react-router-dom';

export default function NewsColumnCard({ item }: { item: NewsItem }) {
  const navigate = useNavigate();

  return (
    <article role="article" aria-label="뉴스 카드" onClick={() => navigate(`/news/${item.newsId}`)}>
      <div className={styles.newsColumnCardRoot}>
        <div className={styles.newsColumnCardThumb}>
          <img src={item.imgUrl || 'https://i.redd.it/m06ssnmxbg2e1.png'} alt={item.title} />
        </div>
        <div className={styles.newsColumnCardContent}>
          <h3 className={styles.newsColumnCardTitle}>{item.title}</h3>
          <div className={styles.newsColumnCardInfo}>
            <div className={styles.newsColumnCardLikes}>
              <img src={item.liked ? SolidLike : likeIcon} alt="좋아요" />
              <span>{item.likeCount}</span>
            </div>
            <p>{item.newsDate}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
