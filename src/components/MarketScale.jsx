import React from 'react';
import { FadeIn } from './FadeIn';
import { Globe, Users, TrendingUp } from 'lucide-react';

export const MarketScale = () => {
    const stats = [
        {
            value: "5B+",
            label: "Social Media Users",
            desc: "An endless addressable market waiting for your content."
        },
        {
            value: "2.7B",
            label: "WhatsApp Activity",
            desc: "The world's most ubiquitous messaging platform, automated."
        },
        {
            value: "10X",
            label: "Conversion Lift",
            desc: "Compared to traditional email marketing and cold calling."
        }
    ];

    return (
        <section className="min-h-screen w-full snap-start flex flex-col justify-center items-center bg-transparent text-slate-100 py-24 px-4 relative">
            <div className="max-w-6xl mx-auto w-full z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-rose-500">
                                Uncapped Market Scale
                            </span>
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                            You are no longer constrained by human hours. Your capacity to scale is now infinite.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => {
                        const floatClasses = ['animate-float-slow', 'animate-float-delayed', 'animate-float-more-delayed'];
                        return (
                            <FadeIn key={index} delay={0.2 + (index * 0.2)} direction="up">
                                <div className={`text-center ${floatClasses[index % 3]}`}>
                                    <div className="text-6xl font-sans font-black mb-4 text-transparent bg-clip-text bg-gradient-to-br from-primary-orange to-rose-500 animate-glow-pulse">
                                        {stat.value}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-neutral-200">
                                        {stat.label}
                                    </h3>
                                    <p className="text-neutral-400 leading-relaxed font-mono text-sm max-w-xs mx-auto">
                                        {stat.desc}
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
