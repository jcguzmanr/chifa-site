import { Block } from 'payload/types'

export const ReservationCTABlock: Block = {
  slug: 'reservationCta',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
    },
    {
      name: 'buttonUrl',
      type: 'text',
      required: true,
    },
  ],
} 