import React from 'react'

const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322813!2d-75.5841058857367!3d6.223849995511857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442832388b3f3d%3A0x44a39ace3b3988ac!2sParque%20Lleras%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1sen!2sus!4v1622055431182!5m2!1sen!2sus"

export const MapaEmbebido = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Encuéntranos Aquí</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={mapUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
} 