// src/pages/events/EventsMore.tsx

import EventsList from '@/features/events/components/EventsList/EventsList';
import { useHeader } from '@/shared/contexts/HeaderContext';
import { useEffect } from 'react';

export default function EventsMorePage() {
  const { setConfig } = useHeader();

  useEffect(() => {
    setConfig({
      kind: 'page',
      title: '🎨 행사/전시',
    });
  }, []);

  return (
    <div style={{ padding: '16px 0' }}>
      <EventsList />
    </div>
  );
}
