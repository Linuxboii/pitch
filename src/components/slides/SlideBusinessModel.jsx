import React from 'react';
import { motion } from 'framer-motion';
import { Settings, RefreshCw, Network } from 'lucide-react';
import { Slide } from './Slide';

const models = [
    {
        icon: <Settings className="w-6 h-6 text-primary" />,
        title: "Understand",
        subtitle: "Stage 1",
        description: "We map out your existing workflow to identify exactly where manual tasks are creating friction."
    },
    {
        icon: <RefreshCw className="w-6 h-6 text-accent-blue" />,
        title: "Design",
        subtitle: "Stage 2",
        description: "We design automation specific to your business—not off-the-shelf software, but tailored systems."
    },
    {
        icon: <Network className="w-6 h-6 text-accent-green" />,
        title: "Implement",
        subtitle: "Stage 3",
        description: "We deploy the system directly into your operations and maintain its stability."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function SlideBusinessModel({ isActive, direction }) {
    return (
        <Slide isActive={isActive} direction={direction}>
            <div className="w-full flex flex-col h-full justify-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">The Process</h2>
                    <h3 className="text-5xl font-bold text-white mb-6">
                        How We Work With You
                    </h3>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        We don't sell subscriptions and disappear. <strong className="text-white font-medium">It's tailored implementation.</strong>
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-3 gap-8 w-full max-w-5xl mx-auto"
                >
                    {models.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="bg-background-dark border border-white/5 rounded-2xl p-8 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10" />

                            <div className="p-4 bg-white/5 inline-block rounded-2xl mb-8 relative z-10">
                                {item.icon}
                            </div>

                            <h4 className="text-2xl font-bold text-white mb-2 relative z-10">{item.title}</h4>
                            <div className="text-sm font-medium tracking-wider text-text-muted/70 uppercase mb-6 relative z-10">{item.subtitle}</div>

                            <p className="text-text-muted leading-relaxed relative z-10">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Slide>
    );
}
