// src/features/events/components/EventsCarouselSection/EventsCarouselSection.tsx

import { useMemo, useRef } from 'react';
import styles from './EventsCarouselSection.module.scss';
import EventCardHorizontal from '../EventCardHorizontal/EventCardHorizontal';
import { type EventItem } from '../../types/event';

export default function EventsCarouselSection({ items }: { items: EventItem[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const data = useMemo(() => items.slice(0, 8), [items]);

  return (
    <div className={styles.scroller} ref={scrollerRef}>
      {data.map((it) => (
        <EventCardHorizontal key={it.id} item={it} />
      ))}
    </div>
  );
}
