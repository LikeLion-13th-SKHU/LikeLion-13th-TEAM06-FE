// src/features/news/components/NewsCard/NewsCard.tsx

import type { NewsItem } from '@/features/news/types/news';
import styles from './NewsRowCard.module.scss';
import likeIcon from '@/assets/svg/like.svg';
import SolidLike from '@/assets/svg/solidLike.svg';
import { useNavigate } from 'react-router-dom';
import Image from '@/assets/img/image.png';

export default function NewsRowCard({ item }: { item: NewsItem }) {
  const navigate = useNavigate();

  return (
    <article role="article" aria-label="뉴스 카드" onClick={() => navigate(`/news/${item.newsId}`)}>
      <div className={styles.newsCardRoot}>
        <div className={styles.newsCardThumb}>
          <img src={item.imgUrl || Image} alt={item.title} />
        </div>
        <div className={styles.newsCardContent}>
          <h3 className={styles.newsCardTitle}>{item.title}</h3>
          <div className={styles.newsCardInfo}>
            <div className={styles.newsCardLikes}>
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
