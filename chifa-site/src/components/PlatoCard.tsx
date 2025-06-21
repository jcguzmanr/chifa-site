import React from 'react'
import type { Plato } from '@/payload-types'

interface PlatoCardProps {
  plato: Plato
}

export const PlatoCard: React.FC<PlatoCardProps> = ({ plato }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      {typeof plato.foto === 'object' && plato.foto?.url && (
        <img src={plato.foto.url} alt={plato.nombre} className="w-full h-48 object-cover" />
      )}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{plato.nombre}</h3>
        {plato.nombre_chino && <p className="text-sm text-gray-500 mb-2">{plato.nombre_chino}</p>}
        <p className="text-gray-700 mb-4 flex-grow">{plato.descripcion_corta}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold text-yellow-600">S/. {plato.precio.toFixed(2)}</span>
          {/* Aquí podrían ir botones de acción o más detalles */}
        </div>
        <div className="mt-2 text-xs text-gray-500">
          {plato.alergenos && plato.alergenos.length > 0 && (
            <p>
              <strong>Alérgenos:</strong> {plato.alergenos.map(a => a.alergeno).join(', ')}
            </p>
          )}
        </div>
      </div>
    </div>
  )
} 