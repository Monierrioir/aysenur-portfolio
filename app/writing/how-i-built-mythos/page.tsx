import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export default function MythosArticlePage() {
    return (
        <main className="bg-[#0b0b0a] text-[#ebe9e2]">
            {/* Navigation */}
            <header
                className="border-b border-[#28251f]
                   px-6 py-7 md:px-10"
            >
                <div
                    className="mx-auto flex max-w-7xl
                     items-center justify-between"
                >
                    <Link
                        href="/"
                        className="font-mono text-[10px]
                       uppercase tracking-[0.24em]
                       text-[#9b9286]
                       transition-colors
                       hover:text-[#ebe9e2]"
                    >
                        Ayşenur Ekiz
                    </Link>

                    <Link
                        href="/writing"
                        className="font-mono text-[10px]
                       uppercase tracking-[0.24em]
                       text-[#756f66]
                       transition-colors
                       hover:text-[#ebe9e2]"
                    >
                        ← Writing
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section
                className="px-6 pb-28 pt-24
                   md:px-10 md:pb-36 md:pt-32"
            >
                <div className="mx-auto max-w-7xl">
                    <div
                        className="grid gap-16
                       lg:grid-cols-[0.25fr_0.75fr]"
                    >
                        <aside>
                            <p
                                className="font-mono text-[9px]
                           uppercase leading-6
                           tracking-[0.24em]
                           text-[#766f65]"
                            >
                                Note 01
                                <br />
                                Software / Design
                                <br />
                                October 2026
                                <br />
                                10 min read
                            </p>
                        </aside>

                        <div>
                            <p
                                className="font-mono text-[10px]
                           uppercase tracking-[0.3em]
                           text-[#c89b6d]"
                            >
                                Project Journal
                            </p>

                            <h1
                                className="mt-8 max-w-5xl
                           font-serif
                           text-[clamp(4rem,8vw,8rem)]
                           leading-[0.87]
                           tracking-[-0.06em]"
                            >
                                How I Built
                                <br />

                                <span className="italic text-[#baaa96]">
                  MYTHOS.
                </span>
                            </h1>

                            <p
                                className="mt-12 max-w-3xl
                           font-serif text-2xl
                           leading-[1.45]
                           tracking-[-0.02em]
                           text-[#aaa297]
                           md:text-3xl"
                            >
                                Designing a mythology platform around stories,
                                exploration and cultural identity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Opening image */}
            <ArticleImage
                src="/writing/mythos/greek-atlas.png"
                alt="MYTHOS Greek mythology atlas interface"
                number="FIG. 01"
                caption="The Greek Atlas turns mythology into a path rather than a list of disconnected stories."
                priority
            />

            {/* 01 */}
            <ArticleSection
                number="01"
                title="Why I built it"
            >
                <p>
                    MYTHOS started with a simple frustration:
                    mythology is often presented either as a
                    collection of short summaries or as disconnected
                    lists of gods, heroes and creatures.
                </p>

                <p>
                    I wanted something different. I wanted reading
                    mythology online to feel closer to entering a
                    world than browsing an encyclopedia.
                </p>

                <p>
                    That decision became the foundation of the
                    project. MYTHOS would be built around long-form
                    storytelling, exploration and atmosphere.
                    Instead of reducing myths to isolated facts,
                    stories would have enough room to develop and
                    connect with the characters, events and places
                    around them.
                </p>
            </ArticleSection>

            {/* 02 */}
            <ArticleSection
                number="02"
                title="The first interaction should already belong to the world"
            >
                <p>
                    One of the first questions was how a new visitor
                    should enter MYTHOS. A conventional onboarding
                    flow with dropdowns, progress bars and form
                    controls felt disconnected from the experience
                    I wanted to create.
                </p>

                <p>
                    The opening therefore became part of the
                    storytelling language. Instead of asking the user
                    to configure preferences through a standard setup
                    screen, MYTHOS first asks how familiar they
                    already are with mythology.
                </p>

                <p>
                    The purpose is simple: the interface should begin
                    establishing atmosphere before the reader has even
                    opened the first story.
                </p>
            </ArticleSection>

            <ArticleImage
                src="/writing/mythos/onboarding-level.png"
                alt="MYTHOS mythology knowledge level selection"
                number="FIG. 02"
                caption="The first choice establishes the reader's familiarity with mythology without turning onboarding into a conventional form."
            />

            {/* 03 */}
            <ArticleSection
                number="03"
                title="Choosing a world, not a category"
            >
                <p>
                    The next step introduces Greek, Norse and Turkic
                    mythology. Technically, these could have been
                    presented as three category buttons.
                </p>

                <p>
                    Visually, however, I wanted them to feel more like
                    entrances into different worlds.
                </p>

                <p>
                    This became an important design principle for
                    MYTHOS: cultural traditions should not become
                    identical interfaces with different labels
                    attached to them.
                </p>
            </ArticleSection>

            <ArticleImage
                src="/writing/mythos/mythology-selection.png"
                alt="Greek Norse and Turkic mythology selection in MYTHOS"
                number="FIG. 03"
                caption="Greek, Norse and Turkic mythology begin as separate worlds rather than reskinned categories."
            />

            {/* 04 */}
            <ArticleSection
                number="04"
                title="Turning mythology into a journey"
            >
                <p>
                    The Atlas became the structure that connects
                    individual stories. Instead of arriving at a
                    library containing dozens of unrelated entries,
                    the reader encounters a path.
                </p>

                <p>
                    In the Greek Atlas, the journey begins with Khaos.
                    Other parts of the mythology appear beyond it:
                    Gaia, Uranos, the Titans, Kronos and later
                    conflicts. Locked stages make the chronology
                    visible before every chapter is available.
                </p>

                <p>
                    The goal was not simply gamification. The map
                    provides orientation. Greek cosmogony is full of
                    relationships, generations and conflicts;
                    representing them spatially helps communicate
                    that mythology is a connected structure rather
                    than a collection of isolated names.
                </p>
            </ArticleSection>

            <ArticleImage
                src="/writing/mythos/greek-atlas.png"
                alt="MYTHOS Greek Atlas showing Khaos Gaia Titans and later stages"
                number="FIG. 04"
                caption="The Atlas uses progression to make chronology and relationships visible before the reader opens a chapter."
            />

            {/* 05 */}
            <ArticleSection
                number="05"
                title="Designing for reading, not only browsing"
            >
                <p>
                    MYTHOS still depends on something much simpler
                    than all of its interactions: reading.
                </p>

                <p>
                    That meant the story pages could not become
                    visually exhausting. The interface needed enough
                    atmosphere to belong to the wider world while
                    giving the text enough space to remain the main
                    event.
                </p>

                <p>
                    Large serif typography, restrained ornamentation,
                    generous spacing and source references became more
                    important than adding another interactive element.
                    The Khaos chapter is one example of that balance.
                </p>
            </ArticleSection>

            <ArticleImage
                src="/writing/mythos/khaos-reading.png"
                alt="MYTHOS Khaos long-form reading page"
                number="FIG. 05"
                caption="The Khaos chapter treats the interface as a reading surface first, with atmosphere supporting rather than replacing the text."
            />

            {/* 06 */}
            <ArticleSection
                number="06"
                title="One system, different cultural identities"
            >
                <p>
                    One of the more difficult design problems appeared
                    once I thought beyond Greek mythology.
                </p>

                <p>
                    Reusing exactly the same visual language for every
                    tradition would make development easier, but it
                    would remove much of what makes the cultures
                    distinct.
                </p>

                <p>
                    At the same time, building an entirely unrelated
                    interface for every mythology would make MYTHOS
                    feel like several separate products.
                </p>

                <p>
                    The direction I chose was to separate structure
                    from presentation. The underlying story and
                    navigation architecture can remain reusable,
                    while each culture develops its own visual and
                    interaction language.
                </p>

                <p>
                    Greek stories can draw from parchment, seals and
                    manuscript-like surfaces. Norse stories suggest
                    carved wood, runestones and saga imagery. Turkic
                    mythology needs its own researched visual
                    vocabulary influenced by steppe culture, tamgas,
                    felt, fire and oral storytelling rather than
                    borrowing the identity of the other two.
                </p>
            </ArticleSection>

            {/* 07 */}
            <ArticleSection
                number="07"
                title="What the project taught me"
            >
                <p>
                    MYTHOS changed the way I think about interface
                    design because many of its most important
                    decisions were not really about appearance.
                </p>

                <p>
                    They were about deciding what deserves
                    consistency and what deserves individuality.
                </p>

                <blockquote
                    className="my-14 border-l
                     border-[#765d3d]
                     pl-8 font-serif
                     text-3xl italic
                     leading-[1.35]
                     text-[#b4aa9c]
                     md:text-4xl"
                >
                    Reusability does not have to mean sameness.
                </blockquote>

                <p>
                    A reusable component system is useful, but only
                    when it supports the experience instead of
                    flattening it. Interactions are valuable, but only
                    when they contribute to the reason someone is on
                    the page.
                </p>

                <p>
                    Atmosphere matters, but reading still has to remain
                    comfortable.
                </p>

                <p>
                    The project also reinforced how important
                    iteration is. An idea can look interesting as an
                    isolated screen and still feel wrong once it
                    becomes part of a larger experience. Many
                    decisions became clearer only after I could move
                    through the product rather than inspect a single
                    page.
                </p>
            </ArticleSection>

            {/* Closing */}
            <section
                className="border-t border-[#28251f]
                   px-6 py-28
                   md:px-10 md:py-36"
            >
                <div
                    className="mx-auto grid max-w-7xl
                     gap-14
                     lg:grid-cols-[0.25fr_0.75fr]"
                >
                    <div>
                        <p
                            className="font-mono text-[9px]
                         uppercase tracking-[0.25em]
                         text-[#6f685f]"
                        >
                            Closing note
                        </p>
                    </div>

                    <div>
                        <h2
                            className="max-w-4xl font-serif
                         text-4xl leading-[1.05]
                         tracking-[-0.04em]
                         md:text-6xl"
                        >
                            MYTHOS is still
                            <span className="italic text-[#968b7e]">
                {" "}
                                becoming.
              </span>
                        </h2>

                        <p
                            className="mt-8 max-w-3xl
                         text-base leading-8
                         text-[#8f887e]"
                        >
                            There are more stories to write, more cultures
                            to research and more interactions to test.
                            That unfinished quality is part of why I still
                            enjoy working on it.
                        </p>

                        <div
                            className="mt-14 flex flex-wrap
                         gap-x-10 gap-y-5"
                        >
                            <a
                                href="https://mythos-iota-navy.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                                className="border-b
                           border-[#665842]
                           pb-2 font-mono
                           text-[10px] uppercase
                           tracking-[0.22em]
                           text-[#c89b6d]
                           transition-colors
                           hover:text-[#ebe9e2]"
                            >
                                Visit MYTHOS ↗
                            </a>

                            <Link
                                href="/writing"
                                className="border-b
                           border-[#3b3833]
                           pb-2 font-mono
                           text-[10px] uppercase
                           tracking-[0.22em]
                           text-[#777168]
                           transition-colors
                           hover:text-[#ebe9e2]"
                            >
                                More notes →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ArticleSection({
                            number,
                            title,
                            children,
                        }: {
    number: string;
    title: string;
    children: ReactNode;
}) {
    return (
        <section
            className="border-t border-[#28251f]
                 px-6 py-24
                 md:px-10 md:py-32"
        >
            <div
                className="mx-auto grid max-w-7xl
                   gap-14
                   lg:grid-cols-[0.25fr_0.75fr]"
            >
                <div>
          <span
              className="font-mono text-[9px]
                       uppercase tracking-[0.25em]
                       text-[#766f65]"
          >
            {number}
          </span>
                </div>

                <article>
                    <h2
                        className="max-w-4xl font-serif
                       text-4xl leading-[1.05]
                       tracking-[-0.04em]
                       text-[#ddd7cd]
                       md:text-6xl"
                    >
                        {title}
                    </h2>

                    <div
                        className="mt-10 max-w-3xl
                       space-y-7
                       text-[17px]
                       leading-8
                       text-[#9d968c]"
                    >
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

function ArticleImage({
                          src,
                          alt,
                          number,
                          caption,
                          priority = false,
                      }: {
    src: string;
    alt: string;
    number: string;
    caption: string;
    priority?: boolean;
}) {
    return (
        <figure
            className="px-4 py-8
                 md:px-10 md:py-12"
        >
            <div className="mx-auto max-w-[1500px]">
                <div
                    className="overflow-hidden
                     border border-[#28251f]
                     bg-[#11100e]"
                >
                    <Image
                        src={src}
                        alt={alt}
                        width={1800}
                        height={900}
                        priority={priority}
                        className="h-auto w-full"
                    />
                </div>

                <figcaption
                    className="mt-5 grid gap-3
                     font-mono text-[9px]
                     uppercase leading-5
                     tracking-[0.2em]
                     text-[#69635b]
                     md:grid-cols-[100px_1fr]"
                >
                    <span>{number}</span>

                    <span className="max-w-3xl">
            {caption}
          </span>
                </figcaption>
            </div>
        </figure>
    );
}