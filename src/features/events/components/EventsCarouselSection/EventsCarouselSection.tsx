// src/features/events/components/EventsCarouselSection/EventsCarouselSection.tsx

import { useRef } from 'react';
import styles from './EventsCarouselSection.module.scss';
import EventCardHorizontal from '../EventCardHorizontal/EventCardHorizontal';
import { type EventItem } from '../../types/event';

export default function EventsCarouselSection({ items }: { items: EventItem[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.scroller} ref={scrollerRef}>
      {items?.map((it) => (
        <EventCardHorizontal key={it.artId} item={it} />
      ))}
    </div>
  );
}
