import { CollectionConfig } from 'payload/types'
import { HeroBlock } from '../blocks/HeroBlock'
import { MenuShowcaseBlock } from '../blocks/MenuShowcaseBlock'
import { AboutStoryBlock } from '../blocks/AboutStoryBlock'
import { TestimonialsBlock } from '../blocks/TestimonialsBlock'
import { ContactInfoBlock } from '../blocks/ContactInfoBlock'
import { ReservationCTABlock } from '../blocks/ReservationCTABlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'metaDescription',
      type: 'textarea',
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        MenuShowcaseBlock,
        AboutStoryBlock,
        TestimonialsBlock,
        ContactInfoBlock,
        ReservationCTABlock,
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: ['draft', 'published'],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
} 