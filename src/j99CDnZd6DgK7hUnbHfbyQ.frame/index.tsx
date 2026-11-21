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
    <div className="relative w-full overflow-x-hidden font-sans text-navy-ink">
      <FixedBackground />

      <main className="relative z-10 mx-auto flex w-full max-w-[440px] flex-col px-[4.5%]">
        {/* Header + pipes area ends where the gold curve sweeps under the pipes in the fixed background */}
        <div
          className="flex flex-col"
          style={{ minHeight: 'max(41lvh, min(82vw, 361px))' }}
        >
          <CompanyHeader />
          <ProductDisplay />
        </div>

        <div className="flex flex-col gap-[14px]">
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
