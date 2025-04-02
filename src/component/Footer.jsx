import React from 'react'
import LOGO1 from '../assets/images/logo/homeLogo.png'
import Facebk from '../assets/images/icons/facebook.png'
import YouTB from '../assets/images/icons/youtube.png'
import X from '../assets/images/icons/twitter.png'
import LinkedIn from '../assets/images/icons/linkedin.png'


const Footer = () => {
  return (
    <div className='bg-white h-[60vh] pt-14 flex flex-col justify-between gap-y-5 items-center px-10 md:px-16 '>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 w-full gap-y-10'>

        <div className='flex flex-col justify-start items-start'>
          <div>
            <img src={LOGO1} alt="" />
          </div>
          <h1 className='font-thin pl-5 py-2' style={{ fontFamily: 'Montserrat, serif' }}>Follow Us On</h1>
          <div className='flex justify-center items-center gap-4'>
            <img src={Facebk} alt="" />
            <img src={YouTB} alt="" />
            <img src={X} alt="" />
            <img src={LinkedIn} alt="" />
          </div>
        </div>

        <div className='flex flex-col gap-y-5'>
          <div>
            <h1 className=' font-bold' style={{ fontFamily: 'Montserrat, serif' }}>Company</h1>
          </div>

          <div>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Services</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col gap-y-5'>
          <div>
            <h1 className=' font-bold' style={{ fontFamily: 'Montserrat, serif' }}>Offer</h1>
          </div>

          <div>
            <ul>
              <li>Funding</li>
              <li>Insurance</li>
              <li>LaserFund</li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col gap-y-5 w-full'>
          <div>
            <h1 className=' font-bold' style={{ fontFamily: 'Montserrat, serif' }}>Subscribe Newslatter</h1>
          </div>

          <div className='flex flex-col gap-y-3'>
            <p>Explore our news and blog content today and take the first step towards unlocking your full business potential.</p>

            <input
              type="text"
              name="Email"
              placeholder='Email...'
              className="w-full p-3 mb-4 rounded border-[2px] border-[#E7A647]  text-black placeholder:text-[13px] placeholder:text-black placeholder:font-thin"
              required
            />

            <div className='w-full'>
              <button className='bg-[#E7A647] w-full px-3 py-4 text-sm rounded-[5px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                Subscribe
              </button>
            </div>
          </div>

        </div>

      </div>

      <div className='flex flex-col gap-y-7 justify-between w-full items-center'>
        <div className='h-[1px] bg-black w-full'></div>
        <div className='flex flex-col text-center gap-y-4 md:flex-row justify-between w-full items-center pb-5'>
          <h1 className=' text-sm' style={{ fontFamily: 'Montserrat, serif' }}>Copyright © 2025 <span className='text-[#E7A647]'> High Ticket Offer.</span> All Rights Reserved.</h1>
          <h1 className=' text-sm' style={{ fontFamily: 'Montserrat, serif' }}>Privacy & Cookie Policy</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer