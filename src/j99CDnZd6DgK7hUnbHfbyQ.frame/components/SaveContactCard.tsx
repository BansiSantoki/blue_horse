import React, { useState } from 'react'
import { BookUser, Download, Check } from 'lucide-react'
import { useInView } from './useInView'
import { IconPanel } from './IconPanel'
import { downloadVCard } from './vcard'

type SaveContactCardProps = {
  index: number
  phone: string
  email: string
  website: string
  location: string
}

export function SaveContactCard({ index, phone, email, website, location }: SaveContactCardProps) {
  const { ref, visible } = useInView<HTMLDivElement>()
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    downloadVCard({ phone, email, website, location })
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2600)
  }

  return (
    <div
      ref={ref}
      className={`save-enter relative overflow-hidden rounded-[18px] border border-white/90 bg-white/80 shadow-[0_10px_26px_-10px_rgba(15,44,92,0.42),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md ${
        visible ? 'is-visible' : ''
      }`}
      style={{ ['--delay' as string]: `${Math.min(index, 3) * 60}ms` }}
    >
      <div className="flex min-h-[66px] items-stretch">
        <IconPanel>
          <BookUser strokeWidth={1.6} className="h-7 w-7" />
        </IconPanel>
        <span aria-hidden className="my-auto ml-2 h-7 w-[1.5px] shrink-0 rounded-full bg-navy" />
        <div className="flex min-w-0 flex-1 flex-col justify-center py-2.5 pl-4 pr-4">
          <h2 className="text-[17px] font-extrabold leading-tight tracking-[0.04em] text-navy-deep sm:text-[18px]">
            SAVE CONTACT
          </h2>
          <p className="text-[13px] font-medium leading-snug text-navy-ink sm:text-[14px]">
            Save our company details directly to your phone contacts.
          </p>
        </div>
      </div>

      <div className="px-3.5 pb-3.5 pt-3">
        <button
          type="button"
          onClick={handleSave}
          className="save-btn relative block w-full overflow-hidden rounded-[14px] p-[2px] outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          {/* static gold rim + moving golden light that orbits the border */}
          <span aria-hidden className="absolute inset-0 rounded-[14px] bg-gold/70" />
          <span
            aria-hidden
            className="gold-orbit absolute left-1/2 top-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2"
          />
          <span className="relative flex h-[50px] items-center justify-center gap-2.5 rounded-[12px] bg-navy text-[15px] font-bold tracking-[0.02em] text-white">
            {saved ? (
              <>
                <Check strokeWidth={2.4} className="h-5 w-5 text-gold-light" />
                Contact downloaded
              </>
            ) : (
              <>
                <Download strokeWidth={2.2} className="icon-bob h-5 w-5 text-gold-light" />
                Save to Contacts
              </>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}
