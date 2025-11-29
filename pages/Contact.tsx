import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl">
          
          {/* Info Section */}
          <div className="bg-gray-900 p-10 md:p-14 flex flex-col justify-between">
            <div>
              <div className="w-12 h-1 bg-[#4f4398] mb-8"></div>
              <h2 className="text-4xl font-black text-white uppercase mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                Have questions about our enterprise solutions? Reach out to our dedicated team via phone, WeChat, WhatsApp, or email.
              </p>
              
              <div className="space-y-8">
                {/* Sales Contacts */}
                <div className="flex items-start gap-5 group border-b border-gray-800 pb-6">
                  <Phone size={24} className="text-[#4f4398] mt-1 shrink-0" />
                  <div className="w-full">
                    <h3 className="font-bold text-white text-lg uppercase mb-4">Sales & Support</h3>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <p className="text-white font-bold">Yiran Ke</p>
                        <p className="text-gray-400 font-mono text-sm mb-1">+86 176 0665 4980</p>
                        <div className="flex items-center gap-2 text-xs text-[#76b900] font-bold uppercase">
                          <MessageCircle size={12} /> Mobile / WeChat / WhatsApp
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-white font-bold">Jeff Xie</p>
                        <p className="text-gray-400 font-mono text-sm mb-1">+86 189 3306 3380</p>
                        <div className="flex items-center gap-2 text-xs text-[#76b900] font-bold uppercase">
                          <MessageCircle size={12} /> Mobile / WeChat / WhatsApp
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-5 group border-b border-gray-800 pb-6">
                  <Mail size={24} className="text-[#4f4398] mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-white text-lg uppercase mb-1">Corporate Email</h3>
                    <a href="mailto:info@aimorelogy.com" className="text-gray-300 hover:text-white transition-colors">info@aimorelogy.com</a>
                  </div>
                </div>
                
                {/* Locations */}
                <div className="flex items-start gap-5 group">
                  <MapPin size={24} className="text-[#4f4398] mt-1 shrink-0" />
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-white text-lg uppercase mb-2">HQ (Shenzhen)</h3>
                      <p className="text-white text-sm font-bold mb-1">深圳市爱谋科技有限公司</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        深圳市宝安区西乡街道铁仔路朗峻广场<br/>T2栋A区603-12
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-white text-lg uppercase mb-2">Hong Kong</h3>
                      <p className="text-white text-sm font-bold mb-1">AIMORELOGY LIMITED</p>
                      <p className="text-gray-400 text-sm leading-relaxed uppercase">
                        Room H2 4/F, Century Industrial Centre,<br/>
                        33-35 Au Pui Wan Street Fotan,<br/>
                        Sha Tin, Hong Kong
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Section */}
          <div className="bg-gray-50 p-10 md:p-14 border border-gray-100 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 uppercase mb-8">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-gray-300 text-gray-900 px-4 py-3 focus:outline-none focus:border-[#4f4398] focus:ring-1 focus:ring-[#4f4398] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-gray-300 text-gray-900 px-4 py-3 focus:outline-none focus:border-[#4f4398] focus:ring-1 focus:ring-[#4f4398] transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white border border-gray-300 text-gray-900 px-4 py-3 focus:outline-none focus:border-[#4f4398] focus:ring-1 focus:ring-[#4f4398] transition-all"
                />
              </div>

               <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone (Optional)</label>
                <input 
                  type="tel" 
                  className="w-full bg-white border border-gray-300 text-gray-900 px-4 py-3 focus:outline-none focus:border-[#4f4398] focus:ring-1 focus:ring-[#4f4398] transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-white border border-gray-300 text-gray-900 px-4 py-3 focus:outline-none focus:border-[#4f4398] focus:ring-1 focus:ring-[#4f4398] transition-all resize-none"
                ></textarea>
              </div>
              
              <button 
                type="button"
                className="w-full bg-[#4f4398] hover:bg-[#3e3479] text-white font-bold uppercase py-4 tracking-wider transition-colors flex justify-center items-center gap-2 shadow-lg"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;