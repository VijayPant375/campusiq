'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export function CompareBar() {
  const [compareIds, setCompareIds] = useState<number[]>([]);

  useEffect(() => {
    const checkCompareIds = () => {
      const idsStr = localStorage.getItem('compareIds');
      if (idsStr) {
        try {
          const ids = JSON.parse(idsStr);
          setCompareIds(Array.isArray(ids) ? ids : []);
        } catch (e) {
          setCompareIds([]);
        }
      } else {
        setCompareIds([]);
      }
    };

    checkCompareIds();
    
    window.addEventListener('compareUpdated', checkCompareIds);
    return () => window.removeEventListener('compareUpdated', checkCompareIds);
  }, []);

  if (compareIds.length < 2) return null;

  const url = `/compare?ids=${compareIds.join(',')}`;

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-4 transform transition-all duration-500 ease-out animate-in slide-in-from-bottom-10">
      <div className="max-w-md mx-auto bg-gray-900/95 dark:bg-white/95 backdrop-blur-xl border border-gray-800 dark:border-gray-200 p-4 rounded-3xl shadow-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3.5 pl-2">
          <div className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/30">
            {compareIds.length}
          </div>
          <div>
            <p className="text-white dark:text-gray-900 font-bold text-sm tracking-wide">Colleges Selected</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">Ready to compare</p>
          </div>
        </div>
        <Link 
          href={url}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-md hover:shadow-blue-500/25 active:scale-95"
        >
          Compare →
        </Link>
      </div>
    </div>
  );
}
