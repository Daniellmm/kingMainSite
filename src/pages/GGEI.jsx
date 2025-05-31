import React, { useEffect, useState, useRef } from 'react'
import MText from '../assets/images/png5.png'
import DollarCoin from '../assets/images/bg-live/3Ddollar.png'
import DollarCoin2 from '../assets/images/bg-live/3Ddollar1.png'
import SCI from '../assets/images/sci.png'
import YELLOW from '../assets/images/yellow.png'
import BIGLOGO2 from '../assets/images/biglogo2.png'
import DART from '../assets/images/dart.png'
import LONG2 from '../assets/images/king4.png'
import alx from '../assets/images/alx.jpg'
import BLOCK from '../assets/images/block.png'
import CHECK from '../assets/images/check.png'
import LAPTOP from '../assets/images/laptop.png'
import GIRL from '../assets/images/girl.png'
import KF from '../assets/images/team/kf.png'
import AF from '../assets/images/team/af.png'
import GF from '../assets/images/team/gf.png'
import RF from '../assets/images/team/ramses.png'
import SF from '../assets/images/team/sf.png'
import KFS from '../assets/images/team/1.png'
import AFS from '../assets/images/team/2.png'
import GFS from '../assets/images/team/3.png'
import RFS from '../assets/images/team/4.png'
import SFS from '../assets/images/team/5.png'
import KING from '../assets/images/team/king.png'
import GENE from '../assets/images/team/gene.png'
import ALEXIS from '../assets/images/team/alexis.png'
import RAMSEY from '../assets/images/team/ramsey.png'
import SHAWN from '../assets/images/team/shawn.png'

import ScrollAnimation from '../component/ScrollAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const FORM_URL = "https://api.leadconnectorhq.com/widget/form/BH71Y2GyuR17dADcvbhI"


gsap.registerPlugin(ScrollTrigger);

const TeamSlider = ({ teamMembers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      // Move to next slide
      setCurrentIndex((prevIndex) =>
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [teamMembers.length]);

  // When currentIndex changes, scroll the slider
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentIndex * sliderRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div className="w-full relative">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {teamMembers.map((member, index) => (
          <div key={index} className="min-w-full snap-center flex justify-center">
            <div className="relative">
              <img src={member.frame} className="h-[400px] z-10" alt="" />
              <div className="absolute z-10 top-[-20px] left-[60px]">
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
      <div className="flex justify-center gap-2 mt-5">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#E7A647]' : 'bg-gray-300'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};


const GGEI = () => {

  const teamMembers = [
    { frame: AFS, name: ALEXIS, isGene: false },
    { frame: KFS, name: KING, isGene: false },
    { frame: GFS, name: GENE, isGene: true },
    { frame: RFS, name: RAMSEY, isGene: false },
    { frame: SFS, name: SHAWN, isGene: false }
  ];


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

  https://youtu.be/LbuGAPU2dqQ?si=b0FVL-F4oT-E9pp0

  return (
    <>
      <section className='relative overflow-hidden pb-10 px-10 bg-black flex justify-center items-center min-h-[70vh] md:min-h-0 md:rounded-br-[100px] md:rounded-bl-[100px]'>
        <div className='z-10 relative pt-20 w-full flex flex-col justify-center items-center'>
          <ScrollAnimation animation="zoomIn" delay={0.5}>
            <div className='pb-2'>
              {/* <img src={MText} alt="" /> */}
              <h1 className="lg:text-8xl text-4xl text-center font-bold uppercase bg-gradient-to-r from-[#E7A647] to-[#855B1F] bg-clip-text text-transparent" style={{ fontFamily: 'Minion Pro, serif' }}>
                Become Your Own Bank Summit              </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.5}>
            <div>
              <p className='text-white text-center text-xl uppercase md:text-[26px] pb-8' style={{ fontFamily: 'Minion Pro, serif' }}>
                Learn How To Turn Your Business into a Bank That Grows Your Wealth
                Agressively and Consistently at GGEI’s
              </p>
            </div>

            <div className='flex justify-center'>
              <iframe className='lg:w-[850px] pb-5 w-[340px] md:w-[540px] rounded-2xl h-[250px] lg:rounded-[50px] lg:h-[415px]' src="https://www.youtube.com/embed/LbuGAPU2dqQ?si=b0FVL-F4oT-E9pp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div>
              <button
                onClick={handleButtonClick}
                className='bg-[#E7A647] px-3 py-2  rounded-[8px]'
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                Secure My Spot
              </button>
            </div>
          </ScrollAnimation>
        </div>

        <div className='absolute top-[600px] lg:top-[350px] left-[0px] '>
          <img src={DollarCoin} alt="" className='h-[100px] md:h-[120px] hero-dollar-left lg:h-auto' />
        </div>
        <div className='absolute top-[100px] right-[0px]'>
          <img src={DollarCoin2} alt="" className='h-[200px] hero-dollar-right md:h-[120px] lg:h-auto' />
        </div>
        <div className='w-full h-full bg-black opacity-60 inset-0 absolute'></div>
      </section>


      <section className='overflow-hidden flex justify-center px-5 bg-gray-200 py-10'>
        <div className='py-14 lg:px-16 px-2 bg-white rounded-xl flex justify-center'>
          <div className='flex flex-col justify-center items-center pt-8 '>

            <ScrollAnimation animation="zoomIn" delay={0.4}>
              <div className='lg:px-24'>
                <h1 className='text-black font-bold text-xl lg:text-[28px] text-center leading-10' style={{ fontFamily: 'Minion Pro, serif' }}>
                  “If you don’t have at least five friends in your phone who can turn $1 into $2, you need a new circle.”</h1>
              </div>
              <div>
                <h1 className='text-[#E7A647] text-4xl leading-relaxed pt-6 text-center'
                  style={{ fontFamily: 'Adelia, serif' }}>Alexis Holifield
                </h1>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-black  pb-14'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-x-20 gap-y-8 pt-10 '>
          <div className=''>
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <img src={SCI} alt="" />
            </ScrollAnimation>
          </div>

          <div className='flex gap-y-4 flex-col justify-center items-center'>
            <ScrollAnimation animation="zoomIn">
              <h1 className='text-[#E7A647] text-center lg:text-start text-3xl lg:text-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Earning More Money</h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.4}>
              <p className='text-white text-center lg:text-start font-extralight md:text-[18px]' style={{ fontFamily: 'Montserrat, serif' }}>The Truth About Wealth That 98% of Entrepreneurs Are Missing </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-5 md:px-10 bg-white  pb-14'>
        <div className='flex flex-col justify-center items-center lg:items-start gap-y-4 pt-10'>
          <ScrollAnimation animation="zoomIn">
            <h1 className='text-[#E7A647] text-center lg:text-start text-3xl lg:text-[45px] leading-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
              Most entrepreneurs believe that the secret to wealth lies in earning more money—but is that really the case?
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.1}>
          </ScrollAnimation>


          <div className='flex w-full flex-col lg:flex-row justify-center items-center gap-x-7 gap-y-5 pt-6'>
            <div className='h-full lg:w-[100%] flex justify-center items-start'>
              <ScrollAnimation animation="slideRight" delay={0.2}>
                <div className='flex flex-col gap-y-4'>
                  <div>
                    <img src={LONG2} className='rounded-xl  ' alt="" />
                  </div>
                  <div>
                    <img src={alx} className='rounded-xl  ' alt="" />
                  </div>

                </div>
              </ScrollAnimation>
            </div>

            <div className='md:text-[20px] lg:w-[99%]'>

              <ScrollAnimation animation="slideRight" delay={0.3}>
                <p className='text-xl font-semibold md:text-[26px] text-center pb-3 lg:text-start' style={{ fontFamily: 'Minion Pro, serif' }}>A Message From Our Co-Founders </p>

                <p className=' font-extralight  md:text-[18px] leading-[25px] text-center lg:text-start' style={{ fontFamily: 'Montserrat, serif' }}>
                  I was speaking to our Co-Founder, Alexis Holifield, and she shared a quote with me that sums up
                  <span className='font-bold text-black/70'> The Global Group Economic Initiative's purpose: </span>
                  “If you don’t have at least five friends in your
                  phone who can turn $1 into $2, you need a new circle.”
                  <br /><br />
                  Often times, entrepreneurs fill their phones with “comfort connections” who can’t move the financial
                  needle when it matters most. The wealthy don’t just gather friends—they cultivate strategic allies
                  who lift them spiritually and financially.
                  <br /><br />
                  With wars on the horizon, markets teetering on collapse, and global uncertainty looming, the single
                  smartest move you can make is connecting with people who can multiply your resources.
                  <br /><br />
                  <span className='font-bold text-black/70'> The Global Group Economic Initiative is that group. </span>
                </p>
              </ScrollAnimation>


              <ScrollAnimation animation="slideUp" delay={0.4}>
                <br />
                <p className=' font-extralight  md:text-[18px] leading-[25px] text-center lg:text-start' style={{ fontFamily: 'Montserrat, serif' }}>
                  Hello, King Edwards here. I want to welcome you to The Global Group Economic Initiative’s
                  <span className='font-bold text-black/70'> “Become Your Own Bank Summit.” </span>
                  <br /><br />
                  We created this powerful initiative to help entrepreneurs,
                  athletes, and entertainers avoid the painful cycle of earning significant income, losing it all, and
                  having to rebuild from scratch—a cycle that far too many of us face.

                  At the<span className='font-bold text-black/70'> “Become Your Own Bank Summit.” </span>
                  we empower our members to break free from financial
                  setbacks by introducing a transformative strategy known as
                  <span className='font-bold text-black/70'>  Infinite Banking</span>
                  —a powerful, integrated financial model that redefines the way you build and protect wealth. By combining the
                  forces of
                  <span className='font-bold text-black/70'> Funding, Insurance, and Trading,</span>
                  Infinite Banking enables you to create a private banking
                  system within your life and business — A system that we have coined as
                  <span className='font-bold text-black/70'> “Earn, Protect, Grow”. </span>
                </p>
              </ScrollAnimation>
              <br />
              <ScrollAnimation animation="slideLeft" delay={0.5}>
                <p className='text-xl font-bold py-3 md:text-[22px] text-center lg:text-start' style={{ fontFamily: 'Minion Pro, serif' }}>MY BACKGROUND </p>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.7}>
                <p className=' font-extralight md:text-[18px] text-center lg:text-start leading-[25px]' style={{ fontFamily: 'Montserrat, serif' }}>
                  Both of my parents were in the music industry. My father served as the
                  Vice President of Capitol Records, and my mother is a two-time Grammy-nominated singer.
                  <br /><br />

                </p>
                <p className=' font-extralight md:text-[18px]  text-center lg:text-start leading-[25px]' style={{ fontFamily: 'Montserrat, serif' }}>
                  In my early years, I believed that entertainment and popularity were the keys to wealth—until I met a
                  successful entrepreneur who lived just like the entertainers and athletes I knew, but completely
                  under the radar.
                  <br /><br />
                  After that encounter, I set out on a mission to build wealth through entrepreneurship—a path filled
                  with unknown challenges. However, I eventually figured it out.
                  <br /><br />
                  By the age of 30, I was what most would call “rich.” I was
                  earning over $100,000 per month, had driven every luxury car you could imagine, been on yachts,
                  flown on private jets, and built relationships with some of the most powerful billionaires in the world.
                  I was convinced I could never go back to zero.
                  <br /><br />
                  However, by age 33, after several failed investments, I struggled to generate income at the level I
                  once had and was on the brink of filing for bankruptcy. That traumatic financial experience forced
                  me to search for the fundamental principles of building and sustaining wealth. This journey led me
                  to my first financial mentor, Alexis Holifield. Through our relationship, I came to a powerful
                  realization:
                  <span className='font-bold text-black/70'> most of us have been misled about our
                    finances. </span>
                  <br /><br />
                  Some believe wealth is built simply
                  by earning more income. Others believe investing is the only way. And while both are necessary
                  building blocks to creating wealth, neither ensures financial security.
                </p>
              </ScrollAnimation>
            </div>
          </div>



          <ScrollAnimation animation="slideUp" delay={0.4}>
            <p className='text-xl py-2 font-semibold text-center lg:text-start md:text-[22px]' style={{ fontFamily: 'Minion Pro, serif' }}>
              True wealth follows a three-step process:
            </p>
          </ScrollAnimation >
          <ScrollAnimation animation="slideUp" delay={0.8}>
            <ol className='pb-5 font-bold  leading-[25px] text-center lg:text-start md:text-[18px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
              <li>Earning more money</li>
              <li>Protect the money you’ve earned</li>
              <li>Grow the money you’ve protected </li>
            </ol>
          </ScrollAnimation>
          <ScrollAnimation animation="slideUp" delay={0.9}>
            <p className='font-extralight  pb-5 md:text-[18px] text-center lg:text-start leading-[25px]' style={{ fontFamily: 'Montserrat, serif' }}>
              At the Become Your Own Bank Summit, we’ll teach you how to use bank funding, insurance, trading
              algorithms, and other asset classes to grow your wealth—consistently, sustainably, and continuously
              —just like the Warren Buffetts of the world
            </p>
            <p className='text-center lg:text-start' style={{ fontFamily: 'Minion Pro, serif' }}>
              <span className='text-lg font-semibold md:text-[22px] text-center lg:text-start'>This is what we call Wealth Mastery</span>
            </p>
            <p className='text-lg font-semibold md:text-[22px] text-center lg:text-start pt-2' style={{ fontFamily: 'Minion Pro, serif' }}>
              Is this something you’d like to learn?
            </p>
          </ScrollAnimation>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-black pb-14'>
        <div className='flex flex-col lg:flex-row justify-center md:px-10 items-center gap-20 pt-10 '>
          <div className='flex gap-y-4 flex-col justify-start items-start lg:w-1/2 font-normal'>
            <div className='flex justify-center lg:justify-start w-full'>
              <ScrollAnimation animation="zoomIn">
                <h1 className='text-[#E7A647] text-center lg:text-start text-3xl lg:text-[45px] lg:leading-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                  EARN, PROTECT, GROW
                </h1>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animation="slideRight" delay={0.3}>
              <p className='text-white text-center lg:text-start font-extralight md:text-[22px]' style={{ fontFamily: 'Montserrat, serif' }}>
                AN ENTREPRENEURS GUIDE TO EARNING MORE MONEY, PROTECTING THE MONEY YOU HAVE EARNED, & GROWING THE MONEY YOU HAVE PROTECTED.
              </p>
            </ScrollAnimation>
            <div className='flex justify-center lg:justify-start w-full'>
              <ScrollAnimation animation="slideRight" delay={0.5}>
                <div className='flex justify-center w-full'>
                  <button
                    onClick={handleButtonClick}
                    className='bg-[#E7A647] px-3 py-2  rounded-[8px]'
                    style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                    I Want To Secure A Spot
                  </button>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <ScrollAnimation animation="slideLeft" delay={0.6}>
            <div className=''>
              <img src={YELLOW} alt="" />
            </div>
          </ScrollAnimation>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-white  pb-14'>
        <div className='flex flex-col lg:flex-row justify-center md:px-10 items-center gap-10 pt-10 '>
          <div className='flex gap-y-4 flex-col  lg:w-1/2 font-normal'>
            <ScrollAnimation animation="zoomIn">
              <h1 className='text-[#E7A647] text-center lg:text-start text-3xl lg:text-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                About Us
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={0.3}>
              <p className='text-black text-center lg:text-start font-extralight md:text-[18px]' style={{ fontFamily: 'Montserrat, serif' }}>
                King Edwards of High Ticket Offer Financing and Alexis Holifield of Millennial Millionaire have joined forces to create The Global Group Economic Initiative.
                The Global Group Economic Initiative is a Christian-based wealth-building community dedicated to helping serious entrepreneurs achieve lasting financial success.
                We teach proven strategies that empower business owners to generate significantly more revenue, grow their net worth year after year—regardless of
                economic conditions—and build financial legacies, much like the Warren Buffetts of the world.
                <br /> <br />
                We believe wealth is about stewardship, not just survival. By applying  biblical principles and time-tested financial strategies,
                our members break  free from conventional limitations, positioning themselves for sustainable  growth and impact  </p>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="slideLeft" delay={0.6}>
            <div className=''>
              <img src={BIGLOGO2} alt="" />
            </div>
          </ScrollAnimation>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-black pb-14'>
        <div className='flex flex-col md:flex-row gap-x-20 gap-y-10 pt-10 '>
          <div className=''>
            <ScrollAnimation animation="slideDown" delay={0.4}>
              <img src={DART} alt="" />
            </ScrollAnimation>
          </div>

          <div className='flex gap-y-4 flex-col justify-center md:w-1/2'>
            <ScrollAnimation animation="zoomIn">
              <h1 className='text-[#E7A647] text-center lg:text-start text-3xl lg:text-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Our Mission:</h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slideUp" delay={0.8}>
              <p className='text-white text-center lg:text-start font-light md:text-[18px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                To create more millionaire entrepreneurs by equipping you with <span className='font-bold'>century-old wealth-building secrets </span>used by the world’s richest individuals.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      <section className='hidden lg:block overflow-hidden px-10 bg-white  pb-20 large-screen'>
        <div className='flex flex-col justify-center items-center pt-10'>
          <ScrollAnimation animation="zoomIn">
            <h1 className='text-[#E7A647] text-3xl lg:text-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Meet The Team</h1>
          </ScrollAnimation>



          <div className='flex relative gap-x-14 gap-y-40 pt-44 flex-wrap justify-center items-center'>

            <div className='relative'>
              <ScrollAnimation animation="fadeIn" delay={0.3}>
                <img src={AF} className='h-[400px] z-10' alt="" />
              </ScrollAnimation>
              <div className='absolute z-10 top-[-125px]'>
                <ScrollAnimation animation="zoomIn" delay={0.6}>
                  <img src={ALEXIS} alt="" />
                </ScrollAnimation>
              </div>
              <div className='absolute z-10 top-[-125px]'>
                <ScrollAnimation animation="zoomIn" delay={0.6}>
                  <img src={ALEXIS} alt="" />
                </ScrollAnimation>
              </div>
            </div>

            <div className='relative '>
              <ScrollAnimation animation="fadeIn" delay={0.2}>
                <img src={KF} className='h-[400px]  z-10' alt="" />
              </ScrollAnimation>


              <div className='absolute z-10 top-[-125px] left-[10px]'>
                <ScrollAnimation animation="zoomIn" delay={0.4}>
                  <img src={KING} className='w-[300px] ' alt="" />
                </ScrollAnimation>
              </div>
              <div className='absolute z-10 top-[-125px] left-[10px]'>
                <ScrollAnimation animation="zoomIn" delay={0.4}>
                  <img src={KING} className='w-[300px] ' alt="" />
                </ScrollAnimation >
              </div>
            </div>

            <div className='relative'>
              <ScrollAnimation animation="fadeIn" delay={0.4}>
                <img src={GF} className='h-[400px] z-10' alt="" />
              </ScrollAnimation>

              <div className='absolute z-10 top-[-90px]'>
                <ScrollAnimation animation="zoomIn" delay={0.8}>
                  <img src={GENE} alt="" />
                </ScrollAnimation>
              </div>
              <div className='absolute z-10 top-[-90px]'>
                <ScrollAnimation animation="zoomIn" delay={0.8}>
                  <img src={GENE} alt="" />
                </ScrollAnimation >
              </div>
            </div>

            <div className='relative'>
              <ScrollAnimation animation="fadeIn" delay={0.4}>
                <img src={RF} className='h-[400px] z-10' alt="" />
              </ScrollAnimation>

              <div className='absolute z-10 top-[-125px] left-[10px]'>
                <ScrollAnimation animation="zoomIn" delay={0.7}>
                  <img src={RAMSEY} className='w-[300px]' alt="" />
                </ScrollAnimation >
              </div>
              <div className='absolute z-10 top-[-125px] left-[10px]'>
                <ScrollAnimation animation="zoomIn" delay={0.7}>
                  <img src={RAMSEY} className='w-[300px]' alt="" />
                </ScrollAnimation>
              </div>
            </div>
            <div className='relative'>
              <ScrollAnimation animation="fadeIn" delay={0.5}>
                <img src={SF} className='h-[400px] z-10' alt="" />
              </ScrollAnimation>

              <div className='absolute z-10 top-[-125px]'>
                <ScrollAnimation animation="zoomIn" delay={0.9}>
                  <img src={SHAWN} className='w-[300px]' alt="" />
                </ScrollAnimation>
              </div>
              <div className='absolute z-10 top-[-125px]'>
                <ScrollAnimation animation="zoomIn" delay={0.9}>
                  <img src={SHAWN} className='w-[300px]' alt="" />
                </ScrollAnimation>
              </div>
            </div>


          </div>
        </div>
      </section>


      <section className='lg:hidden overflow-hidden px-10 bg-white  pb-20 medium-small-screen'>
        <div className='flex flex-col justify-center items-center pt-10'>
          <ScrollAnimation animation="zoomIn">
            <h1 className='text-[#E7A647] text-3xl lg:text-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Meet The Team</h1>
          </ScrollAnimation>

          <div className='pt-3 '>
            <TeamSlider teamMembers={teamMembers} />
          </div>
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


      <section className='overflow-hidden flex justify-center items-center bg-white  pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-10'>
          <div className='grid lg:grid-cols-2 gap-10'>

            <div className='flex flex-col gap-5 justify-center'>
              <div>
                <ScrollAnimation animation="zoomIn">
                  <h1 className='text-[#E7A647] px-10 text-center lg:text-start text-3xl lg:text-[45px] lg:leading-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                    What You’ll Learn at the Summit:
                  </h1>
                </ScrollAnimation>
              </div>

              <div className='flex flex-col px-5 justify-start md:text-[18px] leading-[25px] items-start gap-y-5  font-extralight' style={{ fontFamily: 'Montserrat, serif' }}>
                <ScrollAnimation animation="slideRight" delay={0.3}>
                  <div className='flex gap-3 justify-center items-center text-gray-700'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> <span className='font-bold'>
                        How to earn 10x more per customer </span> — without spending a dollar more on advertising.
                      </p>

                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideRight" delay={0.5}>
                  <div className='flex gap-3 justify-center items-center text-gray-700'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> <span className='font-bold'>
                        How to leverage strategic insurance assets to protect your wealth more efficiently than a bank account </span>
                        — while still earning above-average annual market returns (10%+ per year), growing safely while maintaining full access to your cash.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideRight" delay={0.7}>
                  <div className='flex gap-3 justify-center items-center text-gray-700'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> <span className='font-bold'>
                        How to aggressively grow your safeguarded cash in the markets </span>
                        — trading traditional and crypto assets with nothing more than three simple clicks a week—whether you know how to trade or not.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <ScrollAnimation animation="slideRight" delay={0.3}>
              <div className='flex justify-center w-full'>
                <img src={LAPTOP} className='px-10 lg:h-[400px]' alt="" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-black pb-14'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-20 pt-24 '>
          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div className=''>
              <img src={GIRL} alt="" />
            </div>
          </ScrollAnimation>


          <div className='flex gap-y-4 flex-col justify-start items-start md:w-1/2 font-normal'>
            <ScrollAnimation animation="zoomIn">
              <h1 className='text-[#E7A647] text-3xl text-center lg:text-start lg:text-[45px] lg:leading-[45px] font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                Are You Ready to Take Your Business to the Next Level?
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slideDown" delay={0.5}>
              <p className='text-white text-center lg:text-start font-extralight md:text-[18px]' style={{ fontFamily: 'Montserrat, serif' }}>
                If you’re tired of working hard without seeing real financial results…
                <br /><br />
                If you’re ready to start building true generational wealth…
                <br /><br />
                If you want to know the secrets that the top 1% use to secure and grow their fortunes…
                <br /><br />
                Join the Become Your Own Bank Summit and discover the strategies that will change your financial future forever.
              </p>
            </ScrollAnimation>

            <div className='flex w-full justify-center lg:justify-start'>
              <ScrollAnimation animation="slideUp" delay={0.6}>
                <div>
                  <button
                    onClick={handleButtonClick}
                    className='bg-[#E7A647] px-3 py-2  rounded-[8px]'
                    style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
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