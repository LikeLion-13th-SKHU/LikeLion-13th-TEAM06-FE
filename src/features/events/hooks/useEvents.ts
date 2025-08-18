// src/features/events/hooks/useEvents.ts

import { getEvents } from '../api/events.api';
import { useOffsetInfinite } from '@/shared/hooks/useInfinityQuery';

export function useEventsInfinite(size?: number) {
  return useOffsetInfinite({
    queryKey: ['events'],
    fetchPage: ({ page, size }) => getEvents(page, size),
    size: size || 20,
    startPage: 0,
    staleTime: 60_000,
    params: {},
  });
}
