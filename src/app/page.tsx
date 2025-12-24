'use client';

import React, { useState, useEffect } from 'react';
import { BookOpen, User, Briefcase, Star as StarIcon } from 'lucide-react';
import { provinces, courses, testimonials } from '@/lib/data';
import Link from 'next/link';

export default function Home() {
  const [studentCount, setStudentCount] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 12847) {
        count += Math.floor(Math.random() * 50) + 1;
        setStudentCount(count);
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Afghan Women Through
            <span className="text-blue-400 block">Digital Education</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Afghanistan's premier online academy teaching computer science and languages across all 34 provinces
          </p>

          <div className="bg-gray-900 rounded-lg p-6 mb-8 inline-block">
            <p className="text-2xl font-semibold">
              Serving <span className="text-blue-400">{studentCount.toLocaleString()}</span> students in
              <span className="text-purple-400"> 34 provinces</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Explore Courses
            </Link>
            <Link href="/about" className="px-8 py-3 border-2 border-blue-600 text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 text-center hover:border-blue-400 border border-gray-700 transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Online Courses</h3>
              <p className="text-gray-300">Access high-quality courses from anywhere in Afghanistan</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 text-center hover:border-purple-400 border border-gray-700 transition-all">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Teachers</h3>
              <p className="text-gray-300">Learn from qualified instructors with industry experience</p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 text-center hover:border-green-400 border border-gray-700 transition-all">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Job Support</h3>
              <p className="text-gray-300">Career guidance and job placement assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Afghanistan Map Visualization */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Province Coverage</h2>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {provinces.map((province) => (
                <div key={province.id} className="bg-gray-800/50 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold">{province.id}</span>
                  </div>
                  <p className="text-sm">{province.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.slice(0, 4).map(course => (
              <div key={course.id} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{course.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    course.category === 'cs'
                      ? 'bg-blue-600 text-white'
                      : 'bg-purple-600 text-white'
                  }`}>
                    {course.category === 'cs' ? 'CS' : 'Language'}
                  </span>
                </div>

                <p className="text-gray-400 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{course.duration}</span>
                  <span>{course.language}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-400">{course.students} students</span>
                  <Link href="/courses" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Enroll
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Student Testimonials</h2>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-400' : 'text-gray-600'}`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-gray-300 italic mb-4 text-lg">"{testimonials[currentTestimonial].text}"</p>
              <div>
                <h3 className="font-bold text-white">{testimonials[currentTestimonial].name}</h3>
                <p className="text-blue-400">{testimonials[currentTestimonial].province}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}