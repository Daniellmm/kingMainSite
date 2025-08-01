import ggeiLogo from '../../assets/images/logo/ggei.webp'
import kingTransparent from '../../assets/images/team/kingTransparent.webp'
import alexisTransparent from '../../assets/images/team/alexisTransparent.webp'
import ScrollAnimation from '../ScrollAnimation'
import Button from '../ui/Button'
import './BankSummitHeader.css'
const BankSummitHeader = ({ handleClick }) => {
  return (
    <section className="bankSummitSection relative flex min-h-[680px] justify-center overflow-hidden rounded-bl-[35px] rounded-br-[35px] bg-black px-4 pb-8 pt-[5.5rem] sm:pt-24 md:rounded-bl-[70px] md:rounded-br-[70px] lg:min-h-[660px] lg:pb-0 lg:pt-32 xl:min-h-[628px] 2xl:min-h-[705px]">
      {/* Slanted golden gradient bar in upper right corner, clipped to section */}
      <div
        className="bankSummitSlantedDiv pointer-events-none absolute right-0 top-0 z-20 w-1/2 -translate-y-[132px] translate-x-[157px] rotate-[45deg] overflow-hidden bg-[linear-gradient(to_right,_#2a1f05,_#4a3510_40%,_#b28f48_104%)]"
        style={{ width: '350px', height: '[275px' }}
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
        <div className="relative z-50 ml-1 flex w-1/2 flex-col space-y-2 sm:ml-5 sm:space-y-4 lg:ml-8 lg:w-[35%]">
          {/* LOGO */}
          <ScrollAnimation animation="zoomIn" delay={0.5}>
            <div className="mb-2 flex h-14 w-14 items-center justify-start lg:mb-0 lg:h-28 lg:w-36">
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
              className="py-0 pt-2 text-left text-3xl font-bold uppercase leading-8 text-white sm:text-4xl sm:leading-[2.5rem] lg:pt-0 lg:text-5xl"
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
              className="pt-2 text-left text-[12px] uppercase text-white sm:text-[14px] 2xl:pt-[1.1rem] 2xl:text-[16px]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Learn how to turn your business into a bank that grows your wealth
              aggressively and consistently.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={0.5} className="grow-1">
            <div className="mt-6 flex flex-col gap-x-4 gap-y-0 space-y-4 uppercase md:mt-0 md:flex-row 2xl:mt-2">
              <Button
                variant="solid"
                width="150px"
                className="w-[150px]"
                onClick={handleClick}
              >
                LEARN MORE
              </Button>
            </div>
          </ScrollAnimation>
        </div>

        {/* IMAGES */}
        <div className="relative mt-4 md:mt-4 2xl:mt-0">
          {/* Alexis Card */}
          <div className="bankSummitAlexisHeader absolute left-[-88px] top-[20px] h-48 w-96">
            {/* Alexis Name */}
            <div className="underline-after bankSummitAlexisName relative z-30 inline-block pl-2">
              <h3
                className="whitespace-nowrap text-[0.7rem] font-light uppercase text-[#ffffff] md:text-sm lg:font-normal"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
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
            <div className="h-44 w-96 -rotate-[33deg] overflow-hidden border border-[#E7A647] bg-[linear-gradient(210deg,_#040404,_#2d2a3452)] sm:min-h-52 md:h-[246px] md:w-[500px] lg:h-[250px] lg:w-[600px] 2xl:h-[285px]">
              {/* <img
                src={alexisTransparent}
                alt="Alexis"
                width={210}
                height={270}
                className="bankSummitAlexisImg mr-2 h-[177px] w-[170px] rotate-[33deg] -scale-x-100 justify-self-end object-cover md:rotate-[31deg] md:scale-x-100"
                style={{ display: 'block' }}
              /> */}

              <img
                src={alexisTransparent}
                alt="Alexis"
                width={210}
                height={270}
                className="bankSummitAlexisImg w-full rotate-[33deg] -scale-x-100 justify-self-end md:rotate-[31deg] md:scale-x-100"
                style={{ display: 'block', objectPosition: 'center top' }} // adjust as needed
              />
            </div>
          </div>

          {/* King Card */}
          <div className="bankSummitKingHeader absolute -top-[459px] left-[165px] h-44 w-96">
            {/* KING Name */}
            <div className="underline-after-king bankSummitKingName relative z-30 inline-block pl-4">
              <h3
                className="whitespace-nowrap text-[0.8rem] text-sm font-light text-[#ffffff] md:text-[0.85rem] lg:font-normal"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
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

            <div className="h-44 w-96 -rotate-[33deg] overflow-hidden border border-[#E7A647] bg-[linear-gradient(175deg,_#070709,_#2d2a346e)] sm:min-h-52 md:h-[246px] md:w-[418px] md:bg-[linear-gradient(200deg,_#070709,_#2d2a346e)] lg:h-[250px] lg:w-[600px] 2xl:h-[285px]">
              <img
                src={kingTransparent}
                alt="King"
                width={268}
                height={320}
                className="bankSummitKingImg -ml-16 -mt-5 h-[283px] w-[235px] rotate-[33deg] -scale-x-100 justify-self-start object-cover"
                style={{ display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BankSummitHeader
