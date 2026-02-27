import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calculator, Truck, MapPin, BellRing, Settings, CheckCircle2 } from 'lucide-react';
import { Slide } from './Slide';

export function SlideOperations({ isActive, direction }) {
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
                            Third Pillar
                        </h2>
                        <h3 className="text-5xl font-black text-white mb-6 leading-tight">
                            Operations, <br />Billing & Logistics
                        </h3>

                        <p className="text-xl text-text-muted/80 mb-6 border-l-2 border-primary pl-4">
                            AI does not replace your expertise. It supports your system.
                        </p>

                        <div className="space-y-6 mt-10">
                            {/* Billing Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-white/5 border border-white/10 p-5 rounded-2xl relative"
                            >
                                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                                    <Calculator className="w-3 h-3 text-white" />
                                </div>
                                <h4 className="text-white font-bold ml-4 mb-2">Billing & Accounts</h4>
                                <p className="text-text-muted text-sm ml-4 mb-3">
                                    How much time goes into invoices, entries, follow-ups?
                                </p>
                                <ul className="ml-4 space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-primary" /> Professional e-bills via simple keywords</li>
                                    <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-primary" /> Accounts maintained automatically</li>
                                </ul>
                            </motion.div>

                            {/* Logistics Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="bg-white/5 border border-white/10 p-5 rounded-2xl relative"
                            >
                                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-accent-blue flex items-center justify-center">
                                    <Truck className="w-3 h-3 text-white" />
                                </div>
                                <h4 className="text-white font-bold ml-4 mb-2">Logistics</h4>
                                <ul className="ml-4 space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-accent-blue" /> Automatic consignment tracking</li>
                                    <li className="flex items-center gap-2 text-sm text-white/80"><CheckCircle2 className="w-4 h-4 text-accent-blue" /> Real-time status & instant alerts</li>
                                </ul>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: System UI */}
                <div className="w-1/2 h-[600px] flex flex-col justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="bg-background-dark border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden h-[500px]"
                    >
                        {/* Glow effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-4 relative z-10">
                            <div className="flex items-center gap-3">
                                <Settings className="w-6 h-6 text-accent-blue animate-[spin_4s_linear_infinite]" />
                                <span className="text-white font-bold tracking-wide uppercase">System Intelligence</span>
                            </div>
                            <span className="text-xs text-text-muted bg-white/5 px-3 py-1 rounded-full">Automated</span>
                        </div>

                        {/* Animated Processing Flow */}
                        <div className="flex flex-col gap-6 relative z-10">

                            {/* Invoice Flow */}
                            <div className="flex items-center justify-between bg-primary/10 border border-primary/20 p-4 rounded-xl relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
                                    animate={{ transform: ['translateX(-100%)', 'translateX(100%)'] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                />
                                <div className="flex items-center gap-4 relative z-10">
                                    <FileText className="w-6 h-6 text-primary" />
                                    <div>
                                        <div className="text-white font-medium text-sm">Invoice Generated</div>
                                        <div className="text-text-muted text-xs">Sent to customer instantly</div>
                                    </div>
                                </div>
                                <CheckCircle2 className="w-5 h-5 text-primary relative z-10" />
                            </div>

                            {/* Tracking Flow */}
                            <div className="flex items-center justify-between bg-accent-blue/10 border border-accent-blue/20 p-4 rounded-xl relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-accent-blue/0 via-accent-blue/20 to-accent-blue/0"
                                    animate={{ transform: ['translateX(-100%)', 'translateX(100%)'] }}
                                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 1 }}
                                />
                                <div className="flex items-center gap-4 relative z-10">
                                    <MapPin className="w-6 h-6 text-accent-blue" />
                                    <div>
                                        <div className="text-white font-medium text-sm">Live Location Tracking</div>
                                        <div className="text-text-muted text-xs">Consignment en route</div>
                                    </div>
                                </div>
                                <BellRing className="w-5 h-5 text-accent-blue relative z-10 animate-bounce" />
                            </div>

                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.5, duration: 0.8 }}
                            className="absolute bottom-8 left-8 right-8 text-center p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md"
                        >
                            <p className="text-xl font-bold bg-gradient-to-r from-white via-accent-blue to-white bg-clip-text text-transparent">
                                Instead of chasing updates — <br />
                                <span className="text-white">you receive updates.</span>
                            </p>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}
