
import React, { useState, useEffect } from 'react';
import { BookOpen, User, Briefcase, Star as StarIcon, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { provinces, courses, testimonials } from '../lib/data';
import { useLanguage } from './LanguageContext';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const [studentCount, setStudentCount] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    let count = 0;
    const target = 12847;
    const duration = 2000;
    const increment = target / (duration / 30);

    const interval = setInterval(() => {
      if (count < target) {
        count += increment;
        setStudentCount(Math.min(Math.floor(count), target));
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 flex items-center justify-center min-h-[80vh]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black -z-10"></div>
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            {t.heroTitle}
            <span className="text-blue-500 block mt-2">{t.heroSubtitle}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {t.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 mb-10 inline-block border border-gray-800"
          >
            <p className="text-2xl font-semibold">
              {t.serving} <span className="text-blue-400 font-mono">{studentCount.toLocaleString()}</span> {t.studentsIn}
              <span className="text-purple-400"> 34 {t.provinces}</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => setCurrentPage('courses')}
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
            >
              {t.exploreCourses}
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className="px-8 py-4 border-2 border-gray-700 text-white rounded-xl font-bold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
            >
              {t.learnMore}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">{t.whyChooseUs}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t.onlineCourses, desc: t.onlineCoursesDesc, icon: BookOpen, color: 'blue' },
              { title: t.certifiedTeachers, desc: t.certifiedTeachersDesc, icon: User, color: 'purple' },
              { title: t.jobSupport, desc: t.jobSupportDesc, icon: Briefcase, color: 'green' }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-800 hover:border-blue-500/50 transition-all group"
              >
                <div className={`w-16 h-16 bg-${feature.color}-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}-500`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Afghanistan Map Visualization */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">{t.provinceCoverage}</h2>
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-3xl p-10 border border-gray-800">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {provinces.map((province) => (
                <motion.div
                  key={province.id}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                  className="bg-gray-800/30 rounded-xl p-4 text-center border border-gray-800/50"
                >
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-xs">{province.code}</span>
                  </div>
                  <p className="text-sm font-medium truncate">{province.name}</p>
                  <p className="text-[10px] text-gray-500 mt-1">{province.students.toLocaleString()} students</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 px-4 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.featuredCourses}</h2>
              <p className="text-gray-400">Start your learning journey with our top-rated programs.</p>
            </div>
            <button
              onClick={() => setCurrentPage('courses')}
              className="hidden md:flex items-center space-x-2 rtl:space-x-reverse text-blue-400 font-bold hover:text-blue-300 transition-colors"
            >
              <span>View All</span>
              <ChevronRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.slice(0, 4).map(course => (
              <motion.div
                key={course.id}
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    course.category === 'cs'
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'bg-purple-600/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {course.category === 'cs' ? 'Computer Science' : 'Language'}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <StarIcon className="w-3 h-3 fill-current" />
                    <span className="text-[10px] font-bold ml-1">4.9</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-tight">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">{course.description}</p>

                <div className="mt-auto space-y-4">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span className="flex items-center">
                      <StarIcon className="w-3 h-3 mr-1" />
                      {course.duration}
                    </span>
                    <span>{course.language}</span>
                  </div>

                  <button
                    onClick={() => setCurrentPage('courses')}
                    className="w-full py-3 bg-gray-800 text-white rounded-xl font-bold hover:bg-blue-600 transition-all"
                  >
                    {t.enroll}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">{t.studentTestimonials}</h2>
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-10 md:p-16 border border-gray-800 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center border-8 border-black">
              <StarIcon className="w-8 h-8 text-white fill-current" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-8">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-6 h-6 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-500' : 'text-gray-700'}`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-gray-300 italic mb-10 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-blue-400 font-medium">{testimonials[currentTestimonial].province}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-12 space-x-2 rtl:space-x-reverse">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentTestimonial === i ? 'w-8 bg-blue-500' : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
