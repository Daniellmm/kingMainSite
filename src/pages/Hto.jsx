import React from 'react'
import LOGO from '../assets/images/page-one/logoHto.png'
import CARD1 from '../assets/images/page-one/card.png'
import { infoCards, steps } from './constant'
import { motion } from 'framer-motion'

const FORM_URL =
  'https://api.leadconnectorhq.com/widget/bookings/liquidation-htof'

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
        <section className="hero min-h-[80vh] bg-black px-5 lg:min-h-[100vh] lg:px-5">
          <header>
            {/* <div>
              <nav>
                <img src={LOGO} className='py-5 lg:size-auto h-20' alt="" />
              </nav>
            </div> */}

            <div className="flex flex-col items-center justify-center pt-16">
              <div className="flex flex-col items-center justify-center gap-y-4 pt-10 lg:w-2/3 lg:pt-0">
                <motion.h1
                  className="bg-[linear-gradient(135deg,_rgb(167,132,48)_0%,_rgb(218,189,93)_50%,_rgb(167,132,48)_100%)] bg-clip-text text-center text-5xl font-bold uppercase text-transparent lg:pt-10 lg:text-7xl"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Turn Your Available Credit{' '}
                  <span className="bg-[linear-gradient(135deg,_rgb(167,132,48)_0%,_rgb(218,189,93)_50%,_rgb(167,132,48)_100%)] bg-clip-text text-center text-5xl font-bold uppercase lg:pt-10 lg:text-7xl">
                    Into Cash...
                  </span>
                </motion.h1>
                <motion.p
                  className="text-center text-lg uppercase text-[#999999]"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={1}
                  style={{
                    fontFamily: 'Minion Pro, serif',
                    fontWeight: 'medium',
                  }}
                >
                  Turn 100% of Your Credit Card Limits into cash deposited into
                  your bank account Without the Stress
                </motion.p>

                <motion.div
                  className="flex w-full items-center justify-center gap-2"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={2}
                >
                  <button
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                      background:
                        'linear-gradient(135deg, rgb(167, 132, 48) 0%, rgb(218, 189, 93) 50%, rgb(167, 132, 48) 100%)',
                    }}
                    className="rounded-full bg-gradient-to-r from-[#a47e3b] via-[#c1a875] to-[#e1c78a] px-6 py-3 text-sm font-semibold text-black shadow-inner transition duration-300 hover:shadow-lg"
                    onClick={() => {
                      document.getElementById('yt-sec').scrollIntoView({
                        behavior: 'smooth',
                      })
                    }}
                  >
                    Learn More
                  </button>

                  <button
                    onClick={handleButtonClick}
                    style={{
                      fontFamily: 'Montserrat, serif',
                      fontWeight: 'medium',
                      // background:
                      //   'linear-gradient(135deg, rgb(167, 132, 48) 0%, rgb(218, 189, 93) 50%, rgb(167, 132, 48) 100%)',
                    }}
                    className="bg-emerald rounded-full px-3 py-3 text-sm font-semibold text-black shadow-inner transition duration-300 hover:shadow-lg lg:px-6"
                  >
                    Book Appointment Now
                  </button>
                </motion.div>
              </div>

              <div className="flex flex-col items-center justify-center lg:w-4/6">
                <motion.img
                  src={CARD1}
                  alt=""
                  className="w-auto pt-16 lg:h-[580px] lg:pt-0"
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
          className="vid-sec min-h-[60vh] px-5 pb-10 pt-20 lg:px-20"
        >
          <div className="flex flex-col items-center justify-evenly gap-y-10 lg:flex-row">
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
                Need fast access to cash? Our Credit Card Liquidation service
                helps you convert your entire credit limit into spendable
                cash—without losing the rewards and points you’ve earned.
                <br />
                <br />
                This is a 100% done-for-you service designed for entrepreneurs,
                business owners, and high performers who want cash flow without
                friction.
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

        <section className="card-sec min-h-[80vh] bg-black px-5 pb-10 pt-20 lg:px-20">
          <div className="flex flex-col items-start justify-start gap-y-20">
            <div>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[linear-gradient(135deg,_rgb(229,194,108)_0%,_rgb(218,189,93)_50%,_rgb(201,168,87)_100%)] bg-clip-text text-center text-4xl text-transparent lg:text-start lg:text-6xl"
                style={{ fontFamily: 'Minion Pro, serif', fontWeight: 'bold' }}
              >
                Why Choose Our Credit Card Liquidation Service?
              </motion.h1>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="flex h-[250px] w-[250px] flex-col gap-2 rounded-2xl p-7"
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
                  <h1
                    className="text-white"
                    style={{ fontFamily: 'Minion Pro, serif' }}
                  >
                    {card.title}
                  </h1>
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

        <section className="step-sec timeline-part min-h-[70vh] px-5 pb-32 pt-20 lg:px-20">
          <div className="flex flex-col items-center justify-center gap-20">
            {/* Title */}
            <div className="flex w-full items-start justify-start">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[linear-gradient(135deg,_rgb(229,194,108)_0%,_rgb(218,189,93)_50%,_rgb(201,168,87)_100%)] bg-clip-text text-center text-4xl text-transparent lg:text-start lg:text-6xl"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                How It Works (In 5 Simple Steps)
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
                  className="flex w-full flex-row items-center justify-evenly gap-10"
                >
                  {steps.map((step, i) => (
                    <motion.div
                      key={step.number}
                      className="flex flex-col items-start justify-center text-left"
                      custom={i}
                      variants={stepVariant}
                    >
                      <h1
                        className="text-6xl text-[#D09A25]"
                        style={{ fontFamily: 'Minion Pro, serif' }}
                      >
                        {step.number}
                      </h1>
                      <h1
                        className="font-light tracking-wider text-black"
                        style={{ fontFamily: 'Minion Pro, serif' }}
                      >
                        {step.title}
                      </h1>
                      <h1
                        className="font-light tracking-wider text-black"
                        style={{ fontFamily: 'Minion Pro, serif' }}
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
                        style={{ fontFamily: 'Minion Pro, serif' }}
                      >
                        {step.number}
                      </h1>
                      <h1
                        className="font-light tracking-wider text-black"
                        style={{ fontFamily: 'Minion Pro, serif' }}
                      >
                        {step.title}
                      </h1>
                      <h1
                        className="font-light tracking-wider text-black"
                        style={{ fontFamily: 'Minion Pro, serif' }}
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

        <section className="who-sec step-sec min-h-[60vh] bg-black px-5 pb-32 pt-20 lg:px-20">
          <div className="flex flex-col items-center justify-center gap-20 lg:px-14">
            {/* Title */}
            <div className="flex w-full items-center justify-center lg:items-start lg:justify-start">
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[linear-gradient(135deg,_rgb(229,194,108)_0%,_rgb(218,189,93)_50%,_rgb(201,168,87)_100%)] bg-clip-text text-center text-4xl text-transparent lg:text-start lg:text-6xl"
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Who Is This For?
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
                    className="text-2xl text-white"
                    style={{ fontFamily: 'Minion Pro, serif' }}
                  >
                    Business owners looking to scale
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
                    className="text-2xl text-white"
                    style={{ fontFamily: 'Minion Pro, serif' }}
                  >
                    Entrepreneurs needing fast capital
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
                    className="text-2xl text-white"
                    style={{ fontFamily: 'Minion Pro, serif' }}
                  >
                    Individuals who want to leverage credit smartly
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
                    className="text-2xl text-white"
                    style={{ fontFamily: 'Minion Pro, serif' }}
                  >
                    Anyone seeking extra liquidity without disrupting their
                    credit usage
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
                  className="text-2xl text-white"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                >
                  Anyone seeking extra liquidity <br /> without disrupting their
                  credit usage
                </motion.h1>
              </div>
            </div>
          </div>
        </section>

        <section className="last-sec flex flex-col items-center justify-center bg-black px-5 pb-32 pt-20 lg:min-h-[10vh] lg:px-20">
          <div className="flex flex-col items-center justify-center gap-8">
            <motion.h1
              className="bg-[linear-gradient(135deg,_rgb(229,194,108)_0%,_rgb(218,189,93)_50%,_rgb(201,168,87)_100%)] bg-clip-text text-4xl text-transparent lg:text-6xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              Get Started Today
            </motion.h1>

            <motion.p
              className="text-center text-lg text-[#999999]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
            >
              Don’t let your available credit sit idle...
            </motion.p>

            <motion.div
              className="flex w-full items-center justify-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <button
                onClick={handleButtonClick}
                style={{
                  fontFamily: 'Montserrat, serif',
                  fontWeight: 'medium',
                  background:
                    'linear-gradient(135deg, rgb(167, 132, 48) 0%, rgb(218, 189, 93) 50%, rgb(167, 132, 48) 100%)',
                }}
                className="bg-emerald rounded-full px-6 py-2 font-semibold text-black shadow-inner transition duration-300 hover:shadow-lg"
              >
                Book Appointment Now
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Hto
