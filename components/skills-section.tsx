"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "Next.js", level: 90, color: "from-gray-700 to-gray-900" },
        { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-800" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-blue-500" },
        { name: "Framer Motion", level: 85, color: "from-pink-500 to-purple-600" },
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: 87, color: "from-green-500 to-green-700" },
        { name: "Python", level: 83, color: "from-yellow-400 to-yellow-600" },
        { name: "Express.js", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "MongoDB", level: 80, color: "from-green-600 to-green-800" },
        { name: "PostgreSQL", level: 78, color: "from-blue-700 to-indigo-700" },
      ]
    },
    {
      category: "Tools & Others",
      technologies: [
        { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Docker", level: 75, color: "from-blue-500 to-blue-700" },
        { name: "AWS", level: 70, color: "from-orange-400 to-orange-600" },
        { name: "Figma", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "VS Code", level: 95, color: "from-blue-600 to-blue-800" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="relative py-20 lg:py-32 overflow-hidden">
      <Parallax speed={-15} className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
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
              Skills & Expertise
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                className="glass-effect p-8 rounded-2xl space-y-6 hover:glow-effect transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-bold heading-font text-center">
                  {skillGroup.category}
                </h3>

                <div className="space-y-6">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      variants={skillVariants}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{tech.name}</span>
                        <span className="text-xs text-muted-foreground">{tech.level}%</span>
                      </div>
                      
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${tech.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1.5,
                            delay: groupIndex * 0.2 + techIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold heading-font text-center">
              Other Technologies
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "GraphQL", "Redux", "Sass", "Webpack", "Jest", "Cypress",
                "Firebase", "Supabase", "Vercel", "Netlify", "Stripe", "Socket.io"
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 glass-effect rounded-full text-sm font-medium hover:glow-effect transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Learning Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-xl md:text-2xl font-bold heading-font mb-4">
              Currently Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Rust", "WebAssembly", "Three.js", "AI/ML", "Web3"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium"
                  initial={{ opacity: 0, rotateX: 90 }}
                  animate={isInView ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: 90 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
