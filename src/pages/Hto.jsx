import React from 'react'
import LOGO from '../assets/images/page-one/logoHto.png'
import CARD1 from '../assets/images/page-one/card.webp'
import { infoCards, steps } from './constant'
import { motion } from 'framer-motion'
import Button from '../component/ui/Button'

const FORM_URL =
  ' https://api.leadconnectorhq.com/widget/form/JDaHxIsDZwIh47NcOzTG'

const Hto = () => {
  // Function to handle button clicks
  const handleButtonClick = () => {
    window.open(FORM_URL, '_blank')
  }

  const stepVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  }

  const dotVariant = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: 1,
      transition: { delay: i * 0.15 },
    }),
  }

  const lineVariant = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  }

  const lineVariant2 = {
    hidden: { scaleY: -2 },
    visible: {
      scaleY: 1,
      // transition: { duration: 0.8, ease: 'easeInOut' }
    },
  }

  const dotVariant2 = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      // transition: { delay: 0.15 }
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  const scaleFade = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  }

  return (
    <>
      <main className="overflow-hidden">
        <section className="hero min-h-[600px] bg-black px-5 md:px-12 lg:pl-12 lg:pt-12 xl:min-h-[700px] 2xl:min-h-[899px] 2xl:pl-20">
          <header>
            <div className="mx-auto flex max-w-[1800px] flex-col items-start justify-center self-center pt-16 lg:flex-row lg:pt-20">
              <div className="flex flex-col justify-center gap-y-4 pt-4 md:px-16 md:pt-10 lg:w-2/3 lg:px-0 lg:pt-0">
                {/* Heading For small screens < 1024 */}
                <motion.h1
                  className="test-center bg-[linear-gradient(135deg,_rgb(167,132,48)_0%,_rgb(218,189,93)_50%,_rgb(167,132,48)_100%)] bg-clip-text text-center text-3xl font-bold uppercase text-transparent sm:text-4xl lg:text-left lg:text-5xl xl:hidden"
                  style={{ fontFamily: 'Montserrat, serif' }}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* <span className="text-white">Turn</span> 100% Of Your
                  Available Credit{' '}
                  <span className="font-bold uppercase text-white">
                                 Into Cash
                  </span> */}
                  Credit Card Merchant Unlock
                  <span class="ml-1 align-super text-xs">™</span>
                </motion.h1>

                {/* Heading For large screens > 1024 */}
                <motion.h1
                  className="test-center hidden bg-[linear-gradient(135deg,_rgb(167,132,48)_0%,_rgb(218,189,93)_50%,_rgb(167,132,48)_100%)] bg-clip-text text-3xl font-bold uppercase leading-[2rem] text-transparent sm:text-4xl lg:text-left lg:text-5xl lg:leading-[3.3rem] xl:block 2xl:text-6xl"
                  style={{ fontFamily: 'Montserrat, serif' }}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* <span className="text-white">Turn</span>
                  &nbsp;100%&nbsp;Of Your&nbsp;Available Credit&nbsp;
                  <span className="font-bold uppercase text-white">
                    Into&nbsp;Cash
                  </span> */}
                  Credit Card Merchant&nbsp;Unlock
                  <span class="ml-1 align-super text-xl">™</span>
                </motion.h1>

                <motion.p
                  className="text-center text-[12px] uppercase text-white md:text-[14px] lg:text-left 2xl:text-[18px]"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={1}
                  style={{
                    fontFamily: 'Montserrat, serif',
                    fontWeight: 'medium',
                  }}
                >
                  High-Limit Credit Card Processing + Unlimited Credit-to-Cash
                  Features for Entrepreneurs Looking to Scale.
                </motion.p>

                <motion.div
                  className="flex w-full flex-col items-center justify-center gap-2 min-[414px]:flex-row lg:mt-4 lg:justify-start"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={2}
                >
                  <Button
                    onClick={() => {
                      document.getElementById('yt-sec').scrollIntoView({
                        behavior: 'smooth',
                      })
                    }}
                    className="!min-w-[112px]"
                  >
                    Learn More
                  </Button>
                  <Button variant="solid" onClick={handleButtonClick}>
                    Book Appointment Now
                  </Button>
                </motion.div>
              </div>

              <div className="mx-auto mt-8 flex flex-col items-center justify-center lg:mx-0 lg:mt-28 lg:w-1/2">
                <motion.img
                  src={CARD1}
                  alt="Credit Card Liquidation Service"
                  style={{
                    // aspectRatio: '400/580',
                    width: '100%',
                    height: 'auto',
                    maxHeight: '800px',
                    // height: '500px',
                    objectFit: 'contain',
                    objectPosition: 'bottom',
                    display: 'block',
                  }}
                  className="block max-h-[500px] w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[px750] 2xl:max-w-[800px]"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={3}
                />
              </div>
            </div>
          </header>
        </section>

        <section
          id="yt-sec"
          className="vid-sec min-h-[60vh] px-5 pb-10 pt-10 lg:px-20"
        >
          <div className="mx-auto flex max-w-[1800px] flex-col items-center justify-evenly gap-y-10 lg:flex-row">
            <motion.div
              className="flex items-center justify-center lg:w-2/6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                }}
                className="text-center text-lg text-black lg:text-start"
              >
                If you’re generating $50K+ per month through credit card
                payments, you shouldn’t be dealing with payout delays, merchant
                holds, or locked-up capital.
                <br />
                <br />
                With Credit Card Merchant Unlock{' '}
                <span class="align-super text-sm">™ </span>, you get fast,
                secure processing power — and the ability to turn available
                credit into deployable cash on demand.
              </p>
            </motion.div>

            <div className="flex h-full flex-col items-center justify-center">
              <motion.div
                className="flex w-[340px] items-center justify-center"
                variants={scaleFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />

              <iframe
                className="h-[350px] w-[340px] rounded-2xl pb-5 md:rounded-[50px] lg:w-[500px]"
                src="https://www.youtube.com/embed/GZ36JbqF2v4?si=g4nBtrnNITjhT66F"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="card-sec min-h-[80vh] bg-black px-5 pb-10 pt-10 lg:px-20">
          <div className="mx-auto flex max-w-[1800px] flex-col items-start justify-start gap-y-12 lg:gap-y-20">
            <div>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gradient-golden bg-clip-text text-center text-3xl uppercase text-transparent sm:text-4xl lg:text-start lg:text-5xl 2xl:w-10/12 2xl:text-6xl"
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'bold' }}
              >
                <span className="text-white"> What You </span>
                Get with Credit Card Merchant Unlock&nbsp;
                <span class="align-super text-2xl">™</span>
              </motion.h1>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="flex h-[308px] w-full flex-col gap-6 rounded-2xl p-7 min-[360px]:w-[308px]"
                  style={{
                    background: 'linear-gradient(to bottom, #363636, #202020)',
                  }}
                  variants={scaleFade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <img
                    src={card.imgPath}
                    className="size-14"
                    alt={card.title}
                  />
                  {/* <h1
                    className="text-white"
                    style={{ fontFamily: 'Montserrat, serif' }}
                  >
                    {card.title}
                  </h1> */}
                  <p
                    className="text-[#999999]"
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                    }}
                  >
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="step-sec timeline-part min-h-[70vh] px-5 pb-32 pt-10 lg:px-20">
          <div className="mx-auto flex max-w-[1800px] flex-col items-center justify-center gap-20">
            {/* Title */}
            <div className="flex w-full items-start justify-start">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                _rgb
                className="bg-gradient-golden bg-clip-text text-center text-3xl uppercase text-transparent sm:text-4xl lg:text-start lg:text-5xl 2xl:text-6xl"
                style={{ fontFamily: 'Montserrat, serif', fontWeight: '700' }}
              >
                How It Works
              </motion.h1>
            </div>

            {/* Step Descriptions with Timeline */}
            <div className="w-full">
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                {/* Desktop Steps */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex w-full flex-row items-start justify-evenly gap-10"
                >
                  {steps.map((step, i) => (
                    <motion.div
                      key={step.number}
                      className="flex flex-col items-start justify-center text-left md:max-w-[210px]"
                      custom={i}
                      variants={stepVariant}
                    >
                      <h1
                        className="text-6xl text-[#D09A25]"
                        style={{ fontFamily: 'Montserrat, serif' }}
                      >
                        {step.number}
                      </h1>
                      <h1
                        className="font-normal tracking-wider text-black"
                        style={{ fontFamily: 'Montserrat, serif' }}
                      >
                        {step.title}
                      </h1>
                      <h1
                        className="font-normal tracking-wider text-black"
                        style={{ fontFamily: 'Montserrat, serif' }}
                      >
                        {step.subtitle}
                      </h1>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Horizontal Line & Dots */}
                <div className="relative mt-10 flex w-full flex-row items-center justify-between px-10">
                  <motion.div
                    className="absolute left-[40px] right-[40px] top-1/2 z-0 h-0.5 origin-left bg-[#D09A25]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={lineVariant}
                  />
                  {steps.map((_, i) => (
                    <motion.div
                      key={i}
                      className="z-10 h-4 w-4 rounded-full bg-[#D09A25]"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i}
                      variants={dotVariant}
                    />
                  ))}
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="flex lg:hidden">
                {/* Timeline Dots and Lines */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mr-6 flex flex-col items-center pt-2"
                >
                  {steps.map((_, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <motion.div
                        className="z-10 h-4 w-4 rounded-full bg-[#D09A25]"
                        custom={i}
                        variants={dotVariant}
                      />
                      {i < steps.length - 1 && (
                        <motion.div
                          className="my-4 h-16 w-0.5 origin-top bg-[#D09A25]"
                          variants={lineVariant}
                        />
                      )}
                    </div>
                  ))}
                </motion.div>

                {/* Step Texts */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col gap-8"
                >
                  {steps.map((step, i) => (
                    <motion.div
                      key={step.number}
                      className="flex min-h-[80px] flex-col items-start justify-center text-left"
                      custom={i}
                      variants={stepVariant}
                    >
                      <h1
                        className="text-4xl text-[#D09A25]"
                        style={{ fontFamily: 'Montserrat, serif' }}
                      >
                        {step.number}
                      </h1>
                      <h1
                        className="font-normal tracking-wider text-black"
                        style={{ fontFamily: 'Montserrat, serif' }}
                      >
                        {step.title}
                      </h1>
                      <h1
                        className="font-normal tracking-wider text-black"
                        style={{ fontFamily: 'Montserrat, serif' }}
                      >
                        {step.subtitle}
                      </h1>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="who-sec step-sec min-h-[60vh] bg-black px-5 pb-32 pt-10 lg:px-20">
          <div className="mx-auto flex max-w-[1800px] flex-col items-center justify-center gap-20 xl:px-14">
            {/* Title */}
            <div className="flex w-full items-center justify-center lg:items-start lg:justify-start">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="uppercaes sm:texts-4xl bg-gradient-golden bg-clip-text text-center text-3xl text-transparent lg:text-start lg:text-5xl 2xl:w-10/12 2xl:text-6xl"
                style={{ fontFamily: 'Montserrat, serif', fontWeight: '700' }}
              >
                Use funds immediately — no questions asked
              </motion.h1>
            </div>

            <div className="flex w-full flex-col items-start justify-start gap-10 lg:flex-row lg:items-center lg:justify-center">
              <div className="flex flex-row-reverse items-center justify-center gap-10 lg:flex-row">
                <div>
                  <motion.h1
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-xl text-white 2xl:text-2xl"
                    style={{ fontFamily: 'Montserrat, serif' }}
                  >
                    Stripe and PayPal throttle payouts — we unlock them
                  </motion.h1>
                </div>

                <div>
                  <div className="flex flex-col-reverse items-center justify-center">
                    <motion.div
                      variants={dotVariant2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{
                        delay: 0.2,
                        duration: 0.4,
                        ease: 'easeInOut',
                      }}
                      viewport={{ once: true }}
                      className="size-7 rounded-full border-2 border-[#D09A25]"
                    ></motion.div>

                    <motion.div
                      variants={lineVariant2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.3, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="h-20 border border-[#D09A25]"
                    ></motion.div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row-reverse items-center justify-center gap-10 lg:flex-row">
                <div>
                  <motion.h1
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-xl text-white 2xl:text-2xl"
                    style={{ fontFamily: 'Montserrat, serif' }}
                  >
                    Banks limit credit access — we help you turn your limits
                    into liquidity
                  </motion.h1>
                </div>

                <div>
                  <div className="flex flex-col items-center justify-center">
                    <motion.div
                      variants={dotVariant2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{
                        delay: 0.4,
                        duration: 0.6,
                        ease: 'easeInOut',
                      }}
                      viewport={{ once: true }}
                      className="size-7 rounded-full border-2 border-[#D09A25]"
                    ></motion.div>

                    <motion.div
                      variants={lineVariant2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.4, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="h-20 border border-[#D09A25]"
                    ></motion.div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row-reverse items-center justify-center gap-10 lg:flex-row">
                <div>
                  <motion.h1
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-xl text-white 2xl:text-2xl"
                    style={{ fontFamily: 'Montserrat, serif' }}
                  >
                    Processors freeze funds — we accelerate them
                  </motion.h1>
                </div>

                <div>
                  <div className="flex flex-col-reverse items-center justify-center">
                    <motion.div
                      variants={dotVariant2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{
                        delay: 0.6,
                        duration: 0.6,
                        ease: 'easeInOut',
                      }}
                      viewport={{ once: true }}
                      className="size-7 rounded-full border-2 border-[#D09A25]"
                    ></motion.div>

                    <motion.div
                      variants={lineVariant2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.5, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="h-20 border border-[#D09A25]"
                    ></motion.div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row-reverse items-center justify-center gap-10 lg:hidden lg:flex-row">
                <div>
                  <motion.h1
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-xl text-white 2xl:text-2xl"
                    style={{ fontFamily: 'Montserrat, serif' }}
                  >
                    You’re generating real revenue — you deserve tools that
                    match
                  </motion.h1>
                </div>

                <div>
                  <div className="flex flex-col items-center justify-center">
                    <motion.div
                      variants={dotVariant2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{
                        delay: 0.8,
                        duration: 0.25,
                        ease: 'easeInOut',
                      }}
                      viewport={{ once: true }}
                      className="size-7 rounded-full border-2 border-[#D09A25]"
                    ></motion.div>

                    <motion.div
                      variants={lineVariant2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.6, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="h-20 border border-[#D09A25]"
                    ></motion.div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <motion.h1
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="text-xl text-white 2xl:text-2xl"
                  style={{ fontFamily: 'Montserrat, serif' }}
                >
                  You’re generating real revenue — you deserve tools that match
                </motion.h1>
              </div>
            </div>
          </div>
        </section>

        <section className="last-sec flex flex-col items-center justify-center bg-white px-5 pb-32 pt-10 lg:min-h-[10vh] lg:px-20">
          <div className="mx-auto flex max-w-[1800px] flex-col items-center justify-center gap-8">
            <motion.h1
              className="uppercaes bg-gradient-golden bg-clip-text text-4xl text-transparent lg:text-6xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ fontFamily: 'Montserrat, serif', fontWeight: '700' }}
            >
              Apply Now — Limited Capacity Weekly
            </motion.h1>

            <motion.p
              className="text-center text-lg text-black"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
            >
              If you’re processing $50K+ and still dealing with caps, holds, or
              stuck credit — you’re leaving money on the table.
              <br />
              <br />
              Credit Card Merchant Unlock
              <span class="ml-1 align-super text-xl">™</span> is your edge.
              Don’t miss it.
            </motion.p>

            <motion.div
              className="flex w-full items-center justify-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <Button size="large">
                Apply for Credit Card Merchant Unlock
                {/* <span class="ml-[2px] align-super text-sm">™ </span>&ensp;Now */}
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Hto
