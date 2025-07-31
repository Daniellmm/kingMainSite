import fundingLogo from '../../assets/images/logo/fundingLogo.png'
import kingTransparent from '../../assets/images/team/kingTransparent.webp'
import erickTransparent from '../../assets/images/team/erickTransparent.webp'
import ScrollAnimation from '../ScrollAnimation'
import Button from '../ui/Button'
import './FundingPageHeader.css'

const URL = 'https://syofb.io'

// Function to handle button clicks
const handleButtonClick = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

const FundingPageHeader = () => {
  return (
    <section className="fundingPageHeaderSection relative flex min-h-[680px] justify-center overflow-hidden rounded-bl-[35px] rounded-br-[35px] bg-black px-4 pb-8 pt-[5.5rem] sm:pt-24 md:rounded-bl-[70px] md:rounded-br-[70px] lg:min-h-[660px] lg:pb-0 lg:pt-32 2xl:min-h-[705px]">
      {/* Slanted golden gradient bar in upper right corner, clipped to section */}
      <div
        className="fundingHeaderSlant pointer-events-none absolute right-0 top-0 z-20 w-1/2 -translate-y-[132px] translate-x-[157px] rotate-[45deg] overflow-hidden bg-[linear-gradient(to_right,_#2a1f05,_#4a3510_40%,_#b28f48_104%)]"
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
            <div className="mb-2 flex h-14 w-14 items-center justify-start sm:w-[5.5rem] lg:mb-0 lg:h-28 lg:w-36">
              <img
                src={fundingLogo}
                alt="logo"
                width={56}
                height={56}
                className="h-14 w-14 object-contain sm:h-[5.5rem] sm:w-[5.5rem] lg:h-24 lg:w-24"
                style={{ display: 'block' }}
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={0.5}>
            {/* <h1
              className="fundingHeaderTitle py-0 pt-2 text-left text-3xl font-bold uppercase leading-8 text-white sm:text-4xl sm:leading-[2.5rem] lg:pt-0 lg:text-5xl"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span
                className="bg-gradient-golden bg-clip-text text-transparent"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Start{' '}
              </span>
              Your{' '}
              <span
                className="bg-gradient-golden bg-clip-text text-transparent"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Own Funding{' '}
              </span>
              Business
            </h1> */}
            <h1
              className="fundingHeaderTitle py-0 pt-2 text-left text-3xl font-bold uppercase leading-8 text-white sm:text-4xl sm:leading-[2.5rem] lg:pt-0 lg:text-5xl"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span style={{ color: 'white' }}>S</span>
              <span
                className="bg-gradient-golden bg-clip-text text-transparent"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                tart{' '}
              </span>

              <span style={{ color: 'white' }}>Y</span>
              <span
                className="bg-gradient-golden bg-clip-text text-transparent"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                our{' '}
              </span>

              <span style={{ color: 'white' }}>O</span>
              <span
                className="bg-gradient-golden bg-clip-text text-transparent"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                wn{' '}
              </span>

              <span style={{ color: 'white' }}>F</span>
              <span
                className="bg-gradient-golden bg-clip-text text-transparent"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                unding{' '}
              </span>

              <span style={{ color: 'white' }}>B</span>
              <span
                className="bg-gradient-golden bg-clip-text text-transparent"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                usiness
              </span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={0.5} className="grow-1">
            <p
              className="pt-2 text-left text-[12px] uppercase text-white sm:text-[14px] 2xl:pt-[1.1rem] 2xl:text-[16px]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Build a multi-6 or 7-figure funding business helping entrepreneurs
              get the capital they desperatly need to succeed.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="zoomIn" delay={0.5} className="grow-1">
            <div className="mt-0 flex flex-col gap-x-4 gap-y-0 space-y-4 uppercase md:flex-row 2xl:mt-2">
              <Button
                width="150px"
                className="mt-4 w-[150px]"
                onClick={() => handleButtonClick(URL)}
              >
                Learn More
              </Button>
            </div>
          </ScrollAnimation>
        </div>

        {/* IMAGES */}
        <div className="relative">
          {/* Erick Card */}
          <div className="fundingHeaderErickCard absolute left-[-88px] top-[20px] h-48 w-96">
            {/* Erick Name */}
            <div className="underline-after fundingHeaderErickName relative z-30 inline-block pl-2">
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
                    E
                  </span>
                  rick
                </span>
                <br />
                Alvarez
              </h3>
            </div>
            <div className="fundingHeaderErickImgWrap h-44 w-96 -rotate-[33deg] overflow-hidden border border-[#E7A647] bg-[linear-gradient(210deg,_#040404,_#2d2a3452)] sm:min-h-52 md:h-[246px] md:w-[500px] lg:h-[250px] lg:w-[600px] 2xl:h-[285px]">
              <img
                src={erickTransparent}
                alt="Erick"
                width={210}
                height={270}
                className="fundingHeaderErickImg w-full rotate-[33deg] justify-self-end md:rotate-[31deg]"
                style={{ display: 'block', objectPosition: 'center top' }} // adjust as needed
              />
            </div>
          </div>

          {/* King Card */}
          <div className="fundingHeaderKingCard absolute -top-[442px] left-[165px] h-44 w-96">
            {/* KING Name */}
            <div className="underline-after-king fundingHeaderKingName relative z-30 inline-block pl-4">
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

            <div className="fundingHeaderKingImgWrap h-44 w-96 -rotate-[33deg] overflow-hidden border border-[#E7A647] bg-[linear-gradient(175deg,_#070709,_#2d2a346e)] sm:min-h-52 md:h-[246px] md:w-[418px] md:bg-[linear-gradient(200deg,_#070709,_#2d2a346e)] lg:h-[250px] lg:w-[600px] 2xl:h-[285px]">
              <img
                src={kingTransparent}
                alt="King"
                width={268}
                height={320}
                className="fundingHeaderKingImg -ml-16 -mt-5 h-[283px] w-[235px] rotate-[33deg] -scale-x-100 justify-self-start object-cover"
                style={{ display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FundingPageHeader
