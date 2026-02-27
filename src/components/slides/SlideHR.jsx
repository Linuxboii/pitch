import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileSearch, UserCheck, CalendarDays, Activity, AlertCircle, Database } from 'lucide-react';
import { Slide } from './Slide';

export function SlideHR({ isActive, direction }) {
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
                            Fourth Pillar
                        </h2>
                        <h3 className="text-5xl font-black text-white mb-6 leading-tight flex items-center gap-4">
                            HR
                            <span className="text-2xl font-normal text-text-muted mt-2">The Power Department</span>
                        </h3>

                        <p className="text-xl text-text-muted/80 mb-8 border-l-2 border-primary pl-4">
                            A business grows only when the right people are in the right roles.
                        </p>

                        <div className="space-y-6">
                            {/* Problem */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl"
                            >
                                <h4 className="text-red-400 font-medium mb-1">Recruitment Takes Time</h4>
                                <p className="text-text-muted text-sm">Screening resumes • Shortlisting • Scheduling interviews</p>
                            </motion.div>

                            {/* Solution Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="bg-white/5 border border-white/10 p-4 rounded-xl"
                                >
                                    <FileSearch className="w-5 h-5 text-accent-green mb-2" />
                                    <h4 className="text-white text-sm font-bold mb-1">Smart Hiring</h4>
                                    <ul className="text-xs text-text-muted space-y-1">
                                        <li>• Filters resumes automatically</li>
                                        <li>• Matches skills with roles</li>
                                        <li>• Shortlists candidates</li>
                                    </ul>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="bg-white/5 border border-white/10 p-4 rounded-xl"
                                >
                                    <Activity className="w-5 h-5 text-accent-blue mb-2" />
                                    <h4 className="text-white text-sm font-bold mb-1">Employee Mgmt</h4>
                                    <ul className="text-xs text-text-muted space-y-1">
                                        <li>• Tracks attendance</li>
                                        <li>• Monitors performance</li>
                                        <li>• Identifies workflow gaps</li>
                                    </ul>
                                </motion.div>
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* Right Side: Visualizer */}
                <div className="w-1/2 h-[600px] flex flex-col justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="bg-background-dark border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden h-[500px]"
                    >
                        {/* Glow effect */}
                        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-green/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-4">
                            <div className="flex items-center gap-3">
                                <Users className="w-6 h-6 text-accent-green" />
                                <span className="text-white font-bold tracking-wide">Workforce Analytics</span>
                            </div>
                            <span className="flex items-center gap-2 text-xs text-accent-green bg-accent-green/10 px-3 py-1 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                                Structured
                            </span>
                        </div>

                        {/* Animated Nodes flow */}
                        <div className="relative z-10 h-64 flex items-center justify-center">

                            <motion.div
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md z-20"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.5 }}
                            >
                                <Database className="w-6 h-6 text-white/50 mb-2" />
                                <div className="text-xs font-bold text-white mb-1">100+ Resumes</div>
                                <div className="text-[10px] text-text-muted">Inbound Applications</div>
                            </motion.div>

                            <motion.div
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 2, type: "spring" }}
                            >
                                <div className="w-20 h-20 rounded-full border-2 border-accent-green/30 border-t-accent-green animate-spin pointer-events-none" />
                                <UserCheck className="w-8 h-8 text-accent-green absolute" />
                            </motion.div>

                            <motion.div
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-accent-green/10 border border-accent-green/20 p-4 rounded-xl backdrop-blur-md z-20"
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 2.5 }}
                            >
                                <div className="flex -space-x-2 mb-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-background-darker" />
                                    ))}
                                </div>
                                <div className="text-xs font-bold text-accent-green mb-1">Top 3 Candidates</div>
                                <div className="text-[10px] text-text-muted">Shortlisted & Scheduled</div>
                            </motion.div>

                            {/* Connecting Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30">
                                <motion.path
                                    d="M 100 128 L 220 128"
                                    stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none"
                                    className="text-accent-green"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: 2.2, duration: 1 }}
                                />
                                <motion.path
                                    d="M 280 128 L 380 128"
                                    stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none"
                                    className="text-accent-green"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: 2.7, duration: 1 }}
                                />
                            </svg>

                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3.5, duration: 0.8 }}
                            className="absolute bottom-8 left-8 right-8 text-center p-4 bg-primary/10 border border-primary/20 rounded-xl"
                        >
                            <p className="text-primary-light font-bold flex items-center justify-center gap-2">
                                <AlertCircle className="w-5 h-5 text-primary" />
                                HR becomes structured. Decisions become data-based.
                            </p>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}
