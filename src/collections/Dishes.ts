import type { CollectionConfig } from 'payload/types'

export const Dishes: CollectionConfig = {
  slug: 'platos',
  admin: {
    useAsTitle: 'nombre',
    description: 'Colección de todos los platos ofrecidos en el restaurante.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Información General',
          fields: [
            {
              name: 'id_plato',
              label: 'ID del Plato (Ej: CH001)',
              type: 'text',
              required: true,
              unique: true,
            },
            {
              name: 'nombre',
              label: 'Nombre del Plato',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'nombre_chino',
              label: 'Nombre en Chino (Opcional)',
              type: 'text',
            },
            {
              name: 'categoria',
              label: 'Categoría Principal',
              type: 'relationship',
              relationTo: 'categories',
              required: true,
            },
            {
              name: 'subcategoria',
              label: 'Subcategoría',
              type: 'text',
              localized: true,
            },
            {
              name: 'descripcion_corta',
              label: 'Descripción Corta',
              type: 'textarea',
              required: true,
              localized: true,
            },
            {
              name: 'descripcion_detallada',
              label: 'Descripción Detallada',
              type: 'textarea',
              localized: true,
            },
            {
              name: 'foto',
              label: 'Foto Principal del Plato',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
          ],
        },
        {
          label: 'Detalles y Precios',
          fields: [
            {
              name: 'precio',
              label: 'Precio (ración normal)',
              type: 'number',
              required: true,
            },
            {
              name: 'precio_grande',
              label: 'Precio (ración grande)',
              type: 'number',
            },
            {
              name: 'disponibilidad',
              label: 'Disponible',
              type: 'checkbox',
              defaultValue: true,
            },
            {
              name: 'tiempo_preparacion',
              label: 'Tiempo de preparación (minutos)',
              type: 'number',
            },
            {
              name: 'ingredientes_principales',
              label: 'Ingredientes Principales',
              type: 'array',
              fields: [{ name: 'ingrediente', type: 'text' }],
              localized: true,
            },
            {
              name: 'ingredientes_completos',
              label: 'Ingredientes Completos',
              type: 'array',
              fields: [{ name: 'ingrediente', type: 'text' }],
              localized: true,
            },
            {
              name: 'alergenos',
              label: 'Alérgenos',
              type: 'array',
              fields: [{ name: 'alergeno', type: 'text' }],
              localized: true,
            },
          ],
        },
        {
          label: 'Atributos y Nutrición',
          fields: [
            {
              name: 'indicadores',
              label: 'Indicadores del Plato',
              type: 'group',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'picor',
                      label: 'Nivel de Picor (0-5)',
                      type: 'number',
                      min: 0,
                      max: 5,
                      defaultValue: 0,
                    },
                    {
                      name: 'dulzor',
                      label: 'Nivel de Dulzor (0-5)',
                      type: 'number',
                      min: 0,
                      max: 5,
                      defaultValue: 0,
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'vegetariano',
                      type: 'checkbox',
                      label: 'Vegetariano',
                      defaultValue: false,
                    },
                    {
                      name: 'vegano',
                      type: 'checkbox',
                      label: 'Vegano',
                      defaultValue: false,
                    },
                    {
                      name: 'sin_gluten',
                      type: 'checkbox',
                      label: 'Sin Gluten',
                      defaultValue: false,
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'mas_pedido',
                      type: 'checkbox',
                      label: 'Más Pedido',
                      defaultValue: false,
                    },
                    {
                      name: 'recomendado_casa',
                      label: 'Recomendado por la Casa',
                      type: 'checkbox',
                      defaultValue: false,
                    },
                    {
                      name: 'nuevo',
                      type: 'checkbox',
                      label: 'Nuevo',
                      defaultValue: false,
                    },
                    {
                      name: 'especial',
                      type: 'checkbox',
                      label: 'Especial',
                      defaultValue: false,
                    },
                  ],
                },
              ],
            },
            {
              name: 'informacion_nutricional',
              label: 'Información Nutricional',
              type: 'group',
              fields: [
                {
                  name: 'porciones',
                  label: 'Porciones',
                  type: 'text',
                  localized: true,
                },
                {
                  name: 'calorias_aproximadas',
                  label: 'Calorías (aprox.)',
                  type: 'number',
                },
                {
                  name: 'nivel_sal',
                  label: 'Nivel de Sal',
                  type: 'select',
                  options: ['bajo', 'medio', 'alto'],
                },
              ],
            },
          ],
        },
        {
          label: 'Sugerencias y Variantes',
          fields: [
            {
              name: 'variantes',
              label: 'Variantes del Plato',
              type: 'array',
              fields: [{ name: 'variante', type: 'text' }],
              localized: true,
            },
            {
              name: 'acompañamientos_sugeridos',
              label: 'Acompañamientos Sugeridos',
              type: 'array',
              fields: [{ name: 'acompanamiento', type: 'text' }],
              localized: true,
            },
            {
              name: 'maridaje_bebidas',
              label: 'Maridaje de Bebidas Sugerido',
              type: 'array',
              fields: [{ name: 'bebida', type: 'text' }],
              localized: true,
            },
          ],
        },
      ],
    },
    // El slug se genera a partir del nombre para la URL
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data.nombre) {
              return data.nombre.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            }
            return value;
          },
        ],
      },
      required: true,
      unique: true,
    },
  ],
} 