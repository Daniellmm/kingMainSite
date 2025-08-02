import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Congratulation testimonials
import t1 from '../assets/images/graphicTestimonials/graphic1.webp'
import t2 from '../assets/images/graphicTestimonials/graphic2.webp'
import t3 from '../assets/images/graphicTestimonials/graphic3.webp'
import t4 from '../assets/images/graphicTestimonials/graphic4.webp'
import t5 from '../assets/images/graphicTestimonials/graphic5.webp'
import t6 from '../assets/images/graphicTestimonials/graphic6.webp'
import t7 from '../assets/images/graphicTestimonials/graphic7.webp'
import t8 from '../assets/images/graphicTestimonials/graphic8.webp'
import t9 from '../assets/images/graphicTestimonials/graphic9.webp'
import t10 from '../assets/images/graphicTestimonials/graphic10.webp'
import t11 from '../assets/images/graphicTestimonials/graphic11.webp'
import t12 from '../assets/images/graphicTestimonials/graphic12.webp'
import t13 from '../assets/images/graphicTestimonials/graphic13.webp'
import t14 from '../assets/images/graphicTestimonials/graphic14.webp'
import t15 from '../assets/images/graphicTestimonials/graphic15.webp'
import t16 from '../assets/images/graphicTestimonials/graphic16.webp'
import t17 from '../assets/images/graphicTestimonials/graphic17.webp'
import t18 from '../assets/images/graphicTestimonials/graphic18.webp'
import t19 from '../assets/images/graphicTestimonials/graphic19.webp'
import PlayButton from './ui/PlayButton'
import Loader from './ui/Loader'
// import t20 from '../assets/images/graphicTestimonials/graphic20.webp'
// import t21 from '../assets/images/graphicTestimonials/graphic21.webp'
// import t22 from '../assets/images/graphicTestimonials/graphic22.webp'
// import t23 from '../assets/images/graphicTestimonials/graphic23.webp'
// import t24 from '../assets/images/graphicTestimonials/graphic24.webp'
// import t25 from '../assets/images/graphicTestimonials/graphic25.webp'
// import t26 from '../assets/images/graphicTestimonials/graphic26.webp'
// import t27 from '../assets/images/graphicTestimonials/graphic27.webp'

const testimonialImages = [
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  t9,
  t10,
  t11,
  t12,
  t13,
  t14,
  t15,
  t16,
  t17,
  t18,
  t19,
]

//Function to get YT thumbnail
const getYouTubeThumbnail = (url) => {
  const videoId = url.includes('shorts')
    ? url.split('/shorts/')[1]?.split('?')[0]
    : url.split('v=')[1]?.split('&')[0] || url.split('/').pop()
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

  const handleVideoLoad = () => setIsVideoLoading(false)

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
          variableWidth: true,
        },
      },
      {
        breakpoint: 766,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        },
      },
    ],
  }

  if (!mounted) return null

  return (
    <div className="video-carousel-wrapper">
      {/* Inline styles for custom slick styling */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .video-carousel-wrapper .slick-dots {
              bottom: -30px !important;
              position: static !important;
              margin-top: 3.3rem !important;
            }
            .video-carousel-wrapper .slick-dots li button {
              width: 12px !important;
              height: 12px !important;
              border-radius: 50% !important;
              background-color: #D9D9D9 !important;
              border: none !important;
              transition: all 0.3s ease !important;
            } 
            .video-carousel-wrapper .slick-dots li  {
              margin: 0px 2px;
            }
            .video-carousel-wrapper .slick-dots li button:hover {
              background-color: #444444 !important;
              transform: scale(1.1) !important;
            }   
            .video-carousel-wrapper .slick-dots li button::before {
              opacity: 0;
            }
            .video-carousel-wrapper .slick-dots li.slick-active button {
              background-color: #444444 !important;
            }
            .video-carousel-wrapper .slick-slide {
              padding: 0 11px !important;
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
                     .video-carousel-wrapper .slick-dots li  {
              display:none;
            }
            }
          `,
        }}
      />

      <div className="mx-auto w-full max-w-7xl overflow-hidden px-2 sm:px-4 sm:py-4 md:px-12">
        <Slider {...settings}>
          {/* ✅ Videos First */}
          {[
            {
              id: 2,
              url: 'https://youtube.com/shorts/TQqpTs8ntHk',
              embed:
                'https://www.youtube.com/embed/TQqpTs8ntHk?controls=1&rel=0&modestbranding=1',
              aspect: '9/16',
              width: 'md:!w-[224px]',
            },
            {
              id: 1,
              url: 'https://youtu.be/JvPEDv5MiFg',
              embed:
                'https://www.youtube.com/embed/JvPEDv5MiFg?controls=1&rel=0&modestbranding=1',
              aspect: '16/9',
              width: 'md:!w-[698px]',
            },
            {
              id: 3,
              url: 'https://youtu.be/8oc1XzrVKdU',
              embed:
                'https://www.youtube.com/embed/8oc1XzrVKdU?controls=1&rel=0&modestbranding=1',
              aspect: '16/9',
              width: 'md:!w-[698px]',
            },
          ].map(({ id, url, embed, aspect, width }) => (
            <div key={id} className={`relative w-full ${width}`}>
              <div
                className={`h-[260px] w-full overflow-hidden rounded-xl bg-black sm:h-[300px] md:h-[350px] lg:h-[395px]`}
                style={{ aspectRatio: aspect }}
              >
                {activeVideo === id ? (
                  <div className="relative h-full w-full">
                    {isVideoLoading && <Loader />}

                    <iframe
                      className="h-full w-full"
                      src={embed}
                      title={`Video ${id}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      onLoad={handleVideoLoad}
                    />
                  </div>
                ) : (
                  <div
                    className="relative h-full w-full cursor-pointer"
                    onClick={() => handleVideoClick(id)}
                  >
                    <img
                      src={getYouTubeThumbnail(url)}
                      alt={`Video ${id}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <PlayButton />
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* ✅ Congratulation Images After (mapped) */}
          {testimonialImages.map((img, idx) => (
            <div
              key={`testimonial-${idx}`}
              className="relative w-full md:!w-[280px] lg:!w-[316px]"
            >
              <div
                className="flex h-[260px] w-full items-center justify-center overflow-hidden rounded-xl bg-black sm:h-[300px] md:h-[350px] lg:h-[395px]"
                style={{ aspectRatio: '16/9' }}
              >
                <img
                  src={img}
                  alt={`Congratulations ${idx + 1}`}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default VideoCarousel
