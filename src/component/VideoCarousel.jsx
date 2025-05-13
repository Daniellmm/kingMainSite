import React, { useState } from 'react';

const VideoCarousel = ({ videos }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const handlePrevVideo = () => {
    setCurrentSlide((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    setCurrentSlide((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* Desktop/Large Screen Layout */}
      <div className="hidden lg:block bg-black w-full relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center">
            <button
              className="absolute left-4 z-30 bg-[#E7A647] rounded-full p-2 shadow-lg hover:bg-[#c98c3c] transition-colors duration-300"
              onClick={handlePrevVideo}
              aria-label="Previous video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="w-1/4 transform transition-transform duration-300 hover:scale-105 mb-6 md:mb-0 -mr-6 z-10">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <iframe
                  className="w-full aspect-video"
                  src={videos[(currentSlide - 1 + videos.length) % videos.length]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="w-1/2 transform transition-transform duration-300 hover:scale-105 mb-6 md:mb-0 z-20">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <iframe
                  className="w-full aspect-video"
                  src={videos[currentSlide]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="w-1/4 transform transition-transform duration-300 hover:scale-105 -ml-6 z-10">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <iframe
                  className="w-full aspect-video"
                  src={videos[(currentSlide + 1) % videos.length]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                //   loading='lazy'
                ></iframe>
              </div>
            </div>

            <button
              className="absolute right-4 z-30 bg-[#E7A647] rounded-full p-2 shadow-lg hover:bg-[#c98c3c] transition-colors duration-300"
              onClick={handleNextVideo}
              aria-label="Next video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Medium Screen Slider */}
      <div className="lg:hidden bg-black w-full relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {videos.map((videoUrl, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="relative overflow-hidden rounded-lg shadow-2xl">
                      <iframe
                        className="w-full h-[250px] aspect-video"
                        src={videoUrl}
                        title={`Testimonial video ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-10">
              <button
                className="absolute left-[10px] bottom-[-80px] transform -translate-y-1/2 z-30 bg-[#E7A647] rounded-full p-2 shadow-lg hover:bg-[#c98c3c] transition-colors duration-300"
                onClick={handlePrevSlide}
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                className="absolute right-[10px] bottom-[-80px] transform -translate-y-1/2 z-30 bg-[#E7A647] rounded-full p-2 shadow-lg hover:bg-[#c98c3c] transition-colors duration-300"
                onClick={handleNextSlide}
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex pt-6 justify-center mt-4">
            {videos.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 mx-1 rounded-full ${
                  currentSlide === index ? 'bg-[#E7A647]' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default VideoCarousel;