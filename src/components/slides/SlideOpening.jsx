import React from 'react';
import { motion } from 'framer-motion';

export function SlideOpening({ isActive, direction }) {
    if (!isActive) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col justify-center items-center w-full h-full p-8 text-center"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-dark/20 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[150px] mix-blend-screen" />
            </div>

            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative z-10 max-w-5xl"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 20 }}
                    className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-10 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(255,87,34,0.3)] overflow-hidden bg-white/5"
                >
                    <img src="/HomePage.jpeg" alt="AvlokAI Logo" className="w-full h-full object-contain" />
                </motion.div>

                <h1 className="text-7xl md:text-8xl font-black text-white mb-8 tracking-tight leading-tight">
                    AvlokAI
                </h1>

                <h2 className="text-3xl md:text-4xl font-medium text-text-muted max-w-4xl mx-auto leading-relaxed">
                    AI Automation Infrastructure <br />
                    <span className="text-white/90">for Modern SMEs</span>
                </h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-20 flex item-center justify-center text-text-muted/50 text-sm tracking-widest uppercase"
                >
                    Press Space to Begin
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
