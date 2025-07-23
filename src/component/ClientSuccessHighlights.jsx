import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const getYouTubeThumbnail = (url) => {
  const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop()
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}

const VideoCarousel = () => {
  const [activeVideo, setActiveVideo] = useState(null)
  const [mounted, setMounted] = useState(false)
  const [isVideoLoading, setIsVideoLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => {
      setActiveVideo(null)
    }
  }, [])

  const handleVideoClick = (videoId) => {
    setIsVideoLoading(true)
    setActiveVideo(videoId)
  }

  const handleVideoLoad = () => {
    setIsVideoLoading(false)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    arrows: false,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    autoplay: false,
    pauseOnHover: true,
    centerMode: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          variableWidth: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  if (!mounted) return null

  return (
    <div className="video-carousel-wrapper">
      <style dangerouslySetInnerHTML={{
        __html: `
          .video-carousel-wrapper .slick-dots {
            bottom: -30px !important;
            position: static !important;
            margin-top: 3.3rem !important;
          }

          .video-carousel-wrapper .slick-dots li {
            margin: 0 0px !important;
          }

          .video-carousel-wrapper .slick-dots li button {
            width: 12px !important;
            height: 12px !important;
            border-radius: 50% !important;
            background-color: #D9D9D9 !important;
            border: none !important;
            transition: all 0.3s ease !important;
          }

          .video-carousel-wrapper .slick-dots li button:hover {
            background-color: #444444 !important;
            transform: scale(1.1) !important;
          }

          .video-carousel-wrapper .slick-dots li.slick-active button {
            background-color: #444444 !important;
          }

          .video-carousel-wrapper .slick-slide {
            padding: 0 10px !important;
          }

          .video-carousel-wrapper .slick-list {
            margin: 0 -60px !important;
          }

          @media (max-width: 768px) {
            .video-carousel-wrapper .slick-list {
              margin: 0 !important;
            }
            .video-carousel-wrapper .slick-dots {
              margin-top: 1rem !important;
            }
          }
        `
      }} />

      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 sm:py-4 md:px-12 md:py:12 overflow-hidden">
        <Slider {...settings}>
          {/* Slide 1 (Wide) */}
          <div className="relative w-full lg:!w-[698px]">
            <div
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[395px] bg-black rounded-xl overflow-hidden"
              style={{ aspectRatio: '16/9' }}
            >
              {activeVideo === 1 ? (
                <div className="relative w-full h-full">
                  {isVideoLoading && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                      <p className="text-white text-sm font-medium ml-3">Loading video...</p>
                    </div>
                  )}
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/a9M6uPzQLFs?controls=1&rel=0&modestbranding=1"
                    title="YouTube Video 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    onLoad={handleVideoLoad}
                  />
                </div>
              ) : (
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => handleVideoClick(1)}
                >
                  <img
                    src={getYouTubeThumbnail('https://www.youtube.com/watch?v=a9M6uPzQLFs')}
                    alt="Thumbnail 1"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                    <div className="bg-black bg-opacity-80 rounded-full p-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 4l10 6-10 6V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Slide 2 (Short width - 184px) */}
          <div className="relative lg:!w-[256px]">
            <div
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[395px] bg-black rounded-xl overflow-hidden"
              style={{ aspectRatio: '9/16' }}
            >
              {activeVideo === 2 ? (
                <div className="relative w-full h-full">
                  {isVideoLoading && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                      <p className="text-white text-sm font-medium ml-3">Loading video...</p>
                    </div>
                  )}
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Ib9feq1-YVw?controls=1&rel=0&modestbranding=1"
                    title="YouTube Short"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    onLoad={handleVideoLoad}
                  />
                </div>
              ) : (
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => handleVideoClick(2)}
                >
                  <img
                    src={getYouTubeThumbnail('https://www.youtube.com/watch?v=Ib9feq1-YVw')}
                    alt="Short Video"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                    <div className="bg-black bg-opacity-80 rounded-full p-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 4l10 6-10 6V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Slide 3 (Wide) */}
          <div className="relative w-full lg:!w-[698px]">
            <div
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[395px] bg-black rounded-xl overflow-hidden"
              style={{ aspectRatio: '16/9' }}
            >
              {activeVideo === 3 ? (
                <div className="relative w-full h-full">
                  {isVideoLoading && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                      <p className="text-white text-sm font-medium ml-3">Loading video...</p>
                    </div>
                  )}
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/byzZl7yl0S0?controls=1&rel=0&modestbranding=1"
                    title="YouTube Video 3"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    onLoad={handleVideoLoad}
                  />
                </div>
              ) : (
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => handleVideoClick(3)}
                >
                  <img
                    src={getYouTubeThumbnail('https://www.youtube.com/watch?v=byzZl7yl0S0')}
                    alt="Thumbnail 3"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                    <div className="bg-black bg-opacity-80 rounded-full p-3">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 4l10 6-10 6V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default VideoCarousel
