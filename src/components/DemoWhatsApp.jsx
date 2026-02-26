import React from 'react';
import { FadeIn } from './FadeIn';
import { Bot, Zap, Filter } from 'lucide-react';

export const DemoWhatsApp = () => {
    const features = [
        {
            icon: <Bot className="w-8 h-8 text-emerald-600" />,
            title: "24/7 Response",
            desc: "Answers complex inquiries at 3 AM just as easily as 3 PM."
        },
        {
            icon: <Filter className="w-8 h-8 text-amber-500" />,
            title: "Lead Qualification",
            desc: "Automatically asks qualifying questions to filter out window shoppers."
        },
        {
            icon: <Zap className="w-8 h-8 text-purple-600" />,
            title: "Instant Handover",
            desc: "Seamlessly transfers hot leads to human agents when they're ready to close."
        }
    ];

    return (
        <section className="min-h-screen w-full snap-start flex flex-col justify-center items-center bg-transparent text-slate-100 py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary-emerald/10 via-transparent to-transparent opacity-60" />

            <div className="max-w-6xl mx-auto w-full z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary-emerald">
                                Autonomous WhatsApp Agent
                            </span>
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                            Your fastest path to revenue. The agent engages prospects where they already spend their time.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const floatClasses = ['animate-float-slow', 'animate-float-delayed', 'animate-float-more-delayed'];
                        return (
                            <FadeIn key={index} delay={0.2 + (index * 0.15)} direction="up">
                                <div className={`h-full bg-background-dark/50 backdrop-blur-xl border border-slate-700 shadow-2xl shadow-primary-emerald/10 rounded-2xl p-8 ${floatClasses[index % 3]}`}>
                                    <div className="bg-neutral-900 p-4 rounded-xl inline-block mb-6 shadow-inner border border-primary-emerald/30 animate-glow-pulse">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 font-sans text-neutral-200">
                                        {feature.title}
                                    </h3>
                                    <p className="text-neutral-300 leading-relaxed text-base">
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
