import React from 'react';

interface PlacementCardProps {
  placement: {
    year: number;
    averagePackage: number;
    highestPackage: number;
    placementRate: number;
  };
}

export function PlacementCard({ placement }: PlacementCardProps) {
  const avgLPA = (placement.averagePackage / 100000).toFixed(2);
  const highestLPA = (placement.highestPackage / 100000).toFixed(2);

  return (
    <div className="bg-white dark:bg-gray-800/80 p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-xl mr-3">
          <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        Latest Placement Records ({placement.year})
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50/50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-900/30">
          <p className="text-xs uppercase tracking-wider font-semibold text-green-800 dark:text-green-400 mb-2">Average Package</p>
          <p className="text-3xl font-extrabold text-green-900 dark:text-green-300">₹{avgLPA} <span className="text-xl font-bold">LPA</span></p>
        </div>
        
        <div className="bg-blue-50/50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/30">
          <p className="text-xs uppercase tracking-wider font-semibold text-blue-800 dark:text-blue-400 mb-2">Highest Package</p>
          <p className="text-3xl font-extrabold text-blue-900 dark:text-blue-300">₹{highestLPA} <span className="text-xl font-bold">LPA</span></p>
        </div>
        
        <div className="bg-purple-50/50 dark:bg-purple-900/10 p-6 rounded-2xl border border-purple-100 dark:border-purple-900/30">
          <p className="text-xs uppercase tracking-wider font-semibold text-purple-800 dark:text-purple-400 mb-2">Placement Rate</p>
          <p className="text-3xl font-extrabold text-purple-900 dark:text-purple-300">{placement.placementRate}%</p>
        </div>
      </div>
    </div>
  );
}
