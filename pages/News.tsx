import React, { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink, Newspaper } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { useHeadlines } from '../hooks/useHeadlines';
import { RoutePath } from '../types';

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

  const heroImage =
    selectedHeadline.image ||
    'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop';

  const articleContent = selectedHeadline.content || selectedHeadline.excerpt;
  const contentParagraphs = articleContent
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="bg-[#f9fafb] min-h-screen py-20">
      <div className="container mx-auto px-6 space-y-12">
        <div className="flex items-center gap-6">
          <div className="w-16 h-1 bg-[#4f4398]"></div>
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight">Press & News</h1>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 bg-white border border-gray-200 shadow-sm">
          <div className="lg:col-span-2 relative min-h-[320px] bg-gray-100 overflow-hidden">
            <img
              src={heroImage}
              alt={selectedHeadline.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#4f4398] text-white text-xs font-bold px-3 py-1 uppercase">
              Selected Headline
            </div>
          </div>
          <div className="p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-xs text-gray-500 font-bold tracking-[0.25em] uppercase">
              <Newspaper size={16} className="text-[#4f4398]" />
              <span>{selectedHeadline.source || 'Headline'}</span>
              <span className="text-gray-300">|</span>
              <span className="text-[#4f4398]">{selectedHeadline.date}</span>
            </div>
            <h2 className="text-3xl font-black text-gray-900 leading-tight">{selectedHeadline.title}</h2>
            <div className="text-gray-700 leading-relaxed text-sm md:text-base space-y-4">
              {contentParagraphs.length ? (
                contentParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))
              ) : (
                <p>{selectedHeadline.excerpt}</p>
              )}
            </div>
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

