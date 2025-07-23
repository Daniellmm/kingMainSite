import React, { useEffect } from 'react'
import BANK from '../assets/images/home.png'
import PHONEIMG from '../assets/images/phone1.png'
import AWW from '../assets/images/aww.png'
import BBB from '../assets/images/bbb.png'
import MARK from '../assets/images/mark.png'
import Correct from '../assets/images/correct.png'
import Out from '../assets/images/out.png'
import Money from '../assets/images/money.png'
import Rect1 from '../assets/images/pfb.jpg'
import Rect2 from '../assets/images/bible.jpg'
import Rect3 from '../assets/images/secure.jpg'
import ArrowR from '../assets/images/arrowupright.png'
import ARROWD from '../assets/images/arrowD.png'
import ScrollAnimation from '../component/ScrollAnimation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CustomSlider from '../component/TestimonialSlider'
import HP from '../assets/images/hp.jpg'
 import ClientReviewCarousel from '../component/ClientReviewCarousel'
import ClientSuccessHighlights from '../component/ClientSuccessHighlights'

// Form URL for buttons
const FORM_URL =
  'https://api.leadconnectorhq.com/widget/form/6cFWjFbL2wvGc3vBFdVd'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
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

  // Function to handle button clicks
  const handleButtonClick = () => {
    window.open(FORM_URL, '_blank')
  }

  // Approach 1: Open GHL form in popup, then download PDF
  // const handleDownloadClick = () => {
  //   // Open GHL form in a popup window
  //   const popup = window.open(
  //     'https://api.leadconnectorhq.com/widget/form/rtAKST11w3sgneYl2MH9',
  //     'ghlForm',
  //     'width=600,height=700,scrollbars=yes,resizable=yes'
  //   );

  //   // Start PDF download after a short delay
  //   // setTimeout(() => {
  //   //   const link = document.createElement('a');
  //   //   link.href = '/hack-1.pdf';
  //   //   link.download = 'hack.pdf';
  //   //   document.body.appendChild(link);
  //   //   link.click();
  //   //   document.body.removeChild(link);
  //   // }, 20000);
  // };

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
      <section className="custom-header-bg relative flex min-h-[70vh] items-center justify-center overflow-hidden rounded-bl-[35px] rounded-br-[35px] bg-black md:min-h-0 md:rounded-bl-[100px] md:rounded-br-[100px]">
        <div className="relative z-10 flex w-full flex-col items-center justify-center pl-4 pr-4 pt-24 md:max-w-[800px] md:flex-row md:gap-8 lg:max-w-[1800px] lg:pl-24 lg:pr-24">
          <div className="grow-1 flex w-[90%] flex-col items-center md:mr-8 md:w-full md:items-start lg:mr-16">
            <ScrollAnimation animation="zoomIn" delay={0.5}>
              <div className="pb-2">
                <h1
                  className="py-0 text-center text-lg font-bold leading-tight text-white md:px-4 md:text-left md:text-2xl lg:text-5xl"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  HIGH TICKET FINANCING FOR
                  <br />
                  <span
                    className="bg-gradient-to-r from-[#E7A647] to-[#855B1F] bg-clip-text text-transparent"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    COACHES, SERVICES, AND DIGITAL PRODUCTS
                  </span>
                </h1>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="zoomIn" delay={0.5} className="grow-1">
              <div className="flex justify-center">
                <p
                  className="px-5 pb-4 text-center text-[10px] uppercase text-white md:text-left md:text-[14px]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Close more Deals, Scale Faster, and Eliminate Price Objections
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="zoomIn" delay={0.5} className="grow-1">
              <div className="mt-0 flex flex-col gap-x-4 gap-y-0 space-y-4 md:flex-row md:pl-4">
                <button
                  className="flex w-[170px] items-center justify-center rounded-full px-7 py-2 text-xs font-semibold text-black shadow-md md:mt-4"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    background:
                      'linear-gradient(90deg, #E7A647 0%, #FFD76B 50%, #855B1F 100%)',
                    fontWeight: 600,
                  }}
                >
                  See Client Results
                </button>

                <button
                  className="mt-4 flex w-[170px] items-center justify-center rounded-full bg-[#00B67A] px-7 py-2 text-xs font-semibold text-black shadow-md"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  Lets Get Started
                </button>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="slideUp" delay={0.7}>
            <div className="relative -bottom-[56px] flex aspect-[340/600] w-[14rem] items-center justify-center lg:aspect-[490/900] lg:w-[21rem]">
              {/* Golden glow effect: mobile - semi-circle at bottom, desktop - full circle bottom right */}
              <div
                className="controlGlow absolute bottom-[-138px] left-1/2 z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-b-full md:bottom-[-50px] md:left-[81%] md:h-[400px] md:w-[400px] lg:bottom-[-30%] lg:left-auto lg:right-[-240%] lg:top-auto lg:h-[800px] lg:w-[800px] lg:rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 50% 80%, rgb(243 193 118 / 36%) 0%, rgba(133, 91, 31, 0.25) 60%, rgba(0, 0, 0, 0) 100%)',
                  filter: 'blur(50px)',
                }}
                aria-hidden="true"
              ></div>
              <img
                src={PHONEIMG}
                alt="phone image"
                width={340}
                height={600}
                className="relative z-10 block aspect-[340/600] h-auto w-full object-contain lg:aspect-[490/900]"
                style={{ display: 'block' }}
                loading="lazy"
              />
            </div>
          </ScrollAnimation>
        </div>

        {/* <div className="absolute inset-0 h-full w-full bg-black opacity-60"></div> */}
      </section>
            
      <section className="overflow-hidden bg-white px-5 pb-14">
        <ScrollAnimation animation="fadeIn" delay={0.8}>
          <div className="flex flex-col items-center justify-center pt-10 md:pt-24">
            <div className="pb-10">
              <img src={AWW} alt="" />
            </div>

            <div>
              <h1
                className="text-center text-xl font-thin leading-10 tracking-[1px] text-black lg:text-[28px]"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                “The only thing holding you back from achieving all of your
                goals <br className="hidden lg:block" /> is a financing partner
                that you can depend on. H.T.O.F. is that partner.”{' '}
              </h1>
            </div>
            <div>
              <h1
                className="pt-6 text-center text-3xl text-[#E7A647] lg:text-4xl"
                style={{ fontFamily: 'Adelia, serif' }}
              >
                King Edwards
              </h1>
            </div>
          </div>
        </ScrollAnimation>
      </section>

 {/* Client Review Carousel Section */}
      <section className="bg-black py-16 md:py-24 px-5 clientReviewCarousel">
        <ScrollAnimation animation="fadeIn" delay={0.3}>
          <div className="text-center mb-12">
            <h2
              className="text-xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase leading-[1.2]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-[#E7A647] to-[#CFA647] bg-clip-text text-transparent">WHAT OUR</span>{' '}
              <span className="text-white">CLIENTS</span>{' '}
              <span className="bg-gradient-to-r from-[#E7A647] to-[#855B1F] bg-clip-text text-transparent">ARE SAYING</span>
              <br />
              <span className="bg-gradient-to-r from-[#E7A647] to-[#CFA647] bg-clip-text text-transparent text-xxl md:text-3xl lg:text-4xl">
                (AND ACHIEVING)
              </span>
            </h2>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="slideUp" delay={0.5}>
          <ClientReviewCarousel />
        </ScrollAnimation>
      </section>



      <section className="bg-white px-3 pb-10 pt-10 lg:px-5 lg:pt-20">
        <div className="grid w-full grid-rows-1 items-center justify-center gap-10 rounded-3xl border-2 border-black py-5 md:grid-cols-2 lg:flex-row lg:gap-20 lg:px-20">
          <div className="flex w-full flex-1 px-3">
            <img
              src={HP}
              alt=""
              className="rounded-xl shadow-2xl shadow-black"
            />
          </div>

          <div className="flex w-full flex-1 flex-col">
            <h1
              className="pb-10 text-center text-3xl font-semibold leading-10 text-[#E7A647] lg:text-start lg:text-[45px]"
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              Discover Exactly How Entrepreneurs Are Launching 7-Figure Funding
              Businesses From Scratch
            </h1>
            <div className="flex w-full min-w-[100wv] justify-center gap-y-5 lg:justify-start">
              <div className="flex w-full min-w-[100wv] flex-col items-center justify-center gap-y-10 rounded-lg p-7">
                <div className="flex w-full justify-start lg:justify-start">
                  <button
                    onClick={handleDownloadClick}
                    className="flex justify-center rounded-[8px] bg-[#E7A647] px-3 py-2 lg:justify-start"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      |
      {/* <section className='overflow-hidden md:px-10 bg-black  pb-14'>
        <div className='flex justify-center items-center  pt-5'>
          <div className='grid md:grid-cols-2 grid-rows-1'>
            <ScrollAnimation animation="slideRight" delay={0.8}>
              <div className='flex justify-end items-center px-5 py-10'>
                <img src={BANK} alt="" className='rounded-2xl shadow-white shadow-2xl' />
              </div>
            </ScrollAnimation>


            <div className='flex flex-col gap-y-5 px-5 h-full justify-center lg:px-4 '>
              <ScrollAnimation animation="zoomIn" delay={0.8}>
                <div>
                  <h1 className='text-[#E7A647] text-3xl lg:text-[47px] text-center leading-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                    Download “The Ultimate Funding Qualification Guide” <span className='text-red-600 line-through'>FREE</span>
                  </h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" delay={0.8}>
                <div className='bg-black  rounded-lg flex justify-center items-center h-full w-full'>
                  {/* <form action="">
                    <div>
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
                  </form> *

                  <div className='pt-14 flex justify-start lg:justify-start'>
                    <ScrollAnimation animation="slideUp" delay={0.8}>
                      <button
                        className='bg-[#E7A647] px-3 py-2 rounded-[8px]'
                        style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                        
                      >
                        Download Now
                      </button>
                    </ScrollAnimation>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section> */}
      <section className="flex items-center justify-center overflow-hidden bg-white px-5 pb-16">
        <div className="flex items-center justify-center md:pt-10">
          <div className="grid grid-rows-1 lg:grid-cols-2">
            <div className="flex w-full justify-center lg:justify-end">
              <ScrollAnimation animation="slideRight" delay={0.8}>
                <div className="flex items-center justify-end pt-10">
                  <div>
                  <iframe
  className="h-[250px] w-[340px] rounded-xl pb-5 md:h-[580px] md:w-[490px] md:rounded-[50px]"
  src="https://www.youtube.com/embed/Oc2QVi4RdwU?si=5VCgMG0AV_RM7Za7"
  title="YouTube video player"
  style={{ border: 'none' }}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="flex items-center justify-center">
              <ScrollAnimation animation="slideLeft" delay={0.8}>
                <div className="flex h-full flex-col items-center justify-center gap-y-5 md:px-10 lg:items-start">
                  <div>
                    <h1
                      className="text-4xl font-semibold text-[#E7A647] lg:text-[47px]"
                      style={{ fontFamily: 'Minion Pro, serif' }}
                    >
                      Why This Program Is a Game-Changer (About Us)
                    </h1>
                  </div>

                  <div className="flex">
                    <p
                      className="items-center text-lg leading-7 text-gray-700 lg:items-start lg:text-[18px]"
                      style={{ fontFamily: 'Montserrat, serif' }}
                    >
                      If you’re here, chances are you’ve dealt with other
                      funding companies — and walked away with broken promises
                      and underwhelming results. That ends now.
                      <br />
                      <br />
                      At High Ticket Offer Financing, we help your clients
                      secure up to $4M in fast, reliable capital to purchase
                      your products and services — including up to $150K in
                      No-Doc funding with no hard credit check.
                      <br />
                      <br />
                      We do this by tapping into 11+ years of banking
                      relationships and a nationwide broker network, giving your
                      clients access to higher approvals and better terms.
                      <br />
                      <br />
                      Stop chasing funding. Start closing deals. Let’s get your
                      clients the capital they need — today.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-black px-5 pb-10">
        <div className="flex items-center justify-center pt-20">
          <div className="grid grid-rows-1 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <ScrollAnimation animation="slideRight" delay={0.8}>
                <div>
                  <img src={BBB} className="w-auto" alt="" />
                </div>
              </ScrollAnimation>
            </div>

            <div className="flex flex-col items-start justify-start gap-[15px] py-10 md:px-10 lg:items-start">
              <ScrollAnimation animation="zoomIn" delay={0.8}>
                <div>
                  <h1
                    className="text-center text-3xl font-semibold leading-[55px] text-[#E7A647] lg:text-start lg:text-[45px]"
                    style={{ fontFamily: 'Minion Pro, serif' }}
                  >
                    Funding Options Available For You & Your Customers
                  </h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.2}>
                <div className="flex items-center justify-start gap-x-3 pt-5">
                  <img src={MARK} className="h-6" alt="" />
                  <h1
                    className="text-white"
                    style={{ fontFamily: 'Montserrat, serif' }}
                  >
                    No Doc Financing Up to $200k
                  </h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.4}>
                <div className="flex items-center justify-start gap-x-3 pt-3">
                  <img src={MARK} className="h-6" alt="" />
                  <h1
                    className="text-white"
                    style={{ fontFamily: 'Montserrat, serif' }}
                  >
                    Small Business Loans Up to $4M
                  </h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.6}>
                <div className="flex items-center justify-start gap-x-3 pt-3">
                  <img src={MARK} className="h-6" alt="" />
                  <h1
                    className="text-white"
                    style={{ fontFamily: 'Montserrat, serif' }}
                  >
                    0% Business Funding Up to $150K
                  </h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.8}>
                <div className="flex items-center justify-start gap-x-3 pt-3">
                  <img src={MARK} className="h-6" alt="" />
                  <h1
                    className="text-white"
                    style={{ fontFamily: 'Montserrat, serif' }}
                  >
                    Home Equity Line of Credit Up to $4M
                  </h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.9}>
                <div className="flex items-center justify-start gap-x-3 pt-3">
                  <img src={MARK} className="h-6" alt="" />
                  <h1
                    className="text-white"
                    style={{ fontFamily: 'Montserrat, serif' }}
                  >
                    And More…
                  </h1>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-white px-5 pb-10">
        <div className="flex flex-col items-center justify-center pt-16">
          <ScrollAnimation animation="zoomIn" delay={0.8}>
            <div>
              <h1
                className="pb-2 text-center text-4xl text-[#E7A647] lg:text-[47px]"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                How It Works:
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.8}>
            <div className="pb-10">
              <h1
                className="text-center text-2xl text-black lg:text-[34px]"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Our pre-approval process is simple, quick, and easy.
              </h1>
            </div>
          </ScrollAnimation>
          <div className="grid gap-x-10 gap-y-8 lg:grid-cols-3">
            <div className="flex justify-center">
              <ScrollAnimation animation="slideRight" delay={0.3}>
                <div className="flex h-[244px] w-[320px] flex-col items-center justify-center rounded-xl bg-white shadow-lg shadow-black/35">
                  <div>
                    <img src={Out} alt="" />
                  </div>

                  <div>
                    <h1
                      className="py-3 text-2xl font-bold lg:text-[32px]"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontWeight: 'medium',
                      }}
                    >
                      Step 1
                    </h1>
                  </div>

                  <div>
                    <h1
                      className="font-bold lg:text-[24px]"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontWeight: 'medium',
                      }}
                    >
                      "Submit Your Client"
                    </h1>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="flex justify-center">
              <ScrollAnimation animation="fadeIn" delay={0.6}>
                <div className="flex h-[244px] w-[320px] flex-col items-center justify-center rounded-xl bg-white shadow-lg shadow-black/35">
                  <div>
                    <img src={Correct} alt="" />
                  </div>

                  <div>
                    <h1
                      className="py-3 text-2xl font-bold lg:text-[32px]"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontWeight: 'medium',
                      }}
                    >
                      Step 2
                    </h1>
                  </div>

                  <div>
                    <h1
                      className="font-bold lg:text-[24px]"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontWeight: 'medium',
                      }}
                    >
                      Same Day Pre-Approvals
                    </h1>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="flex justify-center">
              <ScrollAnimation animation="slideLeft" delay={0.9}>
                <div className="flex h-[244px] w-[320px] flex-col items-center justify-center rounded-xl bg-white shadow-lg shadow-black/35">
                  <div>
                    <img src={Money} alt="" />
                  </div>

                  <div>
                    <h1
                      className="py-3 text-2xl font-bold lg:text-[32px]"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontWeight: 'medium',
                      }}
                    >
                      Step 3{' '}
                    </h1>
                  </div>

                  <div>
                    <h1
                      className="font-bold lg:text-[24px]"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontWeight: 'medium',
                      }}
                    >
                      Receive Your Funds
                    </h1>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <ScrollAnimation animation="slideUp" delay={0.8}>
            <div className="pt-10">
              <button
                className="rounded-[8px] bg-[#E7A647] px-5 py-4"
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                onClick={handleButtonClick}
              >
                Apply Now
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

                {/* Client Success Highlights Section */}
                <section className="bg-white py-16 md:py-24 px-5">
          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div className="text-center mb-12">
              <h2 
                 className="text-xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase leading-[1.2] bg-gradient-to-r from-[#E7A647] to-[#CFA647] bg-clip-text text-transparent"
                 style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Client Success Highlights
              </h2>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="slideUp" delay={0.5}>
            <ClientSuccessHighlights />
          </ScrollAnimation>
      </section>

      <section className="min-h-screen overflow-hidden bg-black px-5 pb-10 pt-10">
        <div className="flex flex-col items-center justify-center pt-10">
          <ScrollAnimation animation="zoomIn" delay={0.8}>
            <div>
              <h1
                className="pb-2 text-center text-4xl text-[#E7A647] lg:text-[47px]"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                More Client Results
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.8}>
            <div className="flex w-full pt-10">
              <CustomSlider />
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="overflow-hidden bg-white px-10 pb-14 pt-10">
        <div className="flex flex-col items-center justify-center">
          <ScrollAnimation animation="zoomIn" delay={0.8}>
            <div>
              <h1
                className="py-9 text-center text-4xl font-semibold text-[#E7A647] lg:text-[47px]"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Recent Articles & News
              </h1>
            </div>
          </ScrollAnimation>

          <div className="grid gap-y-10 lg:grid-cols-3">
            <ScrollAnimation animation="slideRight" delay={0.3}>
              <div className="flex flex-col items-center justify-start gap-y-5 px-10 md:px-5">
                <div className="w-[340px] lg:w-auto">
                  <img src={Rect1} alt="" />
                </div>

                <div>
                  <h1
                    className="font-bold text-black"
                    style={{ fontFamily: 'Montserrat, serif' }}
                  >
                    {' '}
                    How to start a Profitable Funding Business
                  </h1>
                </div>

                <div className="flex w-full items-center justify-end">
                  {/* <p className='text-[#E7A647] ' style={{ fontFamily: 'Minion Pro, serif' }}>April 26, 2024</p> */}

                  <div className="flex items-center justify-center">
                    <p
                      className="text-xs text-black"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontStyle: 'normal',
                        fontWeight: 200,
                      }}
                    >
                      Read More
                    </p>

                    <img src={ArrowR} alt="" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={0.6}>
              <div className="flex flex-col items-center justify-start gap-y-5 px-10 md:px-5">
                <div className="">
                  <img src={Rect2} className="w-[387px]" alt="" />
                </div>

                <div>
                  <h1
                    className="font-bold text-black"
                    style={{ fontFamily: 'Montserrat, serif' }}
                  >
                    Why putting God at the center of your business is the key to
                    true success
                  </h1>
                </div>

                <div className="flex w-full items-center justify-end">
                  {/* <p className='text-[#E7A647] ' style={{ fontFamily: 'Minion Pro, serif' }}>April 26, 2024</p> */}

                  <div className="flex items-center justify-center">
                    <p
                      className="text-xs text-black"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontStyle: 'normal',
                        fontWeight: 200,
                      }}
                    >
                      Read More
                    </p>

                    <img src={ArrowR} alt="" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={0.9}>
              <div className="flex flex-col items-center justify-start gap-y-5 px-10 md:px-5">
                <div className="">
                  <img src={Rect3} alt="" />
                </div>

                <div>
                  <h1
                    className="font-bold text-black"
                    style={{ fontFamily: 'Montserrat, serif' }}
                  >
                    How to Secure Capital for Your Business
                  </h1>
                </div>

                <div className="flex w-full items-center justify-end">
                  {/* <p className='text-[#E7A647] ' style={{ fontFamily: 'Minion Pro, serif' }}>April 26, 2024</p> */}

                  <div className="flex items-center justify-center">
                    <p
                      className="text-xs text-black"
                      style={{
                        fontFamily: 'Montserrat, serif',
                        fontStyle: 'normal',
                        fontWeight: 200,
                      }}
                    >
                      Read More
                    </p>
                    <img src={ArrowR} alt="" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="slideUp" delay={0.8}>
            <div className="pt-10">
              <button
                className="rounded-[8px] bg-[#E7A647] px-5 py-4"
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
              >
                View All Post
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      {/* Client Success Highlights Section */}
      <section className="bg-black py-16 md:py-24 px-5">
        <ScrollAnimation animation="fadeIn" delay={0.3}>
          <div className="text-center mb-12">
            <h2
              className="text-xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase leading-[1.2]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-[#E7A647] to-[#CFA647] bg-clip-text text-transparent">CLIENT SUCCESS</span>{' '}
              <span className="text-white">HIGHLIGHTS</span>
            </h2>
          </div>
        </ScrollAnimation>
        
      </section>

      
      <section className="flex min-h-[40vh] w-full items-center justify-center overflow-hidden bg-black px-5">
        <ScrollAnimation animation="fadeIn" delay={0.8}>
          <div className="flex flex-col items-center justify-center gap-y-5 text-white">
            <h1
              className="text-3xl font-semibold lg:text-[47px]"
              style={{ fontFamily: 'Minion Pro, serif', fontWeight: 700 }}
            >
              Have Questions?
            </h1>
            <h2
              className="text-center text-xl font-semibold lg:text-[24px]"
              style={{
                fontFamily: 'Minion Pro, serif',
                fontWeight: 200,
                fontStyle: 'normal',
              }}
            >
              Complete questionnaire to speak to a representative.
            </h2>
            <div className="pt-1">
              <a
                href="https://landing.highticketofferfinancing.com/advert-page"
                target="_blank"
              >
                <button
                  className="rounded-[8px] bg-[#E7A647] px-3 py-3 text-black"
                  style={{
                    fontFamily: 'Montserrat, serif',
                    fontWeight: 'medium',
                  }}
                >
                  Complete Questionnaire
                </button>
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  )
}

export default Home
