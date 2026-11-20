import React, { useId } from 'react'

/** Dark navy icon panel with the slanted golden edge from the reference. */
export function IconPanel({ children }: { children: React.ReactNode }) {
  const id = useId().replace(/:/g, '')

  return (
    <span className="relative flex w-[84px] shrink-0 items-center self-stretch">
      <svg
        aria-hidden
        viewBox="0 0 84 66"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id={`navy-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1d4688" />
            <stop offset="0.55" stopColor="#0f2c5c" />
            <stop offset="1" stopColor="#081b3c" />
          </linearGradient>
          <linearGradient id={`gold-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8a6420" />
            <stop offset="0.45" stopColor="#f6d98c" />
            <stop offset="0.7" stopColor="#d6a548" />
            <stop offset="1" stopColor="#8a6420" />
          </linearGradient>
        </defs>
        <path d="M0 0 H82 L64 66 H0 Z" fill={`url(#navy-${id})`} />
        <path
          d="M82 0 L64 66"
          stroke={`url(#gold-${id})`}
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
          fill="none"
        />
      </svg>
      <span className="relative flex w-[70px] items-center justify-center text-white">
        {children}
      </span>
    </span>
  )
}
