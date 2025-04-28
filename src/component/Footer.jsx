import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import LOGO1 from '../assets/images/logo/homeLogo.png'
import FundingLogo from '../assets/images/logo/fundingLogo.png'
import InsuranceLogo from '../assets/images/logo/insuranceLogo.png'
import LaserFundLogo from '../assets/images/logo/laserLogo.png'
import GGEILogo from '../assets/images/logo/ggei.png'
import Facebk from '../assets/images/icons/facebook.png'
import YouTB from '../assets/images/icons/youtube.png'
import X from '../assets/images/icons/twitter1.png'
import LinkedIn from '../assets/images/icons/linkedin.png'
import INSTA from '../assets/images/icons/insta.png'
import TIKTOK from '../assets/images/icons/tiktok.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const YOUTB_LINK = "https://www.youtube.com/@highticketofferfinancing";
const TICTOK_LINK = "https://www.tiktok.com/@highticketofferfinancing?_t=ZP-8vm7IS30NCg&_r=1  ";
const IG_LINK = "https://www.instagram.com/highticketofferfinancing?igsh=amcwdXIzZWNjajMy&utm_source=qr ";
const FB_LINK = "https://www.facebook.com/share/1FpiDQiWHd/";
const X_LINK = "https://x.com/htofinancing";
const LINKEDIN_LINK = "https://www.linkedin.com/company/highticketofferfinancing/";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const location = useLocation();
  
  // Create logo map just like in NavBar
  const logoMap = {
    '/': LOGO1,
    '/funding': FundingLogo,
    '/insurance': InsuranceLogo,
    '/laserfund': LaserFundLogo,
    '/ggei': GGEILogo,
  };

  // Get current logo based on path
  const currentLogo = logoMap[location.pathname] || LOGO1;

  // Create refs for animated elements
  const footerRef = useRef(null);
  const socialIconsRef = useRef(null);
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);
  const column3Ref = useRef(null);
  const column4Ref = useRef(null);
  const dividerRef = useRef(null);
  const copyrightRef = useRef(null);

  useEffect(() => {
    // Footer entrance animation
    gsap.fromTo(
      footerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Staggered animations for footer columns
    gsap.fromTo(
      [column1Ref.current, column2Ref.current, column3Ref.current, column4Ref.current],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Social icons pop animation
    gsap.fromTo(
      socialIconsRef.current.children,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.8,
        scrollTrigger: {
          trigger: socialIconsRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Divider line animation
    gsap.fromTo(
      dividerRef.current,
      { width: '0%', opacity: 0 },
      {
        width: '100%',
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Copyright fade in
    gsap.fromTo(
      copyrightRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  // Social Icon hover animation
  const handleSocialIconHover = (e, enter) => {
    gsap.to(e.target, {
      scale: enter ? 1.2 : 1,
      rotation: enter ? 10 : 0,
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  // Link hover animation
  const handleLinkHover = (e, enter) => {
    gsap.to(e.target, {
      x: enter ? 5 : 0,
      color: enter ? '#E7A647' : 'black',
      duration: 0.1,
      ease: 'power1.out'
    });
  };

  // Button hover animation
  const handleButtonHover = (e, enter) => {
    gsap.to(e.target, {
      scale: enter ? 1.05 : 1,
      backgroundColor: enter ? '#F0B05D' : '#E7A647',
      duration: 0.3
    });
  };


  const handleTKLinkClick = () => {
    window.open(TICTOK_LINK, '_blank');
  };
  const handleXLinkClick = () => {
    window.open(X_LINK, '_blank');
  };
  const handleYTLinkClick = () => {
    window.open(YOUTB_LINK, '_blank');
  };
  const handleFBLinkClick = () => {
    window.open(FB_LINK, '_blank');
  };
  const handleLBLinkClick = () => {
    window.open(LINKEDIN_LINK, '_blank');
  }
  const handleIGLinkClick = () => {
    window.open(IG_LINK, '_blank');
  }

  return (
    <div ref={footerRef} className='bg-white pt-14 flex flex-col justify-between gap-y-5 items-center px-5 md:px-16'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 w-full gap-y-10'>

        <div ref={column1Ref} className='flex flex-col justify-start items-start'>
          <div className='overflow-hidden'>
            <img 
              src={currentLogo} 
              alt={`${location.pathname.slice(1) || 'home'} logo`} 
              className='transform transition-transform hover:scale-105 duration-300' 
            />
          </div>
          <h1 className='font-thin pl-5 py-2' style={{ fontFamily: 'Montserrat, serif' }}>Follow Us On</h1>
          <div ref={socialIconsRef} className='flex justify-start flex-wrap items-center gap-4'>
            <img 
              src={Facebk} 
              onClick={handleFBLinkClick}
              alt="Facebook" 
              className='cursor-pointer'
              onMouseEnter={(e) => handleSocialIconHover(e, true)}
              onMouseLeave={(e) => handleSocialIconHover(e, false)}
            />
            <img 
              src={YouTB} 
              alt="YouTube" 
              onClick={handleYTLinkClick}
              className='cursor-pointer'
              onMouseEnter={(e) => handleSocialIconHover(e, true)}
              onMouseLeave={(e) => handleSocialIconHover(e, false)}
            />
            <img 
              src={X} 
              alt="X/Twitter" 
              onClick={handleXLinkClick}
              className='cursor-pointer'
              onMouseEnter={(e) => handleSocialIconHover(e, true)}
              onMouseLeave={(e) => handleSocialIconHover(e, false)}
            />
            <img 
              src={LinkedIn} 
              alt="LinkedIn" 
              onClick={handleLBLinkClick}
              className='cursor-pointer'
              onMouseEnter={(e) => handleSocialIconHover(e, true)}
              onMouseLeave={(e) => handleSocialIconHover(e, false)}
            />
            <img 
              src={INSTA} 
              alt="instagram" 
              onClick={handleIGLinkClick}
              className='cursor-pointer'
              onMouseEnter={(e) => handleSocialIconHover(e, true)}
              onMouseLeave={(e) => handleSocialIconHover(e, false)}
            />
            <img 
              src={TIKTOK} 
              alt="tiktok" 
              onClick={handleTKLinkClick}
              className='cursor-pointer'
              onMouseEnter={(e) => handleSocialIconHover(e, true)}
              onMouseLeave={(e) => handleSocialIconHover(e, false)}
            />
          </div>
        </div>

        <div ref={column2Ref} className='flex flex-col gap-y-5'>
          <div>
            <h1 className='font-bold' style={{ fontFamily: 'Montserrat, serif' }}>Company</h1>
          </div>

          <div>
            <ul>
              {['Home', 'About Us', 'Our Team', 'Services', 'Contact Us', 'Privacy Policy'].map((item, index) => (
                <li 
                  key={index} 
                  className='cursor-pointer py-1 transform transition-all'
                  onMouseEnter={(e) => handleLinkHover(e, true)}
                  onMouseLeave={(e) => handleLinkHover(e, false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div ref={column3Ref} className='flex flex-col gap-y-5'>
          <div>
            <h1 className='font-bold' style={{ fontFamily: 'Montserrat, serif' }}>Offer</h1>
          </div>

          <div>
            <ul>
              {['Funding', 'Insurance', 'LaserFund'].map((item, index) => (
                <li 
                  key={index} 
                  className='cursor-pointer py-1 transform transition-all'
                  onMouseEnter={(e) => handleLinkHover(e, true)}
                  onMouseLeave={(e) => handleLinkHover(e, false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div ref={column4Ref} className='flex flex-col gap-y-5 w-full'>
          <div>
            <h1 className='font-bold' style={{ fontFamily: 'Montserrat, serif' }}>Subscribe Newsletter</h1>
          </div>

          <div className='flex flex-col gap-y-3'>
            <p>Explore our news and blog content today and take the first step towards unlocking your full business potential.</p>

            <input
              type="text"
              name="Email"
              placeholder='Email...'
              className="w-full p-3 mb-4 rounded border-[2px] border-[#E7A647] text-black placeholder:text-[13px] placeholder:text-black placeholder:font-thin focus:ring-2 focus:ring-[#E7A647] focus:ring-opacity-50 transition-all duration-300"
              required
            />

            <div className='w-full overflow-hidden'>
              <button 
                className='bg-[#E7A647] w-full px-3 py-4  rounded-[5px] transform transition-all duration-300' 
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                onMouseEnter={(e) => handleButtonHover(e, true)}
                onMouseLeave={(e) => handleButtonHover(e, false)}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-y-7 justify-between w-full items-center'>
        <div ref={dividerRef} className='h-[1px] bg-black w-full'></div>
        <div ref={copyrightRef} className='flex flex-col text-center gap-y-4 md:flex-row justify-between w-full items-center pb-5'>
          <h1 className='' style={{ fontFamily: 'Montserrat, serif' }}>
            Copyright © 2025 <span className='text-[#E7A647]'> High Ticket Offer.</span> All Rights Reserved.
          </h1>
          <h1 
            className=' cursor-pointer hover:text-[#E7A647] transition-colors duration-300' 
            style={{ fontFamily: 'Montserrat, serif' }}
          >
            Privacy & Cookie Policy
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Footer