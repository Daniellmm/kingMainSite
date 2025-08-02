import { useEffect, useState, useRef } from 'react'
import SYOB from '../assets/images/syob.webp'
import SCI from '../assets/images/scifi.webp'
import CHECK from '../assets/images/check.webp'
import AWW from '../assets/images/aww.webp'
import LoanImg from '../assets/images/loan.webp'

import ScrollAnimation from '../component/ScrollAnimation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Button from '../component/ui/Button'
import FundingPageHeader from '../component/FundingPageHeader/FundingPageHeader'

//images
import ss1 from '../assets/images/screenshots/ss1.webp'
import ss2 from '../assets/images/screenshots/ss2.webp'
import ss3 from '../assets/images/screenshots/ss3.webp'
import ss4 from '../assets/images/screenshots/ss4.webp'
import ss5 from '../assets/images/screenshots/ss5.webp'
import ss6 from '../assets/images/screenshots/ss6.webp'
import ss7 from '../assets/images/screenshots/ss7.webp'
import ss8 from '../assets/images/screenshots/ss8.webp'
import ss9 from '../assets/images/screenshots/ss9.webp'
import ss10 from '../assets/images/screenshots/ss10.webp'
import ss11 from '../assets/images/screenshots/ss11.webp'
import ss12 from '../assets/images/screenshots/ss12.webp'
import ss13 from '../assets/images/screenshots/ss13.webp'
import ss14 from '../assets/images/screenshots/ss14.webp'
import ss15 from '../assets/images/screenshots/ss15.webp'
import ss16 from '../assets/images/screenshots/ss16.webp'
import ss17 from '../assets/images/screenshots/ss17.webp'
import ss18 from '../assets/images/screenshots/ss18.webp'
import ss19 from '../assets/images/screenshots/ss19.webp'
import ss20 from '../assets/images/screenshots/ss20.webp'
import ss21 from '../assets/images/screenshots/ss21.webp'
import ss22 from '../assets/images/screenshots/ss22.webp'
import ss23 from '../assets/images/screenshots/ss23.webp'
import ss24 from '../assets/images/screenshots/ss24.webp'
import ss25 from '../assets/images/screenshots/ss25.webp'
import ss26 from '../assets/images/screenshots/ss26.webp'
import ss27 from '../assets/images/screenshots/ss27.webp'
import ss28 from '../assets/images/screenshots/ss28.webp'
import ss29 from '../assets/images/screenshots/ss29.webp'
import Quote from '../component/ui/Quote'

const FORM_URL = 'https://app.gohighlevel.com/v2/preview/q2Q6W6KqHZmQQoYQrO1U'
const URL = 'https://syofb.io'

// Function to handle button clicks
const handleButtonClick = (url) => {
  window.open(url, '_blank')
}

gsap.registerPlugin(ScrollTrigger)

const Funding = () => {
  useEffect(() => {
    gsap.fromTo(
      '.hero-dollar-left',
      {
        x: -100,
        opacity: 0,
        rotation: -20,
      },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)',
        delay: 0.5,
      },
    )

    gsap.fromTo(
      '.hero-dollar-right',
      {
        x: 100,
        opacity: 0,
        rotation: 20,
      },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.3)',
        delay: 0.8,
      },
    )

    gsap.to('.hero-dollar-left', {
      y: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    gsap.to('.hero-dollar-right', {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.5,
    })
  }, [])

  const [currentSlide, setCurrentSlide] = useState(0)
  const [focusedVideo, setFocusedVideo] = useState(1)
  const videoSliderRef = useRef(null)

  const videoSettings = {
    dots: false,
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

  // Initialize videos as state so we can update it
  // const [videos, setVideos] = useState([
  //   'https://www.youtube.com/embed/a9M6uPzQLFs?si=3BgzDhk_uvms2z41',
  //   'https://www.youtube.com/embed/44k0pYbfwm4?si=l-cAkgX0TF3a7eNn',
  //   'https://www.youtube.com/embed/8oc1XzrVKdU?si=WbtIRVhxf5VTWzWX',
  //   'https://www.youtube.com/embed/byzZl7yl0S0?si=14uTPQ7OY-2LVIfX',
  //   'https://www.youtube.com/embed/w_LC8Ov5_sw?si=PlpLCd1Ike7-NwdH',
  //   'https://www.youtube.com/embed/n8L5goJJPXM?si=fvb4uLLlLFRLlRcp',
  //   'https://www.youtube.com/embed/5iAzDrXZ2qY?si=rJj1rhBzzLyRVgNA',
  // ])

  const [videos, setVideos] = useState([
    'https://www.youtube.com/embed/tvciZcF6BPg',
    'https://www.youtube.com/embed/JTzpOMs6Csg',
    'https://www.youtube.com/embed/8oc1XzrVKdU',
    'https://www.youtube.com/embed/byzZl7yl0S0',
    'https://www.youtube.com/embed/r8-lefenM4c',
  ])

  const [images, setImages] = useState([
    ss1,
    ss2,
    ss3,
    ss4,
    ss5,
    ss6,
    ss7,
    ss8,
    ss9,
    ss10,
    ss11,
    ss12,
    ss13,
    ss14,
    ss15,
    ss16,
    ss17,
    ss18,
    ss19,
    ss20,
    ss21,
    ss22,
    ss23,
    ss24,
    ss25,
    ss26,
    ss27,
    ss28,
    ss29,
  ])

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
  const handleButtonClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  // Function to handle button clicks
  const handleFreeClick = () => {
    window.open(FORM_URL, '_blank')
  }

  // Approach 1: Open GHL form in popup, then download PDF
  const handleDownloadClick = () => {
    // Open GHL form in a popup window
    const popup = window.open(
      'https://app.gohighlevel.com/v2/preview/g5WdFPtmhhFwqxoTogJ1?notrack=true',
      'ghlForm',
      'width=600,height=700,scrollbars=yes,resizable=yes',
    )

    // Start PDF download after a short delay
    setTimeout(() => {
      const link = document.createElement('a')
      link.href = '/hack-1.pdf'
      link.download = 'hack.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 20000)
  }

  return (
    <>
      <FundingPageHeader />

      <section className="flex justify-center overflow-hidden bg-white px-10 pt-10">
        {/* <div className="flex flex-col items-center justify-center pt-10"> */}
        <ScrollAnimation animation="fadeIn">
          <div className="">
            <img src={AWW} alt="" />
          </div>
        </ScrollAnimation>
      </section>

      <Quote author="Erick Alvarez" className="lg:px-24">
        This is the most profitable, low start-up cost opportunity available,
        and no extensive education is required—everyone needs capital.
      </Quote>

      <section className="bg-white px-4 pb-10 pt-10 lg:px-5 lg:pt-20">
        <div className="mx-auto my-0 grid w-full max-w-[1800px] grid-rows-1 items-center justify-center gap-10 rounded-3xl border-2 border-black p-4 py-5 md:grid-cols-2 md:p-12 lg:flex-row lg:gap-12 xl:gap-20 2xl:gap-40">
          <div className="flex w-full flex-1">
            <img
              src={LoanImg}
              alt=""
              className="rounded-[38px] shadow-2xl shadow-black"
            />
          </div>

          <div className="flex w-full flex-1 flex-col">
            <h1
              className="bg-gradient-golden-dark bg-clip-text px-4 pb-10 text-center text-3xl font-semibold leading-9 text-[#E7A647] text-transparent md:px-0 md:pb-6 md:text-left md:leading-[1.1] lg:text-start lg:text-[42px] 2xl:text-5xl"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Discover Exactly How
              <span className="hidden md:inline">&nbsp;</span>
              Entrepreneurs Are Launching 7-Figure Funding Businesses From
              Scratch
            </h1>
            <div className="flex w-full min-w-[100wv] justify-center gap-y-5 lg:justify-start">
              <div className="flex w-full min-w-[100wv] flex-col items-center justify-center gap-y-10 rounded-lg py-7">
                {/* <form action="" className='w-full min-w-[100wv]  flex flex-col'>
                  <div className='w-full'>
                    <input
                      type="text"
                      name="phone"
                      placeholder='Name'
                      className="w-full p-3 mb-4 rounded bg-gray-200 text-black placeholder:text-[13px] placeholder:text-black placeholder:font-thin"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="phone"
                      placeholder='Email'
                      className="w-full p-3 mb-4 rounded bg-gray-200 text-black placeholder:text-[13px] placeholder:text-black placeholder:font-thin"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="phone"
                      placeholder='Phone Number'
                      className="w-full p-3 rounded bg-gray-200 text-black placeholder:text-[13px] placeholder:text-black  placeholder:font-thin"
                      required
                    />
                  </div>
                </form> */}

                <div className="flex w-full justify-center md:justify-start">
                  <Button
                    size="large"
                    width="150px"
                    onClick={() => {
                      handleButtonClick(URL)
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-black lg:pb-5">
        <div className="flex flex-col items-center justify-center py-10">
          <ScrollAnimation animation="zoomIn">
            <div>
              <h1
                className="px-10 pb-10 text-center text-3xl font-semibold text-[#E7A647] lg:px-20 lg:text-[45px] lg:leading-[45px]"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Discover the Secrets to Building a Funding Business with{' '}
                <br className="hidden lg:block" />
                Unlimited Earning Potential{' '}
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.6}>
            <div className="px-10 text-start lg:text-start">
              <p
                className="pb-14 font-thin leading-snug text-white md:text-[20px] lg:px-20"
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
              >
                If you’ve ever tried to work in the funding industry, you know
                the biggest challenge is finding financing solutions that
                actually work for your customers—and that skepticism is
                understandable.
                <br /> <br />
                We get it.
                <br /> <br />
                That’s why partnering with High Ticket Offer Financing is the
                smartest and most profitable move you can make. With 12 years of
                experience and nearly $1B funded through word of mouth alone,
                our proven system delivers results. We’ve spent millions of
                dollars building a network of funding experts and capital
                sources that actually work.
                <br /> <br />
                Now, we’re handing you the blueprint to build your own
                successful funding business — with all the tools, resources, and
                training you need to succeed. But don’t just take our word for
                it—listen to these client testimonials.
              </p>
            </div>
          </ScrollAnimation>

          <div className="w-full max-w-[350px] px-4 lg:max-w-2xl">
            <Slider
              ref={videoSliderRef}
              {...videoSettings}
              className="video-slider"
            >
              {/* Videos */}
              {videos.map((video, index) => (
                <div key={`video-${index}`} className="px-2">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <iframe
                      className="h-full w-full"
                      src={video}
                      title={`YouTube video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}

              {/* Images */}
              {images.map((img, index) => (
                <div key={`img-${index}`} className="px-2">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="flex w-full items-center justify-center overflow-hidden bg-white px-10 pb-10 pt-10">
        <div className="flex w-full flex-col items-center justify-center gap-10 pt-7">
          <div className="grid">
            <div className="flex flex-col justify-center gap-y-3 md:px-10 lg:px-24">
              <ScrollAnimation animation="zoomIn">
                <div>
                  <h1
                    className="text-center text-4xl font-semibold leading-[50px] text-[#E7A647] lg:text-start lg:text-[45px]"
                    style={{ fontFamily: 'Minion Pro, serif' }}
                  >
                    Why Starting a Funding Business is the Smartest Move Right
                    Now
                  </h1>
                </div>
              </ScrollAnimation>

              <div className="flex flex-col items-start justify-start gap-y-5 md:text-[20px]">
                <ScrollAnimation animation="slideUp" delay={0.2}>
                  <div className="flex items-center justify-center gap-3 text-black">
                    <img src={CHECK} className="h-7" alt="" />
                    <div>
                      <p
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        {' '}
                        <span className="font-bold">
                          {' '}
                          Unlimited Earning Potential{' '}
                        </span>{' '}
                        – You decide what to charge and how much to earn.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideUp" delay={0.4}>
                  <div className="flex items-center justify-center gap-3 text-black">
                    <img src={CHECK} className="h-7" alt="" />
                    <div>
                      <p
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        {' '}
                        <span className="font-bold">
                          {' '}
                          Simple Business Model{' '}
                        </span>{' '}
                        – Earn capital by simply connecting business owners with
                        funding solutions that work.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeIn" delay={0.6}>
                  <div className="flex items-center justify-center gap-3 text-black">
                    <img src={CHECK} className="h-7" alt="" />
                    <div>
                      <p
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        {' '}
                        <span className="font-bold">
                          {' '}
                          Massive Market Demand{' '}
                        </span>{' '}
                        – 82% of entrepreneurs need cash flow to grow — and
                        you’ll have the solution.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeIn" delay={0.6}>
                  <div className="flex items-center justify-center gap-3 text-black">
                    <img src={CHECK} className="h-7" alt="" />
                    <div>
                      <p
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        {' '}
                        <span className="font-bold"> Minimal Overhead </span> –
                        No need for a large team or expensive infrastructure to
                        get started.{' '}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-black px-5 py-10">
        <div className="flex flex-col items-center justify-center py-10">
          <ScrollAnimation animation="zoomIn">
            <div>
              <h1
                className="pb-10 text-center text-3xl font-semibold text-[#E7A647] lg:px-28 lg:text-[45px]"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Here’s What You’ll Get When You License Our Product:
              </h1>
            </div>
          </ScrollAnimation>

          <div className="flex w-full flex-col items-start justify-start gap-y-7 lg:px-28">
            <ScrollAnimation animation="fadeIn" delay={0.2}>
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-center gap-x-4">
                  <img src={CHECK} className="h-8" alt="" />
                  <p
                    className="text-white md:text-[20px]"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    Complete Training Program{' '}
                  </p>
                </div>

                <div className="pl-16">
                  <p
                    className="font-thin leading-[30px] text-white md:text-[18px]"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    ● Step-by-step guidance on how to structure, launch, and
                    scale your funding business. <br />● Learn how to market
                    your business and attract high-quality clients.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.4}>
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-center gap-x-4">
                  <img src={CHECK} className="h-8" alt="" />
                  <p
                    className="text-white md:text-[20px]"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    {' '}
                    1-on-1 Coaching{' '}
                  </p>
                </div>

                <div className="pl-16">
                  <p
                    className="font-thin leading-[30px] text-white md:text-[18px]"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    ● Work directly with funding experts who have built 7 and
                    8-figure funding businesses. <br />● Get personalized
                    support to troubleshoot challenges and accelerate your
                    growth.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.6}>
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-center gap-x-4">
                  <img src={CHECK} className="h-8" alt="" />
                  <p
                    className="text-white md:text-[20px]"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    Access to ALL Funding Options{' '}
                  </p>
                </div>

                <div className="pl-16">
                  <p
                    className="font-thin leading-[30px] text-white md:text-[18px]"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    ● No-doc personal funding – Up to $150,000 <br />
                    ● 0% Business Credit – Up to 12 months <br />
                    ● Long-term, low-interest business lines of credit – Up to
                    $3M <br />
                    ● Home Equity Lines of Credit (HELOC) – Up to $4M <br />●
                    And more…
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.8}>
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-center gap-x-4">
                  <img src={CHECK} className="h-8" alt="" />
                  <p
                    className="text-white md:text-[20px]"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    Exclusive Funding Network{' '}
                  </p>
                </div>

                <div className="pl-16">
                  <p
                    className="font-thin leading-[30px] text-white md:text-[18px]"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    ● Tap into a network of lenders and funding products that
                    have been tested and proven to work. <br />● We’ve done the
                    hard work of building relationships with funding partners —
                    you just need to connect the dots.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.9}>
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-center gap-x-4">
                  <img src={CHECK} className="h-8" alt="" />
                  <p
                    className="text-white md:text-[20px]"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    Charge What You Want{' '}
                  </p>
                </div>

                <div className="pl-16">
                  <p
                    className="font-thin leading-[30px] text-white md:text-[18px]"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    ● This is your business — you control the pricing. <br />●
                    Earn significant fees on every deal you close, creating
                    consistent cash flow and scalable revenue.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center overflow-hidden bg-white px-10 pb-14">
        <div className="flex items-center justify-center pt-5">
          <div className="grid lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <ScrollAnimation animation="slideRight">
                <div className="pb-10">
                  <img src={SYOB} className="md:h-[500px]" alt="" />
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation animation="slideLeft">
              <div className="flex h-full flex-col justify-center gap-y-5 md:px-10 lg:px-6">
                <div>
                  <h1
                    className="text-center text-4xl font-semibold leading-[50px] text-[#E7A647] lg:text-start lg:text-[45px]"
                    style={{ fontFamily: 'Minion Pro, serif' }}
                  >
                    Why This Business Is So Profitable?
                  </h1>
                </div>

                <div>
                  <p
                    className="text-start leading-[30px] text-gray-700 md:text-[20px] lg:text-start"
                    style={{ fontFamily: 'Montserrat, serif' }}
                  >
                    Most entrepreneurs don’t know where to turn for funding — or
                    they’ve been burned by funding companies that overpromise
                    and underdeliver.
                    <br />
                    <br /> You’ll have the power to give them the capital they
                    need to grow — and you’ll get paid handsomely for doing it.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center overflow-hidden bg-black px-10 py-10 pb-8">
        <div className="flex items-center justify-center pt-6">
          <div className="grid grid-rows-1 lg:grid-cols-2">
            <div className="items-ecnter bg- flex w-full justify-center lg:pl-20">
              <div className="flex flex-col justify-center gap-y-3 md:px-10 lg:px-5">
                <ScrollAnimation animation="zoomIn">
                  <div>
                    <h1
                      className="text-center text-4xl font-semibold leading-[50px] text-[#E7A647] lg:text-start lg:text-[45px]"
                      style={{ fontFamily: 'Minion Pro, serif' }}
                    >
                      Start Your Own Funding Business
                    </h1>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideUp">
                  <div>
                    <p
                      className="text-center font-thin text-white md:text-[20px] lg:text-start"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontWeight: 'medium',
                      }}
                    >
                      If you’ve been looking for a business model that:{' '}
                    </p>
                  </div>
                </ScrollAnimation>

                <div className="flex flex-col items-start justify-start gap-y-5 md:text-[20px]">
                  <ScrollAnimation animation="slideRight" delay={0.2}>
                    <div className="flex items-center justify-center gap-3 text-white">
                      <img src={CHECK} className="h-7" alt="" />
                      <div>
                        <p
                          style={{
                            fontFamily: 'Montserrat, serif',
                            fontWeight: 'medium',
                          }}
                        >
                          {' '}
                          Has unlimited earning potential
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="slideRight" delay={0.4}>
                    <div className="flex items-center justify-center gap-3 text-white">
                      <img src={CHECK} className="h-7" alt="" />
                      <div>
                        <p
                          style={{
                            fontFamily: 'Montserrat, serif',
                            fontWeight: 'medium',
                          }}
                        >
                          {' '}
                          Solves a real problem for business owners{' '}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="slideRight" delay={0.6}>
                    <div className="flex items-center justify-center gap-3 text-white">
                      <img src={CHECK} className="h-7" alt="" />
                      <div>
                        <p
                          style={{
                            fontFamily: 'Montserrat, serif',
                            fontWeight: 'medium',
                          }}
                        >
                          {' '}
                          Requires minimal overhead and setup costs{' '}
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="slideRight" delay={0.8}>
                    <div className="flex items-center justify-center gap-3 text-white">
                      <img src={CHECK} className="h-7" alt="" />
                      <div>
                        <p
                          style={{
                            fontFamily: 'Montserrat, serif',
                            fontWeight: 'medium',
                          }}
                        >
                          {' '}
                          Works in ANY economy
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation animation="slideUp">
                    <div className="flex items-center justify-center gap-3 text-white">
                      <div>
                        <p
                          className="font-thin"
                          style={{
                            fontFamily: 'Montserrat, serif',
                            fontWeight: 'medium',
                          }}
                        >
                          Then this is your moment.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>

            <ScrollAnimation animation="slideLeft">
              <div className="flex items-center justify-center pt-8 lg:pt-0">
                <div className="">
                  <img src={SCI} className="md:h-[400px]" alt="" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="flex min-h-[40vh] w-full items-center justify-center overflow-hidden bg-white px-5">
        <div className="flex flex-col items-center justify-center gap-y-5 text-[#E7A647]">
          <ScrollAnimation animation="zoomIn">
            <h1
              className="text-center text-4xl font-semibold lg:text-start lg:text-[45px]"
              style={{ fontFamily: 'Minion Pro, serif', fontWeight: 700 }}
            >
              Spots Are Filling Fast – Secure Yours Today!{' '}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div className="pt-7">
              <button
                onClick={() => handleButtonClick(URL)}
                className="rounded-[8px] bg-[#E7A647] px-3 py-3 text-black"
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
              >
                Your Journey Starts Here
              </button>
            </div>
          </ScrollAnimation>

          <div className="mt-5 h-[1px] w-full bg-black"></div>
        </div>
      </section>
    </>
  )
}

export default Funding
