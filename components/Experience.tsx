"use client";

import { motion } from "motion/react";

const experiences = [
    {
        number: "01",
        role: "Machine Learning Intern",
        company: "EFA İnovasyon Danışmanlık ve Teknoloji Ltd. Şti.",
        period: "2026",
        description:
            "Worked on product demand forecasting problems using machine learning models. Contributed to data preprocessing, feature engineering, predictive modelling and the development of a demand forecasting workflow.",
        details: [
            "Demand forecasting",
            "Data preprocessing",
            "Feature engineering",
            "Machine learning",
        ],
    },
    {
        number: "02",
        role: "Data Analyst Intern",
        company: "Universal Yazılım",
        period: "2025",
        description:
            "Contributed to a Personnel Lifetime Analysis project by analysing employee lifecycle data and extracting findings related to personnel continuity, retention and workforce patterns.",
        details: [
            "Data analysis",
            "Employee lifecycle",
            "Retention analysis",
            "Insight generation",
        ],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="border-t border-white/10 bg-[#07090d]
                 px-6 py-32 md:px-10"
        >
            <div className="mx-auto max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex items-center gap-4"
                >
          <span className="text-xs tracking-[0.35em] text-white/30">
            06
          </span>

                    <div className="h-px w-16 bg-white/15" />

                    <span
                        className="text-xs uppercase tracking-[0.35em]
                       text-white/30"
                    >
            Experience
          </span>
                </motion.div>

                <div
                    className="mt-14 grid gap-12
                     lg:grid-cols-[0.8fr_1.2fr]"
                >
                    <div>
                        <h2
                            className="text-5xl font-semibold leading-[0.95]
                         tracking-[-0.05em] text-white
                         md:text-7xl"
                        >
                            Work beyond
                            <br />
                            <span className="text-white/25">
                the classroom.
              </span>
                        </h2>

                        <p
                            className="mt-8 max-w-md text-sm leading-7
                         text-white/35"
                        >
                            Practical experience applying data analysis,
                            machine learning and engineering methods to
                            real-world problems.
                        </p>
                    </div>

                    <div className="border-t border-white/10">
                        {experiences.map((experience) => (
                            <div
                                key={experience.number}
                                className="border-b border-white/10 py-10"
                            >
                                <div
                                    className="grid gap-6
                             md:grid-cols-[55px_1fr_auto]"
                                >
                  <span
                      className="font-mono text-xs
                               tracking-[0.3em]
                               text-white/20"
                  >
                    {experience.number}
                  </span>

                                    <div>
                                        <h3
                                            className="text-2xl font-medium
                                 tracking-[-0.03em]
                                 text-white md:text-3xl"
                                        >
                                            {experience.role}
                                        </h3>

                                        <p
                                            className="mt-2 text-sm
                                 text-white/35"
                                        >
                                            {experience.company}
                                        </p>

                                        <p
                                            className="mt-6 max-w-2xl
                                 text-sm leading-7
                                 text-white/40"
                                        >
                                            {experience.description}
                                        </p>

                                        <div
                                            className="mt-7 grid gap-3
                                 sm:grid-cols-2"
                                        >
                                            {experience.details.map((detail) => (
                                                <div
                                                    key={detail}
                                                    className="border-t
                                     border-white/10
                                     pt-3 text-xs
                                     uppercase
                                     tracking-[0.18em]
                                     text-white/25"
                                                >
                                                    {detail}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <span
                                        className="text-xs tracking-[0.2em]
                               text-white/20"
                                    >
                    {experience.period}
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}