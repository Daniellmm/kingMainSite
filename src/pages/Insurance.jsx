import React, { useState, useEffect, useRef } from 'react'
import MText from '../assets/images/png3.png'
import NOTE from '../assets/images/bg-live/note.png'
import NOTE2 from '../assets/images/bg-live/note2.png'
import HEADPHONE from '../assets/images/headphone.png'
import BIGLOGO from '../assets/images/biglogo.png'
import FALLCOIN from '../assets/images/fallcoin.png'
import LONG from '../assets/images/long.png'
import KING from '../assets/images/ak1.png'
import ALEXIS from '../assets/images/alexis.png'
import ARROWD from '../assets/images/arrowD.png'
import GENE from '../assets/images/gene.png'
import ScrollAnimation from '../component/ScrollAnimation'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const FORM_URL = "https://api.leadconnectorhq.com/widget/form/TufHjWMyJ7iFxU6TBfrk"

gsap.registerPlugin(ScrollTrigger);

const Insurance = () => {
  // Animation transition duration in milliseconds - centralized for consistency
  const TRANSITION_DURATION = 500; // 0.5 seconds
  const AUTO_SCROLL_INTERVAL = 60000; // 60 seconds (1 minute)

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoScrollTimerRef = useRef(null);
  const [focusedVideo, setFocusedVideo] = useState(1);
  const videoSliderRef = useRef(null);

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

  // Initialize videos as state so we can update it
  const [videos, setVideos] = useState([
    "https://www.youtube.com/embed/Ib9feq1-YVw?si=4XZZMEeryeujM8YR",
    "https://www.youtube.com/embed/rEfuJ32_JeQ?si=6Ub6lIK8BImS-Z-e",
    "https://www.youtube.com/embed/DhdNv7iyTI4?si=ejUJltEC8MA1dKUk",
    "https://www.youtube.com/embed/9izvdSfdtyg?si=ABwD7IF4gfdq-RZ2",
    "https://www.youtube.com/embed/72xuX6HNr0Q?si=M9fBF2QKxonzDANS",
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

  // Function to handle button clicks
  const handleButtonClick = () => {
    window.open(FORM_URL, '_blank');
  };

  return (
    <>
      <section className='relative overflow-hidden pb-10 px-10 bg-black flex justify-center items-center min-h-[70vh]  md:min-h-0 md:rounded-br-[100px] md:rounded-bl-[100px]'>
        <div className='z-10 relative pt-20 w-full flex flex-col justify-center items-center'>
          <ScrollAnimation animation="zoomIn" delay={0.5}>
            <div className='pb-2'>
              {/* <img src={MText} alt="" /> */}
              <h1 className="lg:text-7xl text-4xl text-center font-bold bg-gradient-to-r from-[#E7A647] to-[#855B1F] bg-clip-text text-transparent" style={{ fontFamily: 'Minion Pro, serif' }}>
                ARE YOU INSURING YOUR MONEY?
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.5}>
            <div className='flex justify-center'>
              <p className='text-white pb-8 text-center uppercase md:text-[26px]' style={{ fontFamily: 'Minion Pro, serif' }}>
                IF YOU ARE AN ENTREPRENEUR AND YOU ARE NOT INSURING YOUR MONEY
                <span className='text-[#e7a647]'> Watch this video.</span>
              </p>
              <div className='flex justify-end items-end'>
                <img src={ARROWD} className=' animate-bounce lg:pl-4' alt="" />
              </div>

            </div>

            {/* <div className='flex lg:hidden justify-end w-full items-center'>
              <img src={ARROWD} className=' animate-bounce h-10 lg:pl-4' alt="" />
            </div> */}
            <div className='flex w-full justify-center'>
              <iframe className='lg:w-[850px] pb-5 rounded-2xl md:w-[640px] w-[340px] h-[250px] lg:rounded-[50px] lg:h-[415px]' src="https://www.youtube.com/embed/mRKJTzM-qTk?si=SRmluWecI8rayx0X" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div>
              <button
                onClick={handleButtonClick}
                className='bg-[#E7A647] px-3 py-2  rounded-[8px]'
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                Free Financial Review
              </button>
            </div>
          </ScrollAnimation>
        </div>

        {/* <div className='absolute top-[200px] left-[-20px]'>
          <img src={NOTE2} alt="" className='h-[100px] md:h-[120px] lg:h-52' />
        </div>
        <div className='absolute bottom-[100px] right-[-40px]'>
          <img src={NOTE} alt="" className='h-[100px] md:h-[120px] lg:h-52' />
        </div> */}

        <div className='w-full h-full bg-black opacity-60 inset-0 absolute'></div>
      </section>


      <section className='overflow-hidden px-10 bg-white  pb-10'>
        <ScrollAnimation animation="fadeIn" delay={0.5}>
          <div className='flex flex-col justify-center items-center pt-10 '>

            <div className='lg:px-24'>
              <h1 className='text-black text-xl lg:text-[28px] tracking-[1px] font-thin text-center leading-10' style={{ fontFamily: 'Minion Pro, serif' }}>"The definition of insanity is doing the same thing over and over again and expecting a different result." It's time to get serious about your financial future. If you want to ensure you and your company are financially set up for success, get a FREE financial review with YellowBrick Financial today."</h1>
            </div>
            <div>
              <h1 className='text-[#E7A647] text-3xl md:text-4xl pt-6 text-center' style={{ fontFamily: 'Adelia, serif' }}> Gene Santos</h1>
            </div>
          </div>
        </ScrollAnimation>
      </section>


      <section className='overflow-hidden flex justify-center items-center px-5 bg-black  pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-32'>
          <div className='grid md:grid-cols-2 gap-x-11 gap-y-10'>
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className=' flex justify-center'>
                <img src={HEADPHONE} className='md:h-96 ' alt="" />
              </div>
            </ScrollAnimation >
            <div className='flex flex-col  w-[100%] justify-center items-start'>
              <ScrollAnimation animation="slideUp" delay={0.3}>
                <h1 className='text-[#E7A647] text-center lg:text-start pb-10 text-3xl lg:text-[45px] lg:leading-[45px] md:text-start font-semibold'
                  style={{ fontFamily: 'Minion Pro, serif' }}>
                  Book a <span className='text-white italic'>Complimentary </span>
                  Financial Review and Get the "Spender, Saver, Wealth Creator" Audio.
                  <div class="relative inline-block text-black font-bold">
                    <span className=' line-through text-red-600'>FREE</span>
                    {/* <svg class="absolute left-0 top-1/2 w-full h-1" viewBox="0 0 100 2" preserveAspectRatio="none">
                      <path d="M0,1 Q10,0 20,1 T40,1 T60,0 T80,1 T100,1" stroke="red" fill="transparent" stroke-width="2" />
                    </svg> */}
                  </div>

                </h1>
              </ScrollAnimation>
              <div className='flex justify-center items-center w-full lg:justify-start'>
                <ScrollAnimation animation="slideUp" delay={0.4}>
                  <button
                    onClick={handleButtonClick}
                    className='bg-[#E7A647] px-5 py-3  rounded-[8px]'
                    style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                    Free Financial Review
                  </button>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-5 bg-white  pb-14'>
        <div className='flex flex-col justify-center items-center pt-10'>
          <ScrollAnimation animation="zoomIn">
            <div>
              <h1 className='text-[#E7A647] pb-10 text-3xl lg:text-[45px] text-center md:text-start font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}> About YellowBrick Financial — A Company That Cares </h1>
            </div>
          </ScrollAnimation>
          <div className='grid lg:grid-cols-2 gap-x-16 lg:px-10 gap-y-10'>
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className='flex justify-center lg:justify-start' >
                <img src={BIGLOGO} className='lg:h-96' alt="" />
              </div>
            </ScrollAnimation>
            <div>
              <ScrollAnimation animation="slideLeft" delay={0.4}>
                <p className='text-black  text-center lg:text-start md:text-[18px] leading-[25px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                  78% of Americans live paycheck to paycheck, and nearly half (49%) have less than $500 in savings. The truth is, the wealthy don't just invest wisely—they structure and protect their money differently. Billionaires like Warren Buffett aren't just investors; they leverage life insurance, tax-efficient financial strategies, and asset protection to ensure their wealth continues to grow—regardless of economic conditions.
                  <br /><br />
                  At YellowBrick Financial, we believe financial security isn't a luxury—it's a necessity. We are  committed to helping entrepreneurs correct critical financial mistakes by structuring financial  plans the right way—designed to grow, protect, and pass down wealth for generations. We  teach our clients what the wealthy already know: how to build financial independence with  strategies that work in both good times and bad.
                </p>
              </ScrollAnimation>
            </div>

          </div>
        </div>
      </section>


      <section className='overflow-hidden flex flex-col justify-center items-center px-5 py-24 bg-black '>
        <div className='flex flex-col justify-center items-center lg:px-24 '>
          <ScrollAnimation animation="zoomIn">
            <div>
              <h1 className='text-[#E7A647] text-center pb-10 text-3xl lg:text-[45px] lg:leading-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Even if you believe your financials are on track, you should still get a FREE financial
                review.
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div>
              <p className='text-white  md:text-[20px] font-extralight text-center leading-6 lg:px-20 ' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>88% of financial plans and life insurance policies are improperly structured, leaving families exposed to unnecessary taxes, lost wealth, and financial instability when they need protection the most.</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>


      <section className='overflow-hidden flex justify-center items-center px-10 bg-white  pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-20'>
          <div className='grid lg:grid-cols-2 gap-x-10 gap-y-10'>
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div className='flex lg:justify-end justify-center '>
                <img src={FALLCOIN} className='md:h-[500px]' alt="" />
              </div>
            </ScrollAnimation>

            <div className=' flex flex-col justify-center gap-y-5'>
              <ScrollAnimation animation="zoomIn">
                <h1 className='text-[#E7A647] text-center lg:text-start text-4xl lg:text-[45px] lg:leading-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                  Even if you believe your financials are on track, you should still get a FREE financial review.
                </h1>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.3}>
                <p className=' text-center lg:text-start font-extralight text-gray-900 md:text-[18px] leading-6' style={{ fontFamily: 'Montserrat, serif' }}>
                  88% of financial plans and life insurance policies are improperly structured,
                  leaving families exposed to unnecessary taxes,
                  lost wealth, and financial instability when they need protection the most.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.5}>
                <p className='text-black text-center lg:text-start font-semibold md:text-[18px]' style={{ fontFamily: 'Minion Pro, serif' }}>
                  Are You Ready to Know Exactly What You Need to Do to Get Your Company Financials on Track?
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.7}>
                <div className='flex w-full justify-center lg:justify-start'>
                  <button
                    onClick={handleButtonClick}
                    className='bg-[#E7A647] px-5 py-3  rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                    FREE Financial Review
                  </button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>


      <section className='overflow-hidden flex flex-col justify-center items-center  bg-black pb-10'>
        <div className='flex flex-col justify-center items-center pt-10 lg:pt-16 gap-y-3'>
          <ScrollAnimation animation="slideDown" delay={0.1}>
            <h1 className='text-lg tracking-[4px] uppercase font-extralight px-10 text-gray-500 text-center' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Trusted by Professionals Like You</h1>
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={0.2}>
            <h1 className='text-[#E7A647] text-center pb-10 text-4xl px-10 lg:text-[45px]' style={{ fontFamily: 'Minion Pro, serif' }}>Client Success Stories</h1>
          </ScrollAnimation>
          <div className="w-full max-w-[350px] lg:max-w-2xl px-4">
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
                      
                    ></iframe>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className='overflow-hidden flex justify-center items-center px-5 bg-white  pb-14 team-section'>
        <div className='flex flex-col justify-center items-center pt-10'>
          <div>
            <ScrollAnimation animation="zoomIn" delay={0.2}>
              <h1 className='text-[#E7A647] text-center pb-10 text-3xl lg:text-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Meet the Team</h1>
            </ScrollAnimation>
          </div>

          <div className='lg:px-10 space-y-10'>
            <div className='flex justify-center items-center'>
              <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-x-14 space-y-10'>
                <div className='flex justify-center items-center'>
                  <img src={GENE} className='w-[510px]' alt="" />
                </div>

                <div className='flex flex-col justify-center lg:items-start'>
                  <div>
                    <h1 className='text-[#E7A647] text-3xl text-center lg:text-start ' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Gene Santos</h1>
                  </div>
                  <p className='text-lg italic text-center lg:text-start font-semibold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Financial Advisor</p>

                  <p className=' pt-5 text-center lg:text-start'>
                    Gene Santos is a distinguished financial advisor specializing in comprehensive wealth
                    management for high net worth individuals and families. With over a decade of strategic experience in the finance and insurance industry, Gene has established himself as a trusted
                    advisor to discerning clients seeking sophisticated financial solutions.
                    <br /> <br />
                    Demonstrating exceptional performance, Gene has successfully written over $25 million in life
                    insurance coverage, strategically managed in excess of $2.4 million in client assets, and
                    facilitated more than $15 million in annuity premiums. His practice is precisely calibrated to
                    serve high net worth clients, delivering nuanced financial strategies that address the complex
                    wealth management needs of successful professionals and entrepreneurs.
                    <br /> <br />
                    Specializing in advanced retirement planning, comprehensive estate strategies, and tailored
                    investment optimization, Gene provides a strategic approach that goes beyond standard
                    financial advising. His expertise lies in crafting customized financial solutions that protect and
                    grow wealth, with a keen understanding of the unique financial challenges facing high-net-worth
                    individuals.
                    <br /> <br />
                    Gene's client-focused methodology combines rigorous financial acumen with a commitment to
                    building long-term, trust-based relationships. By offering personalized guidance and strategic
                    insights, he empowers clients to make informed decisions that align with their most significant
                    financial objectives and legacy planning goals.
                  </p>
                </div>
              </div>
            </div>

            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-x-14 space-y-10'>
              <div className='flex justify-center items-center'>
                <img src={ALEXIS} className='w-[510px]' alt="" />
              </div>

              <div className='flex flex-col justify-center lg:items-start'>
                <div>
                  <h1 className='text-[#E7A647] text-center lg:text-start text-3xl' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Alexis Holifield</h1>
                </div>
                <p className='text-lg italic text-center lg:text-start font-semibold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Co-Founder of The Millennial Millionaire</p>

                <p className=' pt-5 text-center lg:text-start'>
                  Alexis Holifield, began her journey to learning the laws of building generational wealth at the early age of 17 years old. She began her journey by attending a seminar put on by T. Harv Eker "Secrets Of The Millionaire Mind". Immediately, she began creating an archive of these "well-kept secrets of the wealthy" for the world to know. She went on to graduate with honors and complete a masters degree in life through first hand experience of wealth building, in addition the Multi-Millionaires she continues to be mentored by.
                  <br /> <br />
                  As a Licensed Insurance Broker, Financial Strategist, & Wealth Planner, Alexis dedicates her time as a coach and a mentor sharing Financial Intelligence and Investment Education to cultivate the minds of Millennials all over the nation. Her mission to advise families, individuals, and business owners to begin or enhance their journey to financial freedom to increase and preserve wealth is expressed in her ability to transform the paradigm, and financial states of her client. Specializing in Estate Planning, Cash Value Life Insurance, Retirement, and Executive Business Planning.
                </p>
              </div>
            </div>


            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-x-14 space-y-10'>
              <div className='flex justify-center lg:items-center'>
                <img src={KING} className='w-auto rounded-3xl' alt="" />
              </div>

              <div className='flex flex-col justify-center lg:items-start'>
                <div>
                  <h1 className='text-[#E7A647] text-3xl text-center lg:text-start' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>King Edwards</h1>
                </div>
                <p className='text-lg italic font-semibold text-center lg:text-start' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>King, a visionary, funding expert, and author</p>

                <p className=' pt-5 text-center lg:text-start'>
                  was born in Los Angeles and raised in New York. He draws inspiration from the diverse influences of each city. LA exposed him to the glamorous Hollywood lifestyle, while New York instilled a sense of grit and determination.
                  <br /> <br />
                  In his first professional project, King embarked on the creation of HighTicketOfferFinancing.com. This innovative venture aimed to provide alternative funding solutions for entrepreneurs operating in industries traditionally overlooked by banks. Through this endeavor, he sought to help consultants and entrepreneurs earn significant profits, develop and sell high-value products and services, and safeguard themselves from legal implications using HTOF’s comprehensive workflows, standard operating procedures, and contract templates.
                  <br /> <br />
                  With a focus on helping entrepreneurs thrive and achieve remarkable financial milestones, King has received accolades such as the Man of the Moment and Made Man Award for his achievements. Through unwavering determination and an unwavering focus on the next best move, King aims to rewrite the rules of the game and help his clients leave an indelible mark on their respective industries and their family’s lives.
                </p>
              </div>
            </div>
          </div>

          <div className='w-full h-[1px] mt-7 lg:mt-16 bg-black'></div>
        </div>
      </section>

    </>
  )
}

export default Insurance