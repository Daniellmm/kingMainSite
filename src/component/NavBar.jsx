import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import LOGO1 from '../assets/images/logo/homeLogo.png'
import FundingLogo from '../assets/images/logo/fundingLogo.png'
import InsuranceLogo from '../assets/images/logo/insuranceLogo.png'
import LaserFundLogo from '../assets/images/logo/laserLogo.png'
import GGEILogo from '../assets/images/logo/ggei.png'
import ScrollAnimation from '../component/ScrollAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Refs for animations
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const buttonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const dropdownRef = useRef(null);
  const dropdownToggleRef = useRef(null);

  const logoMap = {
    '/': LOGO1,
    '/funding': FundingLogo,
    '/insurance': InsuranceLogo,
    '/laserfund': LaserFundLogo,
    '/ggei': GGEILogo,
  };

  const currentLogo = logoMap[location.pathname] || LOGO1;

  // Dropdown menu items
  const dropdownItems = [
    { path: '/about', label: 'About Us' },
    { path: '/credit card liquidation', label: 'CCL' },
    { path: '/earn-protect-grow', label: 'EPG' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && 
          dropdownToggleRef.current && !dropdownToggleRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  // Initial load animations
  useEffect(() => {
    // Initial navbar entrance animation
    gsap.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Staggered animation for logo and links
    gsap.fromTo(
      [logoRef.current, linksRef.current, buttonRef.current],
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
        ease: "power2.out"
      }
    );
  }, []);

  // Animation for navbar scroll state change
  useEffect(() => {
    if (navbarRef.current) {
      gsap.to(navbarRef.current, {
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.95)',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
        height: scrolled ? 'auto' : 'auto',
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [scrolled]);

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );

        // Animate the menu items
        gsap.fromTo(
          mobileMenuRef.current.querySelectorAll('li, div'),
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, stagger: 0.05, duration: 0.3, delay: 0.1, ease: "power2.out" }
        );
      }
    }
  }, [isOpen]);

  // Dropdown animation
  useEffect(() => {
    if (dropdownRef.current) {
      if (isDropdownOpen) {
        gsap.fromTo(
          dropdownRef.current,
          { opacity: 0, y: -10, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power2.out" }
        );

        // Animate dropdown items
        gsap.fromTo(
          dropdownRef.current.querySelectorAll('li'),
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, stagger: 0.05, duration: 0.2, delay: 0.1, ease: "power2.out" }
        );
      } else {
        gsap.to(dropdownRef.current, {
          opacity: 0,
          y: -10,
          scale: 0.95,
          duration: 0.15,
          ease: "power2.in"
        });
      }
    }
  }, [isDropdownOpen]);

  const isActive = (path) => {
    return location.pathname === path;
  }

  const isDropdownActive = () => {
    return dropdownItems.some(item => location.pathname === item.path);
  }

  const navigateTo = (path) => {
    navigate(path);
    setIsOpen(false);
    setIsDropdownOpen(false);
  }

  // Hover animation for nav links
  const handleLinkHover = (e, enter) => {
    gsap.to(e.target, {
      scale: enter ? 1.05 : 1,
      color: enter ? '#E7A647' : isActive(e.target.getAttribute('data-path')) ? '#E7A647' : '#000',
      duration: 0.2
    });
  };

  // Button hover animation
  const handleButtonHover = (e, enter) => {
    gsap.to(e.target, {
      scale: enter ? 1.05 : 1,
      backgroundColor: enter ? '#E7A647' : 'transparent',
      duration: 0.2
    });
  };

  // Dropdown hover animation
  const handleDropdownHover = (e, enter) => {
    gsap.to(e.target, {
      scale: enter ? 1.05 : 1,
      color: enter ? '#E7A647' : isDropdownActive() ? '#E7A647' : '#000',
      duration: 0.2
    });

    // Animate the chevron
    const chevron = e.target.querySelector('.chevron-icon');
    if (chevron) {
      gsap.to(chevron, {
        rotate: enter ? 180 : (isDropdownOpen ? 180 : 0),
        duration: 0.2
      });
    }
  };

  return (
    <div
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white backdrop-blur-md shadow-md' : 'bg-white'
        }`}
    >
      <div className='w-full overflow-hidden text-black py-2 px-8 md:px-24'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <div ref={logoRef} className='cursor-pointer'>
            <img
              src={currentLogo}
              className='h-10 md:h-14'
              alt={`${location.pathname.slice(1) || 'home'} logo`}
            />
          </div>

          {/* Menu Icon for Mobile */}
          <div className='lg:hidden'>
            <button
              onClick={toggleMenu}
              className='transition-transform duration-300'
              onMouseEnter={(e) => {
                gsap.to(e.target, {
                  rotate: isOpen ? 0 : 90,
                  scale: 1.1,
                  duration: 0.3
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, {
                  rotate: 0,
                  scale: 1,
                  duration: 0.3
                });
              }}
            >
              {isOpen ? (
                <HiX className='text-3xl' />
              ) : (
                <HiMenu className='text-3xl' />
              )}
            </button>
          </div>

          {/* Nav Links (hidden on mobile, shown on medium screens and up) */}
          <div ref={linksRef} className='hidden lg:flex'>
            <ul className='flex space-x-5 md:space-x-6 items-center'>
              <li
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                data-path="/"
                className={` text-lg md: cursor-pointer transition-colors ${isActive('/') ? 'text-yellow-600 font-semibold' : ''}`}
                onClick={() => navigateTo('/')}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Funding
              </li>
              <li
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                data-path="/funding"
                className={` text-lg md: cursor-pointer transition-colors ${isActive('/funding') ? 'text-yellow-600 font-semibold' : ''}`}
                onClick={() => navigateTo('/funding')}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                SYOFB
              </li>
              <li
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                data-path="/insurance"
                className={` text-lg md: cursor-pointer transition-colors ${isActive('/insurance') ? 'text-yellow-600 font-semibold' : ''}`}
                onClick={() => navigateTo('/insurance')}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Insurance
              </li>
              <li
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                data-path="/laserfund"
                className={` text-lg md: cursor-pointer transition-colors ${isActive('/laserfund') ? 'text-yellow-600 font-semibold' : ''}`}
                onClick={() => navigateTo('/laserfund')}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Trading
              </li>
              <li
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                data-path="/ggei"
                className={` text-lg md: cursor-pointer transition-colors ${isActive('/ggei') ? 'text-yellow-600 font-semibold' : ''}`}
                onClick={() => navigateTo('/ggei')}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Become A Bank
              </li>

              {/* Dropdown Menu */}
              <li className='relative'>
                <div
                  ref={dropdownToggleRef}
                  style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                  className={`text-lg cursor-pointer transition-colors flex items-center gap-1 ${isDropdownActive() ? 'text-yellow-600 font-semibold' : ''}`}
                  onClick={toggleDropdown}
                  onMouseEnter={(e) => handleDropdownHover(e, true)}
                  onMouseLeave={(e) => handleDropdownHover(e, false)}
                >
                  Other Pages
                  <HiChevronDown 
                    className={`chevron-icon transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  />
                </div>

                {/* Dropdown Content */}
                {isDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className='absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-10'
                  >
                    <ul>
                      {dropdownItems.map((item, index) => (
                        <li
                          key={index}
                          style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                          className={`px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-600 cursor-pointer transition-colors ${isActive(item.path) ? 'text-yellow-600 font-semibold bg-yellow-50' : ''}`}
                          onClick={() => navigateTo(item.path)}
                        >
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* contact us btn  */}
          <div ref={buttonRef} className='hidden  lg:flex gap-x-5 border border-1 rounded-lg border-black'>
            <button
              style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
              className='bg-Btn text-black rounded-lg  md:text-sx hover:bg-[#E7A647] py-3 md:py-2 px-4 md:px-2 border-black transition-all duration-300'
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonHover(e, false)}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className='lg:hidden mt-4 backdrop-blur-md rounded-lg p-4 shadow-md'
          >
            <ul className='flex space-y-4 justify-center items-center flex-col'>
              <li
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                className={` text-lg cursor-pointer transition-colors ${isActive('/') ? 'text-yellow-600 font-semibold' : ''}`}
                onClick={() => navigateTo('/')}
              >
                Funding
              </li>
              <li
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                className={`text-lg cursor-pointer transition-colors ${isActive('/funding') ? 'text-yellow-600 font-semibold' : ''}`}
                onClick={() => navigateTo('/funding')}
              >
                SYOFB
              </li>
              <li
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                className={` text-lg cursor-pointer transition-colors ${isActive('/insurance') ? 'text-yellow-600 font-semibold' : ''}`}
                onClick={() => navigateTo('/insurance')}
              >
                Insurance
              </li>
              <li
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                className={` text-lg cursor-pointer transition-colors ${isActive('/laserfund') ? 'text-yellow-600 font-semibold' : ''}`}
                onClick={() => navigateTo('/laserfund')}
              >
                Trading
              </li>
              <li
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                className={` text-lg cursor-pointer transition-colors ${isActive('/ggei') ? 'text-yellow-600 font-semibold' : ''}`}
                onClick={() => navigateTo('/ggei')}
              >
                Become A Bank
              </li>

              {/* Mobile Dropdown Items */}
              <div className='w-full border-t flex flex-col justify-center items-center border-gray-200 pt-4'>
                <p style={{ fontFamily: 'Montserrat, serif', fontWeight: 'semibold' }} className='text-sm text-gray-500 mb-2'>Other Pages</p>
                {dropdownItems.map((item, index) => (
                  <li
                    key={index}
                    style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                    className={`text-lg cursor-pointer transition-colors ${isActive(item.path) ? 'text-yellow-600 font-semibold' : ''}`}
                    onClick={() => navigateTo(item.path)}
                  >
                    {item.label}
                  </li>
                ))}
              </div>

              <div className='w-[129px] border border-1 rounded-lg border-black'>
                <button
                  style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                  className='bg-Btn text-black rounded-lg  py-3 px-4 border-black transition-transform duration-500'
                >
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