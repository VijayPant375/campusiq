import React from 'react';
import { StarRating } from '@/components/ui/StarRating';

interface ReviewCardProps {
  review: {
    author: string;
    rating: number;
    comment: string;
    createdAt: string;
  };
}

export function ReviewCard({ review }: ReviewCardProps) {
  const date = new Date(review.createdAt).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="bg-gray-50/80 dark:bg-gray-800/40 p-6 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
            {review.author.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white">{review.author}</h4>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{date}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 px-2.5 py-1 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <StarRating rating={review.rating} />
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
        "{review.comment}"
      </p>
    </div>
  );
}
