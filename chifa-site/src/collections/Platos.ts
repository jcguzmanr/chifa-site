import type { CollectionConfig } from 'payload/types'

export const Platos: CollectionConfig = {
  slug: 'platos',
  admin: {
    useAsTitle: 'nombre',
    defaultColumns: ['nombre', 'categoria', 'precio', 'recomendado'],
    group: 'Contenido',
    description: 'Colección de platos del menú del restaurante.',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Información Básica',
          fields: [
            {
              name: 'nombre',
              type: 'text',
              required: true,
              label: 'Nombre del Plato',
            },
            {
              name: 'descripcion',
              type: 'textarea',
              required: true,
              label: 'Descripción',
            },
            {
              name: 'precio',
              type: 'number',
              required: true,
              label: 'Precio (en USD)',
            },
            {
              name: 'categoria',
              type: 'relationship',
              relationTo: 'categorias',
              required: true,
              label: 'Categoría',
            },
            {
              name: 'imagen',
              type: 'upload',
              relationTo: 'media',
              label: 'Imagen del Plato',
            },
          ],
        },
        {
          label: 'Detalles Adicionales',
          fields: [
            {
              name: 'recomendado',
              type: 'checkbox',
              label: 'Recomendado por la Casa',
              defaultValue: false,
            },
            {
              name: 'picante',
              type: 'select',
              label: 'Nivel de Picante',
              options: [
                { label: 'No Picante', value: 'no_picante' },
                { label: 'Suave', value: 'suave' },
                { label: 'Medio', value: 'medio' },
                { label: 'Picante', value: 'picante' },
                { label: 'Muy Picante', value: 'muy_picante' },
              ],
              defaultValue: 'no_picante',
            },
            {
              name: 'alergenos',
              type: 'text',
              label: 'Alérgenos',
              admin: {
                description: 'Listar alérgenos separados por comas.',
              },
            },
            {
              name: 'etiquetas_dieteticas',
              type: 'select',
              hasMany: true,
              label: 'Etiquetas Dietéticas',
              options: [
                { label: 'Vegetariano', value: 'vegetariano' },
                { label: 'Vegano', value: 'vegano' },
                { label: 'Sin Gluten', value: 'sin_gluten' },
              ],
            },
            {
                name: 'tipo_proteina',
                type: 'select',
                label: 'Tipo de Proteína',
                options: [
                    { label: 'Pollo', value: 'pollo' },
                    { label: 'Carne de Res', value: 'carne_de_res' },
                    { label: 'Cerdo', value: 'cerdo' },
                    { label: 'Pescado', value: 'pescado' },
                    { label: 'Mariscos', value: 'mariscos' },
                    { label: 'Tofu', value: 'tofu' },
                    { label: 'Otro', value: 'otro' },
                    { label: 'Ninguno', value: 'ninguno' },
                ]
            }
          ],
        },
      ],
    },
  ],
} 