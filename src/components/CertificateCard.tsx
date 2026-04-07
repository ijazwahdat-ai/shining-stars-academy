
import React, { useState } from 'react';
import { Award, CheckCircle, XCircle, Search, Download, Share2, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './LanguageContext';

export default function Certificates() {
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState<{valid: boolean; message: string} | null>(null);
  const { t, isRTL } = useLanguage();

  const handleVerify = () => {
    if (!certificateId.trim()) return;

    // Simulate verification
    setVerificationResult({
      valid: certificateId.length > 5,
      message: certificateId.length > 5 ? 'Certificate is valid and verified.' : 'Invalid certificate ID. Please check and try again.'
    });
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.certificates}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Verify your achievements and showcase your expertise to the world.
          </p>
        </motion.div>

        {/* Certificate Verification */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-10 mb-20 border border-gray-800 shadow-2xl shadow-blue-900/10"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center space-x-3 rtl:space-x-reverse">
            <Search className="w-8 h-8 text-blue-500" />
            <span>{t.verifyCertificate}</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              placeholder={t.enterCertId}
              className={`flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all`}
            />
            <button
              onClick={handleVerify}
              className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
            >
              {t.verify}
            </button>
          </div>

          <AnimatePresence>
            {verificationResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mt-8 p-6 rounded-2xl flex items-center space-x-4 rtl:space-x-reverse ${
                  verificationResult.valid ? 'bg-green-600/10 text-green-400 border border-green-500/30' : 'bg-red-600/10 text-red-400 border border-red-500/30'
                }`}
              >
                {verificationResult.valid ? <CheckCircle className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
                <p className="text-lg font-medium">{verificationResult.message}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Certificate Sample */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-10 border border-gray-800"
          >
            <h2 className="text-3xl font-bold mb-8">{t.sampleCertificate}</h2>
            <div className="bg-white p-10 rounded-2xl shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 border-[16px] border-blue-600/10 pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 -rotate-45 translate-x-16 -translate-y-16"></div>

              <div className="text-center relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 font-serif">Certificate of Completion</h3>
                <p className="text-blue-600 font-bold mb-8 tracking-widest uppercase text-xs">Shining Stars Online Academy</p>

                <div className="w-20 h-0.5 bg-gray-200 mx-auto mb-8"></div>

                <p className="text-gray-500 italic mb-2">This certifies that</p>
                <p className="text-3xl font-bold text-gray-900 mb-6 font-serif">Fatima Akbari</p>

                <p className="text-gray-500 italic mb-2">has successfully completed the</p>
                <p className="text-2xl font-bold text-gray-900 mb-10">Web Development Course</p>

                <div className="flex justify-between items-end mt-12">
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Date Issued</p>
                    <p className="text-xs font-bold text-gray-800">December 15, 2023</p>
                  </div>
                  <div className="border-2 border-gray-100 p-2 rounded-lg">
                    <div className="w-16 h-16 bg-gray-50 flex items-center justify-center">
                      <span className="text-[8px] text-gray-300 font-bold">QR CODE</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Certificate ID</p>
                    <p className="text-xs font-bold text-gray-800">SSA-2023-8472</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4 rtl:space-x-reverse">
              <button className="flex items-center space-x-2 px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-10">{t.howToGetCertified}</h2>
            <div className="space-y-8">
              {[
                { title: t.completeCourse, desc: t.completeCourseDesc, icon: BookOpen },
                { title: t.passExam, desc: t.passExamDesc, icon: Award },
                { title: t.receiveCertificate, desc: t.receiveCertificateDesc, icon: CheckCircle }
              ].map((step, idx) => (
                <div key={idx} className="flex items-start space-x-6 rtl:space-x-reverse group">
                  <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-all duration-500">
                    <step.icon className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
