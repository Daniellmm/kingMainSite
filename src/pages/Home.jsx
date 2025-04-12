import React, { useEffect } from 'react';
import MText from '../assets/images/png1.png';
import DollarCoin from '../assets/images/bg-live/bookmyl.png';
import DollarCoin2 from '../assets/images/bg-live/bookmyr.png';
import BANK from '../assets/images/bank.png';
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
import ScrollAnimation from '../component/ScrollAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Hero section animations
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

    // Floating animation for coins
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

  return (
    <>
      <section className='relative overflow-hidden pb-10 px-10 bg-black flex justify-center items-center min-h-screen md:rounded-br-[100px] md:rounded-bl-[100px]'>
        <div className='z-10 relative pt-32 w-full flex flex-col justify-center items-center'>
          <ScrollAnimation animation="fadeIn" delay={0.3}>
            <div className='pb-7'>
              <img src={MText} alt="" />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.5}>
            <div>
              <p className='text-white pb-5 text-center text-sm md:text-xl' style={{ fontFamily: 'Minion Pro, serif' }}>in Fast, Reliable Financing for You & Your Customers!</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={0.7}>
            <div>
              <iframe className='lg:w-[650px] pb-5 rounded-2xl h-[250px] lg:rounded-[50px] lg:h-[415px]' src="https://www.youtube.com/embed/m2ERPhqNENk?si=LBHOcW6Eti5e4HTK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.9}>
            <div>
              <button className='bg-[#E7A647] px-3 py-2 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                Check My Funding Eligibility
              </button>
            </div>
          </ScrollAnimation>
        </div>

        <div className='absolute top-[200px] left-[-40px] hero-dollar-left'>
          <img src={DollarCoin} alt="" className='h-[100px] md:h-[120px] lg:h-auto' />
        </div>
        <div className='absolute bottom-[100px] right-[-40px] hero-dollar-right'>
          <img src={DollarCoin2} alt="" className='h-[100px] md:h-[120px] lg:h-auto' />
        </div>
        <div className='w-full h-full bg-black opacity-60 inset-0 absolute'></div>
      </section>


      <section className='overflow-hidden px-10 bg-white min-h-screen pb-14'>
        <div className='flex justify-center items-center pt-10'>
          <div className='grid md:grid-cols-2 grid-rows-1'>
            <ScrollAnimation animation="slideRight">
              <div className='flex justify-center items-center'>
                <img src={BANK} alt="" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideLeft" delay={0.2}>
              <div className='flex flex-col gap-y-5 lg:px-24 justify-center'>
                <div>
                  <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>The Ultimate Funding Qualifications Guide for Free</h1>
                </div>

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

                <div>
                  <button className='bg-[#E7A647] px-3 py-2 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                    Download Now
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-black md:min-h-screen pb-14'>
        <ScrollAnimation animation="fadeIn">
          <div className='flex flex-col justify-center items-center pt-24 pb-10'>
            <div className='pb-10'>
              <img src={AWW} alt="" />
            </div>

            <div>
              <h1 className='text-white text-center leading-10' style={{ fontFamily: 'Minion Pro, serif' }}>"Our mission is to create more millionaire entrepreneurs by ensuring you have all <br />the funding you need to start and scale your business aggressively."</h1>
            </div>
            <div>
              <h1 className='text-[#E7A647] text-2xl pt-6 text-center' style={{ fontFamily: 'Adelia, serif' }}>C.e.o, Founder</h1>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      
      <section className='overflow-hidden px-10 bg-white flex justify-center items-center min-h-screen pb-14'>
        <div className='flex justify-center items-center pt-20'>
          <div className='grid md:grid-cols-2 grid-rows-1'>
            <ScrollAnimation animation="slideRight">
              <div className='flex justify-center items-center'>
                <div>
                  <iframe className='lg:w-[450px] pb-5 rounded-xl h-[250px] lg:rounded-[50px] lg:h-[450px]' src="https://www.youtube.com/embed/m2ERPhqNENk?si=LBHOcW6Eti5e4HTK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideLeft">
              <div className='flex flex-col gap-y-5 md:px-10 lg:px-24 justify-center '>
                <div>
                  <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>About Us</h1>
                </div>

                <div>
                  <p className='text-sm text-gray-700' style={{ fontFamily: 'Montserrat, serif' }}>If you're here, it's likely because you've worked with other funding companies in the past only
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
      </section>

      

      <section className='overflow-hidden px-10 justify-center items-center w-full flex bg-black min-h-[55vh]'>
        <ScrollAnimation animation="fadeIn">
          <div className='flex flex-col justify-center items-center text-white gap-y-5'>
            <h1 className=' text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif', fontWeight: 700 }}>Have Questions?</h1>
            <h2 className=' text-xl font-semibold text-center' style={{ fontFamily: 'Minion Pro, serif', fontWeight: 200, fontStyle: 'normal' }}>Complete questionnaire to speak to a representative.</h2>
            <div className='pt-7'>
              <button className='bg-[#E7A647] text-black px-3 py-3 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
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