import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi';
import LOGO1 from '../assets/images/logo/homeLogo.png'
import FundingLogo from '../assets/images/logo/fundingLogo.png'
import InsuranceLogo from '../assets/images/logo/insuranceLogo.png'
import LaserFundLogo from '../assets/images/logo/laserLogo.png'
import GGEILogo from '../assets/images/logo/ggei.png'
// import BlogLogo from '../assets/images/logo/homeLogo.png'

const NavBar = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const logoMap = {
    '/': LOGO1,
    '/funding': FundingLogo,
    '/insurance': InsuranceLogo,
    '/laserfund': LaserFundLogo,
    '/ggei': GGEILogo,
    // '/blog': BlogLogo
  };

  const currentLogo = logoMap[location.pathname] || HomeLogo;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  }

  const navigateTo = (path) => {
    navigate(path);
    setIsOpen(false);
  }




  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
      ? 'bg-white backdrop-blur-md shadow-md'
      : 'bg-white'
      }`}>
      <div className='w-full overflow-hidden text-black py-2 px-8 md:px-10 '>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <div className='cursor-pointer'>
            <img 
              src={currentLogo} 
              className='h-10 md:h-auto' 
              alt={`${location.pathname.slice(1) || 'home'} logo`} 
            />
          </div>

          {/* Menu Icon for Mobile */}
          <div className='md:hidden'>
            <button onClick={toggleMenu}>
              {isOpen ? (
                <HiX className='text-3xl' />
              ) : (
                <HiMenu className='text-3xl' />
              )}
            </button>
          </div>

          {/* Nav Links (hidden on mobile, shown on medium screens and up) */}
          <div className='hidden md:flex'>
            <ul className='flex space-x-5 md:space-x-10'>
              <li
                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/features') ? 'text-blue-600' : ''}`}
                onClick={() => navigateTo('/')}
              >
                Home
              </li>
              <li
                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/pricing') ? 'text-blue-600' : ''}`}
                onClick={() => navigateTo('/funding')}
              >
                Funding
              </li>
              <li
                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/docs') ? 'text-blue-600' : ''}`}
                onClick={() => navigateTo('/insurance')}
              >
                Insurance
              </li>
              <li
                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/contact') ? 'text-blue-600' : ''}`}
                onClick={() => navigateTo('/laserfund')}
              >
                LaserFund
              </li>
              <li
                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/contact') ? 'text-blue-600' : ''}`}
                onClick={() => navigateTo('/ggei')}
              >
                GGEI
              </li>
              <li
                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/contact') ? 'text-blue-600' : ''}`}
                onClick={() => navigateTo('/blog')}
              >
                Blog
              </li>
            </ul>
          </div>

          {/* contact us btn  */}
          <div className='hidden md:block lg:flex gap-x-5 border border-1 rounded-lg border-black'>
            <button
              // onClick={() => navigate('/login')}
              className='bg-Btn text-black rounded-lg  text-sm md:text-sm py-3 md:py-3 px-4 md:px-5 border-black transition-transform duration-500'>
              Contact Us
            </button>

          </div>

        </div>


        {/* Mobile Menu Dropdown */}

        {isOpen && (
          <div className='md:hidden mt-4  backdrop-blur-md rounded-lg p-4 shadow-md'>
            <ul className='flex space-y-4  justify-center items-center flex-col'>
              <li
                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/features') ? 'text-blue-600' : ''}`}
                onClick={() => navigateTo('/')}
              >
                Home
              </li>
              <li
                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/pricing') ? 'text-blue-600' : ''}`}
                onClick={() => navigateTo('/funding')}
              >
                Funding
              </li>
              <li
                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/docs') ? 'text-blue-600' : ''}`}
                onClick={() => navigateTo('/insurance')}
              >
                Insurance
              </li>
              <li
                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/contact') ? 'text-blue-600' : ''}`}
                onClick={() => navigateTo('/laserfund')}
              >
                LaserFund
              </li>
              <li
                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/contact') ? 'text-blue-600' : ''}`}
                onClick={() => navigateTo('/ggei')}
              >
                GGEI
              </li>
              <li
                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/contact') ? 'text-blue-600' : ''}`}
                onClick={() => navigateTo('/blog')}
              >
                Blog
              </li>

              <div className='w-[102px] border border-1 rounded-lg border-black'>
                <button
                  // onClick={() => navigate('/login')}
                  className='bg-Btn text-black rounded-lg  text-sm md:text-sm py-3 md:py-3 px-4 md:px-5 border-black transition-transform duration-500'>
                  Contact Us
                </button>

              </div>
            </ul>
          </div>
        )}

      </div>
    </div>
  )
}

export default NavBar