import React, { useEffect } from 'react'
import MText from '../assets/images/png5.png'
import DollarCoin from '../assets/images/bg-live/3Ddollar.png'
import DollarCoin2 from '../assets/images/bg-live/3Ddollar1.png'
import SCI from '../assets/images/sci.png'
import YELLOW from '../assets/images/yellow.png'
import BIGLOGO2 from '../assets/images/biglogo2.png'
import DART from '../assets/images/dart.png'
import LONG2 from '../assets/images/long2.png'
import BLOCK from '../assets/images/block.png'
import CHECK from '../assets/images/check.png'
import LAPTOP from '../assets/images/laptop.png'
import GIRL from '../assets/images/girl.png'
import ScrollAnimation from '../component/ScrollAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

//  useEffect(() => {
//      gsap.fromTo('.hero-dollar-left',
//        {
//          x: -100,
//          opacity: 0,
//          rotation: -20
//        },
//        {
//          x: 0,
//          opacity: 1,
//          rotation: 0,
//          duration: 1.5,
//          ease: "elastic.out(1, 0.3)",
//          delay: 0.5
//        }
//      );

//      gsap.fromTo('.hero-dollar-right',
//        {
//          x: 100,
//          opacity: 0,
//          rotation: 20
//        },
//        {
//          x: 0,
//          opacity: 1,
//          rotation: 0,
//          duration: 1.5,
//          ease: "elastic.out(1, 0.3)",
//          delay: 0.8
//        }
//      );


//      gsap.to('.hero-dollar-left', {
//        y: 15,
//        duration: 2,
//        repeat: -1,
//        yoyo: true,
//        ease: "sine.inOut"
//      });

//      gsap.to('.hero-dollar-right', {
//        y: -15,
//        duration: 2.5,
//        repeat: -1,
//        yoyo: true,
//        ease: "sine.inOut",
//        delay: 0.5
//      });
//    }, []);  


const GGEI = () => {
  return (
    <>
      <section className='relative overflow-hidden pb-10 px-10 bg-black flex justify-center items-center min-h-screen md:rounded-br-[100px] md:rounded-bl-[100px]'>
        <div className='z-10 relative pt-40 w-full flex flex-col justify-center items-center'>
          <ScrollAnimation animation="fadeIn" delay={0.3}>
            <div className='pb-7'>
              <img src={MText} alt="" />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.5}>
            <div>
              <p className='text-white pb-5 text-center text-sm md:text-xl' style={{ fontFamily: 'Minion Pro, serif' }}>Turn Your Business Into a Bank That Grows Your Wealth Aggressively
                & Consistently at GGEI’s</p>
            </div>

            <div className='flex justify-center'>
              <iframe className='lg:w-[650px] pb-5 rounded-2xl h-[250px] lg:rounded-[50px] lg:h-[415px]' src="https://www.youtube.com/embed/m2ERPhqNENk?si=LBHOcW6Eti5e4HTK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div>
              <button className='bg-[#E7A647] px-3 py-2 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                Secure My Spot
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


      <section className='overflow-hidden px-10 bg-white min-h-[50vh] pb-14'>
        <div className='flex flex-col justify-center items-center pt-24 '>

          <ScrollAnimation animation="zoomIn" delay={0.4}>
            <div className='lg:px-24'>
              <h1 className='text-black font-bold text-3xl text-center leading-10' style={{ fontFamily: 'Minion Pro, serif' }}>“If your income provides for your upkeep, it will become your
                downfall.”</h1>
            </div>
            <div>
              <h1 className='text-[#E7A647] text-2xl pt-6 text-center' style={{ fontFamily: 'Adelia, serif' }}>Alexis Holifield</h1>
            </div>
          </ScrollAnimation>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-black min-h-[50vh] pb-14'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-20 pt-24 '>
          <div className=''>
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <img src={SCI} alt="" />
            </ScrollAnimation>
          </div>

          <div className='flex gap-y-4 flex-col justify-start items-start'>
            <ScrollAnimation animation="zoomIn">
              <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Earning More Money</h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.4}>
              <p className='text-white font-extralight' style={{ fontFamily: 'Montserrat, serif' }}>The Truth About Wealth That 98% of Entrepreneurs Are Missing </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-white min-h-screen pb-14'>
        <div className='flex flex-col justify-center items-start gap-y-4 md:px-32 pt-10'>
          <ScrollAnimation animation="zoomIn">
            <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
              Most entrepreneurs believe that the secret to wealth lies in earning more money—but is that really the case?
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.1}>
            <p className='text-xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Meet Our Co-Founder: King Edwards </p>
          </ScrollAnimation>


          <div className='flex flex-col md:flex-row justify-center items-center gap-x-3 gap-y-5 pt-6'>
            <div className='md:w-1/2'>
              <ScrollAnimation animation="slideRight" delay={0.2}>
                <img src={LONG2} alt="" />
              </ScrollAnimation>
            </div>

            <div >
              <ScrollAnimation animation="slideUp" delay={0.4}>
                <p className='text-sm font-extralight' style={{ fontFamily: 'Montserrat, serif' }}>Hello, and welcome to Global Group Economic Initiative’s ”Become Your Own Bank Summit”.
                  <br /><br />
                  I co-founded this powerful group because I am committed to helping entrepreneurs avoid the pain I experienced after making an extraordinary amount of money, losing it all, and having to rebuild from scratch.
                  <br /><br />
                  At 28 years old, I became a millionaire. I thought I had made it. I had driven every luxury car, sailed on every yacht, and had some of the most powerful people in the world on speed dial. I believed there was no way I could go back to zero.
                  <br /><br />
                  But by 34, I found myself filing for bankruptcy and struggling to generate income at the level I once had.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" delay={0.5}>
                <p className='text-xl font-bold py-3' style={{ fontFamily: 'Minion Pro, serif' }}>Where did I go wrong?  </p>
              </ScrollAnimation>

              <ScrollAnimation animation="zoomIn" delay={0.6}>
                <p className='text-sm font-extralight' style={{ fontFamily: 'Montserrat, serif' }}>After experiencing such a tremendous loss, I went on a mission to uncover the true secrets to building and sustaining wealth. What I realized was that most of us have been misled.
                  <br /><br />
                  Many believe that wealth is built solely by earning more money. Others, the more financially savvy entrepreneurs, think investing is the key. While both are essential components of wealth-building, neither guarantees financial security on their own.
                </p>
              </ScrollAnimation>

            </div>
          </div>
          <ScrollAnimation animation="slideUp" delay={0.7}>
            <p className='text-xl font-semibold py-3' style={{ fontFamily: 'Minion Pro, serif' }}>
              The real key to building wealth is simple: never lose money.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.4}>
            <p className='pb-5 text-sm font-extralight' style={{ fontFamily: 'Montserrat, serif' }}>
              • If you rely solely on earning money, you will inevitably spend it to sustain your lifestyle. <br />
              • If you rely solely on investing, you risk losing it to bad investments or unfavorable market conditions.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.4}>
            <p className='text-xl py-4 font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
              True wealth follows a three-step process:
            </p>
          </ScrollAnimation >
          <ScrollAnimation animation="slideUp" delay={0.8}>
            <ol className='pb-5 font-bold text-sm' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
              <li>Earning more money</li>
              <li>Protecting the money you’ve earned</li>
              <li>Growing the money you’ve protected </li>
            </ol>
          </ScrollAnimation>
          <ScrollAnimation animation="slideUp" delay={0.9}>
            <p className='font-extralight text-sm ' style={{ fontFamily: 'Montserrat, serif' }}>
              At the Become Your Own Bank Summit, we will teach you how to implement a systematic approach to mastering all three—quickly and aggressively.
            </p>
            <p className='text-lg font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
              Is this something you’d like to learn?
            </p>
          </ScrollAnimation>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-black min-h-[50vh] pb-14'>
        <div className='flex flex-col lg:flex-row justify-center md:px-32 items-center gap-20 pt-24 '>
          <div className='flex gap-y-4 flex-col justify-start items-start lg:w-1/2 font-normal'>
            <ScrollAnimation animation="zoomIn">
              <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                EARN, PROTECT, GROW
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slideRight" delay={0.3}>
              <p className='text-white font-extralight' style={{ fontFamily: 'Montserrat, serif' }}>
                AN ENTREPRENEURS GUILD TO EARNING MORE MONEY, PROTECTING THE MONEY YOU HAVE EARNED, & GROWING THE MONEY YOU HAVE PROTECTED.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={0.5}>
              <div>
                <button className='bg-[#E7A647] px-3 py-2 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                  I Want To Secure A Spot
                </button>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="slideLeft" delay={0.6}>
            <div className=''>
              <img src={YELLOW} alt="" />
            </div>
          </ScrollAnimation>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-white min-h-[50vh] pb-14'>
        <div className='flex flex-col lg:flex-row justify-center md:px-32 items-center gap-10 pt-24 '>
          <div className='flex gap-y-4 flex-col justify-start items-start lg:w-1/2 font-normal'>
            <ScrollAnimation animation="zoomIn">
              <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                About Us
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={0.3}>
              <p className='text-black font-extralight' style={{ fontFamily: 'Montserrat, serif' }}>
                King Edwards of High Ticket Offer Financing and Alexis Holifield of Femininity & Fine-Ance have joined forces to create The Global Group Economic Initiative.
                The Global Group Economic Initivatice is a Christian-based wealth-building community dedicated to helping serious entrepreneurs achieve lasting financial success.
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


      <section className='overflow-hidden px-10 bg-black min-h-[50vh] pb-14'>
        <div className='flex flex-col md:flex-row justify-center items-center md:px-32 gap-20 pt-24 '>
          <div className=''>
            <ScrollAnimation animation="slideDown" delay={0.4}>
              <img src={DART} alt="" />
            </ScrollAnimation>
          </div>

          <div className='flex gap-y-4 flex-col justify-start items-start md:w-1/2'>
            <ScrollAnimation animation="zoomIn">
              <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Our Mission:</h1>
            </ScrollAnimation>
            <ScrollAnimation animation="slideUp" delay={0.8}>
              <p className='text-white font-light' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                To create more millionaire entrepreneurs by equipping you with <span className='font-bold'>century-old wealth-building secrets </span>used by the world’s richest individuals.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      <section className='overflow-hidden flex justify-center items-center px-10 bg-black min-h-[80vh] pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-28'>
          <div className='grid md:grid-cols-2 gap-y-10'>
            <ScrollAnimation animation="slideRight" delay={0.3}>
              <div>
                <img src={BLOCK} className='lg:h-[470px]' alt="" />
              </div>
            </ScrollAnimation>

            <div className='flex flex-col justify-center'>
              <div>
                <ScrollAnimation animation="zoomIn" >
                  <h1 className='text-[#E7A647] text-4xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                    Introducing the Become Your Own Bank Summit
                  </h1>
                </ScrollAnimation>
              </div>

              <ScrollAnimation animation="slideLeft" delay={0.2}>
                <p className='text-white text-sm pt-5 pb-5 font-extralight' style={{ fontFamily: 'Montserrat, serif' }}>
                  The Global Group Economic Initiative is committed to helping entrepreneurs build real wealth by changing how they think about business, revenue, and wealth building.
                  <br /> <br />
                  To help you break free from financial limitations, High Ticket Offer Financing has partnered with the Millennial Millionaire to create the Global Group Economic Initiative—a
                  game-changing program designed to help you:
                </p>
              </ScrollAnimation >

              <div className='flex flex-col justify-start items-start gap-y-5 text-sm font-extralight' style={{ fontFamily: 'Montserrat, serif' }}>
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
      </section>


      <section className='overflow-hidden flex justify-center items-center px-10 bg-white min-h-[80vh] pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-28'>
          <div className='grid md:grid-cols-2 gap-10'>

            <div className='flex flex-col gap-5 justify-center'>
              <div>
                <ScrollAnimation animation="zoomIn">
                  <h1 className='text-[#E7A647] text-4xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                    What You’ll Learn at the Summit:
                  </h1>
                </ScrollAnimation>
              </div>

              <div className='flex flex-col justify-start items-start gap-y-5 text-sm font-extralight' style={{ fontFamily: 'Montserrat, serif' }}>
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
              <div>
                <img src={LAPTOP} className='lg:h-[400px]' alt="" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-black min-h-[50vh] pb-14'>
        <div className='flex flex-col md:flex-row justify-center md:px-32 items-center gap-20 pt-24 '>
          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div className=''>
              <img src={GIRL} alt="" />
            </div>
          </ScrollAnimation>


          <div className='flex gap-y-4 flex-col justify-start items-start md:w-1/2 font-normal'>
            <ScrollAnimation animation="zoomIn">
              <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                Are You Ready to Take Your Business to the Next Level?
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="slideDown" delay={0.5}>
            <p className='text-white font-extralight' style={{ fontFamily: 'Montserrat, serif' }}>
              If you’re tired of working hard without seeing real financial results…
              <br /><br />
              If you’re ready to start building true generational wealth…
              <br /><br />
              If you want to know the secrets that the top 1% use to secure and grow their fortunes…
              <br /><br />
              Join the Become Your Own Bank Summit and discover the strategies that will change your financial future forever.
            </p>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={0.6}>
            <div>
              <button className='bg-[#E7A647] px-3 py-2 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                I Want To Secure A Spot
              </button>
            </div>
            </ScrollAnimation>
          </div>


        </div>
      </section>

    </>
  )
}

export default GGEI