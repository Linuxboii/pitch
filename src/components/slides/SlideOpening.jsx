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
                className="relative z-10 max-w-6xl"
            >
                <div className="flex flex-col items-center justify-center mb-16 mt-8 relative">
                    {/* Soft glow behind the logo to nestle it into the theme */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ delay: 0.8, duration: 2 }}
                        className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"
                    />

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 1.2, ease: "easeOut" }}
                        className="w-48 h-48 md:w-72 md:h-72 mb-8 relative z-10 flex items-center justify-center"
                    >
                        {/* Using mix-blend-screen to remove the black background and make it feel natively rendered */}
                        <img
                            src="/HomePage.jpeg"
                            alt="AvlokAI Logo"
                            className="w-full h-full object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        />
                    </motion.div>
                </div>

                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <h3 className="text-3xl md:text-5xl font-light text-text-muted leading-relaxed">
                            Every business — big or small — has <span className="text-white font-bold">7 departments</span>.
                        </h3>
                        <p className="text-xl md:text-2xl text-text-muted/70 mt-4">
                            If you are self-employed, at least 4.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.5, duration: 0.8 }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-4xl mx-auto"
                    >
                        <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-primary-light to-white bg-clip-text text-transparent leading-relaxed">
                            Are they working for you… <br />
                            <span className="text-white">or are you working for them?</span>
                        </p>
                    </motion.div>
                </div>

            </motion.div>
        </motion.div>
    );
}
