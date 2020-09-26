export interface User {
  username: string;
  bio: string;
  image: string;
  following: boolean;
  email: string;
  password: string;
}
export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
  author: User;
}

export interface Profile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface FetchState {
  error: Error | null;
  pending: boolean;
  timestamp: number;
}

export interface ArticleComment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  body: string;
  author: Profile;
}
