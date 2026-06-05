import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-gray-50 dark:bg-[#0a0a0a] text-center">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-full mb-8 inline-block animate-pulse">
        <svg className="w-20 h-20 text-blue-600 dark:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">Page Not Found</h2>
      
      <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-10 leading-relaxed">
        Oops! The page you are looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <Link 
          href="/" 
          className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Return to Home
        </Link>
        <Link 
          href="/colleges" 
          className="px-8 py-3.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow hover:-translate-y-0.5"
        >
          Browse Colleges
        </Link>
      </div>
    </div>
  );
}
