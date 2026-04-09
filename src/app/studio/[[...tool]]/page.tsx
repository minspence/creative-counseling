import { type Metadata, type Viewport } from 'next'
import { StudioClient } from './_StudioClient'

export const metadata: Metadata = {
  title: 'Sanity Studio | Creative Counseling',
  robots: 'noindex',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function StudioPage() {
  return <StudioClient />
}
