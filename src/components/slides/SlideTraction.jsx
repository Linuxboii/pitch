import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Server, Zap } from 'lucide-react';
import { Slide } from './Slide';

const metrics = [
    { label: "Faster Response Times", value: "Instant", icon: <Zap className="w-5 h-5 text-primary" /> },
    { label: "Higher Lead Conversion", value: "+40%", icon: <Activity className="w-5 h-5 text-accent-blue" /> },
    { label: "More Consistent Operations", value: "24/7", icon: <Server className="w-5 h-5 text-accent-green" /> }
];

export function SlideTraction({ isActive, direction }) {
    if (!isActive) return null;

    return (
        <Slide isActive={isActive} direction={direction}>
            <div className="w-full flex items-center h-full">
                <div className="w-1/2 pr-16 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-[#00E5FF] uppercase mb-4 flex items-center gap-2">
                            The Outcome
                        </h2>
                        <h3 className="text-5xl font-bold text-white mb-6 leading-tight">
                            Real-World <br />Impact
                        </h3>
                        <p className="text-xl text-text-muted mb-12">
                            AI should not complicate your business. It should simplify it. <strong className="text-white font-medium">That's what we focus on — stability and reliability.</strong>
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {metrics.map((metric, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + (idx * 0.1), duration: 0.5 }}
                                    className={`bg-white/5 border border-white/10 rounded-2xl p-6 ${idx === 2 ? 'col-span-2' : ''}`}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-white/5 rounded-lg">
                                            {metric.icon}
                                        </div>
                                    </div>
                                    <div className="text-4xl font-black text-white mb-2">{metric.value}</div>
                                    <div className="text-sm text-text-muted font-medium uppercase tracking-wider">{metric.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="w-1/2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-background-dark/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden"
                    >
                        {/* Abstract background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

                        <div className="relative z-10 flex flex-col gap-6">
                            <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                                System Health Dashboard
                            </h4>

                            {/* Fake Logs */}
                            <div className="bg-black/40 rounded-xl p-4 font-mono text-xs text-text-muted/70 space-y-2 h-[300px] overflow-hidden relative">
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

                                <div className="text-green-400">[2026-02-26 14:22:01] INFO: Social_Engine - Successfully scheduled 14 posts across 3 platforms.</div>
                                <div className="text-blue-400">[2026-02-26 14:23:45] SYSTEM: RealEstate_Val - Syncing latest MLS data... complete.</div>
                                <div className="text-green-400">[2026-02-26 14:25:12] SUCCESS: RealEstate_Val - Generated valuation report ID#8912. Client notified.</div>
                                <div>[2026-02-26 14:28:00] INFO: WhatsApp_Bot - Received inbound lead from +1 (555) 0192.</div>
                                <div className="text-yellow-400">[2026-02-26 14:28:02] PROC: WhatsApp_Bot - Qualifying intent... Intent: High.</div>
                                <div className="text-green-400">[2026-02-26 14:28:05] SUCCESS: WhatsApp_Bot - Appointment scheduled for Tomorrow 10:00 AM. HubSpot updated.</div>
                                <div className="text-blue-400">[2026-02-26 14:30:00] SYSTEM: Core_API - Health check passed. Latency: 42ms.</div>
                                <div>[2026-02-26 14:32:11] INFO: Data_Pipeline - Processing daily batch...</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}
