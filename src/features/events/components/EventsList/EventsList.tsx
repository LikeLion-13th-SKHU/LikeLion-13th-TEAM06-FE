// src/features/events/components/EventsList/EventsList.tsx

import { eventMock } from '@/features/events/mocks/eventMock';
import EventCardVertical from '../EventCardVertical/EventCardVertical';
import styles from './EventsList.module.scss';

export default function EventsList() {
  return (
    <div className={styles.list}>
      {eventMock.map((event) => (
        <EventCardVertical key={event.id} item={event} />
      ))}
    </div>
  );
}
