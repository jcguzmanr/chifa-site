import React from 'react'

const testimonials = [
  {
    quote: "La mejor comida chifa que he probado en Barcelona. El Arroz Chaufa es simplemente espectacular. ¡Volveré pronto!",
    author: "Ana García",
    source: "Reseña de Google"
  },
  {
    quote: "Un ambiente acogedor y un servicio impecable. El Tallarín Saltado estaba delicioso. ¡Totalmente recomendado!",
    author: "Carlos Pérez",
    source: "Reseña de TripAdvisor"
  },
  {
    quote: "Sabores auténticos que te transportan a Perú. El Pollo Chijaukay es un plato que no te puedes perder.",
    author: "Sofía Rodríguez",
    source: "Reseña de Google"
  }
]

export const TestimoniosSlider = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="text-gray-800 font-bold text-right">- {testimonial.author}</p>
              <p className="text-gray-500 text-sm text-right">{testimonial.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 