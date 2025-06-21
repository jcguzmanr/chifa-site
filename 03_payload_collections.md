# Payload CMS Collections - Chifa Fusión

## Arquitectura de Colecciones

### Collection: `pages` (Block-based Content)

#### Propósito
Páginas dinámicas con sistema de bloques reutilizables para máxima flexibilidad editorial.

#### Estructura de Campos
```typescript
{
  slug: string,           // URL-friendly identifier
  title: string,          // SEO title
  metaDescription: string, // SEO description
  layout: Block[],        // Array de bloques componibles
  status: 'draft' | 'published',
  publishedAt: Date,
  _status: 'draft' | 'published'
}
```

#### Bloques Disponibles
1. **Hero Block**: Banner principal con CTA
2. **Menu Showcase**: Grid de platos destacados
3. **About Story**: Narrativa del restaurante
4. **Testimonials**: Reseñas de clientes
5. **Contact Info**: Datos de contacto y mapa
6. **Reservation CTA**: Llamada a acción para reservas

#### Ejemplo JSON - Homepage
```json
{
  "id": "homepage",
  "slug": "inicio",
  "title": "Chifa Fusión Barcelona - Auténtica Cocina Nikkei",
  "metaDescription": "Descubre la fusión perfecta entre tradición peruana y técnicas chinas en el corazón de Barcelona. Reserva tu experiencia gastronómica única.",
  "layout": [
    {
      "blockType": "hero",
      "headline": "Tradición Familiar, Sabor Auténtico",
      "subtitle": "Tres generaciones de maestros chifa en Barcelona",
      "backgroundImage": {
        "url": "/uploads/hero-chifa-fusion.jpg",
        "alt": "Interior del restaurante Chifa Fusión"
      },
      "cta": {
        "text": "Reservar Mesa",
        "url": "/reservas",
        "style": "primary"
      }
    },
    {
      "blockType": "menuShowcase",
      "title": "Nuestros Clásicos",
      "featuredDishes": [
        {"dish": "dish_001"}, 
        {"dish": "dish_002"}, 
        {"dish": "dish_003"}
      ]
    }
  ],
  "status": "published",
  "publishedAt": "2024-12-20T10:00:00.000Z"
}
```

---

### Collection: `dishes` (Relacional con Categories)

#### Propósito
Catálogo completo de platos con información nutricional, alérgenos y disponibilidad.

#### Estructura de Campos
```typescript
{
  name: string,              // Nombre del plato
  slug: string,              // URL identifier
  description: string,       // Descripción detallada
  shortDescription: string,  // Para cards y listados
  price: number,             // Precio en euros
  category: Category,        // Relación con categories
  images: Media[],           // Galería de imágenes
  ingredients: string[],     // Lista de ingredientes principales
  allergens: string[],       // Alérgenos presentes
  spicyLevel: 0|1|2|3,      // Nivel de picante
  isVegetarian: boolean,
  isVegan: boolean,
  isGlutenFree: boolean,
  nutritionalInfo: {
    calories: number,
    protein: number,
    carbs: number,
    fat: number
  },
  preparationTime: number,   // Minutos
  available: boolean,        // Disponibilidad actual
  featured: boolean,         // Destacado en homepage
  origin: string,           // Historia/origen del plato
  pairingWine: string       // Maridaje sugerido
}
```

#### Ejemplo JSON - Plato
```json
{
  "id": "dish_001",
  "name": "Chaufa de Mariscos Especial",
  "slug": "chaufa-mariscos-especial",
  "description": "Arroz frito al wok con langostinos, calamares y mejillones del Mediterráneo. Salteado con salsa de soja artesanal, cebollín y toques de jengibre fresco. Una interpretación contemporánea del clásico chaufa con productos del mar catalán.",
  "shortDescription": "Arroz frito con mariscos mediterráneos y salsa de soja artesanal",
  "price": 18.50,
  "category": "cat_chaufa",
  "images": [
    {
      "url": "/uploads/chaufa-mariscos-01.jpg",
      "alt": "Chaufa de mariscos servido en plato de cerámica negra",
      "caption": "Vista principal del plato"
    },
    {
      "url": "/uploads/chaufa-mariscos-02.jpg",
      "alt": "Ingredientes frescos para chaufa de mariscos",
      "caption": "Ingredientes seleccionados"
    }
  ],
  "ingredients": ["Arroz jazmín", "Langostinos", "Calamares", "Mejillones", "Salsa soja", "Cebollín", "Jengibre"],
  "allergens": ["Moluscos", "Crustáceos", "Soja"],
  "spicyLevel": 1,
  "isVegetarian": false,
  "isVegan": false,
  "isGlutenFree": false,
  "nutritionalInfo": {
    "calories": 420,
    "protein": 28,
    "carbs": 45,
    "fat": 12
  },
  "preparationTime": 15,
  "available": true,
  "featured": true,
  "origin": "Adaptación familiar del chaufa limeño, incorporando la frescura del Mediterráneo catalán",
  "pairingWine": "Albariño DO Rías Baixas o Cava Brut"
}
```

---

### Collection: `categories`

#### Propósito
Organización taxonómica del menú para navegación y filtrado intuitivos.

#### Estructura de Campos
```typescript
{
  name: string,           // Nombre de la categoría
  slug: string,           // URL identifier
  description: string,    // Descripción de la categoría
  icon: string,          // Nombre del icono (Font Awesome)
  color: string,         // Color hex para UI
  order: number,         // Orden de aparición
  parent: Category       // Para subcategorías (opcional)
}
```

#### Ejemplo JSON - Categorías
```json
[
  {
    "id": "cat_chaufa",
    "name": "Chaufa",
    "slug": "chaufa",
    "description": "Arroces fritos al wok con la técnica ancestral china adaptada al paladar peruano",
    "icon": "fa-bowl-rice",
    "color": "#FF6B35",
    "order": 1,
    "parent": null
  },
  {
    "id": "cat_tallarin",
    "name": "Tallarín",
    "slug": "tallarin",
    "description": "Fideos salteados con verduras frescas y proteínas selectas",
    "icon": "fa-bowl-food",
    "color": "#2ECC71",
    "order": 2,
    "parent": null
  },
  {
    "id": "cat_entradas",
    "name": "Entradas",
    "slug": "entradas",
    "description": "Pequeños bocados que despiertan el apetito con sabores intensos",
    "icon": "fa-utensils",
    "color": "#9B59B6",
    "order": 3,
    "parent": null
  }
]
```

---

### Collection: `settings` (Global Configuration)

#### Propósito
Configuración global del sitio, SEO master y datos de contacto editables desde admin.

#### Estructura de Campos
```typescript
{
  siteName: string,
  tagline: string,
  metaDescription: string,
  metaKeywords: string,
  ogImage: Media,
  favicon: Media,
  contactInfo: {
    address: string,
    phone: string,
    email: string,
    coordinates: {
      lat: number,
      lng: number
    }
  },
  socialMedia: {
    instagram: string,
    facebook: string,
    twitter: string
  },
  businessHours: {
    monday: { open: string, close: string, closed: boolean },
    tuesday: { open: string, close: string, closed: boolean },
    // ... resto de días
  },
  legalInfo: {
    companyName: string,
    nif: string,
    registryData: string
  },
  analytics: {
    googleAnalyticsId: string,
    facebookPixelId: string
  }
}
```

#### Ejemplo JSON - Settings
```json
{
  "id": "global_settings",
  "siteName": "Chifa Fusión Barcelona",
  "tagline": "Donde la tradición peruana abraza la técnica china",
  "metaDescription": "Restaurante de cocina nikkei en Barcelona. Auténtica fusión peruana-china con ingredientes mediterráneos. Reservas online disponibles.",
  "metaKeywords": "chifa, nikkei, restaurante peruano, cocina china, Barcelona, fusión asiática",
  "contactInfo": {
    "address": "Carrer de Pau Claris, 162, 08037 Barcelona",
    "phone": "+34 933 45 67 89",
    "email": "reservas@chifafusion.es",
    "coordinates": {
      "lat": 41.3976,
      "lng": 2.1654
    }
  },
  "socialMedia": {
    "instagram": "https://instagram.com/chifafusionbcn",
    "facebook": "https://facebook.com/chifafusionbarcelona",
    "twitter": "https://twitter.com/chifafusionbcn"
  },
  "businessHours": {
    "monday": { "open": "13:00", "close": "16:00", "closed": false },
    "tuesday": { "open": "13:00", "close": "16:00", "closed": false },
    "wednesday": { "open": "13:00", "close": "16:00", "closed": false },
    "thursday": { "open": "13:00", "close": "23:30", "closed": false },
    "friday": { "open": "13:00", "close": "23:30", "closed": false },
    "saturday": { "open": "13:00", "close": "23:30", "closed": false },
    "sunday": { "open": "13:00", "close": "16:00", "closed": false }
  },
  "legalInfo": {
    "companyName": "Chifa Fusión Barcelona S.L.",
    "nif": "B12345678",
    "registryData": "Inscrita en el Registro Mercantil de Barcelona, Tomo 1234, Folio 567, Hoja B-89012"
  }
}
```

## Relaciones entre Colecciones

### Diagrama de Relaciones
```
pages (1:N) → dishes (featured dishes in blocks)
dishes (N:1) → categories
dishes (1:N) → media (images)
settings (1:1) → global configuration
```

### Índices para Performance
- `dishes.category` - Para filtrado rápido por categoría
- `dishes.available` - Para mostrar solo disponibles
- `dishes.featured` - Para homepage y destacados
- `pages.slug` - Para routing SEO-friendly
- `categories.order` - Para ordenación consistente 