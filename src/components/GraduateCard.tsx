
import React from 'react';
import { Star as StarIcon, GraduationCap, Users, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { graduates } from '../lib/data';
import { useLanguage } from './LanguageContext';

export default function Graduates() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">{t.graduates}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our graduates are the shining stars of Afghanistan, making a real impact in their communities and the global tech industry.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-12 mb-24 text-center border border-gray-800 shadow-2xl shadow-blue-900/5"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16">{t.graduateSuccess}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8 text-blue-500" />
              </div>
              <p className="text-5xl font-bold text-blue-400 mb-2 font-mono">90%</p>
              <p className="text-gray-400 font-medium uppercase tracking-wider text-xs">{t.jobPlacementRate}</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-green-500" />
              </div>
              <p className="text-5xl font-bold text-green-400 mb-2 font-mono">8,934</p>
              <p className="text-gray-400 font-medium uppercase tracking-wider text-xs">{t.certifiedGraduates}</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-purple-500" />
              </div>
              <p className="text-5xl font-bold text-purple-400 mb-2 font-mono">34</p>
              <p className="text-gray-400 font-medium uppercase tracking-wider text-xs">{t.provincesRepresented}</p>
            </div>
          </div>
        </motion.div>

        {/* Success Stories */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">{t.successStories}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {graduates.map((grad, idx) => (
            <motion.div
              key={grad.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all group flex flex-col h-full"
            >
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/20">
                  <span className="text-white font-bold text-2xl">{grad.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">{grad.name}</h3>
                  <div className="flex items-center text-blue-400 text-sm mt-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{grad.province}</span>
                  </div>
                </div>
              </div>

              <div className="relative mb-8">
                <div className="absolute -left-2 -top-2 text-blue-500/20 text-6xl font-serif">"</div>
                <p className="text-gray-400 italic leading-relaxed relative z-10">
                  {grad.testimonial}
                </p>
              </div>

              <div className="mt-auto pt-8 border-t border-gray-800">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-green-400 font-bold text-sm">{grad.job}</p>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mt-1">{grad.company}</p>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-3 h-3 ${i < grad.rating ? 'text-yellow-500' : 'text-gray-700'}`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                  <span>{grad.course}</span>
                  <span>Class of {grad.graduationYear}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
