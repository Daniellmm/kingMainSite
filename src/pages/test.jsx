import React, { useState, useEffect, useRef } from 'react'
import MText from '../assets/images/png3.png'

import HEADPHONE from '../assets/images/headphone.png'
import BIGLOGO from '../assets/images/biglogo.png'
import FALLCOIN from '../assets/images/fallcoin.png'
import LONG from '../assets/images/long.png'
import KING from '../assets/images/king.png'
import ALEXIS from '../assets/images/alexis.png'
import GENE from '../assets/images/gene.png'
import ScrollAnimation from '../component/ScrollAnimation'

const Insurance = () => {
  const TRANSITION_DURATION = 500 // 0.5 seconds
  const AUTO_SCROLL_INTERVAL = 60000 // 60 seconds (1 minute)

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLargeScreen, setIsLargeScreen] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const autoScrollTimerRef = useRef(null)

  const teamMembers = [
    {
      image: KING, // Direct reference to the imported image
      name: 'King Edwards',
      title: 'King, a visionary, funding expert, and author',
      bio: `was born in Los Angeles and raised in New York. He draws inspiration from the diverse influences of each city. 
      LA exposed him to the glamorous Hollywood lifestyle, while New York instilled a sense of grit and determination.
      
      In his first professional project, King embarked on the creation of HighTicketOfferFinancing.com. 
      This innovative venture aimed to provide alternative funding solutions for entrepreneurs operating in industries traditionally overlooked by banks. 
      Through this endeavor, he sought to help consultants and entrepreneurs earn significant profits, develop and sell high-value products and services, 
      and safeguard themselves from legal implications using HTOF's comprehensive workflows, standard operating procedures, and contract templates.
      
      With a focus on helping entrepreneurs thrive and achieve remarkable financial milestones, 
      King has received accolades such as the Man of the Moment and Made Man Award for his achievements. 
      Through unwavering determination and an unwavering focus on the next best move, 
      King aims to rewrite the rules of the game and help his clients leave an indelible mark on their respective industries and their family's lives.`,
    },
    {
      image: ALEXIS, // Direct reference to the imported image
      name: 'Alexis Holifield',
      title: 'Co-Founder of The Millennial Millionaire',
      bio: `Alexis Holifield, began her journey to learning the laws of building generational wealth at the early age of 17 years old. 
      She began her journey by attending a seminar put on by T. Harv Eker "Secrets Of The Millionaire Mind". Immediately, 
      she began creating an archive of these "well-kept secrets of the wealthy" for the world to know. 
      She went on to graduate with honors and complete a masters degree in life through first hand experience of wealth building, 
      in addition the Multi-Millionaires she continues to be mentored by.
      
      As a Licensed Insurance Broker, Financial Strategist, & Wealth Planner, 
      Alexis dedicates her time as a coach and a mentor sharing Financial Intelligence and Investment Education to cultivate the minds of Millennials all over the nation. 
      Her mission to advise families, individuals, and business owners to begin or enhance their journey to financial freedom to increase and preserve wealth is expressed in her ability to transform the paradigm, 
      and financial states of her client. Specializing in Estate Planning, Cash Value Life Insurance, Retirement, and Executive Business Planning.`,
    },
    {
      image: GENE, // Direct reference to the imported image
      name: 'Gene Santos',
      title: 'Financial Advisor',
      bio: `Gene Santos is a distinguished financial advisor specializing in comprehensive wealth
      management for high net worth individuals and families. With over a decade of strategic experience in the finance and insurance industry, Gene has established himself as a trusted
      advisor to discerning clients seeking sophisticated financial solutions.
      
      Demonstrating exceptional performance, Gene has successfully written over $25 million in life
      insurance coverage, strategically managed in excess of $2.4 million in client assets, and
      facilitated more than $15 million in annuity premiums. His practice is precisely calibrated to
      serve high net worth clients, delivering nuanced financial strategies that address the complex
      wealth management needs of successful professionals and entrepreneurs.
      
      Specializing in advanced retirement planning, comprehensive estate strategies, and tailored
      investment optimization, Gene provides a strategic approach that goes beyond standard
      financial advising. His expertise lies in crafting customized financial solutions that protect and
      grow wealth, with a keen understanding of the unique financial challenges facing high-net-worth
      individuals.
      
      Gene's client-focused methodology combines rigorous financial acumen with a commitment to
      building long-term, trust-based relationships. By offering personalized guidance and strategic
      insights, he empowers clients to make informed decisions that align with their most significant
      financial objectives and legacy planning goals.`,
    },
  ]

  // Function to handle the next slide
  const nextSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, TRANSITION_DURATION)
  }

  // Function to handle the previous slide
  const prevSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1))

    setTimeout(() => {
      setIsTransitioning(false)
    }, TRANSITION_DURATION)
  }

  // Function to handle specific slide selection
  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return

    setIsTransitioning(true)
    setCurrentSlide(index)

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, TRANSITION_DURATION)
  }

  // Reset auto-scroll timer when user manually navigates
  const handleManualNavigation = (action) => {
    // Clear existing timer regardless of screen size
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current)
    }

    // Perform navigation action
    if (typeof action === 'function') {
      action()
    }

    // Restart timer only if not in large screen mode
    if (!isLargeScreen) {
      autoScrollTimerRef.current = setInterval(() => {
        nextSlide()
      }, AUTO_SCROLL_INTERVAL)
    }
  }

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      // Clear any existing timer first
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current)
      }

      // Set new timer for auto-scrolling only on small screens
      if (!isLargeScreen) {
        autoScrollTimerRef.current = setInterval(
          nextSlide,
          AUTO_SCROLL_INTERVAL,
        )
      }
    }

    startAutoScroll()

    // Clean up timer on component unmount
    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current)
      }
    }
  }, [isLargeScreen, currentSlide, nextSlide]) // Added currentSlide to properly reset timer when slide changes

  // Check screen size on component mount and window resize
  useEffect(() => {
    const checkScreenSize = () => {
      const newIsLargeScreen = window.innerWidth >= 1024

      // Only update state if there's a change to prevent unnecessary re-renders
      if (newIsLargeScreen !== isLargeScreen) {
        setIsLargeScreen(newIsLargeScreen)
      }
    }

    // Initial check
    checkScreenSize()

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [isLargeScreen]) // Added dependency to prevent unnecessary event listeners

  const slideStyles = {
    teamSlideContainer: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
    },
    teamSlide: {
      transition: `transform ${TRANSITION_DURATION / 1000}s ease-in-out, opacity ${TRANSITION_DURATION / 1000}s ease-in-out`,
      opacity: isTransitioning ? 0 : 1,
      transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
    },
  }

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-10 pb-10 md:rounded-bl-[100px] md:rounded-br-[100px]">
        <div className="relative z-10 flex w-full flex-col items-center justify-center pt-32">
          <ScrollAnimation animation="fadeIn" delay={0.3}>
            <div className="pb-7">
              <img src={MText} alt="Welcome text" />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.5}>
            <div>
              <p
                className="pb-5 text-center text-white md:text-xl"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Build a Multi-6 or 7-Figure Business Helping Entrepreneurs get
                the Captain They Desperately Need to Succeed.
              </p>
            </div>

            <div className="flex w-full justify-center">
              <iframe
                className="h-[250px] rounded-2xl pb-5 lg:h-[415px] lg:w-[650px] lg:rounded-[50px]"
                src="https://www.youtube.com/embed/m2ERPhqNENk?si=LBHOcW6Eti5e4HTK"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div>
              <button
                className="rounded-[8px] bg-[#E7A647] px-3 py-2"
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
              >
                Check My Funding Eligibility
              </button>
            </div>
          </ScrollAnimation>
        </div>

        <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
      </section>

      <section className="min-h-[50vh] overflow-hidden bg-white px-10 pb-14">
        <ScrollAnimation animation="fadeIn" delay={0.5}>
          <div className="flex flex-col items-center justify-center pt-24">
            <div className="lg:px-24">
              <h1
                className="text-center leading-10 text-black"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                The definition of insanity is doing the same thing over and over
                again and expecting a different result." It's time to get
                serious about your financial future. If you want to ensure you
                and your company are financially set up for success, get a FREE
                financial review with YellowBrick Financial today.
              </h1>
            </div>
            <div>
              <h1
                className="pt-6 text-center text-2xl text-[#E7A647]"
                style={{ fontFamily: 'Adelia, serif' }}
              >
                C.e.o, Founder
              </h1>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <section className="flex items-center justify-center overflow-hidden bg-black px-10 pb-14 md:min-h-[70vh]">
        <div className="flex items-center justify-center pt-10 md:px-40">
          <div className="grid gap-x-11 gap-y-10 md:grid-cols-2">
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div>
                <img src={HEADPHONE} className="h-80" alt="Headphones" />
              </div>
            </ScrollAnimation>
            <div className="flex flex-col items-start justify-center">
              <ScrollAnimation animation="slideUp" delay={0.3}>
                <h1
                  className="pb-10 text-3xl font-semibold text-[#E7A647] md:text-start"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                >
                  Book a <span className="italic text-white">Free</span>{' '}
                  Financial Review and Get the "Spender, Saver, Wealth Creator"
                  Audio FREE.{' '}
                </h1>
              </ScrollAnimation>
              <div>
                <ScrollAnimation animation="slideUp" delay={0.4}>
                  <button
                    className="rounded-[8px] bg-[#E7A647] px-5 py-3"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    FREE Financial Review
                  </button>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[80vh] overflow-hidden bg-white px-10 pb-14">
        <div className="flex flex-col items-center justify-center pt-10">
          <ScrollAnimation animation="zoomIn">
            <div>
              <h1
                className="pb-10 text-center text-3xl font-semibold text-[#E7A647] md:text-start"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                {' '}
                About YellowBrick Financial — A Company That Cares{' '}
              </h1>
            </div>
          </ScrollAnimation>
          <div className="grid gap-x-16 gap-y-10 md:grid-cols-2 lg:px-40">
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div>
                <img
                  src={BIGLOGO}
                  className="h-72"
                  alt="YellowBrick Financial Logo"
                />
              </div>
            </ScrollAnimation>
            <div>
              <ScrollAnimation animation="slideLeft" delay={0.4}>
                <p
                  className="text-black"
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

      <section className="flex min-h-[58vh] flex-col items-center justify-center overflow-hidden bg-black px-10 pb-10">
        <div className="flex flex-col items-center justify-center pt-10 lg:px-64">
          <ScrollAnimation animation="zoomIn">
            <div>
              <h1
                className="pb-10 text-center text-3xl font-semibold text-[#E7A647]"
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
                className="text-center font-extralight leading-6 text-white lg:px-20"
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

      <section className="flex min-h-[80vh] items-center justify-center overflow-hidden bg-white px-10 pb-14">
        <div className="flex items-center justify-center pt-10 lg:px-20">
          <div className="grid gap-x-20 gap-y-10 md:grid-cols-2">
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div>
                <img src={FALLCOIN} className="h-96" alt="Falling coins" />
              </div>
            </ScrollAnimation>

            <div className="flex flex-col justify-center gap-y-5">
              <ScrollAnimation animation="zoomIn">
                <h1
                  className="text-3xl font-semibold text-[#E7A647]"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                >
                  Even if you believe your financials are on track, you should
                  still get a FREE financial review.
                </h1>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.3}>
                <p
                  className="font-extralight leading-6 text-gray-900"
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
                  className="font-semibold text-black"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                >
                  Are You Ready to Know Exactly What You Need to Do to Get Your
                  Company Financials on Track?
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.7}>
                <div>
                  <button
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

      <section className="flex flex-col items-center justify-center overflow-hidden bg-black px-10 pb-10 md:min-h-[80vh]">
        <div className="flex flex-col items-center justify-center gap-y-3 pt-10 lg:pt-16">
          <ScrollAnimation animation="slideDown" delay={0.1}>
            <h1 className="text-center text-xl font-thin tracking-widest text-gray-400">
              Trusted by Professionals Like You
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={0.2}>
            <h1
              className="pb-10 text-center text-3xl font-semibold text-[#E7A647]"
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              Client Success Stories
            </h1>
          </ScrollAnimation>
          <div>
            <img src={LONG} alt="Client testimonials" />
          </div>
        </div>
      </section>

      <section className="team-section flex min-h-[100vh] items-center justify-center overflow-hidden bg-white px-10 pb-14">
        <div className="flex w-full flex-col items-center justify-center pt-10">
          <ScrollAnimation animation="zoomIn" delay={0.2}>
            <h1
              className="pb-10 text-center text-3xl font-semibold text-[#E7A647]"
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              Meet the Team
            </h1>
          </ScrollAnimation>

          {isLargeScreen ? (
            // Large screen layout with ScrollAnimation components
            <div className="space-y-20 lg:px-20">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="grid gap-x-14 space-y-10 md:grid-cols-2"
                >
                  {/* Apply ScrollAnimation to the image with alternating animations based on index */}
                  <ScrollAnimation
                    animation={index % 2 === 0 ? 'slideRight' : 'slideLeft'}
                    delay={0.2}
                  >
                    <div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </ScrollAnimation>

                  <div className="flex flex-col items-start justify-center">
                    {/* Apply ScrollAnimation to the name and title */}
                    <ScrollAnimation animation="fadeIn" delay={0.3}>
                      <div>
                        <h1
                          className="text-start text-2xl text-[#E7A647]"
                          style={{
                            fontFamily: 'Montserrat, serif',
                            fontWeight: 'medium',
                          }}
                        >
                          {member.name}
                        </h1>
                      </div>
                      <p
                        className="text-lg font-semibold italic"
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        {member.title}
                      </p>
                    </ScrollAnimation>

                    {/* Apply ScrollAnimation to the bio text */}
                    <ScrollAnimation animation="slideUp" delay={0.4}>
                      <p className="pt-5">
                        {member.bio.split('\n\n').map((paragraph, i) => (
                          <React.Fragment key={i}>
                            {paragraph}
                            {i < member.bio.split('\n\n').length - 1 && (
                              <>
                                <br /> <br />
                              </>
                            )}
                          </React.Fragment>
                        ))}
                      </p>
                    </ScrollAnimation>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Mobile layout without additional ScrollAnimation components (keeping original functionality)
            <div
              className="mx-auto w-full max-w-2xl"
              style={slideStyles.teamSlideContainer}
            >
              <div className="relative">
                <div className="team-slide" style={slideStyles.teamSlide}>
                  <div className="flex flex-col items-center">
                    <div className="mb-6">
                      <img
                        src={teamMembers[currentSlide].image}
                        alt={teamMembers[currentSlide].name}
                        className="mx-auto w-full max-w-md transition-all duration-500 ease-in-out"
                      />
                    </div>
                    <div className="px-4 text-center transition-all duration-500 ease-in-out md:text-left">
                      <h1
                        className="text-2xl text-[#E7A647]"
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        {teamMembers[currentSlide].name}
                      </h1>
                      <p
                        className="mb-4 text-lg font-semibold italic"
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        {teamMembers[currentSlide].title}
                      </p>
                      <p className="">
                        {teamMembers[currentSlide].bio
                          .split('\n\n')
                          .map((paragraph, i) => (
                            <React.Fragment key={i}>
                              {paragraph}
                              {i <
                                teamMembers[currentSlide].bio.split('\n\n')
                                  .length -
                                  1 && (
                                <>
                                  <br /> <br />
                                </>
                              )}
                            </React.Fragment>
                          ))}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation buttons */}
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() => handleManualNavigation(prevSlide)}
                    className="rounded-full bg-[#E7A647] px-4 py-2 text-white shadow-lg transition-colors hover:bg-[#d89935]"
                    aria-label="Previous team member"
                  >
                    ← Prev
                  </button>

                  {/* Dots indicator with animations */}
                  <div className="flex items-center space-x-2">
                    {teamMembers.map((_, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handleManualNavigation(() => goToSlide(index))
                        }
                        className={`h-3 w-3 transform rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? 'scale-125 bg-[#E7A647] shadow-md'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => handleManualNavigation(nextSlide)}
                    className="rounded-full bg-[#E7A647] px-4 py-2 text-white shadow-lg transition-colors hover:bg-[#d89935]"
                    aria-label="Next team member"
                  >
                    Next →
                  </button>
                </div>

                {/* Auto-scroll indicator */}
                <div className="mt-4 flex items-center justify-center">
                  <div className="h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-1.5 rounded-full bg-[#E7A647]"
                      style={{
                        width: '100%',
                        animation: `autoScrollProgress ${AUTO_SCROLL_INTERVAL / 1000}s linear infinite`,
                        animationPlayState: isTransitioning
                          ? 'paused'
                          : 'running',
                      }}
                    ></div>
                  </div>
                </div>

                {/* Add keyframes for auto-scroll progress animation */}
                <style jsx>{`
                  @keyframes autoScrollProgress {
                    0% {
                      width: 0%;
                    }
                    100% {
                      width: 100%;
                    }
                  }
                `}</style>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Insurance
