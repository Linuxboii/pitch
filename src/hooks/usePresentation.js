import { useState, useEffect, useCallback } from 'react';

export function usePresentation(totalSlides) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }, []);

    const goToSlide = useCallback((index) => {
        if (index >= 0 && index < totalSlides) {
            setCurrentSlide(index);
        }
    }, [totalSlides]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Don't trigger if user is typing in an input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            // Handle Number Keys 1-9
            const numKey = parseInt(e.key);
            if (!isNaN(numKey) && numKey > 0 && numKey <= 9) {
                e.preventDefault();
                goToSlide(numKey - 1);
                return;
            }

            switch (e.key) {
                case 'ArrowRight':
                case 'Spacebar':
                case ' ': // spacebar sometimes registers as " "
                case 'Enter':
                    e.preventDefault();
                    nextSlide();
                    break;
                case 'ArrowLeft':
                case 'Backspace':
                    e.preventDefault();
                    prevSlide();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, goToSlide]);

    return {
        currentSlide,
        nextSlide,
        prevSlide,
        goToSlide,
        totalSlides,
        isFirstSlide: currentSlide === 0,
        isLastSlide: currentSlide === totalSlides - 1,
    };
}
