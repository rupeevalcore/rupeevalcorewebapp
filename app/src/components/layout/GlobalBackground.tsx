"use client";

import { ElegantShape } from "@/components/ui/shape-landing-hero";

export default function GlobalBackground() {
    return (
        <div 
            className="fixed inset-0 overflow-hidden pointer-events-none -z-10"
            aria-hidden="true"
        >
            <ElegantShape
                delay={0.3}
                width={600}
                height={140}
                rotate={12}
                gradient="from-slate-500/[0.02] dark:from-slate-400/[0.04]"
                className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
            />

            <ElegantShape
                delay={0.5}
                width={500}
                height={120}
                rotate={-15}
                gradient="from-accent/[0.02] dark:from-accent/[0.04]"
                className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
            />

            <ElegantShape
                delay={0.4}
                width={300}
                height={80}
                rotate={-8}
                gradient="from-primary/[0.01] dark:from-primary/[0.04]"
                className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                hideOnMobile={true}
            />

            <ElegantShape
                delay={0.6}
                width={200}
                height={60}
                rotate={20}
                gradient="from-slate-400/[0.01] dark:from-white/[0.03]"
                className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                hideOnMobile={true}
            />

            <ElegantShape
                delay={0.7}
                width={150}
                height={40}
                rotate={-25}
                gradient="from-accent/[0.01] dark:from-accent/[0.03]"
                className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                hideOnMobile={true}
            />
        </div>
    );
}
