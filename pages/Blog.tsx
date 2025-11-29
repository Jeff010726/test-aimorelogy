import React from 'react';
import BlogCard from '../components/BlogCard';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      {/* Hero Header for Blog */}
      <div className="container mx-auto px-6 mb-20">
        <div className="bg-gray-100 border border-gray-200 p-12 md:p-20 relative overflow-hidden rounded-sm">
          <div className="relative z-10 max-w-4xl">
            <span className="text-[#4f4398] font-bold uppercase tracking-widest mb-4 block">Nexus Blog</span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase">
              Technology <br /> Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Deep dives into AI, graphics, and the future of computing.
            </p>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#4f4398]/5 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
          {/* Duplicate for visual fullness */}
          {BLOG_POSTS.map((post) => (
            <BlogCard key={`dup-${post.id}`} post={{...post, id: post.id + 10}} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-[#4f4398] hover:border-[#4f4398] hover:text-white font-bold py-3 px-10 uppercase tracking-widest transition-colors">
            Load More Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;