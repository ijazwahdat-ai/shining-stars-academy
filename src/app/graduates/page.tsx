'use client';

import React from 'react';
import { Star as StarIcon } from 'lucide-react';
import { graduates } from '@/lib/data';

export default function GraduatesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Graduates</h1>

        {/* Stats */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 mb-12 text-center border border-gray-700">
          <h2 className="text-3xl font-bold mb-4">Graduate Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-blue-400">90%</p>
              <p className="text-gray-300">Job Placement Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-400">8,934</p>
              <p className="text-gray-300">Certified Graduates</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400">34</p>
              <p className="text-gray-300">Provinces Represented</p>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {graduates.map(grad => (
            <div key={grad.id} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">{grad.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{grad.name}</h3>
              <p className="text-center text-blue-400 mb-2">{grad.province}</p>
              <p className="text-gray-300 italic mb-4">"{grad.testimonial}"</p>
              <div className="flex justify-between items-center">
                <span className="text-green-400 font-semibold">{grad.job}</span>
                <span className="text-gray-400">{grad.company}</span>
              </div>
              <div className="flex mt-2 justify-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${i < grad.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}