import React, { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink, Newspaper } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { useHeadlines } from '../hooks/useHeadlines';
import { RoutePath } from '../types';

const ALLOWED_TAGS = new Set(['p', 'br', 'strong', 'em', 'b', 'i', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'a', 'img']);
const SELF_CLOSING = new Set(['br', 'img']);
const ALLOWED_ATTRS: Record<string, Set<string>> = {
  a: new Set(['href', 'target', 'rel']),
  img: new Set(['src', 'alt', 'width', 'height', 'loading'])
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const sanitizeHtml = (html?: string) => {
  if (!html) return '';
  const doc = new DOMParser().parseFromString(html, 'text/html');

  const walk = (node: Node): string => {
    if (node.nodeType === Node.TEXT_NODE) {
      return escapeHtml(node.textContent || '');
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return '';
    const el = node as HTMLElement;
    const tag = el.tagName.toLowerCase();

    const childContent = Array.from(el.childNodes)
      .map((child) => walk(child))
      .join('');

    if (!ALLOWED_TAGS.has(tag)) {
      return childContent;
    }

    const attrs = ALLOWED_ATTRS[tag];
    const attrString = attrs
      ? Array.from(attrs)
          .map((name) => {
            const raw = el.getAttribute(name);
            if (!raw) return '';
            const value = escapeHtml(raw);
            return ` ${name}="${value}"`;
          })
          .join('')
      : '';

    if (SELF_CLOSING.has(tag)) {
      return `<${tag}${attrString}>`;
    }

    return `<${tag}${attrString}>${childContent}</${tag}>`;
  };

  const bodyContent = Array.from(doc.body.childNodes)
    .map((node) => walk(node))
    .join('');

  return bodyContent;
};

const News: React.FC = () => {
  const { headlines, loading } = useHeadlines();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const requestedId = Number(searchParams.get('headline'));

  const selectedHeadline = useMemo(() => {
    if (!headlines.length) return null;
    return headlines.find((item) => item.id === requestedId) || headlines[0];
  }, [headlines, requestedId]);

  useEffect(() => {
    if (selectedHeadline) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedHeadline?.id]);

  if (!selectedHeadline) {
    return (
      <div className="bg-[#f9fafb] min-h-screen py-20">
        <div className="container mx-auto px-6 text-center text-gray-600">
          {loading ? 'Loading latest headlines...' : 'No headlines available yet.'}
        </div>
      </div>
    );
  }

  const sanitizedHtml = useMemo(
    () => sanitizeHtml(selectedHeadline.content || selectedHeadline.excerpt),
    [selectedHeadline.content, selectedHeadline.excerpt]
  );

  return (
    <div className="bg-[#f9fafb] min-h-screen py-20">
      <div className="container mx-auto px-6 space-y-12">
        <div className="flex items-center gap-6">
          <div className="w-16 h-1 bg-[#4f4398]"></div>
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight">Press & News</h1>
        </div>

        <section className="bg-white border border-gray-200 shadow-sm p-6 md:p-10 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-bold tracking-[0.25em] uppercase">
            <Newspaper size={16} className="text-[#4f4398]" />
            <span>{selectedHeadline.source || 'Headline'}</span>
            <span className="text-gray-300">|</span>
            <span className="text-[#4f4398]">{selectedHeadline.date}</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 leading-tight">{selectedHeadline.title}</h2>
          <div className="prose prose-sm md:prose-base max-w-none prose-img:rounded prose-img:border prose-img:border-gray-200 prose-a:text-[#4f4398] prose-a:font-semibold prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml || selectedHeadline.excerpt }}
          />
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to={RoutePath.NEWS}
              className="bg-[#4f4398] text-white px-5 py-2 text-sm font-bold uppercase tracking-wide hover:bg-[#3e3479] transition-colors"
            >
              Back to Headlines
            </Link>
            {selectedHeadline.originalLink && selectedHeadline.originalLink !== '#' && (
              <a
                href={selectedHeadline.originalLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 border border-gray-300 text-gray-900 text-sm font-bold uppercase tracking-wide hover:border-[#4f4398] hover:text-[#4f4398] transition-colors bg-white"
              >
                View Source <ExternalLink size={14} />
              </a>
            )}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4f4398]">Curated Feed</p>
              <h3 className="text-2xl font-black text-gray-900 uppercase">All Headlines</h3>
            </div>
            <p className="text-sm text-gray-500">Click any card to view it on this site.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {headlines.map((item) => (
              <BlogCard key={item.id} post={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;

