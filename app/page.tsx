"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <ParallaxProvider>
      <div ref={containerRef} className="relative">
        {/* Animated background */}
        <motion.div
          className="fixed inset-0 z-0"
          style={{
            background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
            backgroundSize: "400% 400%",
            y: backgroundY,
          }}
        >
          <div className="mesh-gradient absolute inset-0 opacity-20" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </ParallaxProvider>
  );
}
