'use client';

import React, { useState } from 'react';

export default function CertificatesPage() {
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState<{valid: boolean; message: string} | null>(null);

  const handleVerify = () => {
    setVerificationResult({
      valid: certificateId.length > 0,
      message: certificateId.length > 0 ? 'Certificate is valid' : 'Invalid certificate ID'
    });
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Certificates</h1>

        {/* Certificate Verification */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 mb-12 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6">Verify Certificate</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              placeholder="Enter certificate ID"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleVerify}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Verify
            </button>
          </div>

          {verificationResult && (
            <div className={`mt-4 p-4 rounded-lg ${
              verificationResult.valid ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
            }`}>
              {verificationResult.message}
            </div>
          )}
        </div>

        {/* Certificate Sample */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 mb-12 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6">Sample Certificate</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Certificate of Completion</h3>
              <p className="text-gray-600 mb-6">Shining Stars Online Academy</p>
              <p className="text-xl text-gray-800 mb-2">This certifies that</p>
              <p className="text-2xl font-bold text-gray-800 mb-2">Fatima Akbari</p>
              <p className="text-gray-600 mb-6">has successfully completed the</p>
              <p className="text-xl font-bold text-gray-800 mb-6">Web Development Course</p>
              <p className="text-gray-600 mb-8">Date: December 15, 2023</p>
              <div className="flex justify-center">
                <div className="border border-gray-300 p-2">
                  <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">QR Code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}