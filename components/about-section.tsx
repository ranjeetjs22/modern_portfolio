"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, useMotionValue, useTransform } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { Code2, Palette, Rocket, Users, Zap, Target, Trophy, Star } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(59, 130, 246, 0.3)",
        "0 0 40px rgba(147, 51, 234, 0.4)",
        "0 0 20px rgba(59, 130, 246, 0.3)",
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const features = [
    {
      icon: Code2,
      title: "Clean Architecture",
      description: "Building scalable, maintainable systems with cutting-edge patterns and best practices.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/20"
    },
    {
      icon: Palette,
      title: "Stunning Design",
      description: "Crafting pixel-perfect interfaces that captivate users and drive engagement.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/20"
    },
    {
      icon: Rocket,
      title: "Blazing Performance",
      description: "Optimizing every millisecond for lightning-fast experiences that users love.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/20"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Mentoring developers and leading cross-functional teams to deliver excellence.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/20"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pioneering new solutions and staying ahead of industry trends and technologies.",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-gradient-to-br from-yellow-500/10 to-amber-500/20"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Delivering exact requirements with meticulous attention to every detail.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-indigo-500/10 to-blue-500/20"
    }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Background with Multiple Parallax Layers */}
      <Parallax speed={-15} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </Parallax>
      <Parallax speed={-8} className="absolute inset-0">
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"></div>
      </Parallax>
      <Parallax speed={-12} className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </Parallax>

      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute top-3/4 right-1/4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "4s" }}
        className="absolute top-1/2 left-1/6 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-50"
      />

      {/* Interactive Mouse Follower */}
      <motion.div
        className="absolute pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
        }}
      >
        <div className="w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 via-purple-500/3 to-transparent rounded-full blur-xl"></div>
      </motion.div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          className="space-y-20"
        >
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold heading-font">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                  About Me
                </span>
              </h2>
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              Architecting the future of digital experiences with 
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold"> passion</span>, 
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold"> precision</span>, and 
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent font-semibold"> innovation</span>
            </motion.p>
          </motion.div>

          {/* Enhanced Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Enhanced Text Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-3xl space-y-8 hover:bg-white/10 transition-all duration-500">
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold heading-font"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Transforming Ideas into Digital Masterpieces
                    </span>
                  </motion.h3>
                  
                  <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      With over <span className="text-blue-400 font-semibold">7+ years</span> of expertise in cutting-edge web development, 
                      I specialize in crafting extraordinary digital experiences that push the boundaries of what's possible.
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      My journey from a curious coder to a <span className="text-purple-400 font-semibold">full-stack architect</span> has been 
                      fueled by an insatiable appetite for innovation and a commitment to excellence that never settles for good enough.
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      I believe in the transformative power of technology to solve real-world problems, create meaningful connections, 
                      and build the <span className="text-pink-400 font-semibold">digital future</span> we all want to live in.
                    </motion.p>
                  </div>

                  <motion.div 
                    className="pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.a 
                      href="#contact" 
                      className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Let's Create Something Amazing</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <Star className="ml-2 w-5 h-5 relative z-10" />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Features Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100 
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}></div>
                  <div className={`relative backdrop-blur-lg ${feature.bgColor} border border-white/20 p-8 rounded-2xl space-y-6 hover:border-white/40 transition-all duration-500 h-full`}>
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <motion.h4 
                      className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                      layoutId={`title-${index}`}
                    >
                      {feature.title}
                    </motion.h4>
                    
                    <motion.p 
                      className="text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 p-12 rounded-3xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "100+", label: "Projects Delivered", icon: Trophy },
                  { number: "7+", label: "Years Mastery", icon: Target },
                  { number: "99.9%", label: "Client Satisfaction", icon: Star },
                  { number: "24/7", label: "Dedication", icon: Zap }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center space-y-4 group"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200 
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-3"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.4 }}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.div 
                      className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent heading-font"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm md:text-base text-muted-foreground font-medium group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
