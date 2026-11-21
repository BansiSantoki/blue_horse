import React from 'react'
import { LOGO_URL, COMPANY_NAME, BRAND_NAME } from './assets'

/** The exact supplied logo: fade + slight scale-in, then an occasional light sweep. */
export function CompanyHeader() {
  return (
    <header className="pt-[clamp(28px,6vh,48px)]">
      <h1 className="sr-only">
        {COMPANY_NAME} — {BRAND_NAME}®
      </h1>
      <div className="relative mx-auto w-[94%] overflow-hidden">
        <img
          src={LOGO_URL}
          alt={`${COMPANY_NAME} — ${BRAND_NAME}® logo`}
          className="block h-auto w-full select-none mix-blend-multiply"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          draggable={false}
        />
        <div aria-hidden className="logo-shine absolute inset-0 mix-blend-soft-light" />
      </div>
    </header>
  )
}
