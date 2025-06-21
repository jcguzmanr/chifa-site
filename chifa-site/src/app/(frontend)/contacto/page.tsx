import React from 'react'
import { MapaEmbebido } from '@/components/MapaEmbebido'
import { FormularioDeContacto } from '@/components/FormularioDeContacto'

const contactDetails = {
  address: 'Carrer Fictici, 123, 08001 Barcelona',
  phone: '+34 123 456 789',
  whatsapp: '+34 123 456 789',
  email: 'reservas@chifafusion.es',
  schedule: [
    { day: 'Lunes a Jueves', hours: '12:00 PM - 10:00 PM' },
    { day: 'Viernes y Sábado', hours: '12:00 PM - 11:00 PM' },
    { day: 'Domingo', hours: '12:00 PM - 9:00 PM' },
    { day: 'Festivos', hours: 'Consultar horario especial' },
  ],
  accessibility: 'Local con rampa de acceso y baño adaptado. Personal habla español, catalán e inglés.',
  transport: 'Parking más cercano a 50m. Paradas de Metro L1 y L3 a 5 minutos andando.'
}

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Ubicación y Contacto</h1>
      {/* Mapa */}
      <div className="mb-12">
        <MapaEmbebido />
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Información de Contacto */}
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Visítanos</h2>
            <p className="text-lg text-gray-700">{contactDetails.address}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Llámanos o Escríbenos</h2>
            <ul className="space-y-2 text-lg">
              <li><strong>Teléfono:</strong> <a href={`tel:${contactDetails.phone}`} className="text-yellow-600 hover:underline">{contactDetails.phone}</a></li>
              <li><strong>WhatsApp:</strong> <a href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">{contactDetails.whatsapp}</a></li>
              <li><strong>Email:</strong> <a href={`mailto:${contactDetails.email}`} className="text-yellow-600 hover:underline">{contactDetails.email}</a></li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Horarios</h2>
            <ul className="space-y-1 text-lg text-gray-700">
              {contactDetails.schedule.map(item => (
                <li key={item.day}><strong>{item.day}:</strong> {item.hours}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Información Adicional</h2>
            <p className="text-lg text-gray-700"><strong>Accesibilidad:</strong> {contactDetails.accessibility}</p>
            <p className="text-lg text-gray-700"><strong>Transporte y Parking:</strong> {contactDetails.transport}</p>
          </section>
        </div>

        {/* Formulario de Contacto */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Envíanos un Mensaje</h2>
          <div className="bg-gray-100 p-8 rounded-lg">
            <FormularioDeContacto />
          </div>
        </div>
      </div>
    </div>
  );
} 