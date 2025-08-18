// src/features/events/types/event.ts

export type EventItem = {
  artId: number;
  title: string;
  startDate: string;
  endDate: string;
  area: string;
  location: string;
  imageUrl: string;
  likeCount: number;
  liked: boolean;
};

export type EventDetailItem = EventItem & {
  area: string;
};
