import React from 'react';
import { motion } from 'framer-motion';

export function Slide({ children, isActive, className = '', direction = 1 }) {
    if (!isActive) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`absolute inset-0 flex flex-col justify-center items-center w-full h-full p-8 md:p-16 ${className}`}
        >
            <div className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center">
                {children}
            </div>
        </motion.div>
    );
}
