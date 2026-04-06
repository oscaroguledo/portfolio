import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
export function Hero() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl">
          
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-6">
            
            <div className="h-[1px] w-12 bg-accent"></div>
            <span className="font-mono text-accent text-sm tracking-wider uppercase">
              Portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-balance leading-[1.1] mb-6">
            
            Oscar Oguledo
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-text max-w-2xl text-balance leading-relaxed mb-12">
            
            Software developer passionate about building innovative
            applications. Crafting robust solutions across the full stack.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 items-center">
            
            <a
              href="#projects"
              className="group relative px-6 py-3 font-mono text-sm bg-text text-background font-medium overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]">
              
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-accent transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
              <span className="absolute inset-0 z-20 flex items-center justify-center text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                View Projects
              </span>
            </a>
            <a
              href="#contact"
              className="font-mono text-sm text-muted-text hover:text-accent transition-colors duration-300 flex items-center gap-2">
              
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 1
        }}
        className="absolute bottom-12 left-6 md:left-12 flex flex-col items-center gap-4">
        
        <span className="font-mono text-xs text-muted-text rotate-90 origin-left translate-y-6">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-muted relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
            animate={{
              y: ['-100%', '200%']
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'linear'
            }} />
          
        </div>
      </motion.div>
    </section>);

}