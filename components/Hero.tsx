"use client";

import { motion } from "motion/react";

export default function Hero() {
    return (
        <section
            id="top"
            className="relative min-h-screen overflow-hidden bg-[#0b0b0a] px-6 pb-12 pt-36 md:px-10 md:pt-44"
        >
            <div className="mx-auto flex min-h-[calc(100vh-11rem)] max-w-7xl flex-col justify-between">
                {/* Top note */}
                <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-sm font-mono text-[10px] uppercase leading-5 tracking-[0.22em] text-[#77746d]"
                    >
                        Computer Engineering
                        <br />
                        Çukurova University · 2021—2026
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="max-w-xs text-sm leading-6 text-[#77746d] md:text-right"
                    >
                        Cybersecurity, software development,
                        data analysis and applied research.
                    </motion.p>
                </div>

                {/* Main title */}
                <div className="py-20 md:py-28">
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "110%" }}
                            animate={{ y: "0%" }}
                            transition={{
                                duration: 1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="font-serif text-[clamp(4.8rem,13vw,12rem)]
                         leading-[0.75] tracking-[-0.075em] text-[#ebe9e2]"
                        >
                            Ayşenur
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: "110%" }}
                            animate={{ y: "0%" }}
                            transition={{
                                duration: 1,
                                delay: 0.08,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="ml-[12vw] font-serif
                         text-[clamp(4.8rem,13vw,12rem)]
                         italic leading-[0.75]
                         tracking-[-0.075em] text-[#ebe9e2]"
                        >
                            Ekiz.
                        </motion.h1>
                    </div>
                </div>

                {/* Bottom */}
                <div
                    className="grid gap-8 border-t border-[#272622] pt-6
                     md:grid-cols-[1fr_1fr_auto]"
                >
                    <p className="max-w-md text-sm leading-7 text-[#96928a]">
                        I like understanding systems from both sides:
                        how they are built, how they behave and where they fail.
                    </p>

                    <div className="font-mono text-[10px] uppercase leading-6 tracking-[0.2em] text-[#77746d]">
                        <p>Security</p>
                        <p>Software</p>
                        <p>Data & AI</p>
                    </div>

                    <a
                        href="#about"
                        className="self-end font-mono text-[10px]
                       uppercase tracking-[0.22em]
                       text-[#c89b6d] transition
                       hover:text-[#ebe9e2]"
                    >
                        Keep scrolling ↓
                    </a>
                </div>
            </div>

            {/* Small editorial mark */}
            <div
                className="pointer-events-none absolute right-[-30px] top-[38%]
                   hidden rotate-90 font-mono text-[9px]
                   uppercase tracking-[0.4em]
                   text-[#3d3a35] lg:block"
            >
                Personal workspace / portfolio
            </div>
        </section>
    );
}