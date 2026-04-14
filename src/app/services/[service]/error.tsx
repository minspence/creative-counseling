'use client'

import { useRouter } from 'next/navigation'

export default function ServiceError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter()

  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button type="button" onClick={reset}>
        Try again
      </button>
      <button type="button" onClick={() => router.push('/')}>
        Back to home
      </button>
      <button type="button" onClick={() => router.push('/services')}>
        Back to services
      </button>
    </div>
  )
}
