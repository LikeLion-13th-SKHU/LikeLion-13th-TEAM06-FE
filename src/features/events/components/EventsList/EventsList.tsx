// src/features/events/components/EventsList/EventsList.tsx

import styles from './EventsList.module.scss';
import { useEventsInfinite } from '../../hooks/useEvents';
import InfiniteList from '@/shared/components/InfiniteList/InfiniteList';
import EventCardVertical from '../EventCardVertical/EventCardVertical';
import type { EventItem } from '../../types/event';

export default function EventsList() {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useEventsInfinite();
  return (
    <div className={styles.list}>
      <InfiniteList
        pages={data?.pages as { content: EventItem[] }[] | undefined}
        getKey={(it: EventItem) => it.artId}
        renderItem={(it: EventItem) => <EventCardVertical item={it} />}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        onLoadMore={fetchNextPage}
      />
    </div>
  );
}
