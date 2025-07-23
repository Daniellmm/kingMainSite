import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  CheckCircle,
  TrendingUp,
  Shield,
  DollarSign,
  Users,
  Target,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
  const heroRef = useRef(null)
  const declarationRef = useRef(null)
  const statsRef = useRef(null)
  const servicesRef = useRef(null)
  const missionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        heroRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' },
      )

      // Declaration section animation
      gsap.fromTo(
        declarationRef.current.children,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: declarationRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      )

      // Stats animation
      gsap.fromTo(
        statsRef.current.children,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      )

      // Services animation
      gsap.fromTo(
        servicesRef.current.querySelectorAll('.service-item'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      )

      // Mission animation
      gsap.fromTo(
        missionRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: missionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      )

      // Floating animation for icons
      gsap.to('.floating-icon', {
        y: -10,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      })
    })

    return () => ctx.revert()
  }, [])

  const services = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Access to Capital',
      description:
        'Funding solutions to market, hire, and expand your business.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Client Financing Solutions',
      description:
        'Offer flexible financing options so your customers can confidently purchase high-ticket services priced at $5,000–$100,000+.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Wealth Strategy & Insurance Reviews',
      description:
        'Work with trusted partners to develop plans that protect your growing income and set you up for long-term success.',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Advanced Wealth-Building Tools',
      description:
        'Gain insight into the investment and cash-flow strategies that high-net-worth individuals use to build and grow wealth.',
    },
  ]

  const actionItems = [
    { title: 'Get Funding For Your Business', link: '/' },
    {
      title: 'Get Financing For Your Customers to Pay You',
      link: '/credit card liquidation',
    },
    { title: 'Start Your Own Funding Business', link: '/funding' },
    { title: 'Get a Free Financial Review', link: '/insurance' },
    { title: 'Learn How to Trade', link: '/laserfund' },
    { title: 'Attend the Become Your Own Bank Summit', link: '/ggei' },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-20 lg:px-8">
        <div className="relative mx-auto max-w-6xl text-center" ref={heroRef}>
          <h1
            className="mb-6 bg-gradient-to-r from-[#E7A647] to-[#855B1F] bg-clip-text pt-10 text-4xl font-bold text-transparent lg:text-8xl"
            style={{ fontFamily: 'Minion Pro, serif' }}
          >
            About High Ticket Offer Financing
          </h1>
        </div>
      </section>

      {/* Declaration Section */}
      <section className="px-6 pb-6 pt-2 text-center lg:px-8 lg:text-start">
        <div
          style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
          className="mx-auto max-w-4xl"
          ref={declarationRef}
        >
          <div className="rounded-2xl border border-black/75 bg-neutral-900 p-3 lg:p-12">
            <div>
              {/* <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#E7A647]" style={{ fontFamily: 'Minion Pro, serif' }}>
                                About High Ticket Offer Financing
                            </h2> */}
            </div>
            <p className="mb-6 text-xl leading-relaxed text-white lg:text-2xl">
              We believe that entrepreneurship is not a gamble—it's a strategic
              path to freedom, wealth, and legacy.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              But the odds? They've been stacked against you.
            </p>
            <div className="space-y-4 text-gray-300">
              <p>You're not failing because you lack drive.</p>
              <p>You're not struggling because you don't work hard.</p>
              <p className="text-xl font-semibold text-white">
                You're falling short because the system never gave you the full
                blueprint.
              </p>
            </div>
            <div className="mt-8 rounded-xl bg-black/30 p-6">
              <p className="text-lg italic text-gray-200">
                "The financial playbook that built America's wealthiest families
                was never designed for mass distribution."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-black px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-12 text-center text-3xl font-bold text-[#E7A647] lg:text-4xl"
            style={{ fontFamily: 'Minion Pro, serif' }}
          >
            The Truth About Entrepreneurship in America
          </h2>
          <div className="mb-12 grid gap-8 md:grid-cols-3" ref={statsRef}>
            <div className="rounded-2xl border border-gray-600 bg-neutral-900 p-8 text-center">
              <div
                className="mb-4 text-4xl font-bold text-[#E7A647] lg:text-5xl"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                30M+
              </div>
              <p
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                className="text-gray-300"
              >
                Entrepreneurs in the U.S.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-600 bg-neutral-900 p-8 text-center">
              <div
                className="mb-4 text-4xl font-bold text-[#E7A647] lg:text-5xl"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                98.1%
              </div>
              <p
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                className="text-gray-300"
              >
                Earn less than $1M per year
              </p>
            </div>
            <div className="rounded-2xl border border-slate-600 bg-neutral-900 p-8 text-center">
              <div
                className="mb-4 text-4xl font-bold text-[#E7A647] lg:text-5xl"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                86%
              </div>
              <p
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                className="text-gray-300"
              >
                Earn under $100K annually
              </p>
            </div>
          </div>
          <div
            style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-6 text-xl text-gray-300">
              These numbers reveal a deeper issue: hard work isn't the
              problem—access and education are.
            </p>
            <p className="text-lg italic text-gray-400">
              "Imagine asking a chef for your favorite recipe and receiving all
              but one key ingredient. Even with the best effort, the final
              result will never quite come out right."
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16 lg:px-8" ref={servicesRef}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2
              className="mb-6 text-3xl font-bold text-[#E7A647] lg:text-4xl"
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              How We Help You Grow
            </h2>
            <p
              style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
              className="mx-auto max-w-3xl text-xl text-gray-400"
            >
              At High Ticket Offer Financing, we don't just provide capital—we
              deliver complete entrepreneurial support.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-item rounded-2xl border border-slate-600 bg-neutral-900 p-8 transition-all duration-300 hover:border-[#E7A647]"
              >
                <div className="floating-icon mb-6 text-[#E7A647]">
                  {service.icon}
                </div>
                <div className="mb-4 flex items-start">
                  <CheckCircle className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-white" />
                  <h3
                    className="text-xl font-semibold text-white"
                    style={{ fontFamily: 'Minion Pro, serif' }}
                  >
                    {service.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: 'Montserrat, serif',
                    fontWeight: 'medium',
                  }}
                  className="leading-relaxed text-gray-300"
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white px-6 py-16 lg:px-8" ref={missionRef}>
        <div className="mx-auto max-w-4xl text-center">
          <Target className="floating-icon mx-auto mb-8 h-16 w-16 text-[#E7A647]" />
          <h2
            className="mb-8 text-3xl font-bold text-black lg:text-4xl"
            style={{ fontFamily: 'Minion Pro, serif' }}
          >
            Our Mission
          </h2>
          <p
            style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
            className="mb-8 text-xl leading-relaxed text-black lg:text-2xl"
          >
            To create more millionaire entrepreneurs by combining capital access
            with world-class financial literacy and strategic support.
          </p>
          <div
            style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
            className="rounded-2xl border border-gray-600 bg-neutral-900 p-8"
          >
            <p className="mb-6 text-lg text-gray-300">
              If legendary investors like Warren Buffett can build generational
              wealth with a solid gameplan, we believe everyday
              entrepreneurs—when given the right tools—can achieve consistent
              six and seven-figure incomes without unnecessary trial and error.
            </p>
            <p className="text-xl font-semibold text-white">
              With proper guidance, funding, and financial education, reaching
              your full potential isn't just possible—it's probable.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="mb-8 text-3xl font-bold text-[#E7A647] lg:text-4xl"
            style={{ fontFamily: 'Minion Pro, serif' }}
          >
            Ready to Scale?
          </h2>
          <p
            className="mb-12 text-lg text-gray-400"
            style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
          >
            Below, you'll find a list of services designed for serious
            entrepreneurs ready to take their business to the next level:
          </p>
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            {actionItems.map((item, index) => (
              <a
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                key={index}
                href={item.link}
                className="text-decoration-none group block cursor-pointer rounded-xl border border-gray-600 bg-neutral-900 p-6 transition-all duration-300 hover:border-gray-400"
              >
                <p className="font-medium text-white transition-colors group-hover:text-gray-300">
                  {item.title}
                </p>
              </a>
            ))}
          </div>
          <div
            className="space-y-6"
            style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
          >
            <p className="text-xl text-gray-300">
              No matter where you are in your journey, if you're committed to
              growth, we're committed to helping you get there.
            </p>
            <p className="text-lg text-gray-400">
              We're excited to be part of your success story.
            </p>
            <p className="text-2xl font-bold text-[#E7A647]">
              Let's grow—together.
            </p>
          </div>
        </div>
      </section>

      {/* Revolution Statement */}
      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-gray-600 bg-neutral-900 p-8 lg:p-12">
            <h3
              className="mb-6 text-2xl font-bold text-[#E7A647] lg:text-3xl"
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              This isn't a program. It's not just a service.
            </h3>
            <p className="mb-8 text-xl font-semibold text-white lg:text-2xl">
              It's a revolution in how entrepreneurship is funded, grown, and
              sustained.
            </p>
            <div
              style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
              className="space-y-4 text-lg text-gray-300"
            >
              <p>If you're serious about building real wealth,</p>
              <p>if you're done playing small,</p>
              <p>
                if you believe your vision deserves to be backed by more than
                just belief—
              </p>
            </div>
            <p
              className="mt-8 text-2xl font-bold text-[#E7A647]"
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              Welcome to High Ticket Offer Financing.
            </p>
            <div
              style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
              className="mt-8 space-y-2 text-lg text-gray-300"
            >
              <p>Let's take everything to the next level.</p>
              <p>Let's build something unshakeable.</p>
              <p className="text-xl font-semibold text-white">
                Let's make millionaire entrepreneurs the new norm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="px-6 py-12 text-center lg:px-8">
        <div
          className="mx-auto max-w-2xl"
          style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
        >
          <p className="mb-4 text-xl text-gray-300">
            The world doesn't need more employees. It needs more empowered
            entrepreneurs.
          </p>
          <p className="mb-2 text-lg text-gray-400">
            We're here for all of them.
          </p>
          <p
            className="text-xl font-semibold text-[#E7A647]"
            style={{ fontFamily: 'Minion Pro, serif' }}
          >
            We're here for you.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
