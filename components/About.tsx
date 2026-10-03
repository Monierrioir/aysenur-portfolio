"use client";

import { motion } from "motion/react";

const interests = [
    "SOC & Defensive Security",
    "Detection Engineering",
    "Network Security",
    "Applied AI",
    "Software Systems",
];

export default function About() {
    return (
        <section
            id="about"
            className="relative bg-[#e7e1d7] px-6 py-28 text-[#181714] md:px-10 md:py-40"
        >
            <div className="mx-auto max-w-7xl">
                {/* Small intro */}
                <div className="grid gap-16 lg:grid-cols-[0.35fr_0.65fr]">
                    <div>
                        <p
                            className="font-mono text-[10px] uppercase
                         tracking-[0.28em] text-[#7d776d]"
                        >
                            A little context
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2
                            className="max-w-4xl font-serif text-5xl
                         leading-[1.02] tracking-[-0.045em]
                         md:text-7xl"
                        >
                            I&apos;m a Computer Engineer who likes
                            <span className="italic text-[#766a5d]">
                {" "}taking things apart
              </span>{" "}
                            to understand how they work.
                        </h2>

                        <div
                            className="mt-14 grid gap-10
                         md:grid-cols-2"
                        >
                            <p className="text-base leading-8 text-[#575249]">
                                My work moves between cybersecurity, software
                                development and data. I&apos;ve worked on machine
                                learning and data-analysis projects, explored
                                defensive security, and built personal software
                                projects simply because I wanted to see whether
                                an idea could become something real.
                            </p>

                            <p className="text-base leading-8 text-[#575249]">
                                I studied Computer Engineering at Çukurova
                                University and spent part of my academic journey
                                at Lublin University of Technology in Poland.
                                I&apos;m especially interested in environments where
                                research, experimentation and practical engineering
                                meet.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Desk note */}
                <div
                    className="mt-28 grid gap-12 border-t
                     border-[#c9c1b5] pt-10
                     lg:grid-cols-[0.35fr_0.65fr]"
                >
                    <div>
                        <p
                            className="font-serif text-2xl italic
                         text-[#766a5d]"
                        >
                            Currently on my desk →
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2">
                        {interests.map((interest, index) => (
                            <div
                                key={interest}
                                className="flex items-baseline gap-5
                           border-b border-[#c9c1b5]
                           py-5"
                            >
                <span
                    className="font-mono text-[9px]
                             tracking-[0.2em]
                             text-[#9a9286]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                                <span
                                    className="text-lg tracking-[-0.02em]
                             text-[#37332e]"
                                >
                  {interest}
                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Small personal note */}
                <div
                    className="mt-28 flex justify-end"
                >
                    <p
                        className="max-w-xl font-serif text-2xl
                       italic leading-9 text-[#766a5d]"
                    >
                        “Most of what I know started with wanting to
                        understand one more thing than I did yesterday.”
                    </p>
                </div>
            </div>
        </section>
    );
}