// src/features/news/types/news.ts

export type NewsItem = {
  newsId: number;
  title: string;
  newsDate: string;
  imgUrl?: string;
  likeCount: number;
  liked: boolean;
};

export type NewsComment = {
  newsCommentId: number;
  memberName: string;
  content: string;
  memberImageUrl: string;
};

export type NewsDetail = NewsItem & {
  content: string;
  comments: NewsComment[];
  relatedNews: NewsItem[];
  summary: string;
};
