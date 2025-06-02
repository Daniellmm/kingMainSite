import CHECK from '../assets/images/check.png'
import ScrollAnimation from '../component/ScrollAnimation';
import CARD from '../assets/images/card.jpg'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const AdmissionSection = ({ handleButtonClick }) => {
    return (
        <section className='overflow-hidden px-5 md:px-10 bg-white py-20'>
            <div className='flex flex-col justify-center items-center'>

                <ScrollAnimation animation="zoomIn">
                    <div className='text-center mb-12'>
                        <h1 className='text-[#E7A647] text-4xl lg:text-[48px] font-bold mb-4'
                            style={{ fontFamily: 'Minion Pro, serif' }}>
                            What You Will Get
                        </h1>
                        <p className='text-black text-lg md:text-xl'
                            style={{ fontFamily: 'Montserrat, serif' }}>
                            At the become your bank summit you get these things
                        </p>
                    </div>
                </ScrollAnimation>


                <div className='grid md:grid-cols-2 gap-8 max-w-5xl w-full'>


                    <ScrollAnimation animation="slideRight" delay={0.3}>
                        <div className='bg-white py-6 px-3 rounded-3xl border border-black shadow-2xl'>
                            <div className='bg-black rounded-3xl p-8 shadow-lg border-2 border-gray-200 relative'>

                                <div className='w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6'>
                                    <div className='w-6 h-6 bg-white rounded-sm flex items-center justify-center'>
                                        <div className='grid grid-cols-2 gap-1'>
                                            <div className='w-1 h-1 bg-black rounded-full'></div>
                                            <div className='w-1 h-1 bg-black rounded-full'></div>
                                            <div className='w-1 h-1 bg-black rounded-full'></div>
                                            <div className='w-1 h-1 bg-black rounded-full'></div>
                                        </div>
                                    </div>
                                </div>

                                <h2 className='text-2xl font-bold text-white mb-8'
                                    style={{ fontFamily: 'Minion Pro, serif' }}>
                                    General Admission
                                </h2>


                                <div className='space-y-4 mb-8'>
                                    <div className='flex items-center gap-3'>
                                        <img src={CHECK} className='h-5 w-5' alt="check" />
                                        <span className='text-white font-medium' style={{ fontFamily: 'Montserrat, serif' }}>
                                            Breakfast Included
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <img src={CHECK} className='h-5 w-5' alt="check" />
                                        <span className='text-white font-medium' style={{ fontFamily: 'Montserrat, serif' }}>
                                            Transportation Included (Sprinter Private Resort)
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        {/* <img src={CHECK} className='h-5 w-5' alt="check" /> */}
                                        <p className='text-lg text-red-600'>X</p>
                                        <span className='text-white/35 line-through strike font-medium' style={{ fontFamily: 'Montserrat, serif' }}>
                                            Automation - 50% Set Up
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                         {/* <img src={CHECK} className='h-5 w-5' alt="check" /> */}
                                        <p className='text-lg text-red-600'>X</p>
                                        <span className='text-white/35 line-through font-medium' style={{ fontFamily: 'Montserrat, serif' }}>
                                            On Site Live Automation Set Up
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                         {/* <img src={CHECK} className='h-5 w-5' alt="check" /> */}
                                        <p className='text-lg text-red-600'>X</p>
                                        <span className='text-white/35 line-through font-medium' style={{ fontFamily: 'Montserrat, serif' }}>
                                            Live Trading Mastery Session
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                         {/* <img src={CHECK} className='h-5 w-5' alt="check" /> */}
                                        <p className='text-lg text-red-600'>X</p>
                                        <span className='text-white/35 line-through font-medium' style={{ fontFamily: 'Montserrat, serif' }}>
                                            Exclusive Access to Sunday Funday (Jet Skis)
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleButtonClick}
                                    className='w-full bg-white text-black py-3 px-6 rounded-full font-medium hover:bg-[#E7A647] transition-colors'
                                    style={{ fontFamily: 'Montserrat, serif' }}>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </ScrollAnimation>


                    <ScrollAnimation animation="slideLeft" delay={0.5}>
                        <div className='bg-gradient-to-br from-[#E7A647] to-[#D4941F] py-6 px-3 rounded-3xl border shadow-2xl'>
                            <div className='bg-black rounded-3xl p-8 shadow-xl relative'>

                                <div className='absolute top-7 right-6'>
                                    <div className='bg-white text-black px-4 py-1 rounded-full text-sm font-medium'>
                                        Most Popular
                                    </div>
                                </div>


                                <div className='w-12 h-12 bg-[#E7A647] rounded-xl flex items-center justify-center mb-6'>
                                    <div className='w-6 h-6 text-black'>
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                        </svg>
                                    </div>
                                </div>

                                <h2 className='text-2xl font-bold text-white mb-8'
                                    style={{ fontFamily: 'Minion Pro, serif' }}>
                                    VIP Admission
                                </h2>


                                <div className='space-y-5 mb-8'>
                                    <div className='flex items-center gap-3'>
                                        <img src={CHECK} className='h-5 w-5' alt="check" />
                                        <span className='text-white font-medium' style={{ fontFamily: 'Montserrat, serif' }}>
                                            Breakfast Included
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <img src={CHECK} className='h-5 w-5' alt="check" />
                                        <span className='text-white font-medium' style={{ fontFamily: 'Montserrat, serif' }}>
                                            Transportation Included (Sprinter Private Resort)
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <img src={CHECK} className='h-5 w-5' alt="check" />
                                        <span className='text-white font-medium' style={{ fontFamily: 'Montserrat, serif' }}>
                                            Automation - 50% Set Up
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <img src={CHECK} className='h-5 w-5' alt="check" />
                                        <span className='text-white font-medium' style={{ fontFamily: 'Montserrat, serif' }}>
                                            On site Live Automation Set Up
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <img src={CHECK} className='h-5 w-5' alt="check" />
                                        <span className='text-white font-medium' style={{ fontFamily: 'Montserrat, serif' }}>
                                            Live Trading Mastery Session
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <img src={CHECK} className='h-5 w-5' alt="check" />
                                        <span className='text-white font-medium' style={{ fontFamily: 'Montserrat, serif' }}>
                                            Exclusive Access to Sunday Funday (Jet Skis)
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleButtonClick}
                                    className='w-full bg-gradient-to-br from-[#E7A647] to-[#D4941F] text-black py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition-colors'
                                    style={{ fontFamily: 'Montserrat, serif' }}>
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