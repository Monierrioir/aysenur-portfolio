"use client";

export default function Contact() {
    return (
        <footer
            id="contact"
            className="bg-[#d8d1c5] px-6 pb-10 pt-28
                 text-[#181714] md:px-10 md:pt-40"
        >
            <div className="mx-auto max-w-7xl">
                <div
                    className="grid gap-16
                     lg:grid-cols-[0.35fr_0.65fr]"
                >
                    <div>
                        <p
                            className="font-mono text-[10px]
                         uppercase tracking-[0.28em]
                         text-[#7d776d]"
                        >
                            Say hello
                        </p>
                    </div>

                    <div>
                        <h2
                            className="max-w-5xl font-serif text-6xl
                         leading-[0.92] tracking-[-0.055em]
                         text-[#181714]
                         md:text-8xl"
                        >
                            Maybe we should
                            <br />

                            <span className="italic text-[#766a5d]">
                build something.
              </span>
                        </h2>

                        <p
                            className="mt-10 max-w-xl text-base
                         leading-8 text-[#575249]"
                        >
                            I&apos;m open to early-career opportunities,
                            interesting technical projects and conversations
                            around cybersecurity, software and data.
                        </p>

                        <a
                            href="mailto:nurekizayse@gmail.com"
                            className="mt-12 inline-block border-b
                         border-[#8a8175] pb-2
                         font-serif text-2xl
                         italic text-[#3b3731]
                         transition-colors
                         hover:border-[#181714]
                         hover:text-[#181714]
                         md:text-3xl"
                        >
                            nurekizayse@gmail.com
                        </a>
                    </div>
                </div>

                <div
                    className="mt-32 grid gap-12
                     border-t border-[#bcb4a8]
                     pt-8
                     md:grid-cols-[1fr_auto]"
                >
                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                        <a
                            href="https://github.com/Monierrioir"
                            target="_blank"
                            rel="noreferrer"
                            className="font-mono text-[10px]
                         uppercase tracking-[0.22em]
                         text-[#69635a]
                         transition-colors
                         hover:text-[#181714]"
                        >
                            GitHub ↗
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ayşenur-ekiz-29a2b3228"
                            target="_blank"
                            rel="noreferrer"
                            className="font-mono text-[10px]
                         uppercase tracking-[0.22em]
                         text-[#69635a]
                         transition-colors
                         hover:text-[#181714]"
                        >
                            LinkedIn ↗
                        </a>

                        <a
                            href="/AyseNur-Ekiz-CV.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="font-mono text-[10px]
                         uppercase tracking-[0.22em]
                         text-[#69635a]
                         transition-colors
                         hover:text-[#181714]"
                        >
                            CV ↗
                        </a>
                    </div>

                    <a
                        href="#top"
                        className="font-mono text-[10px]
                       uppercase tracking-[0.22em]
                       text-[#8a8175]
                       transition-colors
                       hover:text-[#181714]"
                    >
                        Back to top ↑
                    </a>
                </div>

                <div
                    className="mt-10 flex flex-col gap-2
                     border-t border-[#c5bdb1]
                     pt-6 font-mono text-[9px]
                     uppercase tracking-[0.2em]
                     text-[#999084]
                     md:flex-row
                     md:justify-between"
                >
                    <span>Ayşenur Ekiz</span>
                    <span>Computer Engineer · 2026</span>
                </div>
            </div>
        </footer>
    );
}