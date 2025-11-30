import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../types';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    console.log('Contact form submitted (demo):', formData);
    setFormData({
      name: '',
      email: '',
      company: '',
      jobTitle: '',
      phone: '',
      message: ''
    });
  };

  return (
    <footer className="bg-[#111111] text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Contact Form */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 pb-12 border-b border-gray-800">
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-bold text-white uppercase mb-4">Get in Touch</h3>
            <p className="text-sm mb-6 leading-relaxed">
              Contact our sales team to discuss how our solutions can help your business. Fill out the form to start the conversation via email.
            </p>
            <div className="space-y-2 text-sm">
               <p><span className="font-bold text-white">Email:</span> info@aimorelogy.com</p>
            </div>
          </div>
          
          <div className="lg:w-2/3 w-full">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <input 
                 type="text" 
                 name="name"
                 placeholder="Full Name"
                 value={formData.name}
                 onChange={handleChange}
                 required
                 className="bg-[#222] border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#4f4398] placeholder-gray-500"
               />
               <input 
                 type="email" 
                 name="email"
                 placeholder="Email Address"
                 value={formData.email}
                 onChange={handleChange}
                 required
                 className="bg-[#222] border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#4f4398] placeholder-gray-500"
               />
               <input 
                 type="text" 
                 name="company"
                 placeholder="Company"
                 value={formData.company}
                 onChange={handleChange}
                 className="bg-[#222] border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#4f4398] placeholder-gray-500"
               />
               <input 
                 type="text" 
                 name="jobTitle"
                 placeholder="Job Title"
                 value={formData.jobTitle}
                 onChange={handleChange}
                 className="bg-[#222] border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#4f4398] placeholder-gray-500"
               />
               <input 
                 type="tel" 
                 name="phone"
                 placeholder="Phone Number"
                 value={formData.phone}
                 onChange={handleChange}
                 className="bg-[#222] border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#4f4398] placeholder-gray-500 md:col-span-2"
               />
               <textarea 
                 name="message"
                 rows={3}
                 placeholder="How can we help you?"
                 value={formData.message}
                 onChange={handleChange}
                 required
                 className="bg-[#222] border border-gray-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#4f4398] placeholder-gray-500 md:col-span-2 resize-none"
               ></textarea>
               
               <div className="md:col-span-2">
                 {status === 'success' && (
                   <p className="text-green-400 text-sm mb-2">Thanks! We received your request (demo submit).</p>
                 )}
                 <button type="submit" className="bg-[#4f4398] text-white font-bold uppercase px-8 py-3 hover:bg-[#5f51b0] transition-colors flex items-center gap-2">
                   Submit <Send size={16} />
                 </button>
               </div>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase text-sm tracking-wider">Corporate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to={RoutePath.ABOUT} className="hover:text-[#4f4398] transition-colors">About Us</Link></li>
              <li><Link to={RoutePath.CONTACT} className="hover:text-[#4f4398] transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase text-sm tracking-wider">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to={RoutePath.PRODUCTS} className="hover:text-[#4f4398] transition-colors">CV184XH V1</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase text-sm tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#4f4398] transition-colors">Documents</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#4f4398] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#4f4398] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#4f4398] transition-colors">Cookie Preferences</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             {/* Matches Header Logo style but with white text for dark bg */}
             <img 
                src="https://placehold.co/220x50/111111/ffffff?text=AIMORELOGY&font=montserrat" 
                alt="AIMORELOGY" 
                className="h-8 w-auto object-contain opacity-80" 
             />
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
          <p className="text-xs text-gray-600 mt-4 md:mt-0">© {new Date().getFullYear()} AIMORELOGY.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
