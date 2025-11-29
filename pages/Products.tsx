import React from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 border-b border-gray-100 pb-8">
          <h1 className="text-5xl font-black text-gray-900 uppercase tracking-tighter mb-4">Enterprise Solutions</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Explore our comprehensive portfolio of hardware and software designed to accelerate your business.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="px-6 py-2 bg-[#4f4398] text-white font-bold text-sm shadow-sm">All Solutions</button>
          <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 hover:border-[#4f4398] hover:text-[#4f4398] font-bold text-sm transition-all">Compute</button>
          <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 hover:border-[#4f4398] hover:text-[#4f4398] font-bold text-sm transition-all">Networking</button>
          <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 hover:border-[#4f4398] hover:text-[#4f4398] font-bold text-sm transition-all">Embedded</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-20 p-12 bg-gray-50 border border-gray-100 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Configuration?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
               Our solution architects are ready to help you design the perfect infrastructure for your AI and HPC workloads.
            </p>
            <button className="bg-[#4f4398] text-white px-8 py-3 font-bold text-sm hover:bg-[#3e3479] transition-colors">
               Contact a Specialist
            </button>
        </div>
      </div>
    </div>
  );
};

export default Products;