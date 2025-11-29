import React from 'react';
import { Newspaper, ExternalLink, ChevronRight } from 'lucide-react';
import { NEWS_ITEMS } from '../constants';

const News: React.FC = () => {
  return (
    <div className="bg-[#f9fafb] min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-6 mb-16">
          <div className="w-16 h-1 bg-[#4f4398]"></div>
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight">Press & News</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {/* Sidebar / Featured */}
           <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 border-t-4 border-[#4f4398] shadow-sm">
                 <h3 className="text-xl font-bold text-gray-900 uppercase mb-4">Media Contact</h3>
                 <p className="text-gray-600 text-sm mb-6">
                   For press inquiries, please contact our PR team.
                 </p>
                 <a href="mailto:press@nexus.com" className="text-[#4f4398] font-bold uppercase text-sm hover:underline">press@nexus.com</a>
              </div>
              <div className="bg-white p-8 shadow-sm">
                 <h3 className="text-xl font-bold text-gray-900 uppercase mb-4">Resources</h3>
                 <ul className="space-y-3 text-sm text-gray-600">
                    <li className="hover:text-[#4f4398] cursor-pointer flex items-center gap-2 transition-colors"><ChevronRight size={14} className="text-[#4f4398]"/> Brand Guidelines</li>
                    <li className="hover:text-[#4f4398] cursor-pointer flex items-center gap-2 transition-colors"><ChevronRight size={14} className="text-[#4f4398]"/> Image Library</li>
                    <li className="hover:text-[#4f4398] cursor-pointer flex items-center gap-2 transition-colors"><ChevronRight size={14} className="text-[#4f4398]"/> Executive Bios</li>
                 </ul>
              </div>
           </div>

           {/* News List */}
           <div className="lg:col-span-2 space-y-6">
              {NEWS_ITEMS.map((item) => (
                <div key={item.id} className="bg-white p-8 border border-gray-100 hover:border-[#4f4398] hover:shadow-lg transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <span className="text-[#4f4398] text-xs font-bold uppercase tracking-widest">
                      {item.source}
                    </span>
                    <span className="text-gray-500 text-sm font-mono">{item.date}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#4f4398] transition-colors">{item.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{item.summary}</p>
                  
                  <a href="#" className="inline-flex items-center gap-2 text-gray-900 font-bold text-sm uppercase hover:text-[#4f4398] transition-colors">
                    Read Release <ExternalLink size={14} />
                  </a>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default News;