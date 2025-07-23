import CHECK from '../assets/images/check.png'
import ScrollAnimation from '../component/ScrollAnimation'
import CARD from '../assets/images/card.jpg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AdmissionSection = ({ handleButtonClick }) => {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 md:px-10">
      <div className="flex flex-col items-center justify-center">
        <ScrollAnimation animation="zoomIn">
          <div className="mb-12 text-center">
            <h1
              className="mb-4 text-4xl font-bold text-[#E7A647] lg:text-[48px]"
              style={{ fontFamily: 'Minion Pro, serif' }}
            >
              What You Will Get
            </h1>
            <p
              className="text-lg text-black md:text-xl"
              style={{ fontFamily: 'Montserrat, serif' }}
            >
              At the become your bank summit you get these things
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid w-full max-w-5xl gap-8 md:grid-cols-2">
          <ScrollAnimation animation="slideRight" delay={0.3}>
            <div className="rounded-3xl border border-black bg-white px-3 py-6 shadow-2xl">
              <div className="relative rounded-3xl border-2 border-gray-200 bg-black p-8 shadow-lg">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black">
                  <div className="flex h-6 w-6 items-center justify-center rounded-sm bg-white">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="h-1 w-1 rounded-full bg-black"></div>
                      <div className="h-1 w-1 rounded-full bg-black"></div>
                      <div className="h-1 w-1 rounded-full bg-black"></div>
                      <div className="h-1 w-1 rounded-full bg-black"></div>
                    </div>
                  </div>
                </div>

                <h2
                  className="mb-8 text-2xl font-bold text-white"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                >
                  General Admission
                </h2>

                <div className="mb-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <img src={CHECK} className="h-5 w-5" alt="check" />
                    <span
                      className="font-medium text-white"
                      style={{ fontFamily: 'Montserrat, serif' }}
                    >
                      Breakfast Included
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={CHECK} className="h-5 w-5" alt="check" />
                    <span
                      className="font-medium text-white"
                      style={{ fontFamily: 'Montserrat, serif' }}
                    >
                      Transportation Included (Sprinter Private Resort)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* <img src={CHECK} className='h-5 w-5' alt="check" /> */}
                    <p className="text-lg text-red-600">X</p>
                    <span
                      className="strike font-medium text-white/35 line-through"
                      style={{ fontFamily: 'Montserrat, serif' }}
                    >
                      Automation - 50% Set Up
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* <img src={CHECK} className='h-5 w-5' alt="check" /> */}
                    <p className="text-lg text-red-600">X</p>
                    <span
                      className="font-medium text-white/35 line-through"
                      style={{ fontFamily: 'Montserrat, serif' }}
                    >
                      On Site Live Automation Set Up
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* <img src={CHECK} className='h-5 w-5' alt="check" /> */}
                    <p className="text-lg text-red-600">X</p>
                    <span
                      className="font-medium text-white/35 line-through"
                      style={{ fontFamily: 'Montserrat, serif' }}
                    >
                      Live Trading Mastery Session
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* <img src={CHECK} className='h-5 w-5' alt="check" /> */}
                    <p className="text-lg text-red-600">X</p>
                    <span
                      className="font-medium text-white/35 line-through"
                      style={{ fontFamily: 'Montserrat, serif' }}
                    >
                      Exclusive Access to Sunday Funday (Jet Skis)
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleButtonClick}
                  className="w-full rounded-full bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-[#E7A647]"
                  style={{ fontFamily: 'Montserrat, serif' }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideLeft" delay={0.5}>
            <div className="rounded-3xl border bg-gradient-to-br from-[#E7A647] to-[#D4941F] px-3 py-6 shadow-2xl">
              <div className="relative rounded-3xl bg-black p-8 shadow-xl">
                <div className="absolute right-6 top-7">
                  <div className="rounded-full bg-white px-4 py-1 text-sm font-medium text-black">
                    Most Popular
                  </div>
                </div>

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7A647]">
                  <div className="h-6 w-6 text-black">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                </div>

                <h2
                  className="mb-8 text-2xl font-bold text-white"
                  style={{ fontFamily: 'Minion Pro, serif' }}
                >
                  VIP Admission
                </h2>

                <div className="mb-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <img src={CHECK} className="h-5 w-5" alt="check" />
                    <span
                      className="font-medium text-white"
                      style={{ fontFamily: 'Montserrat, serif' }}
                    >
                      Breakfast Included
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={CHECK} className="h-5 w-5" alt="check" />
                    <span
                      className="font-medium text-white"
                      style={{ fontFamily: 'Montserrat, serif' }}
                    >
                      Transportation Included (Sprinter Private Resort)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={CHECK} className="h-5 w-5" alt="check" />
                    <span
                      className="font-medium text-white"
                      style={{ fontFamily: 'Montserrat, serif' }}
                    >
                      Automation - 50% Set Up
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={CHECK} className="h-5 w-5" alt="check" />
                    <span
                      className="font-medium text-white"
                      style={{ fontFamily: 'Montserrat, serif' }}
                    >
                      On site Live Automation Set Up
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={CHECK} className="h-5 w-5" alt="check" />
                    <span
                      className="font-medium text-white"
                      style={{ fontFamily: 'Montserrat, serif' }}
                    >
                      Live Trading Mastery Session
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={CHECK} className="h-5 w-5" alt="check" />
                    <span
                      className="font-medium text-white"
                      style={{ fontFamily: 'Montserrat, serif' }}
                    >
                      Exclusive Access to Sunday Funday (Jet Skis)
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleButtonClick}
                  className="w-full rounded-full bg-gradient-to-br from-[#E7A647] to-[#D4941F] px-6 py-3 font-medium text-black transition-colors hover:bg-gray-800"
                  style={{ fontFamily: 'Montserrat, serif' }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* <div className='flex justify-center items-center'>
             <img src={CARD} alt="" />
           </div> */}
    </section>
  )
}

export default AdmissionSection
