'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { courses } from '@/lib/data';

export default function CoursesPage() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course => {
    const matchesFilter = filter === 'all' || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          
          <div className="flex gap-2">
            {['all', 'cs', 'language'].map((type) => (
              <button 
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-3 rounded-lg font-semibold capitalize transition-colors ${
                  filter === type 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {type === 'cs' ? 'Computer Science' : type}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCourses.map(course => (
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
              
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>{course.level}</span>
                <span>{course.instructor}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-400">{course.students} students</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}