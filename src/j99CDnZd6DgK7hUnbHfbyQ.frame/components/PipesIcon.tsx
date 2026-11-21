import React from 'react'
import pipesArtworkUrl from './products-pipes.png'

export function PipesIcon({ className = '' }: { className?: string }) {
  return (
    <img
      src={pipesArtworkUrl}
      alt=""
      aria-hidden
      draggable={false}
      className={`${className} select-none object-contain mix-blend-screen`}
    />
  )
}
