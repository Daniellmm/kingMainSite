  import React, { useState, useEffect, useRef } from 'react';
  import testimonial1 from '../assets/images/testimonial/Brittany.png';
  import testimonial2 from '../assets/images/testimonial/Delfin.png';
  import testimonial3 from '../assets/images/testimonial/Jeremy.png';
  import testimonial4 from '../assets/images/testimonial/Rene.png';

  const images = [testimonial1, testimonial2, testimonial3, testimonial4];

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
        className="relative w-full max-w-3xl mx-auto rounded-lg shadow-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-full overflow-hidden">
          {/* Create a wrapper div that holds all images side by side */}
          <div 
            className="flex transition-transform gap-x-5 duration-500 ease-in-out h-full md:gap-x-10"
            style={{ 
              transform: `translateX(-${current * 10}%)`,
              width: `${images.length * 100}%`
            }}
            
          >
            {images.map((img, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0"
                style={{ width: `${50 / images.length}%` }}
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
        <div className="absolute bottom-[-30px] z-20 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === current ? 'bg-yellow-600' : 'bg-white/50'} cursor-pointer transition-colors duration-300`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    );
  };

  export default CustomSlider;