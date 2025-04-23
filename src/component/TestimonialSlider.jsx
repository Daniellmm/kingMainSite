  import React, { useState, useEffect, useRef } from 'react';
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
  import testimonial20 from '../assets/images/testimonial/April.png';
  import testimonial21 from '../assets/images/testimonial/Marcus.png';
  import testimonial22 from '../assets/images/testimonial/Clayton.png';
  import testimonial23 from '../assets/images/testimonial/Gilbert.png';
  import testimonial24 from '../assets/images/testimonial/Odile.png';
  import testimonial25 from '../assets/images/testimonial/Xufang.png';
  import testimonial26 from '../assets/images/testimonial/Delfin.png';
  import testimonial27 from '../assets/images/testimonial/Justin.png';

  const images = [
    testimonial1, 
    testimonial2, 
    testimonial3, 
    testimonial4,
    testimonial5,
    testimonial6,
    testimonial7,
    testimonial8,
    testimonial9,
    testimonial10,
    testimonial11,
    testimonial12,
    testimonial13,
    testimonial14,
    testimonial15,
    testimonial16,
    testimonial17,
    testimonial18,
    testimonial19,
    testimonial20,
    testimonial21,
    testimonial22,
    testimonial23,
    testimonial24,
    testimonial25,
    testimonial26,
    testimonial27,
  ];

  const CustomSlider = ({ autoSlideInterval = 5000 }) => {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const autoSlideTimer = useRef(null);

    // Handle automatic sliding
    useEffect(() => {
      startAutoSlide();
      return () => clearInterval(autoSlideTimer.current);
    }, []);
    

    const startAutoSlide = () => {
      // Clear any existing timer
      if (autoSlideTimer.current) {
        clearInterval(autoSlideTimer.current);
      }
      
      // Set up new timer
      autoSlideTimer.current = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);
    };

    const resetAutoSlideTimer = () => {
      startAutoSlide();
    };

    const prevSlide = () => {
      if (isTransitioning) return;
      
      setIsTransitioning(true);
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      
      // Reset the transitioning state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      
      resetAutoSlideTimer();
    };

    const nextSlide = () => {
      if (isTransitioning) return;
      
      setIsTransitioning(true);
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      
      // Reset the transitioning state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      
      resetAutoSlideTimer();
    };

    const goToSlide = (index) => {
      if (isTransitioning || index === current) return;
      
      setIsTransitioning(true);
      setCurrent(index);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      
      resetAutoSlideTimer();
    };

    // Pause auto-sliding when user hovers over the slider
    const handleMouseEnter = () => {
      if (autoSlideTimer.current) {
        clearInterval(autoSlideTimer.current);
      }
    };

    // Resume auto-sliding when user stops hovering
    const handleMouseLeave = () => {
      startAutoSlide();
    };

    return (
      <div 
        className="relative w-full lg:mx-10 rounded-lg shadow-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-full overflow-hidden">
          {/* Create a wrapper div that holds all images side by side */}
          <div 
            className="flex transition-transform gap-x-4 duration-500 ease-in-out h-full md:gap-x-9"
            style={{ 
              transform: `translateX(-${current * 10}%)`,
              width: `${images.length * 10}%`
            }}
            
          >
            {images.map((img, index) => (
              <div 
                key={index}
                className=" flex-shrink-0 w-[20%] lg:w-[10%]"
                // style={{ width: `${40 / images.length}%` }}
              >
                <img 
                  src={img} 
                  alt={`Testimonial ${index + 1}`} 
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button 
          onClick={prevSlide} 
          className="absolute top-1/2 left-2 md:left-[-40px] transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow-md hover:bg-gray-200 transition opacity-75 hover:opacity-100 z-10"
          disabled={isTransitioning}
        >
          ‹
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute top-1/2 right-2 md:right-[-40px] transform -translate-y-1/2 bg-white text-black px-3 py-2 rounded-full shadow-md hover:bg-gray-200 transition opacity-75 hover:opacity-100 z-10"
          disabled={isTransitioning}
        >
          ›
        </button>

        {/* Dots */}
        {/* <div className="absolute bottom-[-30px] z-20 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === current ? 'bg-yellow-600' : 'bg-white/50'} cursor-pointer transition-colors duration-300`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div> */}
      </div>
    );
  };

  export default CustomSlider;