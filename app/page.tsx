import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Background from "@/components/Background";
import BeyondCode from "@/components/BeyondCode";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main>
            <Navbar />

            <Hero />
            <About />
            <Projects />
            <Skills />
            <Background />
            <BeyondCode />
            <Credentials />
            <Contact />
        </main>
    );
}