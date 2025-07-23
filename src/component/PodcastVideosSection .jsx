// components/PodcastVideosSection.jsx
import React from 'react'
import { motion } from 'framer-motion'
import useYouTubeVideos from '../hooks/useYouTubeVideos'

const PodcastVideosSection = ({ apiKey, channelId }) => {
  const { videos, loading, error } = useYouTubeVideos(apiKey, channelId, 4)

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const imageHover = {
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeInOut' },
  }

  const handleVideoClick = (videoUrl) => {
    window.open(videoUrl, '_blank')
  }

  if (loading) {
    return (
      <section className="podcast-sec px-5 lg:px-40">
        <div className="flex w-full flex-col items-center justify-center pt-20">
          <motion.h1
            className="bg-gradient-to-r from-[#DBBD5D] via-[#CFA647] to-[#A78430] bg-clip-text text-center text-4xl font-bold text-transparent lg:text-start lg:text-6xl"
            style={{ fontFamily: 'Minion Pro, serif' }}
            variants={fadeInUp}
          >
            NOW OUT!!!
          </motion.h1>
          <div className="flex items-center justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-[#D09A25]"></div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="podcast-sec px-5 lg:px-40">
        <div className="flex w-full flex-col items-center justify-center pt-20">
          <motion.h1
            className="text-center text-4xl font-bold text-[#D09A25] lg:text-start lg:text-6xl"
            style={{ fontFamily: 'Minion Pro, serif' }}
            variants={fadeInUp}
          >
            NOW OUT!!!
          </motion.h1>
          <div className="py-10 text-center text-red-500">
            <p>Unable to load latest videos. Please try again later.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="podcast-sec px-5 lg:px-40">
      <div className="flex w-full flex-col items-center justify-center pt-20">
        <motion.h1
          className="text-center text-4xl font-bold text-[#D09A25] lg:text-start lg:text-6xl"
          style={{ fontFamily: 'Minion Pro, serif' }}
          variants={fadeInUp}
        >
          NOW OUT!!!
        </motion.h1>
        <motion.p
          className="text-center text-white"
          variants={fadeInUp}
          style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
        >
          Learn how to earn more, protect your income, and grow your wealth with
          this practical, no-fluff guide. Perfect for entrepreneurs who want to
          make their money work smarter.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <h1
            className="pb-7 pt-10 text-center text-3xl font-bold text-[#D09A25] lg:text-start"
            style={{ fontFamily: 'Minion Pro, serif' }}
          >
            Watch Latest Podcasts
          </h1>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center gap-7 pb-10"
          variants={staggerContainer}
        >
          <motion.div
            className="flex flex-col items-center justify-center gap-7 lg:flex-row"
            variants={staggerContainer}
          >
            {videos.slice(0, 2).map((video) => (
              <motion.div key={video.id} variants={scaleIn}>
                <motion.div
                  className="group relative cursor-pointer"
                  whileHover={imageHover}
                  onClick={() => handleVideoClick(video.videoUrl)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-auto w-full rounded-lg"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-red-600 p-4">
                      <svg
                        className="ml-1 h-8 w-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Video title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="line-clamp-2 text-sm font-medium text-white">
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center gap-7 lg:flex-row"
            variants={staggerContainer}
          >
            {videos.slice(2, 4).map((video) => (
              <motion.div key={video.id} variants={scaleIn}>
                <motion.div
                  className="group relative cursor-pointer"
                  whileHover={imageHover}
                  onClick={() => handleVideoClick(video.videoUrl)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-auto w-full rounded-lg"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-red-600 p-4">
                      <svg
                        className="ml-1 h-8 w-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Video title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="line-clamp-2 text-sm font-medium text-white">
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PodcastVideosSection
