import { useEffect, useMemo, useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost, HeadlineFeed, RoutePath } from '../types';

const HEADLINES_URL = `${import.meta.env.BASE_URL}data/latest-headlines.json`;

const formatHeadlineDate = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
};

export const useHeadlines = () => {
  const fallbackHeadlines = useMemo(
    () =>
      BLOG_POSTS.map((post) => ({
        ...post,
        link: `${RoutePath.NEWS}?headline=${post.id}`,
        originalLink: post.link || '#',
        source: post.source || post.author
      })),
    []
  );

  const [headlines, setHeadlines] = useState<BlogPost[]>(fallbackHeadlines);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchHeadlines = async () => {
      setLoading(true);
      try {
        const response = await fetch(HEADLINES_URL, { cache: 'no-store' });
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data: HeadlineFeed = await response.json();
        if (Array.isArray(data.items) && isMounted) {
          const mapped = data.items.map((item, idx) => ({
            id: item.id ?? idx + 1,
            title: item.title,
            excerpt: item.summary,
            content: item.content || item.summary,
            date: formatHeadlineDate(item.date),
            author: item.source,
            source: item.source,
            image: item.image,
            link: item.link || '#',
            originalLink: item.link || '#'
          }));
          setHeadlines(mapped.length ? mapped : fallbackHeadlines);
          setError(null);
        }
      } catch (err) {
        console.error('Failed to fetch latest headlines', err);
        if (isMounted) {
          setHeadlines(fallbackHeadlines);
          setError('Failed to load latest headlines; showing local content.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchHeadlines();

    return () => {
      isMounted = false;
    };
  }, [fallbackHeadlines]);

  const headlinesWithInternalLinks = useMemo(
    () =>
      headlines.map((item, idx) => {
        const id = item.id ?? idx + 1;
        return {
          ...item,
          id,
          content: item.content || item.excerpt,
          link: `${RoutePath.NEWS}?headline=${id}`,
          source: item.source || item.author,
          originalLink: item.originalLink || item.link
        };
      }),
    [headlines]
  );

  return {
    headlines: headlinesWithInternalLinks,
    loading,
    error
  };
};
