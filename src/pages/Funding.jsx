import React from 'react'
import MText from '../assets/images/png2.png'
import AWW from '../assets/images/aww.png'
import DollarCoin from '../assets/images/bg-live/coinpurl.png'
import DollarCoin2 from '../assets/images/bg-live/coinpurr.png'



const Funding = () => {
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

        <div className='absolute top-[200px] left-[-40px]'>
          <img src={DollarCoin} alt="" className='h-[100px] md:h-[120px] lg:h-auto' />
        </div>
        <div className='absolute bottom-[100px] right-[-40px]'>
          <img src={DollarCoin2} alt="" className='h-[100px] md:h-[120px] lg:h-auto' />
        </div>
        <div className='w-full h-full bg-black opacity-60 inset-0 absolute'></div>
      </section>

     <section className='overflow-hidden px-10 bg-white md:min-h-screen pb-14'>
            <div className='flex flex-col justify-center items-center pt-24 pb-10'>
              <div className='pb-10'>
                <img src={AWW} alt="" />
              </div>
    
              <div className='lg:px-24'>
                <h1 className='text-black text-center leading-10' style={{ fontFamily: 'Minion Pro, serif' }}>82% of entrepreneurs fail due to lack of cash flow—and 38% run out of cash entirely. By starting a funding business, you become the solution to a problem nearly every entrepreneur faces. This is the most profitable, low start-up cost opportunity available, and no extensive education is required—everyone needs capital.</h1>
              </div>
              <div>
                <h1 className='text-[#E7A647] text-2xl pt-6 text-center' style={{ fontFamily: 'Adelia, serif' }}>C.e.o, Founder</h1>
              </div>
            </div>
          </section>
    </>
  )
}

export default Funding