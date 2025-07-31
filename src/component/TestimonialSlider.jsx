import React, { useEffect, useRef } from 'react'
import Slider from 'react-slick'
import { gsap } from 'gsap'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const videoIds = [
  'J24rETbL1k0',
  '-dFt2PeeHVI',
  'n1XCU3c5b5w',
  'UajfUJ5HaDE',
  'ShcU6JhKakE',
  'aBga5USRyFU',
  'eaQb5pKNgNw',
  'RilouXKQE-M',
  'UFoHfF41QOU',
  'tUPc0pDAYhI',
  'VNKFycQ9rOI',
  'b47VAdaUeEI',
]

const TestimonialVideoSlider = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    arrows: true,
    centerMode: true,
    appendDots: (dots) => (
      <div className="mt-4 sm:mt-8">
        <ul className="flex justify-center gap-1">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        className="h-1 w-6 rounded-full bg-gray-400 transition-all duration-300 focus:outline-none aria-selected:w-8 aria-selected:bg-[#E7A647] sm:h-1 sm:w-8 aria-selected:sm:w-12"
        aria-label={`Go to testimonial ${i + 1}`}
      />
    ),
    prevArrow: (
      <button
        className="slick-prev z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#E7A647] bg-opacity-80 text-black backdrop-blur-sm transition-all duration-300 hover:bg-opacity-100 sm:h-10 sm:w-10"
        aria-label="Previous testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    ),
    nextArrow: (
      <button
        className="slick-next z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#E7A647] bg-opacity-80 text-black backdrop-blur-sm transition-all duration-300 hover:bg-opacity-100 sm:h-10 sm:w-10"
        aria-label="Next testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    ),
  }

  useEffect(() => {
    if (sliderRef.current) {
      gsap.fromTo(
        '.testimonial-slide',
        { opacity: 0.5, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.1,
        },
      )
    }
  }, [])

  const goToPrevious = () => {
    sliderRef.current?.slickPrev()
  }

  const goToNext = () => {
    sliderRef.current?.slickNext()
  }

  return (
    <div className="relative w-full pt-8 md:pt-16">
      <div className="relative z-10 mx-auto max-w-7xl px-12">
        <Slider
          ref={sliderRef}
          {...settings}
          className="testimonial-slider px-40 sm:px-4"
        >
          {videoIds.map((id, index) => (
            <div key={index} className="testimonial-slide px-2">
              <div className="overflow-hidden rounded-xl border border-gray-800 shadow-2xl">
                <div className="relative h-[300px] w-auto overflow-hidden rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 md:h-[395px]">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Testimonial video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={goToPrevious}
            className="flex h-12 w-12 transform items-center justify-center rounded-full bg-[#E7A647] bg-opacity-90 text-black shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-opacity-100 hover:shadow-xl"
            aria-label="Previous testimonials"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="flex h-12 w-12 transform items-center justify-center rounded-full bg-[#E7A647] bg-opacity-90 text-black shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-opacity-100 hover:shadow-xl"
            aria-label="Next testimonials"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TestimonialVideoSlider
