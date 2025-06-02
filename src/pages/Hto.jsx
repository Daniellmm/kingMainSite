import React from 'react'
import LOGO from '../assets/images/page-one/logoHto.png'
import CARD1 from '../assets/images/page-one/card.png'
import { infoCards, steps } from './constant'
import { motion } from 'framer-motion';


const Hto = () => {


  const stepVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 }
    })
  };

  const dotVariant = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: 1,
      transition: { delay: i * 0.15 }
    })
  };

  const lineVariant = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: 'easeInOut' }
    }
  };

  const lineVariant2 = {
    hidden: { scaleY: -2 },
    visible: {
      scaleY: 1,
      // transition: { duration: 0.8, ease: 'easeInOut' }
    }
  };

  const dotVariant2 = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      // transition: { delay: 0.15 }
    }
  };

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
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

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
  };

  return (
    <>
      <main className='overflow-hidden'>

        <section className='lg:px-20 px-5 hero min-h-[80vh] lg:min-h-[100vh]'>
          <header>
            {/* <div>
              <nav>
                <img src={LOGO} className='py-5 lg:size-auto h-20' alt="" />
              </nav>
            </div> */}

            <div className='flex flex-col lg:flex-row pt-16 justify-center items-center'>
              <div className='lg:w-2/3 gap-y-4 pt-20 lg:pt-0 flex flex-col items-center justify-center'>
                <motion.h1
                  className='lg:text-8xl text-5xl text-center uppercase lg:text-start text-[#D09A25]'
                  style={{ fontFamily: 'Minion Pro, serif' }}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Turn Your Available Credit Into Cash...
                </motion.h1>
                <motion.p
                  className='text-[#999999] text-lg uppercase text-center lg:text-start'
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={1}
                  style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                >
                  Turn 100% of Your Credit Card Limits into cash deposited into your bank account Without the Stress
                </motion.p>


                <motion.div
                  className='flex lg:justify-start justify-center items-center lg:items-start w-full'
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={2}
                >
                  <button
                    style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-[#a47e3b] via-[#c1a875] to-[#e1c78a] text-black font-semibold shadow-inner hover:shadow-lg transition duration-300">
                    Book Appointment Now
                  </button>
                </motion.div>
              </div>


              <div className='lg:w-4/6 flex flex-col justify-end items-end'>
                <motion.img
                  src={CARD1}
                  alt=""
                  className='w-auto lg:h-[580px] pt-16 lg:pt-0'
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

        <section className='lg:px-20 px-5 pt-20 pb-10 vid-sec min-h-[60vh]'>
          <div className='flex flex-col gap-y-10 lg:flex-row justify-evenly items-center'>

            <motion.div
              className='lg:w-2/6 flex justify-center items-center'
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                className='text-[#999999] text-center lg:text-start text-lg'>
                Need fast access to cash? Our Credit Card Liquidation service helps you convert your entire credit limit
                into spendable cash—without losing the rewards and points you’ve earned.
                <br /><br />
                This is a 100% done-for-you service designed for entrepreneurs, business owners, and high performers
                who want cash flow without friction.
              </p>
            </motion.div>

            <div className='flex flex-col justify-center items-center  h-full'>
              <motion.div
                className=' w-[340px] flex justify-center items-center '
                variants={scaleFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />

              <iframe className='lg:w-[500px] w-[340px] h-[350px] pb-5 rounded-2xl md:rounded-[50px]'
                src="https://www.youtube.com/embed/GZ36JbqF2v4?si=g4nBtrnNITjhT66F" title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

          </div>
        </section>

        <section className='lg:px-20 px-5 pt-20 card-sec pb-10 min-h-[80vh]'>
          <div className='flex flex-col justify-start items-start gap-y-20'>
            <div>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='text-[#D09A25] text-center lg:text-start text-4xl lg:text-6xl'
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Why Choose Our Credit Card Liquidation Service?
              </motion.h1>
            </div>

            <div className='flex gap-10 flex-col lg:flex-row justify-center items-center w-full'>
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className='h-[250px] w-[250px] gap-2 rounded-2xl p-7 flex flex-col'
                  style={{
                    background: 'linear-gradient(to bottom, #363636, #202020)',
                  }}
                  variants={scaleFade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <img src={card.imgPath} className='size-14' alt={card.title} />
                  <h1 className='text-white' style={{ fontFamily: 'Minion Pro, serif' }}>{card.title}</h1>
                  <p className='text-[#999999]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>{card.desc}</p>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        <section className='lg:px-20 px-5 pt-20 step-sec pb-32 min-h-[70vh] timeline-part'>
          <div className='flex flex-col justify-center items-center gap-20'>
            {/* Title */}
            <div className='flex justify-start items-start w-full'>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='text-[#D09A25] text-center lg:text-start text-4xl lg:text-6xl'
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                How It Works (In 5 Simple Steps)
              </motion.h1>
            </div>

            {/* Step Descriptions with Timeline */}
            <div className='w-full'>
              {/* Desktop Layout */}
              <div className='hidden lg:block'>
                {/* Desktop Steps */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className='flex flex-row justify-evenly w-full items-center gap-10'
                >
                  {steps.map((step, i) => (
                    <motion.div
                      key={step.number}
                      className='flex flex-col justify-center items-start text-left'
                      custom={i}
                      variants={stepVariant}
                    >
                      <h1 className='text-[#D09A25] text-6xl' style={{ fontFamily: 'Minion Pro, serif' }}>{step.number}</h1>
                      <h1 className='text-white font-light tracking-wider' style={{ fontFamily: 'Minion Pro, serif' }}>{step.title}</h1>
                      <h1 className='text-white font-light tracking-wider' style={{ fontFamily: 'Minion Pro, serif' }}>{step.subtitle}</h1>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Horizontal Line & Dots */}
                <div className='relative w-full flex flex-row items-center justify-between px-10 mt-10'>
                  <motion.div
                    className='absolute top-1/2 left-[40px] right-[40px] h-0.5 bg-[#D09A25] z-0 origin-left'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={lineVariant}
                  />
                  {steps.map((_, i) => (
                    <motion.div
                      key={i}
                      className='w-4 h-4 bg-[#D09A25] rounded-full z-10'
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
              <div className='lg:hidden flex'>
                {/* Timeline Dots and Lines */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className='flex flex-col items-center mr-6 pt-2'
                >
                  {steps.map((_, i) => (
                    <div key={i} className='flex flex-col items-center'>
                      <motion.div
                        className='w-4 h-4 bg-[#D09A25] rounded-full z-10'
                        custom={i}
                        variants={dotVariant}
                      />
                      {i < steps.length - 1 && (
                        <motion.div
                          className='w-0.5 h-16 bg-[#D09A25] my-4 origin-top'
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
                  className='flex flex-col gap-8'
                >
                  {steps.map((step, i) => (
                    <motion.div
                      key={step.number}
                      className='flex flex-col justify-center items-start text-left min-h-[80px]'
                      custom={i}
                      variants={stepVariant}
                    >
                      <h1 className='text-[#D09A25] text-4xl' style={{ fontFamily: 'Minion Pro, serif' }}>{step.number}</h1>
                      <h1 className='text-white font-light tracking-wider' style={{ fontFamily: 'Minion Pro, serif' }}>{step.title}</h1>
                      <h1 className='text-white font-light tracking-wider' style={{ fontFamily: 'Minion Pro, serif' }}>{step.subtitle}</h1>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        <section className='lg:px-20 px-5 pt-20 who-sec step-sec pb-32 min-h-[60vh]'>
          <div className='flex flex-col lg:px-14 justify-center items-center gap-20'>
            {/* Title */}
            <div className='flex lg:justify-start lg:items-start justify-center items-center w-full'>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='text-[#D09A25] text-center lg:text-start text-4xl lg:text-6xl'
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Who Is This For?
              </motion.h1>
            </div>

            <div className='flex flex-col lg:flex-row justify-start items-start w-full lg:justify-center lg:items-center gap-10'>

              <div className='flex flex-row-reverse lg:flex-row justify-center items-center gap-10'>
                <div>
                  <motion.h1
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className='text-white'
                    style={{ fontFamily: 'Minion Pro, serif' }}>
                    Business owners looking to scale
                  </motion.h1>
                </div>

                <div>
                  <div className='flex flex-col-reverse justify-center items-center'>
                    <motion.div
                      variants={dotVariant2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.2, duration: 0.4, ease: 'easeInOut' }}
                      viewport={{ once: true }}
                      className='border-[#D09A25] rounded-full size-7 border-2'>
                    </motion.div>

                    <motion.div
                      variants={lineVariant2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.3, duration: 0.3, }}
                      viewport={{ once: true }}
                      className='border-[#D09A25] h-20 border'>
                    </motion.div>
                  </div>
                </div>
              </div>


              <div className='flex flex-row-reverse lg:flex-row justify-center items-center gap-10'>
                <div>
                  <motion.h1
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className='text-white'
                    style={{ fontFamily: 'Minion Pro, serif' }}>
                    Entrepreneurs needing fast capital
                  </motion.h1>
                </div>

                <div>
                  <div className='flex flex-col justify-center items-center'>
                    <motion.div
                      variants={dotVariant2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
                      viewport={{ once: true }}
                      className='border-[#D09A25] rounded-full size-7 border-2'>
                    </motion.div>

                    <motion.div
                      variants={lineVariant2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.4, duration: 0.4, }}
                      viewport={{ once: true }}
                      className='border-[#D09A25] h-20 border'>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className='flex flex-row-reverse lg:flex-row justify-center items-center gap-10'>
                <div>
                  <motion.h1
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className='text-white'
                    style={{ fontFamily: 'Minion Pro, serif' }}>
                    Individuals who want to leverage credit smartly
                  </motion.h1>
                </div>

                <div>
                  <div className='flex flex-col-reverse justify-center items-center'>
                    <motion.div
                      variants={dotVariant2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
                      viewport={{ once: true }}
                      className='border-[#D09A25] rounded-full size-7 border-2'>
                    </motion.div>

                    <motion.div
                      variants={lineVariant2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.5, duration: 0.5, }}
                      viewport={{ once: true }}
                      className='border-[#D09A25] h-20 border'>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className='flex lg:hidden flex-row-reverse lg:flex-row justify-center items-center gap-10'>
                <div>
                  <motion.h1
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className='text-white'
                    style={{ fontFamily: 'Minion Pro, serif' }}>
                    Anyone seeking extra liquidity without disrupting their credit usage
                  </motion.h1>
                </div>

                <div>
                  <div className='flex flex-col justify-center items-center'>
                    <motion.div
                      variants={dotVariant2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.8, duration: 0.25, ease: 'easeInOut' }}
                      viewport={{ once: true }}
                      className='border-[#D09A25] rounded-full size-7 border-2'>
                    </motion.div>

                    <motion.div
                      variants={lineVariant2}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: 0.6, duration: 0.6, }}
                      viewport={{ once: true }}
                      className='border-[#D09A25] h-20 border'>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className='hidden lg:block'>
                <motion.h1
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className='text-white'
                  style={{ fontFamily: 'Minion Pro, serif' }}>
                  Anyone seeking extra liquidity <br /> without disrupting their credit usage
                </motion.h1>
              </div>
            </div>


          </div>
        </section>

        <section className='lg:px-20 px-5 pt-20  last-sec flex flex-col justify-center items-center pb-32 lg:min-h-[100vh]'>
          <div className='flex flex-col justify-center items-center gap-8'>
            <motion.h1
              className='text-[#D09A25] text-4xl lg:text-6xl'
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              Get Started Today
            </motion.h1>

            <motion.p
              className='text-[#999999] text-lg text-center'
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
              className='flex justify-center items-center w-full'
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <button
                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-[#a47e3b] via-[#c1a875] to-[#e1c78a] text-black font-semibold shadow-inner hover:shadow-lg transition duration-300">
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