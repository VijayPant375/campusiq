'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CollegeCard } from '@/components/colleges/CollegeCard';
import { FilterSidebar } from '@/components/colleges/FilterSidebar';
import { Pagination } from '@/components/colleges/Pagination';

interface College {
  id: number;
  name: string;
  location: string;
  state: string;
  type: string;
  rating: number;
  totalFees: number;
  imageUrl?: string;
}

interface FetchResponse {
  colleges: College[];
  total: number;
  page: number;
  totalPages: number;
  error?: string;
}

function CollegesContent() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<FetchResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchColleges = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams(searchParams.toString());
        if (!params.has('page')) params.set('page', '1');
        if (!params.has('limit')) params.set('limit', '9');
        
        const res = await fetch(`/api/colleges?${params.toString()}`);
        if (!res.ok) {
          throw new Error('Failed to fetch colleges');
        }
        
        const result = await res.json();
        if (result.error) throw new Error(result.error);
        
        setData(result);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, [searchParams]);

  return (
    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative">
      {/* Sidebar */}
      <div className="w-full md:w-[280px] lg:w-[320px] flex-shrink-0">
        <div className="sticky top-6">
          <FilterSidebar />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
              Explore Colleges
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Find the perfect institution to shape your future.
            </p>
          </div>
          {data && !loading && (
            <div className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full self-start md:self-auto border border-blue-100 dark:border-blue-800/50">
              {data.total} {data.total === 1 ? 'College' : 'Colleges'} Found
            </div>
          )}
        </div>

        {error ? (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-8 rounded-3xl flex flex-col items-center justify-center border border-red-100 dark:border-red-900/50 shadow-sm text-center">
            <div className="bg-red-100 dark:bg-red-800/50 p-3 rounded-full mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-red-800 dark:text-red-300">Oops! Something went wrong</h3>
            <p className="font-medium mb-6 opacity-90 max-w-md">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors shadow-sm font-medium"
            >
              Try Again
            </button>
          </div>
        ) : loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl h-[340px] shadow-sm border border-gray-100 dark:border-gray-700 animate-pulse overflow-hidden flex flex-col">
                <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
                <div className="p-5 space-y-4">
                  <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mt-auto"></div>
                </div>
              </div>
            ))}
          </div>
        ) : data?.colleges.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 p-12 lg:p-16 rounded-3xl text-center border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="bg-gray-50 dark:bg-gray-900/50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">No colleges found</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto text-lg">
              We couldn't find any colleges matching your current filters. Try adjusting them to see more results.
            </p>
            <button 
              onClick={() => window.location.href = '/colleges'}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {data?.colleges.map(college => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>
            
            {data && (
              <Pagination 
                currentPage={data.page} 
                totalPages={data.totalPages} 
                totalItems={data.total} 
                limit={9} 
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function CollegesPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        }>
          <CollegesContent />
        </Suspense>
      </div>
    </div>
  );
}
