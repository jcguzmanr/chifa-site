import React from 'react'
import Image from 'next/image'

const DishCard = ({ dish }) => {
  return (
    <div className="border rounded-lg p-4">
      {dish.images && dish.images.length > 0 && (
        <Image
          src={dish.images[0].image.url}
          alt={dish.images[0].image.alt}
          width={400}
          height={300}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold">{dish.name}</h3>
        <p className="mt-2 text-gray-600">{dish.shortDescription}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold text-lg">€{dish.price}</span>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Añadir
          </button>
        </div>
      </div>
    </div>
  )
}

export default DishCard 