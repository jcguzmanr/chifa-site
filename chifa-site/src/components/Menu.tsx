'use client'

import React, { useState, useMemo } from 'react'
import type { Categoria, Plato } from '@/payload-types'
import { PlatoCard } from './PlatoCard'

interface MenuProps {
  categories: Categoria[]
  dishes: Plato[]
}

const proteinOptions = ['Pollo', 'Res', 'Cerdo', 'Mariscos']

export const Menu: React.FC<MenuProps> = ({ categories, dishes }) => {
  const [filters, setFilters] = useState({
    spicy: false,
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    protein: [] as string[],
  })

  const handleFilterChange = (filterName: keyof typeof filters, value: boolean | string) => {
    if (filterName === 'protein') {
      const currentProteins = filters.protein
      const newProteins = currentProteins.includes(value as string)
        ? currentProteins.filter(p => p !== value)
        : [...currentProteins, value as string]
      setFilters(prev => ({ ...prev, protein: newProteins }))
    } else {
      setFilters(prev => ({ ...prev, [filterName]: value }))
    }
  }

  const filteredDishes = useMemo(() => {
    return dishes.filter(dish => {
      if (filters.spicy && (dish.indicadores?.picor || 0) === 0) return false
      if (filters.vegetarian && !dish.indicadores?.vegetariano) return false
      if (filters.vegan && !dish.indicadores?.vegano) return false
      if (filters.glutenFree && !dish.indicadores?.sin_gluten) return false
      if (filters.protein.length > 0) {
        const dishContent = `${dish.nombre} ${dish.subcategoria} ${dish.ingredientes_principales?.map(i => i.ingrediente).join(' ')}`.toLowerCase()
        
        const proteinKeywords = {
          Pollo: ['pollo'],
          Res: ['res', 'carne'],
          Cerdo: ['cerdo', 'chancho'],
          Mariscos: ['marisco', 'langostino', 'camaron', 'wantán'],
        }

        const matchesProtein = filters.protein.some(protein => 
          proteinKeywords[protein]?.some(keyword => dishContent.includes(keyword))
        )

        if (!matchesProtein) return false
      }
      return true
    })
  }, [filters, dishes])

  return (
    <div>
      {/* Panel de Filtros */}
      <div className="bg-gray-50 p-4 rounded-lg mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Filtros de Dieta */}
          <div className="space-y-2">
            <h4 className="font-semibold">Dieta</h4>
            <label className="flex items-center">
              <input type="checkbox" checked={filters.vegetarian} onChange={(e) => handleFilterChange('vegetarian', e.target.checked)} className="form-checkbox" />
              <span className="ml-2">Vegetariano</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" checked={filters.vegan} onChange={(e) => handleFilterChange('vegan', e.target.checked)} className="form-checkbox" />
              <span className="ml-2">Vegano</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" checked={filters.glutenFree} onChange={(e) => handleFilterChange('glutenFree', e.target.checked)} className="form-checkbox" />
              <span className="ml-2">Sin Gluten</span>
            </label>
          </div>
          {/* Filtro de Picante */}
          <div className="space-y-2">
            <h4 className="font-semibold">Picor</h4>
            <label className="flex items-center">
              <input type="checkbox" checked={filters.spicy} onChange={(e) => handleFilterChange('spicy', e.target.checked)} className="form-checkbox" />
              <span className="ml-2">Picante</span>
            </label>
          </div>
          {/* Filtro de Proteína */}
          <div className="col-span-2 space-y-2">
            <h4 className="font-semibold">Proteína</h4>
            <div className="flex flex-wrap gap-2">
              {proteinOptions.map(protein => (
                <label key={protein} className="flex items-center">
                  <input type="checkbox" checked={filters.protein.includes(protein)} onChange={() => handleFilterChange('protein', protein)} className="form-checkbox" />
                  <span className="ml-2">{protein}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Navegación de Categorías */}
      <nav className="sticky top-16 bg-white py-4 mb-8 shadow-sm rounded-lg">
        <ul className="flex justify-center flex-wrap gap-4 px-4">
          {categories.map((category) => (
            <li key={category.id}>
              <a 
                href={`#${category.slug}`} 
                className="px-4 py-2 rounded-full bg-gray-200 hover:bg-yellow-400 transition"
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Secciones de Platos por Categoría */}
      <div className="space-y-12">
        {categories.map((category) => {
           const categoryDishes = filteredDishes.filter(dish => (dish.categoria as Categoria)?.id === category.id)
           if(categoryDishes.length === 0) return null

           return (
            <section key={category.id} id={category.slug}>
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-yellow-500 pb-2">{category.name}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryDishes.map((dish) => (
                    <PlatoCard key={dish.id} plato={dish} />
                  ))}
              </div>
            </section>
           )
        })}
      </div>
    </div>
  )
} 