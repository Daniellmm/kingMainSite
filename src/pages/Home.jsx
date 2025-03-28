import React from 'react'
import MText from '../assets/images/png1.png'
import DollarCoin from '../assets/images/bg-live/coin.png'
import BANK from '../assets/images/bank.png'
import AWW from '../assets/images/aww.png'


const Home = () => {
  return (
    <>
      <section className='relative overflow-hidden pb-10 px-10 bg-black min-h-screen md:rounded-br-[100px] md:rounded-bl-[100px]'>
        <div className='z-10 relative pt-32 w-full flex flex-col justify-center items-center'>
          <div>
            <img src={MText} alt="" />
          </div>
          <div>
            <p className='text-white pb-5 text-center text-sm md:text-xl' style={{fontFamily: 'Minion Pro, serif'}}>in Fast, Reliable Financing for You & Your Customers!</p>
          </div>

          <div>
            <iframe className='lg:w-[650px] pb-5 rounded-2xl h-[250px] lg:rounded-[50px] lg:h-[415px]' src="https://www.youtube.com/embed/m2ERPhqNENk?si=LBHOcW6Eti5e4HTK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div>
            <button className='bg-[#E7A647] px-3 py-2 text-sm rounded-[8px]' style={{fontFamily: 'Montserrat, serif', fontWeight:'medium'}}>
              Check My Funding Eligibility
            </button>
          </div>
        </div>

        <div className='absolute top-[200px] left-[-40px]'>
          <img src={DollarCoin} alt="" className='h-[100px] md:h-[120px] lg:h-auto' />
        </div>
        <div className='absolute bottom-[100px] right-[-40px]'>
          <img src={DollarCoin} alt="" className='h-[100px] md:h-[120px] lg:h-auto' />
        </div>
        <div className='w-full h-full bg-black opacity-60 inset-0 absolute'></div>

      </section>


      <section className='overflow-hidden px-10 bg-white min-h-screen pb-14'>
        <div className='flex justify-center items-center pt-10'>
          <div className='grid md:grid-cols-2 grid-rows-1'>
            <div className='flex justify-center items-center'>
              <img src={BANK} alt="" />
            </div>

            <div className='flex flex-col gap-y-5 px-24 justify-center'>
              <div>
                <h1 className='text-[#E7A647] text-3xl font-semibold' style={{fontFamily: 'Minion Pro, serif'}}>The Ultimate Funding Qualifications Guide for Free</h1>
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
                <button className='bg-[#E7A647] px-3 py-2 text-sm rounded-[8px]' style={{fontFamily: 'Montserrat, serif', fontWeight:'medium'}}>
                  Download Now
                </button>
              </div>
            </div>

          </div>

        </div>

      </section>


      <section className='overflow-hidden px-10 bg-black min-h-screen pb-14'>
        <div className='flex flex-col justify-center items-center pt-24 pb-10'>
          <div className='pb-10'>
            <img src={AWW} alt="" />
          </div>

          <div>
            <h1 className='text-white text-center leading-10' style={{fontFamily: 'Minion Pro, serif'}}>“Our mission is to create more millionaire entrepreneurs by ensuring you have all <br />the funding you need to start and scale your business aggressively.”</h1>
          </div>
          <div>
            <h1 className='text-[#E7A647] text-2xl pt-6 text-center' style={{fontFamily: 'Adelia, serif'}}>C.e.o, Founder</h1>
          </div>


        </div>
      </section>
    </>
  )
}

export default Home