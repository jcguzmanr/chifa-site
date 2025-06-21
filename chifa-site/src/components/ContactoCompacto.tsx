import React from 'react'

const contactInfo = {
  phone: '+34 123 456 789',
  address: 'Carrer Fictici, 123, Barcelona',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Carrer+Fictici+123+Barcelona'
}

export const ContactoCompacto = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contáctanos</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <a 
            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
            className="text-xl text-gray-800 hover:text-yellow-600 transition"
          >
            📞 <span className="font-semibold">Llámanos:</span> {contactInfo.phone}
          </a>
          <a 
            href={contactInfo.googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl text-gray-800 hover:text-yellow-600 transition"
          >
            📍 <span className="font-semibold">Visítanos:</span> {contactInfo.address}
          </a>
        </div>
      </div>
    </section>
  );
} 