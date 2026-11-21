import React, { useEffect, useState } from 'react'
import { BACKGROUND_URL } from './assets'

/**
 * The background never scrolls. It is a fixed, viewport-sized image layer.
 * Mobile browser chrome does not change its height after the first render, so
 * address-bar or visual-viewport changes cannot make the artwork drift.
 * On wide screens the card is a centred phone-width column over a dimmed backdrop.
 */
export function FixedBackground() {
  const [lockedHeight, setLockedHeight] = useState(() =>
    typeof window === 'undefined' ? 800 : window.innerHeight
  )

  useEffect(() => {
    const lockViewport = () => setLockedHeight(window.innerHeight)
    window.addEventListener('orientationchange', lockViewport)
    return () => window.removeEventListener('orientationchange', lockViewport)
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 w-full overflow-hidden"
      style={{ height: lockedHeight }}
    >
      {/* Desktop backdrop, only visible outside the centred card */}
      <div className="absolute inset-0 overflow-hidden bg-backdrop">
        <img
          src={BACKGROUND_URL}
          alt=""
          draggable={false}
          className="h-full w-full scale-[1.12] object-cover object-center opacity-40 blur-2xl"
        />
      </div>

      {/* The card's own background: pipes on top, gold curve, light middle, blue/gold wave below */}
      <div
        className="absolute bottom-0 left-1/2 top-0 w-full max-w-[440px] overflow-hidden min-[441px]:shadow-[0_0_60px_rgba(0,0,0,0.45)]"
        style={{
          transform: 'translate3d(-50%, 0, 0)',
          backgroundColor: '#e9eef8',
        }}
      >
        <img
          src={BACKGROUND_URL}
          alt=""
          draggable={false}
          className="h-full w-full select-none object-cover object-top"
        />
      </div>
    </div>
  )
}
