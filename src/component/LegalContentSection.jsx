import React from 'react'

const LegalContentSection = ({ headline, children }) => {
  return (
    <section className="w-full px-5 pb-10 pt-24 md:px-24 lg:px-40">
      <h1
        className="mb-6 text-2xl font-bold text-black md:text-3xl lg:text-4xl"
        style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'left' }}
      >
        {headline}
      </h1>
      <div
        className="text-base text-black md:text-lg lg:text-xl"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          textAlign: 'left',
          lineHeight: '1.7',
        }}
      >
        {children}
      </div>
    </section>
  )
}

export default LegalContentSection
