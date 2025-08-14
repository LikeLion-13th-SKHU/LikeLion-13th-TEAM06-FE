// src/features/news/types/news.ts

export type NewsItem = {
  id: string;
  title: string;
  thumbUrl?: string;
  likes: number;
  createdAt: string;
};

export type NewsComment = {
  id: string;
  content: string;
  createdAt: string;
  likes: number;
};

export type NewsDetail = NewsItem & {
  summary: string;
  content: string;
  createdAt: string;
  comments: NewsComment[];
  relatedNews: NewsItem[];
};
