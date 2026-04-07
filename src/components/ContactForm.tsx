
import React, { useState } from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Send, Clock, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { provinces } from '../lib/data';
import { useLanguage } from './LanguageContext';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    province: ''
  });
  const { t, isRTL } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '', province: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">{t.contact}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have questions? We're here to help. Reach out to us through the form below or via our contact information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-10 border border-gray-800 shadow-2xl shadow-blue-900/5"
          >
            <h2 className="text-3xl font-bold mb-10 flex items-center space-x-4 rtl:space-x-reverse">
              <Send className="w-8 h-8 text-blue-500" />
              <span>{t.sendUsMessage}</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t.name}</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t.email}</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="province" className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t.province}</label>
                <select
                  id="province"
                  value={formData.province}
                  onChange={(e) => setFormData({...formData, province: e.target.value})}
                  required
                  className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all appearance-none"
                >
                  <option value="">Select your province</option>
                  {provinces.map(province => (
                    <option key={province.id} value={province.name}>{province.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t.message}</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-600/20 flex items-center justify-center space-x-3 rtl:space-x-reverse"
              >
                <Send className="w-6 h-6" />
                <span>{t.sendMessage}</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-between h-full"
          >
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-10 border border-gray-800 shadow-2xl shadow-blue-900/5 mb-12">
              <h2 className="text-3xl font-bold mb-10">{t.contactInfo}</h2>

              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mr-6 rtl:mr-0 rtl:ml-6 group-hover:bg-blue-600 transition-all duration-500">
                    <MapPin className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{t.address}</h3>
                    <p className="text-gray-400">Kabul, Afghanistan</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-purple-600/10 rounded-xl flex items-center justify-center mr-6 rtl:mr-0 rtl:ml-6 group-hover:bg-purple-600 transition-all duration-500">
                    <Mail className="w-6 h-6 text-purple-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{t.email}</h3>
                    <p className="text-gray-400">info@shiningstars.af</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-green-600/10 rounded-xl flex items-center justify-center mr-6 rtl:mr-0 rtl:ml-6 group-hover:bg-green-600 transition-all duration-500">
                    <Phone className="w-6 h-6 text-green-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{t.phone}</h3>
                    <p className="text-gray-400">+93 79 123 4567</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-gray-800">
                <h3 className="text-xl font-bold mb-6">{t.followUs}</h3>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all hover:scale-110">
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-10 border border-gray-800 shadow-2xl shadow-blue-900/5">
              <h2 className="text-3xl font-bold mb-8 flex items-center space-x-4 rtl:space-x-reverse">
                <Clock className="w-8 h-8 text-blue-500" />
                <span>{t.officeHours}</span>
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-gray-800/30 p-4 rounded-2xl">
                  <span className="text-gray-400 font-medium">Saturday - Thursday</span>
                  <span className="text-white font-bold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center bg-gray-800/30 p-4 rounded-2xl">
                  <span className="text-gray-400 font-medium">Friday</span>
                  <span className="text-red-400 font-bold">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
