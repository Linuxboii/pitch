import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePresentation } from './hooks/usePresentation';

import { SlideOpening } from './components/slides/SlideOpening';
import { SlideProblem } from './components/slides/SlideProblem';
import { SlideOpportunity } from './components/slides/SlideOpportunity';
import { SlideDemoSocial } from './components/slides/SlideDemoSocial';
import { SlideDemoRealEstate } from './components/slides/SlideDemoRealEstate';
import { SlideDemoWhatsApp } from './components/slides/SlideDemoWhatsApp';
import { SlideBusinessModel } from './components/slides/SlideBusinessModel';
import { SlideTraction } from './components/slides/SlideTraction';
import { SlideWhyUs } from './components/slides/SlideWhyUs';
import { SlideAsk } from './components/slides/SlideAsk';

const slides = [
    SlideOpening,
    SlideProblem,
    SlideOpportunity,
    SlideDemoSocial,
    SlideDemoRealEstate,
    SlideDemoWhatsApp,
    SlideBusinessModel,
    SlideTraction,
    SlideWhyUs,
    SlideAsk
];

function App() {
    const { currentSlide, nextSlide, prevSlide, goToSlide, totalSlides } = usePresentation(slides.length);
    const [direction, setDirection] = useState(1);

    // Track direction for animations
    const handleNext = () => {
        setDirection(1);
        nextSlide();
    };

    const handlePrev = () => {
        setDirection(-1);
        prevSlide();
    };

    // Override the hook's native keys strictly for setting direction state
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            if (e.key === 'ArrowRight' || e.key === 'Spacebar' || e.key === ' ' || e.key === 'Enter') {
                setDirection(1);
            } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
                setDirection(-1);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const CurrentSlideComponent = slides[currentSlide];

    return (
        <main className="h-screen w-screen overflow-hidden bg-background-darker text-text-muted font-sans relative">

            {/* Global Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-overlay" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Slide Content */}
            <AnimatePresence mode="wait" initial={false}>
                <CurrentSlideComponent
                    key={currentSlide}
                    isActive={true}
                    direction={direction}
                />
            </AnimatePresence>

            {/* Presentation Controls & Progress Indicator */}
            <div className="absolute bottom-6 inset-x-0 w-full flex justify-center items-center z-50 pointer-events-none">
                <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 flex items-center gap-6 pointer-events-auto shadow-2xl">
                    <button
                        onClick={handlePrev}
                        disabled={currentSlide === 0}
                        className={`text-white transition-opacity ${currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-60 hover:opacity-100'}`}
                        aria-label="Previous Slide"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="flex gap-2">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > currentSlide ? 1 : -1);
                                    goToSlide(idx);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide
                                    ? 'bg-primary w-6'
                                    : 'bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        disabled={currentSlide === slides.length - 1}
                        className={`text-white transition-opacity ${currentSlide === slides.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-60 hover:opacity-100'}`}
                        aria-label="Next Slide"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Slide Counter Footer */}
            <div className="absolute bottom-6 right-8 text-xs font-mono font-bold tracking-widest text-text-muted/30 z-50 mix-blend-screen pointer-events-none">
                {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>

            {/* Brand Watermark */}
            <div className="absolute top-6 left-6 z-50 pointer-events-none">
                <img src="/HomePage.jpeg" alt="AvlokAI Logo" className="h-14 md:h-16 w-auto rounded-lg object-contain drop-shadow-lg opacity-90" />
            </div>

            {/* QR Code */}
            <div className="absolute top-6 right-6 z-50 pointer-events-auto">
                <div className="bg-white p-2 md:p-3 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300">
                    <img src="/qr-code.png" alt="Scan to visit AvlokAI" className="h-24 md:h-32 w-auto object-contain rounded-lg" />
                    <div className="text-center text-[10px] md:text-xs font-bold text-gray-800 mt-1 uppercase tracking-wider">
                        Scan Me
                    </div>
                </div>
            </div>

        </main>
    );
}

export default App;
