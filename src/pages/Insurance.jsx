import React from 'react'
import MText from '../assets/images/png2.png'
import NOTE from '../assets/images/bg-live/note.png'
import NOTE2 from '../assets/images/bg-live/note2.png'
import HEADPHONE from '../assets/images/headphone.png'
import BIGLOGO from '../assets/images/biglogo.png'
import FALLCOIN from '../assets/images/fallcoin.png'

const Insurance = () => {
  return (
    <>
      <section className='relative overflow-hidden pb-10 px-10 bg-black flex justify-center items-center min-h-screen md:rounded-br-[100px] md:rounded-bl-[100px]'>
        <div className='z-10 relative pt-32 w-full flex flex-col justify-center items-center'>
          <div>
            <img src={MText} alt="" />
          </div>
          <div>
            <p className='text-white pb-5 text-center text-sm md:text-xl' style={{ fontFamily: 'Minion Pro, serif' }}>Build a Multi-6 or 7-Figure Business Helping Entrepreneurs get the Captain They Desperately Need to Succeed.</p>
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

        <div className='absolute top-[200px] left-[-20px]'>
          <img src={NOTE2} alt="" className='h-[100px] md:h-[120px] lg:h-52' />
        </div>
        <div className='absolute bottom-[100px] right-[-40px]'>
          <img src={NOTE} alt="" className='h-[100px] md:h-[120px] lg:h-52' />
        </div>
        <div className='w-full h-full bg-black opacity-60 inset-0 absolute'></div>
      </section>


      <section className='overflow-hidden px-10 bg-white min-h-[50vh]'>
        <div className='flex flex-col justify-center items-center pt-24 '>

          <div className='lg:px-24'>
            <h1 className='text-black text-center leading-10' style={{ fontFamily: 'Minion Pro, serif' }}>The definition of insanity is doing the same thing over and over again and expecting a different result.” It’s time to get serious about your financial future. If you want to ensure you and your company are financially set up for success, get a FREE financial review with YellowBrick Financial today.</h1>
          </div>
          <div>
            <h1 className='text-[#E7A647] text-2xl pt-6 text-center' style={{ fontFamily: 'Adelia, serif' }}>C.e.o, Founder</h1>
          </div>
        </div>
      </section>


      <section className='overflow-hidden flex justify-center items-center px-10 bg-black md:min-h-[70vh] pb-14'>
        <div className='flex justify-center items-center pt-10 md:px-40'>
          <div className='grid md:grid-cols-2 gap-y-10'>
            <div>
              <img src={HEADPHONE} className='h-80' alt="" />
            </div>

            <div className='flex flex-col justify-center items-start'>
              <h1 className='text-[#E7A647] pb-10 text-3xl  md:text-start font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Book a <span className='text-white italic'>Free</span>  Financial Review and Get the “Spender, Saver, Wealth Creator” Audio FREE. </h1>
              <div>
                <button className='bg-[#E7A647] px-5 py-3 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                  FREE Financial Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-white min-h-[80vh] pb-14'>
        <div className='flex flex-col justify-center items-center pt-10'>
          <div>
            <h1 className='text-[#E7A647] pb-10 text-3xl text-center md:text-start font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}> About YellowBrick Financial — A Company That Cares </h1>
          </div>

          <div className='grid md:grid-cols-2 lg:px-40 gap-y-10'>
            <div>
              <img src={BIGLOGO} className='h-72' alt="" />
            </div>

            <div>
              <p className='text-black text-sm ' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                78% of Americans live paycheck to paycheck, and nearly half (49%) have less than $500 in savings. The truth is, the wealthy don’t just invest wisely—they structure and protect their money differently. Billionaires like Warren Buffett aren’t just investors; they leverage life insurance, tax-efficient financial strategies, and asset protection to ensure their wealth continues to grow—regardless of economic conditions.
                <br /><br />
                At YellowBrick Financial, we believe financial security isn’t a luxury—it’s a necessity. We are  committed to helping entrepreneurs correct critical financial mistakes by structuring financial  plans the right way—designed to grow, protect, and pass down wealth for generations. We  teach our clients what the wealthy already know: how to build financial independence with  strategies that work in both good times and bad.
              </p>
            </div>

          </div>
        </div>
      </section>


      <section className='overflow-hidden flex flex-col justify-center items-center px-10 bg-black min-h-[58vh] pb-10'>
        <div className='flex flex-col justify-center items-center lg:px-64'>
          <div>
            <h1 className='text-[#E7A647] text-center pb-10 text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Even if you believe your financials are on track, you should still get a FREE financial
              review.
            </h1>
          </div>

          <div>
            <p className='text-white text-sm font-extralight text-center leading-6 lg:px-20 ' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>88% of financial plans and life insurance policies are improperly structured, leaving families exposed to unnecessary taxes, lost wealth, and financial instability when they need protection the most.</p>
          </div>
        </div>
      </section>


      <section className='overflow-hidden flex justify-center items-center px-10 bg-white min-h-[80vh] pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-40'>
          <div className='grid md:grid-cols-2 gap-y-10'>
            <div>
              <img src={FALLCOIN} className='h-96' alt="" />
            </div>

            <div className=' flex flex-col justify-center gap-y-5'>
              <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                Even if you believe your financials are on track, you should still get a FREE financial review.
              </h1>
              <p className=' text-sm font-extralight text-gray-900 leading-6' style={{ fontFamily: 'Montserrat, serif' }}>
                88% of financial plans and life insurance policies are improperly structured,
                leaving families exposed to unnecessary taxes,
                lost wealth, and financial instability when they need protection the most.
              </p>
              <p className='text-black font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                Are You Ready to Know Exactly What You Need to Do to Get Your Company Financials on Track?
              </p>

              <div>
                <button className='bg-[#E7A647] px-5 py-3 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                  FREE Financial Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Insurance