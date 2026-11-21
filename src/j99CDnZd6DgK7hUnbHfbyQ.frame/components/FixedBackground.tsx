import React from 'react'
import { BACKGROUND_URL } from './assets'

/**
 * The background never scrolls. It is a viewport-locked fixed layer (reliable on
 * iOS and Android, where background-attachment: fixed is ignored). It uses
 * fixed inset edges instead of dynamic viewport heights so browser chrome changes
 * cannot move or resize the artwork.
 * On wide screens the card is a centred phone-width column over a dimmed backdrop.
 */
export function FixedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden [backface-visibility:hidden] [contain:paint] [transform:translateZ(0)] [will-change:transform]"
    >
      {/* Desktop backdrop, only visible outside the centred card */}
      <div className="absolute inset-0 bg-backdrop">
        <div
          className="absolute inset-0 scale-110 opacity-40 blur-2xl"
          style={{
            backgroundImage: `url(${BACKGROUND_URL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* The card's own background: pipes on top, gold curve, light middle, blue/gold wave below */}
      <div
        className="absolute bottom-0 left-1/2 top-0 w-full max-w-[440px] min-[441px]:shadow-[0_0_60px_rgba(0,0,0,0.45)]"
        style={{
          transform: 'translate3d(-50%, 0, 0)',
          backgroundColor: '#e9eef8',
          backgroundImage: `url(${BACKGROUND_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  )
}
