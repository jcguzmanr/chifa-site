import type { CollectionConfig } from 'payload/types'

export const Categorias: CollectionConfig = {
  slug: 'categorias',
  admin: {
    useAsTitle: 'nombre',
    group: 'Contenido',
    description: 'Categorías para agrupar los platos del menú.',
  },
  fields: [
    {
      name: 'nombre',
      type: 'text',
      required: true,
      label: 'Nombre de la Categoría',
    },
  ],
} 