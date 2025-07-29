import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi'
import LOGO1 from '../assets/images/logo/homeLogo.png'
import FundingLogo from '../assets/images/logo/fundingLogo.png'
import InsuranceLogo from '../assets/images/logo/insuranceLogo.png'
import LaserFundLogo from '../assets/images/logo/laserLogo.png'
import CCLLogo from '../assets/images/logo/creditLogo.webp'
import GGEILogo from '../assets/images/logo/ggei.png'
// Add these imports for the dropdown page logos
// import AboutLogo from '../assets/images/logo/aboutLogo.png' // Add your about logo
// import CCLLogo from '../assets/images/logo/Logo.png'
import EPGLogo from '../assets/images/page-two/logo.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Refs for animations
  const navbarRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef(null)
  const buttonRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const dropdownRef = useRef(null)
  const dropdownToggleRef = useRef(null)

  // Updated logoMap to include dropdown pages
  const logoMap = {
    '/': LOGO1,
    '/funding': FundingLogo,
    '/insurance': InsuranceLogo,
    '/laserfund': LaserFundLogo,
    '/ggei': GGEILogo,
    // '/about': AboutLogo,
    '/credit-card-liquidation': CCLLogo,
    '/earn-protect-grow': EPGLogo,
    // { path: '/about', label: 'About Us' },
    // { path: '/credit card liquidation', label: 'Credit to Cash' },
  }

  const currentLogo = logoMap[location.pathname] || LOGO1

  // Dropdown menu items
  const dropdownItems = [
    { path: '/credit-card-liquidation', label: 'CREDIT TO CASH' },
    { path: '/funding', label: 'SYOFB' },
    { path: '/earn-protect-grow', label: 'Podcast' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        dropdownToggleRef.current &&
        !dropdownToggleRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Initial load animations
  useEffect(() => {
    // Initial navbar entrance animation
    gsap.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
    )

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
        ease: 'power2.out',
      },
    )
  }, [])

  // Animation for navbar scroll state change
  useEffect(() => {
    if (navbarRef.current) {
      gsap.to(navbarRef.current, {
        backgroundColor: scrolled
          ? 'rgba(255, 255, 255, 1)'
          : 'rgba(255, 255, 255, 0.95)',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
        height: scrolled ? 'auto' : 'auto',
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }, [scrolled])

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
        )

        // Animate the menu items
        gsap.fromTo(
          mobileMenuRef.current.querySelectorAll('li, div'),
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.3,
            delay: 0.1,
            ease: 'power2.out',
          },
        )
      }
    }
  }, [isOpen])

  // Dropdown animation
  useEffect(() => {
    if (dropdownRef.current) {
      if (isDropdownOpen) {
        gsap.fromTo(
          dropdownRef.current,
          { opacity: 0, y: -10, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: 'power2.out' },
        )

        // Animate dropdown items
        gsap.fromTo(
          dropdownRef.current.querySelectorAll('li'),
          { opacity: 0, x: -10 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.05,
            duration: 0.2,
            delay: 0.1,
            ease: 'power2.out',
          },
        )
      } else {
        gsap.to(dropdownRef.current, {
          opacity: 0,
          y: -10,
          scale: 0.95,
          duration: 0.15,
          ease: 'power2.in',
        })
      }
    }
  }, [isDropdownOpen])

  const isActive = (path) => {
    return location.pathname === path
  }

  const isDropdownActive = () => {
    return dropdownItems.some((item) => location.pathname === item.path)
  }

  const navigateTo = (path) => {
    navigate(path)
    setIsOpen(false)
    setIsDropdownOpen(false)
  }

  // Hover animation for nav links
  const handleLinkHover = (e, enter) => {
    gsap.to(e.target, {
      scale: enter ? 1.05 : 1,
      color: enter
        ? '#E7A647'
        : isActive(e.target.getAttribute('data-path'))
          ? '#E7A647'
          : '#000',
      duration: 0.2,
    })
  }

  // Button hover animation
  const handleButtonHover = (e, enter) => {
    gsap.to(e.target, {
      scale: enter ? 1.05 : 1,
      backgroundColor: enter ? '#E7A647' : 'transparent',
      duration: 0.2,
    })
  }

  // Dropdown hover animation
  const handleDropdownHover = (e, enter) => {
    gsap.to(e.target, {
      scale: enter ? 1.05 : 1,
      color: enter ? '#E7A647' : isDropdownActive() ? '#E7A647' : '#000',
      duration: 0.2,
    })

    // Animate the chevron
    const chevron = e.target.querySelector('.chevron-icon')
    if (chevron) {
      gsap.to(chevron, {
        rotate: enter ? 180 : isDropdownOpen ? 180 : 0,
        duration: 0.2,
      })
    }
  }

  return (
    <div
      ref={navbarRef}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md backdrop-blur-md' : 'bg-white'
      }`}
    >
      <div className="w-full bg-white px-8 py-2 text-black md:px-24">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div ref={logoRef} className="cursor-pointer">
            <img
              src={currentLogo}
              className="h-10 md:h-14"
              alt={`${location.pathname.slice(1) || 'home'} logo`}
            />
          </div>

          {/* Menu Icon for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="transition-transform duration-300"
              onMouseEnter={(e) => {
                gsap.to(e.target, {
                  rotate: isOpen ? 0 : 90,
                  scale: 1.1,
                  duration: 0.3,
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, {
                  rotate: 0,
                  scale: 1,
                  duration: 0.3,
                })
              }}
            >
              {isOpen ? (
                <HiX className="text-3xl" />
              ) : (
                <HiMenu className="text-3xl" />
              )}
            </button>
          </div>

          {/* Nav Links (hidden on mobile, shown on medium screens and up) */}
          <div ref={linksRef} className="hidden lg:flex">
            <ul className="flex items-center space-x-5 uppercase md:space-x-6">
              <li
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                data-path="/about"
                className={`md: cursor-pointer text-lg transition-colors ${isActive('/about') ? 'font-semibold text-yellow-600' : ''}`}
                onClick={() => navigateTo('/about')}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                ABOUT US
              </li>
              <li
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                data-path="/"
                className={`md: cursor-pointer text-lg transition-colors ${isActive('/') ? 'font-semibold text-yellow-600' : ''}`}
                onClick={() => navigateTo('/')}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Funding
              </li>
              <li
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                data-path="/insurance"
                className={`md: cursor-pointer text-lg transition-colors ${isActive('/insurance') ? 'font-semibold text-yellow-600' : ''}`}
                onClick={() => navigateTo('/insurance')}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Insurance
              </li>
              {/* <li
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                data-path="/funding"
                className={`md: cursor-pointer text-lg transition-colors ${isActive('/funding') ? 'font-semibold text-yellow-600' : ''}`}
                onClick={() => navigateTo('/funding')}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                SYOFB
              </li>    */}

              {/* <li
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                data-path="/credit-card-liquidation"
                className={`md: cursor-pointer text-lg transition-colors ${isActive('/credit-card-liquidation') ? 'font-semibold text-yellow-600' : ''}`}
                onClick={() => navigateTo('/credit-card-liquidation')}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                CREDIT TO CASH
              </li>  */}
              <li
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                data-path="/laserfund"
                className={`text-lg transition-colors md:cursor-pointer ${isActive('/laserfund') ? 'font-semibold text-yellow-600' : ''}`}
                onClick={() => navigateTo('/laserfund')}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Trading
              </li>
              <li
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                data-path="/ggei"
                className={`md: cursor-pointer text-lg transition-colors ${isActive('/ggei') ? 'font-semibold text-yellow-600' : ''}`}
                onClick={() => navigateTo('/ggei')}
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Become A Bank
              </li>

              {/* Dropdown Menu */}
              <li className="relative">
                <div
                  ref={dropdownToggleRef}
                  style={{
                    fontFamily: 'Montserrat, serif',
                    fontWeight: 'medium',
                  }}
                  className={`flex cursor-pointer items-center gap-1 text-lg transition-colors ${isDropdownActive() ? 'font-semibold text-yellow-600' : ''}`}
                  onClick={toggleDropdown}
                  onMouseEnter={(e) => handleDropdownHover(e, true)}
                  onMouseLeave={(e) => handleDropdownHover(e, false)}
                >
                  More
                  <HiChevronDown
                    className={`chevron-icon transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </div>

                {/* Dropdown Content - Fixed z-index issue */}
                {isDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 top-full z-[9999] mt-2 w-48 rounded-lg border border-gray-100 bg-white py-2 shadow-lg"
                    style={{ zIndex: 9999 }}
                  >
                    <ul>
                      {dropdownItems.map((item, index) => (
                        <li
                          key={index}
                          style={{
                            fontFamily: 'Montserrat, serif',
                            fontWeight: 'medium',
                          }}
                          className={`cursor-pointer px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-yellow-600 ${isActive(item.path) ? 'bg-yellow-50 font-semibold text-yellow-600' : ''}`}
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
          <div
            ref={buttonRef}
            className="border-1 hidden gap-x-5 rounded-lg border border-black lg:flex"
          >
            <button
              style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
              className="bg-Btn md:text-sx rounded-lg border-black px-4 py-3 text-black transition-all duration-300 hover:bg-[#E7A647] md:px-2 md:py-2"
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
            className="mt-4 rounded-lg p-4 shadow-md backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col items-center justify-center space-y-2 uppercase">
              <li
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                className={`cursor-pointer text-lg transition-colors ${isActive('/about') ? 'font-semibold text-yellow-600' : ''}`}
                onClick={() => navigateTo('/about')}
              >
                ABOUT US
              </li>
              <li
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                className={`cursor-pointer text-lg transition-colors ${isActive('/') ? 'font-semibold text-yellow-600' : ''}`}
                onClick={() => navigateTo('/')}
              >
                Funding
              </li>
              <li
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                className={`cursor-pointer text-lg transition-colors ${isActive('/insurance') ? 'font-semibold text-yellow-600' : ''}`}
                onClick={() => navigateTo('/insurance')}
              >
                Insurance
              </li>
              <li
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                className={`cursor-pointer text-lg transition-colors ${isActive('/laserfund') ? 'font-semibold text-yellow-600' : ''}`}
                onClick={() => navigateTo('/laserfund')}
              >
                Trading
              </li>
              <li
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                className={`cursor-pointer text-lg transition-colors ${isActive('/ggei') ? 'font-semibold text-yellow-600' : ''}`}
                onClick={() => navigateTo('/ggei')}
              >
                Become A Bank
              </li>
              <li
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                className={`cursor-pointer text-lg transition-colors ${isActive('/credit-card-liquidation') ? 'font-semibold text-yellow-600' : ''}`}
                onClick={() => navigateTo('/credit-card-liquidation')}
              >
                CREDIT TO CASH
              </li>
              <li
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                className={`cursor-pointer text-lg transition-colors ${isActive('/funding') ? 'font-semibold text-yellow-600' : ''}`}
                onClick={() => navigateTo('/funding')}
              >
                SYOFB
              </li>

              <li
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                className={`cursor-pointer text-lg transition-colors ${isActive('/earn-protect-grow') ? 'font-semibold text-yellow-600' : ''}`}
                onClick={() => navigateTo('/earn-protect-grow')}
              >
                PODCAST
              </li>

              {/* Mobile Dropdown Items */}
              {/* <div className='w-full flex flex-col gap-y-2 justify-center items-center border-gray-200 '>
                <p style={{ fontFamily: 'Montserrat, serif', fontWeight: 'semibold' }} className='text-sm text-gray-500 mb-2'><span className='hidden lg:block'>More</span></p>
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
              </div> */}

              <div className="border-1 w-[189px] rounded-lg border border-black">
                <button
                  style={{
                    fontFamily: 'Montserrat, serif',
                    fontWeight: 'medium',
                  }}
                  className="bg-Btn text- rounded-lg border-black px-10 py-4 text-center uppercase text-black transition-transform duration-500"
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
