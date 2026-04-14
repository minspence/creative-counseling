'use client'

import { useRouter } from 'next/navigation'

export default function ServiceTemplate({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <div>
      {children}
      <button type="button" onClick={() => router.push('/services')}>
        Back to services
      </button>
      <button type="button" onClick={() => router.push('/')}>
        Back to home
      </button>
    </div>
  )
}
