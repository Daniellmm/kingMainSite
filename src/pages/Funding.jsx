import React, { useEffect, useState } from 'react'
import SYOB from '../assets/images/syob.png'
import SCI from '../assets/images/scifi.png'
import CHECK from '../assets/images/check.png'
import MText from '../assets/images/png2.png'
import AWW from '../assets/images/aww.png'
import LONG from '../assets/images/long.png'
import DollarCoin from '../assets/images/bg-live/rightmc.png'
import DollarCoin2 from '../assets/images/bg-live/leftmc.png'
import ScrollAnimation from '../component/ScrollAnimation'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Funding = () => {
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [focusedVideo, setFocusedVideo] = useState(1);

  // Initialize videos as state so we can update it
  const [videos, setVideos] = useState([
    "https://www.youtube.com/embed/8oc1XzrVKdU",
    "https://www.youtube.com/embed/byzZl7yl0S0",
    "https://www.youtube.com/embed/Nkowi5BdpD4",
  ]);


  const handlePrevVideo = () => {
    // Rotate videos left (make the last video the first)
    const newVideos = [...videos];
    const firstVideo = newVideos.shift();
    newVideos.push(firstVideo);
    setVideos(newVideos);
  };

  const handleNextVideo = () => {
    // Rotate videos right (make the last video the first)
    const newVideos = [...videos];
    const lastVideo = newVideos.pop();
    newVideos.unshift(lastVideo);
    setVideos(newVideos);
  };

  // Navigation functions for the mobile slider
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className='relative overflow-hidden pb-10 px-10 bg-black flex justify-center items-center md:min-h-screen md:rounded-br-[100px] md:rounded-bl-[100px]'> 
        <div className='z-10 relative pt-20 w-full flex flex-col justify-center items-center'>
          <ScrollAnimation animation="zoomIn" delay={0.5}>
            <div className='pb-7'>
              {/* <img src={MText} alt="" /> */}
              <h1 className="lg:text-8xl text-4xl text-center font-bold bg-gradient-to-r from-[#E7A647] to-[#855B1F] bg-clip-text text-transparent" style={{ fontFamily: 'Minion Pro, serif' }}>
               START YOUR OWN FUNDING BUSINESS
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div>
              <p className='text-white pb-5 text-center text-sm md:text-xl' style={{ fontFamily: 'Minion Pro, serif' }}>Build a Multi-6 or 7-Figure Business Helping Entrepreneurs get the Captain They Desperately Need to Succeed.</p>
            </div>

            <div className='flex justify-center'>
              <iframe className='lg:w-[1050px] pb-5 rounded-2xl h-[250px] lg:rounded-[50px] lg:h-[415px]' src="https://www.youtube.com/embed/m2ERPhqNENk?si=LBHOcW6Eti5e4HTK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div>
              <button className='bg-[#E7A647] px-3 py-2 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
              Your Journey Starts Here
              </button>
            </div>
          </ScrollAnimation>
        </div>

        <div className='absolute top-[200px] left-[-40px]'>
          <img src={DollarCoin} alt="" className='h-[100px] md:h-[120px] lg:h-40 hero-dollar-left' />
        </div>
        <div className='absolute bottom-[100px] right-[-40px]'>
          <img src={DollarCoin2} alt="" className='h-[100px] md:h-[120px] lg:h-40 hero-dollar-right' />
        </div>
        <div className='w-full h-full bg-black opacity-60 inset-0 absolute'></div>
      </section>


      <section className='overflow-hidden px-10 bg-white md:min-h-screen pb-14'>
        <div className='flex flex-col justify-center items-center pt-10'>
          <ScrollAnimation animation="fadeIn">
            <div className='pb-10'>
              <img src={AWW} alt="" />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.3}>
            <div className='lg:px-24'>
              <h1 className='text-black text-center leading-10' style={{ fontFamily: 'Minion Pro, serif' }}>82% of entrepreneurs fail due to lack of cash flow—and 38% run out of cash entirely. By starting a funding business, you become the solution to a problem nearly every entrepreneur faces. This is the most profitable, low start-up cost opportunity available, and no extensive education is required—everyone needs capital.</h1>
            </div>
            <div>
              <h1 className='text-[#E7A647] text-2xl pt-6 text-center' style={{ fontFamily: 'Adelia, serif' }}>C.e.o, Founder</h1>
            </div>
          </ScrollAnimation>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-black md:min-h-screen  '>
        <div className='flex flex-col justify-center items-center py-10'>
          <ScrollAnimation animation="zoomIn" >
            <div>
              <h1 className='text-[#E7A647] pb-10 text-3xl text-center lg:px-44 font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Discover the Secrets to Building a Funding Business with Unlimited Earning Potential </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.6}>
            <div className=''>
              <p className='text-white text-sm font-thin leading-5 lg:px-20 pb-14' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>If you’ve ever tried to work in the funding industry, you know the biggest challenge is finding financing solutions that actually work for your customers—and that skepticism is understandable.
                <br /> <br />
                We get it.
                <br /> <br />
                That’s why partnering with High Ticket Offer Financing is the smartest and most profitable move you can make. With 12 years of experience and nearly $1B
                funded through word of mouth alone, our proven system delivers results. We’ve spent millions of dollars building a network of funding experts and capital sources that actually work.
                <br /> <br />
                Now, we’re handing you the blueprint to build your own successful funding  business — with all the tools,  resources, and training you need to succeed. But don’t just take our word for it—listen to these  client testimonials.
              </p>
            </div>
          </ScrollAnimation>

          <div className="w-full">
            {/* Desktop/Large Screen Layout */}
            <div className="hidden lg:block bg-black w-full relative">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

              {/* Content container */}
              <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Video gallery */}
                <div className="flex items-center justify-center">
                  {/* Left arrow navigation */}
                  <button
                    className="absolute left-4 z-30 bg-[#E7A647] rounded-full p-2 shadow-lg hover:bg-[#c98c3c] transition-colors duration-300"
                    onClick={handlePrevVideo}
                    aria-label="Previous video"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Left video */}
                  <div className="w-1/4 transform transition-transform duration-300 hover:scale-105 mb-6 md:mb-0 -mr-6 z-10">
                    <div className="relative overflow-hidden rounded-lg shadow-2xl">
                      <iframe
                        className="w-full aspect-video"
                        src={videos[0]}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                      </iframe>
                    </div>
                  </div>

                  {/* Center video (larger) */}
                  <div className="w-1/2 transform transition-transform duration-300 hover:scale-105 mb-6 md:mb-0 z-20">
                    <div className="relative overflow-hidden rounded-lg shadow-2xl">
                      <iframe
                        className="w-full aspect-video"
                        src={videos[1]}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                      </iframe>
                    </div>
                  </div>

                  {/* Right video */}
                  <div className="w-1/4 transform transition-transform duration-300 hover:scale-105 -ml-6 z-10">
                    <div className="relative overflow-hidden rounded-lg shadow-2xl">
                      <iframe
                        className="w-full aspect-video"
                        src={videos[2]}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                      </iframe>
                    </div>
                  </div>

                  {/* Right arrow navigation */}
                  <button
                    className="absolute right-4 z-30 bg-[#E7A647] rounded-full p-2 shadow-lg hover:bg-[#c98c3c] transition-colors duration-300"
                    onClick={handleNextVideo}
                    aria-label="Next video"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile/Medium Screen Slider - This remains the same */}
            <div className="lg:hidden bg-black w-full relative">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

              {/* Content container */}
              <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Video slider */}
                <div className="relative">
                  {/* Left arrow navigation */}
                  <button
                    className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-30 bg-[#E7A647] rounded-full p-2 shadow-lg hover:bg-[#c98c3c] transition-colors duration-300"
                    onClick={handlePrevSlide}
                    aria-label="Previous slide"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Slider container */}
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-300 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {/* Video slides - dynamically render all videos */}
                      {videos.map((videoUrl, index) => (
                        <div key={index} className="min-w-full px-4">
                          <div className="relative overflow-hidden rounded-lg shadow-2xl">
                            <iframe
                              className="w-full h-[250px] aspect-video"
                              src={videoUrl}
                              title={`Testimonial video ${index + 1}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen>
                            </iframe>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right arrow navigation */}
                  <button
                    className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-30 bg-[#E7A647] rounded-full p-2 shadow-lg hover:bg-[#c98c3c] transition-colors duration-300"
                    onClick={handleNextSlide}
                    aria-label="Next slide"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center mt-4">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      className={`h-3 w-3 mx-1 rounded-full ${currentSlide === index ? 'bg-[#E7A647]' : 'bg-gray-400'}`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add a CSS style for the grid pattern */}
        <style jsx>{`
          .bg-grid-pattern {
            background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }
        `}</style>
      </section>


      <section className='overflow-hidden px-10 bg-white flex justify-center items-center  min-h-[60vh] pb-10'>
        <div className='flex justify-center items-center pt-7'>
          <div className='grid '>

            <div className='flex flex-col  gap-y-3 md:px-10 lg:px-24 justify-center '>
              <ScrollAnimation animation="zoomIn">
                <div>
                  <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Why Starting a Funding Business is the Smartest Move Right Now</h1>
                </div>
              </ScrollAnimation>


              <div className='flex flex-col justify-start items-start gap-y-5'>
                <ScrollAnimation animation="slideUp" delay={0.2}>
                  <div className='flex gap-3 justify-center items-center text-black'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}> <span className='font-bold'> Unlimited Earning Potential </span> – You decide what to charge and how much to earn.</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideUp" delay={0.4} >
                  <div className='flex gap-3 justify-center items-center text-black'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}> <span className='font-bold'> Simple Business Model </span> – Earn capital by simply connecting business owners with funding
                        solutions that work.</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeIn" delay={0.6}>
                  <div className='flex gap-3 justify-center items-center text-black'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}> <span className='font-bold'> Massive Market Demand </span> – 82% of entrepreneurs need cash flow to grow — and you’ll
                        have the solution.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeIn" delay={0.6}>
                  <div className='flex gap-3 justify-center items-center text-black'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}> <span className='font-bold'> Minimal Overhead </span> – No need for a large team or expensive infrastructure to get started. </p>
                    </div>
                  </div>
                </ScrollAnimation>

              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-5 bg-black md:min-h-screen'>
        <div className='flex flex-col justify-center items-center py-10'>
          <ScrollAnimation animation="zoomIn">
            <div>
              <h1 className='text-[#E7A647] pb-10 text-3xl text-center lg:px-44 font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Here’s What You’ll Get When You License Our Product:</h1>
            </div>
          </ScrollAnimation>


          <div className='flex flex-col gap-y-7 lg:px-32 justify-start items-start w-full'>
            <ScrollAnimation animation="fadeIn" delay={0.2}>
              <div className='flex  flex-col items-start'>
                <div className='flex justify-center items-center gap-x-4'>
                  <img src={CHECK} className='h-8' alt="" />
                  <p className='text-white text-sm' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Complete Training Program </p>
                </div>

                <div className='pl-16'>
                  <p className='text-white font-thin text-sm' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                    ● Step-by-step guidance on how to structure, launch, and scale your funding business. <br />
                    ● Learn how to market your business and attract high-quality clients.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.4}>
              <div className='flex  flex-col items-start'>
                <div className='flex justify-center items-center gap-x-4'>
                  <img src={CHECK} className='h-8' alt="" />
                  <p className='text-white text-sm' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}> 1-on-1 Coaching  </p>
                </div>

                <div className='pl-16'>
                  <p className='text-white font-thin text-sm' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                    ● Work directly with funding experts who have built 7 and 8-figure funding businesses. <br />
                    ● Get personalized support to troubleshoot challenges and accelerate your growth.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.6}>
              <div className='flex  flex-col items-start'>
                <div className='flex justify-center items-center gap-x-4'>
                  <img src={CHECK} className='h-8' alt="" />
                  <p className='text-white text-sm' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Access to ALL Funding Options </p>
                </div>

                <div className='pl-16'>
                  <p className='text-white font-thin text-sm' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                    ● No-doc personal funding – Up to $150,000 <br />
                    ● 0% Business Credit – Up to 12 months <br />
                    ● Long-term, low-interest business lines of credit – Up to $3M <br />
                    ● Home Equity Lines of Credit (HELOC) – Up to $4M <br />
                    ● And more…
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.8}>
              <div className='flex  flex-col items-start'>
                <div className='flex justify-center items-center gap-x-4'>
                  <img src={CHECK} className='h-8' alt="" />
                  <p className='text-white text-sm' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Exclusive Funding Network  </p>
                </div>

                <div className='pl-16'>
                  <p className='text-white font-thin text-sm' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                    ● Tap into a network of lenders and funding products that have been tested and proven to
                    work. <br />
                    ● We’ve done the hard work of building relationships with funding partners — you just
                    need to connect the dots.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeIn" delay={0.9}>
              <div className='flex  flex-col items-start'>
                <div className='flex justify-center items-center gap-x-4'>
                  <img src={CHECK} className='h-8' alt="" />
                  <p className='text-white text-sm' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Charge What You Want </p>
                </div>

                <div className='pl-16'>
                  <p className='text-white font-thin text-sm' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                    ● This is your business — you control the pricing.  <br />
                    ● Earn significant fees on every deal you close, creating consistent cash flow and scalable
                    revenue.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>


        </div>
      </section>


      <section className='overflow-hidden px-10 bg-white flex justify-center items-center md:min-h-screen pb-14'>
        <div className='flex justify-center items-center pt-5'>
          <div className='grid md:grid-cols-2 grid-rows-1'>
            <div className='flex justify-center items-center'>
              <ScrollAnimation animation="slideRight">
                <div className='pb-10'>
                  <img src={SYOB} className='md:h-[400px]' alt="" />
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation animation="slideLeft">
              <div className='flex flex-col gap-y-5 md:px-10 lg:px-24 h-full justify-center '>
                <div>
                  <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Why This Business Is So Profitable</h1>
                </div>

                <div>
                  <p className='text-sm text-gray-700' style={{ fontFamily: 'Montserrat, serif' }}>Most entrepreneurs don’t know where to turn for funding — or they’ve been burned by funding companies that overpromise and underdeliver.

                    <br /><br />  You’ll have the power to give them the capital they need to grow — and you’ll get paid handsomely for doing it.</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-black flex justify-center items-center min-h-screen pb-8'>
        <div className='flex justify-center items-center pt-6'>
          <div className='grid md:grid-cols-2 grid-rows-1'>

            <div className='flex flex-col  gap-y-3 md:px-10 lg:px-24 justify-center '>
              <ScrollAnimation animation="zoomIn">
                <div>
                  <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Start Your Own Funding Business</h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp">
                <div>
                  <p className='text-white font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>If you’ve been looking for a business model that: </p>
                </div>
              </ScrollAnimation>


              <div className='flex flex-col justify-start items-start gap-y-5'>

                <ScrollAnimation animation="slideRight" delay={0.2}>
                  <div className='flex gap-3 justify-center items-center text-white'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p  style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}> Has unlimited earning potential</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideRight" delay={0.4}>
                  <div className='flex gap-3 justify-center items-center text-white'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}> Solves a real problem for business owners </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideRight" delay={0.6}>
                  <div className='flex gap-3 justify-center items-center text-white'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}> Requires minimal overhead and setup costs </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideRight" delay={0.8}>
                  <div className='flex gap-3 justify-center items-center text-white'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}> Works in ANY economy</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideUp">
                  <div className='flex gap-3 justify-center items-center text-white'>
                    <div>
                      <p className='font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Then this is your moment.</p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <ScrollAnimation animation="slideLeft">
              <div className='flex justify-center pt-8 lg:pt-0 items-center'>
                <div className=''>
                  <img src={SCI} className='md:h-[400px]' alt="" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 justify-center items-center w-full flex bg-white min-h-[40vh]'>
        <div className='flex flex-col justify-center items-center text-[#E7A647] gap-y-5'>
          <ScrollAnimation animation="zoomIn" >
            <h1 className=' text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif', fontWeight: 700 }}>Spots Are Filling Fast – Secure Yours Today! </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div className='pt-7'>
              <button className='bg-[#E7A647] text-black px-3 py-3 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                Your Journey Starts Here
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

export default Funding