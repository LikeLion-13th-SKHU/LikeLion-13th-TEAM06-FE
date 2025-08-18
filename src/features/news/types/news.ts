// src/features/news/types/news.ts

export type NewsItem = {
  newsId: number;
  title: string;
  newsDate: string;
  imgUrl?: string;
  likeCount: number;
};

export type NewsComment = {
  newsCommentId: number;
  memberName: string;
  content: string;
  memberImageUrl: string;
};

export type NewsDetail = NewsItem & {
  liked: boolean;
  content: string;
  comments: NewsComment[];
  relatedNews: NewsItem[];
  summary: string;
};
