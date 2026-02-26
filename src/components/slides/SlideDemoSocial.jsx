import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { Slide } from './Slide';

export function SlideDemoSocial({ isActive, direction }) {
    if (!isActive) return null;

    return (
        <Slide isActive={isActive} direction={direction}>
            <div className="w-full flex items-center h-full">
                <div className="w-1/3 pr-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Live Deployment
                        </h2>
                        <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                            Social Media <br />Autoposting
                        </h3>

                        <div className="space-y-6 mt-12">
                            <div className="flex gap-4">
                                <div className="p-2 bg-red-500/10 rounded-lg h-fit">
                                    <Calendar className="w-5 h-5 text-red-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">The Approach</h4>
                                    <p className="text-text-muted text-sm">Generates captions aligned with your brand, schedules content, and publishes across platforms.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-2 bg-accent-green/10 rounded-lg h-fit">
                                    <CheckCircle2 className="w-5 h-5 text-accent-green" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">The Impact</h4>
                                    <p className="text-text-muted text-sm">You approve content—the system handles execution. Visibility without daily effort.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="w-2/3 h-[600px] bg-background-dark border border-white/5 rounded-2xl overflow-hidden relative shadow-2xl flex flex-col scale-90 origin-right">
                    {/* Simplified UI representation for the slide */}
                    <div className="border-b border-white/10 p-4 bg-white/5 flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <span className="text-white/30 text-xs font-medium tracking-wider">Social Automation Engine</span>
                    </div>

                    <div className="flex-1 p-8 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background-dark to-background-darker">

                        <motion.div
                            className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md w-64"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <Camera className="w-6 h-6 text-primary mb-4" />
                            <div className="h-2 w-3/4 bg-white/10 rounded-full mb-3" />
                            <div className="h-2 w-1/2 bg-white/10 rounded-full mb-4" />
                            <div className="text-xs text-primary font-medium">Image Uploaded</div>
                        </motion.div>

                        <motion.div
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1, type: "spring" }}
                        >
                            <ArrowRight className="w-8 h-8 text-white/20" />
                        </motion.div>

                        <motion.div
                            className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/5 border border-primary/30 p-6 rounded-xl backdrop-blur-md w-64 shadow-[0_0_30px_rgba(255,87,34,0.1)]"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-xs text-primary font-medium tracking-wider uppercase">AI Processing</span>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 bg-white/20 rounded-full w-full relative overflow-hidden">
                                    <motion.div
                                        className="absolute inset-y-0 left-0 bg-primary"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
                                    />
                                </div>
                                <div className="text-[10px] text-text-muted flex justify-between">
                                    <span>Generating Captions</span>
                                    <span>Scheduling</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </Slide>
    );
}
