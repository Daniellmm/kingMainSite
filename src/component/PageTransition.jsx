import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
  const pageRef = useRef(null);

  useEffect(() => {
    
    const tl = gsap.timeline();
    
    tl.fromTo(
      pageRef.current,
      { 
        opacity: 0,
        y: 30 
      },
      { 
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.inOut"
      }
    );

    
    gsap.fromTo(
      ".animate-on-enter",
      { 
        opacity: 0,
        y: 20 
      },
      { 
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
        ease: "power2.inOut"
      }
    );

    return () => {
     
      tl.kill();
    };
  }, []);

  return (
    <div ref={pageRef} className="page-transition">
      {children}
    </div>
  );
};

export default PageTransition;