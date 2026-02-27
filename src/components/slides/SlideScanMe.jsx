import React from 'react';
import { motion } from 'framer-motion';
import { Slide } from './Slide';

export function SlideScanMe({ isActive, direction }) {
    if (!isActive) return null;

    return (
        <Slide isActive={isActive} direction={direction}>
            <div className="w-full h-full flex flex-col items-center justify-center max-w-7xl mx-auto relative z-10">
                {/* Background glow for emphasis */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                    className="relative mb-12"
                >
                    <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_0_100px_rgba(255,87,34,0.3)] relative z-10">
                        <img
                            src="/qr-code.png"
                            alt="Scan to visit AvlokAI"
                            className="h-64 sm:h-80 md:h-96 w-auto object-contain rounded-xl"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col items-center text-center"
                >
                    <motion.h2
                        animate={{ opacity: [0.7, 1, 0.7], scale: [0.98, 1.02, 0.98] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="text-6xl md:text-8xl font-black text-white tracking-widest uppercase mb-4 shadow-black drop-shadow-2xl"
                    >
                        Scan Me
                    </motion.h2>
                    <p className="text-xl md:text-2xl text-primary-light font-medium tracking-wide">
                        to get complete details
                    </p>
                </motion.div>
            </div>
        </Slide>
    );
}
