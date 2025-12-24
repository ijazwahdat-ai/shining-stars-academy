'use client';

import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { teachers } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">About Our Academy</h1>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To empower Afghan women through accessible, high-quality digital education in computer science and languages.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To become the leading provider of online education for Afghan women, fostering a generation of skilled professionals.
            </p>
          </div>
        </div>

        {/* Teachers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Teachers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map(teacher => (
              <div key={teacher.id} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                    <span className="text-white font-bold">{teacher.name.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{teacher.name}</h3>
                <p className="text-blue-400 mb-2">{teacher.qualification}</p>
                <p className="text-gray-300 text-sm">{teacher.experience}</p>
                <p className="text-gray-400 text-sm mt-2">{teacher.specialization.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-center mb-8">Government Recognition</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-800/50 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold">Ministry of Higher Education</h3>
              <p className="text-sm text-gray-400">Officially Recognized</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}