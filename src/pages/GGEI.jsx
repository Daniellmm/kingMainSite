import React, { useEffect, useState, useRef } from 'react'

import SCI from '../assets/images/sci.webp'
import YELLOW from '../assets/images/yellow.webp'
import BIGLOGO2 from '../assets/images/biglogo2.webp'
import DART from '../assets/images/dart.webp'
import CHECK from '../assets/images/check.webp'
import LAPTOP from '../assets/images/laptop.webp'
import GIRL from '../assets/images/girl.webp'
import KF from '../assets/images/team/kf.webp'
import AF from '../assets/images/team/af.webp'
import GF from '../assets/images/team/gf.webp'
import RF from '../assets/images/team/ramses.webp'
import SF from '../assets/images/team/sf.webp'
import KFS from '../assets/images/team/1.webp'
import AFS from '../assets/images/team/2.webp'
import GFS from '../assets/images/team/3.webp'
import RFS from '../assets/images/team/4.webp'
import SFS from '../assets/images/team/5.webp'
import KING from '../assets/images/team/king.webp'
import GENE from '../assets/images/team/gene.webp'
import ALEXIS from '../assets/images/team/alexis.webp'
import RAMSEY from '../assets/images/team/ramsey.webp'
import SHAWN from '../assets/images/team/shawn.webp'

import AdmissionSection from '../component/AdmissionSection'
import ScrollAnimation from '../component/ScrollAnimation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BankSummitHeader from '../component/BankSummitHeader/BankSummitHeader'
import PlayButton from '../component/ui/PlayButton'
import Loader from '../component/ui/Loader'
const FORM_URL =
  ' https://api.leadconnectorhq.com/widget/form/BH71Y2GyuR17dADcvbhI'

gsap.registerPlugin(ScrollTrigger)

const TeamSlider = ({ teamMembers }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef(null)

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      // Move to next slide
      setCurrentIndex((prevIndex) =>
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1,
      )
    }, 6000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [teamMembers.length])

  // When currentIndex changes, scroll the slider
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentIndex * sliderRef.current.offsetWidth,
        behavior: 'smooth',
      })
    }
  }, [currentIndex])

  return (
    <div className="relative w-full">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex snap-x snap-mandatory overflow-x-hidden scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex min-w-full snap-center justify-center"
          >
            <div className="relative">
              <img src={member.frame} className="z-10 h-[400px]" alt="" />
              <div className="absolute left-[60px] top-[-20px] z-10">
                {/* <img
                  src={member.name}
                  className={`${member.isGene ? 'mt-[35px]' : ''} w-[230px]`}
                  alt=""
                /> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="mt-5 flex justify-center gap-2">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? 'bg-[#E7A647]' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

const GGEI = () => {
  const teamMembers = [
    { frame: AFS, name: ALEXIS, isGene: false },
    { frame: KFS, name: KING, isGene: false },
    { frame: GFS, name: GENE, isGene: true },
    { frame: RFS, name: RAMSEY, isGene: false },
    { frame: SFS, name: SHAWN, isGene: false },
  ]

  //to show Thumbnail for emeded solo ifram first, only loading iframe when clicked on thumbnail
  const [showIframe, setShowIframe] = useState(false)
  const [isIframeLoading, setIsIframeLoading] = useState(true)

  const handleButtonClick = () => {
    window.open(FORM_URL, '_blank', 'noopener,noreferrer')
  }

  // https://youtu.be/LbuGAPU2dqQ?si=b0FVL-F4oT-E9pp0

  return (
    <>
      <BankSummitHeader handleClick={handleButtonClick} />

      {/* <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-black px-10 pb-10 md:min-h-0 md:rounded-bl-[100px] md:rounded-br-[100px]"></section> */}

      <section className="flex justify-center overflow-hidden bg-gray-200 px-5 py-10">
        <div className="flex justify-center rounded-xl bg-white px-2 py-14 lg:px-16">
          <div className="flex flex-col items-center justify-center pt-8">
            <ScrollAnimation animation="zoomIn" delay={0.4}>
              <div className="lg:px-24">
                <h1
                  className="text-center text-xl font-bold leading-10 text-black lg:text-[28px]"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                >
                  “If you don’t have at least five friends in your phone who can
                  turn $1 into $2, you need a new circle.”
                </h1>
              </div>
              <div>
                <h1
                  className="pt-6 text-center text-4xl leading-relaxed text-[#E7A647]"
                  style={{ fontFamily: 'Adelia, serif' }}
                >
                  Alexis Holifield
                </h1>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-black px-10 pb-14">
        <div className="flex flex-col items-center justify-center gap-x-20 gap-y-8 pt-10 md:flex-row">
          <div className="">
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <img src={SCI} alt="" />
            </ScrollAnimation>
          </div>

          <div className="flex flex-col items-center justify-center gap-y-4">
            <ScrollAnimation animation="zoomIn">
              <h1
                className="text-center text-3xl font-semibold text-[#E7A647] lg:text-start lg:text-[45px]"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Earning More Money
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.4}>
              <p
                className="text-center font-extralight text-white md:text-[18px] lg:text-start"
                style={{ fontFamily: 'Montserrat, serif' }}
              >
                The Truth About Wealth That 98% of Entrepreneurs Are
                Missing{' '}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-5 pb-14 md:px-10">
        <div className="flex flex-col items-center justify-center gap-y-4 pt-10 lg:items-start">
          <ScrollAnimation animation="zoomIn">
            <h1
              className="text-center text-3xl font-semibold leading-[45px] text-[#E7A647] lg:text-[45px]"
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              Welcome to The Global Group Economic Initiative’s Become Your Own
              Bank Summit.
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.1}></ScrollAnimation>

          <div className="flex h-full items-start justify-center lg:w-[100%]">
            <ScrollAnimation animation="slideRight" delay={0.2}>
              {!showIframe ? (
                <div className="relative mt-3 flex justify-center rounded-2xl lg:rounded-[50px]">
                  <div
                    className="group relative h-[250px] w-[340px] cursor-pointer overflow-hidden rounded-2xl md:w-[540px] lg:h-[415px] lg:w-[850px] lg:rounded-[50px]"
                    onClick={() => setShowIframe(true)}
                  >
                    {/* Thumbnail */}
                    <img
                      src="https://img.youtube.com/vi/LbuGAPU2dqQ/hqdefault.jpg"
                      alt="Video thumbnail"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />

                    {/* Play Button Overlay */}
                    <PlayButton />
                  </div>
                </div>
              ) : (
                <div className="relative mt-3 flex justify-center rounded-2xl lg:rounded-[50px]">
                  {isIframeLoading && <Loader />}
                  <iframe
                    className="h-[250px] w-[340px] md:w-[540px] lg:h-[415px] lg:w-[850px] lg:rounded-[50px]"
                    src="https://www.youtube.com/embed/LbuGAPU2dqQ?si=b0FVL-F4oT-E9pp0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    onLoad={() => setIsIframeLoading(false)}
                  ></iframe>
                </div>
              )}
            </ScrollAnimation>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-x-7 gap-y-5 pt-6 lg:flex-row">
            <div className="md:text-[20px] lg:w-[99%]">
              <ScrollAnimation animation="slideRight" delay={0.3}>
                <p
                  className="pb-3 text-center text-xl font-semibold md:text-[26px] lg:text-start"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                >
                  A Message From Our Co-Founders{' '}
                </p>

                <p
                  className="text-center font-extralight leading-[25px] md:text-[18px] lg:text-start"
                  style={{ fontFamily: 'Montserrat, serif' }}
                >
                  Hello, King Edwards here—and before we go any further, I want
                  to personally congratulate you for being here. On behalf of
                  myself and my business partner, Alexis Holifield, it’s our
                  pleasure to welcome you to
                  <span className="font-bold text-black/70">
                    {' '}
                    The Global Group Economic Initiative (GGEI).
                  </span>
                  <br />
                  <br />
                  We created GGEI to serve a very specific mission:
                  <span className="font-bold text-black/70">
                    {' '}
                    to break the cycle that so many high earners— entrepreneurs,
                    athletes, and entertainers—find themselves trapped in.
                  </span>
                  . It’s the all-too-common story: you generate significant
                  income, only to lose it all, and find yourself forced to start
                  over again.
                  <br />
                  <br />
                  This happens because, as financial leaders in our families,
                  we’re often expected to uplift everyone around us—yet we
                  rarely have a trusted circle that supports us in doing the
                  same for ourselves.
                  <br />
                  <br />
                  <span className="font-bold text-black/70">
                    {' '}
                    What is the Global Group Economic Initiative?{' '}
                  </span>
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.4}>
                <br />
                <p
                  className="text-center font-extralight leading-[25px] md:text-[18px] lg:text-start"
                  style={{ fontFamily: 'Montserrat, serif' }}
                >
                  GGEI is a
                  <span className="font-bold text-black/70">
                    {' '}
                    private, members-only wealth network{' '}
                  </span>
                  designed to give you both the education and the tools to earn,
                  protect, and multiply your income through proven, time-tested
                  strategies.
                  <br />
                  <br />
                  We teach the same financial principles used by the world’s
                  wealthiest families—such as
                  <span className="font-bold text-black/70">
                    {' '}
                    The Rockefeller Waterfall Method—{' '}
                  </span>
                  and help you implement them in real time through a powerful
                  3-step wealth-building framework:
                  <br />
                  <br />
                  <ScrollAnimation animation="slideUp" delay={0.8}>
                    <ol
                      className="pb-5 text-center leading-[25px] md:text-[18px] lg:text-start"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontWeight: 'medium',
                      }}
                    >
                      <li>
                        <span className="font-bold">Earning more</span> –
                        Increase your income through high-performance
                        strategies.
                      </li>
                      <li>
                        <span className="font-bold">Protect What You Earn</span>{' '}
                        – Use advanced vehicles that outpace inflation and
                        preserve capital.
                      </li>
                      <li>
                        <span className="font-bold">Grow Your Wealth</span> –
                        Multiply your revenue through opportunities like
                        AI-powered trading bots and more.
                      </li>
                    </ol>
                  </ScrollAnimation>
                </p>
              </ScrollAnimation>
            </div>
          </div>

          <ScrollAnimation animation="slideUp" delay={0.4}>
            <p
              className="py-2 text-center text-xl font-semibold md:text-[22px] lg:text-start"
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              The “Become Your Own Bank” Summit
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.9}>
            <p
              className="pb-5 text-center font-extralight leading-[25px] md:text-[18px] lg:text-start"
              style={{ fontFamily: 'Montserrat, serif' }}
            >
              All of this comes to life at our flagship event:{' '}
              <span className="font-bold text-black/70">
                The Become Your Own Bank Summit.
              </span>
              <br />
              <br />
              This is not just another financial seminar—it’s a{' '}
              <span className="font-bold text-black/70">
                transformative experience
              </span>{' '}
              where we introduce a groundbreaking concept called
              <span className="font-bold text-black/70">
                {' '}
                Infinite Banking:{' '}
              </span>
              a fully integrated financial system that empowers you to create
              your own private bank within your life and business.
              <br />
              <br />
              By combining the pillars of
              <span className="font-bold text-black/70">
                {' '}
                Funding, Insurance, and Trading,{' '}
              </span>
              Infinite Banking helps you take full control of your financial
              future using our signature model:{' '}
              <span className="font-bold text-black/70">
                {' '}
                Earn. Protect. Grow.{' '}
              </span>
              <br />
              <br />
              If you’re ready to reclaim your financial power, build
              generational wealth, and surround yourself with a network of
              elite, like-minded individuals who are doing the same—
              <span className="font-bold text-black/70">
                {' '}
                you’re in the right place.
              </span>
              <br />
              <br />
              Welcome to the movement. Welcome to the mission.
              <br />
              <br />
              <span className="font-bold text-black/70">
                {' '}
                Welcome to the Global Group Economic Initiative.
              </span>
              <br />
              <br />— King Edwards & Alexis Holifield
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="overflow-hidden bg-black px-10 pb-14">
        <div className="flex flex-col items-center justify-center gap-20 pt-10 md:px-10 lg:flex-row">
          <div className="flex flex-col items-start justify-start gap-y-4 font-normal lg:w-1/2">
            <div className="flex w-full justify-center lg:justify-start">
              <ScrollAnimation animation="zoomIn">
                <h1
                  className="text-center text-3xl font-semibold text-[#E7A647] lg:text-start lg:text-[45px] lg:leading-[45px]"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                >
                  EARN, PROTECT, GROW
                </h1>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animation="slideRight" delay={0.3}>
              <p
                className="text-center font-extralight text-white md:text-[22px] lg:text-start"
                style={{ fontFamily: 'Montserrat, serif' }}
              >
                AN ENTREPRENEURS GUIDE TO EARNING MORE MONEY, PROTECTING THE
                MONEY YOU HAVE EARNED, & GROWING THE MONEY YOU HAVE PROTECTED.
              </p>
            </ScrollAnimation>
            <div className="flex w-full justify-center lg:justify-start">
              <ScrollAnimation animation="slideRight" delay={0.5}>
                <div className="flex w-full justify-center">
                  <button
                    onClick={handleButtonClick}
                    className="rounded-[8px] bg-[#E7A647] px-3 py-2"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    I Want To Secure A Spot
                  </button>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <ScrollAnimation animation="slideLeft" delay={0.6}>
            <div className="">
              <img src={YELLOW} alt="" />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-10 pb-14">
        <div className="flex flex-col items-center justify-center gap-10 pt-10 md:px-10 lg:flex-row">
          <div className="flex flex-col gap-y-4 font-normal lg:w-1/2">
            <ScrollAnimation animation="zoomIn">
              <h1
                className="text-center text-3xl font-semibold text-[#E7A647] lg:text-start lg:text-[45px]"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                About Us
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={0.3}>
              <p
                className="text-center font-extralight text-black md:text-[18px] lg:text-start"
                style={{ fontFamily: 'Montserrat, serif' }}
              >
                The Global Group Economic Initiative is a Christian-based
                wealth-building community dedicated to helping serious
                entrepreneurs achieve lasting financial success. We teach proven
                strategies that empower business owners to generate
                significantly more revenue, grow their net worth year after
                year—regardless of economic conditions—and build financial
                legacies, much like the Warren Buffetts of the world.
                <br /> <br />
                We believe wealth is about stewardship, not just survival. By
                applying biblical principles and time-tested financial
                strategies, our members break free from conventional
                limitations, positioning themselves for sustainable growth and
                impact{' '}
              </p>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="slideLeft" delay={0.6}>
            <div className="">
              <img src={BIGLOGO2} alt="" />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section>
        <AdmissionSection handleButtonClick={handleButtonClick} />
      </section>

      <section className="overflow-hidden bg-black px-10 pb-14">
        <div className="flex flex-col gap-x-20 gap-y-10 pt-10 md:flex-row">
          <div className="">
            <ScrollAnimation animation="slideDown" delay={0.4}>
              <img src={DART} alt="" />
            </ScrollAnimation>
          </div>

          <div className="flex flex-col justify-center gap-y-4 md:w-1/2">
            <ScrollAnimation animation="zoomIn">
              <h1
                className="text-center text-3xl font-semibold text-[#E7A647] lg:text-start lg:text-[45px]"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Our Mission:
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slideUp" delay={0.8}>
              <p
                className="text-center font-light text-white md:text-[18px] lg:text-start"
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
              >
                To create more wealthy families by equipping you with
                century-old wealth-building secrets used by the world’s
                wealthiest individuals.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section
        id="team-section"
        className="large-screen hidden overflow-hidden bg-white px-10 pb-20 lg:block"
      >
        <div className="flex flex-col items-center justify-center pt-10">
          <ScrollAnimation animation="zoomIn">
            <h1
              className="text-3xl font-semibold text-[#E7A647] lg:text-[45px]"
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              Founders
            </h1>
          </ScrollAnimation>

          <div className="relative flex flex-col flex-wrap items-center justify-center gap-x-14 pt-44">
            <div className="relative flex flex-col flex-wrap items-center justify-center gap-x-14 lg:flex-row">
              <div className="relative">
                <ScrollAnimation animation="fadeIn" delay={0.3}>
                  <img src={AF} className="z-10 h-[400px]" alt="" />
                </ScrollAnimation>
                <div className="absolute top-[-125px] z-10">
                  <ScrollAnimation animation="zoomIn" delay={0.6}>
                    <img src={ALEXIS} alt="" />
                  </ScrollAnimation>
                </div>
                <div className="absolute top-[-125px] z-10">
                  <ScrollAnimation animation="zoomIn" delay={0.6}>
                    <img src={ALEXIS} alt="" />
                  </ScrollAnimation>
                </div>
              </div>

              <div className="relative">
                <ScrollAnimation animation="fadeIn" delay={0.2}>
                  <img src={KF} className="z-10 h-[400px]" alt="" />
                </ScrollAnimation>

                <div className="absolute left-[10px] top-[-125px] z-10">
                  <ScrollAnimation animation="zoomIn" delay={0.4}>
                    <img src={KING} className="w-[300px]" alt="" />
                  </ScrollAnimation>
                </div>
                <div className="absolute left-[10px] top-[-125px] z-10">
                  <ScrollAnimation animation="zoomIn" delay={0.4}>
                    <img src={KING} className="w-[300px]" alt="" />
                  </ScrollAnimation>
                </div>
              </div>
            </div>

            <ScrollAnimation animation="zoomIn">
              <h1
                className="pt-20 text-3xl font-semibold text-[#E7A647] lg:text-[45px]"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Executive Leadership Team
              </h1>
            </ScrollAnimation>

            <div className="relative flex flex-col flex-wrap items-center justify-center gap-x-14 pt-32 lg:flex-row">
              <div className="relative">
                <ScrollAnimation animation="fadeIn" delay={0.4}>
                  <img src={GF} className="z-10 h-[400px]" alt="" />
                </ScrollAnimation>

                <div className="absolute top-[-90px] z-10">
                  <ScrollAnimation animation="zoomIn" delay={0.8}>
                    <img src={GENE} alt="" />
                  </ScrollAnimation>
                </div>
                <div className="absolute top-[-90px] z-10">
                  <ScrollAnimation animation="zoomIn" delay={0.8}>
                    <img src={GENE} alt="" />
                  </ScrollAnimation>
                </div>
              </div>

              <div className="relative">
                <ScrollAnimation animation="fadeIn" delay={0.4}>
                  <img src={RF} className="z-10 h-[400px]" alt="" />
                </ScrollAnimation>

                <div className="absolute left-[10px] top-[-125px] z-10">
                  <ScrollAnimation animation="zoomIn" delay={0.7}>
                    <img src={RAMSEY} className="w-[300px]" alt="" />
                  </ScrollAnimation>
                </div>
                <div className="absolute left-[10px] top-[-125px] z-10">
                  <ScrollAnimation animation="zoomIn" delay={0.7}>
                    <img src={RAMSEY} className="w-[300px]" alt="" />
                  </ScrollAnimation>
                </div>
              </div>
              <div className="relative">
                <ScrollAnimation animation="fadeIn" delay={0.5}>
                  <img src={SF} className="z-10 h-[400px]" alt="" />
                </ScrollAnimation>

                <div className="absolute top-[-125px] z-10">
                  <ScrollAnimation animation="zoomIn" delay={0.9}>
                    <img src={SHAWN} className="w-[300px]" alt="" />
                  </ScrollAnimation>
                </div>
                <div className="absolute top-[-125px] z-10">
                  <ScrollAnimation animation="zoomIn" delay={0.9}>
                    <img src={SHAWN} className="w-[300px]" alt="" />
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section flex items-center justify-center overflow-hidden bg-white px-5 pb-14 lg:hidden">
        <div className="flex flex-col items-center justify-center pt-10">
          <div>
            <ScrollAnimation animation="zoomIn" delay={0.2}>
              {/* <h1 className='text-[#E7A647] text-center pb-10 text-3xl lg:text-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Founders</h1> */}
            </ScrollAnimation>
          </div>

          <div className="space-y-10 lg:px-10">
            <div className="flex flex-col items-center justify-center">
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
                    building generational wealth at the early age of 17 years
                    old. She began her journey by attending a seminar put on by
                    T. Harv Eker "Secrets Of The Millionaire Mind". Immediately,
                    she began creating an archive of these "well-kept secrets of
                    the wealthy" for the world to know. She went on to graduate
                    with honors and complete a masters degree in life through
                    first hand experience of wealth building, in addition the
                    Multi-Millionaires she continues to be mentored by.
                    <br /> <br />
                    As a Licensed Insurance Broker, Financial Strategist, &
                    Wealth Planner, Alexis dedicates her time as a coach and a
                    mentor sharing Financial Intelligence and Investment
                    Education to cultivate the minds of Millennials all over the
                    nation. Her mission to advise families, individuals, and
                    business owners to begin or enhance their journey to
                    financial freedom to increase and preserve wealth is
                    expressed in her ability to transform the paradigm, and
                    financial states of her client. Specializing in Estate
                    Planning, Cash Value Life Insurance, Retirement, and
                    Executive Business Planning.
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
                    entrepreneurs operating in industries traditionally
                    overlooked by banks. Through this endeavor, he sought to
                    help consultants and entrepreneurs earn significant profits,
                    develop and sell high-value products and services, and
                    safeguard themselves from legal implications using HTOF’s
                    comprehensive workflows, standard operating procedures, and
                    contract templates.
                    <br /> <br />
                    With a focus on helping entrepreneurs thrive and achieve
                    remarkable financial milestones, King has received accolades
                    such as the Man of the Moment and Made Man Award for his
                    achievements. Through unwavering determination and an
                    unwavering focus on the next best move, King aims to rewrite
                    the rules of the game and help his clients leave an
                    indelible mark on their respective industries and their
                    family’s lives.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <ScrollAnimation animation="zoomIn" delay={0.2}>
                <h1
                  className="pb-10 text-center text-3xl font-semibold text-[#E7A647] lg:text-[45px]"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                >
                  Executive Leadership Team
                </h1>
              </ScrollAnimation>
            </div>
            <div className="flex flex-col items-center justify-center">
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

              <div className="grid gap-x-14 space-y-10 md:grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center">
                  <img src={RAMSEY} className="w-[510px]" alt="" />
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
                      Ramses Guzman
                    </h1>
                  </div>
                  <p
                    className="text-center text-lg font-semibold italic lg:text-start"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    Professional Day Trader | Financial Educator | Automation
                    Specialist
                  </p>

                  <p className="pt-5 text-center lg:text-start">
                    Ramses Guzman is a professional day trader, financial
                    educator, and automation specialist with nearly a decade of
                    experience in the markets. He founded The Bank Zone Trading
                    Club in 2021, mentoring over 600 students globally in Forex,
                    Futures, and Cryptocurrency. The platform generated over
                    $250,000 in its first year, driven by Ramses’ hands-on
                    leadership and focus on empowering individuals through
                    disciplined, confident trading.
                    <br /> <br />
                    He also leads Venture Asset Investments, a company that
                    develops automated algorithmic trading systems for
                    hands-free investing. His combined expertise in trading
                    education and automation helps clients pursue both active
                    and passive income. Raised in New York City, Ramses has
                    built a loyal following through live seminars, immersive
                    trading events, and transparent social media content.
                    <br /> <br />
                    Most recently, Ramses co-launched The Laser Fund Experience,
                    a strategic initiative helping individuals “become their own
                    bank” by helping them how to grow capital in the markets.
                    Through his ventures, he continues to redefine financial
                    independence and inspire others to take control of their
                    financial future.
                  </p>
                </div>
              </div>

              <div className="grid gap-x-14 space-y-10 md:grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center">
                  <img src={SHAWN} className="w-[510px]" alt="" />
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
                      Shawn Grace
                    </h1>
                  </div>
                  <p
                    className="text-center text-lg font-semibold italic lg:text-start"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    Professional Day Trader | Financial Educator | Automation
                    Specialist
                  </p>

                  <p className="pt-5 text-center lg:text-start">
                    Shawn Grace is the owner of Shawn Grace Investments and part
                    owner of Venture Asset Investments, with 9 years of
                    experience in automated trading, prop firm management, and
                    financial education. He specializes in helping clients grow
                    and protect wealth through innovative, performance-driven
                    strategies. As a lead mentor at The Bank Zone Trading Club,
                    Shawn has guided over 600 students, offering copy trading,
                    one-on-one coaching, and live sessions focused on confident,
                    informed trading.
                    <br /> <br />
                    A passionate educator, Shawn thrives on helping others
                    succeed in dynamic markets. His mentorship style blends
                    technical expertise with a deep commitment to student growth
                    and results.
                    <br /> <br />
                    He is also co-founder of The Laser Fund Experience, an
                    initiative designed to teach individuals how to become their
                    own bank using strategies The Laser Fund Experience, a
                    strategic initiative helping individuals “become their own
                    bank” by helping them how to grow capital in the markets.
                    The program focuses on helping clients achieve long-term
                    financial freedom and legacy wealth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='w-full h-[1px] mt-7 lg:mt-16 bg-black'></div> */}
        </div>
      </section>

      {/* <section className='overflow-hidden flex justify-center items-center px-10 bg-black pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-1'>
          <div className='grid md:grid-cols-2 gap-y-10'>
            <ScrollAnimation animation="slideRight" delay={0.3}>
              <div className='flex justify-center'>
                <img src={BLOCK} className='lg:h-[470px]' alt="" />
              </div>
            </ScrollAnimation>

            <div className='flex flex-col justify-center'>
              <div>
                <ScrollAnimation animation="zoomIn" >
                  <h1 className='text-[#E7A647] text-center lg:text-start text-3xl lg:text-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                    Introducing the Become Your Own Bank Summit
                  </h1>
                </ScrollAnimation>
              </div>

              <ScrollAnimation animation="slideLeft" delay={0.2}>
                <p className='text-white text-center lg:text-start pt-5 pb-5 font-extralight md:text-[20px] leading-[25px]' style={{ fontFamily: 'Montserrat, serif' }}>
                  The Global Group Economic Initiative is committed to helping entrepreneurs build real wealth by changing how they think about business, revenue, and wealth building.
                  <br /> <br />
                  To help you break free from financial limitations, High Ticket Offer Financing has partnered with the Millennial Millionaire to create the Global Group Economic Initiative—a
                  game-changing program designed to help you:
                </p>
              </ScrollAnimation >

              <div className='flex flex-col justify-start items-start md:text-[18px] gap-y-5  font-extralight' style={{ fontFamily: 'Montserrat, serif' }}>
                <ScrollAnimation animation="slideLeft" delay={0.3}>
                  <div className='flex gap-3 justify-center items-center text-white'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> <span className='font-bold'>
                        Earn More Revenue </span> – Learn how to generate consistent, scalable income streams.
                      </p>

                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.4}>
                  <div className='flex gap-3 justify-center items-center text-white'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> <span className='font-bold'>
                        Protect Your Money </span> – Discover how to protect your revenue using vehicles that outpace inflation.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.5}>
                  <div className='flex gap-3 justify-center items-center text-white'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> <span className='font-bold'>
                        Multiply Your Wealth </span>  – Implement proven strategies to compound and grow your wealth aggressively.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="flex items-center justify-center overflow-hidden bg-white pb-14">
        <div className="flex items-center justify-center pt-10 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center gap-5">
              <div>
                <ScrollAnimation animation="zoomIn">
                  <h1
                    className="px-10 text-center text-3xl font-semibold text-[#E7A647] lg:text-start lg:text-[45px] lg:leading-[45px]"
                    style={{ fontFamily: 'Minion Pro, serif' }}
                  >
                    What You’ll Learn at the Summit:
                  </h1>
                </ScrollAnimation>
              </div>

              <div
                className="flex flex-col items-start justify-start gap-y-5 px-5 font-extralight leading-[25px] md:text-[18px]"
                style={{ fontFamily: 'Montserrat, serif' }}
              >
                <ScrollAnimation animation="slideRight" delay={0.3}>
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <img src={CHECK} className="h-7" alt="" />
                    <div>
                      <p>
                        {' '}
                        <span className="font-bold">
                          How to earn 10x more per customer{' '}
                        </span>{' '}
                        — without spending a dollar more on advertising.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideRight" delay={0.5}>
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <img src={CHECK} className="h-7" alt="" />
                    <div>
                      <p>
                        {' '}
                        <span className="font-bold">
                          How to leverage strategic insurance assets to protect
                          your wealth more efficiently than a bank account{' '}
                        </span>
                        — while still earning above-average annual market
                        returns (10%+ per year), growing safely while
                        maintaining full access to your cash.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideRight" delay={0.7}>
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <img src={CHECK} className="h-7" alt="" />
                    <div>
                      <p>
                        {' '}
                        <span className="font-bold">
                          How to aggressively grow your safeguarded cash in the
                          markets{' '}
                        </span>
                        — trading traditional and crypto assets with nothing
                        more than three simple clicks a week—whether you know
                        how to trade or not.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <ScrollAnimation animation="slideRight" delay={0.3}>
              <div className="flex w-full justify-center">
                <img src={LAPTOP} className="px-10 lg:h-[400px]" alt="" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-black px-10 pb-14">
        <div className="flex flex-col items-center justify-center gap-20 pt-24 lg:flex-row">
          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div className="">
              <img src={GIRL} alt="" />
            </div>
          </ScrollAnimation>

          <div className="flex flex-col items-start justify-start gap-y-4 font-normal md:w-1/2">
            <ScrollAnimation animation="zoomIn">
              <h1
                className="text-center text-3xl font-semibold text-[#E7A647] lg:text-start lg:text-[45px] lg:leading-[45px]"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Are You Ready to Take Your Business to the Next Level?
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slideDown" delay={0.5}>
              <p
                className="text-center font-extralight text-white md:text-[18px] lg:text-start"
                style={{ fontFamily: 'Montserrat, serif' }}
              >
                If you’re tired of working hard without seeing real financial
                results…
                <br />
                <br />
                If you’re ready to start building true generational wealth…
                <br />
                <br />
                If you want to know the secrets that the top 1% use to secure
                and grow their fortunes…
                <br />
                <br />
                Join the Become Your Own Bank Summit and discover the strategies
                that will change your financial future forever.
              </p>
            </ScrollAnimation>

            <div className="flex w-full justify-center lg:justify-start">
              <ScrollAnimation animation="slideUp" delay={0.6}>
                <div>
                  <button
                    onClick={handleButtonClick}
                    className="rounded-[8px] bg-[#E7A647] px-3 py-2"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    I Want To Secure A Spot
                  </button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GGEI
