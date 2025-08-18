// src/features/events/hooks/useEvents.ts

import { useQuery } from '@tanstack/react-query';
import { getEvents } from '../api/events.api';
import { qk } from '@/shared/query/keys';

export function useEvents(page?: number, size?: number, sort?: string) {
  return useQuery({
    queryKey: qk.events(page, size, sort),
    queryFn: () => getEvents(page, size, sort),
    staleTime: 60_000,
  });
}
