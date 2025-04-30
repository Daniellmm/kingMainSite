import React, { useEffect } from 'react';
import MText from '../assets/images/png1.png';
import DollarCoin from '../assets/images/bg-live/bookmyl.png';
import DollarCoin2 from '../assets/images/bg-live/bookmyr.png';
import BANK from '../assets/images/bank2.png';
import AWW from '../assets/images/aww.png';
import BBB from '../assets/images/bbb.png';
import MARK from '../assets/images/mark.png';
import Correct from '../assets/images/correct.png';
import Out from '../assets/images/out.png';
import Money from '../assets/images/money.png';
import Rect1 from '../assets/images/rect1.png';
import Rect2 from '../assets/images/rect2.png';
import Rect3 from '../assets/images/rect3.png';
import ArrowR from '../assets/images/arrowupright.png';
import ARROWD from '../assets/images/arrowD.png'
import ScrollAnimation from '../component/ScrollAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from '../component/TestimonialSlider';

// Form URL for buttons
const FORM_URL = "https://api.leadconnectorhq.com/widget/form/6cFWjFbL2wvGc3vBFdVd";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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

  // Function to handle button clicks
  const handleButtonClick = () => {
    window.open(FORM_URL, '_blank');
  };

  return (
    <>
      <section className='relative overflow-hidden pb-10  bg-black flex justify-center items-center min-h-screen md:min-h-0 md:rounded-br-[100px] md:rounded-bl-[100px]'>
        <div className='z-10 relative pt-24 w-full flex flex-col justify-center items-center'>
          <ScrollAnimation animation="zoomIn" delay={0.5}>
            <div className='pb-2'>
              <h1 className="lg:text-8xl px-1 text-5xl text-center font-bold bg-gradient-to-r from-[#E7A647] to-[#855B1F] bg-clip-text text-transparent" style={{ fontFamily: 'Minion Pro, serif' }}>
                GET UP TO $4M
              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.5}>

            <div className='flex justify-center'>
              <p className='text-white pb-8 text-center  md:text-[26px]' style={{ fontFamily: 'Minion Pro, serif' }}>
                in Fast, Reliable Financing for You & Your Customers!
                <span className='text-[#e7a647]'> Watch this video.</span>
              </p>

              <div className='flex items-end'>
                <img src={ARROWD} className=' animate-bounce lg:pl-4' alt="" />
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={0.7}>
            <div>
              <iframe className='lg:w-[850px] md:w-[640px] pb-5 rounded-2xl w-[340px] h-[250px] md:rounded-[50px] md:h-[415px]'
                src="https://www.youtube.com/embed/JvPEDv5MiFg?si=OlcE94Yhzy49qHXs" title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.6}>
            <div className='md:pt-0'>
              <button
                className='bg-[#E7A647] px-3 py-2 rounded-[8px]'
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                onClick={handleButtonClick}
              >
                Apply Now
              </button>
            </div>
          </ScrollAnimation>
        </div>
        <div className='w-full h-full bg-black opacity-60 inset-0 absolute'></div>
      </section>

      <section className='overflow-hidden px-5 bg-white  pb-14'>
        <ScrollAnimation animation="fadeIn" delay={0.8}>
          <div className='flex flex-col justify-center items-center pt-10 md:pt-24 '>
            <div className='pb-10'>
              <img src={AWW} alt="" />
            </div>

            <div>
              <h1 className='text-black text-xl lg:text-[28px] tracking-[1px] font-thin text-center leading-10' style={{ fontFamily: 'Minion Pro, serif' }}>"Our mission is to create more millionaire entrepreneurs by ensuring you have all <br className='hidden lg:block' />the funding you need to start and scale your business aggressively."</h1>
            </div>
            <div>
              <h1 className='text-[#E7A647] text-3xl lg:text-4xl pt-6 text-center' style={{ fontFamily: 'Adelia, serif' }}>C.e.o, Founder</h1>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <section className='overflow-hidden md:px-10 bg-black  pb-14'>
        <div className='flex justify-center items-center  pt-5'>
          <div className='grid md:grid-cols-2 grid-rows-1'>
            <ScrollAnimation animation="slideRight" delay={0.8}>
              <div className='flex justify-end items-center  '>
                <img src={BANK} alt="" className='' />
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
                <div className='bg-white p-7 rounded-lg'>
                  <form action="">
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
                  </form>

                  <ScrollAnimation animation="slideUp" delay={0.8}>
                    <div className='pt-14 flex justify-center lg:justify-start'>
                      <button
                        className='bg-[#E7A647] px-3 py-2 rounded-[8px]'
                        style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                        onClick={handleButtonClick}
                      >
                        Download Now
                      </button>
                    </div>
                  </ScrollAnimation>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <section className='overflow-hidden px-5 bg-white flex justify-center items-center pb-16'>
        <div className='flex justify-center items-center md:pt-10'>
          <div className='grid lg:grid-cols-2 grid-rows-1'>
            <div className='flex justify-center lg:justify-end w-full'>
              <ScrollAnimation animation="slideRight" delay={0.8}>
                <div className='flex justify-end items-center pt-10'>
                  <div>
                    <iframe className='md:w-[490px] w-[340px] pb-5 rounded-xl h-[250px] md:rounded-[50px] md:h-[580px]' src="https://www.youtube.com/embed/Oc2QVi4RdwU?si=5VCgMG0AV_RM7Za7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className='flex justify-center items-center'>
              <ScrollAnimation animation="slideLeft" delay={0.8}>
                <div className='flex flex-col gap-y-5 md:px-10 h-full items-center lg:items-start justify-center '>
                  <div>
                    <h1 className='text-[#E7A647] text-4xl lg:text-[47px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>About Us</h1>
                  </div>

                  <div className='flex'>
                    <p className='text-lg lg:text-[18px] items-center lg:items-start text-gray-700 leading-7' style={{ fontFamily: 'Montserrat, serif' }}>If you're here, it's likely because you've worked with other funding companies in the past only
                      to be met with empty promises and disappointing results. To make matters worse, some have
                      even charged you upfront fees without delivering meaningful outcomes. That ends today!
                      <br /><br />
                      At High Ticket Offer Financing, we believe in results, not risks. That's why we charge zero
                      upfront fees—we only get paid when we successfully secure your funding.
                      <br /><br />

                      It's time to stop trying to get funded and start getting funded. Let's get to work.</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-5 bg-black pb-10'>
        <div className='flex justify-center items-center pt-20'>
          <div className='grid md:grid-cols-2 grid-rows-1'>
            <div className='flex justify-center items-center'>

              <ScrollAnimation animation='slideRight' delay={0.8}>
                <div>
                  <img src={BBB} className=' w-auto' alt="" />
                </div>
              </ScrollAnimation>

            </div>

            <div className='flex flex-col justify-center items-center lg:items-start py-10 md:px-10 gap-[15px]'>
              <ScrollAnimation animation='zoomIn' delay={0.8}>
                <div>
                  <h1 className='text-[#E7A647] text-center lg:text-start font-semibold text-3xl lg:text-[45px] leading-[55px]' style={{ fontFamily: 'Minion Pro, serif' }}>Funding Options Available For You & Your Customers</h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation='slideUp' delay={0.2}>
                <div className='flex gap-x-3 pt-5 justify-start items-center'>
                  <img src={MARK} className='h-6' alt="" />
                  <h1 className='text-white ' style={{ fontFamily: 'Montserrat, serif' }}>Small Business Loans Up to $3M</h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation='slideUp' delay={0.4}>
                <div className='flex gap-x-3 pt-3 justify-start items-center'>
                  <img src={MARK} className='h-6' alt="" />
                  <h1 className='text-white ' style={{ fontFamily: 'Montserrat, serif' }}>No Doc Funding Up to $200K</h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation='slideUp' delay={0.6}>
                <div className='flex gap-x-3 pt-3 justify-start items-center'>
                  <img src={MARK} className='h-6' alt="" />
                  <h1 className='text-white ' style={{ fontFamily: 'Montserrat, serif' }}>0% Business Funding Up to $150K</h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation='slideUp' delay={0.8}>
                <div className='flex gap-x-3 pt-3 justify-start items-center'>
                  <img src={MARK} className='h-6' alt="" />
                  <h1 className='text-white ' style={{ fontFamily: 'Montserrat, serif' }}>Home Equity Lines of Credit Up to $4M</h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation='slideUp' delay={0.9}>
                <div className='flex gap-x-3 pt-3 justify-start items-center'>
                  <img src={MARK} className='h-6' alt="" />
                  <h1 className='text-white ' style={{ fontFamily: 'Montserrat, serif' }}>And More…</h1>
                </div>
              </ScrollAnimation>

            </div>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-5 bg-white pb-10'>
        <div className='flex flex-col justify-center items-center pt-16'>
          <ScrollAnimation animation="zoomIn" delay={0.8}>
            <div>
              <h1 className='text-[#E7A647] text-4xl text-center lg:text-[47px] pb-2' style={{ fontFamily: 'Minion Pro, serif' }}>How It Works:</h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.8}>
            <div className='pb-10'>
              <h1 className='text-black  text-2xl lg:text-[34px] text-center' style={{ fontFamily: 'Minion Pro, serif' }}>Our pre-approval process is simple, quick, and easy.</h1>
            </div>
          </ScrollAnimation>
          <div className='grid lg:grid-cols-3 gap-x-10 gap-y-8'>

            <div className='flex justify-center'>
              <ScrollAnimation animation="slideRight" delay={0.3}>
                <div className='h-[244px] w-[320px]   shadow-lg shadow-black/35 bg-white rounded-xl flex flex-col justify-center items-center'>
                  <div>
                    <img src={Out} alt="" />
                  </div>

                  <div><h1 className='font-bold text-2xl lg:text-[32px] py-3' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Step 1</h1></div>

                  <div>
                    <h1 className='  font-bold lg:text-[24px] ' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Click "Apply Now"</h1>
                  </div>

                </div>
              </ScrollAnimation>
            </div>

            <div className='flex justify-center'>
              <ScrollAnimation animation="fadeIn" delay={0.6}>
                <div className='h-[244px] w-[320px]  shadow-lg shadow-black/35 bg-white rounded-xl flex flex-col justify-center items-center'>
                  <div>
                    <img src={Correct} alt="" />
                  </div>

                  <div><h1 className='font-bold text-2xl lg:text-[32px] py-3' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Step 2</h1></div>

                  <div>
                    <h1 className='  font-bold lg:text-[24px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Same Day Pre-Approvals</h1>
                  </div>

                </div>
              </ScrollAnimation>
            </div>

            <div className='flex justify-center'>
              <ScrollAnimation animation="slideLeft" delay={0.9}>
                <div className='h-[244px] w-[320px]  shadow-lg shadow-black/35 bg-white rounded-xl flex flex-col justify-center items-center'>
                  <div>
                    <img src={Money} alt="" />
                  </div>

                  <div><h1 className='font-bold text-2xl lg:text-[32px] py-3' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Step 3 </h1></div>

                  <div>
                    <h1 className='  font-bold lg:text-[24px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Receive Your Funds</h1>
                  </div>

                </div>
              </ScrollAnimation>
            </div>
          </div>

          <ScrollAnimation animation="slideUp" delay={0.8}>
            <div className='pt-10'>
              <button
                className='bg-[#E7A647] px-5 py-4 rounded-[8px]'
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                onClick={handleButtonClick}
              >
                Apply Now
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className='overflow-hidden px-5 bg-black min-h-[40vh] pt-10 pb-10'>
        <div className='flex flex-col justify-center items-center pt-10'>
          <ScrollAnimation animation="zoomIn" delay={0.8}>
            <div>
              <h1 className='text-[#E7A647] text-4xl text-center lg:text-[47px] pb-2' style={{ fontFamily: 'Minion Pro, serif' }}>Client Results</h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.8}>
            <div className='w-full flex pt-10'>
              <CustomSlider />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className='overflow-hidden px-10 bg-white pt-10 pb-14'>
        <div className='flex flex-col justify-center items-center'>
          <ScrollAnimation animation="zoomIn" delay={0.8}>
            <div>
              <h1 className='text-[#E7A647] text-4xl text-center lg:text-[47px] font-semibold py-9' style={{ fontFamily: 'Minion Pro, serif' }} >
                Recent Articles & News
              </h1>
            </div>
          </ScrollAnimation>

          <div className='grid lg:grid-cols-3 gap-y-10'>

            <ScrollAnimation animation="slideRight" delay={0.3}>
              <div className='flex flex-col justify-start gap-y-5 items-center px-10 md:px-5'>
                <div className='w-[340px] lg:w-auto'>
                  <img src={Rect1} alt="" />
                </div>

                <div>
                  <h1 className='text-black font-bold ' style={{ fontFamily: 'Montserrat, serif' }}>Unlocking the Power of  Content Marketing: Strategies for Success</h1>
                </div>

                <div className='flex justify-end items-center w-full'>
                  {/* <p className='text-[#E7A647] ' style={{ fontFamily: 'Minion Pro, serif' }}>April 26, 2024</p> */}

                  <div className='flex justify-center items-center'>
                    <p className='text-black text-xs' style={{ fontFamily: 'Montserrat, serif', fontStyle: 'normal', fontWeight: 200 }}>Read More</p>

                    <img src={ArrowR} alt="" />
                  </div>
                </div>

              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={0.6}>
              <div className='flex flex-col justify-start gap-y-5 items-center px-10 md:px-5  '>
                <div className=''>
                  <img src={Rect2} className='w-[387px]' alt="" />
                </div>

                <div>
                  <h1 className='text-black font-bold' style={{ fontFamily: 'Montserrat, serif' }}>Unlocking the Power of  Content Marketing: Strategies for Success</h1>
                </div>

                <div className='flex justify-end items-center w-full'>
                  {/* <p className='text-[#E7A647] ' style={{ fontFamily: 'Minion Pro, serif' }}>April 26, 2024</p> */}

                  <div className='flex justify-center items-center'>
                    <p className='text-black text-xs' style={{ fontFamily: 'Montserrat, serif', fontStyle: 'normal', fontWeight: 200 }}>Read More</p>

                    <img src={ArrowR} alt="" />
                  </div>
                </div>

              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={0.9}>
              <div className='flex flex-col justify-start gap-y-5 items-center px-10 md:px-5  '>
                <div className=''>
                  <img src={Rect3} alt="" />
                </div>

                <div>
                  <h1 className='text-black font-bold' style={{ fontFamily: 'Montserrat, serif' }}>Unlocking the Power of  Content Marketing: Strategies for Success</h1>
                </div>

                <div className='flex justify-end items-center w-full'>
                  {/* <p className='text-[#E7A647] ' style={{ fontFamily: 'Minion Pro, serif' }}>April 26, 2024</p> */}

                  <div className='flex justify-center items-center'>
                    <p className='text-black text-xs' style={{ fontFamily: 'Montserrat, serif', fontStyle: 'normal', fontWeight: 200 }}>Read More</p>
                    <img src={ArrowR} alt="" />
                  </div>
                </div>

              </div>
            </ScrollAnimation>

          </div>

          <ScrollAnimation animation="slideUp" delay={0.8}>
            <div className='pt-10'>
              <button className='bg-[#E7A647] px-5 py-4 rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                View All Post
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>


      <section className='overflow-hidden px-5 justify-center items-center w-full flex bg-black min-h-[40vh]'>
        <ScrollAnimation animation="fadeIn" delay={0.8}>
          <div className='flex flex-col justify-center items-center text-white gap-y-5'>
            <h1 className=' text-3xl lg:text-[47px] font-semibold' style={{ fontFamily: 'Minion Pro, serif', fontWeight: 700 }}>Have Questions?</h1>
            <h2 className=' text-xl lg:text-[24px] font-semibold text-center' style={{ fontFamily: 'Minion Pro, serif', fontWeight: 200, fontStyle: 'normal' }}>Complete questionnaire to speak to a representative.</h2>
            <div className='pt-1'>
              <button
                className='bg-[#E7A647] text-black px-3 py-3 rounded-[8px]'
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                onClick={handleButtonClick}
              >
                Complete Questionnaire
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default Home;