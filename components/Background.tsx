"use client";

import { motion } from "motion/react";

const chapters = [
    {
        marker: "2021",
        title: "Computer Engineering",
        place: "Çukurova University",
        location: "Adana, Türkiye",
        text:
            "I began studying Computer Engineering and built my technical foundation across programming, systems, networking and engineering problem solving.",
        note: "2021 — 2026",
    },
    {
        marker: "RESEARCH",
        title: "Wildfire Data Analysis",
        place: "TÜBİTAK Research Project",
        location: "Türkiye",
        text:
            "Research became a different way of working with technology: not only building something, but asking better questions, working with imperfect data and interpreting what the results actually mean.",
        note: "Data · Analysis · Research",
    },
    {
        marker: "POLAND",
        title: "A different academic environment",
        place: "Lublin University of Technology",
        location: "Lublin, Poland",
        text:
            "My Erasmus exchange gave me the chance to study in a different academic environment and experience collaboration, communication and everyday life outside the setting I was used to.",
        note: "Erasmus Exchange",
    },
    {
        marker: "DATA",
        title: "Data Analyst Internship",
        place: "Universal Yazılım",
        location: "Industry Experience",
        text:
            "I contributed to a Personnel Lifetime Analysis project, working with employee lifecycle data and examining patterns related to continuity and retention.",
        note: "Analytics · Employee Lifecycle",
    },
    {
        marker: "ML",
        title: "Machine Learning Internship",
        place: "EFA İnovasyon",
        location: "Industry Experience",
        text:
            "I worked on product demand forecasting, moving through preprocessing, feature engineering and model experimentation to better understand how forecasting systems behave on real data.",
        note: "Machine Learning · Forecasting",
    },
    {
        marker: "2026",
        title: "Graduation, but not the end of learning",
        place: "Computer Engineering",
        location: "What comes next",
        text:
            "I graduated with interests that sit between several areas rather than inside only one: cybersecurity, software engineering, data and applied research.",
        note: "Build · Explore · Understand",
    },
];

export default function Background() {
    return (
        <section
            id="background"
            className="bg-[#0b0b0a] px-6 py-28 text-[#ebe9e2] md:px-10 md:py-40"
        >
            <div className="mx-auto max-w-7xl">

                {/* Intro */}
                <div className="grid gap-16 lg:grid-cols-[0.35fr_0.65fr]">
                    <div>
                        <p
                            className="font-mono text-[10px] uppercase
                         tracking-[0.28em] text-[#77746d]"
                        >
                            A few chapters
                        </p>
                    </div>

                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-5xl font-serif text-5xl
                         leading-[1] tracking-[-0.05em]
                         md:text-7xl"
                        >
                            Not a straight line.
                            <br />

                            <span className="italic text-[#817b72]">
                More like a collection of turns.
              </span>
                        </motion.h2>

                        <p
                            className="mt-9 max-w-2xl text-base
                         leading-8 text-[#8e8980]"
                        >
                            University, research, internships and an exchange
                            semester shaped different parts of how I approach
                            engineering today.
                        </p>
                    </div>
                </div>

                {/* Chapters */}
                <div className="mt-32">
                    {chapters.map((chapter, index) => (
                        <motion.article
                            key={`${chapter.marker}-${chapter.title}`}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.04,
                            }}
                            className="grid gap-8 border-t border-[#2b2925]
                         py-12 md:grid-cols-[150px_1fr]
                         lg:grid-cols-[180px_0.75fr_0.25fr]"
                        >
                            {/* Marker */}
                            <div>
                <span
                    className="font-serif text-4xl italic
                             tracking-[-0.04em]
                             text-[#5e5a53]"
                >
                  {chapter.marker}
                </span>
                            </div>

                            {/* Main */}
                            <div>
                                <p
                                    className="font-mono text-[9px] uppercase
                             tracking-[0.25em]
                             text-[#77746d]"
                                >
                                    {chapter.place}
                                </p>

                                <h3
                                    className="mt-5 max-w-3xl font-serif
                             text-4xl leading-[1]
                             tracking-[-0.04em]
                             text-[#ebe9e2]
                             md:text-5xl"
                                >
                                    {chapter.title}
                                </h3>

                                <p
                                    className="mt-7 max-w-2xl text-sm
                             leading-7 text-[#817d75]"
                                >
                                    {chapter.text}
                                </p>
                            </div>

                            {/* Side note */}
                            <div className="lg:text-right">
                                <p
                                    className="font-mono text-[9px] uppercase
                             leading-5 tracking-[0.22em]
                             text-[#5f5b55]"
                                >
                                    {chapter.location}
                                </p>

                                <p
                                    className="mt-4 font-serif text-lg
                             italic leading-6
                             text-[#8d867c]"
                                >
                                    {chapter.note}
                                </p>
                            </div>
                        </motion.article>
                    ))}

                    <div className="border-t border-[#2b2925]" />
                </div>

                {/* Closing note */}
                <div
                    className="mt-24 grid gap-12
                     lg:grid-cols-[0.35fr_0.65fr]"
                >
                    <div />

                    <p
                        className="max-w-3xl font-serif text-3xl
                       italic leading-[1.35]
                       tracking-[-0.025em]
                       text-[#847d73] md:text-4xl"
                    >
                        I don&apos;t see these as separate experiences.
                        Each one changed the kinds of questions I wanted
                        to ask next.
                    </p>
                </div>
            </div>
        </section>
    );
}