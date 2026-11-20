import React from 'react'
import { BACKGROUND_URL } from './assets'

/**
 * The background never scrolls. It is a position:fixed layer (reliable on iOS and
 * Android, where background-attachment: fixed is ignored), sized to the large
 * viewport height so the mobile URL bar showing/hiding never makes it jump.
 * On wide screens the card is a centred phone-width column over a dimmed backdrop.
 */
export function FixedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
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
        className="absolute left-1/2 top-0 h-[100lvh] w-full max-w-[440px] -translate-x-1/2 min-[441px]:shadow-[0_0_60px_rgba(0,0,0,0.45)]"
        style={{
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
