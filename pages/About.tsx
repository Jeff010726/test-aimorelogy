import React from 'react';
import { MapPin, User, Building2, Phone, Mail, Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       {/* Hero Section */}
       <div className="bg-[#111] text-white py-24 relative overflow-hidden">
          {/* Abstract Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-[#111] to-transparent"></div>

          <div className="container mx-auto px-6 relative z-10">
             <div className="max-w-3xl">
                <span className="text-[#4f4398] font-bold uppercase tracking-widest mb-4 block">Corporate Profile</span>
                <h1 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
                  About <br/> Aimorelogy
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-[#4f4398] pl-6">
                  Pioneering the next generation of intelligent flight control systems and AI-driven autonomous solutions for the industrial world.
                </p>
             </div>
          </div>
       </div>

       {/* Introduction */}
       <div className="py-20 container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
             <div className="md:w-1/3">
                <h2 className="text-3xl font-bold text-gray-900 uppercase mb-6">Our Mission</h2>
                <div className="h-1 w-20 bg-[#4f4398]"></div>
             </div>
             <div className="md:w-2/3">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                   AIMORELOGY is a technology leader dedicated to revolutionizing the UAV and robotics industry. We specialize in advanced edge AI computing, high-definition video transmission, and autonomous flight control algorithms.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                   By integrating vision, control, and communication into powerful, compact units like the CV184XH series, we enable industrial partners to build smarter, safer, and more efficient autonomous systems.
                </p>
             </div>
          </div>
       </div>

       {/* Leadership Section */}
       <div className="bg-white py-20 border-t border-gray-100">
          <div className="container mx-auto px-6">
             <h2 className="text-3xl font-bold text-gray-900 uppercase mb-12">
               Leadership
             </h2>
             
             <div className="flex flex-col lg:flex-row gap-16">
                {/* Left Column: Avatar & Profile Header */}
                <div className="lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left sticky top-24 self-start">
                   <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-50 shadow-lg mb-8 relative">
                        {/* 
                           FIX: Using a placeholder because the local file is missing.
                           TO RESTORE REAL IMAGE:
                           1. Place your file at: /public/assets/Public/kyr1.jpg
                           2. Change src below to: "/assets/Public/kyr1.jpg"
                        */}
                        <img 
                          src={`${import.meta.env.BASE_URL}assets/Public/kyr1.jpg`} 
                          alt="Ke Yiran" 
                          className="w-full h-full object-cover transition-all duration-500"
                        />
                   </div>
                   <h3 className="text-3xl font-black text-gray-900 uppercase mb-2">Ke Yiran</h3>
                   <p className="text-[#4f4398] font-bold uppercase tracking-widest text-xs">Founder & CEO</p>
                </div>

                {/* Right Column: Bio Content */}
                <div className="lg:w-3/4">
                    <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                       <p>
                         Ke Yiran is the Founder and CEO of AIMORELOGY, bringing extensive cross-domain experience ranging from underlying hardware to intelligent system algorithms. Before founding the company, he was deeply involved in the open-source hardware and RISC-V ecosystem, recognized as one of the early builders of the domestic RISC-V community. He has led the design, productization, and global promotion of several influential open-source hardware products.
                       </p>
                       <p>
                         During his tenure as a core executive at Milk-V, he spearheaded the product strategy, market system, and developer ecosystem for the Duo, Mars, and Pioneer series. Notably, the Pioneer achieved remarkable success in overseas crowdfunding and garnered attention from mainstream tech media, significantly boosting the global visibility of domestic open-source hardware.
                       </p>
                       <p>
                         His extensive background in chips and underlying systems has fostered deep technical thinking, product execution capabilities, and a natural resonance with developer culture. He believes the value of technology lies not just in performance metrics, but in enabling more people to "truly use it, touch it, and change it."
                       </p>
                       <p>
                         Post-2025, he has shifted his focus from system architecture to intelligent UAVs and AI systems. Founding AIMORELOGY, he focuses on UAV flight control, visual perception, edge AI inference, and intelligent mission systems, aiming to deliver higher value in industrial, security, inspection, and future autonomous flight scenarios through reliable autonomy and smarter perception.
                       </p>
                       <p>
                         Under his leadership, the team is transitioning from underlying hardware thinking to a system engineering approach fusing Flight Control + AI, driving product innovation with a rigorous engineering culture and a core mission to "Make Flight Smarter."
                       </p>
                    </div>

                    {/* Philosophy Box */}
                    <div className="mt-12 bg-gray-50 p-8 border-l-4 border-[#4f4398]">
                       <h4 className="flex items-center gap-2 font-bold text-gray-900 uppercase mb-4 text-sm tracking-wider">
                          <Quote size={16} className="text-[#4f4398]" /> Philosophy & Principles
                       </h4>
                       <ul className="space-y-3 text-gray-700 font-medium list-disc list-inside marker:text-[#4f4398]">
                          <li>Technology must be usable in reality, not just in demonstrations.</li>
                          <li>Innovation should improve the relationship between humans and technology.</li>
                          <li>Complex systems must be presented with a simple, reliable experience.</li>
                          <li>Every product must possess "trustworthy" stability and security.</li>
                       </ul>
                    </div>
                    
                    <p className="mt-8 text-sm text-gray-500 italic">
                       Ke Yiran remains an engineer at heart: personally reviewing system architectures, participating in flight control link design, and prioritizing underlying reliability and real-world user scenarios.
                    </p>
                </div>
             </div>
          </div>
       </div>

       {/* Locations */}
       <div className="bg-gray-50 py-24 border-t border-gray-200">
          <div className="container mx-auto px-6">
             <h2 className="text-3xl font-bold text-gray-900 uppercase mb-12 text-center">Global Presence</h2>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Shenzhen Office */}
                <div className="bg-white p-10 border border-gray-200 shadow-sm hover:border-[#4f4398] transition-all duration-300 group">
                   <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                      <div className="bg-gray-100 p-3 rounded-sm group-hover:bg-[#4f4398] transition-colors">
                        <Building2 className="text-[#4f4398] group-hover:text-white transition-colors" size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 uppercase">Shenzhen</h3>
                        <p className="text-xs text-[#4f4398] font-bold uppercase tracking-widest">Operations & R&D Center</p>
                      </div>
                   </div>

                   <div className="space-y-8">
                      <div>
                         <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-2">Company Name</h4>
                         <p className="text-gray-900 font-bold text-lg">深圳市爱谋科技有限公司</p>
                      </div>

                      <div className="flex gap-4">
                         <MapPin className="text-[#4f4398] shrink-0 mt-1" size={20} />
                         <div>
                            <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-2">Address</h4>
                            <p className="text-gray-700 leading-relaxed">
                              深圳市宝安区西乡街道铁仔路朗峻广场<br/>T2栋A区603-12
                            </p>
                         </div>
                      </div>

                      <div className="bg-gray-50 p-6 border border-gray-100">
                         <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                           <User size={14} /> Key Contacts
                         </h4>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                             <div>
                                <p className="font-bold text-gray-900 mb-1">Yiran Ke</p>
                                <a href="tel:+8617606654980" className="text-gray-600 hover:text-[#4f4398] text-sm flex items-center gap-2 font-medium transition-colors">
                                  <Phone size={14} /> +86 176 0665 4980
                                </a>
                             </div>
                             <div>
                                <p className="font-bold text-gray-900 mb-1">Jeff Xie</p>
                                <a href="tel:+8618933063380" className="text-gray-600 hover:text-[#4f4398] text-sm flex items-center gap-2 font-medium transition-colors">
                                  <Phone size={14} /> +86 189 3306 3380
                                </a>
                             </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Hong Kong Office */}
                <div className="bg-white p-10 border border-gray-200 shadow-sm hover:border-[#4f4398] transition-all duration-300 group">
                   <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
                      <div className="bg-gray-100 p-3 rounded-sm group-hover:bg-[#4f4398] transition-colors">
                        <Building2 className="text-[#4f4398] group-hover:text-white transition-colors" size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 uppercase">Hong Kong</h3>
                        <p className="text-xs text-[#4f4398] font-bold uppercase tracking-widest">International HQ</p>
                      </div>
                   </div>

                   <div className="space-y-8">
                      <div>
                         <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-2">Company Name</h4>
                         <p className="text-gray-900 font-bold text-lg">AIMORELOGY LIMITED</p>
                      </div>

                      <div className="flex gap-4">
                         <MapPin className="text-[#4f4398] shrink-0 mt-1" size={20} />
                         <div>
                            <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-2">Address</h4>
                            <p className="text-gray-700 leading-relaxed uppercase">
                              Room H2 4/F, Century Industrial Centre,<br/>
                              33-35 Au Pui Wan Street Fotan,<br/>
                              Sha Tin, Hong Kong
                            </p>
                         </div>
                      </div>

                      <div className="bg-gray-50 p-6 border border-gray-100">
                         <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                           <User size={14} /> Key Contacts
                         </h4>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                             <div>
                                <p className="font-bold text-gray-900 mb-1">Yiran Ke</p>
                                <a href="tel:+8617606654980" className="text-gray-600 hover:text-[#4f4398] text-sm flex items-center gap-2 font-medium transition-colors">
                                  <Phone size={14} /> +86 176 0665 4980
                                </a>
                             </div>
                             <div>
                                <p className="font-bold text-gray-900 mb-1">Jeff Xie</p>
                                <a href="tel:+8618933063380" className="text-gray-600 hover:text-[#4f4398] text-sm flex items-center gap-2 font-medium transition-colors">
                                  <Phone size={14} /> +86 189 3306 3380
                                </a>
                             </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>

       {/* Contact CTA */}
       <div className="bg-[#4f4398] py-16">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-black text-white uppercase mb-4">Ready to Innovate?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact our sales team today to discuss how our AI solutions can accelerate your business.
            </p>
            <a href="mailto:info@aimorelogy.com" className="inline-block bg-white text-[#4f4398] px-8 py-3 font-bold text-sm uppercase hover:bg-gray-100 transition-colors">
               Email Us Now
            </a>
         </div>
       </div>
    </div>
  );
};

export default About;
