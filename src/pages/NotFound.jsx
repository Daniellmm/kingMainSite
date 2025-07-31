import React from 'react'
import { useNavigate } from 'react-router-dom'
import homeLogo from '../assets/images/logo/homeLogo.png'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 py-20">
      <img
        src={homeLogo}
        alt="Home Logo"
        className="mb-8 h-20 w-20 object-contain"
      />
      <h1
        className="mb-4 text-4xl font-bold text-[#E7A647]"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        404 - Page Not Found
      </h1>
      <p
        className="mb-8 max-w-xl text-center text-lg text-gray-700"
        style={{ fontFamily: 'Montserrat, serif' }}
      >
        Sorry, the page you are looking for does not exist or has been moved.
        <br />
        Please check the URL or return to the homepage.
      </p>
      <button
        className="rounded-full bg-[#E7A647] px-8 py-4 text-lg font-semibold text-black shadow-md transition-all duration-200 hover:bg-[#cfa53c]"
        onClick={() => navigate('/')}
      >
        Return to Home
      </button>
    </section>
  )
}

export default NotFound
