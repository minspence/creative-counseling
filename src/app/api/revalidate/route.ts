import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

type WebhookPayload = {
  _type: string
  slug?: { current: string }
}

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true,
    )

    if (!isValidSignature) {
      return new Response('Invalid signature', { status: 401 })
    }

    if (!body?._type) {
      return new Response('Missing _type in payload', { status: 400 })
    }

    revalidateTag(body._type, { expire: 0 })

    if (body.slug?.current) {
      revalidateTag(`${body._type}:${body.slug.current}`, { expire: 0 })
    }

    return NextResponse.json({ revalidated: true, type: body._type })
  } catch (err) {
    return new Response((err as Error).message, { status: 500 })
  }
}
