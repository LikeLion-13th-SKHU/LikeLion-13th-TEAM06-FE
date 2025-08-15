// src/features/events/components/EventsList/EventsList.tsx

import { eventMock } from '@/features/events/mocks/eventMock';
import EventCardHorizontal from '../EventCardHorizontal/EventCardHorizontal';
import styles from './EventsList.module.scss';

export default function EventsList() {
  return (
    <div className={styles.list}>
      {eventMock.map((event) => (
        <EventCardHorizontal key={event.id} item={event} />
      ))}
    </div>
  );
}
