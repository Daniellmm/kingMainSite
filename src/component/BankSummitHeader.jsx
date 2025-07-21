import ggeiLogo from '../assets/images/logo/ggei.png'
import kingTransparent from '../assets/images/team/kingTransparent.png'
import alexisTransparent from '../assets/images/team/alexisTransparent.png'
import ScrollAnimation from './ScrollAnimation'
const BankSummitHeader = () => {
  return (
    <section className="relative flex min-h-[670px] justify-center overflow-hidden rounded-bl-[35px] rounded-br-[35px] bg-black px-4 pb-8 pt-28 md:min-h-[575px] md:rounded-bl-[100px] md:rounded-br-[100px] md:px-8 md:pb-12 lg:pb-32 lg:pt-32">
      {/* Slanted golden gradient bar in upper right corner, clipped to section */}
      <div
        className="slantedDivGgei pointer-events-none absolute right-0 top-0 z-20 w-1/2 -translate-y-[132px] translate-x-[157px] rotate-[45deg] overflow-hidden bg-[linear-gradient(to_right,_#A78430_95%,_#E7A647_10%);]"
        style={{ width: '300px', height: '[275px' }}
      >
        <div
          style={{
            width: '340px',
            height: '275px',
          }}
        />
      </div>
      <div className="relative lg:w-[1280px]">
        {/* Text Content */}
        <div className="z-50 flex w-1/2 flex-col space-y-4 lg:w-[35%]">
          {/* LOGO */}
          <div className="mb-2 flex h-14 w-14 items-center justify-start lg:h-36 lg:w-36">
            <img
              src={ggeiLogo}
              alt="logo"
              width={56}
              height={56}
              className="h-14 w-14 object-contain lg:h-24 lg:w-24"
              style={{ display: 'block' }}
            />
          </div>

          <ScrollAnimation animation="zoomIn" delay={0.5}>
            <h1
              className="py-0 pt-2 text-left text-2xl font-bold uppercase leading-6 text-white md:text-3xl lg:text-5xl"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span
                className="bg-gradient-to-r from-[#A78430] to-[#E7A647] bg-clip-text text-transparent"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Become{' '}
              </span>
              Your{' '}
              <span
                className="bg-gradient-to-r from-[#A78430] to-[#E7A647] bg-clip-text text-transparent"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Own Bank{' '}
              </span>
              Summit
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={0.5} className="grow-1">
            <p
              className="pt-2 text-left text-[10px] uppercase text-white md:text-[14px]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Lean how to turn your business into a bank that grows your wealth
              aggressively and consistently.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={0.5} className="grow-1">
            <div className="mt-0 flex flex-col gap-x-4 gap-y-0 space-y-4 uppercase md:flex-row">
              <button
                className="flex w-[103px] items-center justify-center rounded-full p-[0.3rem] text-[0.6rem] font-semibold uppercase text-black shadow-md md:mt-4 md:w-[141px] md:py-2 md:text-xs"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  background:
                    'linear-gradient(90deg, #E7A647 0%, #FFD76B 50%, #855B1F 100%)',
                  fontWeight: 600,
                }}
              >
                Get Tickets
              </button>

              <button
                className="mt-4 flex w-[103px] items-center justify-center rounded-full bg-[#00B67A] p-[0.3rem] text-[0.6rem] font-semibold uppercase text-black shadow-md md:w-[141px] md:py-2 md:text-xs"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                }}
              >
                Learn More
              </button>
            </div>
          </ScrollAnimation>
        </div>

        {/* IMAGES */}
        <div className="relative">
          {/* Alexis Card */}
          <div
            className="alexisHeaderGgei absolute left-[-127px] top-[50px] h-48 w-96 -rotate-[33deg] overflow-hidden border border-[#E7A647] md:h-72 md:w-[50rem]"
            style={{ width: 384, height: 192 }}
          >
            <img
              src={alexisTransparent}
              alt="Alexis"
              width={210}
              height={270}
              className="alexisHeaderGgeiImg mr-4 h-[270px] w-[210px] rotate-[31deg] scale-x-100 justify-self-end object-cover"
              style={{ display: 'block' }}
            />
          </div>

          {/* King Card */}
          <div
            className="kingHeaderGgei absolute -top-[311px] left-[160px] h-48 w-96 -rotate-[33deg] overflow-hidden border border-[#E7A647]"
            style={{ width: 384, height: 192 }}
          >
            <img
              src={kingTransparent}
              alt="King"
              width={268}
              height={320}
              className="kingHeaderGgeiImg kingHeaderGgeiImg -ml-24 -mt-5 h-[320px] w-[268px] rotate-[33deg] -scale-x-100 justify-self-start object-cover"
              style={{ display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BankSummitHeader
