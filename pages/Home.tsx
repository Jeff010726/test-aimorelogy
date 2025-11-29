import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Cpu, Wifi, Activity, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import BlogCard from '../components/BlogCard';
import { PRODUCTS, BLOG_POSTS } from '../constants';
import { RoutePath } from '../types';

interface SlideData {
  id: number;
  category: string;
  title: string;
  description: string;
  navTitle: string;
  navDesc: string;
  buttonText: string;
  link: string;
  bgImage: string;
}

// Reuseable Carousel Component
interface CarouselSectionProps {
  title: string;
  children: React.ReactNode;
}

const CarouselSection: React.FC<CarouselSectionProps> = ({ title, children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0);

  const updateProgress = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      // Calculate thumb width percentage (visible area / total width)
      const visibleRatio = clientWidth / scrollWidth;
      setThumbWidth(Math.min(100, visibleRatio * 100));

      // Calculate position
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 100);
      } else {
        setScrollProgress(0);
      }
    }
  };

  useEffect(() => {
    updateProgress();
    window.addEventListener('resize', updateProgress);
    return () => window.removeEventListener('resize', updateProgress);
  }, [children]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth / 2; // Scroll half screen
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        {/* Header: Title + Controls */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          
          {/* Desktop Controls */}
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-8 h-8 flex items-center justify-center bg-[#4f4398] text-white hover:bg-[#3e3479] transition-colors"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-8 h-8 flex items-center justify-center bg-[#4f4398] text-white hover:bg-[#3e3479] transition-colors"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          onScroll={updateProgress}
          className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {children}
        </div>

        {/* Custom Progress Bar - Sharp Corners */}
        <div className="w-full h-1 bg-gray-200 mt-4 relative overflow-hidden">
           {/* The Thumb */}
           <div 
             className="absolute top-0 h-full bg-[#4f4398] transition-all duration-100 ease-out"
             style={{ 
               width: `${thumbWidth}%`,
               left: `calc(${scrollProgress}% * ${(100 - thumbWidth) / 100})`
             }}
           ></div>
        </div>
      </div>
    </div>
  );
};


const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideDuration = 5000;
  
  // Duplicate data to ensure enough content for scrolling demonstration
  const carouselProducts = [...PRODUCTS, ...PRODUCTS]; 
  const carouselPosts = [...BLOG_POSTS, ...BLOG_POSTS, ...BLOG_POSTS];

  const slides: SlideData[] = [
    {
      id: 0,
      category: 'Data Center',
      title: 'Aimorelogy and Microsoft Expand Partnership for New AI Era',
      description: 'Full-stack collaboration powers AI Superfactories, enterprise agents, intelligent data, cybersecurity, and physical AI.',
      navTitle: 'Data Center',
      navDesc: 'Nexus and Microsoft Expand Partnership...',
      buttonText: 'Read More',
      link: RoutePath.BLOG,
      bgImage: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 1,
      category: 'Robotics',
      title: 'Advance Automation with Intelligent Robots',
      description: 'Train, simulate, and deploy AI robots to revolutionize manufacturing and logistics workflows.',
      navTitle: 'Robotics',
      navDesc: 'Train, simulate, and deploy AI robots.',
      buttonText: 'Explore Robotics',
      link: RoutePath.PRODUCTS,
      bgImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'Artificial Intelligence',
      title: 'Generative AI for the Enterprise',
      description: 'Build and deploy generative AI models that transform your business data into actionable insights.',
      navTitle: 'Artificial Intelligence',
      navDesc: 'Build and deploy generative AI.',
      buttonText: 'Learn More',
      link: RoutePath.BLOG,
      bgImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'Events',
      title: 'Join Us at Aimorelogy GTC',
      description: 'Explore the best of GTC Washington, D.C. The premier conference for the era of AI.',
      navTitle: 'Nexus GTC',
      navDesc: 'Explore the best of GTC Washington, D.C.',
      buttonText: 'Register Now',
      link: RoutePath.NEWS,
      bgImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop'
    },
    {
      id: 4,
      category: 'HPC',
      title: 'Supercomputing at Scale',
      description: 'Watch the SC25 Fireside Chat and discover how high-performance computing is solving the world\'s toughest problems.',
      navTitle: 'HPC',
      navDesc: 'Watch the SC25 Fireside Chat.',
      buttonText: 'Watch Video',
      link: RoutePath.NEWS,
      bgImage: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2000&auto=format&fit=crop'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, slideDuration);
    return () => clearInterval(timer);
  }, []);

  const handleManualSelect = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-white">
      
      {/* Hero Carousel Section */}
      <section className="relative h-[650px] overflow-hidden bg-gray-900">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 relative h-full flex flex-col justify-center">
              <div className="max-w-3xl animate-fadeIn">
                <span className="font-bold text-[#a094e3] mb-3 block uppercase text-sm tracking-widest">{slide.category}</span>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight shadow-black drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
                  {slide.description}
                </p>
                
                <Link 
                  to={slide.link} 
                  className="inline-block bg-[#4f4398] text-white hover:bg-[#6a5cc2] px-8 py-3.5 font-bold text-sm uppercase tracking-wide transition-colors duration-300"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Navigation Strip - Sharp Corners Mobile */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-row gap-1 md:gap-0 md:grid md:grid-cols-5 py-2 md:py-0">
            {slides.map((slide, index) => (
              <div 
                key={slide.id} 
                onClick={() => handleManualSelect(index)}
                className="flex-1 md:flex-none relative group cursor-pointer h-1 md:h-auto md:pt-4 md:pb-6 md:pr-4"
              >
                <div className="absolute top-0 left-0 w-full h-full md:h-1 bg-gray-200 group-hover:bg-gray-300 transition-colors"></div>
                {index === currentSlide && (
                   <div 
                     className="absolute top-0 left-0 h-full md:h-1 bg-[#4f4398] z-10"
                     style={{ animation: `fillBar ${slideDuration}ms linear forwards` }}
                   ></div>
                )}
                <style>{`
                  @keyframes fillBar {
                    from { width: 0%; }
                    to { width: 100%; }
                  }
                `}</style>
                <div className="hidden md:block">
                  <h4 className={`font-bold text-xs uppercase mb-1 transition-colors ${
                    index === currentSlide ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-800'
                  }`}>
                    {slide.navTitle}
                  </h4>
                  <p className={`text-sm font-medium leading-snug transition-colors line-clamp-2 ${
                    index === currentSlide ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'
                  }`}>
                    {slide.navDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Purple Banner */}
      <section className="bg-gray-100 py-0">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row bg-[#f2f2f2] md:bg-gray-100">
             <div className="bg-[#4f4398] p-8 md:p-12 text-white flex flex-col justify-center min-w-[200px] md:w-1/4">
                <h2 className="text-4xl font-black uppercase leading-none mb-1">AIMORE</h2>
                <h2 className="text-4xl font-black uppercase leading-none text-white/70">CONF</h2>
                <h2 className="text-4xl font-black uppercase leading-none">2025</h2>
             </div>
             <div className="p-8 md:p-12 flex flex-col justify-center bg-[#eaeaea] w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Aimorelogy Conference Registration Is Now Open</h3>
                <p className="text-gray-600 mb-6 max-w-3xl">
                  Join developers, researchers, and business leaders on March 16–19 as they come together to explore the next wave of AI innovation. Take advantage of the early rate.
                </p>
                <a href="#" className="flex items-center gap-1 text-[#4f4398] font-bold hover:gap-2 transition-all">
                  Get Your Pass Now <ChevronRight size={16} />
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* Product Spotlight: CV184XH V1 */}
      <section className="bg-white text-gray-900 py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2 relative">
               {/* Fixed Image Container: Larger mobile height, no hover scale, no shadow */}
               <div className="relative w-full h-64 md:h-auto md:aspect-video bg-gray-50 rounded-sm border border-gray-200 flex items-center justify-center overflow-hidden">
                 <img 
                    src="https://images.unsplash.com/photo-1608543884814-c78274191026?q=80&w=1000&auto=format&fit=crop" 
                    alt="CV184XH V1 Flight Controller" 
                    className="w-full h-full object-cover" 
                 />
                 <div className="absolute top-4 right-4 bg-[#4f4398] text-white text-xs font-bold px-3 py-1 uppercase shadow-md z-20">
                   New Release
                 </div>
               </div>
             </div>
             <div className="lg:w-1/2">
                <h4 className="text-[#4f4398] font-bold uppercase tracking-widest mb-2">All-in-One AI Flight Controller</h4>
                <h2 className="text-5xl font-black text-gray-900 mb-6 uppercase leading-none">CV184XH V1</h2>
                <p className="text-xl text-gray-600 mb-8 font-light border-l-4 border-[#4f4398] pl-6">
                  "Vision. Video Link. Control."
                  <br/>
                  <span className="text-sm mt-2 block text-gray-500">The ultimate answer for the next generation of UAV brains.</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                   <div className="bg-gray-50 p-4 border border-gray-200 hover:border-[#4f4398] transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <Cpu className="text-[#4f4398]" size={20} />
                        <h5 className="font-bold text-gray-900 uppercase text-sm">1.5 TOPS Edge AI</h5>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">Local execution of complex detection models with zero latency.</p>
                   </div>
                   <div className="bg-gray-50 p-4 border border-gray-200 hover:border-[#4f4398] transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <Wifi className="text-[#4f4398]" size={20} />
                        <h5 className="font-bold text-gray-900 uppercase text-sm">10KM Video Link</h5>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">HD transmission with high-power Wi-Fi module optimizations.</p>
                   </div>
                   <div className="bg-gray-50 p-4 border border-gray-200 hover:border-[#4f4398] transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <Eye className="text-[#4f4398]" size={20} />
                        <h5 className="font-bold text-gray-900 uppercase text-sm">4MP Starlight ISP</h5>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">Night vision capable sensor @ 90FPS for precise analysis.</p>
                   </div>
                   <div className="bg-gray-50 p-4 border border-gray-200 hover:border-[#4f4398] transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <Activity className="text-[#4f4398]" size={20} />
                        <h5 className="font-bold text-gray-900 uppercase text-sm">45% Smaller</h5>
                      </div>
                      <p className="text-gray-600 text-xs leading-relaxed">Redefining size and power. Highly integrated industrial design.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                  <button className="bg-[#4f4398] text-white px-8 py-3 font-bold text-sm uppercase hover:bg-[#6a5cc2] transition-colors">
                    View Specifications
                  </button>
                  <button className="bg-transparent border border-gray-300 text-gray-900 px-8 py-3 font-bold text-sm uppercase hover:border-gray-900 transition-colors">
                    Contact Sales
                  </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Solutions (NVIDIA Scroll Style) */}
      <CarouselSection title="Enterprise Solutions">
        {carouselProducts.map((product, idx) => (
          <div key={`prod-${idx}`} className="flex-none w-[85vw] md:w-[350px] lg:w-[400px] h-full snap-start">
            <ProductCard product={product} />
          </div>
        ))}
      </CarouselSection>

      {/* Latest News (NVIDIA Scroll Style) */}
      <CarouselSection title="Latest Headlines">
        {carouselPosts.map((post, idx) => (
          <div key={`news-${idx}`} className="flex-none w-[85vw] md:w-[350px] lg:w-[400px] h-full snap-start">
             <BlogCard post={post} />
          </div>
        ))}
      </CarouselSection>

    </div>
  );
};

export default Home;