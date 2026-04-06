import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Folder, ChevronLeft, ChevronRight } from 'lucide-react';
interface Project {
  name: string;
  description: string;
  githubUrl: string;
  tags: string[];
}
// Replace these with your actual projects
const projects: Project[] = [
{
  name: 'AI Image Classifier',
  description:
  'A deep learning application built with TensorFlow and OpenCV that classifies images into categories with high accuracy.',
  githubUrl: 'https://github.com/oscaroguledo/ai-image-classifier',
  tags: ['Python', 'TensorFlow', 'OpenCV']
},
{
  name: 'Task Management API',
  description:
  'A RESTful API built with FastAPI and PostgreSQL for managing tasks, with JWT authentication and role-based access control.',
  githubUrl: 'https://github.com/oscaroguledo/task-management-api',
  tags: ['FastAPI', 'PostgreSQL', 'Docker']
},
{
  name: 'E-Commerce Platform',
  description:
  'Full-stack e-commerce application with React frontend and Django backend, featuring Stripe payments and real-time inventory.',
  githubUrl: 'https://github.com/oscaroguledo/ecommerce-platform',
  tags: ['React', 'Django', 'PostgreSQL', 'Redis']
},
{
  name: 'DevOps Pipeline Dashboard',
  description:
  'A monitoring dashboard for CI/CD pipelines built with React and Node.js, deployed on DigitalOcean with Docker.',
  githubUrl: 'https://github.com/oscaroguledo/devops-dashboard',
  tags: ['React', 'Node.js', 'Docker', 'GitHub Actions']
},
{
  name: 'Real-Time Chat App',
  description:
  'WebSocket-powered chat application with typing indicators, read receipts, and MongoDB message persistence.',
  githubUrl: 'https://github.com/oscaroguledo/realtime-chat',
  tags: ['Node.js', 'MongoDB', 'TypeScript']
},
{
  name: 'Portfolio Generator CLI',
  description:
  'A command-line tool that generates static portfolio websites from a simple YAML configuration file.',
  githubUrl: 'https://github.com/oscaroguledo/portfolio-generator',
  tags: ['Python', 'CLI', 'Jinja2']
}];

const PROJECTS_PER_PAGE = 3;
const cardVariants = {
  hidden: (idx: number) => ({
    opacity: 0,
    y: 30,
    scale: 0.95
  }),
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: idx * 0.1,
      ease: [0.16, 1, 0.3, 1]
    }
  }),
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
export function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = projects.slice(
    currentPage * PROJECTS_PER_PAGE,
    (currentPage + 1) * PROJECTS_PER_PAGE
  );
  const goToPage = (page: number) => {
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  };
  const pageVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 60 : -60
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -60 : 60,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="mb-16">
          
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-accent text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Projects
            </h2>
            <div className="h-[1px] flex-grow bg-muted ml-4"></div>
          </div>
          <p className="text-muted-text text-lg max-w-2xl">
            A selection of projects I've built. Each one reflects a different
            challenge and a different set of tools.
          </p>
        </motion.div>

        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {paginatedProjects.map((project, idx) =>
              <motion.a
                key={project.name}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.25,
                    ease: 'easeOut'
                  }
                }}
                className="group flex flex-col bg-surface border border-muted rounded-xl p-6 hover:border-accent/50 transition-colors duration-300 relative overflow-hidden">
                
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-5">
                      <Folder size={28} className="text-accent" />
                      <ArrowUpRight
                      size={20}
                      className="text-muted-text opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    
                    </div>

                    <h3 className="text-lg font-medium text-text mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.name}
                    </h3>

                    <p className="text-muted-text text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, tagIdx) =>
                    <span
                      key={tagIdx}
                      className="font-mono text-xs text-muted-text/80 bg-background px-2.5 py-1 rounded">
                      
                          {tag}
                        </span>
                    )}
                    </div>
                  </div>
                </motion.a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 &&
        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
          className="mt-12 flex items-center justify-center gap-2">
          
            <button
            onClick={() => goToPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-muted text-muted-text hover:text-accent hover:border-accent/50 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-muted-text disabled:hover:border-muted"
            aria-label="Previous page">
            
              <ChevronLeft size={18} />
            </button>

            {Array.from({
            length: totalPages
          }).map((_, idx) =>
          <button
            key={idx}
            onClick={() => goToPage(idx)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg font-mono text-sm transition-all duration-300 ${currentPage === idx ? 'bg-accent text-background border border-accent' : 'border border-muted text-muted-text hover:text-accent hover:border-accent/50'}`}
            aria-label={`Page ${idx + 1}`}
            aria-current={currentPage === idx ? 'page' : undefined}>
            
                {idx + 1}
              </button>
          )}

            <button
            onClick={() =>
            goToPage(Math.min(totalPages - 1, currentPage + 1))
            }
            disabled={currentPage === totalPages - 1}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-muted text-muted-text hover:text-accent hover:border-accent/50 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-muted-text disabled:hover:border-muted"
            aria-label="Next page">
            
              <ChevronRight size={18} />
            </button>
          </motion.div>
        }
      </div>
    </section>);

}