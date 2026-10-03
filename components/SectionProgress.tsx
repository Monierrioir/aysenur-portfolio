"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const sections = [
    { id: "top", number: "01", label: "Intro" },
    { id: "about", number: "02", label: "About" },
    { id: "work", number: "03", label: "Work" },
    { id: "writing", number: "04", label: "Writing" },
    { id: "skills", number: "05", label: "Toolbox" },
    { id: "experience", number: "06", label: "Experience" },
    { id: "education", number: "07", label: "Education" },
    { id: "journey", number: "08", label: "Journey" },
    { id: "contact", number: "09", label: "Contact" },
];

export default function SectionProgress() {
    const [activeSection, setActiveSection] = useState("top");

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sections.forEach((section) => {
            const element = document.getElementById(section.id);

            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(section.id);
                    }
                },
                {
                    rootMargin: "-35% 0px -55% 0px",
                    threshold: 0,
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return (
        <aside
            className="fixed right-6 top-1/2 z-40 hidden
                 -translate-y-1/2 xl:block"
        >
            <div className="flex flex-col items-end gap-4">
                {sections.map((section) => {
                    const active = activeSection === section.id;

                    return (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className="group flex items-center gap-3"
                        >
                            <motion.span
                                animate={{
                                    opacity: active ? 1 : 0,
                                    x: active ? 0 : 8,
                                }}
                                transition={{ duration: 0.25 }}
                                className="text-[10px] uppercase tracking-[0.25em]
                           text-white/40"
                            >
                                {section.label}
                            </motion.span>

                            <span
                                className={`font-mono text-[10px] transition-colors ${
                                    active ? "text-cyan-300" : "text-white/20"
                                }`}
                            >
                {section.number}
              </span>

                            <motion.div
                                animate={{
                                    width: active ? 30 : 12,
                                    backgroundColor: active
                                        ? "rgba(103,232,249,0.8)"
                                        : "rgba(255,255,255,0.15)",
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="h-px"
                            />
                        </a>
                    );
                })}
            </div>
        </aside>
    );
}