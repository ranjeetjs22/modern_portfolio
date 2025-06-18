"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { Code2, Palette, Rocket, Users } from "lucide-react";

export function AboutSection() {
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Creating visually stunning interfaces that provide exceptional user experiences."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing every aspect for lightning-fast loading and smooth interactions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working seamlessly with teams to bring ambitious projects to life."
    }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      <Parallax speed={-10} className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </Parallax>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold heading-font gradient-text">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate developer with a love for creating exceptional digital experiences
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-effect p-8 rounded-2xl space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold heading-font">
                  Crafting Digital Dreams into Reality
                </h3>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With over 5 years of experience in web development, I specialize in creating 
                    modern, responsive, and user-friendly applications that make a difference.
                  </p>
                  
                  <p>
                    My journey began with a simple "Hello World," but my passion for technology 
                    and problem-solving has driven me to master cutting-edge frameworks and 
                    technologies.
                  </p>
                  
                  <p>
                    I believe in the power of clean code, beautiful design, and the endless 
                    possibilities that emerge when creativity meets technology.
                  </p>
                </div>

                <motion.div 
                  className="pt-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <a 
                    href="#contact" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:glow-effect transition-all duration-300"
                  >
                    Let's Work Together
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass-effect p-6 rounded-xl space-y-4 hover:glow-effect transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h4 className="text-lg font-semibold">{feature.title}</h4>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8"
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center space-y-2"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text heading-font">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
