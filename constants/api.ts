export interface User {
  username: string;
  bio: string;
  image: string;
  following: boolean;
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
