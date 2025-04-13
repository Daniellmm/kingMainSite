import React, { useEffect } from 'react'
import MText from '../assets/images/png4.png'
import LEFT from '../assets/images/bg-live/leftimg.png'
import RIGHT from '../assets/images/bg-live/rightimg.png'
import DISC from '../assets/images/disc.png'
import CHECK from '../assets/images/check.png'
import LASER from '../assets/images/laser.png'
import CIRCLE from '../assets/images/circle.png'
import READ from '../assets/images/read.png'
import LONG from '../assets/images/long.png'
import CHART from '../assets/images/chart.png'
import LAY from '../assets/images/lay.png'
import ScrollAnimation from '../component/ScrollAnimation'
import { gsap } from 'gsap';


const LaserFund = () => {
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
              <p className='text-white pb-5 text-center text-sm md:text-xl' style={{ fontFamily: 'Minion Pro, serif' }}>Master the markets, build wealth, create passive income,
                and learn the secrets to successful trading.</p>
            </div>

            <div className='flex justify-center w-full'>
              <iframe className='lg:w-[650px] pb-5 rounded-2xl h-[250px] lg:rounded-[50px] lg:h-[415px]' src="https://www.youtube.com/embed/m2ERPhqNENk?si=LBHOcW6Eti5e4HTK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div>
              <button className='bg-[#E7A647] px-3 py-2 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                Review Disclaimer
              </button>
            </div>
          </ScrollAnimation>
        </div>

        <div className='absolute top-[250px] left-[-40px]'>
          <img src={LEFT} alt="" className='h-[100px] md:h-[120px] lg:h-40 hero-dollar-left' />
        </div>
        <div className='absolute bottom-[100px] right-[0px]'>
          <img src={RIGHT} alt="" className='h-[100px] md:h-[120px] lg:h-40 hero-dollar-right' />
        </div>
        <div className='w-full h-full bg-black opacity-60 inset-0 absolute'></div>
      </section>


      <section className='overflow-hidden flex justify-center items-center px-10 bg-white md:min-h-[70vh] pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-32 '>
          <div className='grid md:grid-cols-2 gap-y-10 '>
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div>
                <img src={DISC} className='h-96' alt="" />
              </div>
            </ScrollAnimation>

            <div className='flex flex-col justify-center items-start gap-y-6'>
              <ScrollAnimation animation="zoomIn">
                <h1 className='text-[#E7A647] text-3xl  md:text-start font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Want to learn Crypto? </h1>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.3}>
                <div>
                  <p>Get our “Buy The Dip Crypto Series: How I 7x’d My Crypto Portfolio is 3  months Buying & Selling Crypto on Coinbase”.</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.4}>
                <div>
                  <button className='bg-[#E7A647] px-5 py-3 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                    FREE Financial Review
                  </button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>


      <section className='overflow-hidden flex justify-center items-center px-10 bg-black md:min-h-[70vh] pb-14'>
        <div className='flex flex-col justify-center items-start pt-10 lg:px-40'>
          <ScrollAnimation animation="zoomIn">
            <div>
              <h1 className='text-[#E7A647] text-3xl  md:text-start font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Are you ready to take control of your financial future?</h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideDown" delay={0.1}>
            <div>
              <p className='text-white py-5 text-sm tracking-wider ' style={{ fontFamily: 'Minion Pro, serif' }}>Whether you’re a beginner or an experienced trader, The Laser Fund PAMM Trading & Education Network will equip you with the skills, strategies, and tools you need to master the markets and create long-term wealth. </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideDown" delay={0.2}>
            <div>
              <h1 className='text-white text-lg pb-3' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>We provide comprehensive training in: </h1>
            </div>
          </ScrollAnimation>

          <div className='flex flex-col justify-start items-start gap-y-5'>
            <ScrollAnimation animation="slideDown" delay={0.3}>
              <div className='flex gap-3 justify-center items-center text-white'>
                <img src={CHECK} className='h-7' alt="" />
                <div>
                  <p> <span className='font-bold'> Forex Trading </span> – Learn how to navigate the $7 trillion-a-day forex market and capitalize on
                    currency movements. </p>
                </div>
              </div>
            </ScrollAnimation>


            <ScrollAnimation animation="slideDown" delay={0.4}>
              <div className='flex gap-3 justify-center items-center text-white'>
                <img src={CHECK} className='h-7' alt="" />
                <div>
                  <p> <span className='font-bold'> Futures Trading </span> – Discover how to trade commodities, indexes, and more with precision and
                    confidence.</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideDown" delay={0.5}>
              <div className='flex gap-3 justify-center items-center text-white'>
                <img src={CHECK} className='h-7' alt="" />
                <div>
                  <p> <span className='font-bold'> Crypto Spot Trading </span> – Understand the volatility and opportunity in the digital currency
                    markets and how to profit from it, today!
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      <section className='overflow-hidden flex justify-center items-center px-10 bg-white min-h-[80vh] pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-40'>
          <div className='grid md:grid-cols-2 gap-y-10 gap-x-10'>
            <ScrollAnimation animation="slideRight" delay={0.2}>
              <div>
                <img src={LASER} className='lg:pt-16' alt="" />
              </div>
            </ScrollAnimation>

            <div className=' flex flex-col justify-center gap-y-5'>
              <ScrollAnimation animation="zoomIn">
                <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                  As a Member of The Laser Fund PAMM Trading & Education Network
                </h1>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" delay={0.2}>
                <p className='font-bold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                  You get the following:
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" delay={0.3}>
                <div className='flex justify-start items-start gap-x-3 '>
                  <div>
                    <img src={CIRCLE} className='pt-2' alt="" />
                  </div>

                  <div className='flex flex-col gap-y-1 justify-start items-start'>
                    <h1 className='font-bold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                      1-on-1 Coaching
                    </h1>

                    <p className='text-sm font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                      Get personal guidance from seasoned trading experts. Our tailored coaching sessions help you develop a winning strategy and avoid costly mistakes.
                    </p>

                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" delay={0.4}>
                <div className='flex justify-start items-start gap-x-3 '>
                  <div>
                    <img src={CIRCLE} className='pt-2' alt="" />
                  </div>

                  <div className='flex flex-col gap-y-1 justify-start items-start'>
                    <h1 className='font-bold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                      Proven Strategies
                    </h1>

                    <p className='text-sm font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                      Learn the exact methods used by professional traders to generate consistent profits in the forex, futures, and crypto markets.
                    </p>

                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" delay={0.5}>
                <div className='flex justify-start items-start gap-x-3 '>
                  <div>
                    <img src={CIRCLE} className='pt-2' alt="" />
                  </div>

                  <div className='flex flex-col gap-y-1 justify-start items-start'>
                    <h1 className='font-bold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                      Live Trading Sessions
                    </h1>

                    <p className='text-sm font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                      Watch and learn from live market trades, understand market movements in real-time, and ask questions as they happen.
                    </p>

                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" delay={0.6}>
                <div className='flex justify-start items-start gap-x-3 '>
                  <div>
                    <img src={CIRCLE} className='pt-2' alt="" />
                  </div>

                  <div className='flex flex-col gap-y-1 justify-start items-start'>
                    <h1 className='font-bold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                      Community of Traders
                    </h1>

                    <p className='text-sm font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                      Join a thriving community of like-minded traders. Share insights, ask questions, and grow together with the support of experienced mentors and fellow traders.
                    </p>

                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" delay={0.7}>
                <div className='flex justify-start items-start gap-x-3 '>
                  <div>
                    <img src={CIRCLE} className='pt-2' alt="" />
                  </div>

                  <div className='flex flex-col gap-y-1 justify-start items-start'>
                    <h1 className='font-bold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                      Passive Income Opportunities
                    </h1>

                    <p className='text-sm font-thin' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                      We don’t just teach you how to trade—we show you how to create consistent passive income through strategic investing, automated trading bots, and other income-generating strategies.
                    </p>

                  </div>
                </div>
              </ScrollAnimation>


            </div>
          </div>
        </div>
      </section>


      <section className='overflow-hidden flex justify-center items-center px-10 bg-black min-h-[68vh] pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-40'>
          <div className='grid md:grid-cols-2 gap-y-10 gap-x-10'>


            <div className=' flex flex-col justify-center gap-y-5'>
              <ScrollAnimation animation="zoomIn">
                <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                  What You’ll Have Access To
                </h1>
              </ScrollAnimation >

              <div className='flex flex-col items-start' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                <ScrollAnimation animation="slideRight" delay={0.2}>
                  <div className='flex justify-center items-center gap-x-2 text-white'>
                    <div className='h-1 bg-white w-1 rounded-full'></div>
                    <p> 20+ in-depth training modules teaching you how to trade.</p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="slideRight" delay={0.3}>
                  <div className='flex justify-center items-center gap-x-2 text-white'>
                    <div className='h-1 bg-white w-1 rounded-full'></div>
                    <p> Automated trading algorithms – We’ll show you the exact algorithms we use to generate cash on demand. </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="slideRight" delay={0.4}>
                  <div className='flex justify-center items-center gap-x-2 text-white'>
                    <div className='h-1 bg-white w-1 rounded-full'></div>
                    <p>“Buy the Dip” Crypto Series – How I 7x’d my crypto portfolio in just 3 months using spot trading on Coinbases </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="slideRight" delay={0.5}>
                  <div className='flex justify-center items-center gap-x-2 text-white'>
                    <div className='h-1 bg-white w-1 rounded-full'></div>
                    <p> And so much more…</p>
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


      <section className='overflow-hidden flex justify-center items-center px-10 bg-white min-h-[80vh] pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-28'>
          <div className='grid md:grid-cols-2 gap-x-11 gap-y-10'>
            <ScrollAnimation animation="slideRight" delay={0.3}>
              <div>
                <img src={CHART} alt="" />
              </div>
            </ScrollAnimation>

            <div className='flex flex-col justify-center'>
              <ScrollAnimation animation="zoomIn" delay={0.1}>
                <div>
                  <h1 className='text-[#E7A647] text-4xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Perfect for All Skill Levels</h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp" delay={0.2}>
                <p className='text-gray-600 pt-5 pb-5' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Whether you’ve never placed a trade before or you’ve been trading for years, our platform is designed to meet you where you are and take you to the next level. </p>
              </ScrollAnimation>

              <div className='flex flex-col justify-start items-start gap-y-5' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                <ScrollAnimation animation="slideUp" delay={0.3}>
                  <div className='flex gap-3 justify-center items-center text-black'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> <span className='font-bold'> Beginners </span> : Start with the basics—learn how the
                        markets work and how to trade with confidence. </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideUp" delay={0.4}>
                  <div className='flex gap-3 justify-center items-center text-black'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> <span className='font-bold'> Intermediate Traders </span>: Refine your strategy, improve
                        your execution, and increase your profits.</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideUp" delay={0.5}>
                  <div className='flex gap-3 justify-center items-center text-black'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> <span className='font-bold'> Advanced Traders </span> : Gain access to proprietary strategies
                        and market insights from top industry professionals.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='overflow-hidden flex flex-col justify-center items-center px-10 bg-black md:min-h-[80vh] pb-10'>
        <div className='flex flex-col justify-center items-center pt-10 lg:pt-16 gap-y-3'>
          <ScrollAnimation animation="slideDown" delay={0.2}>
            <h1 className='text-xl font-thin tracking-widest text-gray-400 text-center'>Trusted by Professionals Like You</h1>
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={0.1}>
            <h1 className='text-[#E7A647] text-center pb-10 text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Client Success Stories</h1>
          </ScrollAnimation>

          <div>
            <img src={LONG} alt="" />
          </div>
        </div>
      </section>


      <section className='overflow-hidden flex justify-center items-center px-10 bg-white min-h-[80vh] pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-20'>
          <div className='grid md:grid-cols-2 gap-10'>

            <div className='flex flex-col justify-center'>
              <ScrollAnimation animation="zoomIn">
                <div>
                  <h1 className='text-[#E7A647] text-4xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>LIMITED SPOTS AVAILABLE</h1>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideLeft" delay={0.2}>
                <p className='text-gray-600 pt-5 pb-5 font-light' style={{ fontFamily: 'Montserrat, serif' }}>Join The Laser Fund Trading & Education Network today and get:
                </p>
              </ScrollAnimation>
              <div className='flex flex-col justify-start items-start gap-y-5 text-gray-500' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                <ScrollAnimation animation="slideLeft" delay={0.3}>
                  <div className='flex gap-3 justify-center items-center '>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> Full access to our forex, futures, and crypto trading education  </p>
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
                      <p> 1-on-1 coaching with trading experts
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideLeft" delay={0.6}>
                  <div className='flex gap-3 justify-center items-center'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> Access to passive income strategies and automation tools
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>


            <ScrollAnimation animation="slideRight" delay={0.5}>
              <div>
                <img src={LAY} alt="" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 justify-center items-center w-full flex bg-black min-h-[55vh] py-10'>
        <div className='flex flex-col justify-center items-center  gap-y-5'>
        <ScrollAnimation animation="zoomIn">
          <h1 className=' text-3xl text-center font-semibold text-[#E7A647]' style={{ fontFamily: 'Minion Pro, serif', fontWeight: 700 }}>BONUS: Get Started Today and Receive a Free Trading Strategy Guide ($197 Value)!</h1>
        </ScrollAnimation>

        <ScrollAnimation animation="slideUp" delay={0.3}>
          <h2 className=' text-xl font-semibold text-white text-center' style={{ fontFamily: 'Montserrat, serif', fontWeight: 200, fontStyle: 'normal' }}>Don’t miss this opportunity to transform your financial future.</h2>
          <h2 className=' text-xl font- text-white text-center' style={{ fontFamily: 'Montserrat, serif', fontWeight: 200, fontStyle: 'normal' }}>Click Below to Get Started Now!  </h2>
        </ScrollAnimation>
        <ScrollAnimation animation="slideUp" delay={0.5}>
          <div className='pt-7'>
            <button className='bg-[#E7A647] text-black px-3 py-3 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
              Review Disclaimer
            </button>
          </div>
          </ScrollAnimation>
        </div>
      </section>

    </>
  )
}

export default LaserFund