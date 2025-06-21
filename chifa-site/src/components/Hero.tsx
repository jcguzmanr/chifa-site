import React from 'react'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="relative h-[600px] bg-cover bg-center text-white" style={{ backgroundImage: "url('/hero-background.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          La Fusión Perfecta del Sabor <br />
          <span className="text-yellow-400">Chifa en Barcelona</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Descubre la magia de la cocina chino-peruana, donde la tradición y la innovación se encuentran en cada plato.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/reservar" className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition text-lg">
            Reservar Mesa
          </Link>
          <Link href="/menu" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition text-lg">
            Pedir Ahora
          </Link>
        </div>
      </div>
    </section>
  )
} 