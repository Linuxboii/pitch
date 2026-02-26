import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Cog, Target } from 'lucide-react';
import { Slide } from './Slide';

const pillars = [
    {
        icon: <Cog className="w-8 h-8 text-primary" />,
        title: "Implementation",
        description: "We don't just recommend tools. We build them directly into your operations.",
        delay: 0.2
    },
    {
        icon: <Target className="w-8 h-8 text-accent-blue" />,
        title: "Customization",
        description: "System logic and automation flows designed specifically for how your team already works.",
        delay: 0.4
    },
    {
        icon: <Crosshair className="w-8 h-8 text-accent-green" />,
        title: "Ongoing Optimization",
        description: "Continuous monitoring and adjustment to ensure stability as your business grows.",
        delay: 0.6
    }
];

export function SlideWhyUs({ isActive, direction }) {
    if (!isActive) return null;

    return (
        <Slide isActive={isActive} direction={direction}>
            <div className="w-full flex flex-col h-full justify-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-sm font-bold tracking-widest text-[#FF3D00] uppercase mb-4 focus outline-none">
                        Our Philosophy
                    </h2>
                    <h3 className="text-6xl font-black text-white mb-6">
                        Why Us
                    </h3>
                </motion.div>

                <div className="grid grid-cols-3 gap-12 w-full max-w-6xl mx-auto">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: pillar.delay, ease: "easeOut" }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative shadow-xl">
                                {/* Glow effect */}
                                <div className={`absolute inset-0 bg-current opacity-20 blur-xl rounded-full ${idx === 0 ? 'text-primary' : idx === 1 ? 'text-accent-blue' : 'text-accent-green'
                                    }`} />
                                {pillar.icon}
                            </div>

                            <h4 className="text-2xl font-bold text-white mb-4">{pillar.title}</h4>
                            <p className="text-lg text-text-muted leading-relaxed">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-24 text-center"
                >
                    <div className="inline-block px-10 py-5 bg-gradient-to-r from-primary/20 via-background-dark to-accent-blue/20 border border-white/10 rounded-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent-blue/10 animate-pulse mix-blend-overlay" />
                        <span className="text-2xl text-white font-medium relative z-10 tracking-wide">
                            "We build applied AI, <strong className="text-primary font-bold">not experiments.</strong>"
                        </span>
                    </div>
                </motion.div>
            </div>
        </Slide>
    );
}
