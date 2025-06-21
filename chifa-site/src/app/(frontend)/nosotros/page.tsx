import React from 'react'
import { TestimoniosSlider } from '@/components/TestimoniosSlider'

const teamMembers = [
  { name: 'William Chan', role: 'Chef Principal', bio: 'Heredero de las recetas familiares, William combina la tradición con técnicas modernas para crear platos inolvidables.', imageUrl: '/team/chef.jpg' },
  { name: 'Ana Rodríguez', role: 'Jefa de Salón', bio: 'Con más de 10 años de experiencia, Ana se asegura de que cada cliente tenga una experiencia excepcional.', imageUrl: '/team/manager.jpg' },
  { name: 'Carlos Lin', role: 'Maestro del Wok', bio: 'Especialista en el arte del salteado, Carlos es el responsable del sabor auténtico de nuestro chaufa y tallarines.', imageUrl: '/team/wok.jpg' },
]

const premios = [
  { name: 'Summum', year: '2023', description: 'Top 10 Mejores Chifas de la Ciudad' },
  { name: 'Guía Gastronómica', year: '2022', description: 'Reconocimiento a la Innovación en Cocina Fusión' },
  { name: 'Sabor del Año', year: '2021', description: 'Mejor Pollo Tipakay' },
]

export default function NosotrosPage() {
  return (
    <div className="container mx-auto px-4">
      {/* Título de la página */}
      <h1 className="text-4xl font-bold text-center my-8">Nuestra Historia y Filosofía</h1>

      {/* Sección Historia */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Más de 60 Años de Tradición</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestra historia comienza en la década de 1950, en el corazón del Barrio Chino. Lo que empezó como un modesto local de comida china, se ha transformado a lo largo de tres generaciones en un referente de la gastronomía chino-peruana. Mantenemos vivas las recetas que trajeron nuestros abuelos desde Cantón, adaptándolas con un toque único al paladar peruano, y creando así el auténtico sabor chifa que nos caracteriza.
            </p>
          </div>
          <div>
            {/* Aquí podrías poner una imagen histórica del restaurante */}
            <img src="/history.jpg" alt="Historia del restaurante" className="rounded-lg shadow-lg"/>
          </div>
        </div>
      </section>

      {/* Sección Filosofía Culinaria */}
      <section className="bg-gray-100 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Nuestra Filosofía</h2>
        <p className="text-lg text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Creemos en el poder del wok, en el respeto por los ingredientes frescos y en la magia que surge al fusionar dos culturas milenarias. Nuestra filosofía se basa en tres pilares: **sabor auténtico**, **ingredientes de calidad** y **hospitalidad familiar**. Cada plato es un homenaje a nuestras raíces y una invitación a compartir un momento especial.
        </p>
      </section>

      {/* Sección Equipo */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Nuestro Equipo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md" />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-yellow-600 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Sección Premios y Reconocimientos */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Premios y Reconocimientos</h2>
        <div className="max-w-2xl mx-auto">
          {premios.map((premio) => (
            <div key={premio.name} className="bg-white p-4 rounded-lg shadow-sm mb-4 flex items-baseline">
              <span className="bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm mr-4">{premio.year}</span>
              <div>
                <h3 className="text-lg font-semibold">{premio.name}</h3>
                <p className="text-gray-600">{premio.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <TestimoniosSlider />
    </div>
  )
} 