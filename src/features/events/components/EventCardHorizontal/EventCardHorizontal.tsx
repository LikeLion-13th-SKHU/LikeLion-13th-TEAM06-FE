// src/features/events/components/EventCardHorizontal/EventCardHorizontal.tsx

import styles from './EventCardHorizontal.module.scss';
import { type EventItem } from '../../types/event';

export default function EventCardHorizontal({ item }: { item: EventItem }) {
  return (
    <article role="article" aria-label="이벤트 카드" className={styles.root}>
      <div className={styles.eventCardRoot}>
        <div className={styles.eventCardThumb}>
          <img src={item.thumbUrl} alt={item.title} loading="lazy" />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{item.title}</h3>
          {item.dateText && <p className={styles.dateText}>{item.dateText}</p>}
        </div>
      </div>
    </article>
  );
}
