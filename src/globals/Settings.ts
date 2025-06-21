import { GlobalConfig } from 'payload/types'

export const Settings: GlobalConfig = {
  slug: 'settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
    },
    {
      name: 'metaKeywords',
      type: 'text',
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        {
          name: 'address',
          type: 'text',
        },
        {
          name: 'phone',
          type: 'text',
        },
        {
          name: 'email',
          type: 'text',
        },
        {
          name: 'coordinates',
          type: 'group',
          fields: [
            {
              name: 'lat',
              type: 'number',
            },
            {
              name: 'lng',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      name: 'socialMedia',
      type: 'group',
      fields: [
        {
          name: 'instagram',
          type: 'text',
        },
        {
          name: 'facebook',
          type: 'text',
        },
        {
          name: 'twitter',
          type: 'text',
        },
      ],
    },
    {
      name: 'businessHours',
      type: 'group',
      fields: [
        {
          name: 'monday',
          type: 'group',
          fields: [
            { name: 'open', type: 'text' },
            { name: 'close', type: 'text' },
            { name: 'closed', type: 'checkbox' },
          ],
        },
        {
          name: 'tuesday',
          type: 'group',
          fields: [
            { name: 'open', type: 'text' },
            { name: 'close', type: 'text' },
            { name: 'closed', type: 'checkbox' },
          ],
        },
        {
          name: 'wednesday',
          type: 'group',
          fields: [
            { name: 'open', type: 'text' },
            { name: 'close', type: 'text' },
            { name: 'closed', type: 'checkbox' },
          ],
        },
        {
          name: 'thursday',
          type: 'group',
          fields: [
            { name: 'open', type: 'text' },
            { name: 'close', type: 'text' },
            { name: 'closed', type: 'checkbox' },
          ],
        },
        {
          name: 'friday',
          type: 'group',
          fields: [
            { name: 'open', type: 'text' },
            { name: 'close', type: 'text' },
            { name: 'closed', type: 'checkbox' },
          ],
        },
        {
          name: 'saturday',
          type: 'group',
          fields: [
            { name: 'open', type: 'text' },
            { name: 'close', type: 'text' },
            { name: 'closed', type: 'checkbox' },
          ],
        },
        {
          name: 'sunday',
          type: 'group',
          fields: [
            { name: 'open', type: 'text' },
            { name: 'close', type: 'text' },
            { name: 'closed', type: 'checkbox' },
          ],
        },
      ],
    },
    {
      name: 'legalInfo',
      type: 'group',
      fields: [
        {
          name: 'companyName',
          type: 'text',
        },
        {
          name: 'nif',
          type: 'text',
        },
        {
          name: 'registryData',
          type: 'text',
        },
      ],
    },
    {
      name: 'analytics',
      type: 'group',
      fields: [
        {
          name: 'googleAnalyticsId',
          type: 'text',
        },
        {
          name: 'facebookPixelId',
          type: 'text',
        },
      ],
    },
    {
      name: 'legalDocs',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'content',
          type: 'richText',
        },
      ],
    }
  ],
} 