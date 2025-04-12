import React from 'react'
import MText from '../assets/images/png3.png'
import NOTE from '../assets/images/bg-live/note.png'
import NOTE2 from '../assets/images/bg-live/note2.png'
import HEADPHONE from '../assets/images/headphone.png'
import BIGLOGO from '../assets/images/biglogo.png'
import FALLCOIN from '../assets/images/fallcoin.png'
import LONG from '../assets/images/long.png'
import KING from '../assets/images/king.png'
import ALEXIS from '../assets/images/alexis.png'
import GENE from '../assets/images/gene.png'


const Insurance = () => {
  return (
    <>
      <section className='relative overflow-hidden pb-10 px-10 bg-black flex justify-center items-center min-h-screen md:rounded-br-[100px] md:rounded-bl-[100px]'>
        <div className='z-10 relative pt-32 w-full flex flex-col justify-center items-center'>
          <div className='pb-7'>
            <img src={MText} alt="" />
          </div>
          <div>
            <p className='text-white pb-5 text-center text-sm md:text-xl' style={{ fontFamily: 'Minion Pro, serif' }}>Build a Multi-6 or 7-Figure Business Helping Entrepreneurs get the Captain They Desperately Need to Succeed.</p>
          </div>

          <div>
            <iframe className='lg:w-[650px] pb-5 rounded-2xl h-[250px] lg:rounded-[50px] lg:h-[415px]' src="https://www.youtube.com/embed/m2ERPhqNENk?si=LBHOcW6Eti5e4HTK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div>
            <button className='bg-[#E7A647] px-3 py-2 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
              Check My Funding Eligibility
            </button>
          </div>
        </div>

        <div className='absolute top-[200px] left-[-20px]'>
          <img src={NOTE2} alt="" className='h-[100px] md:h-[120px] lg:h-52' />
        </div>
        <div className='absolute bottom-[100px] right-[-40px]'>
          <img src={NOTE} alt="" className='h-[100px] md:h-[120px] lg:h-52' />
        </div>
        <div className='w-full h-full bg-black opacity-60 inset-0 absolute'></div>
      </section>


      <section className='overflow-hidden px-10 bg-white min-h-[50vh] pb-14'>
        <div className='flex flex-col justify-center items-center pt-24 '>

          <div className='lg:px-24'>
            <h1 className='text-black text-center leading-10' style={{ fontFamily: 'Minion Pro, serif' }}>The definition of insanity is doing the same thing over and over again and expecting a different result.” It’s time to get serious about your financial future. If you want to ensure you and your company are financially set up for success, get a FREE financial review with YellowBrick Financial today.</h1>
          </div>
          <div>
            <h1 className='text-[#E7A647] text-2xl pt-6 text-center' style={{ fontFamily: 'Adelia, serif' }}>C.e.o, Founder</h1>
          </div>
        </div>
      </section>


      <section className='overflow-hidden flex justify-center items-center px-10 bg-black md:min-h-[70vh] pb-14'>
        <div className='flex justify-center items-center pt-10 md:px-40'>
          <div className='grid md:grid-cols-2 gap-x-11 gap-y-10'>
            <div>
              <img src={HEADPHONE} className='h-80' alt="" />
            </div>

            <div className='flex flex-col justify-center items-start'>
              <h1 className='text-[#E7A647] pb-10 text-3xl  md:text-start font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Book a <span className='text-white italic'>Free</span>  Financial Review and Get the “Spender, Saver, Wealth Creator” Audio FREE. </h1>
              <div>
                <button className='bg-[#E7A647] px-5 py-3 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                  FREE Financial Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='overflow-hidden px-10 bg-white min-h-[80vh] pb-14'>
        <div className='flex flex-col justify-center items-center pt-10'>
          <div>
            <h1 className='text-[#E7A647] pb-10 text-3xl text-center md:text-start font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}> About YellowBrick Financial — A Company That Cares </h1>
          </div>

          <div className='grid md:grid-cols-2 gap-x-16 lg:px-40 gap-y-10'>
            <div>
              <img src={BIGLOGO} className='h-72' alt="" />
            </div>

            <div>
              <p className='text-black text-sm ' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                78% of Americans live paycheck to paycheck, and nearly half (49%) have less than $500 in savings. The truth is, the wealthy don’t just invest wisely—they structure and protect their money differently. Billionaires like Warren Buffett aren’t just investors; they leverage life insurance, tax-efficient financial strategies, and asset protection to ensure their wealth continues to grow—regardless of economic conditions.
                <br /><br />
                At YellowBrick Financial, we believe financial security isn’t a luxury—it’s a necessity. We are  committed to helping entrepreneurs correct critical financial mistakes by structuring financial  plans the right way—designed to grow, protect, and pass down wealth for generations. We  teach our clients what the wealthy already know: how to build financial independence with  strategies that work in both good times and bad.
              </p>
            </div>

          </div>
        </div>
      </section>


      <section className='overflow-hidden flex flex-col justify-center items-center px-10 bg-black min-h-[58vh] pb-10'>
        <div className='flex flex-col justify-center items-center lg:px-64 pt-10'>
          <div>
            <h1 className='text-[#E7A647] text-center pb-10 text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Even if you believe your financials are on track, you should still get a FREE financial
              review.
            </h1>
          </div>

          <div>
            <p className='text-white text-sm font-extralight text-center leading-6 lg:px-20 ' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>88% of financial plans and life insurance policies are improperly structured, leaving families exposed to unnecessary taxes, lost wealth, and financial instability when they need protection the most.</p>
          </div>
        </div>
      </section>


      <section className='overflow-hidden flex justify-center items-center px-10 bg-white min-h-[80vh] pb-14'>
        <div className='flex justify-center items-center pt-10 lg:px-20'>
          <div className='grid md:grid-cols-2 gap-x-20 gap-y-10'>
            <div>
              <img src={FALLCOIN} className='h-96' alt="" />
            </div>

            <div className=' flex flex-col justify-center gap-y-5'>
              <h1 className='text-[#E7A647] text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                Even if you believe your financials are on track, you should still get a FREE financial review.
              </h1>
              <p className=' text-sm font-extralight text-gray-900 leading-6' style={{ fontFamily: 'Montserrat, serif' }}>
                88% of financial plans and life insurance policies are improperly structured,
                leaving families exposed to unnecessary taxes,
                lost wealth, and financial instability when they need protection the most.
              </p>
              <p className='text-black font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>
                Are You Ready to Know Exactly What You Need to Do to Get Your Company Financials on Track?
              </p>

              <div>
                <button className='bg-[#E7A647] px-5 py-3 text-sm rounded-[8px]' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                  FREE Financial Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='overflow-hidden flex flex-col justify-center items-center px-10 bg-black md:min-h-[80vh] pb-10'>
        <div className='flex flex-col justify-center items-center pt-10 lg:pt-16 gap-y-3'>
          <h1 className='text-xl font-thin tracking-widest text-gray-400 text-center'>Trusted by Professionals Like You</h1>

          <h1 className='text-[#E7A647] text-center pb-10 text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Client Success Stories</h1>

          <div>
            <img src={LONG} alt="" />
          </div>
        </div>
      </section>


      <section className='overflow-hidden flex justify-center items-center px-10 bg-white min-h-[100vh] pb-14'>
        <div className='flex flex-col justify-center items-center pt-10'>
          <div>
            <h1 className='text-[#E7A647] text-center pb-10 text-3xl font-semibold' style={{ fontFamily: 'Minion Pro, serif' }}>Meet the Team</h1>
          </div>

          <div className='lg:px-20 space-y-10'>
            <div className='grid md:grid-cols-2 gap-x-14 space-y-10'>
              <div>
                <img src={KING} alt="" />
              </div>

              <div className='flex flex-col justify-center items-start'>
                <div>
                  <h1 className='text-[#E7A647] text-2xl text-start' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>King Edwards</h1>
                </div>
                <p className='text-lg italic font-semibold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>King, a visionary, funding expert, and author</p>

                <p className='text-sm pt-5'>
                  was born in Los Angeles and raised in New York. He draws inspiration from the diverse influences of each city. LA exposed him to the glamorous Hollywood lifestyle, while New York instilled a sense of grit and determination.
                  <br /> <br />
                  In his first professional project, King embarked on the creation of HighTicketOfferFinancing.com. This innovative venture aimed to provide alternative funding solutions for entrepreneurs operating in industries traditionally overlooked by banks. Through this endeavor, he sought to help consultants and entrepreneurs earn significant profits, develop and sell high-value products and services, and safeguard themselves from legal implications using HTOF’s comprehensive workflows, standard operating procedures, and contract templates.
                  <br /> <br />
                  With a focus on helping entrepreneurs thrive and achieve remarkable financial milestones, King has received accolades such as the Man of the Moment and Made Man Award for his achievements. Through unwavering determination and an unwavering focus on the next best move, King aims to rewrite the rules of the game and help his clients leave an indelible mark on their respective industries and their family’s lives.
                </p>
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-x-14 space-y-10'>
              <div>
                <img src={ALEXIS} alt="" />
              </div>

              <div className='flex flex-col justify-center items-start'>
                <div>
                  <h1 className='text-[#E7A647] text-2xl text-start' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Alexis Holifield</h1>
                </div>
                <p className='text-lg italic font-semibold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Co-Founder of The Millennial Millionaire</p>

                <p className='text-sm pt-5'>
                  Alexis Holifield, began her journey to learning the laws of building generational wealth at the early age of 17 years old. She began her journey by attending a seminar put on by T. Harv Eker "Secrets Of The Millionaire Mind". Immediately, she began creating an archive of these "well-kept secrets of the wealthy" for the world to know. She went on to graduate with honors and complete a masters degree in life through first hand experience of wealth building, in addition the Multi-Millionaires she continues to be mentored by.
                  <br /> <br />
                  As a Licensed Insurance Broker, Financial Strategist, & Wealth Planner, Alexis dedicates her time as a coach and a mentor sharing Financial Intelligence and Investment Education to cultivate the minds of Millennials all over the nation. Her mission to advise families, individuals, and business owners to begin or enhance their journey to financial freedom to increase and preserve wealth is expressed in her ability to transform the paradigm, and financial states of her client. Specializing in Estate Planning, Cash Value Life Insurance, Retirement, and Executive Business Planning.
                </p>
              </div>
            </div>

            <div className='flex justify-center items-center'>
              <div className='grid md:grid-cols-2 gap-x-14 space-y-10'>
                <div>
                  <img src={GENE} alt="" />
                </div>

                <div className='flex flex-col justify-center items-start'>
                  <div>
                    <h1 className='text-[#E7A647] text-2xl text-start' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Gene Santos</h1>
                  </div>
                  <p className='text-lg italic font-semibold' style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>Financial Advisor</p>

                  <p className='text-sm pt-5'>
                    Gene Santos is a distinguished financial advisor specializing in comprehensive wealth
                    management for high net worth individuals and families. With over a decade of strategic experience in the finance and insurance industry, Gene has established himself as a trusted
                    advisor to discerning clients seeking sophisticated financial solutions.
                    <br /> <br />
                    Demonstrating exceptional performance, Gene has successfully written over $25 million in life
                    insurance coverage, strategically managed in excess of $2.4 million in client assets, and
                    facilitated more than $15 million in annuity premiums. His practice is precisely calibrated to
                    serve high net worth clients, delivering nuanced financial strategies that address the complex
                    wealth management needs of successful professionals and entrepreneurs.
                    <br /> <br />
                    Specializing in advanced retirement planning, comprehensive estate strategies, and tailored
                    investment optimization, Gene provides a strategic approach that goes beyond standard
                    financial advising. His expertise lies in crafting customized financial solutions that protect and
                    grow wealth, with a keen understanding of the unique financial challenges facing high-net-worth
                    individuals.
                    <br /> <br />
                    Gene's client-focused methodology combines rigorous financial acumen with a commitment to
                    building long-term, trust-based relationships. By offering personalized guidance and strategic
                    insights, he empowers clients to make informed decisions that align with their most significant
                    financial objectives and legacy planning goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Insurance