import React from 'react';
import { FadeIn } from './FadeIn';
import { Home, Calculator, CloudLightning } from 'lucide-react';

export const DemoRealEstate = () => {
    const cards = [
        {
            icon: <Home className="w-8 h-8 text-indigo-600" />,
            title: "Property Context",
            desc: "Pulls in localized market conditions and comparative sales data."
        },
        {
            icon: <Calculator className="w-8 h-8 text-rose-500" />,
            title: "Precision Modeling",
            desc: "Delivers highly accurate value estimates in seconds."
        },
        {
            icon: <CloudLightning className="w-8 h-8 text-cyan-600" />,
            title: "Dynamic Reports",
            desc: "Generates beautiful PDF reports sent directly to the client."
        }
    ];

    return (
        <section className="min-h-screen w-full snap-start flex flex-col justify-center items-center bg-transparent text-slate-100 py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-80" />

            <div className="max-w-6xl mx-auto w-full z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary-emerald">
                                Instant Valuation
                            </span>
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                            Provide immense upfront value. Generate precise property estimates on demand to capture listings faster.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => {
                        const floatClasses = ['animate-float-slow', 'animate-float-delayed', 'animate-float-more-delayed'];
                        return (
                            <FadeIn key={index} delay={0.2 + (index * 0.15)} direction="up">
                                <div className={`h-full bg-background-dark/50 backdrop-blur-md border border-slate-700 shadow-2xl shadow-blue-500/10 rounded-3xl p-8 ${floatClasses[index % 3]}`}>
                                    <div className="bg-neutral-900 p-4 rounded-xl inline-block mb-6 shadow-inner border border-blue-500/30 animate-glow-pulse">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 font-sans text-neutral-200">
                                        {card.title}
                                    </h3>
                                    <p className="text-neutral-300 leading-relaxed text-base">
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
