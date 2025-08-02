import React, { useEffect, useState } from 'react'
import PHONEIMG from '../assets/images/phone1.webp'
import AWW from '../assets/images/aww.webp'
import BBB from '../assets/images/bbb.webp'
import Correct from '../assets/images/correct.webp'
import Out from '../assets/images/out.png'
import Money from '../assets/images/money.png'
import fundingBook from '../assets/images/fundingBook.webp'
import Rect1 from '../assets/images/pfb.webp'
import Rect2 from '../assets/images/bible.webp'
import Rect3 from '../assets/images/secure.webp'
import ArrowR from '../assets/images/arrowupright.png'
import ScrollAnimation from '../component/ScrollAnimation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CustomSlider from '../component/TestimonialSlider'
import ClientReviewCarousel from '../component/ClientReviewCarousel'
import ClientSuccessHighlights from '../component/ClientSuccessHighlights'
import Button from '../component/ui/Button'
import CheckIcon from '../component/ui/CheckMark'
import Quote from '../component/ui/Quote'
import Loader from '../component/ui/Loader'

// Form URL for buttons
const MAIN_URL = ' https://landing.highticketofferfinancing.com/application'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const [showIframe, setShowIframe] = useState(false)
  const [isIframeLoading, setIsIframeLoading] = useState(true)
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
    window.open(MAIN_URL, '_blank', 'noopener,noreferrer')
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

  //Scroll to clientReviews section
  const handleScroll = () => {
    document
      .getElementById('clientReviews')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="custom-header-bg relative flex h-auto min-h-[660px] items-center justify-center overflow-hidden rounded-bl-[35px] rounded-br-[35px] bg-black md:min-h-[628px] md:rounded-bl-[70px] md:rounded-br-[70px] 2xl:min-h-[705px]">
        <div className="relative z-10 flex w-full flex-col items-center justify-center pt-[5.2rem] md:max-w-[800px] md:flex-row md:gap-8 md:px-8 lg:max-w-[1800px] lg:px-24 xl:px-36 2xl:px-48">
          <div className="grow-1 flex w-[90%] flex-col items-center md:mr-8 md:w-full md:items-start md:gap-0 xl:mr-48">
            <ScrollAnimation animation="zoomIn" delay={0.5}>
              <div className="pb-4">
                {/* First h1: only visible from 414px to 767px */}
                <h1
                  className="hidden p-0 text-center text-3xl font-bold uppercase leading-[2rem] text-white min-[414px]:block md:hidden md:px-4 md:text-left md:text-4xl lg:block lg:text-5xl"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  HIGH&nbsp;TICKET&nbsp;FINANCING
                  <br />
                  For&nbsp;
                  <span
                    className="bg-gradient-golden-deep bg-clip-text text-transparent"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    COACHES,&nbsp;SERVICES, AND&nbsp;DIGITAL&nbsp;PRODUCTS
                  </span>
                </h1>

                {/* Second h1: visible below 414px and from 768px and above */}
                <h1
                  className="block p-0 text-center text-3xl font-bold uppercase leading-[2rem] text-white min-[414px]:hidden md:block md:px-4 md:text-left md:text-4xl lg:hidden lg:text-5xl"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  HIGH TICKET FINANCING For
                  <br />
                  <span
                    className="bg-gradient-golden-deep bg-clip-text text-transparent"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    COACHES,&nbsp;SERVICES, AND DIGITAL PRODUCTS
                  </span>
                </h1>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="zoomIn" delay={0.5} className="grow-1">
              <div className="flex justify-center">
                <p
                  className="px-5 pb-2 text-center text-[12px] uppercase text-white md:pb-4 md:text-left lg:text-[14px] 2xl:text-[18px]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Close more Deals, Scale Faster, and Eliminate Price Objections
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="zoomIn" delay={0.5} className="grow-1">
              <div className="flex flex-row gap-x-2 space-y-4 max-[345px]:flex-col md:pl-4">
                <Button
                  color="#1cb67c"
                  variant="solid"
                  className="mt-4 md:!min-w-[180px]"
                  width="144px"
                  onClick={handleScroll}
                >
                  See Client Results
                </Button>
                <Button
                  className="md:!min-w-[180px]"
                  width="144px"
                  onClick={handleButtonClick}
                >
                  Let's Get Started
                </Button>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="slideUp" delay={0.7}>
            <div className="sm:-48 relative -bottom-[46px] aspect-[340/600] w-52 min-[414px]:w-60 md:-bottom-[50px] md:w-56 lg:-bottom-[71px] lg:aspect-[490/900] lg:w-[18rem] xl:h-[528px] xl:w-[19rem]">
              {/* Golden glow effect */}
              <div
                className="controlGlow absolute bottom-[-138px] left-1/2 z-0 h-[390px] w-[420px] -translate-x-1/2 rounded-b-full md:bottom-[-50px] md:left-[81%] md:h-[400px] md:w-[400px] lg:bottom-[-30%] lg:left-auto lg:right-[-240%] lg:top-auto lg:h-[700px] lg:w-[700px] lg:rounded-full"
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
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="overflow-hidden bg-white px-5">
        <ScrollAnimation animation="fadeIn" delay={0.8}>
          <div className="flex flex-col items-center justify-center pt-10 md:pt-24">
            <div>
              <img src={AWW} alt="" loading="lazy" />
            </div>
          </div>
        </ScrollAnimation>
      </section>
      <Quote author="King Edwards">
        The only thing holding you back from achieving all of your goals{' '}
        <br className="hidden lg:block" /> is a financing partner that you
        can&nbsp;depend&nbsp;on.
      </Quote>
      {/* Client Review Carousel Section */}
      <section
        id="clientReviews"
        className="clientReviewCarousel bg-black px-5 py-8 md:py-12"
      >
        <ScrollAnimation animation="fadeIn" delay={0.3}>
          <div className="mb-12 text-center">
            <h2
              className="mb-4 text-3xl font-bold uppercase sm:text-4xl lg:text-5xl"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="bg-gradient-golden bg-clip-text text-transparent">
                WHAT OUR
              </span>{' '}
              <span className="text-white">CLIENTS</span>{' '}
              <span className="bg-gradient-golden-deep bg-clip-text text-transparent">
                ARE SAYING
              </span>
              <br />
              <span className="text-xxl bg-gradient-golden bg-clip-text text-transparent md:text-3xl lg:text-4xl">
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
        <div className="grid w-full grid-rows-1 items-center justify-center gap-10 rounded-3xl border-2 border-black py-8 md:grid-cols-2 md:py-12 lg:flex-row lg:gap-12 lg:px-12 lg:py-12">
          <ScrollAnimation animation="slideUp" delay={0.8}>
            <div className="flex w-full flex-1 px-3">
              <img
                loading="lazy"
                src={fundingBook}
                alt="book"
                className="mx-auto rounded-3xl shadow-2xl shadow-black md:rounded-[2.75rem]"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.9}>
            <div className="flex w-full flex-1 flex-col">
              <h1
                className="bg-gradient-golden-dark bg-clip-text px-4 pb-10 text-center text-3xl font-semibold leading-9 text-[#E7A647] text-transparent md:px-0 md:pb-6 md:text-left md:leading-[1.3] lg:text-start lg:text-[42px]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Download “The Ultimate Funding Qualification Guide”
                <span className="text-[#FF0000] line-through">FREE</span>
              </h1>
              <div className="flex w-full min-w-[100wv] justify-center gap-y-5 lg:justify-start">
                <div className="flex w-full min-w-[100wv] flex-col items-center justify-center gap-y-10 rounded-lg p-0">
                  <div className="flex w-full justify-center md:justify-start">
                    <Button>Download Free Guide</Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="custom-header-bg flex items-center justify-center overflow-hidden bg-white px-5 pb-16">
        <div className="flex items-center justify-center md:pt-10">
          <div className="grid grid-rows-1 gap-y-8 md:gap-y-12 lg:grid-cols-2">
            <div className="flex w-full justify-center lg:justify-end">
              <ScrollAnimation animation="slideRight" delay={0.8}>
                <div className="flex items-center justify-end pt-10">
                  <div>
                    {!showIframe ? (
                      <div
                        className="group relative h-[250px] w-[340px] cursor-pointer overflow-hidden rounded-md md:h-[580px] md:w-[490px] md:rounded-[42px]"
                        onClick={() => setShowIframe(true)}
                      >
                        {/* Thumbnail */}
                        <img
                          src="https://img.youtube.com/vi/Oc2QVi4RdwU/hqdefault.jpg"
                          alt="Video thumbnail"
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />

                        {/* Play Button Overlay */}
                        <div className="group absolute inset-0 z-10 flex items-center justify-center bg-black/40">
                          <div className="transform rounded-full bg-black bg-opacity-80 p-3 transition-transform duration-300 group-hover:scale-110">
                            <svg
                              className="h-6 w-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6 4l10 6-10 6V4z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        {isIframeLoading && <Loader />}
                        <iframe
                          className="h-[250px] w-[340px] rounded-md pb-5 md:h-[580px] md:w-[490px] md:rounded-[42px]"
                          src="https://www.youtube.com/embed/Oc2QVi4RdwU?si=5VCgMG0AV_RM7Za7&autoplay=1"
                          title="YouTube video player"
                          style={{ border: 'none' }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          loading="lazy"
                          onLoad={() => setIsIframeLoading(false)}
                        ></iframe>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className="flex items-center justify-center">
              <ScrollAnimation animation="slideLeft" delay={0.8}>
                <div className="flex h-full flex-col items-center justify-center gap-y-5 md:px-10 lg:items-start">
                  <div>
                    <h1
                      className="bg-gradient-to-r from-[#E7A647] to-[#A78430] bg-clip-text text-3xl font-semibold uppercase text-transparent sm:text-4xl md:mb-4 lg:text-5xl"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      About Us
                    </h1>
                  </div>

                  <div className="flex">
                    <p
                      className="items-center text-center text-lg leading-7 text-white md:text-left lg:items-start lg:text-[18px]"
                      style={{ fontFamily: 'Montserrat, serif' }}
                    >
                      If you’re here, it’s likely because you’ve worked with
                      other funding companies in the past—only to be met with
                      empty promises and disappointing results. To make matters
                      worse, some have even charged you upfront fees without
                      delivering meaningful outcomes. That ends today!
                      <br />
                      <br />
                      At High Ticket Offer Financing, we believe in results, not
                      risks. That’s why we charge zero upfront fees—we only get
                      paid when we successfully secure your funding.
                      <br />
                      <br />
                      It’s time to stop trying to get funded and start getting
                      funded. Let’s get to work.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-white px-5 pb-10">
        <div className="flex items-center justify-center pt-20">
          <div className="grid grid-rows-1 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <ScrollAnimation animation="slideRight" delay={0.8}>
                <div>
                  <img
                    loading="lazy"
                    src={BBB}
                    className="w-auto"
                    alt="bank img"
                  />
                </div>
              </ScrollAnimation>
            </div>

            <div className="flex flex-col items-start justify-start gap-[15px] py-10 md:px-10 lg:items-start">
              <ScrollAnimation animation="zoomIn" delay={0.8}>
                <div>
                  <h1
                    className="bg-gradient-golden-dark bg-clip-text px-4 text-center text-3xl font-semibold uppercase leading-9 text-[#E7A647] text-transparent md:px-0 md:text-left md:leading-[1.3] lg:text-start lg:text-[42px]"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Funding Options Available For You & Your Customers
                  </h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.2}>
                <div className="flex items-center justify-start gap-x-3 pt-5">
                  <CheckIcon />
                  <h1
                    className="text-black"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: '600',
                    }}
                  >
                    Small Business Loans Up to $4M
                  </h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.4}>
                <div className="flex items-center justify-start gap-x-3 pt-3">
                  <CheckIcon />
                  <h1
                    className="text-black"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: '600',
                    }}
                  >
                    No Doc Financing Up to $200k
                  </h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.6}>
                <div className="flex items-center justify-start gap-x-3 pt-3">
                  <CheckIcon />
                  <h1
                    className="text-black"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: '600',
                    }}
                  >
                    0% Business Funding Up to $150K
                  </h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.8}>
                <div className="flex items-center justify-start gap-x-3 pt-3">
                  <CheckIcon />
                  <h1
                    className="text-black"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: '600',
                    }}
                  >
                    Home Equity Line of Credit Up to $4M
                  </h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.9}>
                <div className="flex items-center justify-start gap-x-3 pt-3">
                  <CheckIcon />
                  <h1
                    className="text-black"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: '600',
                    }}
                  >
                    And More…
                  </h1>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <section className="custom-header-bg overflow-hidden px-5 pb-10">
        <div className="flex flex-col items-center justify-center pt-16">
          <ScrollAnimation animation="zoomIn" delay={0.8}>
            <div>
              <h1
                className="bg-gradient-golden-dark bg-clip-text pb-2 text-center text-4xl font-semibold uppercase text-transparent md:mb-4 md:text-left lg:text-5xl"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                How It Works:
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.8}>
            <div className="pb-10 md:pb-14 lg:pb-20">
              <h1
                className="text-center text-xl uppercase text-white md:text-2xl md:leading-10 lg:text-[38px]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
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
                    <img loading="lazy" src={Out} alt="" />
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
                    <img src={Correct} alt="" loading="lazy" />
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
                    <img src={Money} alt="money" loading="lazy" />
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
              <Button
                className="text-[1rem]"
                padding="14px 28px"
                onClick={handleButtonClick}
              >
                Apply Now
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      {/* Client Success Highlights Section */}
      <section className="bg-white py-8 md:px-5 md:py-12">
        <ScrollAnimation animation="slideUp" delay={0.3}>
          <div className="mb-12 text-center">
            <h2
              className="mb-4 bg-gradient-golden-dark bg-clip-text text-3xl font-bold uppercase text-transparent sm:text-4xl lg:text-5xl"
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
      <section className="overflow-hidden bg-black px-5 pb-10 pt-10 sm:pb-12 sm:pt-12">
        <div className="flex flex-col items-center justify-center">
          <ScrollAnimation animation="zoomIn" delay={0.8}>
            <div>
              <h1
                className="bg-gradient-golden-dark bg-clip-text pb-0 text-center text-3xl font-bold uppercase leading-[1.2] text-transparent sm:text-4xl md:text-left lg:text-5xl"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Frequently Asked Questions
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.8}>
            <div className="flex w-full">{<CustomSlider />}</div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="overflow-hidden bg-white px-10 pb-14 pt-10">
        <div className="flex flex-col items-center justify-center">
          <ScrollAnimation animation="zoomIn" delay={0.8}>
            <div>
              <h1
                className="mb-8 bg-gradient-golden-dark bg-clip-text py-9 text-3xl font-bold uppercase leading-[1.2] text-transparent sm:text-4xl md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Recent Articles & News
              </h1>
            </div>
          </ScrollAnimation>

          <div className="grid gap-y-10 lg:grid-cols-3">
            <ScrollAnimation animation="slideRight" delay={0.3}>
              <div className="flex flex-col items-center justify-start gap-y-5 px-10 md:px-5">
                <div className="aspect-[17/10] w-[340px] lg:w-auto">
                  <img
                    src={Rect1}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
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

                    <img src={ArrowR} alt="" loading="lazy" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={0.6}>
              <div className="flex flex-col items-center justify-start gap-y-5 px-10 md:px-5">
                <div className="aspect-[17/10] w-[340px] lg:w-auto">
                  <img
                    src={Rect2}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
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

                    <img src={ArrowR} alt="" loading="lazy" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={0.9}>
              <div className="flex flex-col items-center justify-start gap-y-5 px-10 md:px-5">
                <div className="aspect-[17/10] w-[340px] lg:w-auto">
                  <img
                    src={Rect3}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
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
                    <img src={ArrowR} alt="" loading="lazy" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="slideUp" delay={0.8}>
            <div className="pt-10">
              <Button className="text-[1rem]" padding="14px 28px">
                View All Posts
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      <section className="custom-header-bg flex h-[480px] min-h-[40vh] w-full flex-col items-center justify-center overflow-hidden bg-black px-5 text-center">
        <div className="">
          <ScrollAnimation animation="fadeIn" delay={0.3}>
            <div className="mb-6 text-center">
              <h2
                className="mb-4 bg-gradient-golden-dark bg-clip-text text-3xl font-bold uppercase leading-[1.2] text-transparent sm:text-4xl md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Have Questions?
              </h2>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.8}>
            <div className="flex flex-col items-center justify-center gap-y-[3rem] text-white lg:gap-y-[3.5rem]">
              <h1
                className="text-2xl font-semibold leading-7 md:text-3xl md:leading-[2.3rem] lg:text-[38px] lg:leading-[2.8rem]"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                }}
              >
                Complete questionnaire to speak to a
                <br />
                representative.
              </h1>
              <div className="pt-1">
                <Button onClick={handleButtonClick}>
                  Complete Questionnaire
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

export default Home
