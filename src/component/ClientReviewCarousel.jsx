import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import clientReview1 from '../assets/images/page-two/client-review-1.jpg'
import clientReview2 from '../assets/images/page-two/client-review-2.jpg'
import sliderVideoThumbnail from '../assets/images/page-two/sliderVidoeThumbnail.png'

// Custom styles for the slider
const sliderStyles = `
  .client-review-slider .slick-dots {
    bottom: -30px;
    position: static;
    margin-top: 3.3rem;
  }

  .client-review-slider .slick-dots li {
    margin: 0 4px;
  }

  .client-review-slider .slick-dots li button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    border: none;
    transition: all 0.3s ease;
  }

  .client-review-slider .slick-dots li button:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.1);
  }

  .client-review-slider .slick-dots li.slick-active button {
    background-color: #ffffff;
  }

  .client-review-slider .slick-slide {
    padding: 0 10px;
  }

  .client-review-slider .slick-list {
    margin: 0 -60px;
  }

  @media (max-width: 768px) {
    .client-review-slider .slick-list {
      margin: 0;
    }
      .client-review-slider .slick-dots {
    margin-top: 1rem;
  }
  }
`

const ClientReviewCarousel = () => {
  const [showVideo, setShowVideo] = useState(false)
  const [isVideoLoading, setIsVideoLoading] = useState(true)

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          variableWidth: false,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        }
      }
    ],
    variableWidth: true,
    appendDots: (dots) => (
      <div className="mt-8">
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        className="h-3 w-3 rounded-full bg-white bg-opacity-60 transition-all duration-300 focus:outline-none hover:bg-white hover:bg-opacity-80 aria-selected:bg-white aria-selected:w-4 aria-selected:h-4"
        aria-label={`Go to slide ${i + 1}`}
      />
    ),
  }

  const handleVideoPlay = () => {
    setShowVideo(true)
    setIsVideoLoading(true)
  }

  return (
    <>
      <style>{sliderStyles}</style>
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 client-review-slider overflow-hidden">
        <Slider {...settings}>
          {/* First Slide - Video */}
          <div className="relative w-full lg:!w-[698px]">
            <div
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] bg-black rounded-xl overflow-hidden"
              style={{ aspectRatio: '16/9' }}
            >
              {!showVideo ? (
                <div
                  className="relative w-full h-full cursor-pointer group"
                  onClick={handleVideoPlay}
                >
                  <img
                    src={sliderVideoThumbnail}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <>
                  {isVideoLoading && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10">
                      <p className="text-white text-sm font-medium">Loading...</p>
                    </div>
                  )}
                  <iframe
                    className="w-full h-full relative z-20"
                    src="https://www.youtube.com/embed/a9M6uPzQLFs?autoplay=1&controls=1&rel=0&modestbranding=1"
                    title="Client Review Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    onLoad={() => setIsVideoLoading(false)}
                  />
                </>
              )}
            </div>
          </div>

          {/* Second Slide - Testimonial Image 1 */}
          <div className="relative w-full lg:!w-[430px]">
            <div
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] rounded-xl overflow-hidden bg-white"
              style={{ aspectRatio: '16/9' }}
            >
              <img
                src={clientReview1}
                alt="Client Review 1"
                className="w-full h-full object-contain object-top"
              />
            </div>
          </div>

          {/* Third Slide - Testimonial Image 2 */}
          <div className="relative w-full lg:!w-[430px]">
            <div
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] rounded-xl overflow-hidden bg-white"
              style={{ aspectRatio: '16/9' }}
            >
              <img
                src={clientReview2}
                alt="Client Review 2"
                className="w-full h-full object-contain object-top"
              />
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default ClientReviewCarousel
