import React from 'react';
import { FadeIn } from './FadeIn';

export const Hero = () => {
    return (
        <section className="h-screen w-full snap-start flex flex-col justify-center items-center bg-transparent text-slate-100 relative overflow-hidden px-4">
            {/* Background glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-emerald/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center z-10">
                <FadeIn delay={0.2}>
                    <h1 className="text-5xl md:text-7xl font-sans font-extrabold tracking-tight leading-tight mb-8">
                        <span className="block text-neutral-300">WASTED TIME.</span>
                        <span className="block text-neutral-400">LOST SALES.</span>
                        <span className="block bg-gradient-to-r from-emerald-400 to-primary-emerald text-transparent bg-clip-text">
                            SLOW GROWTH.
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <p className="text-xl md:text-2xl text-neutral-400 font-sans max-w-3xl mx-auto mb-12">
                        The status quo is silently eroding your margins.
                        Legacy systems are holding back your true potential.
                    </p>
                </FadeIn>

            </div>
        </section>
    );
};
