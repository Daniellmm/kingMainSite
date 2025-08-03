import EpgPageHeader from '../component/EpgPageHeader/EpgPageHeader'
import Quote from '../component/ui/Quote'
import LAPTOP from '../assets/images/goldenLaptop.webp'
import EPG from '../assets/images/logo/epgLarge.webp'
import ScrollAnimation from '../component/ScrollAnimation'
import Button from '../component/ui/Button'
import CheckMark from '../component/ui/CheckMark'

// Function to handle button clicks
const handleButtonClick = (url) => {
  window.open(url, '_blank')
}

const URL = 'https://syofb.io'

function Epg() {
  return (
    <>
      <EpgPageHeader />

      <Quote author="David Bach" className="my-4">
        “It’s not how much you make, but how much you keep, and how hard it
        works for you after you keep it.”
      </Quote>

      <section className="custom-header-bg overflow-hidden bg-white px-5 py-20 md:px-12 xl:px-20 2xl:px-24">
        <div className="mx-auto flex max-w-[1800px] flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16 2xl:gap-28">
          <ScrollAnimation animation="slideUp" delay={0.8}>
            <img
              src={LAPTOP}
              alt="laptop"
              className="mx-auto h-auto w-[430px] max-w-full rounded-3xl object-contain shadow-[0_2px_30px_rgba(255,255,255,0.4)] md:h-[430px]"
              width={430}
              height={430}
            />
          </ScrollAnimation>

          <div className="flex w-full flex-1 flex-col">
            <ScrollAnimation animation="slideUp" delay={0.8}>
              <h1
                className="bg-gradient-golden-dark bg-clip-text px-4 pb-10 text-center text-3xl font-semibold leading-9 text-[#E7A647] text-transparent md:px-0 md:pb-6 md:text-left md:leading-[1.1] lg:text-start lg:text-[42px] 2xl:text-5xl"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <span className="text-white">Learn The Secrets</span> To Earning
                More Money, Protecting What You’ve Earned, And Growing What
                You’ve Protected.
              </h1>

              <div className="flex w-full justify-center md:mt-8 md:justify-start">
                <Button
                  size="large"
                  width="150px"
                  onClick={() => {
                    handleButtonClick(URL)
                  }}
                >
                  Watch FREE Web-class
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="bg-white px-8 pb-16 pt-16 lg:px-16 xl:px-32 2xl:px-48">
        <div className="mx-auto flex max-w-[1800px] flex-col items-center justify-center gap-6 md:items-start">
          <ScrollAnimation animation="zoomIn" delay={0.8} className="mx-auto">
            <h2
              className="bg-gradient-golden-dark bg-clip-text text-center text-4xl font-bold uppercase text-transparent lg:text-5xl 2xl:mb-4 2xl:text-6xl"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              EARN. PROTECT. GROW
            </h2>
          </ScrollAnimation>

          <div className="flex w-full flex-col justify-center md:flex-row">
            <div className="flex w-full justify-center md:w-2/5">
              <ScrollAnimation animation="zoomIn" delay={0.8}>
                <img
                  src={EPG}
                  alt="EPG Logo"
                  className="h-auto w-[180px] object-contain drop-shadow-lg md:w-[260px] lg:w-[350px] xl:w-[400px]"
                  loading="lazy"
                  style={{ minWidth: '120px', maxWidth: '400px' }}
                />
              </ScrollAnimation>
            </div>
            <div
              className="mt-6 flex-1 text-base text-gray-800 md:text-lg lg:text-xl xl:text-xl"
              style={{ fontFamily: 'Montserrat, serif', fontWeight: 400 }}
            >
              <ScrollAnimation
                animation="slideUp"
                delay={0.8}
                className="mx-auto"
              >
                <p className="mb-4">
                  Your vision deserves more than a bank account. It deserves a
                  Financial Ark.
                </p>
                <p className="mb-4">
                  The EPG Wealth Building Community, or the Financial Ark, is a
                  private wealth-building community designed for high-achievers
                  who refuse to leave their legacy to chance. Built on
                  century-old frameworks, faith-driven principles, and modern
                  financial systems, our community helps you safeguard,
                  multiply, and strategically direct the resources God has
                  placed in your hands.
                </p>
                <p>
                  This is not traditional wealth management. This is a movement.
                  For the visionary entrepreneur looking to build generational
                  wealth or the athlete / entertainer that has mastered their
                  craft and is now looking to be more intelligent with their
                  money — EPG provides an environment of elite stewardship,
                  advanced financial planning & education, and high-level
                  collaboration.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-header-bg w-full px-4 pb-12 pt-10 md:py-16">
        <div className="mx-auto flex max-w-[1800px] flex-col items-center justify-center">
          <ScrollAnimation animation="zoomIn" delay={0.8} className="mx-auto">
            <h1
              className="mb-8 text-center text-4xl font-bold uppercase lg:text-5xl 2xl:text-6xl"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="text-[#e7a647]">INSIDE THE EPG COMMUNITY,</span>
              <br />
              <span className="text-[#e7a647]">YOU WILL</span>{' '}
              <span className="text-white">LEARN HOW TO</span>
            </h1>
          </ScrollAnimation>

          <ul className="mb-8 mt-0 flex w-full max-w-2xl flex-col gap-4 md:mb-12 md:mt-4">
            {[
              'Build resilient income streams in any market',
              "Protect your wealth using structures favored by the world's wealthiest families",
              'Grow your resources with purpose, discipline, and wisdom',
              'Join a curated network of like-minded, faith-rooted wealth builders',
              'Because true prosperity is about legacy, not just accumulation.',
              'We do not simply teach theory.',
              'We build frameworks for you to earn, protect, and grow — alongside other believers and trusted professionals — within a secure, private environment.',
              'Seats are extremely limited.',
            ].map((item, idx) => (
              <ScrollAnimation
                key={item + idx}
                animation="slideUp"
                delay={`0.${idx}`}
              >
                <li
                  key={idx}
                  className="flex items-start gap-3 text-base text-white md:text-lg lg:text-xl"
                >
                  <CheckMark />
                  <span>{item}</span>
                </li>
              </ScrollAnimation>
            ))}
          </ul>
          <ScrollAnimation animation="slideUp" delay={0.8}>
            <p
              className="mb-8 max-w-2xl text-left text-base text-white md:text-lg"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              If you are called to safeguard your wealth — and multiply it for
              generations — apply below to explore membership in The Financial
              Ark today.
            </p>
            <div className="md:justify-left flex justify-center">
              <Button size="large">Watch FREE Web-Class</Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}

export default Epg
