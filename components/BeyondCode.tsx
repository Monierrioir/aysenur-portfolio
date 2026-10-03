"use client";

import { motion } from "motion/react";

const communities = [
    {
        title: "Çukurova Siber Community",
        role: "Co-Founder",
        text:
            "Helped shape a student-led cybersecurity community focused on learning, sharing and creating a stronger technical environment around security.",
    },
    {
        title: "CENGA",
        role: "Technical Team Coordinator",
        text:
            "Worked on technical coordination, team organization and supporting community-driven engineering activities.",
    },
    {
        title: "Yazılım Çukurova",
        role: "Coordination Team Leader",
        text:
            "Led coordination efforts across community activities, helping organize people, communication and event-related workflows.",
    },
    {
        title: "HSD Çukurova",
        role: "Project & Competition Team Member",
        text:
            "Contributed to project and competition-oriented work within a student technology community.",
    },
];

export default function BeyondCode() {
    return (
        <section
            id="beyond-code"
            className="bg-[#e7e1d7] px-6 py-28 text-[#181714] md:px-10 md:py-40"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-16 lg:grid-cols-[0.35fr_0.65fr]">
                    <div>
                        <p
                            className="font-mono text-[10px] uppercase
                         tracking-[0.28em] text-[#7d776d]"
                        >
                            Beyond code
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
                            Some of the best things
                            <span className="italic text-[#766a5d]">
                {" "}happen around people.
              </span>
                        </motion.h2>

                        <p className="mt-9 max-w-2xl text-base leading-8 text-[#575249]">
                            Communities gave me room to organize, collaborate and learn
                            outside formal coursework. They also taught me that technical
                            work is rarely only technical.
                        </p>
                    </div>
                </div>

                <div className="mt-24 border-t border-[#c9c1b5]">
                    {communities.map((item, index) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.05,
                            }}
                            className="grid gap-6 border-b border-[#c9c1b5]
                         py-10 md:grid-cols-[65px_0.8fr_1.2fr]"
                        >
              <span
                  className="font-mono text-[9px]
                           tracking-[0.2em]
                           text-[#9a9286]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

                            <div>
                                <h3
                                    className="font-serif text-3xl
                             tracking-[-0.03em]
                             text-[#292622]"
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="mt-3 font-serif text-lg
                             italic text-[#8b7968]"
                                >
                                    {item.role}
                                </p>
                            </div>

                            <p
                                className="max-w-2xl text-sm
                           leading-7 text-[#69635a]"
                            >
                                {item.text}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}