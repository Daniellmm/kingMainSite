import { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function InsuranceVideoSlider({ videos = [] }) {
  const sliderRef = useRef(null)
  const [loadedVideos, setLoadedVideos] = useState({})

  const getYouTubeId = (url) => {
    const match = url.match(/\/embed\/([^?]+)/)
    return match ? match[1] : ''
  }

  const handleLoadVideo = (index) => {
    setLoadedVideos((prev) => ({ ...prev, [index]: true }))
  }

  const videoSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }

  return (
    <div className="relative w-full max-w-[350px] px-4 lg:max-w-2xl">
      <Slider ref={sliderRef} {...videoSettings} className="video-slider">
        {videos.map((video, index) => {
          const videoId = getYouTubeId(video)
          const isLoaded = loadedVideos[index]

          return (
            <div key={index} className="px-2">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                {isLoaded ? (
                  <iframe
                    className="h-full w-full"
                    src={video}
                    title={`YouTube video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="relative h-full w-full cursor-pointer"
                    onClick={() => handleLoadVideo(index)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      alt="video thumbnail"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-2xl text-black">
                        ▶
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </Slider>

      {/* Small arrow buttons inside slider */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/90 p-2 shadow hover:bg-white"
      >
        <span className="text-xl font-bold">{'‹'}</span>
      </button>
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/90 p-2 shadow hover:bg-white"
      >
        <span className="text-xl font-bold">{'›'}</span>
      </button>
    </div>
  )
}

export default InsuranceVideoSlider
