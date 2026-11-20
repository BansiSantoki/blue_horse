import React from 'react'
import { COMPANY_NAME, BRAND_NAME } from './assets'

/** Sits in the blue/gold wave of the fixed background once scrolled to the end. */
export function Footer() {
  return (
    <footer className="flex min-h-[clamp(130px,18lvh,170px)] items-end justify-center pb-[max(16px,env(safe-area-inset-bottom))]">
      <p className="text-center text-[11px] font-medium leading-relaxed text-white [text-shadow:0_1px_3px_rgba(8,27,60,0.85)]">
        © {new Date().getFullYear()} {COMPANY_NAME}
        <br />
        {BRAND_NAME}® Stainless Steel Pipes &amp; Tubes
      </p>
    </footer>
  )
}
