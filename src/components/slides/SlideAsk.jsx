import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Network, GitBranch } from 'lucide-react';
import { Slide } from './Slide';

const requirements = [
    { label: "Engineering Talent", icon: <Code2 className="w-6 h-6 text-primary" /> },
    { label: "API Provider Access", icon: <Network className="w-6 h-6 text-accent-blue" /> },
    { label: "Go-to-Market Capital", icon: <GitBranch className="w-6 h-6 text-accent-green" /> }
];

export function SlideAsk({ isActive, direction }) {
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
                        <h2 className="text-sm font-bold tracking-widest text-[#FFD600] uppercase mb-4">
                            Call to Action
                        </h2>
                        <h3 className="text-6xl font-black text-white mb-12 leading-tight">
                            Building the <br />Infrastructure Layer
                        </h3>

                        <p className="text-xl text-text-muted mb-8 leading-relaxed">
                            We are raising capital to:
                        </p>

                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-4 text-white text-lg font-medium"
                            >
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                Accelerate framework expansion
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-4 text-white text-lg font-medium"
                            >
                                <span className="w-2 h-2 rounded-full bg-accent-blue" />
                                Increase implementation capacity
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex items-center gap-4 text-white text-lg font-medium"
                            >
                                <span className="w-2 h-2 rounded-full bg-accent-green" />
                                Lock in early market share
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                <div className="w-1/2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-gradient-to-br from-background-dark to-[#1a1f2e] border border-white/10 rounded-3xl p-12 relative overflow-hidden shadow-2xl"
                    >
                        <h4 className="text-2xl font-bold text-white mb-10 text-center">Required Resources</h4>

                        <div className="space-y-4 mb-16">
                            {requirements.map((req, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + (idx * 0.1) }}
                                    className="flex items-center gap-6 p-4 bg-white/5 border border-white/10 rounded-xl"
                                >
                                    <div className="p-3 bg-black/30 rounded-lg">
                                        {req.icon}
                                    </div>
                                    <span className="text-xl font-bold text-white">{req.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5, duration: 1 }}
                            >
                                <p className="text-text-muted text-lg mb-2">
                                    AI is infrastructure.
                                </p>
                                <p className="text-2xl font-bold text-white">
                                    We intend to build that layer. Let's discuss.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}
