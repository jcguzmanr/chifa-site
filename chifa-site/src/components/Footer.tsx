import React from 'react'
import Link from 'next/link'

const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com' },
  { name: 'TikTok', url: 'https://tiktok.com' },
  { name: 'WhatsApp', url: 'https://whatsapp.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
]

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Síguenos en Redes Sociales</h3>
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((link) => (
            <Link href={link.url} key={link.name} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
              {link.name}
            </Link>
          ))}
        </div>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Chifa Fusión. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
} 