import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group flex flex-col bg-white h-full border border-gray-200 transition-all duration-300 hover:border-[#4f4398]">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 bg-[#4f4398] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
           {product.category}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4f4398] transition-colors leading-tight">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
          {product.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <button className="text-[#4f4398] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
            Learn More <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;