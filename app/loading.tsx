import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-900/30 rounded-full"></div>
        <div className="w-16 h-16 border-4 border-blue-600 rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
      </div>
      <p className="mt-6 text-gray-500 dark:text-gray-400 font-medium tracking-wide animate-pulse">
        Loading CampusIQ...
      </p>
    </div>
  );
}
