"use client";

import { motion } from "motion/react";

const tools = [
    {
        name: "Python",
        note: "data analysis, automation, machine learning",
    },
    {
        name: "Linux",
        note: "systems, security labs, command-line workflows",
    },
    {
        name: "Wireshark",
        note: "network traffic inspection and analysis",
    },
    {
        name: "C / C++",
        note: "programming foundations and systems thinking",
    },
    {
        name: "TypeScript",
        note: "modern web development and structured applications",
    },
    {
        name: "Next.js",
        note: "web applications, personal projects and interfaces",
    },
    {
        name: "React",
        note: "interactive interfaces and component-based development",
    },
    {
        name: "SQL",
        note: "working with structured data",
    },
    {
        name: "Pandas",
        note: "data cleaning, exploration and analysis",
    },
    {
        name: "Git",
        note: "version control and project workflows",
    },
    {
        name: "Networking",
        note: "traffic, protocols and defensive security foundations",
    },
    {
        name: "Machine Learning",
        note: "forecasting, experimentation and model comparison",
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="bg-[#d8d1c5] px-6 py-28 text-[#181714] md:px-10 md:py-40"
        >
            <div className="mx-auto max-w-7xl">

                {/* Intro */}
                <div className="grid gap-16 lg:grid-cols-[0.35fr_0.65fr]">
                    <div>
                        <p
                            className="font-mono text-[10px] uppercase
                         tracking-[0.28em] text-[#7d776d]"
                        >
                            Things I use
                        </p>
                    </div>

                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl font-serif text-5xl
                         leading-[1.02] tracking-[-0.045em]
                         md:text-7xl"
                        >
                            Tools change.
                            <br />

                            <span className="italic text-[#766a5d]">
                The way I learn them doesn&apos;t.
              </span>
                        </motion.h2>

                        <p
                            className="mt-9 max-w-2xl text-base
                         leading-8 text-[#575249]"
                        >
                            I tend to learn tools when a project gives me a reason
                            to use them. Some belong to security, some to data,
                            some to software — most overlap more than the labels suggest.
                        </p>
                    </div>
                </div>

                {/* Tools */}
                <div
                    className="mt-24 border-t
                     border-[#bcb4a8]"
                >
                    {tools.map((tool, index) => (
                        <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.025,
                            }}
                            className="group grid gap-4 border-b
                         border-[#bcb4a8] py-6
                         sm:grid-cols-[55px_0.45fr_0.55fr]
                         sm:items-baseline"
                        >
              <span
                  className="font-mono text-[9px]
                           tracking-[0.2em]
                           text-[#978e82]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

                            <h3
                                className="font-serif text-2xl
                           tracking-[-0.025em]
                           text-[#27241f]
                           transition-transform duration-300
                           group-hover:translate-x-2
                           md:text-3xl"
                            >
                                {tool.name}
                            </h3>

                            <p
                                className="text-sm leading-6
                           text-[#6a645b]"
                            >
                                {tool.note}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Closing note */}
                <div
                    className="mt-20 grid gap-10
                     lg:grid-cols-[0.35fr_0.65fr]"
                >
                    <div>
            <span
                className="font-mono text-[9px]
                         uppercase tracking-[0.24em]
                         text-[#978e82]"
            >
              No percentage bars.
            </span>
                    </div>

                    <p
                        className="max-w-3xl font-serif
                       text-2xl italic leading-9
                       text-[#766a5d]"
                    >
                        I&apos;d rather show where I used a technology
                        than assign myself a percentage for it.
                    </p>
                </div>
            </div>
        </section>
    );
}