import { useState, useRef } from 'react'

import HEADPHONE from '../assets/images/headphone.webp'
import BIGLOGO from '../assets/images/biglogo.webp'
import FALLCOIN from '../assets/images/fallcoin.webp'
import KING from '../assets/images/ak1.webp'
import ALEXIS from '../assets/images/alexis.webp'
import insuranceHeaderImg from '../assets/images/insuranceHeaderImg.webp'
import GENE from '../assets/images/gene.webp'
import ScrollAnimation from '../component/ScrollAnimation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Button from '../component/ui/Button'
import Quote from '../component/ui/Quote'
import PlayButton from '../component/ui/PlayButton'
import Loader from '../component/ui/Loader'

const FORM_URL =
  'https://yellowbrickfinancialagency.com/intake?am_id=kingedwards98 7'

gsap.registerPlugin(ScrollTrigger)

const Insurance = () => {
  // Animation transition duration in milliseconds - centralized for consistency
  const TRANSITION_DURATION = 500 // 0.5 seconds
  const AUTO_SCROLL_INTERVAL = 60000 // 60 seconds (1 minute)

  const [activeVideo, setActiveVideo] = useState(null)
  const [isIframeLoading, setIsIframeLoading] = useState(true)

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLargeScreen, setIsLargeScreen] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const autoScrollTimerRef = useRef(null)
  const [focusedVideo, setFocusedVideo] = useState(1)
  const videoSliderRef = useRef(null)

  const videoSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
  }

  const [videos, setVideos] = useState([
    'Ib9feq1-YVw',
    'rEfuJ32_JeQ',
    'DhdNv7iyTI4',
    '9izvdSfdtyg',
    '72xuX6HNr0Q',
  ])

  //Slider Iframe play click function
  const handleIframeClick = (videoId) => {
    setIsIframeLoading(true)
    setActiveVideo(videoId)
  }

  const handlePrevVideo = () => {
    // Rotate videos left (make the last video the first)
    const newVideos = [...videos]
    const firstVideo = newVideos.shift()
    newVideos.push(firstVideo)
    setVideos(newVideos)
  }

  const handleNextVideo = () => {
    // Rotate videos right (make the last video the first)
    const newVideos = [...videos]
    const lastVideo = newVideos.pop()
    newVideos.unshift(lastVideo)
    setVideos(newVideos)
  }

  // Navigation functions for the mobile slider
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  // Function to handle button clicks
  const handleButtonClick = () => {
    window.open(FORM_URL, '_blank', 'noopener,noreferrer')
  }

  //Scroll to clientSuccessStories section
  const handleScroll = () => {
    document
      .getElementById('clientSuccessStories')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="relative flex h-auto min-h-[660px] items-center justify-center overflow-hidden rounded-bl-[34px] rounded-br-[34px] bg-black px-6 pb-8 pt-16 sm:pb-16 md:min-h-[628px] md:rounded-bl-[70px] md:rounded-br-[70px] md:pb-0 md:pt-8 2xl:min-h-[705px]">
        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-x-8 gap-y-4 pt-2 md:max-w-[800px] md:flex-row-reverse md:pl-4 md:pr-4 md:pt-0 lg:max-w-[1800px]">
          <ScrollAnimation animation="zoomIn" delay={0.3}>
            <img
              src={insuranceHeaderImg}
              alt="header image"
              style={{
                aspectRatio: '3 / 2',
              }}
              className="block w-[100vw] max-w-[383px] object-contain md:mt-[5rem] md:w-[80vw] md:max-w-[372px] lg:w-[510px] lg:max-w-[510px] xl:w-[600px] xl:max-w-[600px] 2xl:w-[750px] 2xl:max-w-[750px]"
            />
          </ScrollAnimation>

          <div className="flex flex-col items-center sm:px-12 md:w-full md:flex-1 md:items-start md:self-start md:px-0 lg:w-1/2 lg:pl-8 xl:flex-none xl:pl-0">
            <ScrollAnimation animation="zoomIn" delay={0.5}>
              <div className="2xl:16 pb-2 lg:mt-12">
                <h1
                  className="py-0 text-center text-xl font-bold leading-tight text-white sm:text-3xl sm:leading-[2rem] md:px-4 md:text-left md:text-2xl lg:text-3xl xl:text-5xl"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <span className="bg-gradient-golden-dark bg-clip-text text-transparent">
                    PROTECT YOUR BUSINESS{' '}
                  </span>
                  REVENUES, LOWER YOUR TAXES, GROW YOUR NETWORTH.
                </h1>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="zoomIn" delay={0.5} className="grow-1">
              <div className="flex justify-center">
                <p
                  className="px-5 text-center text-[13px] uppercase text-white md:pb-4 md:pt-0 md:text-left md:text-[14px] lg:pt-4 xl:text-[16px] 2xl:text-[18px]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Click below for your free wealth review, and see how
                  YellowBrick helps business owners reduce taxes, protect
                  assets, and build a legacy with advanced insurance strategies.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="zoomIn" delay={0.5} className="grow-1">
              <div className="mt-0 flex flex-col gap-x-4 gap-y-0 space-y-4 md:flex-row md:pl-4 lg:mt-0 2xl:mt-5">
                <Button className="mt-4" width="180px" onClick={handleScroll}>
                  See Client Results
                </Button>
                <Button
                  variant="solid"
                  color="#00B67A"
                  width="180px"
                  onClick={handleButtonClick}
                >
                  Free Financial Review
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <Quote author="Gene Santos">
        If you want to ensure you and your company are financially set up for
        success, get a FREE financial review with YellowBrick Financial today.
      </Quote>

      <section className="flex items-center justify-center overflow-hidden bg-black px-5 pb-14">
        <div className="flex items-center justify-center pt-10 lg:px-32">
          <div className="grid gap-x-11 gap-y-10 md:grid-cols-2">
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className="flex justify-center">
                <img src={HEADPHONE} className="md:h-96" alt="" />
              </div>
            </ScrollAnimation>
            <div className="flex w-[100%] flex-col items-start justify-center">
              <ScrollAnimation animation="slideUp" delay={0.3}>
                <h1
                  className="pb-10 text-center text-3xl font-semibold text-[#E7A647] md:text-start lg:text-start lg:text-[45px] lg:leading-[45px]"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                >
                  Book a{' '}
                  <span className="italic text-white">Complimentary </span>
                  Financial Review and Get the "Spender, Saver, Wealth Creator"
                  Audio.
                  <div class="relative inline-block font-bold text-black">
                    <span className="text-red-600 line-through">FREE</span>
                  </div>
                </h1>
              </ScrollAnimation>
              <div className="flex w-full items-center justify-center lg:justify-start">
                <ScrollAnimation animation="slideUp" delay={0.4}>
                  <button
                    onClick={handleButtonClick}
                    className="rounded-[8px] bg-[#E7A647] px-5 py-3"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    Free Financial Review
                  </button>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-5 pb-14">
        <div className="flex flex-col items-center justify-center pt-10">
          <ScrollAnimation animation="zoomIn">
            <div>
              <h1
                className="pb-10 text-center text-3xl font-semibold text-[#E7A647] md:text-start lg:text-[45px]"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                {' '}
                About YellowBrick Financial — A Company That Cares{' '}
              </h1>
            </div>
          </ScrollAnimation>
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-2 lg:px-10">
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className="flex justify-center lg:justify-start">
                <img src={BIGLOGO} className="lg:h-96" alt="" />
              </div>
            </ScrollAnimation>
            <div>
              <ScrollAnimation animation="slideLeft" delay={0.4}>
                <p
                  className="text-center leading-[25px] text-black md:text-[18px] lg:text-start"
                  style={{
                    fontFamily: 'Montserrat, serif',
                    fontWeight: 'medium',
                  }}
                >
                  78% of Americans live paycheck to paycheck, and nearly half
                  (49%) have less than $500 in savings. The truth is, the
                  wealthy don't just invest wisely—they structure and protect
                  their money differently. Billionaires like Warren Buffett
                  aren't just investors; they leverage life insurance,
                  tax-efficient financial strategies, and asset protection to
                  ensure their wealth continues to grow—regardless of economic
                  conditions.
                  <br />
                  <br />
                  At YellowBrick Financial, we believe financial security isn't
                  a luxury—it's a necessity. We are committed to helping
                  entrepreneurs correct critical financial mistakes by
                  structuring financial plans the right way—designed to grow,
                  protect, and pass down wealth for generations. We teach our
                  clients what the wealthy already know: how to build financial
                  independence with strategies that work in both good times and
                  bad.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center overflow-hidden bg-black px-5 py-24">
        <div className="flex flex-col items-center justify-center lg:px-24">
          <ScrollAnimation animation="zoomIn">
            <div>
              <h1
                className="pb-10 text-center text-3xl font-semibold text-[#E7A647] lg:text-[45px] lg:leading-[45px]"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Even if you believe your financials are on track, you should
                still get a FREE financial review.
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div>
              <p
                className="text-center font-extralight leading-6 text-white md:text-[20px] lg:px-20"
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
              >
                88% of financial plans and life insurance policies are
                improperly structured, leaving families exposed to unnecessary
                taxes, lost wealth, and financial instability when they need
                protection the most.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="flex items-center justify-center overflow-hidden bg-white px-10 pb-14">
        <div className="flex items-center justify-center pt-10 lg:px-20">
          <div className="grid gap-x-10 gap-y-10 lg:grid-cols-2">
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <img src={FALLCOIN} className="md:h-[500px]" alt="" />
              </div>
            </ScrollAnimation>

            <div className="flex flex-col justify-center gap-y-5">
              <ScrollAnimation animation="zoomIn">
                <h1
                  className="text-center text-4xl font-semibold text-[#E7A647] lg:text-start lg:text-[45px] lg:leading-[45px]"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                >
                  Even if you believe your financials are on track, you should
                  still get a FREE financial review.
                </h1>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.3}>
                <p
                  className="text-center font-extralight leading-6 text-gray-900 md:text-[18px] lg:text-start"
                  style={{ fontFamily: 'Montserrat, serif' }}
                >
                  88% of financial plans and life insurance policies are
                  improperly structured, leaving families exposed to unnecessary
                  taxes, lost wealth, and financial instability when they need
                  protection the most.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.5}>
                <p
                  className="text-center font-semibold text-black md:text-[18px] lg:text-start"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                >
                  Are You Ready to Know Exactly What You Need to Do to Get Your
                  Company Financials on Track?
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.7}>
                <div className="flex w-full justify-center lg:justify-start">
                  <button
                    onClick={handleButtonClick}
                    className="rounded-[8px] bg-[#E7A647] px-5 py-3"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    FREE Financial Review
                  </button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <section
        id="clientSuccessStories"
        className="flex flex-col items-center justify-center overflow-hidden bg-black pb-10"
      >
        <div className="flex flex-col items-center justify-center gap-y-3 pt-10 lg:pt-16">
          <ScrollAnimation animation="slideDown" delay={0.1}>
            <h1
              className="px-10 text-center text-lg font-extralight uppercase tracking-[4px] text-gray-500"
              style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
            >
              Trusted by Professionals Like You
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={0.2}>
            <h1
              className="px-10 pb-10 text-center text-4xl text-[#E7A647] lg:text-[45px]"
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              Client Success Stories
            </h1>
          </ScrollAnimation>
          <div className="w-full max-w-[350px] px-4 lg:max-w-2xl">
            <Slider
              ref={videoSliderRef}
              {...videoSettings}
              className="video-slider"
            >
              {videos.map((videoId, index) => {
                const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

                return (
                  <div key={`${videoId}-${index}`} className="px-2">
                    {activeVideo === videoId ? (
                      <div className="relative aspect-video overflow-hidden rounded-xl">
                        {isIframeLoading && <Loader />}

                        <iframe
                          className="h-full w-full"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={`YouTube video ${index + 1}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          onLoad={() => setIsIframeLoading(false)}
                        ></iframe>
                      </div>
                    ) : (
                      <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-black">
                        <div
                          className="group relative h-full w-full cursor-pointer overflow-hidden rounded-md"
                          onClick={() => handleIframeClick(videoId)}
                        >
                          <img
                            src={thumbnailUrl}
                            alt={`Thumbnail for video ${index + 1}`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                          <PlayButton />
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </section>

      <section className="team-section flex items-center justify-center overflow-hidden bg-white px-5 pb-14">
        <div className="flex flex-col items-center justify-center pt-10">
          <div>
            <ScrollAnimation animation="zoomIn" delay={0.2}>
              <h1
                className="pb-10 text-center text-3xl font-semibold text-[#E7A647] lg:text-[45px]"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Meet the Team
              </h1>
            </ScrollAnimation>
          </div>

          <div className="space-y-10 lg:px-10">
            <div className="flex items-center justify-center">
              <div className="grid gap-x-14 space-y-10 md:grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center">
                  <img src={GENE} className="w-[510px]" alt="" />
                </div>

                <div className="flex flex-col justify-center lg:items-start">
                  <div>
                    <h1
                      className="text-center text-3xl text-[#E7A647] lg:text-start"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontWeight: 'medium',
                      }}
                    >
                      Gene Santos
                    </h1>
                  </div>
                  <p
                    className="text-center text-lg font-semibold italic lg:text-start"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    Financial Advisor
                  </p>

                  <p className="pt-5 text-center lg:text-start">
                    Gene Santos is a distinguished financial advisor
                    specializing in comprehensive wealth management for high net
                    worth individuals and families. With over a decade of
                    strategic experience in the finance and insurance industry,
                    Gene has established himself as a trusted advisor to
                    discerning clients seeking sophisticated financial
                    solutions.
                    <br /> <br />
                    Demonstrating exceptional performance, Gene has successfully
                    written over $25 million in life insurance coverage,
                    strategically managed in excess of $2.4 million in client
                    assets, and facilitated more than $15 million in annuity
                    premiums. His practice is precisely calibrated to serve high
                    net worth clients, delivering nuanced financial strategies
                    that address the complex wealth management needs of
                    successful professionals and entrepreneurs.
                    <br /> <br />
                    Specializing in advanced retirement planning, comprehensive
                    estate strategies, and tailored investment optimization,
                    Gene provides a strategic approach that goes beyond standard
                    financial advising. His expertise lies in crafting
                    customized financial solutions that protect and grow wealth,
                    with a keen understanding of the unique financial challenges
                    facing high-net-worth individuals.
                    <br /> <br />
                    Gene's client-focused methodology combines rigorous
                    financial acumen with a commitment to building long-term,
                    trust-based relationships. By offering personalized guidance
                    and strategic insights, he empowers clients to make informed
                    decisions that align with their most significant financial
                    objectives and legacy planning goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-x-14 space-y-10 md:grid-cols-1 lg:grid-cols-2">
              <div className="flex items-center justify-center">
                <img src={ALEXIS} className="w-[510px]" alt="" />
              </div>

              <div className="flex flex-col justify-center lg:items-start">
                <div>
                  <h1
                    className="text-center text-3xl text-[#E7A647] lg:text-start"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    Alexis Holifield
                  </h1>
                </div>
                <p
                  className="text-center text-lg font-semibold italic lg:text-start"
                  style={{
                    fontFamily: 'Montserrat, serif',
                    fontWeight: 'medium',
                  }}
                >
                  Co-Founder of The Millennial Millionaire
                </p>

                <p className="pt-5 text-center lg:text-start">
                  Alexis Holifield, began her journey to learning the laws of
                  building generational wealth at the early age of 17 years old.
                  She began her journey by attending a seminar put on by T. Harv
                  Eker "Secrets Of The Millionaire Mind". Immediately, she began
                  creating an archive of these "well-kept secrets of the
                  wealthy" for the world to know. She went on to graduate with
                  honors and complete a masters degree in life through first
                  hand experience of wealth building, in addition the
                  Multi-Millionaires she continues to be mentored by.
                  <br /> <br />
                  As a Licensed Insurance Broker, Financial Strategist, & Wealth
                  Planner, Alexis dedicates her time as a coach and a mentor
                  sharing Financial Intelligence and Investment Education to
                  cultivate the minds of Millennials all over the nation. Her
                  mission to advise families, individuals, and business owners
                  to begin or enhance their journey to financial freedom to
                  increase and preserve wealth is expressed in her ability to
                  transform the paradigm, and financial states of her client.
                  Specializing in Estate Planning, Cash Value Life Insurance,
                  Retirement, and Executive Business Planning.
                </p>
              </div>
            </div>

            <div className="grid gap-x-14 space-y-10 md:grid-cols-1 lg:grid-cols-2">
              <div className="flex justify-center lg:items-center">
                <img src={KING} className="w-auto rounded-3xl" alt="" />
              </div>

              <div className="flex flex-col justify-center lg:items-start">
                <div>
                  <h1
                    className="text-center text-3xl text-[#E7A647] lg:text-start"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    King Edwards
                  </h1>
                </div>
                <p
                  className="text-center text-lg font-semibold italic lg:text-start"
                  style={{
                    fontFamily: 'Montserrat, serif',
                    fontWeight: 'medium',
                  }}
                >
                  King, a visionary, funding expert, and author
                </p>

                <p className="pt-5 text-center lg:text-start">
                  was born in Los Angeles and raised in New York. He draws
                  inspiration from the diverse influences of each city. LA
                  exposed him to the glamorous Hollywood lifestyle, while New
                  York instilled a sense of grit and determination.
                  <br /> <br />
                  In his first professional project, King embarked on the
                  creation of HighTicketOfferFinancing.com. This innovative
                  venture aimed to provide alternative funding solutions for
                  entrepreneurs operating in industries traditionally overlooked
                  by banks. Through this endeavor, he sought to help consultants
                  and entrepreneurs earn significant profits, develop and sell
                  high-value products and services, and safeguard themselves
                  from legal implications using HTOF’s comprehensive workflows,
                  standard operating procedures, and contract templates.
                  <br /> <br />
                  With a focus on helping entrepreneurs thrive and achieve
                  remarkable financial milestones, King has received accolades
                  such as the Man of the Moment and Made Man Award for his
                  achievements. Through unwavering determination and an
                  unwavering focus on the next best move, King aims to rewrite
                  the rules of the game and help his clients leave an indelible
                  mark on their respective industries and their family’s lives.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 h-[1px] w-full bg-black lg:mt-16"></div>
        </div>
      </section>
    </>
  )
}

export default Insurance
