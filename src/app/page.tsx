'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen, User, Briefcase, Star as StarIcon, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { provinces, courses, testimonials } from '@/lib/data';
import { useLanguage } from './LanguageContext';
import Link from 'next/link';

export default function Home() {
  const [studentCount, setStudentCount] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    let count = 0;
    const target = 12847;
    const interval = setInterval(() => {
      if (count < target) {
        count += 150;
        setStudentCount(Math.min(count, target));
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
            className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            {t.heroTitle}
            <span className="text-blue-500 block mt-2">{t.heroSubtitle}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {t.heroDescription}
          </motion.p>

          <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 mb-10 inline-block border border-gray-800">
            <p className="text-2xl font-semibold">
              {t.serving} <span className="text-blue-400 font-mono">{studentCount.toLocaleString()}</span> {t.studentsIn}
              <span className="text-purple-400"> 34 {t.provinces}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
              {t.exploreCourses}
            </Link>
            <Link href="/about" className="px-8 py-4 border-2 border-gray-700 text-white rounded-xl font-bold hover:bg-gray-800 transition-all">
              {t.learnMore}
            </Link>
          </div>
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
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-800 hover:border-blue-500/50 transition-all"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}