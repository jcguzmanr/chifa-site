import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '../../payload.config'

export async function POST(req: NextRequest) {
  const payload = await getPayload({ config })
  const data = await req.json()

  try {
    await payload.create({
      collection: 'contacts',
      data,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
} 