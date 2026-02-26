import React from 'react';
import { FadeIn } from './FadeIn';
import { Clock, TrendingDown, DollarSign } from 'lucide-react';

export const Positioning = () => {
    const cards = [
        {
            icon: <Clock className="w-8 h-8 text-primary-orange" />,
            title: "Manual Bottlenecks",
            desc: "Hours lost daily to repetitive administrative tasks and unqualified lead filtering."
        },
        {
            icon: <TrendingDown className="w-8 h-8 text-rose-500" />,
            title: "Missed Opportunities",
            desc: "Slow response times lead to dropped conversations and lost revenue."
        },
        {
            icon: <DollarSign className="w-8 h-8 text-primary-emerald" />,
            title: "Exploding CPI",
            desc: "Customer acquisition costs are rising while organic reach continues to plummet."
        }
    ];

    return (
        <section className="min-h-screen w-full snap-start flex flex-col justify-center items-center bg-transparent text-slate-100 py-24 px-4 relative">
            <div className="max-w-6xl mx-auto w-full z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <p className="font-mono text-primary-orange tracking-widest uppercase mb-4 text-sm">
                            The Problem
                        </p>
                        <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-primary-orange">
                            THE COST OF INACTION
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                            Every day you delay artificial intelligence adoption, your competitors pull further ahead.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => {
                        const floatClasses = ['animate-float-slow', 'animate-float-delayed', 'animate-float-more-delayed'];
                        return (
                            <FadeIn key={index} delay={0.2 + (index * 0.2)} direction="up">
                                <div className={`h-full bg-neutral-900/50 backdrop-blur-md border border-primary-emerald/20 rounded-2xl p-8 ${floatClasses[index % 3]}`}>
                                    <div className="bg-neutral-950 p-4 rounded-xl inline-block mb-6 shadow-inner border border-primary-emerald/30 animate-glow-pulse">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 font-sans text-neutral-200">
                                        {card.title}
                                    </h3>
                                    <p className="text-neutral-300 leading-relaxed">
                                        {card.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
