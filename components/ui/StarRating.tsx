import React from 'react';

interface StarRatingProps {
  rating: number;
}

export function StarRating({ rating }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center text-amber-500 text-sm">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M12 2.25c-.247 0-.488.103-.64.286l-2.6 3.125-4.004.288c-.62.045-.882.813-.418 1.226l3.056 2.723-.9 3.93c-.14.613.518 1.12 1.058.805l3.448-2.008 3.448 2.008c.54.315 1.198-.192 1.058-.805l-.9-3.93 3.056-2.723c.464-.413.202-1.18-.418-1.226l-4.004-.288-2.6-3.125A.825.825 0 0012 2.25zM12 16.5v-12l2.138 2.565a.75.75 0 00.564.27l3.29.237-2.512 2.238a.75.75 0 00-.236.697l.74 3.232L13.14 12.1A.75.75 0 0012 11.75v4.75z" clipRule="evenodd" />
        </svg>
      )}
      {[...Array(Math.max(0, emptyStars))].map((_, i) => (
        <svg key={`empty-${i}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-300 dark:text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
      <span className="ml-1.5 font-medium text-gray-700 dark:text-gray-300">{rating.toFixed(1)}</span>
    </div>
  );
}
