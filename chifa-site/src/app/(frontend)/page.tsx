import React from 'react'
import { Hero } from '@/components/Hero'
import { HorarioDestacado } from '@/components/HorarioDestacado'
import { ContactoCompacto } from '@/components/ContactoCompacto'
import { TestimoniosSlider } from '@/components/TestimoniosSlider'
import { PlatosDestacados } from '@/components/PlatosDestacados'
import { MiniHistoria } from '@/components/MiniHistoria'
import { MapaEmbebido } from '@/components/MapaEmbebido'
import type { Plato } from '@/payload-types'

// Payload
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function HomePage() {
  const payload = await getPayload({ config })
  
  const platosDestacados = await payload.find({
    collection: 'platos',
    where: {
      recomendado: {
        equals: true,
      },
    },
    limit: 3,
  })

  return (
    <div>
      <Hero />
      <HorarioDestacado />
      <ContactoCompacto />
      <TestimoniosSlider />
      <PlatosDestacados platos={platosDestacados.docs as Plato[]} />
      <MiniHistoria />
      <MapaEmbebido />
      {/* <PlatosDestacados platos={platosDestacados.docs as Plato[]} /> */}
      {/* Aquí se agregarán el resto de los componentes de la página de inicio */}
    </div>
  )
}
