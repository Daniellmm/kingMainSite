import * as THREE from "three";
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Book } from "./Book";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const HeroModel = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const containerRef = useRef(null);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
            <Canvas
                camera={{
                    position: [0, 0, 12],
                    fov: isMobile ? 35 : 55
                }}
                style={{ width: '100%', height: '100%' }}
            >
                {!isMobile && (
                    <OrbitControls
                        enablePan={false}
                        enableZoom={!isTablet}
                        maxDistance={15}
                        minDistance={5}
                        minPolarAngle={Math.PI / 6}
                        maxPolarAngle={Math.PI / 1.5}
                        autoRotate={false}
                        enableDamping={true}
                        dampingFactor={0.05}
                    />
                )}

                <ambientLight intensity={0.6} color="#f4f4f4" />
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={1.2}
                    color="#ffffff"
                    castShadow
                />
                <directionalLight
                    position={[-5, -5, 5]}
                    intensity={0.5}
                    color="#ffffff"
                />

                <GSAPScrollBook
                    containerRef={containerRef}
                    isMobile={isMobile}
                    isTablet={isTablet}
                />
            </Canvas>
        </div>
    );
};

// GSAP version of the rotating book
const GSAPScrollBook = ({ containerRef, isMobile, isTablet }) => {
    const groupRef = useRef();
    const rotationData = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (containerRef.current && groupRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                    onUpdate: (self) => {
                        rotationData.current.y = self.progress * Math.PI * 2;
                        rotationData.current.x = self.progress * Math.PI / 4;
                    }
                }
            });

            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    }, [containerRef]);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y = rotationData.current.y;
            groupRef.current.rotation.x = rotationData.current.x;
        }
    });

    return (
        <group
            ref={groupRef}
            scale={isMobile ? 5 : isTablet ? 6 : 8}
            position={
                isMobile
                    ? [0, -3, -1]
                    : isTablet
                        ? [1, -0.5, 0]
                        : [1, -5, 0]
            }
            rotation={
                isMobile
                    ?
                    [0, 0, 0.1]
                    :
                    isTablet
                        ?
                        [0, -Math.PI / 4, 0]
                        :
                        [0, -Math.PI / 2, 0]}
        >
            <Book />
        </group>
    );
};

export default HeroModel;