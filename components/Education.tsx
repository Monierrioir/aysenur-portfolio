"use client";

import { motion } from "motion/react";

const education = [
    {
        number: "01",
        location: "Adana / Türkiye",
        institution: "Çukurova University",
        program: "Computer Engineering",
        period: "2021 — 2026",
        type: "Bachelor's Degree",
        description:
            "Computer Engineering education focused on software, systems, networking, data-driven technologies and engineering problem solving.",
    },
    {
        number: "02",
        location: "Lublin / Poland",
        institution: "Lublin University of Technology",
        program: "Erasmus Exchange",
        period: "International Experience",
        type: "Exchange Program",
        description:
            "An international academic experience that strengthened cross-cultural collaboration, adaptability and experience working in a different academic environment.",
    },
];

export default function Education() {
    return (
        <section
            id="education"
            className="relative overflow-hidden border-t border-white/10
                 bg-[#07090d] px-6 py-32 md:px-10"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex items-center gap-4"
                >
          <span className="text-xs tracking-[0.35em] text-white/30">
            07
          </span>

                    <div className="h-px w-16 bg-white/15" />

                    <span
                        className="text-xs uppercase tracking-[0.35em]
                       text-white/30"
                    >
            Education
          </span>
                </motion.div>

                {/* Main heading */}
                <div
                    className="mt-14 grid gap-12
                     lg:grid-cols-[1fr_0.6fr] lg:items-end"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.9,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="text-5xl font-semibold leading-[0.95]
                       tracking-[-0.05em] text-white md:text-8xl"
                    >
                        Learning across
                        <br />

                        <span className="text-white/25">
              borders.
            </span>
                    </motion.h2>

                    <p
                        className="max-w-md text-sm leading-7
                       text-white/35"
                    >
                        My academic journey combines engineering education
                        with international experience and project-based learning.
                    </p>
                </div>

                {/* Route */}
                <div className="relative mt-24">
                    {/* desktop connection line */}
                    <div
                        className="absolute left-0 right-0 top-[23px]
                       hidden h-px bg-white/10 lg:block"
                    />

                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                        {education.map((item, index) => (
                            <motion.article
                                key={item.institution}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    duration: 0.75,
                                    delay: index * 0.12,
                                }}
                                className="relative"
                            >
                                {/* Point */}
                                <div className="mb-10 flex items-center gap-4">
                                    <div
                                        className="relative z-10 flex h-12 w-12
                               items-center justify-center
                               rounded-full border border-white/15
                               bg-[#07090d]"
                                    >
                                        <div className="h-2 w-2 rounded-full bg-cyan-300" />
                                    </div>

                                    <span
                                        className="text-[10px] uppercase
                               tracking-[0.3em]
                               text-white/25"
                                    >
                    {item.location}
                  </span>
                                </div>

                                <div className="pl-0 lg:pl-3">
                                    <div
                                        className="flex items-center gap-4
                               text-[10px] uppercase
                               tracking-[0.28em]
                               text-white/20"
                                    >
                                        <span>{item.number}</span>
                                        <span>/</span>
                                        <span>{item.type}</span>
                                    </div>

                                    <h3
                                        className="mt-6 text-3xl font-medium
                               tracking-[-0.035em]
                               text-white md:text-5xl"
                                    >
                                        {item.institution}
                                    </h3>

                                    <p
                                        className="mt-4 text-lg
                               tracking-[-0.02em]
                               text-white/50"
                                    >
                                        {item.program}
                                    </p>

                                    <p
                                        className="mt-3 font-mono
                               text-xs text-cyan-300/60"
                                    >
                                        {item.period}
                                    </p>

                                    <p
                                        className="mt-8 max-w-xl
                               text-sm leading-7
                               text-white/35"
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>

                {/* International marker */}
                <div
                    className="mt-24 grid gap-8 border-t
                     border-white/10 pt-8
                     md:grid-cols-[150px_1fr]"
                >
          <span
              className="text-[10px] uppercase
                       tracking-[0.3em] text-white/20"
          >
            Perspective
          </span>

                    <p
                        className="max-w-3xl text-xl leading-9
                       tracking-[-0.02em] text-white/50"
                    >
                        Engineering gave me the technical foundation.
                        International experience added a broader perspective
                        on collaboration, learning and adapting to unfamiliar
                        environments.
                    </p>
                </div>
            </div>
        </section>
    );
}