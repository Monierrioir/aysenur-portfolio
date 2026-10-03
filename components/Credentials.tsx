"use client";

import { motion } from "motion/react";

const credentials = [
    {
        issuer: "Cisco",
        title: "Introduction to Cybersecurity",
        type: "Cybersecurity",
    },
    {
        issuer: "Cisco / NDG",
        title: "Linux Essentials",
        type: "Linux",
    },
    {
        issuer: "Cisco",
        title: "Networking Course",
        type: "Networking",
    },
    {
        issuer: "Siber Vatan",
        title: "Siber Vatan 2025",
        type: "Cybersecurity",
    },
    {
        issuer: "Turkcell Akademi",
        title: "Temel Network Eğitimi",
        type: "Networking",
    },
    {
        issuer: "Turkcell Akademi",
        title: "Siber Güvenlik Eğitimi",
        type: "Cybersecurity",
    },
];

export default function Credentials() {
    return (
        <section
            id="credentials"
            className="bg-[#0b0b0a] px-6 py-28 text-[#ebe9e2] md:px-10 md:py-40"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-16 lg:grid-cols-[0.35fr_0.65fr]">
                    <div>
                        <p
                            className="font-mono text-[10px] uppercase
                         tracking-[0.28em] text-[#77746d]"
                        >
                            Credentials
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
                            Courses helped with the foundations.
                            <span className="italic text-[#817b72]">
                {" "}
                                Projects made them useful.
              </span>
                        </motion.h2>
                    </div>
                </div>

                <div className="mt-24 border-t border-[#2b2925]">
                    {credentials.map((credential, index) => (
                        <motion.div
                            key={`${credential.issuer}-${credential.title}`}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.04,
                            }}
                            className="grid gap-5 border-b border-[#2b2925]
                         py-7 md:grid-cols-[55px_0.35fr_0.5fr_0.15fr]
                         md:items-baseline"
                        >
              <span
                  className="font-mono text-[9px]
                           tracking-[0.2em]
                           text-[#55514b]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

                            <span
                                className="font-mono text-[9px]
                           uppercase tracking-[0.22em]
                           text-[#77746d]"
                            >
                {credential.issuer}
              </span>

                            <h3
                                className="font-serif text-2xl
                           tracking-[-0.025em]
                           text-[#d8d3ca]
                           md:text-3xl"
                            >
                                {credential.title}
                            </h3>

                            <span
                                className="font-mono text-[9px]
                           uppercase tracking-[0.2em]
                           text-[#5f5b55]
                           md:text-right"
                            >
                {credential.type}
              </span>
                        </motion.div>
                    ))}
                </div>

                <div
                    className="mt-16 grid gap-8
                     lg:grid-cols-[0.35fr_0.65fr]"
                >
                    <div />

                    <p
                        className="max-w-2xl font-serif text-2xl
                       italic leading-9 text-[#817b72]"
                    >
                        Certificates document a starting point.
                        I prefer the rest of this site to show what happened after it.
                    </p>
                </div>
            </div>
        </section>
    );
}