"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { ArrowDown, Sparkles } from "lucide-react";

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Elements */}
      <Parallax speed={-20} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neutral-200/10 dark:bg-neutral-700/10 rounded-full blur-3xl floating-animation"></div>
      </Parallax>
      
      <Parallax speed={-30} className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-neutral-300/8 dark:bg-neutral-600/8 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      </Parallax>

      <Parallax speed={-25} className="absolute inset-0">
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-neutral-400/6 dark:bg-neutral-500/6 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }}></div>
      </Parallax>

      {/* Main Content */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          className="space-y-8"
        >
          {/* Sparkle Icon */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="p-4 glass-effect rounded-full ">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          {/* Main Quote */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold heading-font leading-tight">
              <span className="block gradient-text text-shimmer">
                "Code is Poetry"
              </span>
              <span className="block text-2xl md:text-4xl lg:text-5xl mt-4 text-muted-foreground">
                Crafting Digital Experiences
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Where innovation meets elegance. Building tomorrow's digital landscape with passion, 
            precision, and a relentless pursuit of perfection.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg glass-effect hover:glow-effect transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            
            <motion.a
              href="#about"
              className="px-8 py-4 border border-primary text-primary rounded-full font-semibold text-lg glass-effect hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            variants={itemVariants}
            className="pt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-muted-foreground cursor-pointer"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
}
