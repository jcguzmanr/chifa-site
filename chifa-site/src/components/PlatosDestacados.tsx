import React from 'react'
import type { Plato } from '@/payload-types'
import Link from 'next/link'

interface PlatosDestacadosProps {
  platos: Plato[]
}

export const PlatosDestacados: React.FC<PlatosDestacadosProps> = ({ platos }) => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestros Platos Estrella</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {platos.map((plato) => (
            <div key={plato.id} className="border rounded-lg shadow-lg overflow-hidden">
              {typeof plato.foto === 'object' && plato.foto !== null && (
                 <img src={plato.foto.url} alt={plato.nombre} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plato.nombre}</h3>
                <p className="text-gray-700 mb-4">{plato.descripcion_corta}</p>
                <Link href={`/menu#${plato.slug}`} className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition">
                  Ver en la carta
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 