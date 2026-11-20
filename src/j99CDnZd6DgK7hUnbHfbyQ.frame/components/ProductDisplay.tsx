import React from 'react'

/**
 * The stainless steel pipes live in the fixed background, so this is the window
 * onto them. On load a soft veil lifts away to reveal the product.
 */
export function ProductDisplay() {
  return (
    <section
      aria-label="Stainless steel pipes and tubes"
      className="relative -mx-[5%] min-h-[150px] flex-1"
    >
      <div
        aria-hidden
        className="product-veil absolute inset-0"
        style={{ backgroundColor: 'rgba(236, 241, 250, 0.92)' }}
      />
    </section>
  )
}
