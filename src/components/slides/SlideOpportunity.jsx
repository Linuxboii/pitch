import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, PlayCircle } from 'lucide-react';
import { Slide } from './Slide';

export function SlideOpportunity({ isActive, direction }) {
    return (
        <Slide isActive={isActive} direction={direction}>
            <div className="w-full flex items-center">
                <div className="w-1/2 pr-16 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent-blue/10 rounded-3xl blur-2xl"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative bg-background-dark/80 backdrop-blur-xl border border-white/10 p-12 rounded-3xl"
                    >
                        <div className="flex items-center gap-4 mb-4 text-accent-blue">
                            <RefreshCw className="w-6 h-6 animate-spin-slow" />
                            <span className="font-bold tracking-widest uppercase text-sm">System Integration</span>
                        </div>
                        <h3 className="text-5xl font-black text-white mb-8">Embedded Automation</h3>

                        <div className="h-px w-full bg-white/10 my-8" />

                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <span className="text-lg text-white font-medium">Leads</span>
                                <span className="text-primary font-bold">Answered instantly</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-lg text-white font-medium">Content</span>
                                <span className="text-accent-blue font-bold">Posts automatically</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-lg text-white font-medium">Pricing</span>
                                <span className="text-accent-green font-bold">Generated reliably</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="w-1/2 pl-8">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6 flex items-center gap-2">
                            <PlayCircle className="w-4 h-4" />
                            The Shift
                        </h2>
                        <h3 className="text-4xl font-bold text-white mb-8 leading-tight">
                            We're not here to sell you <br />another dashboard.<br />
                            <span className="text-primary">We build systems.</span>
                        </h3>

                        <p className="text-xl text-text-muted leading-relaxed mb-12">
                            AI becomes powerful when it’s embedded directly into your daily workflow. Instead of reacting to your business, <strong className="text-white font-medium">your business runs with you.</strong>
                        </p>

                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}
