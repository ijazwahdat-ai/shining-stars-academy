
import React from 'react';
import { Award, CheckCircle, Target, Eye, Calendar, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { teachers } from '../lib/data';
import { useLanguage } from './LanguageContext';

export default function About() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">{t.about}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Shining Stars Online Academy is dedicated to bridging the digital divide for Afghan women,
            providing them with the tools and knowledge to thrive in the modern world.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10 }}
            className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-10 border border-gray-800 shadow-2xl shadow-blue-900/5 group"
          >
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-blue-500" />
            </div>
            <h2 className="text-3xl font-bold mb-6">{t.ourMission}</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              {t.ourMissionDesc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10 }}
            className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-10 border border-gray-800 shadow-2xl shadow-purple-900/5 group"
          >
            <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Eye className="w-8 h-8 text-purple-500" />
            </div>
            <h2 className="text-3xl font-bold mb-6">{t.ourVision}</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              {t.ourVisionDesc}
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">{t.ourJourney}</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 rounded-full opacity-20"></div>

            {[
              { year: '2020', title: 'Foundation', desc: 'Shining Stars Academy was established with a mission to provide accessible education for Afghan women.', icon: Calendar },
              { year: '2021', title: 'Expansion', desc: 'Launched our first computer science and language courses, reaching 1000+ students across 10 provinces.', icon: Users },
              { year: '2022', title: 'Growth', desc: 'Expanded to all 34 provinces with over 5000 enrolled students.', icon: Award },
              { year: '2023', title: 'Recognition', desc: 'Received official recognition from the Ministry of Higher Education for our educational excellence.', icon: CheckCircle }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`mb-16 relative flex items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black border-4 border-blue-600 rounded-full z-10 flex items-center justify-center shadow-lg shadow-blue-600/20">
                  <item.icon className="w-5 h-5 text-blue-500" />
                </div>

                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} pl-12`}>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-blue-500/30 transition-all">
                    <span className="text-blue-500 font-bold text-lg mb-2 block">{item.year}</span>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Teachers */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">{t.ourTeachers}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, idx) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 text-center border border-gray-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-24 h-24 bg-gray-800 rounded-3xl mx-auto mb-6 overflow-hidden relative group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-3xl">{teacher.name.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{teacher.name}</h3>
                <p className="text-blue-400 font-bold text-sm mb-4">{teacher.qualification}</p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{teacher.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {teacher.specialization.map((spec, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-12 border border-gray-800 text-center"
        >
          <h2 className="text-3xl font-bold mb-12">{t.governmentRecognition}</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-green-600/20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.ministryOfEducation}</h3>
              <p className="text-sm text-gray-500 font-medium">{t.officiallyRecognized}</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-blue-600/20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Education</h3>
              <p className="text-sm text-gray-500 font-medium">Certified Standards</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
