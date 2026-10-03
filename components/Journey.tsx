"use client";

import { motion } from "motion/react";

const milestones = [
    {
        year: "2021",
        title: "Computer Engineering",
        text: "Started building a foundation in software, systems, networks and problem solving.",
    },
    {
        year: "2022",
        title: "Building More",
        text: "Moved from coursework into larger personal projects and hands-on experimentation.",
    },
    {
        year: "2023",
        title: "Exploring Security",
        text: "Focused more deeply on cybersecurity, system behavior and defensive security concepts.",
    },
    {
        year: "2026",
        title: "Graduation",
        text: "Graduated in Computer Engineering and continued building across security, software and data.",
    },
];

export default function Journey() {
    return (
        <section
            id="journey"
            className="relative overflow-hidden border-t border-white/10 bg-[#07090d] px-6 py-32 md:px-10"
        >
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-4"
                >
          <span className="text-xs tracking-[0.35em] text-white/30">
            05
          </span>

                    <div className="h-px w-16 bg-white/15" />

                    <span className="text-xs uppercase tracking-[0.35em] text-white/30">
            Journey
          </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.9,
                        delay: 0.1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mt-12 max-w-5xl text-5xl font-semibold
                     leading-[0.95] tracking-[-0.05em]
                     text-white md:text-8xl"
                >
                    Still learning.
                    <br />
                    <span className="text-white/30">Always building.</span>
                </motion.h2>

                <div className="relative mt-24">
                    <div className="absolute bottom-0 left-[15px] top-0 w-px bg-white/10 md:left-1/2" />

                    <div className="space-y-20">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.35 }}
                                transition={{
                                    duration: 0.75,
                                    delay: 0.05,
                                }}
                                className={`relative grid gap-8 pl-12 md:grid-cols-2 md:pl-0 ${
                                    index % 2 === 0 ? "" : "md:text-right"
                                }`}
                            >
                                <div
                                    className={`${
                                        index % 2 === 0
                                            ? "md:pr-20"
                                            : "md:col-start-2 md:pl-20"
                                    }`}
                                >
                  <span className="text-xs tracking-[0.3em] text-cyan-300/70">
                    {item.year}
                  </span>

                                    <h3 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-white md:text-4xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-5 text-sm leading-7 text-white/40">
                                        {item.text}
                                    </p>
                                </div>

                                <div
                                    className={`absolute left-[9px] top-2 h-3 w-3
                              rounded-full border border-cyan-300/60
                              bg-[#07090d]
                              md:left-1/2 md:-translate-x-1/2`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}