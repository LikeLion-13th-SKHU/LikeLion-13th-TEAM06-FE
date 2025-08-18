// src/features/news/components/NewsSection/NewsSection.tsx

import NewsColumnList from '@/features/news/components/NewsList/NewsColumnList/NewsColumnList';
import NewsRowList from '@/features/news/components/NewsList/NewsRowList/NewsRowList';
import styles from './NewsSection.module.scss';
import { Link } from 'react-router-dom';
import EventsCarouselSection from '@/features/events/components/EventsCarouselSection/EventsCarouselSection';
import { useNewsInterestList, useNewsLikeList, useNewsLocalList } from '../../hooks/useNews';
import { useEvents } from '@/features/events/hooks/useEvents';

interface NewsSectionProps {
  title: string;
  link: string;
  layout?: 'row' | 'column' | 'events';
  type: 'hot' | 'for-you' | 'local' | 'events';
}

export default function NewsSection({ title, link, layout = 'row', type }: NewsSectionProps) {
  const { data: { content: items } = {} } =
    type === 'hot'
      ? useNewsLikeList(1, 3)
      : type === 'for-you'
        ? useNewsInterestList(1, 3)
        : type === 'local'
          ? useNewsLocalList(1, 3)
          : useEvents(1, 8);

  return (
    <section className={styles.newsSection}>
      <div className={styles.newsSectionHeader}>
        <h2 className={styles.newsSectionTitle}>{title}</h2>
        <Link to={link} className={styles.newsSectionMore}>
          더보기
        </Link>
      </div>
      {layout === 'row' ? (
        <NewsRowList items={items} />
      ) : layout === 'column' ? (
        <NewsColumnList items={items} />
      ) : (
        <EventsCarouselSection items={items} />
      )}
    </section>
  );
}
