"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const projects = [
    {
        number: "01",
        title: "MYTHOS",
        category: "Interactive Web Experience",
        description:
            "An immersive mythology platform built around storytelling, exploration and culturally distinct digital worlds.",
        stack: ["Next.js", "TypeScript", "UI/UX"],
    },
    {
        number: "02",
        title: "COMMONPLACE",
        category: "Digital Reading Space",
        description:
            "A personalized digital environment for books, notes and spatial reading experiences.",
        stack: ["React", "Supabase", "Product Design"],
    },
    {
        number: "03",
        title: "SECURITY LAB",
        category: "Cybersecurity",
        description:
            "Hands-on security experiments focused on defensive systems, monitoring and detection workflows.",
        stack: ["Linux", "Security", "Networking"],
    },
];

function ProjectCard({
                         project,
                         index,
                     }: {
    project: (typeof projects)[number];
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const imageScale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0.92, 1, 0.94]
    );

    const imageY = useTransform(
        scrollYProgress,
        [0, 1],
        [60, -60]
    );

    return (
        <section
            ref={ref}
            className="relative min-h-[140vh] border-t border-white/10"
        >
            <div className="sticky top-0 flex min-h-screen items-center px-6 py-24 md:px-10">
                <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                    {/* Left */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.7 }}
                            className="mb-8 flex items-center gap-4"
                        >
              <span className="text-xs tracking-[0.35em] text-white/30">
                {project.number}
              </span>

                            <div className="h-px w-12 bg-white/15" />

                            <span className="text-xs uppercase tracking-[0.3em] text-white/30">
                {project.category}
              </span>
                        </motion.div>

                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl"
                        >
                            {project.title}
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                            }}
                            className="mt-7 max-w-lg text-base leading-8 text-white/45"
                        >
                            {project.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-8 flex flex-wrap gap-3"
                        >
                            {project.stack.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-white/35"
                                >
                  {item}
                </span>
                            ))}
                        </motion.div>

                        <a
                            href="#"
                            className="group mt-10 inline-flex items-center gap-4 text-sm text-white"
                        >
                            View project
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
                        </a>
                    </div>

                    {/* Right */}
                    <motion.div
                        style={{
                            scale: imageScale,
                            y: imageY,
                        }}
                        className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117]"
                    >
                        <div
                            className="absolute inset-0 opacity-[0.08]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                                backgroundSize: "40px 40px",
                            }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />

                        <div className="absolute left-8 top-8 text-xs uppercase tracking-[0.25em] text-white/25">
                            Project Preview
                        </div>

                        <div className="absolute bottom-8 left-8 right-8">
                            <p className="text-sm text-white/25">
                                Visual preview will be added here.
                            </p>

                            <p className="mt-2 text-3xl font-medium tracking-tight text-white/70">
                                {project.title}
                            </p>
                        </div>

                        <div className="absolute right-8 top-8 text-xs tracking-[0.3em] text-white/20">
                            0{index + 1}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default function SelectedWork() {
    return (
        <div id="work" className="relative">
            <section className="px-6 pb-20 pt-32 md:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center gap-4">
            <span className="text-xs tracking-[0.35em] text-white/30">
              02
            </span>

                        <div className="h-px w-16 bg-white/15" />

                        <span className="text-xs uppercase tracking-[0.35em] text-white/30">
              Selected Work
            </span>
                    </div>

                    <h2 className="mt-10 max-w-5xl text-5xl font-semibold leading-[1] tracking-[-0.05em] text-white md:text-8xl">
                        Things I&apos;ve built.
                        <br />
                        <span className="text-white/25">
              Problems I&apos;ve explored.
            </span>
                    </h2>
                </div>
            </section>

            {projects.map((project, index) => (
                <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                />
            ))}
        </div>
    );
}