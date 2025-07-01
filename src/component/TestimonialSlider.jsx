import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { gsap } from 'gsap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonial1 from '../assets/images/testimonial/Joshua.png';
import testimonial2 from '../assets/images/testimonial/Matt.png';
import testimonial3 from '../assets/images/testimonial/Rene.png';
import testimonial4 from '../assets/images/testimonial/Demarcus.png';
import testimonial5 from '../assets/images/testimonial/Najibul.png';
import testimonial6 from '../assets/images/testimonial/Robert.png';
import testimonial7 from '../assets/images/testimonial/Jeremy.png';
import testimonial8 from '../assets/images/testimonial/Lemy.png';
import testimonial9 from '../assets/images/testimonial/Raul.png';
import testimonial10 from '../assets/images/testimonial/Sarah.png';
import testimonial11 from '../assets/images/testimonial/Juwan.png';
import testimonial12 from '../assets/images/testimonial/Daniel.png';
import testimonial13 from '../assets/images/testimonial/Bernicia.png';
import testimonial14 from '../assets/images/testimonial/Tyrone.png';
import testimonial15 from '../assets/images/testimonial/Abdullah.png';
import testimonial16 from '../assets/images/testimonial/Corboi.png';
import testimonial17 from '../assets/images/testimonial/Brittany.png';
import testimonial18 from '../assets/images/testimonial/Marshall.png';
import testimonial19 from '../assets/images/testimonial/AgaFilms.png';
// import testimonial20 from '../assets/images/testimonial/April.png';
// import testimonial21 from '../assets/images/testimonial/Marcus.png';
// import testimonial22 from '../assets/images/testimonial/Clayton.png';
// import testimonial23 from '../assets/images/testimonial/Gilbert.png';
// import testimonial24 from '../assets/images/testimonial/Odile.png';
// import testimonial25 from '../assets/images/testimonial/Xufang.png';
// import testimonial26 from '../assets/images/testimonial/Delfin.png';
// import testimonial27 from '../assets/images/testimonial/Justin.png';

const testimonials = [
  { id: 1, image: testimonial1, name: 'Joshua', quote: 'Transformed my business with their funding solutions!' },
  { id: 2, image: testimonial2, name: 'Matt', quote: 'Incredible support and results beyond expectations.' },
  { id: 3, image: testimonial3, name: 'Rene', quote: 'A game-changer for entrepreneurs needing capital.' },
  { id: 4, image: testimonial4, name: 'Demarcus', quote: 'Fast, reliable, and easy to work with.' },
  { id: 5, image: testimonial5, name: 'Najibul', quote: 'Helped me scale my startup effortlessly.' },
  { id: 6, image: testimonial6, name: 'Robert', quote: 'The best funding partner I’ve ever had.' },
  { id: 7, image: testimonial7, name: 'Jeremy', quote: 'Their expertise made all the difference.' },
  { id: 8, image: testimonial8, name: 'Lemy', quote: 'Secured funding when I needed it most.' },
  { id: 9, image: testimonial9, name: 'Raul', quote: 'A seamless experience from start to finish.' },
  { id: 10, image: testimonial10, name: 'Sarah', quote: 'Empowered my business to grow rapidly.' },
  { id: 11, image: testimonial11, name: 'Juwan', quote: 'Professional and results-driven.' },
  { id: 12, image: testimonial12, name: 'Daniel', quote: 'Funding made simple and accessible.' },
  { id: 13, image: testimonial13, name: 'Bernicia', quote: 'They truly understand entrepreneurs’ needs.' },
  { id: 14, image: testimonial14, name: 'Tyrone', quote: 'Unmatched support for business growth.' },
  { id: 15, image: testimonial15, name: 'Abdullah', quote: 'A trusted partner for funding success.' },
  { id: 16, image: testimonial16, name: 'Corboi', quote: 'Helped me achieve my business goals.' },
  { id: 17, image: testimonial17, name: 'Brittany', quote: 'Their system is a total game-changer.' },
  { id: 18, image: testimonial18, name: 'Marshall', quote: 'Fast funding with zero hassle.' },
  { id: 19, image: testimonial19, name: 'AgaFilms', quote: 'Fueled my creative projects with ease.' },
  // { id: 20, image: testimonial20, name: 'April', quote: 'Outstanding service and results.' },
  // { id: 21, image: testimonial21, name: 'Marcus', quote: 'The key to unlocking my business potential.' },
  // { id: 22, image: testimonial22, name: 'Clayton', quote: 'Simplified funding for maximum impact.' },
  // { id: 23, image: testimonial23, name: 'Gilbert', quote: 'A reliable partner for growth.' },
  // { id: 24, image: testimonial24, name: 'Odile', quote: 'Their expertise is unparalleled.' },
  // { id: 25, image: testimonial25, name: 'Xufang', quote: 'Made funding accessible and stress-free.' },
  // { id: 26, image: testimonial26, name: 'Delfin', quote: 'Empowered my business to thrive.' },
  // { id: 27, image: testimonial27, name: 'Justin', quote: 'The best decision for my business growth.' },
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);

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
        className="w-6 h-1 sm:w-8 sm:h-1 rounded-full transition-all duration-300 bg-gray-400 focus:outline-none aria-selected:w-8 aria-selected:bg-[#E7A647] aria-selected:sm:w-12"
        aria-label={`Go to testimonial ${i + 1}`}
      />
    ),
    prevArrow: (
      <button
        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#E7A647] bg-opacity-80 backdrop-blur-sm text-black hover:bg-opacity-100 transition-all duration-300 z-20 slick-prev"
        aria-label="Previous testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button
        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#E7A647] bg-opacity-80 backdrop-blur-sm text-black hover:bg-opacity-100 transition-all duration-300 z-20 slick-next"
        aria-label="Next testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    ),
  };

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
        }
      );
    }
  }, []);

  const handleAfterChange = () => {
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
      }
    );
  };

  // External control functions
  const goToPrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };


  return (
    <div className="w-full bg-black py-12 relative md:py-16">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <Slider
          ref={sliderRef}
          {...settings}
          // afterChange={handleAfterChange}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-2 testimonial-slide">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <div className="relative aspect-[3/4] bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={`Testimonial by ${testimonial.name}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {/* Caption Overlay */}
                  {/* <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 backdrop-blur-md p-3 md:p-4 flex flex-col items-center text-center">
                    <p className="text-white text-xs sm:text-sm md:text-base font-medium italic line-clamp-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      "{testimonial.quote}"
                    </p>
                    <p className="text-[#E7A647] text-xs sm:text-sm md:text-base mt-1" style={{ fontFamily: 'Minion Pro, serif' }}>
                      — {testimonial.name}
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* External Control Buttons - Below Slider */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={goToPrevious}
            className="w-12 h-12 bg-[#E7A647] bg-opacity-90 backdrop-blur-sm text-black rounded-full hover:bg-opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 flex items-center justify-center"
            aria-label="Previous testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="w-12 h-12 bg-[#E7A647] bg-opacity-90 backdrop-blur-sm text-black rounded-full hover:bg-opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 flex items-center justify-center"
            aria-label="Next testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* CSS for background grid pattern and slick overrides */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .slick-prev,
        .slick-next {
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
        }
        .slick-prev {
          left: 8px;
        }
        .slick-next {
          right: 8px;
        }
        .slick-prev::before,
        .slick-next::before {
          display: none;
        }
        .slick-dots li {
          margin: 0 2px;
        }
        .slick-dots li button {
          width: 24px;
          height: 4px;
          padding: 0;
        }
        .slick-dots li button:before {
          display: none;
        }
        @media (min-width: 640px) {
          .slick-prev {
            left: 16px;
          }
          .slick-next {
            right: 16px;
          }
          .slick-dots li button {
            width: 32px;
            height: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;