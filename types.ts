export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  image?: string;
  link?: string;
  source?: string;
  originalLink?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  source: string;
}

export interface HeadlineItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  source: string;
  link: string;
  image?: string;
}

export interface HeadlineFeed {
  fetchedAt: string;
  feed: string;
  items: HeadlineItem[];
}

export enum RoutePath {
  HOME = '/',
  PRODUCTS = '/products',
  BLOG = '/blog',
  NEWS = '/news',
  CONTACT = '/contact',
  ABOUT = '/about',
}
