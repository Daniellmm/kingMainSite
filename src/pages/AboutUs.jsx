import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, TrendingUp, Shield, DollarSign, Users, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const heroRef = useRef(null);
    const declarationRef = useRef(null);
    const statsRef = useRef(null);
    const servicesRef = useRef(null);
    const missionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero animation
            gsap.fromTo(heroRef.current.children,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
            );

            // Declaration section animation
            gsap.fromTo(declarationRef.current.children,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: declarationRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Stats animation
            gsap.fromTo(statsRef.current.children,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Services animation
            gsap.fromTo(servicesRef.current.querySelectorAll('.service-item'),
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: servicesRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Mission animation
            gsap.fromTo(missionRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: missionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Floating animation for icons
            gsap.to(".floating-icon", {
                y: -10,
                duration: 2,
                ease: "power2.inOut",
                yoyo: true,
                repeat: -1,
                stagger: 0.3
            });

        });

        return () => ctx.revert();
    }, []);

    const services = [
        {
            icon: <DollarSign className="w-8 h-8" />,
            title: "Access to Capital",
            description: "Funding solutions to market, hire, and expand your business."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Client Financing Solutions",
            description: "Offer flexible financing options so your customers can confidently purchase high-ticket services priced at $5,000–$100,000+."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Wealth Strategy & Insurance Reviews",
            description: "Work with trusted partners to develop plans that protect your growing income and set you up for long-term success."
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Advanced Wealth-Building Tools",
            description: "Gain insight into the investment and cash-flow strategies that high-net-worth individuals use to build and grow wealth."
        }
    ];

    const actionItems = [
        { title: "Get Funding For Your Business", link: "/" },
        { title: "Get Financing For Your Customers to Pay You", link: "/credit card liquidation" },
        { title: "Start Your Own Funding Business", link: "/funding" },
        { title: "Get a Free Financial Review", link: "/insurance" },
        { title: "Learn How to Trade", link: "/laserfund" },
        { title: "Attend the Become Your Own Bank Summit", link: "/ggei" }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative pt-20 px-6 lg:px-8 overflow-hidden">
                <div className="relative max-w-6xl mx-auto text-center" ref={heroRef}>
                    <h1 className="text-4xl lg:text-8xl font-bold pt-10 mb-6 bg-gradient-to-r from-[#E7A647] to-[#855B1F] bg-clip-text text-transparent" style={{ fontFamily: 'Minion Pro, serif' }}>
                       About High Ticket Offer Financing
                    </h1>
                </div>
            </section>

            {/* Declaration Section */}
            <section className="pb-6 pt-2 px-6 lg:px-8 text-center lg:text-start">

                <div
                    style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                    className="max-w-4xl mx-auto" ref={declarationRef}>

                    <div className="bg-neutral-900 rounded-2xl p-3 lg:p-12 border border-black/75">
                        <div>
                            {/* <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#E7A647]" style={{ fontFamily: 'Minion Pro, serif' }}>
                                About High Ticket Offer Financing
                            </h2> */}

                        </div>
                        <p className="text-xl lg:text-2xl leading-relaxed mb-6 text-white">
                            We believe that entrepreneurship is not a gamble—it's a strategic path to freedom, wealth, and legacy.
                        </p>
                        <p className="text-lg leading-relaxed mb-6 text-gray-300">
                            But the odds? They've been stacked against you.
                        </p>
                        <div className="space-y-4 text-gray-300">
                            <p>You're not failing because you lack drive.</p>
                            <p>You're not struggling because you don't work hard.</p>
                            <p className="text-xl font-semibold text-white">
                                You're falling short because the system never gave you the full blueprint.
                            </p>
                        </div>
                        <div className="mt-8 p-6 bg-black/30 rounded-xl">
                            <p className="text-lg italic text-gray-200">
                                "The financial playbook that built America's wealthiest families was never designed for mass distribution."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 px-6 lg:px-8 bg-black">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-[#E7A647]" style={{ fontFamily: 'Minion Pro, serif' }}>
                        The Truth About Entrepreneurship in America
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-12" ref={statsRef}>
                        <div className="text-center p-8 bg-neutral-900 rounded-2xl border border-gray-600">
                            <div className="text-4xl lg:text-5xl font-bold text-[#E7A647] mb-4" style={{ fontFamily: 'Minion Pro, serif' }}>30M+</div>
                            <p
                                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                                className="text-gray-300">Entrepreneurs in the U.S.</p>
                        </div>
                        <div className="text-center p-8 bg-neutral-900 rounded-2xl border border-slate-600">
                            <div className="text-4xl lg:text-5xl font-bold text-[#E7A647] mb-4" style={{ fontFamily: 'Minion Pro, serif' }}>98.1%</div>
                            <p
                                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                                className="text-gray-300">Earn less than $1M per year</p>
                        </div>
                        <div className="text-center p-8 bg-neutral-900 rounded-2xl border border-slate-600">
                            <div className="text-4xl lg:text-5xl font-bold text-[#E7A647] mb-4" style={{ fontFamily: 'Minion Pro, serif' }}>86%</div>
                            <p
                                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                                className="text-gray-300">Earn under $100K annually</p>
                        </div>
                    </div>
                    <div
                        style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                        className="text-center max-w-3xl mx-auto">
                        <p className="text-xl text-gray-300 mb-6">
                            These numbers reveal a deeper issue: hard work isn't the problem—access and education are.
                        </p>
                        <p className="text-lg text-gray-400 italic">
                            "Imagine asking a chef for your favorite recipe and receiving all but one key ingredient. Even with the best effort, the final result will never quite come out right."
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-6 lg:px-8" ref={servicesRef}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#E7A647]" style={{ fontFamily: 'Minion Pro, serif' }}>
                            How We Help You Grow
                        </h2>
                        <p
                            style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                            className="text-xl text-gray-400 max-w-3xl mx-auto">
                            At High Ticket Offer Financing, we don't just provide capital—we deliver complete entrepreneurial support.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="service-item bg-neutral-900 p-8 rounded-2xl border border-slate-600 hover:border-[#E7A647] transition-all duration-300">
                                <div className="floating-icon text-[#E7A647] mb-6">
                                    {service.icon}
                                </div>
                                <div className="flex items-start mb-4">
                                    <CheckCircle className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" />
                                    <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'Minion Pro, serif' }}>{service.title}</h3>
                                </div>
                                <p
                                    style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                                    className="text-gray-300 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-6 lg:px-8 bg-white" ref={missionRef}>
                <div className="max-w-4xl mx-auto text-center">
                    <Target className="w-16 h-16 text-[#E7A647] mx-auto mb-8 floating-icon" />
                    <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-black" style={{ fontFamily: 'Minion Pro, serif' }}>Our Mission</h2>
                    <p
                        style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                        className="text-xl lg:text-2xl leading-relaxed mb-8 text-black">
                        To create more millionaire entrepreneurs by combining capital access with world-class financial literacy and strategic support.
                    </p>
                    <div
                        style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                        className="bg-neutral-900 rounded-2xl p-8 border border-gray-600">
                        <p className="text-lg text-gray-300 mb-6">
                            If legendary investors like Warren Buffett can build generational wealth with a solid gameplan, we believe everyday entrepreneurs—when given the right tools—can achieve consistent six and seven-figure incomes without unnecessary trial and error.
                        </p>
                        <p className="text-xl font-semibold text-white">
                            With proper guidance, funding, and financial education, reaching your full potential isn't just possible—it's probable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-[#E7A647]" style={{ fontFamily: 'Minion Pro, serif' }}>Ready to Scale?</h2>
                    <p className="text-lg text-gray-400 mb-12" style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                        Below, you'll find a list of services designed for serious entrepreneurs ready to take their business to the next level:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {actionItems.map((item, index) => (
                            <a
                                style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                                key={index}
                                href={item.link}
                                className="bg-neutral-900 p-6 rounded-xl border border-gray-600 hover:border-gray-400 transition-all duration-300 cursor-pointer group block text-decoration-none"
                            >
                                <p className="text-white font-medium group-hover:text-gray-300 transition-colors">{item.title}</p>
                            </a>
                        ))}
                    </div>
                    <div className="space-y-6" style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                        <p className="text-xl text-gray-300">
                            No matter where you are in your journey, if you're committed to growth, we're committed to helping you get there.
                        </p>
                        <p className="text-lg text-gray-400">
                            We're excited to be part of your success story.
                        </p>
                        <p className="text-2xl font-bold text-[#E7A647]">
                            Let's grow—together.
                        </p>
                    </div>
                </div>
            </section>

            {/* Revolution Statement */}
            <section className="py-16 px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-neutral-900 rounded-2xl p-8 lg:p-12 border border-gray-600">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-[#E7A647]" style={{ fontFamily: 'Minion Pro, serif' }}>
                            This isn't a program. It's not just a service.
                        </h3>
                        <p className="text-xl lg:text-2xl font-semibold mb-8 text-white">
                            It's a revolution in how entrepreneurship is funded, grown, and sustained.
                        </p>
                        <div
                            style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                            className="space-y-4 text-lg text-gray-300">
                            <p>If you're serious about building real wealth,</p>
                            <p>if you're done playing small,</p>
                            <p>if you believe your vision deserves to be backed by more than just belief—</p>
                        </div>
                        <p
                            className="text-2xl font-bold mt-8 text-[#E7A647]" style={{ fontFamily: 'Minion Pro, serif' }}>
                            Welcome to High Ticket Offer Financing.
                        </p>
                        <div
                            style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}
                            className="mt-8 space-y-2 text-lg text-gray-300">
                            <p>Let's take everything to the next level.</p>
                            <p>Let's build something unshakeable.</p>
                            <p className="text-xl font-semibold text-white">
                                Let's make millionaire entrepreneurs the new norm.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Message */}
            <section className="py-12 px-6 lg:px-8 text-center">
                <div className="max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, serif', fontWeight: 'medium' }}>
                    <p className="text-xl text-gray-300 mb-4" >
                        The world doesn't need more employees. It needs more empowered entrepreneurs.
                    </p>
                    <p className="text-lg text-gray-400 mb-2">We're here for all of them.</p>
                    <p className="text-xl font-semibold text-[#E7A647]" style={{ fontFamily: 'Minion Pro, serif' }}>We're here for you.</p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;