import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Calendar, Share2, Layers, CheckCircle, TrendingUp, Sparkles, Youtube, Instagram, Facebook } from 'lucide-react';
import { Slide } from './Slide';

export function SlideMarketing({ isActive, direction }) {
    if (!isActive) return null;

    return (
        <Slide isActive={isActive} direction={direction}>
            <div className="w-full flex items-center h-full gap-12 max-w-7xl mx-auto">
                {/* Left Side: Content & Problem */}
                <div className="w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            First Pillar
                        </h2>
                        <h3 className="text-5xl font-black text-white mb-6 leading-tight">
                            Marketing
                        </h3>
                        <p className="text-xl text-text-muted/80 mb-8 border-l-2 border-primary pl-4">
                            Without marketing, nothing moves.
                        </p>

                        <div className="grid grid-cols-3 gap-4 mb-10">
                            {[
                                { icon: Layers, label: "Network" },
                                { icon: Share2, label: "Social Media" },
                                { icon: Sparkles, label: "Branding" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                                >
                                    <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                                    <span className="text-sm font-medium text-white/90">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="p-5 bg-red-500/10 border border-red-500/20 rounded-xl"
                            >
                                <h4 className="text-red-400 font-medium mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                    The Old Way
                                </h4>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    Creating content, thinking of captions, posting manually. <br />
                                    <span className="text-white">Outsource = spend money. DIY = spend time.</span> <br />
                                    Inconsistent visibility, slow growth.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: AvlokAI Solution */}
                <div className="w-1/2 h-[600px] flex flex-col justify-center relative relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="bg-background-dark border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden h-[500px] flex flex-col"
                    >
                        {/* Background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="text-center mb-8 relative z-10">
                            <h4 className="text-2xl font-bold text-white mb-2">Reduce 80% of Effort</h4>
                            <h5 className="text-lg font-medium text-accent-green mb-2">Reduces 50% of the cost</h5>
                            <p className="text-primary-light text-sm">AvlokAI handles consistency silently.</p>
                        </div>

                        <div className="flex-1 relative z-10 flex flex-col justify-around">

                            {/* Animated Engine Steps */}
                            <div className="space-y-4">
                                {[
                                    { text: "Content generated automatically", icon: CheckCircle, delay: 1.5 },
                                    { text: "Posts scheduled with timers", icon: Calendar, delay: 2.0 },
                                    { text: "Published regularly across platforms", icon: TrendingUp, delay: 2.5 }
                                ].map((step, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: step.delay, duration: 0.5 }}
                                        className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                            <step.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-white/90 font-medium">{step.text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Platforms pulse */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 3, duration: 0.5 }}
                                className="flex justify-center gap-6 mt-8"
                            >
                                {[
                                    { icon: Youtube, color: "text-red-500", label: "YouTube" },
                                    { icon: Instagram, color: "text-pink-500", label: "Instagram" },
                                    { icon: Facebook, color: "text-blue-500", label: "Facebook" }
                                ].map((platform, idx) => (
                                    <motion.div
                                        key={idx}
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ repeat: Infinity, duration: 2, delay: idx * 0.2, ease: "easeInOut" }}
                                        className="flex flex-col items-center gap-2"
                                    >
                                        <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]`}>
                                            <platform.icon className={`w-6 h-6 ${platform.color}`} />
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                        </div>

                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}
