import React from 'react'

/** Bundle of stainless pipes, drawn in the same line weight as the Lucide icons. */
export function PipesIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* pipe bodies running up-right */}
      <path d="M8.5 19.5 L19 9" />
      <path d="M11 25.5 L24.5 12" />
      <path d="M16.5 26 L27 15.5" />
      <path d="M4 17 L16 5" />
      {/* far ends */}
      <ellipse cx="21.6" cy="9.6" rx="2.4" ry="3.6" transform="rotate(45 21.6 9.6)" />
      <ellipse cx="26.1" cy="14.1" rx="2.4" ry="3.6" transform="rotate(45 26.1 14.1)" />
      {/* near pipe mouths */}
      <circle cx="7" cy="21" r="3.6" />
      <circle cx="7" cy="21" r="1.4" />
      <circle cx="13.5" cy="23.5" r="3.6" />
      <circle cx="13.5" cy="23.5" r="1.4" />
      <circle cx="10" cy="15.5" r="3.6" />
      <circle cx="10" cy="15.5" r="1.4" />
    </svg>
  )
}
