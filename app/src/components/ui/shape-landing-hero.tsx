"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-slate-500/[0.02] dark:from-slate-400/[0.04]",
    hideOnMobile = false,
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
    hideOnMobile?: boolean;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", hideOnMobile ? "hidden md:block" : "", className)}
        >
            <motion.div
                animate={{
                    y: [0, 6, 0],
                }}
                transition={{
                    duration: 24,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[1px] md:backdrop-blur-[2px] border border-black/[0.01] dark:border-white/[0.02]",
                        "shadow-[0_8px_32px_0_rgba(0,0,0,0.01)] dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.02)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}
