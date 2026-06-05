import React from 'react';

interface TabNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: string[];
}

export function TabNav({ activeTab, onTabChange, tabs }: TabNavProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700/60 mb-2">
      <nav className="-mb-px flex space-x-8 overflow-x-auto scrollbar-hide" aria-label="Tabs">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`
                whitespace-nowrap py-4 px-2 border-b-2 font-bold text-[15px] transition-all duration-300
                ${isActive
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300 dark:text-gray-400 dark:hover:text-white dark:hover:border-gray-500'
                }
              `}
            >
              {tab}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
