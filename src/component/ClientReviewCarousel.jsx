import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import clientReview1 from '../assets/images/trustpilot/review1.webp'
import clientReview2 from '../assets/images/trustpilot/review2.webp'
import clientReview3 from '../assets/images/trustpilot/review3.webp'
import clientReview4 from '../assets/images/trustpilot/review4.webp'
import clientReview5 from '../assets/images/trustpilot/review5.webp'
import clientReview6 from '../assets/images/trustpilot/review6.webp'
import clientReview7 from '../assets/images/trustpilot/review7.webp'
import clientReview8 from '../assets/images/trustpilot/review8.webp'
import sliderVideoThumbnail from '../assets/images/page-two/sliderVidoeThumbnail.webp'
import Loader from './ui/Loader'

const clientReviews = [
  clientReview1,
  clientReview2,
  clientReview3,
  clientReview4,
  clientReview5,
  clientReview6,
  clientReview7,
  clientReview8,
]

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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
      <style
        dangerouslySetInnerHTML={{
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

          .client-review-carousel-wrapper .slick-dots li button::before {
            opacity: 0;
          }
          
          .client-review-carousel-wrapper .slick-dots li.slick-active button {
            background-color: #ffffff !important;
          }
          
          .client-review-carousel-wrapper .slick-slide {
            padding: 0 0px !important;
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
                .client-review-carousel-wrapper .slick-slide {
            padding: 0 10px !important;
          }
          }
        `,
        }}
      />

      <div className="mx-auto w-full max-w-7xl overflow-hidden sm:px-4 md:px-8">
        <Slider {...settings}>
          {/* First Slide - Video */}
          <div className="relative w-full md:pl-[25px] lg:!w-[698px]">
            <div
              className="h-[250px] w-full overflow-hidden rounded-xl bg-black sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[400px]"
              style={{ aspectRatio: '16/9' }}
            >
              {!showVideo ? (
                <div
                  className="relative h-full w-full cursor-pointer"
                  onClick={handleVideoPlay}
                >
                  <img
                    src={sliderVideoThumbnail}
                    alt="Video Thumbnail"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjk4IiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKWtiBWaWRlbyBUaHVtYm5haWw8L3RleHQ+PC9zdmc+'
                    }}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="relative h-full w-full">
                  {isVideoLoading && <Loader />}
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/otezXZ_W2fM?autoplay=1controls=1&rel=0&modestbranding=1"
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

          {clientReviews.map((review, index) => {
            return (
              <div
                className="relative w-full md:pl-[25px] lg:!w-[430px]"
                key={index}
              >
                <div
                  className="h-[250px] w-full overflow-hidden rounded-xl bg-white shadow-lg sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[400px]"
                  style={{ aspectRatio: '16/9' }}
                >
                  <img
                    src={review}
                    alt="Client Review 2"
                    className="h-full w-full object-contain object-top"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2IiBzdHJva2U9IiNlNWU3ZWIiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSItMC41ZW0iPkNsaWVudCBSZXZpZXc8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjEuNWVtIj5JbWFnZSBVbmF2YWlsYWJsZTwvdGV4dD48L3N2Zz4='
                    }}
                  />
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default ClientReviewCarousel
