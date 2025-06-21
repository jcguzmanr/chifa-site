import { Block } from 'payload/types'

export const MenuShowcaseBlock: Block = {
  slug: 'menuShowcase',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'featuredDishes',
      label: 'Featured Dishes',
      type: 'relationship',
      relationTo: 'platos',
      hasMany: true,
      required: true,
    },
  ],
} 