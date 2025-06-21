import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Categoria, Plato } from '@/payload-types'
import { Menu } from '@/components/Menu'

export default async function MenuPage() {
  const payload = await getPayload({ config })

  const categoriesReq = await payload.find({
    collection: 'categorias',
    sort: 'name',
    depth: 0,
  })
  const categories = categoriesReq.docs as Categoria[]

  const dishesReq = await payload.find({
    collection: 'platos',
    limit: 100,
    depth: 1,
  })
  const dishes = dishesReq.docs as Plato[]

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Nuestro Menú</h1>
      <Menu categories={categories} dishes={dishes} />
    </div>
  )
} 