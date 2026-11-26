'use client';

import React from 'react';

/*
 * The mark: a rounded frame with a play triangle, in the surrounding text color (currentColor).
 * Replaces the upstream OpenFilm logo, which this copy does not use.
 */
export function BrandLogo({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      className={`block shrink-0 ${className ?? ''}`.trim()}
      role="img"
      aria-label="Tungfilm"
    >
      <path fillRule="evenodd" d="M24 10H76Q90 10 90 24V76Q90 90 76 90H24Q10 90 10 76V24Q10 10 24 10ZM40 32V68L70 50Z" />
    </svg>
  );
}
