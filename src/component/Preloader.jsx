import React, { useEffect } from 'react'
import { gsap } from 'gsap'

const Preloader = ({ mainText, subText }) => {
   
    const displayMainText = mainText || ['GET', 'UP TO', '$4M'];
    const displaySubText = subText || 'IN FAST, RELIABLE FUNDING FOR YOU AND YOUR CUSTOMERS';

    useEffect(() => {
        
        gsap.set(".mil-1, .mil-2, .mil-3, .reveal-box, .loader-text", {
            opacity: 1, 
        });

        
        const tl = gsap.timeline({
            onComplete: () => {
                // Hide preloader after animation
                gsap.to(".fix", {
                    display: 'none',
                    duration: 0
                });
            }
        });

        
        tl.fromTo(".mil-1",
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.4,
            }
        )
            .to(".mil-1",
                {
                    opacity: 0,
                    y: -30,
                },
                "+=.3"
            )

            // Reveal box animation
            .fromTo(".reveal-box",
                {
                    opacity: 0,
                    duration: 0.1,
                    width: "0%"
                },
                {
                    opacity: 1,
                    x: -30,
                    
                }
            )
            .to(".reveal-box", {
                width: "100%",
                x: 0,
                duration: 0.45,
            }, "+=.1")

            .to(".reveal-box", {
                right: 0,
            })
            .to(".reveal-box", {
                width: "0%",
                duration: 0.3,
                x: 150
                
            })

            // Loader text animation
            .fromTo(".loader-text",
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    color: 'white'
                }
            )
            .to(".loader-text", {
                opacity: 0,
                y: '-30',
                duration: 0.6,
                delay: 0.5
            });

       
        return () => {
            tl.kill(); 
        };
    }, []);

    return (
        <div className='fix z-10 top-0 left-0 w-full h-screen bg-black fixed'>
            <div className='relative h-full text-[#E7A647]'>
                <div className='absolute h-full w-full flex justify-center flex-col md:flex-row gap-y-5 items-center mil-preloader'>
                    {displayMainText.map((text, index) => (
                        <p key={index} 
                           className={`opacity-0 mr-[15px] px-1 mil-1 text-4xl md:text-4xl ${index === 1 ? 'font-semibold' : 'font-thin'} text-[#E7A647]`} 
                           style={{ fontFamily: 'Minion Pro, serif' }}>
                            {text}
                        </p>
                    ))}
                </div>

                <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='relative p-[0 30px] mil-preloader-2'>
                        <p className='absolute opacity-0 inset-0 z-10 bg-gradient-to-r from-[#E7A647] to-[#ff9901] reveal-box'></p>
                        <p className='loader-text tracking-[1px] px-10 text-center text-white md:text-xl'>{displaySubText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader