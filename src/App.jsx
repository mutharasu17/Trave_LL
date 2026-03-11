import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import ImageSequence from './components/ImageSequence';
import Hero from './sections/Hero';
import BookingSection from './sections/BookingSection';
import Destinations from './sections/Destinations';
import Services from './sections/Services';
import Journal from './sections/Journal';
import Footer from './sections/Footer';
import Navbar from './components/Navbar';

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="relative">
            <Navbar />

            <main>
                {/* Step A: DREAM (Hero Intro) */}
                <section id="hero" className="relative h-[400vh]">
                    <div className="sticky top-0 h-screen w-full">
                        <ImageSequence totalFrames={367} folderPath="travel-pik" />
                    </div>
                    <div className="relative z-10">
                        <Hero />
                    </div>
                </section>

                {/* Step B: JOURNEY (Booking Emotion) */}
                <section id="booking" className="relative z-20 -mt-[100vh]">
                    <BookingSection />
                </section>

                {/* Step C: ARRIVAL (Destinations Explorer) */}
                <section id="destinations" className="relative z-30 bg-[#050505] py-32">
                    <Destinations />
                </section>

                {/* Step D: EXPERIENCE (Services) */}
                <section id="services" className="relative z-30 bg-[#0a0a0a] py-32">
                    <Services />
                </section>

                {/* Step E: ESCAPE (Ending Scene / Journal) */}
                <section id="journal" className="relative z-30 bg-[#050505] py-32">
                    <Journal />
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
