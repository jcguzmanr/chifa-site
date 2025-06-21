import React from 'react'

const schedule = [
  { day: 'Lunes a Jueves', hours: '12:00 PM - 10:00 PM' },
  { day: 'Viernes y Sábado', hours: '12:00 PM - 11:00 PM' },
  { day: 'Domingo', hours: '12:00 PM - 9:00 PM' },
  { day: 'Festivos', hours: 'Consultar horario especial' },
]

export const HorarioDestacado = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestro Horario</h2>
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {schedule.map((item, index) => (
            <div key={index} className="text-lg">
              <span className="font-semibold">{item.day}:</span>
              <span className="ml-2 text-gray-700">{item.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 