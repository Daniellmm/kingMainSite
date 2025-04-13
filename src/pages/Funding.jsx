import React, { useEffect } from 'react'
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

  return (
    <>
      <section className='relative overflow-hidden pb-10 px-10 bg-black flex justify-center items-center min-h-screen md:rounded-br-[100px] md:rounded-bl-[100px]'>
        <div className='z-10 relative pt-32 w-full flex flex-col justify-center items-center'>
          <ScrollAnimation animation="fadeIn" delay={0.3}>
            <div className='pb-7'>
              <img src={MText} alt="" />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div>
              <p className='text-white pb-5 text-center text-sm md:text-xl' style={{ fontFamily: 'Minion Pro, serif' }}>Build a Multi-6 or 7-Figure Business Helping Entrepreneurs get the Captain They Desperately Need to Succeed.</p>
            </div>

            <div className='flex justify-center'>
              <iframe className='lg:w-[650px] pb-5 rounded-2xl h-[250px] lg:rounded-[50px] lg:h-[415px]' src="https://www.youtube.com/embed/m2ERPhqNENk?si=LBHOcW6Eti5e4HTK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div>
              <button className='bg-[#E7A647] px-3 py-2 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                Check My Funding Eligibility
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
        <div className='flex flex-col justify-center items-center pt-24 pb-10'>
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


      <section className='overflow-hidden px-10 bg-black md:min-h-screen pb-14'>
        <div className='flex flex-col justify-center items-center py-20'>
          <ScrollAnimation animation="zoomIn" >
            <div>
              <h1 className='text-[#E7A647] pb-10 text-3xl text-center lg:px-44 font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Discover the Secrets to Building a Funding Business with Unlimited Earning Potential </h1>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={0.6}>
            <div className=''>
              <p className='text-white text-sm leading-5 lg:px-20 pb-14' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>If you’ve ever tried to work in the funding industry, you know the biggest challenge is finding financing solutions that actually work for your customers—and that skepticism is understandable.
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

          <div>
            <img src={LONG} alt="" />
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-white flex justify-center items-center  min-h-[70vh] pb-14'>
        <div className='flex justify-center items-center pt-10'>
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
                      <p> <span className='font-bold'> Unlimited Earning Potential </span> – You decide what to charge and how much to earn.</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideUp" delay={0.4} >
                  <div className='flex gap-3 justify-center items-center text-black'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> <span className='font-bold'> Simple Business Model </span> – Earn capital by simply connecting business owners with funding
                        solutions that work.</p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeIn" delay={0.6}>
                  <div className='flex gap-3 justify-center items-center text-black'>
                    <img src={CHECK} className='h-7' alt="" />
                    <div>
                      <p> <span className='font-bold'> Massive Market Demand </span> – 82% of entrepreneurs need cash flow to grow — and you’ll
                        have the solution.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animation="fadeIn" delay={0.6}>
                <div className='flex gap-3 justify-center items-center text-black'>
                  <img src={CHECK} className='h-7' alt="" />
                  <div>
                    <p> <span className='font-bold'> Minimal Overhead </span> – No need for a large team or expensive infrastructure to get started. </p>
                  </div>
                </div>
                </ScrollAnimation>

              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-black md:min-h-screen pb-14'>
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


      <section className='overflow-hidden px-10 bg-white flex justify-center items-center min-h-screen pb-14'>
        <div className='flex justify-center items-center pt-20'>
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


      <section className='overflow-hidden px-10 bg-black flex justify-center items-center min-h-screen pb-14'>
        <div className='flex justify-center items-center pt-20'>
          <div className='grid md:grid-cols-2 grid-rows-1'>

            <div className='flex flex-col  gap-y-3 md:px-10 lg:px-24 justify-center '>
            <ScrollAnimation animation="zoomIn">
              <div>
                <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Start Your Own Funding Business</h1>
              </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp">
                <div>
                <p className='text-white'>If you’ve been looking for a business model that: </p>
              </div>
              </ScrollAnimation>


              <div className='flex flex-col justify-start items-start gap-y-5'>

              <ScrollAnimation animation="slideRight" delay={0.2}>
                <div className='flex gap-3 justify-center items-center text-white'>
                  <img src={CHECK} className='h-7' alt="" />
                  <div>
                    <p> Has unlimited earning potential</p>
                  </div>
                </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideRight" delay={0.4}>
                <div className='flex gap-3 justify-center items-center text-white'>
                  <img src={CHECK} className='h-7' alt="" />
                  <div>
                    <p> Solves a real problem for business owners </p>
                  </div>
                </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideRight" delay={0.6}>
                <div className='flex gap-3 justify-center items-center text-white'>
                  <img src={CHECK} className='h-7' alt="" />
                  <div>
                    <p> Requires minimal overhead and setup costs </p>
                  </div>
                </div>
                </ScrollAnimation>

                <ScrollAnimation animation="slideRight" delay={0.8}>
                <div className='flex gap-3 justify-center items-center text-white'>
                  <img src={CHECK} className='h-7' alt="" />
                  <div>
                    <p> Works in ANY economy</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slideUp">
                <div className='flex gap-3 justify-center items-center text-white'>
                  <div>
                    <p>Then this is your moment.</p>
                  </div>
                </div>
                </ScrollAnimation>
              </div>
            </div>

            <ScrollAnimation animation="slideLeft">
            <div className='flex justify-center pt-8 lg:pt-0 items-center'>
              <div className='pb-10'>
                <img src={SCI} className='md:h-[400px]' alt="" />
              </div>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 justify-center items-center w-full flex bg-white min-h-[55vh]'>
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