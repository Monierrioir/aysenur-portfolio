import Link from "next/link";

const articles = [
    {
        number: "01",
        category: "Software / Design",
        date: "October 2026",
        title: "How I Built MYTHOS",
        subtitle:
            "Designing a mythology platform around stories, exploration and cultural identity.",
        readTime: "10 min read",
        href: "/writing/how-i-built-mythos",
        available: true,
    },
    {
        number: "02",
        category: "Cybersecurity / Research",
        date: "2026",
        title: "Federated Intrusion Detection Against Poisoning Attacks",
        subtitle:
            "Notes from my research on distributed learning, malicious model updates and trust.",
        readTime: "12 min read",
        href: "#",
        available: false,
    },
    {
        number: "03",
        category: "Machine Learning",
        date: "2026",
        title: "What Demand Forecasting Taught Me About Real Data",
        subtitle:
            "Why understanding the data often matters more than choosing the most complicated model.",
        readTime: "8 min read",
        href: "#",
        available: false,
    },
];

export default function WritingPage() {
    return (
        <main className="min-h-screen bg-[#e7e1d7] text-[#181714]">
            {/* Header */}
            <header className="px-6 py-7 md:px-10">
                <div
                    className="mx-auto flex max-w-7xl
                     items-center justify-between"
                >
                    <Link
                        href="/"
                        className="font-mono text-[10px]
                       uppercase tracking-[0.24em]
                       text-[#70695f]
                       transition-colors
                       hover:text-[#181714]"
                    >
                        Ayşenur Ekiz
                    </Link>

                    <Link
                        href="/"
                        className="font-mono text-[10px]
                       uppercase tracking-[0.24em]
                       text-[#8c8377]
                       transition-colors
                       hover:text-[#181714]"
                    >
                        ← Portfolio
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section
                className="px-6 pb-24 pt-20
                   md:px-10 md:pb-32 md:pt-28"
            >
                <div className="mx-auto max-w-7xl">
                    <div
                        className="grid gap-14
                       lg:grid-cols-[0.35fr_0.65fr]"
                    >
                        <div>
                            <p
                                className="font-mono text-[10px]
                           uppercase tracking-[0.28em]
                           text-[#8c8377]"
                            >
                                Notebook
                            </p>
                        </div>

                        <div>
                            <h1
                                className="max-w-5xl font-serif
                           text-6xl leading-[0.92]
                           tracking-[-0.055em]
                           md:text-8xl"
                            >
                                Notes from
                                <br />

                                <span className="italic text-[#766a5d]">
                  my desk.
                </span>
                            </h1>

                            <p
                                className="mt-10 max-w-2xl
                           text-base leading-8
                           text-[#5c564e]"
                            >
                                Project stories, technical experiments,
                                research notes and things I wanted to
                                understand well enough to write down.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article list */}
            <section
                className="px-6 pb-32
                   md:px-10 md:pb-44"
            >
                <div
                    className="mx-auto max-w-7xl
                     border-t border-[#c7beb1]"
                >
                    {articles.map((article) => {
                        if (article.available) {
                            return (
                                <Link
                                    key={article.number}
                                    href={article.href}
                                    className="group grid gap-7
                             border-b border-[#c7beb1]
                             py-10
                             md:grid-cols-[90px_1fr_auto]"
                                >
                                    <ArticleContent article={article} />
                                </Link>
                            );
                        }

                        return (
                            <article
                                key={article.number}
                                className="grid gap-7
                           border-b border-[#c7beb1]
                           py-10 opacity-50
                           md:grid-cols-[90px_1fr_auto]"
                            >
                                <ArticleContent article={article} />
                            </article>
                        );
                    })}
                </div>

                <div
                    className="mx-auto mt-10 flex
                     max-w-7xl flex-col gap-4
                     sm:flex-row sm:justify-between"
                >
          <span
              className="font-mono text-[9px]
                       uppercase tracking-[0.22em]
                       text-[#9b9287]"
          >
            03 entries
          </span>

                    <span
                        className="font-serif italic
                       text-[#766a5d]"
                    >
            More will find their way here.
          </span>
                </div>
            </section>
        </main>
    );
}

function ArticleContent({
                            article,
                        }: {
    article: {
        number: string;
        category: string;
        date: string;
        title: string;
        subtitle: string;
        readTime: string;
        available: boolean;
    };
}) {
    return (
        <>
            <div>
                <p
                    className="font-mono text-[9px]
                     tracking-[0.24em]
                     text-[#978e82]"
                >
                    {article.number}
                </p>

                <p
                    className="mt-3 font-mono text-[9px]
                     uppercase tracking-[0.2em]
                     text-[#b07d52]"
                >
                    {article.date}
                </p>
            </div>

            <div>
                <p
                    className="font-mono text-[9px]
                     uppercase tracking-[0.22em]
                     text-[#847c71]"
                >
                    {article.category}
                </p>

                <h2
                    className="mt-4 max-w-4xl font-serif
                     text-3xl leading-[1.05]
                     tracking-[-0.035em]
                     transition-transform
                     duration-300
                     group-hover:translate-x-2
                     md:text-5xl"
                >
                    {article.title}
                </h2>

                <p
                    className="mt-5 max-w-2xl
                     text-sm leading-7
                     text-[#69635a]"
                >
                    {article.subtitle}
                </p>
            </div>

            <div className="md:text-right">
                <p
                    className="font-mono text-[9px]
                     uppercase tracking-[0.2em]
                     text-[#978e82]"
                >
                    {article.readTime}
                </p>

                <p
                    className="mt-6 font-serif
                     text-xl italic
                     text-[#766a5d]"
                >
                    {article.available ? "open →" : "coming soon"}
                </p>
            </div>
        </>
    );
}