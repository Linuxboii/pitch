import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, CheckCircle2, Clock } from 'lucide-react';
import { Slide } from './Slide';

export function SlideDemoRealEstate({ isActive, direction }) {
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
                        <h2 className="text-sm font-bold tracking-widest text-accent-blue uppercase mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                            Live Deployment
                        </h2>
                        <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                            Real Estate <br />Pricing Engine
                        </h3>

                        <div className="space-y-6 mt-12">
                            <div className="flex gap-4">
                                <div className="p-2 bg-red-500/10 rounded-lg h-fit">
                                    <Clock className="w-5 h-5 text-red-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">The Approach</h4>
                                    <p className="text-text-muted text-sm">Takes property or service inputs, applies structured logic, and generates instant estimates.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-2 bg-accent-green/10 rounded-lg h-fit">
                                    <CheckCircle2 className="w-5 h-5 text-accent-green" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">The Impact</h4>
                                    <p className="text-text-muted text-sm">Reduces response time dramatically. In business, speed builds credibility.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="w-2/3 h-[600px] bg-background-dark border border-white/5 rounded-2xl overflow-hidden relative shadow-2xl flex flex-col scale-90 origin-right">
                    <div className="border-b border-white/10 p-4 bg-white/5 flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <span className="text-white/30 text-xs font-medium tracking-wider">Property Valuation AI</span>
                    </div>

                    <div className="flex-1 p-8 grid grid-cols-2 gap-8 relative overflow-hidden bg-gradient-to-br from-background-dark to-background-darker">

                        <motion.div
                            className="bg-white/5 border border-white/10 rounded-xl p-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <h4 className="text-white font-medium mb-6 text-sm flex items-center gap-2">
                                <Calculator className="w-4 h-4 text-accent-blue" />
                                Property Data Input
                            </h4>

                            <div className="space-y-4">
                                {['Square Footage', 'Location', 'Bedrooms/Bathrooms', 'Year Built'].map((label, idx) => (
                                    <div key={idx} className="space-y-1.5">
                                        <div className="text-xs text-text-muted">{label}</div>
                                        <div className="h-8 bg-white/5 rounded border border-white/10 px-3 flex items-center">
                                            <div className="h-1.5 w-1/3 bg-white/20 rounded-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-accent-blue/5 border border-accent-blue/20 rounded-xl p-6 relative overflow-hidden"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent pointer-events-none" />

                            <h4 className="text-white font-medium mb-6 text-sm flex items-center gap-2">
                                <span className="flex items-center justify-center">
                                    <span className="rounded-full h-2 w-2 bg-accent-blue shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                                </span>
                                AI Valuation Output
                            </h4>

                            <div className="flex flex-col items-center justify-center h-48 space-y-4 relative">
                                <style>
                                    {`
                                        @keyframes slideFadeIn {
                                            from { opacity: 0; transform: translateY(10px); }
                                            to { opacity: 1; transform: translateY(0); }
                                        }
                                        .animate-value-reveal {
                                            opacity: 0;
                                            animation: slideFadeIn 0.8s ease-out 1.5s forwards;
                                        }
                                    `}
                                </style>
                                <div className="w-full flex flex-col items-center animate-value-reveal">
                                    <div className="text-center mt-2">
                                        <div className="text-xs text-text-muted uppercase tracking-widest mb-2">Estimated Value</div>
                                        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-blue">₹1.50 Cr</div>
                                    </div>

                                    <div className="flex gap-4 mt-8">
                                        <div className="text-center">
                                            <div className="text-xs text-accent-green">+5.2%</div>
                                            <div className="text-[10px] text-text-muted uppercase">vs Area Avg</div>
                                        </div>
                                        <div className="w-px h-8 bg-white/10" />
                                        <div className="text-center">
                                            <div className="text-xs text-white">94%</div>
                                            <div className="text-[10px] text-text-muted uppercase">Confidence</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}
