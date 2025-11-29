import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { RoutePath } from '../types';

interface SubMenuItem {
  label: string;
  to: string;
}

interface MenuGroup {
  title: string;
  items: SubMenuItem[];
}

interface MenuItem {
  title: string;
  path?: string;
  groups?: MenuGroup[];
}

const MENU_DATA: MenuItem[] = [
  {
    title: 'Industries',
    groups: [
      {
        title: 'Key Sectors',
        items: [
          { label: 'Energy & Utilities', to: '#' },
          { label: 'Public Safety & First Response', to: '#' },
          { label: 'Construction & AEC', to: '#' },
          { label: 'Mining & Aggregates', to: '#' },
          { label: 'Defense & Security', to: '#' },
          { label: 'Agriculture', to: '#' },
        ]
      }
    ]
  },
  {
    title: 'Products',
    groups: [
      {
        title: 'Flight Systems',
        items: [
          { label: 'AI Flight Controllers', to: '#' },
          { label: 'ESC & Propulsion', to: '#' },
          { label: 'GNSS & Navigation', to: '#' },
          { label: 'Obstacle Avoidance Sensors', to: '#' },
        ]
      },
      {
        title: 'Communication',
        items: [
          { label: 'HD Video Transmission', to: '#' },
          { label: 'Data Links & Telemetry', to: '#' },
          { label: 'Ground Control Stations', to: '#' },
          { label: 'Remote Controllers', to: '#' },
        ]
      },
      {
        title: 'Payloads',
        items: [
          { label: 'Optical Zoom Cameras', to: '#' },
          { label: 'Thermal Imaging', to: '#' },
          { label: 'LiDAR Mapping', to: '#' },
          { label: 'Multispectral Sensors', to: '#' },
        ]
      }
    ]
  },
  {
    title: 'Solutions',
    groups: [
      {
        title: 'Applications',
        items: [
          { label: 'Autonomous Inspection', to: '#' },
          { label: 'Aerial Mapping', to: '#' },
          { label: 'Surveillance & Monitoring', to: '#' },
          { label: 'Precision Agriculture', to: '#' },
        ]
      },
      {
        title: 'Platforms',
        items: [
          { label: 'Swarm Control System', to: '#' },
          { label: 'Fleet Management Cloud', to: '#' },
          { label: 'AI Analytics Suite', to: '#' },
        ]
      }
    ]
  }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  
  // Desktop Hover State
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null);

  // Mobile Accordion State
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleMobileItem = (title: string) => {
    setExpandedMobileItems(prev => 
      prev.includes(title) ? prev.filter(item => item !== title) : [...prev, title]
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-md py-0' : 'py-0 border-b border-gray-100'
      }`}
      onMouseLeave={() => setActiveDesktopMenu(null)}
    >
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo Area */}
          <Link to={RoutePath.HOME} className="flex items-center z-50 mr-8">
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`} 
              alt="AIMORELOGY" 
              className="h-8 w-auto object-contain" 
            />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center h-full">
          <ul className="flex h-full">
            {MENU_DATA.map((item) => (
              <li 
                key={item.title} 
                className="h-full"
                onMouseEnter={() => setActiveDesktopMenu(item.title)}
              >
                <button
                  className={`h-full px-5 text-sm font-bold border-b-2 transition-colors duration-200 flex items-center ${
                    activeDesktopMenu === item.title
                      ? 'border-[#76b900] text-gray-900' // NVIDIA Green accent for active state
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                  style={{ borderColor: activeDesktopMenu === item.title ? '#4f4398' : 'transparent' }}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons & Actions Area */}
        <div className="hidden lg:flex items-center gap-4 ml-auto">
           {/* Language Switcher */}
           <div className="relative">
             <button 
               onClick={() => setLangMenuOpen(!langMenuOpen)}
               className="flex items-center gap-1 text-gray-600 hover:text-[#4f4398] font-bold text-sm transition-colors"
             >
               <Globe size={18} />
               <span>EN</span>
               <ChevronDown size={14} />
             </button>
             
             {/* Dropdown */}
             {langMenuOpen && (
               <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-xl border border-gray-100 py-2 rounded-sm z-50">
                 <button className="block w-full text-left px-4 py-2 text-sm text-[#4f4398] font-bold bg-gray-50">English</button>
                 <button className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#4f4398]">中文</button>
                 <button className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#4f4398]">Русский</button>
               </div>
             )}
           </div>

           <div className="h-6 w-px bg-gray-200 mx-2"></div>

           <Link to={RoutePath.CONTACT} className="bg-[#4f4398] text-white px-5 py-2 text-xs font-bold uppercase hover:bg-[#3e3479] transition-colors">
             Contact Sales
           </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-900 z-50 hover:text-[#4f4398]"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      {activeDesktopMenu && (
        <div 
          className="hidden lg:block absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-xl z-40 animate-fadeIn"
          onMouseEnter={() => setActiveDesktopMenu(activeDesktopMenu)}
          onMouseLeave={() => setActiveDesktopMenu(null)}
        >
          <div className="container mx-auto px-6 py-10">
            <div className="grid grid-cols-4 gap-12">
              {MENU_DATA.find(m => m.title === activeDesktopMenu)?.groups?.map((group, idx) => (
                <div key={idx} className="col-span-1">
                  <h3 className="font-bold text-gray-900 uppercase text-sm mb-4 tracking-wider border-b border-gray-100 pb-2">
                    {group.title}
                  </h3>
                  <ul className="space-y-3">
                    {group.items.map((subItem) => (
                      <li key={subItem.label}>
                        <Link 
                          to={subItem.to} 
                          className="text-gray-600 hover:text-[#4f4398] text-sm font-medium transition-colors block"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              {/* Optional Featured Box in Menu */}
              <div className="col-span-1 bg-gray-50 p-6 rounded-sm border border-gray-100">
                <h4 className="font-bold text-[#4f4398] mb-2 uppercase text-xs">Featured</h4>
                <p className="text-gray-900 font-bold mb-2">CV184XH V1</p>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">The all-in-one AI flight controller revolutionizing UAV performance.</p>
                <Link to="#" className="text-xs font-bold uppercase underline hover:text-[#4f4398]">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Overlay (Accordion Style) */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col pt-16 px-0 transition-transform duration-300 overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col w-full">
            {MENU_DATA.map((item) => (
              <div key={item.title} className="border-b border-gray-100">
                <button 
                  onClick={() => toggleMobileItem(item.title)}
                  className="w-full flex justify-between items-center py-4 px-6 text-left"
                >
                  <span className={`text-lg font-bold ${expandedMobileItems.includes(item.title) ? 'text-[#4f4398]' : 'text-gray-900'}`}>
                    {item.title}
                  </span>
                  {expandedMobileItems.includes(item.title) ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                
                {/* Accordion Content */}
                <div 
                  className={`bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedMobileItems.includes(item.title) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2">
                    {item.groups?.map((group, idx) => (
                      <div key={idx} className="mb-6 last:mb-0">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 border-b border-gray-200 pb-1">
                          {group.title}
                        </h4>
                        <ul className="space-y-3 pl-2">
                          {group.items.map((subItem) => (
                            <li key={subItem.label}>
                              <Link 
                                to={subItem.to} 
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-700 hover:text-[#4f4398] font-medium block text-sm"
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Mobile Footer Area */}
            <div className="p-6 mt-4">
               <div className="flex gap-4 text-gray-600 font-bold mb-6 justify-center">
                 <span className="text-[#4f4398] border-b-2 border-[#4f4398]">EN</span>
                 <span>中文</span>
                 <span>RU</span>
               </div>
               <Link 
                 to={RoutePath.CONTACT} 
                 onClick={() => setIsMenuOpen(false)} 
                 className="block w-full text-center bg-[#4f4398] text-white py-3 font-bold uppercase rounded-sm shadow-sm"
               >
                 Contact Sales
               </Link>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
