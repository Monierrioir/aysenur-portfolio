"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export default function MouseSpotlight() {
    const mouseX = useMotionValue(-300);
    const mouseY = useMotionValue(-300);

    const smoothX = useSpring(mouseX, {
        stiffness: 80,
        damping: 20,
        mass: 0.8,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 80,
        damping: 20,
        mass: 0.8,
    });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouseX.set(event.clientX);
            mouseY.set(event.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{
                left: smoothX,
                top: smoothY,
            }}
            className="pointer-events-none fixed z-30 hidden h-[420px] w-[420px]
                 -translate-x-1/2 -translate-y-1/2 rounded-full
                 bg-cyan-300/[0.06] blur-[90px] md:block"
        />
    );
}