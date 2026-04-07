
import React, { useState } from 'react';
import { Search, Filter, BookOpen, Star as StarIcon, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { courses } from '../lib/data';
import { useLanguage } from './LanguageContext';

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const { t, isRTL } = useLanguage();

  const filteredCourses = courses.filter(course => {
    const matchesFilter = filter === 'all' || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.courses}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose from our wide range of computer science and language courses designed for your success.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <div className="relative flex-1 group">
            <Search className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors`} />
            <input
              type="text"
              placeholder={t.searchCourses}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 bg-gray-900 border border-gray-800 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all`}
            />
          </div>

          <div className="flex p-1 bg-gray-900 border border-gray-800 rounded-2xl">
            {[
              { id: 'all', label: t.all },
              { id: 'cs', label: t.computerScience },
              { id: 'language', label: t.languages }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${
                  filter === btn.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  course.category === 'cs' ? 'bg-blue-600/20 text-blue-400' : 'bg-purple-600/20 text-purple-400'
                }`}>
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="flex items-center text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded-lg">
                  <StarIcon className="w-3 h-3 fill-current" />
                  <span className="text-[10px] font-bold ml-1">4.9</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">{course.title}</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-3">{course.description}</p>

              <div className="mt-auto space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 p-3 rounded-xl">
                    <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Duration</p>
                    <p className="text-xs font-bold">{course.duration}</p>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-xl">
                    <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">Language</p>
                    <p className="text-xs font-bold">{course.language}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-700 rounded-full border-2 border-gray-900 flex items-center justify-center">
                      <span className="text-[10px] font-bold">{course.instructor.charAt(0)}</span>
                    </div>
                    <span className="text-xs text-gray-400 ml-2">{course.instructor}</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">{course.students.toLocaleString()} students</span>
                </div>

                <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-600/10">
                  {t.enroll}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
