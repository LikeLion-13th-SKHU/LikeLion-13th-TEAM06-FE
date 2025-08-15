// src/features/events/types/event.ts

export type EventItem = {
  id: string;
  title: string;
  thumbUrl?: string;
  dateText?: string;
};

export type EventDetailItem = EventItem & {
  area: string;
};
