import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            }
        });

        tl.fromTo(textRef.current,
            { opacity: 0, y: 100, scale: 1.1 },
            { opacity: 1, y: 0, scale: 1, duration: 1 }
        )
            .to(textRef.current, { opacity: 0, y: -100, scale: 0.9, duration: 1 }, "+=0.5");
    }, []);

    return (
        <div className="h-[400vh] flex flex-col items-center pointer-events-none">
            {/* The canvas is pinned in App.jsx, this section provides the text overlay triggers */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center w-full px-6">
                <div ref={textRef} className="text-center">
                    <h2 className="text-gold-500 font-sans tracking-[0.5em] text-sm uppercase mb-4 opacity-80">Welcome to Paradise</h2>
                    <h1 className="font-serif text-6xl md:text-9xl text-white tracking-tight leading-none mb-8">
                        Explore <br />
                        <span className="italic">Paradise</span>
                    </h1>
                    <div className="w-1 px-1 h-24 bg-gradient-to-b from-gold-500 to-transparent mx-auto mt-12 animate-bounce" />
                </div>
            </div>

            <div className="h-screen" /> {/* Journey marker */}
            <div className="h-screen" /> {/* Arrival marker */}
            <div className="h-screen" /> {/* Experience marker */}
        </div>
    );
};

export default Hero;
