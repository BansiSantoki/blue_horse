import React from 'react'
import { ChevronRight } from 'lucide-react'
import { useInView } from './useInView'
import { IconPanel } from './IconPanel'

type ContactCardProps = {
  index: number
  href: string
  external?: boolean
  icon: React.ReactNode
  title: string
  lines: string[]
}

export function ContactCard({ index, href, external, icon, title, lines }: ContactCardProps) {
  const { ref, visible } = useInView<HTMLAnchorElement>()

  return (
    <a
      ref={ref}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`reveal-up card-press group relative flex min-h-[clamp(48px,8.2dvh,62px)] items-stretch overflow-hidden rounded-[18px] border border-white/90 bg-white/75 shadow-[0_8px_22px_-10px_rgba(15,44,92,0.38),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md outline-none focus-visible:ring-2 focus-visible:ring-navy ${
        visible ? 'is-visible' : ''
      }`}
      style={{ ['--delay' as string]: `${Math.min(index, 3) * 60}ms` }}
    >
      <IconPanel>{icon}</IconPanel>

      <span aria-hidden className="my-auto ml-2 h-7 w-[1.5px] shrink-0 rounded-full bg-navy" />

      <span className="flex min-w-0 flex-1 flex-col justify-center py-[clamp(3px,0.75dvh,7px)] pl-4 pr-1">
        <span className="text-[clamp(14px,4.2vw,17px)] font-bold leading-tight tracking-[-0.01em] text-navy-deep sm:text-[18px]">
          {title}
        </span>
        {lines.map((line) => (
          <span key={line} className="break-words text-[clamp(11px,3.5vw,13.5px)] font-medium leading-snug text-navy-ink sm:text-[14.5px]">
            {line}
          </span>
        ))}
      </span>

      <span className="flex shrink-0 items-center pr-3.5">
        <ChevronRight strokeWidth={2.4} className="card-chevron h-6 w-6 text-navy" />
      </span>
    </a>
  )
}
