import React from 'react'
import { motion } from 'framer-motion'
import KING1 from '../assets/images/page-two/hero.png'
import KING2 from '../assets/images/page-two/aboutImg.png'
import HeroModel from '../component/HeroModel'
import PodcastVideosSection from '../component/PodcastVideosSection '



const PodcastPage = () => {
  // Your YouTube API credentials
  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const YOUTUBE_CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;


  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeInOut" }
  }

  const imageHover = {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" }
  }

  const socialHover = {
    scale: 1.2,
    rotate: 10,
    transition: { duration: 0.2, ease: "easeInOut" }
  }

  return (
    <>
      <main className='overflow-hidden'>
        {/* Hero Section */}
        <section className='phero-sec lg:px-40 px-5 items-center justify-center'>
          <motion.div
            className='flex pt-28 lg:pt-16 flex-col lg:flex-row w-full gap-10 items-center justify-center'
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* First part */}
            <div
              className='flex flex-col justify-center items-center gap-9'
              variants={fadeInLeft}
            >
              <motion.h1
                className='lg:text-8xl hidden lg:block font-bold text-4xl text-center lg:text-start text-[#D09A25]'
                style={{ fontFamily: 'Minion Pro, serif' }}
                variants={fadeInUp}
              >
                EARN
                PROTECT
                GROW
              </motion.h1>

              <motion.div
                className='flex justify-center lg:justify-start gap-4 w-full items-start'
                variants={staggerContainer}
              >
                <motion.div
                  className='flex'
                  variants={fadeInUp}
                >
                  <motion.button
                    className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-[#a47e3b] via-[#c1a875] to-[#e1c78a] text-black font-semibold shadow-inner hover:shadow-lg transition duration-300"
                    whileHover={buttonHover}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      document.getElementById('podcast-section').scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                    style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                  >
                    Watch Podcast
                  </motion.button>
                </motion.div>
                <motion.div
                  className='flex'
                  variants={fadeInUp}
                >
                  <a href="https://whop.com/earn-protect-grow/?a=funding3f" target='_blank'>
                    <motion.button
                      className="px-3 py-2 rounded-full text-sm bg-gradient-to-r from-[#a47e3b] via-[#c1a875] to-[#e1c78a] text-black font-semibold shadow-inner hover:shadow-lg transition duration-300"
                      whileHover={buttonHover}
                      whileTap={{ scale: 0.95 }}
                      style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                    >
                      Join Our Community
                    </motion.button>
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Second part */}
            <motion.div
              className='flex lg:justify-start lg:items-start justify-center items-center w-full'
              variants={fadeInRight}
            >
              <img
                src={KING1}
                alt=""
              />
            </motion.div>
          </motion.div>
        </section>



        {/* Book Section */}
        <section className='psec-two relative lg:px-40 px-5 min-h-[100vh] lg:min-h-[80vh] lg:pb-10'>
          <div className='flex flex-col lg:flex-row w-full items-center justify-between h-full'>
            <motion.div
              className='lg:w-1/2 pt-10 space-y-5 z-10'
              variants={fadeInLeft}
            >
              <motion.h1
                className='text-4xl lg:text-6xl text-center lg:text-start font-bold text-[#D09A25]'
                style={{ fontFamily: 'Minion Pro, serif' }}
                variants={fadeInUp}
              >
                EARN, PROTECT, GROW
              </motion.h1>
              <motion.p
                className='text-white capitalize text-center lg:text-start'
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                variants={fadeInUp}
              >
                An Entrepreneur's Guide to Earning More Money,
                Protecting the Money You Have Earned,
                & Growing the Money You Have Protected.
              </motion.p>
              <motion.div
                className='flex justify-center lg:justify-start'
                variants={fadeInUp}
              >
                <a href="https://whop.com/checkout/plan_NodSn8DMwG69g" target='_blank'>
                  <motion.button
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-[#a47e3b] via-[#c1a875] to-[#e1c78a] text-black font-semibold shadow-inner hover:shadow-lg transition duration-300"
                    whileHover={buttonHover}
                    whileTap={{ scale: 0.95 }}
                    style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                  >
                    Purchase Now
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>

            {/* 3D model of the book */}
            <motion.div
              className='lg:w-1/2 w-full h-[50vh] lg:h-[70vh] relative'
              variants={fadeInRight}
            >
              <div className='w-full h-full'>
                <HeroModel />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Podcast Videos Section - Now Dynamic */}
        <section id='podcast-section'>
          <PodcastVideosSection
            apiKey={YOUTUBE_API_KEY}
            channelId={YOUTUBE_CHANNEL_ID}
          />
        </section>

        {/* About Section */}
        <section className='about-sec lg:px-40 px-5'>
          <div className='flex flex-col justify-center items-center'>
            <motion.div variants={fadeInUp}>
              <h1 className='text-4xl pt-20 lg:text-6xl pb-10 text-center lg:text-start font-bold text-[#D09A25]'
                style={{ fontFamily: 'Minion Pro, serif' }}>ABOUT YOUR HOST
              </h1>
            </motion.div>

            <div className='pb-10 flex flex-col justify-center items-center'>
              <motion.div variants={scaleIn}>
                <motion.img
                  src={KING2}
                  className='lg:h-[600px]'
                  alt="king's-images"
                  whileHover={imageHover}
                />
              </motion.div>

              <motion.div
                className='text-[#D09A25] text-4xl pt-8 lg:text-6xl text-center'
                variants={fadeInUp}
                style={{ fontFamily: 'Beauty Wind, serif' }}
              >
                <h1>King Edwards,</h1>
                <h1>A Visionary Led by Faith</h1>
              </motion.div>

              <motion.p
                className='text-[#999999] pt-10 text-center lg:text-start'
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
              >
                King Edwards, a visionary, funding expert, and author, was born in Los Angeles and raised in New York.
                He draws inspiration from the diverse influences of each city—Los Angeles exposed him to the glamorous
                Hollywood lifestyle, while New York instilled in him a sense of grit and determination. Yet above all,
                King's true source of strength and guidance has always been his faith in God.
                <br /><br />

                King's journey began with the creation of High Ticket Offer Financing (HTOF)—a platform designed not just
                to provide alternative funding solutions for entrepreneurs, but to empower them to operate with integrity,
                excellence, and wisdom. Recognizing that many industries are overlooked by traditional banks, King sought
                to help consultants and entrepreneurs generate significant profits, develop and sell high-value products and
                services, and safeguard themselves from legal pitfalls by providing comprehensive workflows, standard operating
                procedures, and contract templates. His mission reflects a deeper calling to equip others with the financial
                knowledge and spiritual foundation needed to thrive.
                <br /><br />

                King's life is a testament to the scripture, "To whom much is given, much is required" (Luke 12:48).
                Beyond finance, he has a wide array of passions, including basketball, traveling, spirituality, business,
                and fitness. He finds joy in connecting with influential individuals, exploring different cultures during his
                global travels, and maintaining an open heart toward learning and growth. However, his work is ultimately driven
                by a higher purpose—glorifying God through his success and using his platform to serve others.
                <br /><br />

                With over a decade of experience, King's companies have collaborated with high-profile clients, including Zeus Network,
                Tubi, Floyd Mayweather, Cardi B, and more. Yet King remains grounded, knowing that his success is not his own—it
                is a gift from God, entrusted to him to steward wisely. His ambition extends beyond personal achievement;
                he is launching a D4U Consumer Financing Product for entrepreneurs and High Ticket Offer Consultants while
                scaling his existing ventures globally, particularly with a focus on Africa—a continent he feels called to impact
                deeply.
                <br /><br />

                King's journey is marked by resilience and divine intervention. In his twenties, he faced homelessness while raising
                twins, even resorting to digging through trash cans to survive. Yet in the midst of that darkness, King surrendered
                his ego and turned to God. That pivotal decision transformed his life. God reminded him of his identity—not as a
                struggling man, but as a king. Through faith, wisdom, and strategic application of banking principles, King rebuilt
                his life from the ground up. His story echoes Jeremiah 29:11—"For I know the plans I have for you," declares the Lord,
                "plans to prosper you and not to harm you, plans to give you hope and a future."
                <br /><br />

                King's success is not just about building wealth—it's about creating legacy. His goal is to revolutionize the business
                landscape by showing entrepreneurs how to leverage bank funding rather than relying solely on savings or personal
                income. He encourages individuals to tap into their divine power—represented by the hashtag #IAM—which signifies
                the limitless potential God has placed within each of us.
                <br /><br />

                King has received accolades such as the Man of the Moment and Made Man Award for his achievements.
                These honors underscore his significant contributions to the financial industry and reflect his unwavering
                commitment to excellence and service. Through High Ticket Offer Financing, King equips entrepreneurs with the
                tools to thrive—offering not just funding solutions, but the financial and spiritual wisdom needed to sustain
                long-term success.
                <br /><br />

                King's guiding philosophy reflects the wisdom of Proverbs 16:9: "In their hearts humans plan their course,
                but the Lord establishes their steps." In his own words, "Amid chaos, while everyone else panics,
                the grand chess master focuses on the next best move." His ability to remain calm and composed in the face
                of challenges stems from his faith and trust in God's perfect plan.
                King Edwards stands as a living example of God's promise to restore and elevate those who seek Him.
                His life, business, and mission are rooted in the belief that success is not merely about financial gain—it's
                about fulfilling God's purpose and helping others rise to their highest potential. When you see a king,
                you see the work of a sovereign God.
              </motion.p>

              {/* <motion.div
                className='pt-16 flex justify-center items-center gap-6'
                variants={staggerContainer}
              >
                <motion.img
                  src={FACEBOOK}
                  className='size-10 cursor-pointer'
                  alt="facebook-logo"
                  variants={scaleIn}
                  whileHover={socialHover}
                />
                <motion.img
                  src={X}
                  className='size-10 cursor-pointer'
                  alt="X-logo"
                  variants={scaleIn}
                  whileHover={socialHover}
                />
                <motion.img
                  src={INSTAGRAM}
                  className='size-10 cursor-pointer'
                  alt="instagram-logo"
                  variants={scaleIn}
                  whileHover={socialHover}
                />
                <motion.img
                  src={YOUTUBE}
                  className='size-10 cursor-pointer'
                  alt="youtube-logo"
                  variants={scaleIn}
                  whileHover={socialHover}
                />
              </motion.div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default PodcastPage