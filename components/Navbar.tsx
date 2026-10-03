export default function Navbar() {
    return (
        <header className="absolute left-0 top-0 z-50 w-full px-6 py-7 md:px-10">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <a
                    href="#top"
                    className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#ebe9e2]"
                >
                    Ayşenur Ekiz
                </a>

                <nav className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[#77746d] md:flex">
                    <a className="transition hover:text-[#ebe9e2]" href="#work">
                        Work
                    </a>

                    <a className="transition hover:text-[#ebe9e2]" href="#writing">
                        Notes
                    </a>

                    <a className="transition hover:text-[#ebe9e2]" href="#experience">
                        Background
                    </a>

                    <a className="transition hover:text-[#ebe9e2]" href="#contact">
                        Contact
                    </a>
                </nav>

                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#77746d]">
          Computer Engineer
        </span>
            </div>
        </header>
    );
}