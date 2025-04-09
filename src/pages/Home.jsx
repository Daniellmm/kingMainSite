import React from 'react'
import MText from '../assets/images/png1.png'
import DollarCoin from '../assets/images/bg-live/bookmyl.png'
import DollarCoin2 from '../assets/images/bg-live/bookmyr.png'
import BANK from '../assets/images/bank.png'
import AWW from '../assets/images/aww.png'
import BBB from '../assets/images/bbb.png'
import MARK from '../assets/images/mark.png'
import Correct from '../assets/images/correct.png'
import Out from '../assets/images/out.png'
import Money from '../assets/images/money.png'
import Rect1 from '../assets/images/rect1.png'
import Rect2 from '../assets/images/rect2.png'
import Rect3 from '../assets/images/rect3.png'
import ArrowR from '../assets/images/arrowupright.png'


const Home = () => {
  return (
    <>
      <section className='relative overflow-hidden pb-10 px-10 bg-black flex justify-center items-center min-h-screen md:rounded-br-[100px] md:rounded-bl-[100px]'>
        <div className='z-10 relative pt-32 w-full flex flex-col justify-center items-center'>
          <div className='pb-7'>
            <img src={MText} alt="" />
          </div>
          <div>
            <p className='text-white pb-5 text-center text-sm md:text-xl' style={{ fontFamily: 'Minion Pro, serif' }}>in Fast, Reliable Financing for You & Your Customers!</p>
          </div>

          <div>
            <iframe className='lg:w-[650px] pb-5 rounded-2xl h-[250px] lg:rounded-[50px] lg:h-[415px]' src="https://www.youtube.com/embed/m2ERPhqNENk?si=LBHOcW6Eti5e4HTK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div>
            <button className='bg-[#E7A647] px-3 py-2 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
              Check My Funding Eligibility
            </button>
          </div>
        </div>

        <div className='absolute top-[200px] left-[-40px]'>
          <img src={DollarCoin} alt="" className='h-[100px] md:h-[120px] lg:h-auto' />
        </div>
        <div className='absolute bottom-[100px] right-[-40px]'>
          <img src={DollarCoin2} alt="" className='h-[100px] md:h-[120px] lg:h-auto' />
        </div>
        <div className='w-full h-full bg-black opacity-60 inset-0 absolute'></div>
      </section>


      <section className='overflow-hidden px-10 bg-white min-h-screen pb-14'>
        <div className='flex justify-center items-center pt-10'>
          <div className='grid md:grid-cols-2 grid-rows-1'>
            <div className='flex justify-center items-center'>
              <img src={BANK} alt="" />
            </div>

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

          </div>

        </div>

      </section>


      <section className='overflow-hidden px-10 bg-black md:min-h-screen pb-14'>
        <div className='flex flex-col justify-center items-center pt-24 pb-10'>
          <div className='pb-10'>
            <img src={AWW} alt="" />
          </div>

          <div>
            <h1 className='text-white text-center leading-10' style={{ fontFamily: 'Minion Pro, serif' }}>“Our mission is to create more millionaire entrepreneurs by ensuring you have all <br />the funding you need to start and scale your business aggressively.”</h1>
          </div>
          <div>
            <h1 className='text-[#E7A647] text-2xl pt-6 text-center' style={{ fontFamily: 'Adelia, serif' }}>C.e.o, Founder</h1>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-white flex justify-center items-center min-h-screen pb-14'>
        <div className='flex justify-center items-center pt-20'>
          <div className='grid md:grid-cols-2 grid-rows-1'>
            <div className='flex justify-center items-center'>
              <div>
                <iframe className='lg:w-[450px] pb-5 rounded-xl h-[250px] lg:rounded-[50px] lg:h-[450px]' src="https://www.youtube.com/embed/m2ERPhqNENk?si=LBHOcW6Eti5e4HTK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>

            <div className='flex flex-col gap-y-5 md:px-10 lg:px-24 justify-center '>
              <div>
                <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>About Us</h1>
              </div>

              <div>
                <p className='text-sm text-gray-700' style={{ fontFamily: 'Montserrat, serif' }}>If you’re here, it’s likely because you’ve worked with other funding companies in the past only
                  to be met with empty promises and disappointing results. To make matters worse, some have
                  even charged you upfront fees without delivering meaningful outcomes. That ends today!
                  <br /><br />
                  At High Ticket Offer Financing, we believe in results, not risks. That’s why we charge zero
                  upfront fees—we only get paid when we successfully secure your funding.
                  <br /><br />

                  It’s time to stop trying to get funded and start getting funded. Let’s get to work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-black min-h-screen pb-10'>
        <div className='flex justify-center items-center pt-20'>
          <div className='grid md:grid-cols-2 grid-rows-1'>
            <div className='flex justify-center items-center'>
              <div>
                <img src={BBB} className='md:h-[500px] w-auto' alt="" />
              </div>
            </div>

            <div className='flex flex-col justify-center py-10 md:px-12 lg:p-20'>
              <div>
                <h1 className='text-[#E7A647] text-3xl' style={{ fontFamily: 'Minion Pro, serif' }}>Funding Options Available For You & Your Customers</h1>
              </div>

              <div className='flex gap-x-3 pt-5 justify-start items-center'>
                <img src={MARK} className='h-6' alt="" />
                <h1 className='text-white text-sm' style={{ fontFamily: 'Montserrat, serif' }}>Small Business Loans Up to $3M</h1>
              </div>
              <div className='flex gap-x-3 pt-3 justify-start items-center'>
                <img src={MARK} className='h-6' alt="" />
                <h1 className='text-white text-sm' style={{ fontFamily: 'Montserrat, serif' }}>No Doc Funding Up to $200K</h1>
              </div>
              <div className='flex gap-x-3 pt-3 justify-start items-center'>
                <img src={MARK} className='h-6' alt="" />
                <h1 className='text-white text-sm' style={{ fontFamily: 'Montserrat, serif' }}>0% Business Funding Up to $150K</h1>
              </div>
              <div className='flex gap-x-3 pt-3 justify-start items-center'>
                <img src={MARK} className='h-6' alt="" />
                <h1 className='text-white text-sm' style={{ fontFamily: 'Montserrat, serif' }}>Home Equity Lines of Credit Up to $4M</h1>
              </div>
              <div className='flex gap-x-3 pt-3 justify-start items-center'>
                <img src={MARK} className='h-6' alt="" />
                <h1 className='text-white text-sm' style={{ fontFamily: 'Montserrat, serif' }}>And More…</h1>
              </div>

            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center pt-28'>
          <div>
            <h1 className='text-[#E7A647] text-3xl' style={{ fontFamily: 'Minion Pro, serif' }}>How It Works:</h1>
          </div>

          <div className='pb-10'>
            <h1 className='text-white text-2xl text-center' style={{ fontFamily: 'Minion Pro, serif' }}>Our pre-approval process is simple, quick, and easy.</h1>
          </div>

          <div className='grid lg:grid-cols-3 gap-x-10 gap-y-8'>

            <div className='h-[200px] w-[300px] bg-white rounded-xl flex flex-col justify-center items-center'>
              <div>
                <img src={Out} alt="" />
              </div>

              <div><h1 className='font-bold text-2xl' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Step 1</h1></div>

              <div>
                <h1 className=' text-sm' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Click “Apply Now”</h1>
              </div>

            </div>
            <div className='h-[200px] w-[300px] bg-white rounded-xl flex flex-col justify-center items-center'>
              <div>
                <img src={Correct} alt="" />
              </div>

              <div><h1 className='font-bold text-2xl' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Step 2</h1></div>

              <div>
                <h1 className=' text-sm' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Same Day Pre-Approvals</h1>
              </div>

            </div>
            <div className='h-[200px] w-[300px] bg-white rounded-xl flex flex-col justify-center items-center'>
              <div>
                <img src={Money} alt="" />
              </div>

              <div><h1 className='font-bold text-2xl' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Step 3 </h1></div>

              <div>
                <h1 className=' text-sm' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Receive Your Funds</h1>
              </div>

            </div>

          </div>

          <div className='pt-10'>
            <button className='bg-[#E7A647] px-3 py-2 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
              Apply Now
            </button>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-white min-h-[80vh] pb-14'>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <h1 className='text-[#E7A647] text-3xl font-semibold py-9' style={{ fontFamily: 'Minion Pro, serif' }} >
              Recent Articles & News
            </h1>
          </div>

          <div className='grid lg:grid-cols-3 gap-y-10'>
            <div className='flex flex-col justify-start gap-y-5 items-center md:px-7'>
              <div>
                <img src={Rect1} alt="" />
              </div>

              <div>
                <h1 className='text-black text-sm' style={{ fontFamily: 'Minion Pro, serif' }}>Unlocking the Power of  Content Marketing: Strategies for Success</h1>
              </div>

              <div className='flex justify-between items-center w-full'>
                <p className='text-[#E7A647] text-sm' style={{ fontFamily: 'Minion Pro, serif' }}>April 26, 2024</p>

                <div className='flex justify-center items-center'>
                  <p className='text-black text-xs' style={{ fontFamily: 'Minion Pro, serif', fontStyle: 'normal', fontWeight: 200 }}>Read More</p>

                  <img src={ArrowR} alt="" />
                </div>
              </div>

            </div>
            <div className='flex flex-col justify-start gap-y-5 items-center md:px-7  '>
              <div>
                <img src={Rect2} alt="" />
              </div>

              <div>
                <h1 className='text-black text-sm' style={{ fontFamily: 'Minion Pro, serif' }}>Unlocking the Power of  Content Marketing: Strategies for Success</h1>
              </div>

              <div className='flex justify-between items-center w-full'>
                <p className='text-[#E7A647] text-sm' style={{ fontFamily: 'Minion Pro, serif' }}>April 26, 2024</p>

                <div className='flex justify-center items-center'>
                  <p className='text-black text-xs' style={{ fontFamily: 'Minion Pro, serif', fontStyle: 'normal', fontWeight: 200 }}>Read More</p>

                  <img src={ArrowR} alt="" />
                </div>
              </div>

            </div>
            <div className='flex flex-col justify-start gap-y-5 items-center md:px-7  '>
              <div>
                <img src={Rect3} alt="" />
              </div>

              <div>
                <h1 className='text-black text-sm' style={{ fontFamily: 'Minion Pro, serif' }}>Unlocking the Power of  Content Marketing: Strategies for Success</h1>
              </div>

              <div className='flex justify-between items-center w-full'>
                <p className='text-[#E7A647] text-sm' style={{ fontFamily: 'Minion Pro, serif' }}>April 26, 2024</p>

                <div className='flex justify-center items-center'>
                  <p className='text-black text-xs' style={{ fontFamily: 'Minion Pro, serif', fontStyle: 'normal', fontWeight: 200 }}>Read More</p>
                  <img src={ArrowR} alt="" />
                </div>
              </div>

            </div>

          </div>


          <div className='pt-10'>
            <button className='bg-[#E7A647] px-3 py-2 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
              View All Post
            </button>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 justify-center items-center w-full flex bg-black min-h-[55vh]'>
        <div className='flex flex-col justify-center items-center text-white gap-y-5'>
          <h1 className=' text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif', fontWeight: 700 }}>Have Questions?</h1>
          <h2 className=' text-xl font-semibold text-center' style={{ fontFamily: 'Minion Pro, serif', fontWeight: 200, fontStyle: 'normal' }}>Complete questionnaire to speak to a representative.</h2>
          <div className='pt-7'>
            <button className='bg-[#E7A647] text-black px-3 py-3 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
              Complete Questionnaire
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home