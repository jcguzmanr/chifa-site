import React from 'react'

const Footer = ({ copyright }) => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>{copyright}</p>
      </div>
    </footer>
  )
}

export default Footer 