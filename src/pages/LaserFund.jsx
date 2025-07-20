import React, { useEffect, useState, useRef } from 'react'
import MText from '../assets/images/png4.png'
import LEFT from '../assets/images/bg-live/leftimg.png'
import RIGHT from '../assets/images/bg-live/rightimg.png'
import DISC from '../assets/images/disc.png'
import PHONEIMG from '../assets/images/tradingPHONE.png'
import CHECK from '../assets/images/check.png'
import LASER from '../assets/images/laser.png'
import CIRCLE from '../assets/images/circle.png'
import READ from '../assets/images/read.png'
import LONG from '../assets/images/long.png'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ARROWD from '../assets/images/arrowD.png'
import CHART from '../assets/images/chart.png'
import LAY from '../assets/images/lay.png'
import ScrollAnimation from '../component/ScrollAnimation'
import { gsap } from 'gsap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import testimonial1 from '../assets/images/imageTest/testi1.png'
import testimonial2 from '../assets/images/imageTest/testi2.png'
import testimonial3 from '../assets/images/imageTest/testi3.png'
import testimonial4 from '../assets/images/imageTest/testi4.png'
import testimonial5 from '../assets/images/imageTest/testi5.png'
import testimonial6 from '../assets/images/imageTest/testi6.png'
import testimonial7 from '../assets/images/imageTest/testi7.png'
import testimonial8 from '../assets/images/imageTest/testi8.png'
import testimonial9 from '../assets/images/imageTest/testi9.png'
import testimonial10 from '../assets/images/imageTest/testi10.png'
import testimonial11 from '../assets/images/imageTest/testi11.png'
import testimonial12 from '../assets/images/imageTest/testi12.png'
import testimonial13 from '../assets/images/imageTest/testi13.png'
import testimonial14 from '../assets/images/imageTest/testi14.png'
import testimonial15 from '../assets/images/imageTest/testi15.png'
import testimonial16 from '../assets/images/imageTest/testi16.png'
import testimonial17 from '../assets/images/imageTest/testi17.png'

const testimonials = [
  {
    id: 1,
    image: testimonial1,
    name: 'Joshua',
    quote: 'Transformed my business with their funding solutions!',
  },
  {
    id: 2,
    image: testimonial2,
    name: 'Matt',
    quote: 'Incredible support and results beyond expectations.',
  },
  {
    id: 3,
    image: testimonial3,
    name: 'Rene',
    quote: 'A game-changer for entrepreneurs needing capital.',
  },
  {
    id: 4,
    image: testimonial4,
    name: 'Demarcus',
    quote: 'Fast, reliable, and easy to work with.',
  },
  {
    id: 5,
    image: testimonial5,
    name: 'Najibul',
    quote: 'Helped me scale my startup effortlessly.',
  },
  {
    id: 6,
    image: testimonial6,
    name: 'Robert',
    quote: 'The best funding partner I’ve ever had.',
  },
  {
    id: 7,
    image: testimonial7,
    name: 'Jeremy',
    quote: 'Their expertise made all the difference.',
  },
  {
    id: 8,
    image: testimonial8,
    name: 'Lemy',
    quote: 'Secured funding when I needed it most.',
  },
  {
    id: 9,
    image: testimonial9,
    name: 'Raul',
    quote: 'A seamless experience from start to finish.',
  },
  {
    id: 10,
    image: testimonial10,
    name: 'Sarah',
    quote: 'Empowered my business to grow rapidly.',
  },
  {
    id: 11,
    image: testimonial11,
    name: 'Juwan',
    quote: 'Professional and results-driven.',
  },
  {
    id: 12,
    image: testimonial12,
    name: 'Daniel',
    quote: 'Funding made simple and accessible.',
  },
  {
    id: 13,
    image: testimonial13,
    name: 'Bernicia',
    quote: 'They truly understand entrepreneurs’ needs.',
  },
  {
    id: 14,
    image: testimonial14,
    name: 'Tyrone',
    quote: 'Unmatched support for business growth.',
  },
  {
    id: 15,
    image: testimonial15,
    name: 'Abdullah',
    quote: 'A trusted partner for funding success.',
  },
  {
    id: 16,
    image: testimonial16,
    name: 'Corboi',
    quote: 'Helped me achieve my business goals.',
  },
  {
    id: 17,
    image: testimonial17,
    name: 'Brittany',
    quote: 'Their system is a total game-changer.',
  },
]

const FORM_URL = 'https://www.laserfundpamm.com/new-disclaimer-page'

const LaserFund = () => {
  const sliderRef = useRef(null)
  const videoSliderRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Sample images for the slider
  const images = ['/1.jpeg', '/2.jpeg', '/3.jpeg', '/4.jpeg']

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    arrows: true,
    centerMode: true,
  }

  const videoSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
  }

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

  const [videos, setVideos] = useState([
    'https://www.youtube.com/embed/6h-KSsq1lRQ',
    'https://www.youtube.com/embed/CYyTxYAEtxM',
    'https://www.youtube.com/embed/RHAKwL1vrxc',
    'https://www.youtube.com/embed/3ypIhaaqzKQ',
  ])

  const handleButtonClick = () => {
    window.open(FORM_URL, '_blank')
  }

  return (
    <>
      {/* <section className='relative overflow-hidden pb-10 bg-black flex justify-center items-center min-h-[70vh] md:min-h-0 md:rounded-br-[100px] md:rounded-bl-[100px]'>
        <div className='z-10 relative pt-20 w-full flex flex-col justify-center items-center'>
          <ScrollAnimation animation="zoomIn" delay={0.5}>
            <div className='pb-2'>
              <h1 className="lg:text-8xl text-4xl px-2 uppercase text-center font-bold bg-gradient-to-r from-[#E7A647] to-[#855B1F] bg-clip-text text-transparent" style={{ fontFamily: 'Minion Pro, serif' }}>
                Become a Master Trader
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.5}>
            <div className='flex justify-center'>
              <p className='text-white px-4 pb-8 text-center text-sm uppercase md:leading-[35px] md:text-[26px]' style={{ fontFamily: 'Minion Pro, serif' }}>
                Master the markets, build wealth, create passive income,
                and learn the secrets to successful trading.
                <span className='text-[#e7a647]'> Watch this video.</span>
              </p>

              <div className='flex items-end'>
                <img src={ARROWD} className='animate-bounce lg:pl-4 pr-1' alt="" />
              </div>
            </div>

            <div className='flex justify-center w-full'>
              <iframe className='lg:w-[850px] px-5 pb-5 rounded-2xl md:w-[540px] w-[340px] h-[250px] lg:rounded-[50px] lg:h-[415px]'
                src="https://www.youtube.com/embed/zlPMJyeH6ko?si=qQ_V6yqfwp4PBmen"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                loading="lazy"
              >
              </iframe>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div>
              <button
                onClick={handleButtonClick}
                className='bg-[#E7A647] px-3 py-2 rounded-[8px]'
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                Meet the Team
              </button>
            </div>
          </ScrollAnimation>
        </div>

        <div className='absolute top-[230px] left-[-40px]'>
          <img src={LEFT} alt="" className='h-[100px] md:h-[120px] lg:h-40 hero-dollar-left' />
        </div>
        <div className='absolute bottom-[100px] right-[0px]'>
          <img src={RIGHT} alt="" className='h-[100px] md:h-[120px] lg:h-40 hero-dollar-right' />
        </div>
        <div className='w-full h-full bg-black opacity-60 inset-0 absolute'></div>
      </section> */}

      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden rounded-bl-[35px] rounded-br-[35px] bg-black md:min-h-0 md:rounded-bl-[100px] md:rounded-br-[100px]">
        <div className="relative z-10 flex w-full flex-col items-center justify-center pl-4 pr-4 pt-24 md:max-w-[800px] md:flex-row md:gap-8 lg:max-w-[1800px] lg:pl-24 lg:pr-24">
          <div className="grow-1 flex w-[90%] flex-col items-center md:mr-8 md:w-full md:items-start lg:mr-48">
            <ScrollAnimation animation="zoomIn" delay={0.5}>
              <div className="pb-2">
                <h1
                  className="px-4 py-0 text-center text-lg font-bold uppercase leading-tight text-white md:text-left md:text-2xl lg:text-5xl"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <span
                    className="bg-gradient-to-r from-[#E7A647] to-[#855B1F] bg-clip-text text-transparent"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Trading, Education
                    <br />
                  </span>
                  & AutomatioN Network
                </h1>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="zoomIn" delay={0.5} className="grow-1">
              <div className="flex justify-center">
                <p
                  className="px-5 pb-4 text-center text-[10px] uppercase text-white md:text-left md:text-[12px] lg:text-[14px]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Master the markets, build wealth, create passive income, and
                  learn the secrets to successful trading.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="zoomIn" delay={0.5} className="grow-1">
              <div className="mt-0 flex flex-col gap-x-4 gap-y-0 space-y-4 md:flex-row md:pl-4">
                <button
                  className="flex w-[170x] items-center justify-center rounded-full px-7 py-2 text-xs font-semibold text-black shadow-md md:mt-4"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    background:
                      'linear-gradient(90deg, #E7A647 0%, #FFD76B 50%, #855B1F 100%)',
                    fontWeight: 600,
                  }}
                >
                  Watch Video
                </button>

                <button
                  className="mt-4 flex w-[170px] items-center justify-center rounded-full bg-[#00B67A] px-7 py-2 text-xs font-semibold text-black shadow-md"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  Learn More
                </button>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="slideUp" delay={0.7}>
            <div className="relative -bottom-[46px] aspect-[340/600] w-[14rem] md:-bottom-[50px] lg:-bottom-[71px] lg:aspect-[490/900] lg:w-[21rem]">
              <img
                src={PHONEIMG}
                alt="phone image"
                width={340}
                height={600}
                className="block aspect-[340/600] h-auto w-full object-contain lg:aspect-[490/900]"
                style={{ display: 'block' }}
                loading="lazy"
              />
            </div>
          </ScrollAnimation>
        </div>

        <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div>
      </section>

      <section className="flex items-center justify-center overflow-hidden bg-white px-10 pb-14">
        <div className="flex items-center justify-center pt-10 lg:px-10">
          <div className="grid gap-y-10 lg:grid-cols-2">
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className="flex justify-center">
                <img src={DISC} className="md:h-[500px]" alt="" />
              </div>
            </ScrollAnimation>

            <div className="flex flex-col items-center justify-center gap-y-6 lg:items-start">
              <ScrollAnimation animation="zoomIn">
                <h1
                  className="text-center text-3xl font-semibold text-[#E7A647] md:text-start lg:text-start lg:text-[45px]"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                >
                  Want to learn Crypto?{' '}
                </h1>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.3}>
                <div>
                  <p
                    className="text-center md:text-[20px] lg:text-start"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    Get our “Buy The Dip Crypto Series (Beginners Guide): How I
                    7x’d My Crypto Portfolio in 3 Months Buying & Selling Crypto
                    on Coinbase."
                  </p>
                </div>
              </ScrollAnimation>

              <div className="flex w-full items-center justify-center lg:justify-start">
                <ScrollAnimation animation="slideUp" delay={0.4}>
                  <div>
                    <button
                      onClick={handleButtonClick}
                      className="rounded-[8px] bg-[#E7A647] px-5 py-3"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontWeight: 'medium',
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center overflow-hidden bg-black py-10 pb-14">
        <div className="flex flex-col items-start justify-center pt-10 lg:px-40">
          <ScrollAnimation animation="zoomIn">
            <div>
              <h1
                className="px-10 text-center text-3xl font-semibold text-[#E7A647] md:text-start lg:text-start lg:text-[45px] lg:leading-[45px]"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Are you ready to take control of your financial future?
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideDown" delay={0.1}>
            <div>
              <p
                className="px-10 py-5 text-start tracking-wider text-white md:text-[18px] lg:text-start lg:leading-[25px]"
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
              >
                Whether you’re a beginner or an experienced trader, The Laser
                Fund PAMM Trading, Automation & Education Network will equip you
                with the skills, strategies, and tools you need to master the
                markets and create long-term wealth.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideDown" delay={0.2}>
            <div>
              <h1
                className="px-10 pb-3 text-start text-lg text-white md:text-[19px] lg:text-start"
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
              >
                We provide comprehensive training in:{' '}
              </h1>
            </div>
          </ScrollAnimation>

          <div className="flex flex-col items-start justify-start gap-y-5 px-5 md:text-[18px]">
            <ScrollAnimation animation="slideDown" delay={0.3}>
              <div className="flex items-center justify-center gap-3 text-white">
                <img src={CHECK} className="h-7" alt="" />
                <div>
                  <p
                    className="font-thin"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    <span className="font-bold"> Forex Trading </span> – Learn
                    how to navigate the $7 trillion-a-day forex market and
                    capitalize on currency movements.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideDown" delay={0.4}>
              <div className="flex items-center justify-center gap-3 text-white">
                <img src={CHECK} className="h-7" alt="" />
                <div>
                  <p
                    className="font-thin"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    <span className="font-bold"> Futures Trading </span> –
                    Discover how to trade commodities, indexes, and more with
                    precision and confidence.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideDown" delay={0.5}>
              <div className="flex items-center justify-center gap-3 text-white">
                <img src={CHECK} className="h-7" alt="" />
                <div>
                  <p
                    className="font-thin"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    <span className="font-bold"> Crypto Spot Trading </span> –
                    Understand the volatility and opportunity in the digital
                    currency markets and how to profit from it, today!
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div></div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Video Column */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <video
                className="h-64 w-full object-cover md:h-80 lg:h-96"
                controls
                // poster="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
              >
                <source src="/man.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* <div className="mt-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Featured Video</h3>
            <p className="text-gray-600">Experience our latest content in high definition. This video showcases the best of what we have to offer.</p>
          </div> */}
          </div>

          {/* Image Slider Column */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              {/* Main Image Display */}
              <div className="relative h-64 md:h-80 lg:h-80">
                <img
                  src={images[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  className="h-full w-full object-cover transition-opacity duration-500"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white transition-all duration-200 hover:bg-opacity-75"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white transition-all duration-200 hover:bg-opacity-75"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Slide Counter */}
                <div className="absolute bottom-4 right-4 rounded-full bg-black bg-opacity-50 px-3 py-1 text-sm text-white">
                  {currentSlide + 1} / {images.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="mt-4 flex justify-center space-x-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-12 w-16 overflow-hidden rounded-md border-2 transition-all duration-200 ${
                      currentSlide === index
                        ? 'border-blue-500 opacity-100'
                        : 'border-gray-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* <div className="mt-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Image Gallery</h3>
            <p className="text-gray-600">Browse through our curated collection of stunning visuals. Use the arrows or thumbnails to navigate.</p>
          </div> */}
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center overflow-hidden bg-white pb-14">
        <div className="flex items-center justify-center pt-10 lg:px-10">
          <div className="grid gap-x-10 gap-y-10 lg:grid-cols-2">
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className="flex justify-center">
                <img src={LASER} className="px-10 md:px-0 lg:pt-16" alt="" />
              </div>
            </ScrollAnimation>

            <div className="flex flex-col justify-center gap-y-5 md:text-[18px]">
              <ScrollAnimation animation="zoomIn">
                <h1
                  className="px-10 text-center text-3xl font-semibold text-[#E7A647] lg:text-start lg:text-[45px] lg:leading-[45px]"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                >
                  The Laser Fund PAMM Trading, Automation & Education Network
                </h1>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" delay={0.2}>
                <p
                  className="px-10 text-start font-bold lg:text-start"
                  style={{
                    fontFamily: 'Montserrat, serif',
                    fontWeight: 'medium',
                  }}
                >
                  You get the following:
                </p>
              </ScrollAnimation>

              <div className="flex flex-col gap-y-4 px-5">
                <ScrollAnimation animation="slideLeft" delay={0.3}>
                  <div className="flex items-start justify-start gap-x-3">
                    <div>
                      <img src={CIRCLE} className="pt-2" alt="" />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-y-1">
                      <h1
                        className="font-bold"
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        1-on-1 Coaching
                      </h1>
                      <p
                        className="font-thin"
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        Get personal guidance from seasoned trading experts. Our
                        tailored coaching sessions help you develop a winning
                        strategy and avoid costly mistakes.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.4}>
                  <div className="flex items-start justify-start gap-x-3">
                    <div>
                      <img src={CIRCLE} className="pt-2" alt="" />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-y-1">
                      <h1
                        className="font-bold"
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        Proven Strategies
                      </h1>
                      <p
                        className="font-thin"
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        Learn the exact methods used by professional traders to
                        generate consistent profits in the forex, futures, and
                        crypto markets.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.5}>
                  <div className="flex items-start justify-start gap-x-3">
                    <div>
                      <img src={CIRCLE} className="pt-2" alt="" />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-y-1">
                      <h1
                        className="font-bold"
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        Live Trading Sessions
                      </h1>
                      <p
                        className="font-thin"
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        Watch and learn from live market trades, understand
                        market movements in real-time, and ask questions as they
                        happen.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.6}>
                  <div className="flex items-start justify-start gap-x-3">
                    <div>
                      <img src={CIRCLE} className="pt-2" alt="" />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-y-1">
                      <h1
                        className="font-bold"
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        Community of Traders
                      </h1>
                      <p
                        className="font-thin"
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        Join a thriving community of like-minded traders. Share
                        insights, ask questions, and grow together with the
                        support of experienced mentors and fellow traders.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.7}>
                  <div className="flex items-start justify-start gap-x-3">
                    <div>
                      <img src={CIRCLE} className="pt-2" alt="" />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-y-1">
                      <h1
                        className="font-bold"
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        Passive Income Opportunities
                      </h1>
                      <p
                        className="font-thin"
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        We don’t just teach you how to trade—we show you how to
                        create consistent passive income through strategic
                        investing, automated trading bots, and other
                        income-generating strategies.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center overflow-hidden bg-black px-10 pb-14">
        <div className="flex items-center justify-center pt-10 lg:px-20">
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
            <div className="flex flex-col justify-center gap-y-5">
              <ScrollAnimation animation="zoomIn">
                <h1
                  className="text-center text-3xl font-semibold text-[#E7A647] lg:text-start lg:text-[45px] lg:leading-[45px]"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                >
                  What You’ll Have Access To
                </h1>
              </ScrollAnimation>

              <div
                className="flex flex-col items-start gap-y-4 md:text-[20px]"
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
              >
                <ScrollAnimation animation="slideRight" delay={0.2}>
                  <div className="flex items-center justify-center gap-x-2 text-white">
                    <div className="h-1 w-1 rounded-full bg-white"></div>
                    <p
                      className="font-thin"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontWeight: 'medium',
                      }}
                    >
                      <span className="font-bold">
                        20+ in-depth training modules{' '}
                      </span>{' '}
                      teaching you how to trade.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="slideRight" delay={0.3}>
                  <div className="flex items-center justify-center gap-x-2 text-white">
                    <div className="h-1 w-1 rounded-full bg-white"></div>
                    <p
                      className="font-thin"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontWeight: 'medium',
                      }}
                    >
                      <span className="font-bold">
                        Automated trading algorithms{' '}
                      </span>{' '}
                      – We’ll show you the exact algorithms we use to generate
                      cash on demand.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="slideRight" delay={0.4}>
                  <div className="flex items-center justify-center gap-x-2 text-white">
                    <div className="h-1 w-1 rounded-full bg-white"></div>
                    <p
                      className="font-thin"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontWeight: 'medium',
                      }}
                    >
                      <span className="font-bold">
                        “Buy the Dip” Crypto Series
                      </span>{' '}
                      – How I 7x’d my crypto portfolio in just 3 months using
                      spot trading on Coinbase.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="slideRight" delay={0.5}>
                  <div className="flex items-center justify-center gap-x-2 text-white">
                    <div className="h-1 w-1 rounded-full bg-white"></div>
                    <p
                      className="font-bold"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontWeight: 'medium',
                      }}
                    >
                      And so much more…
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <ScrollAnimation animation="slideLeft" delay={0.4}>
              <div>
                <img src={READ} className="lg:pt-16" alt="" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center overflow-hidden bg-white pb-14">
        <div className="flex h-full items-center justify-center pt-10 lg:px-10">
          <div className="grid gap-x-11 gap-y-10 lg:grid-cols-2">
            <div className="flex h-full justify-center">
              <ScrollAnimation animation="slideRight" delay={0.3}>
                <div className="flex justify-center px-10">
                  <img src={CHART} alt="" />
                </div>
              </ScrollAnimation>
            </div>

            <div className="flex flex-col justify-center">
              <ScrollAnimation animation="zoomIn" delay={0.1}>
                <div className="px-5">
                  <h1
                    className="text-center text-3xl font-semibold text-[#E7A647] lg:text-start lg:text-[45px] lg:leading-[45px]"
                    style={{ fontFamily: 'Minion Pro, serif' }}
                  >
                    Perfect for All Skill Levels
                  </h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.2}>
                <p
                  className="px-10 pb-5 pt-5 text-start text-gray-600 md:text-[20px] lg:text-start"
                  style={{
                    fontFamily: 'Montserrat, serif',
                    fontWeight: 'medium',
                  }}
                >
                  Whether you’ve never placed a trade before or you’ve been
                  trading for years, our platform is designed to meet you where
                  you are and take you to the next level.
                </p>
              </ScrollAnimation>

              <div
                className="flex flex-col items-start justify-start gap-y-5 px-5 md:text-[18px]"
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
              >
                <ScrollAnimation animation="slideUp" delay={0.3}>
                  <div className="flex items-center justify-center gap-3 text-black">
                    <img src={CHECK} className="h-7" alt="" />
                    <div>
                      <p
                        className="font-[400] text-gray-700"
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        <span className="font-bold"> Beginners </span> : Start
                        with the basics—learn how the markets work and how to
                        trade with confidence.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideUp" delay={0.4}>
                  <div className="flex items-center justify-center gap-3 text-black">
                    <img src={CHECK} className="h-7" alt="" />
                    <div>
                      <p
                        className="font-[400] text-gray-700"
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        <span className="font-bold">
                          {' '}
                          Intermediate Traders{' '}
                        </span>
                        : Refine your strategy, improve your execution, and
                        increase your profits.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideUp" delay={0.5}>
                  <div className="flex items-center justify-center gap-3 text-black">
                    <img src={CHECK} className="h-7" alt="" />
                    <div>
                      <p
                        className="font-[400] text-gray-700"
                        style={{
                          fontFamily: 'Montserrat, serif',
                          fontWeight: 'medium',
                        }}
                      >
                        <span className="font-bold"> Advanced Traders </span> :
                        Gain access to proprietary strategies and market
                        insights from top industry professionals.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="youtube-video-section flex flex-col items-center justify-center overflow-hidden bg-black pb-10">
        <div className="flex flex-col items-center justify-center gap-y-3 pt-10 lg:pt-16">
          <ScrollAnimation animation="slideDown" delay={0.2}>
            <h1
              className="px-10 text-center text-lg font-extralight uppercase tracking-[4px] text-gray-500"
              style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
            >
              Trusted by Professionals Like You
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={0.1}>
            <h1
              className="px-10 pb-10 text-center text-4xl font-semibold text-[#E7A647] lg:text-[45px]"
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              Client Success Stories
            </h1>
          </ScrollAnimation>

          <div className="w-full max-w-[350px] px-4 lg:max-w-3xl">
            <Slider
              ref={videoSliderRef}
              {...videoSettings}
              className="video-slider"
            >
              {videos.map((video, index) => (
                <div key={index} className="px-2">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <iframe
                      className="h-full w-full"
                      src={video}
                      title={`YouTube video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center overflow-hidden bg-black pb-10">
        <div>
          <ScrollAnimation animation="zoomIn" delay={0.1}>
            <h1
              className="px-10 pt-10 text-center text-4xl font-semibold text-[#E7A647] lg:text-[45px]"
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              Image Proof Of Our Client's Success
            </h1>
          </ScrollAnimation>
        </div>

        <div className="">
          <div className="relative w-full bg-black py-12 md:py-16">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
              <Slider
                ref={sliderRef}
                {...settings}
                className="testimonial-slider"
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-slide px-2">
                    <div className="rounded-xl占有overflow-hidden shadow-2xl">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-b from-gray-800 to-gray-900">
                        <img
                          src={testimonial.image}
                          alt={`Testimonial by ${testimonial.name}`}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center overflow-hidden bg-white pb-14">
        <div className="flex items-center justify-center pt-10 lg:px-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <ScrollAnimation animation="zoomIn">
                <div className="px-10">
                  <h1
                    className="text-center text-3xl font-semibold text-[#E7A647] lg:text-start lg:text-[45px] lg:leading-[45px]"
                    style={{ fontFamily: 'Minion Pro, serif' }}
                  >
                    LIMITED SPOTS AVAILABLE
                  </h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" delay={0.2}>
                <p
                  className="px-10 pb-5 pt-5 text-start font-light text-gray-600 md:text-[20px] lg:text-start"
                  style={{ fontFamily: 'Montserrat, serif' }}
                >
                  Join The Laser Fund PAMM Trading, Automation & Education
                  Network today and get:
                </p>
              </ScrollAnimation>
              <div
                className="flex flex-col items-start justify-start gap-y-5 px-5 text-gray-500 md:text-[18px]"
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
              >
                <ScrollAnimation animation="slideLeft" delay={0.3}>
                  <div className="flex items-center justify-center gap-3">
                    <img src={CHECK} className="h-7" alt="" />
                    <div>
                      <p>
                        {' '}
                        Full access to our forex, futures, and crypto trading
                        education{' '}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.4}>
                  <div className="flex items-center justify-center gap-3">
                    <img src={CHECK} className="h-7" alt="" />
                    <div>
                      <p> Weekly live trading sessions </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.5}>
                  <div className="flex items-center justify-center gap-3">
                    <img src={CHECK} className="h-7" alt="" />
                    <div>
                      <p> 1-on-1 coaching with trading experts </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.6}>
                  <div className="flex items-center justify-center gap-3">
                    <img src={CHECK} className="h-7" alt="" />
                    <div>
                      <p>
                        {' '}
                        Access to passive income strategies and automation
                        tools{' '}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <div className="flex min-h-full w-full justify-center">
              <ScrollAnimation animation="slideRight" delay={0.5}>
                <div className="px-10">
                  <img src={LAY} className="md:w-[600px]" alt="" />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full items-center justify-center overflow-hidden bg-black px-10 py-10">
        <div className="flex flex-col items-center justify-center gap-y-5">
          <ScrollAnimation animation="zoomIn">
            <h1
              className="text-center text-3xl font-semibold leading-[45px] text-[#E7A647] lg:text-[45px]"
              style={{ fontFamily: 'Minion Pro, serif', fontWeight: 700 }}
            >
              BONUS: Free Trading Strategy Session instead of Free Trading
              Strategy Guide. ($1,997 Value)!
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.3}>
            <h2
              className="pb-5 text-center text-xl font-semibold text-white md:text-[28px]"
              style={{
                fontFamily: 'Montserrat, serif',
                fontWeight: 200,
                fontStyle: 'normal',
              }}
            >
              Don’t miss this opportunity to transform your financial future.
            </h2>
            <h2
              className="font- text-center text-xl text-white md:text-[22px]"
              style={{
                fontFamily: 'Montserrat, serif',
                fontWeight: 200,
                fontStyle: 'normal',
              }}
            >
              Click Below to Get Started Now!
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="slideUp" delay={0.5}>
            <div className="pt-7">
              <button
                onClick={handleButtonClick}
                className="rounded-[8px] bg-[#E7A647] px-3 py-3 text-black"
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
              >
                Meet the Team
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

export default LaserFund
