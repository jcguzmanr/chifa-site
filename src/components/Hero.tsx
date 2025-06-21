import React from 'react'

const Hero = ({ headline, subtitle, backgroundImage, cta }) => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage.url})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl font-bold">{headline}</h1>
        <p className="mt-4 text-2xl">{subtitle}</p>
        <a
          href={cta.url}
          className={`mt-8 px-8 py-4 rounded ${
            cta.style === 'primary' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-700 hover:bg-gray-800'
          } text-white font-bold`}
        >
          {cta.text}
        </a>
      </div>
    </div>
  )
}

export default Hero 