// components/PodcastVideosSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import useYouTubeVideos from '../hooks/useYouTubeVideos';

const PodcastVideosSection = ({ apiKey, channelId }) => {
  const { videos, loading, error } = useYouTubeVideos(apiKey, channelId, 4);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const imageHover = {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  const handleVideoClick = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  if (loading) {
    return (
      <section className='podcast-sec lg:px-40 px-5'>
        <div className='flex flex-col pt-20 w-full items-center justify-center'>
          <motion.h1
            className='text-4xl lg:text-6xl text-center lg:text-start font-bold text-[#D09A25]'
            style={{ fontFamily: 'Minion Pro, serif' }}
            variants={fadeInUp}
          >
            NOW OUT!!!
          </motion.h1>
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D09A25]"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className='podcast-sec lg:px-40 px-5'>
        <div className='flex flex-col pt-20 w-full items-center justify-center'>
          <motion.h1
            className='text-4xl lg:text-6xl text-center lg:text-start font-bold text-[#D09A25]'
            style={{ fontFamily: 'Minion Pro, serif' }}
            variants={fadeInUp}
          >
            NOW OUT!!!
          </motion.h1>
          <div className="text-red-500 text-center py-10">
            <p>Unable to load latest videos. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='podcast-sec lg:px-40 px-5'>
      <div className='flex flex-col pt-20 w-full items-center justify-center'>
        <motion.h1
          className='text-4xl lg:text-6xl text-center lg:text-start font-bold text-[#D09A25]'
          style={{ fontFamily: 'Minion Pro, serif' }}
          variants={fadeInUp}
        >
          NOW OUT!!!
        </motion.h1>
        <motion.p
          className='text-white text-center'
          variants={fadeInUp}
          style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
        >
          Learn how to earn more, protect your income,
          and grow your wealth with this practical, no-fluff guide.
          Perfect for entrepreneurs who want to make their money work smarter.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <h1 className='text-3xl pt-10 pb-7 text-center lg:text-start font-bold text-[#D09A25]'
            style={{ fontFamily: 'Minion Pro, serif' }}>Watch Latest Podcasts</h1>
        </motion.div>

        <motion.div
          className='flex flex-col pb-10 justify-center items-center gap-7'
          variants={staggerContainer}
        >
          <motion.div
            className='flex flex-col lg:flex-row justify-center items-center gap-7'
            variants={staggerContainer}
          >
            {videos.slice(0, 2).map((video) => (
              <motion.div key={video.id} variants={scaleIn}>
                <motion.div
                  className="relative cursor-pointer group"
                  whileHover={imageHover}
                  onClick={() => handleVideoClick(video.videoUrl)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-auto rounded-lg"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <div className="bg-red-600 rounded-full p-4">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Video title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                    <h3 className="text-white text-sm font-medium line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className='flex flex-col lg:flex-row justify-center items-center gap-7'
            variants={staggerContainer}
          >
            {videos.slice(2, 4).map((video) => (
              <motion.div key={video.id} variants={scaleIn}>
                <motion.div
                  className="relative cursor-pointer group"
                  whileHover={imageHover}
                  onClick={() => handleVideoClick(video.videoUrl)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-auto rounded-lg"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <div className="bg-red-600 rounded-full p-4">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Video title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                    <h3 className="text-white text-sm font-medium line-clamp-2">
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
  );
};

export default PodcastVideosSection;