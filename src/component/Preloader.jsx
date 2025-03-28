import React, { useEffect } from 'react'
import { gsap } from 'gsap'

const Preloader = () => {
    useEffect(() => {
        // Ensure we're targeting the correct elements
        gsap.set(".mil-1, .mil-2, .mil-3, .reveal-box, .loader-text", {
            opacity: 1, // Make sure elements are visible
            color: 'white' // Explicit white color
        });

        // Create GSAP timeline
        const tl = gsap.timeline({
            onComplete: () => {
                // Hide preloader after animation
                gsap.to(".fix", {
                    display: 'none',
                    duration: 0
                });
            }
        });

        // Animation sequence
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
                color: 'white'
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
                // backgroundColor: 'linear-gradient(to right, #E7A647, #4C22B1)'
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

        // Cleanup function
        return () => {
            tl.kill(); // Stop the animation if component unmounts
        };
    }, []);

    return (
        <div className='fix z-10 top-0 left-0 w-full h-screen bg-black fixed'>
            <div className='relative h-full text-white'>
                <div className='absolute h-full w-full flex justify-center items-center mil-preloader'>
                    <p className='opacity-0 mr-[15px] mil-1 text-2xl md:text-4xl font-thin'>High</p>
                    <p className='opacity-0 mr-[15px] mil-1 text-2xl md:text-4xl font-semibold'>Ticket</p>
                    <p className='opacity-0 mr-[15px] mil-1 text-2xl md:text-4xl font-thin'>Funding</p>
                </div>

                <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='relative p-[0 30px] mil-preloader-2'>
                        <p className='absolute opacity-0 inset-0 z-10 bg-gradient-to-r from-[#E7A647] to-[#ff9901] reveal-box'></p>
                        <p className='loader-text  text-white text-3xl md:text-4xl'>The King</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader