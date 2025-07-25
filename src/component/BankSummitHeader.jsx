import ggeiLogo from '../assets/images/logo/ggei.png'
import kingTransparent from '../assets/images/team/kingTransparent.png'
import alexisTransparent from '../assets/images/team/alexisTransparent.png'
import ScrollAnimation from './ScrollAnimation'
import Button from './ui/Button'
const BankSummitHeader = () => {
  return (
    <section className="bankSummitSecion relative flex min-h-[700px] justify-center overflow-hidden rounded-bl-[35px] rounded-br-[35px] bg-black px-4 pb-8 pt-28 md:min-h-[640px] md:rounded-bl-[70px] md:rounded-br-[70px] md:px-8 md:pb-12 lg:min-h-[746px] lg:pb-32 lg:pt-32">
      {/* Slanted golden gradient bar in upper right corner, clipped to section */}
      <div
        className="slantedDivGgei pointer-events-none absolute right-0 top-0 z-20 w-1/2 -translate-y-[132px] translate-x-[157px] rotate-[45deg] overflow-hidden bg-[linear-gradient(to_right,_#2a1f05,_#4a3510_40%,_#b28f48_104%)]"
        style={{ width: '300px', height: '[275px' }}
      >
        <div
          style={{
            width: '340px',
            height: '275px',
          }}
        />
      </div>

      <div className="relative lg:w-[1280px] xl:w-[1800px]">
        {/* Text Content */}
        <div className="z-50 ml-1 flex w-1/2 flex-col space-y-4 lg:ml-8 lg:w-[35%]">
          {/* LOGO */}
          <ScrollAnimation animation="zoomIn" delay={0.5}>
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
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={0.5}>
            <h1
              className="py-0 pt-2 text-left text-2xl font-bold uppercase leading-6 text-white md:text-3xl lg:text-5xl"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span
                className="bg-gradient-golden bg-clip-text text-transparent"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Become{' '}
              </span>
              Your{' '}
              <span
                className="bg-gradient-golden bg-clip-text text-transparent"
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
                    'linear-gradient(90deg, rgb(231, 166, 71) 0%, rgb(255, 215, 107) 50%, rgb(191 140 65) 100%)',
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
        {/* Alexis Name */}
        {/* <div className=" z-30 relative underline-after pl-2 inline-block">
            <h3 
              className="text-sm text-[#ffffff] text-[0.8rem] font-light lg:font-normal whitespace-nowrap uppercase"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                // textDecoration: 'underline',
                textDecorationColor: '#E7A647',
                textUnderlineOffset: '3px',
                lineHeight: 1,
              }}
            >
            <span className='text-[1.1rem] font-medium lette' style={{
              letterSpacing: '1px'
            }}>
              <span className='text-[1.5rem] font-semibold'>
                A
              </span>
              lexis
              </span> 
              <br/>
              Holifield
            </h3>
          </div> */}

        {/* KING Name */}
        {/* <div className=" z-30 relative underline-after-king pl-4 inline-block">
            <h3 
              className="text-sm text-[#ffffff] text-[0.8rem] font-light lg:font-normal whitespace-nowrap"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                // textDecoration: 'underline',
                textDecorationColor: '#E7A647',
                textUnderlineOffset: '3px',
                lineHeight: 1,
              }}
            >
            <span className='text-[1.1rem] font-medium' style={{
              letterSpacing: '1px'
            }}>
KING
</span>
              <br/>
              Edwards
            </h3>
          </div> */}
        {/* IMAGES */}
        <div className="relative">
          {/* IMAGES */}
          {/* <div className="relative"></div> */}

          {/* Alexis Card */}
          <ScrollAnimation animation="slideUp" delay={0.5}>
            <div className="alexisHeaderGgei absolute left-[-127px] top-[54px] h-48 w-96">
              {/* Alexis Name */}
              <div className="underline-after alexisNameGgei relative z-30 inline-block pl-2">
                <h3
                  className="whitespace-nowrap text-[0.7rem] font-light uppercase text-[#ffffff] md:text-sm lg:font-normal"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    // textDecoration: 'underline',
                    textDecorationColor: '#E7A647',
                    lineHeight: 1,
                  }}
                >
                  <span
                    className="lette text-[0.8rem] font-medium md:text-[1.1rem]"
                    style={{
                      letterSpacing: '1px',
                    }}
                  >
                    <span className="text-[1.2rem] font-semibold md:text-[1.5rem]">
                      A
                    </span>
                    lexis
                  </span>
                  <br />
                  Holifield
                </h3>
              </div>
              <div
                className="h-48 w-96 -rotate-[33deg] overflow-hidden border border-[#E7A647] bg-[linear-gradient(210deg,_#040404,_#2d2a3452)] md:h-[246px] md:w-[455px] lg:h-[300px] lg:w-[600px]"
                // style={{ width: 384, height: 192 }}
              >
                <img
                  src={alexisTransparent}
                  alt="Alexis"
                  width={210}
                  height={270}
                  className="alexisHeaderGgeiImg mr-4 h-[270px] w-[210px] rotate-[33deg] -scale-x-100 justify-self-end object-cover md:rotate-[31deg] md:scale-x-100"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* King Card */}
          <ScrollAnimation animation="slideDown" delay={0.5}>
            <div className="kingHeaderGgei absolute -top-[328px] left-[165px] h-48 w-96">
              {/* KING Name */}
              <div className="underline-after-king nameKingGgei relative z-30 inline-block pl-4">
                <h3
                  className="whitespace-nowrap text-[0.8rem] text-sm font-light text-[#ffffff] md:text-[0.85rem] lg:font-normal"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    // textDecoration: 'underline',
                    textDecorationColor: '#E7A647',
                    textUnderlineOffset: '3px',
                    lineHeight: 1,
                  }}
                >
                  <span
                    className="text-[1.1rem] font-medium md:text-[1.3rem]"
                    style={{
                      letterSpacing: '1px',
                    }}
                  >
                    KING
                  </span>
                  <br />
                  Edwards
                </h3>
              </div>

              <div
                className="h-48 w-96 -rotate-[33deg] overflow-hidden border border-[#E7A647] bg-[linear-gradient(175deg,_#070709,_#2d2a346e)] md:h-[246px] md:w-[418px] md:bg-[linear-gradient(200deg,_#070709,_#2d2a346e)] lg:h-[300px] lg:w-[600px]"
                // style={{ width: 384, height: 192 }}
              >
                <img
                  src={kingTransparent}
                  alt="King"
                  width={268}
                  height={320}
                  className="kingHeaderGgeiImg kingHeaderGgeiImg -ml-24 -mt-5 h-[368px] w-[222px] rotate-[33deg] -scale-x-100 justify-self-start object-cover"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default BankSummitHeader
