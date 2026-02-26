import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, HeartPulse } from 'lucide-react';
import { Slide } from './Slide';

const problems = [
    {
        icon: <Clock className="w-8 h-8 text-primary" />,
        title: "Missed Revenue",
        description: "Because speed matters. Responding late or quoting slowly leaves money on the table."
    },
    {
        icon: <AlertCircle className="w-8 h-8 text-accent-blue" />,
        title: "Operational Inefficiency",
        description: "Because manual work scales poorly. Too much time spent replacing repetitive tasks."
    },
    {
        icon: <HeartPulse className="w-8 h-8 text-accent-green" />,
        title: "Stress",
        description: "Because growth adds complexity. You’re working hard, but processes still feel reactive."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function SlideProblem({ isActive, direction }) {
    return (
        <Slide isActive={isActive} direction={direction}>
            <div className="w-full flex">
                <div className="w-1/3 pr-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">The Problem</h2>
                        <h3 className="text-5xl font-bold text-white mb-6 leading-tight">
                            Most businesses don't <br />need more software.
                        </h3>
                        <p className="text-2xl text-text-muted">
                            They need <strong className="text-white font-medium">structured automation</strong> that works quietly in the background.
                        </p>
                    </motion.div>
                </div>

                <div className="w-2/3">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-2 gap-6"
                    >
                        {problems.map((problem, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="bg-background-dark/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm"
                            >
                                <div className="p-3 bg-white/5 inline-block rounded-xl mb-6">
                                    {problem.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{problem.title}</h4>
                                <p className="text-text-muted leading-relaxed">{problem.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Slide>
    );
}
