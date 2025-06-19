"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { ExternalLink, Github, Eye, Code2, Sparkles } from "lucide-react";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

 const projects = [
  {
    id: 1,
    title: "AI Code Review Assistant",
    description: "An AI‑powered GitHub‑integrated tool that fetches pull requests and offers intelligent code suggestions with real‑time feedback and a minimal UI.",
    image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-npl-illustration_23-2149262968.jpg?semt=ais_hybrid&w=740",
    tags: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS", "GitHub OAuth"],
    github: "https://github.com/your-username/ai-code-review-assistant",
    live: "https://your-deployment-url.com",
    featured: true,
    color: "from-indigo-500 to-violet-600"
  },
  {
    id: 2,
    title: "Social Media Web Application Backend",
    description: "A robust backend for a social media platform with secure user auth, video uploads, tweet functionality, and channel subscriptions using RESTful APIs.",
    image: "https://img.freepik.com/free-vector/social-tree-concept-illustration_114360-4947.jpg?w=740",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
    github: "https://github.com/your-username/social-media-backend",
    live: "",
    featured: true,
    color: "from-rose-500 to-pink-600"
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Real-time social platform with messaging, content sharing, and advanced privacy controls. Built for scale and performance.",
    image: "https://img.freepik.com/free-vector/chatting-concept-illustration_114360-2427.jpg?w=740",
    tags: ["React Native", "Node.js", "Socket.io", "AWS", "Redis"],
    github: "https://github.com",
    live: "https://demo.com",
    featured: true,
    color: "from-pink-500 to-orange-500"
  },
  {
    id: 4,
    title: "Crypto Trading Bot",
    description: "Automated trading bot with machine learning algorithms for cryptocurrency markets. Features risk management and backtesting.",
    image: "https://img.freepik.com/free-vector/bitcoin-trading-concept-illustration_114360-10773.jpg?w=740",
    tags: ["Python", "Pandas", "Binance API", "ML", "Docker"],
    github: "https://github.com",
    live: "https://demo.com",
    featured: false,
    color: "from-yellow-500 to-red-500"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with advanced animations, dark/light themes, and performance optimization.",
    image: "https://img.freepik.com/free-vector/portfolio-concept-illustration_114360-7969.jpg?w=740",
    tags: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
    github: "https://github.com",
    live: "https://demo.com",
    featured: false,
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Task Management Tool",
    description: "Collaborative project management tool with real-time updates, team collaboration, and advanced project tracking.",
    image: "https://img.freepik.com/free-vector/project-management-illustration_114360-5922.jpg?w=740",
    tags: ["Vue.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com",
    live: "https://demo.com",
    featured: false,
    color: "from-cyan-500 to-blue-500"
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
        ease: [0.25, 0.25, 0.25, 0.75] as [number, number, number, number],
      },
    },
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      <Parallax speed={-12} className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-bl from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
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
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my latest work and creative solutions
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
              >
                {/* Project Image */}
                <motion.div
                  className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="glass-effect p-4 rounded-2xl overflow-hidden">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                      {/* Project Image */}
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          const img = e.currentTarget;
                          const fallback = img.nextElementSibling as HTMLElement;
                          img.style.display = 'none';
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      
                      {/* Fallback placeholder (hidden by default) */}
                      <div className="absolute inset-0 items-center justify-center hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto glass-effect rounded-full flex items-center justify-center">
                              <Code2 className="w-8 h-8 text-primary" />
                            </div>
                            <p className="text-sm text-muted-foreground">Project Screenshot</p>
                          </div>
                        </div>
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <motion.a
                          href={project.live}
                          className="p-3 glass-effect rounded-full hover:glow-effect transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={project.github}
                          className="p-3 glass-effect rounded-full hover:glow-effect transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Project Info */}
                <motion.div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  variants={itemVariants}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-primary">Featured Project</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold heading-font">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium glass-effect rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.live}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:glow-effect transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>

                    <motion.a
                      href={project.github}
                      className="inline-flex items-center space-x-2 px-6 py-3 border border-primary text-primary rounded-full font-semibold glass-effect hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold heading-font text-center">
              Other Notable Projects
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="glass-effect p-6 rounded-xl space-y-4 hover:glow-effect transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center`}>
                      <Code2 className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex space-x-2">
                      <motion.a
                        href={project.github}
                        className="p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-medium bg-secondary rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-secondary rounded-md">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              href="https://github.com"
              className="inline-flex items-center space-x-2 px-8 py-4 glass-effect rounded-full font-semibold hover:glow-effect transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
