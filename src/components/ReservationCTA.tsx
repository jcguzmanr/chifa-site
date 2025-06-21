import React from 'react'

const ReservationCTA = ({ title, buttonText, buttonUrl }) => {
  return (
    <div className="bg-gray-100 p-8 text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <a
        href={buttonUrl}
        className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded"
      >
        {buttonText}
      </a>
    </div>
  )
}

export default ReservationCTA 