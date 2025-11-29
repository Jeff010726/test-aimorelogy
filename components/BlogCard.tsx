import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const imageSrc = post.image || 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80';
  const linkHref = post.link || '#';
  const isExternal = linkHref.startsWith('http');
  const isInternal = !isExternal && linkHref !== '#';
  const sourceLabel = post.source || post.author;

  return (
    <div className="group bg-white flex flex-col h-full border border-gray-200 hover:shadow-xl hover:border-[#4f4398] transition-all duration-300">
      <div className="h-48 overflow-hidden relative bg-gray-100">
        <img 
          src={imageSrc} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs text-[#4f4398] font-bold mb-3 uppercase tracking-wider">
          <Calendar size={12} />
          <span>{post.date}</span>
          {sourceLabel && <span className="text-gray-400 font-medium normal-case">| {sourceLabel}</span>}
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase leading-tight group-hover:text-[#4f4398] transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
          {post.excerpt}
        </p>
        
        {isInternal ? (
          <Link 
            to={linkHref}
            className="inline-block text-gray-900 font-bold text-sm uppercase hover:text-[#4f4398] transition-colors underline decoration-[#4f4398] decoration-2 underline-offset-4"
          >
            Read Story
          </Link>
        ) : (
          <a 
            href={linkHref} 
            target={isExternal ? '_blank' : undefined} 
            rel={isExternal ? 'noreferrer' : undefined}
            className="inline-block text-gray-900 font-bold text-sm uppercase hover:text-[#4f4398] transition-colors underline decoration-[#4f4398] decoration-2 underline-offset-4"
          >
            Read Story
          </a>
        )}
      </div>
    </div>
  );
};

export default BlogCard;

