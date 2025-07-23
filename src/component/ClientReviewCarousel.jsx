import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import clientReview1 from '../assets/images/page-two/client-review-1.jpg'
import clientReview2 from '../assets/images/page-two/client-review-2.jpg'
import sliderVideoThumbnail from '../assets/images/page-two/sliderVidoeThumbnail.png'

const ClientReviewCarousel = () => {
  const [showVideo, setShowVideo] = useState(false)
  const [isVideoLoading, setIsVideoLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering
  useEffect(() => {
    setMounted(true)
    return () => {
      setShowVideo(false) // Clean up video state when component unmounts
    }
  }, [])

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
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const handleVideoPlay = () => {
    setShowVideo(true)
    setIsVideoLoading(true)
  }

  const handleVideoLoad = () => {
    setIsVideoLoading(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="client-review-carousel-wrapper">
      {/* Inline styles to prevent conflicts */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .client-review-carousel-wrapper .slick-dots {
            bottom: -30px !important;
            position: static !important;
            margin-top: 3.3rem !important;
          }
          
          .client-review-carousel-wrapper .slick-dots li {
            margin: 0 0px !important;
          }
          
          .client-review-carousel-wrapper .slick-dots li button {
            width: 12px !important;
            height: 12px !important;
            border-radius: 50% !important;
            background-color: rgba(255, 255, 255, 0.6) !important;
            border: none !important;
            transition: all 0.3s ease !important;
          }
          
          .client-review-carousel-wrapper .slick-dots li button:hover {
            background-color: rgba(255, 255, 255, 0.8) !important;
            transform: scale(1.1) !important;
          }
          
          .client-review-carousel-wrapper .slick-dots li.slick-active button {
            background-color: #ffffff !important;
          }
          
          .client-review-carousel-wrapper .slick-slide {
            padding: 0 10px !important;
          }
          
          .client-review-carousel-wrapper .slick-list {
            margin: 0 -60px !important;
          }
          
          @media (max-width: 768px) {
            .client-review-carousel-wrapper .slick-list {
              margin: 0 !important;
            }
            .client-review-carousel-wrapper .slick-dots {
              margin-top: 1rem !important;
            }
          }
        `
      }} />

      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 overflow-hidden">
        <Slider {...settings}>
          {/* First Slide - Video */}
          <div className="relative w-full lg:!w-[698px]">
            <div
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] bg-black rounded-xl overflow-hidden"
              style={{ aspectRatio: '16/9' }}
            >
              {!showVideo ? (
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={handleVideoPlay}
                >
                  <img
                    src={sliderVideoThumbnail}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjk4IiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKWtiBWaWRlbyBUaHVtYm5haWw8L3RleHQ+PC9zdmc+'
                    }}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="relative w-full h-full">
                  {isVideoLoading && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                      <p className="text-white text-sm font-medium ml-3">Loading video...</p>
                    </div>
                  )}
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/a9M6uPzQLFs?autoplay=1controls=1&rel=0&modestbranding=1"
                    title="Client Review Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    onLoad={handleVideoLoad}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Second Slide - Testimonial Image 1 */}
          <div className="relative w-full lg:!w-[430px]">
            <div
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] rounded-xl overflow-hidden bg-white shadow-lg"
              style={{ aspectRatio: '16/9' }}
            >
              <img
                src={clientReview1}
                alt="Client Review 1"
                className="w-full h-full object-contain object-top"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2IiBzdHJva2U9IiNlNWU3ZWIiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSItMC41ZW0iPkNsaWVudCBSZXZpZXc8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjEuNWVtIj5JbWFnZSBVbmF2YWlsYWJsZTwvdGV4dD48L3N2Zz4='
                }}
              />
            </div>
          </div>

          {/* Third Slide - Testimonial Image 2 */}
          <div className="relative w-full lg:!w-[430px]">
            <div
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] rounded-xl overflow-hidden bg-white shadow-lg"
              style={{ aspectRatio: '16/9' }}
            >
              <img
                src={clientReview2}
                alt="Client Review 2"
                className="w-full h-full object-contain object-top"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2IiBzdHJva2U9IiNlNWU3ZWIiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSItMC41ZW0iPkNsaWVudCBSZXZpZXc8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjEuNWVtIj5JbWFnZSBVbmF2YWlsYWJsZTwvdGV4dD48L3N2Zz4='
                }}
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default ClientReviewCarousel