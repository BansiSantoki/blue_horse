import React from 'react'
import { COMPANY_NAME, BRAND_NAME } from './assets'

/** Keeps the legal footer clear of the background artwork at the end of the card. */
export function Footer() {
  return (
    <footer className="relative -mx-[4.5%] flex min-h-[clamp(130px,18lvh,170px)] items-end justify-center bg-[#e9eef8] px-[4.5%] pb-[max(16px,env(safe-area-inset-bottom))]">
      <p className="text-center text-[11px] font-medium leading-relaxed text-navy-ink">
        © {new Date().getFullYear()} {COMPANY_NAME}
        <br />
        {BRAND_NAME}® Stainless Steel Pipes &amp; Tubes
      </p>
    </footer>
  )
}
