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
  author: string;
  image: string;
}

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  source: string;
}

export enum RoutePath {
  HOME = '/',
  PRODUCTS = '/products',
  BLOG = '/blog',
  NEWS = '/news',
  CONTACT = '/contact',
  ABOUT = '/about',
}