'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [state, setState] = useState(searchParams.get('state') || '');
  const [type, setType] = useState(searchParams.get('type') || '');
  const [minFees, setMinFees] = useState(searchParams.get('minFees') || '');
  const [maxFees, setMaxFees] = useState(searchParams.get('maxFees') || '');

  useEffect(() => {
    const handler = setTimeout(() => {
      if (search !== (searchParams.get('search') || '')) {
        updateUrl({ search });
      }
    }, 400);
    return () => clearTimeout(handler);
  }, [search]); 

  const updateUrl = (overrides?: any) => {
    const params = new URLSearchParams(searchParams.toString());
    
    const applyParam = (key: string, value: string | undefined) => {
      if (value) params.set(key, value);
      else params.delete(key);
    };

    applyParam('search', overrides?.search !== undefined ? overrides.search : search);
    applyParam('state', overrides?.state !== undefined ? overrides.state : state);
    applyParam('type', overrides?.type !== undefined ? overrides.type : type);
    applyParam('minFees', overrides?.minFees !== undefined ? overrides.minFees : minFees);
    applyParam('maxFees', overrides?.maxFees !== undefined ? overrides.maxFees : maxFees);
    params.set('page', '1');
    
    router.push(`/colleges?${params.toString()}`);
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
    updateUrl({ state: e.target.value });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    updateUrl({ type: e.target.value });
  };

  const handleMinFeesBlur = () => updateUrl();
  const handleMaxFeesBlur = () => updateUrl();

  const handleClear = () => {
    setSearch('');
    setState('');
    setType('');
    setMinFees('');
    setMaxFees('');
    router.push('/colleges');
  };

  return (
    <div className="bg-white dark:bg-gray-800/80 p-6 rounded-2xl shadow-sm border border-gray-200/80 dark:border-gray-700/80 backdrop-blur-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filters
        </h2>
        <button onClick={handleClear} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Search Colleges</label>
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="e.g. IIT Bombay"
              className="w-full rounded-xl border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50 pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white shadow-sm"
            />
            <svg className="w-4 h-4 absolute left-3.5 top-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">State</label>
          <select
            value={state}
            onChange={handleStateChange}
            className="w-full rounded-xl border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white shadow-sm appearance-none"
          >
            <option value="">All States</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Delhi">Delhi</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Telangana">Telangana</option>
            <option value="Punjab">Punjab</option>
            <option value="Odisha">Odisha</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Institution Type</label>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => handleTypeChange({ target: { value: type === 'Public' ? '' : 'Public' } } as any)}
              className={`py-2 px-3 text-sm rounded-xl font-medium transition-colors border ${type === 'Public' ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/40 dark:border-blue-700 dark:text-blue-300' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700'}`}
            >
              Public
            </button>
            <button 
              onClick={() => handleTypeChange({ target: { value: type === 'Private' ? '' : 'Private' } } as any)}
              className={`py-2 px-3 text-sm rounded-xl font-medium transition-colors border ${type === 'Private' ? 'bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-900/40 dark:border-purple-700 dark:text-purple-300' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700'}`}
            >
              Private
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Annual Fees (₹)</label>
          <div className="flex items-center space-x-3">
            <div className="relative flex-1">
              <span className="absolute left-3 top-2.5 text-gray-500 text-sm">₹</span>
              <input
                type="number"
                value={minFees}
                onChange={(e) => setMinFees(e.target.value)}
                onBlur={handleMinFeesBlur}
                placeholder="Min"
                className="w-full rounded-xl border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50 pl-7 pr-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white shadow-sm"
              />
            </div>
            <span className="text-gray-400 font-medium">-</span>
            <div className="relative flex-1">
              <span className="absolute left-3 top-2.5 text-gray-500 text-sm">₹</span>
              <input
                type="number"
                value={maxFees}
                onChange={(e) => setMaxFees(e.target.value)}
                onBlur={handleMaxFeesBlur}
                placeholder="Max"
                className="w-full rounded-xl border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50 pl-7 pr-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 dark:text-white shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
