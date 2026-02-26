import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, CheckCircle2 } from 'lucide-react';
import { Slide } from './Slide';

export function SlideDemoWhatsApp({ isActive, direction }) {
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
                        <h2 className="text-sm font-bold tracking-widest text-accent-green uppercase mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                            Live Deployment
                        </h2>
                        <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                            WhatsApp Lead <br />Automation
                        </h3>

                        <div className="space-y-6 mt-12">
                            <div className="flex gap-4">
                                <div className="p-2 bg-red-500/10 rounded-lg h-fit">
                                    <Users className="w-5 h-5 text-red-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">The Approach</h4>
                                    <p className="text-text-muted text-sm">Replies instantly, answers common questions, qualifies serious inquiries, and routes important leads.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-2 bg-accent-green/10 rounded-lg h-fit">
                                    <CheckCircle2 className="w-5 h-5 text-accent-green" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">The Impact</h4>
                                    <p className="text-text-muted text-sm">Even while you sleep, your business responds.</p>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3, duration: 1 }}
                            className="mt-12 p-4 bg-white/5 border border-white/10 rounded-xl"
                        >
                            <p className="text-lg text-white font-medium italic">
                                "These aren't experiments. <br />
                                <span className="text-accent-green">They're practical systems that remove repetitive work.</span>"
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="w-2/3 flex justify-center scale-90 origin-right">
                    <div className="w-[350px] h-[650px] bg-[#0b141a] border-8 border-gray-800 rounded-[3rem] overflow-hidden relative shadow-2xl flex flex-col">
                        <div className="absolute top-0 inset-x-0 h-6 bg-black z-20 flex justify-center rounded-t-3xl">
                            <div className="w-24 h-4 bg-black rounded-b-xl" />
                        </div>

                        <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3 relative z-10 pt-8">
                            <div className="w-10 h-10 rounded-full bg-accent-green/20 flex items-center justify-center">
                                <MessageSquare className="w-5 h-5 text-accent-green" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium text-sm">AvlokAI Assistant</h4>
                                <span className="text-xs text-text-muted">always online</span>
                            </div>
                        </div>

                        <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden relative">
                            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                            <motion.div
                                className="bg-[#202c33] text-white p-3 rounded-2xl rounded-tl-sm max-w-[85%] self-start text-sm relative z-10 shadow-sm"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                Hi there! I'm interested in automating our customer support.
                                <span className="text-[10px] text-white/50 absolute bottom-1 right-2">2:30 PM</span>
                            </motion.div>

                            <motion.div
                                className="bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-sm max-w-[85%] self-end text-sm relative z-10 shadow-sm"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5 }}
                            >
                                Hello! 👋 I'm the AvlokAI automated assistant. I'd be happy to help you with that. Are you currently using any specific CRM or support ticketing tool?
                                <span className="text-[10px] text-white/50 absolute bottom-1 right-2">2:30 PM</span>
                            </motion.div>

                            <motion.div
                                className="bg-[#202c33] text-white p-3 rounded-2xl rounded-tl-sm max-w-[85%] self-start text-sm relative z-10 shadow-sm mt-2"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.5 }}
                            >
                                Yes, we use HubSpot right now, but it's very manual.
                                <span className="text-[10px] text-white/50 absolute bottom-1 right-2">2:31 PM</span>
                            </motion.div>

                            <motion.div
                                className="bg-[#005c4b] text-white p-3 rounded-2xl rounded-tr-sm max-w-[85%] self-end text-sm relative z-10 shadow-sm border border-accent-green/30"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 4 }}
                            >
                                Perfect. We have a pre-built HubSpot routing framework. Would you like me to schedule a 15-minute technical breakdown with our CTO for tomorrow?
                                <div className="mt-3 flex gap-2">
                                    <button className="flex-1 bg-white/10 py-1.5 rounded-lg text-center font-medium hover:bg-white/20 transition-colors">Yes, schedule</button>
                                    <button className="flex-1 bg-white/10 py-1.5 rounded-lg text-center font-medium hover:bg-white/20 transition-colors">See pricing</button>
                                </div>
                                <span className="text-[10px] text-white/50 absolute bottom-1 right-2">2:31 PM</span>
                            </motion.div>

                        </div>

                    </div>
                </div>
            </div>
        </Slide>
    );
}
