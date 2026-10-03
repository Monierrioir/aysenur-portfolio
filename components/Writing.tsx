"use client";

import Link from "next/link";
import { motion } from "motion/react";

const notes = [
    {
        date: "Oct 2026",
        category: "Software / Design",
        title: "How I Built MYTHOS",
        description:
            "Designing an interactive mythology platform around long-form storytelling, cultural identity and exploration.",
        readTime: "10 min",
        href: "/writing/how-i-built-mythos",
        available: true,
    },
    {
        date: "2026",
        category: "Cybersecurity / Research",
        title: "Federated Intrusion Detection Against Poisoning Attacks",
        description:
            "Notes from my research on federated learning, poisoning attacks and malicious model updates.",
        readTime: "12 min",
        href: "#",
        available: false,
    },
    {
        date: "2026",
        category: "Machine Learning",
        title: "What Demand Forecasting Taught Me About Real Data",
        description:
            "Why preprocessing, feature engineering and understanding the problem matter before model selection.",
        readTime: "8 min",
        href: "#",
        available: false,
    },
];

export default function Writing() {
    return (
        <section
            id="writing"
            className="bg-[#e7e1d7] px-6 py-28 text-[#181714] md:px-10 md:py-40"
        >
            <div className="mx-auto max-w-7xl">
                {/* Intro */}
                <div className="grid gap-16 lg:grid-cols-[0.35fr_0.65fr]">
                    <div>
                        <p
                            className="font-mono text-[10px] uppercase
                         tracking-[0.28em] text-[#7d776d]"
                        >
                            Notes from my desk
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
                            Things I wanted to
                            <span className="italic text-[#766a5d]">
                {" "}
                                understand better.
              </span>
                        </motion.h2>

                        <p
                            className="mt-8 max-w-2xl text-base
                         leading-8 text-[#575249]"
                        >
                            Technical notes, project journals and research observations.
                            Some begin as questions, some come from things I have built,
                            and some simply became interesting enough to write down.
                        </p>
                    </div>
                </div>

                {/* Notes */}
                <div className="mt-24 border-t border-[#c9c1b5]">
                    {notes.map((note, index) => {
                        const content = (
                            <>
                                {/* Date */}
                                <div>
                                    <p
                                        className="font-mono text-[9px] uppercase
                               tracking-[0.22em] text-[#948c81]"
                                    >
                                        {note.date}
                                    </p>

                                    <p
                                        className="mt-2 font-mono text-[9px]
                               uppercase tracking-[0.22em]
                               text-[#b07d52]"
                                    >
                                        {note.category}
                                    </p>
                                </div>

                                {/* Main */}
                                <div>
                                    <h3
                                        className="max-w-3xl font-serif text-3xl
                               leading-[1.05] tracking-[-0.03em]
                               text-[#292622]
                               transition-transform duration-300
                               group-hover:translate-x-2
                               md:text-4xl"
                                    >
                                        {note.title}
                                    </h3>

                                    <p
                                        className="mt-4 max-w-2xl
                               text-sm leading-7
                               text-[#69635a]"
                                    >
                                        {note.description}
                                    </p>
                                </div>

                                {/* Meta */}
                                <div
                                    className="flex items-start justify-between
                             gap-6 md:block md:text-right"
                                >
                                    <p
                                        className="font-mono text-[9px]
                               uppercase tracking-[0.22em]
                               text-[#948c81]"
                                    >
                                        {note.readTime}
                                    </p>

                                    <span
                                        className="mt-4 inline-block
                               font-serif text-2xl
                               italic text-[#766a5d]
                               md:mt-6"
                                    >
                    {note.available ? "read →" : "soon"}
                  </span>
                                </div>
                            </>
                        );

                        if (note.available) {
                            return (
                                <motion.div
                                    key={note.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{
                                        duration: 0.65,
                                        delay: index * 0.05,
                                    }}
                                >
                                    <Link
                                        href={note.href}
                                        className="group grid gap-6
                               border-b border-[#c9c1b5]
                               py-9
                               md:grid-cols-[120px_1fr_auto]"
                                    >
                                        {content}
                                    </Link>
                                </motion.div>
                            );
                        }

                        return (
                            <motion.article
                                key={note.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    duration: 0.65,
                                    delay: index * 0.05,
                                }}
                                className="group grid gap-6
                           border-b border-[#c9c1b5]
                           py-9 opacity-55
                           md:grid-cols-[120px_1fr_auto]"
                            >
                                {content}
                            </motion.article>
                        );
                    })}
                </div>

                {/* Bottom */}
                <div
                    className="mt-14 flex flex-col gap-6
                     sm:flex-row sm:items-center
                     sm:justify-between"
                >
                    <p
                        className="font-mono text-[9px]
                       uppercase tracking-[0.24em]
                       text-[#948c81]"
                    >
                        Notebook / 03 entries
                    </p>

                    <Link
                        href="/writing"
                        className="font-serif text-lg
                       italic text-[#766a5d]
                       transition-colors
                       hover:text-[#181714]"
                    >
                        Open the notebook →
                    </Link>
                </div>
            </div>
        </section>
    );
}