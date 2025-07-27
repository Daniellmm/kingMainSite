import React, { useState } from 'react'

const VideoCarousel = ({ videos }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  const handlePrevVideo = () => {
    setCurrentSlide((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  const handleNextVideo = () => {
    setCurrentSlide((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full">
      {/* Desktop/Large Screen Layout */}
      <div className="relative hidden w-full bg-black lg:block">
        <div className="bg-grid-pattern absolute inset-0 opacity-20"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-center">
            <button
              className="absolute left-4 z-30 rounded-full bg-[#E7A647] p-2 shadow-lg transition-colors duration-300 hover:bg-[#c98c3c]"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="z-10 -mr-6 mb-6 w-1/4 transform transition-transform duration-300 hover:scale-105 md:mb-0">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <iframe
                  className="aspect-video w-full"
                  src={
                    videos[(currentSlide - 1 + videos.length) % videos.length]
                  }
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="z-20 mb-6 w-1/2 transform transition-transform duration-300 hover:scale-105 md:mb-0">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <iframe
                  className="aspect-video w-full"
                  src={videos[currentSlide]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="z-10 -ml-6 w-1/4 transform transition-transform duration-300 hover:scale-105">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <iframe
                  className="aspect-video w-full"
                  src={videos[(currentSlide + 1) % videos.length]}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <button
              className="absolute right-4 z-30 rounded-full bg-[#E7A647] p-2 shadow-lg transition-colors duration-300 hover:bg-[#c98c3c]"
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

      {/* Mobile/Medium Screen Slider */}
      <div className="relative w-full bg-black lg:hidden">
        <div className="bg-grid-pattern absolute inset-0 opacity-20"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
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
                        className="aspect-video h-[250px] w-full"
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

            <div className="flex items-center justify-center gap-x-10">
              <button
                className="absolute bottom-[-80px] left-[10px] z-30 -translate-y-1/2 transform rounded-full bg-[#E7A647] p-2 shadow-lg transition-colors duration-300 hover:bg-[#c98c3c]"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                className="absolute bottom-[-80px] right-[10px] z-30 -translate-y-1/2 transform rounded-full bg-[#E7A647] p-2 shadow-lg transition-colors duration-300 hover:bg-[#c98c3c]"
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

          <div className="mt-4 flex justify-center pt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                className={`mx-1 h-3 w-3 rounded-full ${
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
          background-image:
            linear-gradient(
              to right,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  )
}

export default VideoCarousel
