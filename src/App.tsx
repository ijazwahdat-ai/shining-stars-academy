import React, { useState } from 'react';
import { LanguageProvider } from './components/LanguageContext';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Courses from './components/Courses';
import Certificates from './components/Certificates';
import About from './components/About';
import Graduates from './components/Graduates';
import Contact from './components/Contact';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setCurrentPage={setCurrentPage} />;
      case 'courses': return <Courses />;
      case 'certificates': return <Certificates />;
      case 'about': return <About />;
      case 'graduates': return <Graduates />;
      case 'contact': return <Contact />;
      default: return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black transition-colors duration-500">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">SS</span>
              </div>
              <span className="text-xl font-bold text-white">Shining Stars Academy</span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
              Empowering Afghan women through high-quality online education in computer science and languages.
              Bridging the digital gap across all 34 provinces.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {['home', 'courses', 'certificates', 'about', 'graduates', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => setCurrentPage(page)}
                    className="text-gray-500 hover:text-blue-400 transition-colors capitalize text-sm font-medium"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm font-medium">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm font-medium">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm font-medium">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs font-medium">
            © 2026 Shining Stars Online Academy. All rights reserved.
          </p>
          <p className="text-gray-600 text-[10px] mt-4 md:mt-0 uppercase tracking-[0.2em]">
            Designed with passion for Afghan Women
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
