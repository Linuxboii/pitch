import React from 'react';
import { FadeIn } from './FadeIn';
import { Share2, Image as ImageIcon, MessageCircle, BarChart3 } from 'lucide-react';

export const DemoSocial = () => {
    const features = [
        {
            icon: <ImageIcon className="w-6 h-6 text-primary-emerald" />,
            title: "Auto-Generation",
            desc: "Creates on-brand visuals automatically based on property details."
        },
        {
            icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
            title: "Smart Captions",
            desc: "Writes compelling copy optimized for specific platforms."
        },
        {
            icon: <Share2 className="w-6 h-6 text-indigo-500" />,
            title: "Omnichannel",
            desc: "Distributes simultaneously across Instagram, Facebook, and LinkedIn."
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-primary-orange" />,
            title: "Performance",
            desc: "Tracks engagement and continuously improves future content."
        }
    ];

    return (
        <section className="min-h-screen w-full snap-start flex flex-col justify-center items-center bg-transparent text-slate-100 py-24 px-4 relative overflow-hidden">
            {/* Subtle radial gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-emerald/10 via-transparent to-transparent opacity-60" />

            <div className="max-w-6xl mx-auto w-full z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary-emerald">
                                Intelligent Social Media
                            </span>
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                            Stop manually drafting posts. Our agent handles your entire social media presence with <b className="text-white">zero human intervention</b> needed.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => {
                        const floatClasses = ['animate-float-slow', 'animate-float-delayed', 'animate-float-more-delayed', 'animate-float-slow'];
                        return (
                            <FadeIn key={index} delay={0.2 + (index * 0.1)} direction="up">
                                <div className={`h-full bg-background-dark/50 backdrop-blur-xl border border-slate-700 shadow-2xl shadow-primary-emerald/10 rounded-2xl p-6 ${floatClasses[index % 4]}`}>
                                    <div className="bg-neutral-900 p-3 rounded-xl inline-block mb-4 shadow-inner border border-primary-emerald/30 animate-glow-pulse">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 font-sans text-neutral-200">
                                        {feature.title}
                                    </h3>
                                    <p className="text-neutral-300 text-sm leading-relaxed">
                                        {feature.desc}
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
