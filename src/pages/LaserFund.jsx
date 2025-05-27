import React, { useEffect, useState, useRef } from 'react'
import MText from '../assets/images/png4.png'
import LEFT from '../assets/images/bg-live/leftimg.png'
import RIGHT from '../assets/images/bg-live/rightimg.png'
import DISC from '../assets/images/disc.png'
import CHECK from '../assets/images/check.png'
import LASER from '../assets/images/laser.png'
import CIRCLE from '../assets/images/circle.png'
import READ from '../assets/images/read.png'
import LONG from '../assets/images/long.png'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ARROWD from '../assets/images/arrowD.png'
import CHART from '../assets/images/chart.png'
import LAY from '../assets/images/lay.png'
import ScrollAnimation from '../component/ScrollAnimation'
import { gsap } from 'gsap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import testimonial1 from '../assets/images/imageTest/testi1.png';
import testimonial2 from '../assets/images/imageTest/testi2.png';
import testimonial3 from '../assets/images/imageTest/testi3.png';
import testimonial4 from '../assets/images/imageTest/testi4.png';
import testimonial5 from '../assets/images/imageTest/testi5.png';
import testimonial6 from '../assets/images/imageTest/testi6.png';
import testimonial7 from '../assets/images/imageTest/testi7.png';
import testimonial8 from '../assets/images/imageTest/testi8.png';
import testimonial9 from '../assets/images/imageTest/testi9.png';
import testimonial10 from '../assets/images/imageTest/testi10.png';
import testimonial11 from '../assets/images/imageTest/testi11.png';
import testimonial12 from '../assets/images/imageTest/testi12.png';
import testimonial13 from '../assets/images/imageTest/testi13.png';
import testimonial14 from '../assets/images/imageTest/testi14.png';
import testimonial15 from '../assets/images/imageTest/testi15.png';
import testimonial16 from '../assets/images/imageTest/testi16.png';
import testimonial17 from '../assets/images/imageTest/testi17.png';

const testimonials = [
  { id: 1, image: testimonial1, name: 'Joshua', quote: 'Transformed my business with their funding solutions!' },
  { id: 2, image: testimonial2, name: 'Matt', quote: 'Incredible support and results beyond expectations.' },
  { id: 3, image: testimonial3, name: 'Rene', quote: 'A game-changer for entrepreneurs needing capital.' },
  { id: 4, image: testimonial4, name: 'Demarcus', quote: 'Fast, reliable, and easy to work with.' },
  { id: 5, image: testimonial5, name: 'Najibul', quote: 'Helped me scale my startup effortlessly.' },
  { id: 6, image: testimonial6, name: 'Robert', quote: 'The best funding partner I’ve ever had.' },
  { id: 7, image: testimonial7, name: 'Jeremy', quote: 'Their expertise made all the difference.' },
  { id: 8, image: testimonial8, name: 'Lemy', quote: 'Secured funding when I needed it most.' },
  { id: 9, image: testimonial9, name: 'Raul', quote: 'A seamless experience from start to finish.' },
  { id: 10, image: testimonial10, name: 'Sarah', quote: 'Empowered my business to grow rapidly.' },
  { id: 11, image: testimonial11, name: 'Juwan', quote: 'Professional and results-driven.' },
  { id: 12, image: testimonial12, name: 'Daniel', quote: 'Funding made simple and accessible.' },
  { id: 13, image: testimonial13, name: 'Bernicia', quote: 'They truly understand entrepreneurs’ needs.' },
  { id: 14, image: testimonial14, name: 'Tyrone', quote: 'Unmatched support for business growth.' },
  { id: 15, image: testimonial15, name: 'Abdullah', quote: 'A trusted partner for funding success.' },
  { id: 16, image: testimonial16, name: 'Corboi', quote: 'Helped me achieve my business goals.' },
  { id: 17, image: testimonial17, name: 'Brittany', quote: 'Their system is a total game-changer.' },
]

const FORM_URL = "https://www.laserfundpamm.com/disclaimer "

const LaserFund = () => {
  const sliderRef = useRef(null);
  const videoSliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);



  // Sample images for the slider
  const images = [
    '/1.jpeg',
    '/2.jpeg',
    '/3.jpeg',
    '/4.jpeg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };



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
    gsap.fromTo('.hero-dollar-left',
      {
        x: -100,
        opacity: 0,
        rotation: -20
      },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
        delay: 0.5
      }
    );

    gsap.fromTo('.hero-dollar-right',
      {
        x: 100,
        opacity: 0,
        rotation: 20
      },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
        delay: 0.8
      }
    );

    gsap.to('.hero-dollar-left', {
      y: 15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to('.hero-dollar-right', {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5
    });
  }, []);

  const [videos, setVideos] = useState([
    "https://www.youtube.com/embed/6h-KSsq1lRQ",
    "https://www.youtube.com/embed/CYyTxYAEtxM",
    "https://www.youtube.com/embed/RHAKwL1vrxc",
    "https://www.youtube.com/embed/3ypIhaaqzKQ",
  ]);

  const handleButtonClick = () => {
    window.open(FORM_URL, '_blank');
  };

  return (
    <>
      <section className='relative overflow-hidden pb-10 bg-black flex justify-center items-center min-h-[70vh] md:min-h-0 md:rounded-br-[100px] md:rounded-bl-[100px]'>
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
      </section>

      <section className='overflow-hidden flex justify-center items-center px-10 bg-white pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-10'>
          <div className='grid lg:grid-cols-2 gap-y-10'>
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className='flex justify-center'>
                <img src={DISC} className='md:h-[500px]' alt="" />
              </div>
            </ScrollAnimation>

            <div className='flex flex-col justify-center items-center lg:items-start gap-y-6'>
              <ScrollAnimation animation="zoomIn">
                <h1 className='text-[#E7A647] text-center lg:text-start text-3xl lg:text-[45px] md:text-start font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Want to learn Crypto? </h1>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.3}>
                <div>
                  <p className='md:text-[20px] text-center lg:text-start' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                    Get our “Buy The Dip Crypto Series
                    (Beginners Guide): How I 7x’d My Crypto Portfolio in 3 Months Buying & Selling Crypto on
                    Coinbase."
                  </p>
                </div>
              </ScrollAnimation>

              <div className='w-full flex justify-center items-center lg:justify-start'>
                <ScrollAnimation animation="slideUp" delay={0.4}>
                  <div>
                    <button
                      onClick={handleButtonClick}
                      className='bg-[#E7A647] px-5 py-3 rounded-[8px]'
                      style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                      Download Now
                    </button>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='overflow-hidden flex justify-center items-center bg-black py-10 pb-14'>
        <div className='flex flex-col justify-center items-start pt-10 lg:px-40'>
          <ScrollAnimation animation="zoomIn">
            <div>
              <h1 className='text-[#E7A647] px-10 text-3xl text-center lg:text-start lg:text-[45px] lg:leading-[45px] md:text-start font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Are you ready to take control of your financial future?</h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideDown" delay={0.1}>
            <div>
              <p className='text-white md:text-[18px] text-start lg:text-start lg:leading-[25px] py-5 px-10 tracking-wider' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                Whether you’re a beginner or an experienced trader, The Laser Fund PAMM Trading, Automation & Education Network will equip you with the skills, strategies, and tools you need to master the markets and create long-term wealth.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideDown" delay={0.2}>
            <div>
              <h1 className='text-white md:text-[19px] text-lg px-10 pb-3 text-start lg:text-start' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>We provide comprehensive training in: </h1>
            </div>
          </ScrollAnimation>

          <div className='flex flex-col px-5 md:text-[18px] justify-start items-start gap-y-5'>
            <ScrollAnimation animation="slideDown" delay={0.3}>
              <div className='flex gap-3 justify-center items-center text-white'>
                <img src={CHECK} className='h-7' alt="" />
                <div>
                  <p className='font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                    <span className='font-bold'> Forex Trading </span> – Learn how to navigate the $7 trillion-a-day forex market and capitalize on currency movements.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideDown" delay={0.4}>
              <div className='flex gap-3 justify-center items-center text-white'>
                <img src={CHECK} className='h-7' alt="" />
                <div>
                  <p className='font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                    <span className='font-bold'> Futures Trading </span> – Discover how to trade commodities, indexes, and more with precision and confidence.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideDown" delay={0.5}>
              <div className='flex gap-3 justify-center items-center text-white'>
                <img src={CHECK} className='h-7' alt="" />
                <div>
                  <p className='font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                    <span className='font-bold'> Crypto Spot Trading </span> – Understand the volatility and opportunity in the digital currency markets and how to profit from it, today!
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <div>

        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Video Column */}
        <div className="w-full">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <video 
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
              controls
              poster="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
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
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            {/* Main Image Display */}
            <div className="relative h-64 md:h-80 lg:h-80">
              <img 
                src={images[currentSlide]} 
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Slide Counter */}
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentSlide + 1} / {images.length}
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex space-x-2 mt-4 justify-center">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                    currentSlide === index 
                      ? 'border-blue-500 opacity-100' 
                      : 'border-gray-300 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
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

      <section className='overflow-hidden flex justify-center items-center bg-white pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-10'>
          <div className='grid lg:grid-cols-2 gap-y-10 gap-x-10'>
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className='flex justify-center'>
                <img src={LASER} className='lg:pt-16 px-10 md:px-0' alt="" />
              </div>
            </ScrollAnimation>

            <div className='flex flex-col md:text-[18px] justify-center gap-y-5'>
              <ScrollAnimation animation="zoomIn">
                <h1 className='text-[#E7A647] text-3xl lg:text-[45px] text-center lg:text-start lg:leading-[45px] px-10 font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                  The Laser Fund PAMM Trading, Automation & Education Network
                </h1>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" delay={0.2}>
                <p className='font-bold px-10 text-start lg:text-start' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                  You get the following:
                </p>
              </ScrollAnimation>

              <div className='px-5 flex flex-col gap-y-4'>
                <ScrollAnimation animation="slideLeft" delay={0.3}>
                  <div className='flex justify-start items-start gap-x-3'>
                    <div>
                      <img src={CIRCLE} className='pt-2' alt="" />
                    </div>
                    <div className='flex flex-col gap-y-1 justify-start items-start'>
                      <h1 className='font-bold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                        1-on-1 Coaching
                      </h1>
                      <p className='font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                        Get personal guidance from seasoned trading experts. Our tailored coaching sessions help you develop a winning strategy and avoid costly mistakes.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.4}>
                  <div className='flex justify-start items-start gap-x-3'>
                    <div>
                      <img src={CIRCLE} className='pt-2' alt="" />
                    </div>
                    <div className='flex flex-col gap-y-1 justify-start items-start'>
                      <h1 className='font-bold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                        Proven Strategies
                      </h1>
                      <p className='font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                        Learn the exact methods used by professional traders to generate consistent profits in the forex, futures, and crypto markets.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.5}>
                  <div className='flex justify-start items-start gap-x-3'>
                    <div>
                      <img src={CIRCLE} className='pt-2' alt="" />
                    </div>
                    <div className='flex flex-col gap-y-1 justify-start items-start'>
                      <h1 className='font-bold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                        Live Trading Sessions
                      </h1>
                      <p className='font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                        Watch and learn from live market trades, understand market movements in real-time, and ask questions as they happen.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.6}>
                  <div className='flex justify-start items-start gap-x-3'>
                    <div>
                      <img src={CIRCLE} className='pt-2' alt="" />
                    </div>
                    <div className='flex flex-col gap-y-1 justify-start items-start'>
                      <h1 className='font-bold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                        Community of Traders
                      </h1>
                      <p className='font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                        Join a thriving community of like-minded traders. Share insights, ask questions, and grow together with the support of experienced mentors and fellow traders.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.7}>
                  <div className='flex justify-start items-start gap-x-3'>
                    <div>
                      <img src={CIRCLE} className='pt-2' alt="" />
                    </div>
                    <div className='flex flex-col gap-y-1 justify-start items-start'>
                      <h1 className='font-bold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                        Passive Income Opportunities
                      </h1>
                      <p className='font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                        We don’t just teach you how to trade—we show you how to create consistent passive income through strategic investing, automated trading bots, and other income-generating strategies.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='overflow-hidden flex justify-center items-center px-10 bg-black pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-20'>
          <div className='grid md:grid-cols-2 gap-y-10 gap-x-10'>
            <div className='flex flex-col justify-center gap-y-5'>
              <ScrollAnimation animation="zoomIn">
                <h1 className='text-[#E7A647] text-center lg:text-start text-3xl lg:text-[45px] lg:leading-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                  What You’ll Have Access To
                </h1>
              </ScrollAnimation>

              <div className='flex flex-col md:text-[20px] gap-y-4 items-start' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                <ScrollAnimation animation="slideRight" delay={0.2}>
                  <div className='flex justify-center items-center gap-x-2 text-white'>
                    <div className='h-1 bg-white w-1 rounded-full'></div>
                    <p className='font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                      <span className='font-bold'>20+ in-depth training modules </span> teaching you how to trade.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="slideRight" delay={0.3}>
                  <div className='flex justify-center items-center gap-x-2 text-white'>
                    <div className='h-1 bg-white w-1 rounded-full'></div>
                    <p className='font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                      <span className='font-bold'>Automated trading algorithms </span> – We’ll show you the exact algorithms we use to generate cash on demand.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="slideRight" delay={0.4}>
                  <div className='flex justify-center items-center gap-x-2 text-white'>
                    <div className='h-1 bg-white w-1 rounded-full'></div>
                    <p className='font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                      <span className='font-bold'>“Buy the Dip” Crypto Series</span> – How I 7x’d my crypto portfolio in just 3 months using spot trading on Coinbase.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="slideRight" delay={0.5}>
                  <div className='flex justify-center items-center gap-x-2 text-white'>
                    <div className='h-1 bg-white w-1 rounded-full'></div>
                    <p className='font-bold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                      And so much more…
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <ScrollAnimation animation="slideLeft" delay={0.4}>
              <div>
                <img src={READ} className='lg:pt-16' alt="" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className='overflow-hidden flex justify-center items-center bg-white pb-14'>
        <div className='flex h-full justify-center items-center pt-10 lg:px-10'>
          <div className='grid lg:grid-cols-2 gap-x-11 gap-y-10'>
            <div className='flex justify-center h-full'>
              <ScrollAnimation animation="slideRight" delay={0.3}>
                <div className='px-10 flex justify-center'>
                  <img src={CHART} alt="" />
                </div>
              </ScrollAnimation>
            </div>

            <div className='flex flex-col justify-center'>
              <ScrollAnimation animation="zoomIn" delay={0.1}>
                <div className='px-5'>
                  <h1 className='text-[#E7A647] text-3xl text-center lg:text-start lg:text-[45px] lg:leading-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Perfect for All Skill Levels</h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.2}>
                <p className='text-gray-600 text-start lg:text-start px-10 pt-5 pb-5 md:text-[20px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                  Whether you’ve never placed a trade before or you’ve been trading for years, our platform is designed to meet you where you are and take you to the next level.
                </p>
              </ScrollAnimation>

              <div className='flex flex-col px-5 justify-start md:text-[18px] items-start gap-y-5' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                <ScrollAnimation animation="slideUp" delay={0.3}>
                  <div className='flex gap-3 justify-center items-center text-black'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p className='text-gray-700 font-[400]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                        <span className='font-bold'> Beginners </span> : Start with the basics—learn how the markets work and how to trade with confidence.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideUp" delay={0.4}>
                  <div className='flex gap-3 justify-center items-center text-black'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p className='text-gray-700 font-[400]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                        <span className='font-bold'> Intermediate Traders </span>: Refine your strategy, improve your execution, and increase your profits.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideUp" delay={0.5}>
                  <div className='flex gap-3 justify-center items-center text-black'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p className='text-gray-700 font-[400]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                        <span className='font-bold'> Advanced Traders </span> : Gain access to proprietary strategies and market insights from top industry professionals.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden flex flex-col justify-center items-center bg-black pb-10 youtube-video-section">
        <div className="flex flex-col justify-center items-center pt-10 lg:pt-16 gap-y-3">
          <ScrollAnimation animation="slideDown" delay={0.2}>
            <h1
              className="text-lg tracking-[4px] uppercase px-10 font-extralight text-gray-500 text-center"
              style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
            >
              Trusted by Professionals Like You
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={0.1}>
            <h1
              className="text-[#E7A647] text-center px-10 pb-10 text-4xl lg:text-[45px] font-semibold"
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              Client Success Stories
            </h1>
          </ScrollAnimation>

          <div className="w-full max-w-[350px] lg:max-w-3xl px-4">
            <Slider ref={videoSliderRef} {...videoSettings} className="video-slider">
              {videos.map((video, index) => (
                <div key={index} className="px-2">
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <iframe
                      className="w-full h-full"
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

      <section className="overflow-hidden flex flex-col justify-center items-center bg-black pb-10">
        <div>
          <ScrollAnimation animation="zoomIn" delay={0.1}>
            <h1
              className="text-[#E7A647] text-center px-10 pt-10 text-4xl lg:text-[45px] font-semibold"
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              Image Proof Of Our Client's Success
            </h1>
          </ScrollAnimation>
        </div>

        <div className=''>
          <div className="w-full bg-black py-12 relative md:py-16">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <Slider
                ref={sliderRef}
                {...settings}
                className="testimonial-slider"
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="px-2 testimonial-slide">
                    <div className="rounded-xl占有overflow-hidden shadow-2xl">
                      <div className="relative aspect-[3/4] bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={`Testimonial by ${testimonial.name}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
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

      <section className='overflow-hidden flex justify-center items-center bg-white pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-20'>
          <div className='grid lg:grid-cols-2 gap-10'>
            <div className='flex flex-col justify-center'>
              <ScrollAnimation animation="zoomIn">
                <div className='px-10'>
                  <h1 className='text-[#E7A647] text-3xl text-center lg:text-start lg:text-[45px] lg:leading-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>LIMITED SPOTS AVAILABLE</h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" delay={0.2}>
                <p className='text-gray-600 px-10 md:text-[20px] text-start lg:text-start pt-5 pb-5 font-light' style={{ fontFamily: 'Montserrat, serif' }}>
                  Join The Laser Fund PAMM Trading, Automation & Education Network today and get:
                </p>
              </ScrollAnimation>
              <div className='flex flex-col md:text-[18px] px-5 justify-start items-start gap-y-5 text-gray-500' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                <ScrollAnimation animation="slideLeft" delay={0.3}>
                  <div className='flex gap-3 justify-center items-center'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> Full access to our forex, futures, and crypto trading education </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.4}>
                  <div className='flex gap-3 justify-center items-center'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> Weekly live trading sessions </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.5}>
                  <div className='flex gap-3 justify-center items-center'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> 1-on-1 coaching with trading experts </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.6}>
                  <div className='flex gap-3 justify-center items-center'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> Access to passive income strategies and automation tools </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <div className='flex justify-center w-full min-h-full'>
              <ScrollAnimation animation="slideRight" delay={0.5}>
                <div className='px-10'>
                  <img src={LAY} className='md:w-[600px]' alt="" />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <section className='overflow-hidden px-10 justify-center items-center w-full flex bg-black py-10'>
        <div className='flex flex-col justify-center items-center gap-y-5'>
          <ScrollAnimation animation="zoomIn">
            <h1 className='text-3xl lg:text-[45px] leading-[45px] text-center font-semibold text-[#E7A647]' style={{ fontFamily: 'Minion Pro, serif', fontWeight: 700 }}>
              BONUS: Get Started Today and Receive a Free Trading Strategy Guide ($197 Value)!
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.3}>
            <h2 className='text-xl font-semibold text-white text-center md:text-[28px] pb-5' style={{ fontFamily: 'Montserrat, serif', fontWeight: 200, fontStyle: 'normal' }}>
              Don’t miss this opportunity to transform your financial future.
            </h2>
            <h2 className='text-xl font- text-white text-center md:text-[22px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 200, fontStyle: 'normal' }}>
              Click Below to Get Started Now!
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="slideUp" delay={0.5}>
            <div className='pt-7'>
              <button
                onClick={handleButtonClick}
                className='bg-[#E7A647] text-black px-3 py-3 rounded-[8px]'
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                Download Now
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

export default LaserFund