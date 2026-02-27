import React from 'react';
import { motion } from 'framer-motion';
import { Eye, TrendingUp, BarChart3, Zap, Crosshair, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Slide } from './Slide';

export function SlideManagement({ isActive, direction }) {
    if (!isActive) return null;

    const pillars = [
        { label: "Marketing", status: "Automated", delay: 0.2 },
        { label: "Sales", status: "Organized", delay: 0.4 },
        { label: "Billing", status: "Streamlined", delay: 0.6 },
        { label: "Logistics", status: "Tracked", delay: 0.8 },
        { label: "HR", status: "Structured", delay: 1.0 }
    ];

    return (
        <Slide isActive={isActive} direction={direction}>
            <div className="w-full flex items-center h-full gap-12 max-w-7xl mx-auto">
                {/* Left Side: Recap & The Payoff */}
                <div className="w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Fifth Pillar
                        </h2>
                        <h3 className="text-5xl font-black text-white mb-6 leading-tight flex items-center gap-4">
                            Management
                        </h3>

                        <div className="mb-8">
                            <p className="text-text-muted text-sm uppercase tracking-wider mb-4 font-bold">The Transformation</p>
                            <div className="grid grid-cols-2 gap-3">
                                {pillars.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: item.delay }}
                                        className="flex items-center gap-2 text-sm text-white/80"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                        <span><span className="font-bold text-white">{item.label}</span> {item.status}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                            className="bg-primary/10 border border-primary/20 p-6 rounded-2xl relative overflow-hidden"
                        >
                            {/* Animated beam */}
                            <motion.div
                                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            />
                            <h4 className="text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-2">
                                Clarity.
                            </h4>
                            <p className="text-text-muted mt-2 leading-relaxed">
                                No guessing. No assumptions. Only smart decisions.
                            </p>
                        </motion.div>

                    </motion.div>
                </div>

                {/* Right Side: Visualizing Clarity & ROI */}
                <div className="w-1/2 h-[600px] flex flex-col justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="bg-background-dark border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between"
                    >
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                        <div>
                            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                                <Eye className="w-6 h-6 text-primary" />
                                <span className="text-white font-bold tracking-wide">Command Center Vision</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { text: "Where leads come from", icon: Crosshair, delay: 2.0 },
                                    { text: "Where sales close", icon: BarChart3, delay: 2.2 },
                                    { text: "Where problems exist", icon: Zap, delay: 2.4 },
                                    { text: "Where to improve", icon: TrendingUp, delay: 2.6 }
                                ].map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: stat.delay }}
                                        className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col gap-2"
                                    >
                                        <stat.icon className="w-5 h-5 text-text-muted" />
                                        <span className="text-sm font-medium text-white/90">{stat.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3.5, duration: 1 }}
                                className="text-center"
                            >
                                <h3 className="text-3xl font-black text-white mb-2">Grow 10X</h3>
                                <p className="text-primary-light text-sm">with half the marketing expense you are spending today.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 4.5, duration: 1 }}
                                className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl text-center backdrop-blur-md"
                            >
                                <p className="text-lg font-bold text-white mb-1">
                                    Let’s build businesses that work for us — <br />
                                    <span className="text-text-muted font-normal text-sm block mt-2">not businesses that exhaust us.</span>
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}
