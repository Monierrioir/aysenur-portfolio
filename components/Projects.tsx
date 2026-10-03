"use client";

import { motion } from "motion/react";

type ProjectVisual =
    | "mythos"
    | "cinematch"
    | "security"
    | "water"
    | "forecast"
    | "wildfire"
    | "personnel"
    | "commonplace";

type Project = {
    number: string;
    title: string;
    subtitle: string;
    organization: string;
    year: string;
    description: string;
    role: string;
    technologies?: string;
    href?: string;
    visual: ProjectVisual;
};

const projects: Project[] = [
    {
        number: "01",
        title: "MYTHOS",
        subtitle: "Interactive mythology platform",
        organization: "Personal Project",
        year: "2026 — Ongoing",
        description:
            "An interactive mythology platform built around long-form storytelling, exploration and culturally distinct digital worlds. The project explores how narrative structure, atmosphere and interaction design can work together without reducing mythology to short summaries.",
        role: "Product Design · Frontend Development · Research",
        technologies: "Next.js · TypeScript · Interaction Design",
        href: "https://mythos-iota-navy.vercel.app",
        visual: "mythos",
    },
    {
        number: "02",
        title: "CineMatch",
        subtitle: "Movie discovery & recommendation system",
        organization: "Personal Project",
        year: "2026",
        description:
            "A cinematic recommendation platform that combines movie discovery, mood-based exploration, personalised recommendation flows and taste-oriented user experiences using movie metadata and recommendation signals.",
        role: "Full-Stack Development · Recommendation Logic · Interface Design",
        technologies: "Next.js · TypeScript · TMDB API · Prisma",
        href: "https://cinematch-three-khaki.vercel.app",
        visual: "cinematch",
    },
    {
        number: "03",
        title: "Federated Intrusion Detection",
        subtitle: "Security research against poisoning attacks",
        organization: "Çukurova University",
        year: "2026",
        description:
            "Research into federated intrusion detection under poisoning attacks, including IID and non-IID scenarios, malicious model updates and blockchain-supported verification.",
        role: "Research · Experiment Design · Security Analysis",
        technologies: "Federated Learning · IDS · CIC-IDS2017 · Blockchain Verification",
        visual: "security",
    },
    {
        number: "04",
        title: "Mavi Kalkan",
        subtitle: "AI-assisted water pollution detection",
        organization: "CENGA Community",
        year: "2026 — Ongoing",
        description:
            "A mobile environmental monitoring project designed for early water pollution detection using location data, environmental context, user observations and AI-assisted analysis.",
        role: "Project Management · Development · Research",
        technologies: "Android · Kotlin · AI-Assisted Analysis · Maps",
        visual: "water",
    },
    {
        number: "05",
        title: "Demand Forecasting",
        subtitle: "Machine learning for forecasting workflows",
        organization: "EFA İnovasyon",
        year: "2026",
        description:
            "A machine-learning forecasting workflow involving preprocessing, feature engineering, external data integration and comparison of multiple predictive models.",
        role: "Machine Learning · Data Preparation · Development",
        technologies: "Python · LSTM · GRU · SVR · Random Forest · LightGBM",
        visual: "forecast",
    },
    {
        number: "06",
        title: "Wildfire Data Analysis",
        subtitle: "Research through environmental data",
        organization: "TÜBİTAK",
        year: "2024 — 2025",
        description:
            "A research project centered on preparing, exploring and analysing wildfire-related environmental data to uncover useful patterns and support structured investigation.",
        role: "Data Preparation · Analysis · Research",
        technologies: "Python · Data Analysis · Environmental Data",
        visual: "wildfire",
    },
    {
        number: "07",
        title: "Personnel Lifetime Analysis",
        subtitle: "Employee lifecycle and retention analysis",
        organization: "Universal Yazılım",
        year: "2025",
        description:
            "An analytical project focused on employee lifecycle and retention data, turning raw personnel records into structured information that could support further analysis.",
        role: "Data Analysis · Preparation · Interpretation",
        technologies: "Python · Pandas · Data Analysis",
        visual: "personnel",
    },
    {
        number: "08",
        title: "Commonplace",
        subtitle: "Personal reading environment",
        organization: "Personal Project",
        year: "2026 — Ongoing",
        description:
            "A digital reading space built around books, atmosphere and customisable rooms, combining personal organisation with a more immersive reading experience.",
        role: "Product Design · Frontend Development · Interface Design",
        technologies: "Next.js · Supabase · TypeScript",
        visual: "commonplace",
    },
];

export default function Projects() {
    return (
        <section
            id="work"
            className="bg-[#0b0b0a] px-6 py-28 text-[#ebe9e2] md:px-10 md:py-40"
        >
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="grid gap-14 lg:grid-cols-[0.35fr_0.65fr]">
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#6f6b64]">
                            Selected work
                        </p>
                    </div>

                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-5xl font-serif text-5xl leading-[0.97] tracking-[-0.05em] md:text-7xl"
                        >
                            Things I built,
                            <span className="italic text-[#8e877c]">
                {" "}
                                studied and tried to understand.
              </span>
                        </motion.h2>

                        <p className="mt-8 max-w-2xl text-base leading-8 text-[#8c877f]">
                            Product experiments, security research, machine-learning work and
                            analytical projects. Some began as coursework, some as internships,
                            and some simply because I wanted to build them.
                        </p>
                    </div>
                </div>

                {/* Projects */}
                <div className="mt-28">
                    {projects.map((project, index) => (
                        <ProjectEntry
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectEntry({
                          project,
                          index,
                      }: {
    project: Project;
    index: number;
}) {
    const content = (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.75 }}
            className="group border-t border-[#292722] py-16 md:py-24"
        >
            <div
                className={`grid items-start gap-12 lg:grid-cols-2 lg:gap-20 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
            >
                {/* Text */}
                <div>
                    <div className="flex items-start justify-between gap-8">
                        <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#69655e]">
                            {project.number}
                        </p>

                        <p className="text-right font-mono text-[9px] uppercase leading-5 tracking-[0.2em] text-[#69655e]">
                            {project.organization}
                            <br />
                            {project.year}
                        </p>
                    </div>

                    <h3 className="mt-16 max-w-xl font-serif text-4xl leading-[1] tracking-[-0.04em] md:text-5xl">
                        {project.title}
                    </h3>

                    <p className="mt-4 font-serif text-xl italic text-[#8e877c]">
                        {project.subtitle}
                    </p>

                    <p className="mt-8 max-w-xl text-sm leading-7 text-[#858079]">
                        {project.description}
                    </p>

                    <div className="mt-10 border-t border-[#24221f] pt-5">
                        <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#56524c]">
                            Role
                        </p>

                        <p className="mt-2 text-sm text-[#969087]">
                            {project.role}
                        </p>
                    </div>

                    {project.technologies && (
                        <div className="mt-6">
                            <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#56524c]">
                                Stack / Methods
                            </p>

                            <p className="mt-2 max-w-xl font-mono text-[8px] uppercase leading-5 tracking-[0.16em] text-[#69655e]">
                                {project.technologies}
                            </p>
                        </div>
                    )}

                    {project.href && (
                        <div className="mt-10">
              <span className="border-b border-[#4c463d] pb-2 font-serif text-lg italic text-[#9f9588] transition-colors group-hover:text-[#ebe9e2]">
                Visit project ↗
              </span>
                        </div>
                    )}
                </div>

                {/* Visual */}
                <ProjectVisual type={project.visual} />
            </div>
        </motion.article>
    );

    if (!project.href) {
        return content;
    }

    return (
        <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="block"
        >
            {content}
        </a>
    );
}

function ProjectVisual({
                           type,
                       }: {
    type: ProjectVisual;
}) {
    if (type === "mythos") {
        return (
            <div className="relative min-h-[430px] overflow-hidden border border-[#32291f] bg-[#17120d]">
                <div
                    className="absolute inset-0 opacity-60"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 50% 42%, rgba(193,145,81,.24), transparent 30%), radial-gradient(rgba(255,255,255,.07) .6px, transparent .6px)",
                        backgroundSize: "auto, 7px 7px",
                    }}
                />

                <div className="absolute left-1/2 top-[44%] h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5b4934]" />

                <div className="absolute left-1/2 top-[44%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7a6042]" />

                <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="font-serif text-[clamp(5rem,8vw,8rem)] tracking-[-0.08em] text-[#c7a774]">
                        M
                    </p>

                    <p className="mt-2 font-mono text-[7px] uppercase tracking-[0.34em] text-[#76664f]">
                        mythology as a journey
                    </p>
                </div>

                <div className="absolute bottom-7 left-7 right-7 flex justify-between font-mono text-[7px] uppercase tracking-[0.2em] text-[#6e604e]">
                    <span>Greek</span>
                    <span>Norse</span>
                    <span>Turkic</span>
                </div>
            </div>
        );
    }

    if (type === "cinematch") {
        return (
            <div className="relative min-h-[430px] overflow-hidden border border-[#252c42] bg-[#050918]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(82,105,166,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(82,105,166,.07) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />

                <div className="absolute left-[12%] top-[20%] h-48 w-32 rotate-[-8deg] border border-[#28314d] bg-[#0b1022]" />

                <div className="absolute right-[12%] top-[27%] h-48 w-32 rotate-[8deg] border border-[#28314d] bg-[#10162a]" />

                <div className="absolute left-1/2 top-1/2 z-10 flex h-60 w-44 -translate-x-1/2 -translate-y-1/2 flex-col justify-between border border-[#3f5385] bg-[#10172b] p-5 shadow-2xl">
                    <div>
                        <p className="font-mono text-[7px] uppercase tracking-[0.28em] text-[#6b83ba]">
                            recommendation
                        </p>

                        <div className="mt-5 h-24 border border-[#293553] bg-[#080d1b]" />
                    </div>

                    <div>
                        <div className="h-[2px] w-20 bg-[#637dbd]" />
                        <div className="mt-3 h-[2px] w-12 bg-[#475982]" />
                    </div>
                </div>

                <p className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[7px] uppercase tracking-[0.33em] text-[#586a93]">
                    find your next watch
                </p>
            </div>
        );
    }

    if (type === "security") {
        return (
            <div className="technical-grid min-h-[430px] border border-[#292722] bg-[#0c0d0d] p-7">
                <div className="flex h-full flex-col justify-between">
                    <div className="grid grid-cols-3 gap-3">
                        {["CLIENT 01", "CLIENT 02", "CLIENT 03"].map((client) => (
                            <div
                                key={client}
                                className="border border-[#313333] p-4 text-center"
                            >
                                <p className="font-mono text-[8px] tracking-[0.2em] text-[#6f7775]">
                                    {client}
                                </p>

                                <div className="mx-auto mt-5 h-8 w-8 rounded-full border border-[#48514f]" />
                            </div>
                        ))}
                    </div>

                    <div className="my-10 text-center">
                        <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-[#8a8e8a]">
                            ↓ model updates ↓
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        {["GLOBAL", "MODEL", "ATTACK"].map((item) => (
                            <div
                                key={item}
                                className="border border-[#313333] px-3 py-7 text-center"
                            >
                                <p className="font-mono text-[9px] tracking-[0.22em] text-[#858b88]">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 border-t border-[#333531] pt-5">
                        <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#59615e]">
                            VERIFY / HASH / CHECK
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "water") {
        return (
            <div className="relative min-h-[430px] overflow-hidden border border-[#292722] bg-[#101412]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(129,149,121,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(129,149,121,.05) 1px, transparent 1px)",
                        backgroundSize: "56px 56px",
                    }}
                />

                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#45564b]" />

                <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#607466]" />

                <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#819579]" />

                <span className="absolute left-[18%] top-[22%] h-2 w-2 rounded-full bg-[#536b5a]" />
                <span className="absolute right-[20%] top-[31%] h-2 w-2 rounded-full bg-[#536b5a]" />
                <span className="absolute bottom-[24%] left-[30%] h-2 w-2 rounded-full bg-[#536b5a]" />

                <p className="absolute bottom-7 left-7 font-mono text-[8px] uppercase tracking-[0.22em] text-[#58645a]">
                    Observation / Location / Verification
                </p>
            </div>
        );
    }

    if (type === "forecast") {
        return (
            <div className="relative min-h-[430px] overflow-hidden border border-[#292722] bg-[#0f1113]">
                <svg
                    viewBox="0 0 600 420"
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="none"
                >
                    <line
                        x1="60"
                        y1="340"
                        x2="550"
                        y2="340"
                        stroke="#2c3034"
                    />

                    <line
                        x1="60"
                        y1="60"
                        x2="60"
                        y2="340"
                        stroke="#2c3034"
                    />

                    <polyline
                        points="
              60,285
              100,250
              140,270
              180,205
              220,230
              260,170
              300,190
              340,140
            "
                        fill="none"
                        stroke="#738da5"
                        strokeWidth="3"
                    />

                    <polyline
                        points="
              340,140
              380,155
              420,110
              460,125
              500,82
              550,105
            "
                        fill="none"
                        stroke="#c89b6d"
                        strokeWidth="3"
                        strokeDasharray="8 8"
                    />
                </svg>

                <p className="absolute left-8 top-7 font-mono text-[8px] uppercase tracking-[0.24em] text-[#697984]">
                    History
                </p>

                <p className="absolute right-8 top-7 font-mono text-[8px] uppercase tracking-[0.24em] text-[#947355]">
                    Forecast
                </p>

                <div className="absolute bottom-7 left-8 flex gap-5 font-mono text-[7px] uppercase tracking-[0.18em] text-[#5f6364]">
                    <span>LSTM</span>
                    <span>GRU</span>
                    <span>SVR</span>
                    <span>RF</span>
                    <span>LGBM</span>
                </div>
            </div>
        );
    }

    if (type === "wildfire") {
        const bars = [45, 72, 55, 88, 64, 38, 79, 51, 67, 92];

        return (
            <div className="relative min-h-[430px] overflow-hidden border border-[#342b23] bg-[#17110c] p-8">
                <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#795e45]">
                    Environmental dataset
                </p>

                <div className="absolute bottom-10 left-8 right-8 flex h-[65%] items-end gap-3">
                    {bars.map((height, index) => (
                        <div
                            key={index}
                            className="flex-1 border-t border-[#9d6840] bg-[#51331f]"
                            style={{
                                height: `${height}%`,
                                opacity: 0.45 + index * 0.035,
                            }}
                        />
                    ))}
                </div>

                <p className="absolute bottom-5 right-8 font-mono text-[7px] uppercase tracking-[0.2em] text-[#76563c]">
                    observations over time →
                </p>
            </div>
        );
    }

    if (type === "personnel") {
        return (
            <div className="relative min-h-[430px] overflow-hidden border border-[#292722] bg-[#11110f] p-8">
                <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#66635d]">
                    Employee lifecycle
                </p>

                <div className="mt-20 space-y-10">
                    {[72, 91, 55, 83, 66].map((width, index) => (
                        <div key={index}>
                            <p className="mb-3 font-mono text-[7px] tracking-[0.2em] text-[#514f49]">
                                0{index + 1}
                            </p>

                            <div
                                className="h-[2px] bg-[#3b3934]"
                                style={{
                                    width: `${width}%`,
                                }}
                            />

                            <div
                                className="mt-2 h-[1px] bg-[#24231f]"
                                style={{
                                    width: `${Math.max(30, width - 18)}%`,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-[430px] overflow-hidden border border-[#a69b8c] bg-[#cfc5b7]">
            <div className="absolute left-[14%] top-[13%] h-[70%] w-[43%] border border-[#9e9486]">
                <div className="absolute left-[18%] top-[12%] h-[72%] w-[2px] bg-[#a79d8f]" />
                <div className="absolute left-[38%] top-[18%] h-[66%] w-[2px] bg-[#93887a]" />
                <div className="absolute left-[57%] top-[10%] h-[74%] w-[2px] bg-[#aca294]" />
                <div className="absolute left-[76%] top-[20%] h-[64%] w-[2px] bg-[#8d8274]" />
                <div className="absolute bottom-[18%] left-0 h-[1px] w-full bg-[#9f9587]" />
            </div>

            <div className="absolute bottom-[14%] right-[14%] h-28 w-36 border border-[#9b9082] bg-[#b8aea0]" />

            <p className="absolute bottom-8 right-8 font-serif text-xl italic text-[#756a5d]">
                a room for reading
            </p>
        </div>
    );
}