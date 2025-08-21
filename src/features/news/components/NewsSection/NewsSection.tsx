// src/features/news/components/NewsSection/NewsSection.tsx

import NewsColumnList from '@/features/news/components/NewsList/NewsColumnList/NewsColumnList';
import NewsRowList from '@/features/news/components/NewsList/NewsRowList/NewsRowList';
import styles from './NewsSection.module.scss';
import { Link } from 'react-router-dom';
import EventsCarouselSection from '@/features/events/components/EventsCarouselSection/EventsCarouselSection';
import { useNewsInterestList, useNewsLikeList, useNewsLocalList } from '../../hooks/useNews';
import { useEventsInfinite } from '@/features/events/hooks/useEvents';
import type { NewsItem } from '../../types/news';
import type { EventItem } from '@/features/events/types/event';

interface NewsSectionProps {
  title: string;
  link: string;
  layout?: 'row' | 'column' | 'events';
  type: 'hot' | 'for-you' | 'local' | 'events';
}

export default function NewsSection({ title, link, layout = 'row', type }: NewsSectionProps) {
  const { data } =
    type === 'hot'
      ? useNewsLikeList(0, 3)
      : type === 'for-you'
        ? useNewsInterestList(0, 3)
        : type === 'local'
          ? useNewsLocalList(0, 8)
          : useEventsInfinite(8);

  return (
    <section className={styles.newsSection}>
      <div className={styles.newsSectionHeader}>
        <h2 className={styles.newsSectionTitle}>{title}</h2>
        <Link to={link} className={styles.newsSectionMore}>
          더보기
        </Link>
      </div>
      {layout === 'row' ? (
        <NewsRowList
          data={data as { pages: { content: NewsItem[] }[] } | undefined}
          hasNextPage={false}
          isFetchingNextPage={false}
          fetchNextPage={() => {}}
          infinite={false}
        />
      ) : layout === 'column' ? (
        <NewsColumnList
          data={data as { pages: { content: NewsItem[] }[] } | undefined}
          hasNextPage={false}
          isFetchingNextPage={false}
          fetchNextPage={() => {}}
          infinite={false}
        />
      ) : (
        <EventsCarouselSection items={data?.pages?.[0]?.content as EventItem[] | undefined} />
      )}
    </section>
  );
}
