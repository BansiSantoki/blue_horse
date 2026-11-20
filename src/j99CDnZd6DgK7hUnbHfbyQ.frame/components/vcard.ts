import { COMPANY_NAME, BRAND_NAME } from './assets'

type VCardInput = {
  phone: string
  email: string
  website: string
  location: string
}

/** Escapes text values per RFC 6350 (commas, semicolons, backslashes, newlines). */
const esc = (v: string) =>
  v.replace(/\\/g, '\\\\').replace(/,/g, '\\,').replace(/;/g, '\\;').replace(/\r?\n/g, '\\n')

export function buildVCard({ phone, email, website, location }: VCardInput) {
  const parts = location.split(',').map((p) => p.trim())
  const city = parts[0] ?? ''
  const region = parts.length > 2 ? parts[1] : ''
  const country = parts[parts.length - 1] ?? ''
  const tel = phone.replace(/[^\d+]/g, '')

  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:;${esc(COMPANY_NAME)};;;`,
    `FN:${esc(COMPANY_NAME)}`,
    `ORG:${esc(COMPANY_NAME)};${esc(`${BRAND_NAME}®`)}`,
    `TEL;TYPE=WORK,VOICE:${tel}`,
    `EMAIL;TYPE=INTERNET,WORK:${email}`,
    `URL:${website}`,
    `ADR;TYPE=WORK:;;;${esc(city)};${esc(region)};;${esc(country)}`,
    `NOTE:${esc(`${BRAND_NAME}® — Stainless Steel Pipes & Tubes`)}`,
    'X-ABShowAs:COMPANY',
    'END:VCARD',
  ].join('\r\n') + '\r\n'
}

/**
 * Downloads a .vcf. On iOS Safari and Android Chrome, opening it hands the card
 * to the Contacts app so it can be saved directly.
 */
export function downloadVCard(input: VCardInput) {
  const vcf = buildVCard(input)
  const filename = 'Savitridevi-Stainless-Tubes-BLUE-HORSE.vcf'
  const blob = new Blob([vcf], { type: 'text/vcard;charset=utf-8' })

  // Older iOS without download-attribute support: navigate to a data URL instead.
  const supportsDownload = 'download' in HTMLAnchorElement.prototype
  if (!supportsDownload) {
    window.location.href = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcf)}`
    return
  }

  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.rel = 'noopener'
  document.body.appendChild(a)
  a.click()
  a.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 4000)
}
