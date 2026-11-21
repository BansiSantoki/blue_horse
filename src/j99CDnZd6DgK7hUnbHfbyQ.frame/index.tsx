import React from 'react'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'

import { FixedBackground } from './components/FixedBackground'
import { CompanyHeader } from './components/CompanyHeader'
import { ProductDisplay } from './components/ProductDisplay'
import { ContactCard as InfoCard } from './components/ContactCard'
import { SaveContactCard } from './components/SaveContactCard'
import { PipesIcon } from './components/PipesIcon'

type Props = Partial<typeof args>

export default function ContactCard(props: Props) {
  const { phone, email, website, productsUrl, location } = { ...args, ...props }
  const telHref = `tel:${phone.replace(/[^\d+]/g, '')}`
  const siteHref = website.startsWith('http') ? website : `https://${website}`
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Savitridevi Stainless Tubes (India) Pvt. Ltd., ${location}`
  )}`
  const [city, ...region] = location.split(',')

  return (
    <>
      <FixedBackground />

      <div className="relative h-dvh w-full overflow-hidden font-sans text-navy-ink">
        <main className="relative z-10 mx-auto flex h-full w-full max-w-[440px] min-h-0 flex-col px-[4.5%]">
          {/* Header + pipes area ends where the gold curve sweeps under the pipes in the fixed background */}
          <div
            className="flex shrink-0 flex-col"
            style={{ height: 'clamp(195px, calc(40dvh + 5px), 320px)' }}
          >
            <CompanyHeader />
            <ProductDisplay />
          </div>

          <div className="flex min-h-0 flex-col gap-[clamp(2px,0.5dvh,5px)]">
            <InfoCard
              index={0}
              href={telHref}
              icon={<Phone strokeWidth={1.6} className="h-7 w-7" />}
              title="Contact Us Now"
              lines={[phone]}
            />
            <InfoCard
              index={1}
              href={productsUrl}
              external
              icon={<PipesIcon className="h-8 w-8" />}
              title="Our Products"
              lines={['Explore Our Stainless', 'Steel Pipes & Tubes']}
            />
            <InfoCard
              index={2}
              href={`mailto:${email}`}
              icon={<Mail strokeWidth={1.6} className="h-7 w-7" />}
              title="Email Us"
              lines={[email]}
            />
            <InfoCard
              index={3}
              href={mapsHref}
              external
              icon={<MapPin strokeWidth={1.6} className="h-7 w-7" />}
              title="Our Location"
              lines={[`${city.trim()},`, region.join(',').trim()]}
            />
            <InfoCard
              index={4}
              href={siteHref}
              external
              icon={<Globe strokeWidth={1.6} className="h-7 w-7" />}
              title="Our Website"
              lines={[website]}
            />
            <SaveContactCard
              index={5}
              phone={phone}
              email={email}
              website={siteHref}
              location={location}
            />
          </div>
        </main>
      </div>
    </>
  )
}

export const args = {
  phone: '+91 89096 17777',
  email: 'sstubesindia@gmail.com',
  website: 'www.sstubesindia.com',
  productsUrl: 'https://www.sstubesindia.com/products',
  location: 'Visakhapatnam, Andhra Pradesh, India',
}

export const argTypes = {
  phone: { control: 'text' },
  email: { control: 'text' },
  website: { control: 'text' },
  productsUrl: { control: 'text' },
  location: { control: 'text' },
}
