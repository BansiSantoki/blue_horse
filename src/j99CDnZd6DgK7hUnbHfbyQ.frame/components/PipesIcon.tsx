import React from 'react'

/** Bundle of stainless pipes, drawn in the same line weight as the Lucide icons. */
export function PipesIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.35}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* Three stainless pipes, matching the compact app-icon reference. */}
      <path d="M13.5 20.5 L21.5 12.5" />
      <path d="M18.5 23.5 L26.5 15.5" />
      <path d="M9 17 L17 9" />
      <ellipse cx="21.5" cy="12.5" rx="2.2" ry="3.2" transform="rotate(45 21.5 12.5)" />
      <ellipse cx="26.5" cy="15.5" rx="2.2" ry="3.2" transform="rotate(45 26.5 15.5)" />
      <ellipse cx="17" cy="9" rx="2.2" ry="3.2" transform="rotate(45 17 9)" />
      <circle cx="12.5" cy="21.5" r="3.5" />
      <circle cx="12.5" cy="21.5" r="1.35" />
      <circle cx="17.5" cy="24.5" r="3.5" />
      <circle cx="17.5" cy="24.5" r="1.35" />
      <circle cx="8" cy="18" r="3.5" />
      <circle cx="8" cy="18" r="1.35" />
    </svg>
  )
}
