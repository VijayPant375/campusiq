'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/colleges?search=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/colleges');
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm mb-8 border border-blue-100 dark:border-blue-800/50 shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400 mr-2.5 animate-pulse"></span>
            Your Gateway to Higher Education
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-black text-gray-900 dark:text-white tracking-tight mb-8 leading-[1.1]">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Perfect College</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
            Discover, compare, and find the perfect institution to shape your future. Free, open, and comprehensive data.
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative flex items-center shadow-2xl shadow-blue-900/5 dark:shadow-none rounded-2xl group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by college name, city, or state..."
              className="w-full pl-8 pr-36 py-5 rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/80 backdrop-blur-sm text-lg text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors shadow-inner"
            />
            <button 
              type="submit"
              className="absolute right-3 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md group-focus-within:bg-blue-700 active:scale-95"
            >
              Search
            </button>
          </form>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-28">
          <div className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md p-8 rounded-3xl border border-gray-100 dark:border-gray-800/60 text-center shadow-lg shadow-gray-200/20 dark:shadow-none hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">67+</h3>
            <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider text-sm">Top Colleges Listed</p>
          </div>
          
          <div className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md p-8 rounded-3xl border border-gray-100 dark:border-gray-800/60 text-center shadow-lg shadow-gray-200/20 dark:shadow-none hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">10+ States</h3>
            <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider text-sm">Across India</p>
          </div>
          
          <div className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-md p-8 rounded-3xl border border-gray-100 dark:border-gray-800/60 text-center shadow-lg shadow-gray-200/20 dark:shadow-none hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Free & Open</h3>
            <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider text-sm">No Paywalls, Just Data</p>
          </div>
        </div>
      </div>
    </div>
  );
}
