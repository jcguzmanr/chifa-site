import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Chifa Fusión
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-yellow-600">Inicio</Link>
          <Link href="/menu" className="text-gray-600 hover:text-yellow-600">Menú</Link>
          <Link href="/nosotros" className="text-gray-600 hover:text-yellow-600">Nosotros</Link>
          <Link href="/contacto" className="text-gray-600 hover:text-yellow-600">Contacto</Link>
        </nav>
        <Link href="/reservar" className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition">
          Reservar
        </Link>
      </div>
    </header>
  )
} 