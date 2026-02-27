import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PhoneCall, Globe, Search, CalendarPlus, Clock, Zap, CheckCircle2 } from 'lucide-react';
import { Slide } from './Slide';

export function SlideSales({ isActive, direction }) {
    if (!isActive) return null;

    return (
        <Slide isActive={isActive} direction={direction}>
            <div className="w-full flex items-center h-full gap-12 max-w-7xl mx-auto">
                {/* Left Side: Content */}
                <div className="w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Second Pillar
                        </h2>
                        <h3 className="text-5xl font-black text-white mb-6 leading-tight">
                            Sales & <br />Lead Conversion
                        </h3>

                        <p className="text-xl text-text-muted/80 mb-6 border-l-2 border-primary pl-4">
                            Marketing brings leads. But leads don’t come only during office hours.
                        </p>

                        <div className="space-y-4 mb-8">
                            <p className="text-text-muted">
                                They come when you are with a client, at a family function, or even sleeping. <br />
                                <strong className="text-red-400 font-medium mt-2 inline-block">Miss that lead? You lose that customer forever.</strong>
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Clock, title: "24/7 Smart Assistant", desc: "For self-employed professionals" },
                                { icon: Zap, title: "2 Employees' Workload", desc: "Reduced for entrepreneurs" }
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + idx * 0.1 }}
                                    className="bg-primary/10 border border-primary/20 rounded-xl p-4"
                                >
                                    <stat.icon className="w-6 h-6 text-primary mb-2" />
                                    <div className="text-white font-bold">{stat.title}</div>
                                    <div className="text-xs text-text-muted mt-1">{stat.desc}</div>
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>
                </div>

                {/* Right Side: AI Automation Interface */}
                <div className="w-1/2 h-[600px] flex flex-col justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="bg-background-dark border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
                    >
                        {/* Glow effect */}
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent-green/20 rounded-full blur-[100px] pointer-events-none" />

                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-accent-green/20 border border-accent-green/30 flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6 text-accent-green" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">AvlokAI Agent</h4>
                                    <p className="text-accent-green text-xs font-medium tracking-wider uppercase flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                                        Instant Response Mode
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <PhoneCall className="w-5 h-5 text-white/40" />
                                <Globe className="w-5 h-5 text-white/40" />
                            </div>
                        </div>

                        <div className="space-y-4 relative z-10">
                            {[
                                { text: "Detects serious customers by keywords", icon: Search, delay: 1.0 },
                                { text: "Replies in multiple languages (Voice/Text/Video)", icon: Globe, delay: 1.4 },
                                { text: "Prioritizes high-interest leads automatically", icon: Zap, delay: 1.8 },
                                { text: "Schedules meetings & adds to calendar", icon: CalendarPlus, delay: 2.2 }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: feature.delay, duration: 0.5 }}
                                    className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors"
                                >
                                    <feature.icon className="w-5 h-5 text-accent-green" />
                                    <span className="text-white/90 font-medium text-sm">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3, duration: 0.8 }}
                            className="mt-8 bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex justify-between items-center relative z-10"
                        >
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-400" />
                                <span className="text-green-400 font-bold">No missed leads.</span>
                            </div>
                            <span className="text-text-muted text-sm">More conversions.</span>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}
