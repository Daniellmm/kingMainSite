import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollAnimation = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.8,
  triggerPosition = 'top 95%',
}) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    let tl

    switch (animation) {
      case 'fadeIn':
        tl = gsap.fromTo(
          element,
          { opacity: 0 },
          {
            opacity: 1,

            duration: duration,
            delay: delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: triggerPosition,
              toggleActions: 'play none none none',
            },
          },
        )
        break
      case 'slideRight':
        tl = gsap.fromTo(
          element,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: duration,
            delay: delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: triggerPosition,
              toggleActions: 'play none none none',
            },
          },
        )
        break
      case 'slideDown':
        tl = gsap.fromTo(
          element,
          { opacity: 0, y: -50 },
          {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: triggerPosition,
              toggleActions: 'play none none none',
            },
          },
        )
        break
      case 'slideLeft':
        tl = gsap.fromTo(
          element,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: duration,
            delay: delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: triggerPosition,
              toggleActions: 'play none none none',
            },
          },
        )
        break
      case 'slideUp':
        tl = gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: triggerPosition,
              toggleActions: 'play none none none',
            },
          },
        )
        break
      case 'zoomIn':
        tl = gsap.fromTo(
          element,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: duration,
            delay: delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: triggerPosition,
              toggleActions: 'play none none none',
            },
          },
        )
        break
      default:
        tl = gsap.fromTo(
          element,
          { opacity: 0 },
          {
            opacity: 1,
            duration: duration,
            delay: delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: triggerPosition,
              toggleActions: 'play none none none',
            },
          },
        )
    }

    return () => {
      if (tl) tl.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [animation, delay, duration, triggerPosition])

  return (
    <div ref={elementRef} className="scroll-animation">
      {children}
    </div>
  )
}

export default ScrollAnimation
