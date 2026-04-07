'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Award, User, GraduationCap, Mail, Star, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Language } from '@/lib/data';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t, isRTL } = useLanguage();

  const menuItems = [
    { id: '/', label: t.home, icon: Home },
    { id: '/courses', label: t.courses, icon: BookOpen },
    { id: '/certificates', label: t.certificates, icon: Award },
    { id: '/about', label: t.about, icon: User },
    { id: '/graduates', label: t.graduates, icon: GraduationCap },
    { id: '/contact', label: t.contact, icon: Mail }
  ];

  const languages = [
    { code: 'en' as Language, label: 'English' },
    { code: 'fa' as Language, label: 'دری' },
    { code: 'ps' as Language, label: 'پښتو' }
  ];

  return (
    <nav className="bg-gray-900/80 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse group">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Star className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white hidden lg:block">{t.academyName}</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex space-x-1 rtl:space-x-reverse">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.id}
                  className={`flex items-center space-x-1 rtl:space-x-reverse px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    pathname === item.id
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 rtl:space-x-reverse px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{languages.find(l => l.code === language)?.label}</span>
              </button>

              {isLangMenuOpen && (
                <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-2 w-32 bg-gray-800 border border-gray-700 rounded-md shadow-lg py-1 z-50`}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`block w-full text-left ${isRTL ? 'text-right' : 'text-left'} px-4 py-2 text-sm ${
                        language === lang.code ? 'text-blue-400 bg-gray-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="p-2 text-gray-300">
              <Globe className="w-6 h-6" />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-300">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 rtl:space-x-reverse w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === item.id ? 'text-blue-400 bg-blue-500/10' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}