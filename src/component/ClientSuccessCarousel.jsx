import React, { useEffect, useMemo, useRef, useState } from 'react'

const YOUTUBE_URLS = [
  'https://www.youtube.com/watch?v=a9M6uPzQLFs',
  'https://www.youtube.com/shorts/w_LC8Ov5_sw',
  'https://www.youtube.com/watch?v=44k0pYbfwm4',
  'https://www.youtube.com/shorts/5iAzDrXZ2qY',
  'https://www.youtube.com/watch?v=8oc1XzrVKdU',
]

const extractVideoId = (url) => {
  try {
    const parsed = new URL(url)
    return parsed.searchParams.get('v') || parsed.pathname.split('/').pop()
  } catch {
    return null
  }
}

const getVideoDimensions = (isMobile, orientation) => {
  const baseHeight = 280
  if (orientation === 'portrait')
    return { width: '158px', maxWidth: '158px', height: `${baseHeight}px` }
  if (isMobile)
    return { width: '100%', maxWidth: '100%', height: `${baseHeight}px` }
  return { width: '498px', maxWidth: '420px', height: `${baseHeight}px` }
}

const ClientSuccessCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [playing, setPlaying] = useState([])
  const containerRef = useRef(null)

  const slides = useMemo(
    () =>
      YOUTUBE_URLS.map((url, index) => {
        const videoId = extractVideoId(url)
        if (!videoId) return null
        return {
          id: index,
          embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
          orientation: index % 2 === 0 ? 'landscape' : 'portrait',
          title: `Client Success Story ${index + 1}`,
          videoId,
        }
      }).filter(Boolean),
    [],
  )

  useEffect(() => {
    setIsMobile(window.innerWidth < 834)
    const resizeListener = () => setIsMobile(window.innerWidth < 834)
    window.addEventListener('resize', resizeListener)
    return () => window.removeEventListener('resize', resizeListener)
  }, [])

  useEffect(() => {
    const scrollToSlide = (index) => {
      const container = containerRef.current
      const child = container?.children[index]
      if (child) {
        const { offsetLeft, offsetWidth } = child
        const scrollLeft =
          offsetLeft - (container.offsetWidth - offsetWidth) / 2
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
      }
    }
    scrollToSlide(currentSlide)
  }, [currentSlide, slides.length, isMobile])

  useEffect(() => {
    const container = containerRef.current
    const firstChild = container?.children[0]
    if (firstChild) {
      const { offsetLeft, offsetWidth } = firstChild
      const scrollLeft = offsetLeft - (container.offsetWidth - offsetWidth) / 2
      container.scrollTo({ left: scrollLeft })
    }
    setPlaying(Array(slides.length).fill(false))
  }, [slides.length, isMobile])

  const handlePlay = (idx) =>
    setPlaying((prev) => prev.map((p, i) => i === idx || p))

  return (
    <div className="w-full overflow-hidden px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <h2
          className="mb-12 text-center text-3xl font-bold text-[#E7A647] md:text-4xl lg:text-5xl"
          style={{ fontFamily: '"Minion Pro", serif' }}
        >
          CLIENT SUCCESS HIGHLIGHTS
        </h2>

        <div className="relative mx-auto flex max-w-6xl justify-center overflow-hidden">
          {['left', 'right'].map((dir) => (
            <button
              key={dir}
              onClick={() =>
                setCurrentSlide((prev) =>
                  dir === 'left'
                    ? Math.max(0, prev - 1)
                    : Math.min(slides.length - 1, prev + 1),
                )
              }
              disabled={
                dir === 'left'
                  ? currentSlide === 0
                  : currentSlide === slides.length - 1
              }
              className={`absolute ${dir}-0 top-1/2 z-50 flex -translate-y-1/2 items-center justify-center rounded-full bg-white pb-[6px] text-black shadow-md ring-1 ring-black/10 transition hover:brightness-105`}
              style={{ width: '20px', height: '20px' }}
            >
              <span className="text-2xl font-bold">
                {dir === 'left' ? '‹' : '›'}
              </span>
            </button>
          ))}

          <div
            ref={containerRef}
            className="pointer-events-none flex min-w-0 snap-x snap-mandatory gap-4 overflow-hidden"
          >
            {slides.map(({ id, embedUrl, orientation, title, videoId }) => {
              const { width, height, maxWidth } = getVideoDimensions(
                isMobile,
                orientation,
              )
              const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              return (
                <div
                  key={id}
                  className="pointer-events-auto flex-shrink-0 snap-center"
                  style={{ width, maxWidth }}
                >
                  <div
                    className="relative box-border overflow-hidden rounded-xl bg-black shadow-xl"
                    style={{ width: '100%', maxWidth, height }}
                  >
                    {!playing[id] ? (
                      <>
                        <img
                          src={thumbnailUrl}
                          alt={title}
                          className="h-full w-full select-none object-cover"
                          draggable={false}
                          style={{ userSelect: 'none' }}
                        />
                        <button
                          className="absolute left-1/2 top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[4px] bg-black shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#ca8a04]"
                          style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.25)' }}
                          onClick={() => handlePlay(id)}
                          aria-label="Play video"
                        >
                          <svg width="32" height="32" viewBox="0 0 32 32">
                            <polygon points="12,9 25,16 12,23" fill="white" />
                          </svg>
                        </button>
                      </>
                    ) : (
                      <iframe
                        src={`${embedUrl}?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0`}
                        title={title}
                        className="h-full w-full"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        style={{ pointerEvents: 'auto' }}
                      />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-3 w-3 rounded-full transition-all duration-300 focus:outline-none ${
                currentSlide === index
                  ? 'scale-125 bg-yellow-600 shadow-lg'
                  : 'bg-gray-300 hover:scale-110 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientSuccessCarousel
