import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Folder, ChevronLeft, ChevronRight } from 'lucide-react';
interface Project {
  name: string;
  description: string;
  githubUrl: string;
  tags: string[];
}
const projectDefinitions: Project[] = [
  {
    name: 'customer-churn-predictor',
    description: 'A scikit-learn notebook that predicts whether a subscription service user will cancel, trained on the Telco Customer Churn dataset pulled straight from its raw CSV URL. It walks through EDA and preprocessing (coercing TotalCharges to numeric, dropping the customer ID, encoding the binary target, one-hot encoding categoricals, and checking the ~26.5% class imbalance), a stratified train/test split with leakage-safe StandardScaler fitting, and baseline comparison of Logistic Regression, Decision Tree, and Random Forest. Models are judged on precision, recall, F1, and ROC-AUC rather than accuracy, with ROC curves, confusion matrices, and coefficient/feature-importance charts surfacing the top churn drivers (month-to-month contracts, fiber-optic internet, electronic-check payment) and retention drivers (long tenure, two-year contracts).',
    tags: ['Python 3', 'Jupyter Notebook', 'pandas', 'NumPy', 'scikit-learn', 'Logistic Regression', 'Decision Tree', 'Random Forest', 'StandardScaler', 'One-Hot Encoding', 'Stratified Train/Test Split', 'ROC-AUC', 'Classification Report', 'Confusion Matrix', 'Feature Importance', 'matplotlib', 'seaborn', 'joblib', 'Telco Customer Churn Dataset', 'pip', 'venv', 'pytest'],
    githubUrl: 'https://github.com/oscaroguledo/Customer-Churn-Predictor',
  },
  {
    name: 'movie-reservation-system-2',
    description: 'A Java rewrite of the movie reservation backend, split into two Spring Boot services: an auth-api that issues JWTs and hashes passwords with Argon2id, and a movie-api handling screenings, seat locks, reservations, payments, and admin reporting on capacity and revenue. The services stay in sync over a Kafka event pipeline, with Postgres as the durable store and Redis for seat holds and caching.',
    tags: ['Java 21', 'Spring Boot 3', 'Spring Web', 'Spring Data JPA', 'Hibernate', 'Spring Security', 'Spring Kafka', 'Spring Data Redis', 'PostgreSQL 16', 'Flyway', 'Redis 7', 'Apache Kafka 3.8', 'JJWT', 'Argon2id', 'BouncyCastle', 'Gradle', 'JUnit 5', 'Testcontainers', 'Awaitility', 'Docker', 'Docker Compose', 'GitHub Actions'],
    githubUrl: 'https://github.com/oscaroguledo/Movie-Reservation-System-2',
  },
  {
    name: 'movie-reservation-system',
    description: 'A movie reservation system built with FastAPI, PostgreSQL, and Kafka. Features real-time seat holds with automatic expiry, guest and authenticated bookings, and admin reporting on capacity and revenue. Designed as two independently deployable services connected by an event-driven pipeline, with Postgres as the durable store and Redis as the fast path.',
    tags: ['FastAPI', 'Uvicorn', 'Pydantic', 'PostgreSQL 16', 'SQLAlchemy (async)', 'asyncpg', 'Alembic', 'Redis 7', 'Apache Kafka', 'aiokafka', 'PyJWT', 'Argon2', 'GitHub Actions', 'Docker', 'Docker Compose', 'Python', 'pytest', 'pytest-asyncio', 'pytest-cov', 'httpx', 'Ruff'],
    githubUrl: 'https://github.com/oscaroguledo/Movie-Reservation-System',
  },
  {
    name: 'distributed-inventory-engine',
    description: 'A high-concurrency inventory and order-processing engine built with FastAPI and PostgreSQL. Uses Redis with atomic Lua scripts for stock reservations, PgBouncer for connection pooling, and a full observability stack (Prometheus, Grafana, OpenTelemetry, Jaeger). Designed for correctness under heavy concurrent load.',
    tags: ['FastAPI', 'Uvicorn', 'Pydantic', 'Redis 7', 'Lua', 'PostgreSQL 16', 'SQLAlchemy (async)', 'asyncpg', 'PgBouncer', 'Prometheus', 'Grafana', 'Alertmanager', 'OpenTelemetry', 'Jaeger', 'redis_exporter', 'postgres_exporter', 'GitHub Actions', 'Docker', 'Docker Compose', 'Python', 'pytest-asyncio', 'httpx', 'pytest-cov', 'Ruff'],
    githubUrl: 'https://github.com/oscaroguledo/distributed-inventory-engine',
  },
  {
    name: 'Blog-Platform',
    description: 'A full-stack blog application built with FastAPI, React, and PostgreSQL. Features user authentication, post management with categories and tags, nested comments, analytics dashboard, and admin panel. Containerized with Docker for easy deployment. Includes comprehensive testing with Pytest for backend and Vitest/Playwright for frontend.',
    githubUrl: 'https://github.com/oscaroguledo/blog-app-fastapi-react',
    tags: ['FastAPI', 'Uvicorn', 'SQLAlchemy (async)', 'asyncpg', 'Alembic', 'Pydantic', 'python-jose (JWT)', 'Passlib', 'Celery', 'Redis', 'aiosmtplib', 'PostgreSQL', 'React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'Recharts', 'Axios', 'pytest', 'Vitest', 'Playwright', 'Docker']
  },
  {
    name: 'Health and Fitness Club Management System',
    description: 'A web-based application for managing health and fitness club operations, including member management, trainer scheduling, class enrollment, equipment maintenance, and fitness goal tracking. Features role-based access for members, trainers, and admins with JWT authentication.',
    githubUrl: 'https://github.com/oscaroguledo/EGEN5208W-Databases-for-Soft-Engineers',
    tags: ['PostgreSQL', 'PL/pgSQL', 'FastAPI', 'Uvicorn', 'SQLAlchemy (async)', 'asyncpg', 'Pydantic', 'python-jose (JWT)', 'Passlib', 'bcrypt', 'React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Axios', 'Docker Compose', 'pytest', 'Python']
  },
  {
    name: 'TodoApp',
    description: 'A modern, full-stack todo application with a clean React frontend and Express.js backend. Features CRUD operations, search, sorting by priority/due date, pagination, responsive design, and system dark mode support.',
    githubUrl: 'https://github.com/oscaroguledo/TodoApp',
    tags: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'react-beautiful-dnd', 'Axios', 'Node.js', 'Express 5', 'MongoDB', 'Mongoose', 'ESLint']
  },
  {
    name: 'Prime Generator in Assembly and C',
    description: 'Generates all prime numbers up to a given limit. An x86-64 assembly routine does the primality test (fast rejection of multiples of 2 and 3, then trial division), called from a C wrapper that verifies results against known primes. Includes a separate C Sieve of Eratosthenes implementation.',
    githubUrl: 'https://github.com/oscaroguledo/prime_to_a_limit_assembly_and_sc',
    tags: ['x86-64 Assembly', 'NASM', 'C', 'Prime Numbers', 'Sieve of Eratosthenes', 'Makefile', 'Systems Programming']
  },
  {
    name: 'Public Key Encryption Algorithm',
    description: 'A Python implementation of a simple public key encryption algorithm featuring key generation, message encryption, and decryption based on cryptographic principles including modular arithmetic and prime number selection. Supports command-line and file input with customizable key lengths.',
    githubUrl: 'https://github.com/oscaroguledo/publickeyalgorithm',
    tags: ['Python', 'Cryptography', 'Public-Key Encryption', 'Modular Arithmetic', 'Prime Numbers', 'CLI', 'Standard Library']
  },
  {
    name: 'Firewall',
    description: 'A Python command-line firewall rule manager that allows users to add, remove, and list firewall rules based on command-line input. Supports IPv4 address ranges, incoming/outgoing traffic bounds, and persists rules to JSON file.',
    githubUrl: 'https://github.com/oscaroguledo/Firewall',
    tags: ['Python', 'Firewall', 'CLI', 'Networking', 'IPv4', 'JSON', 'Standard Library']
  },
  {
    name: 'DTA',
    description: 'A PyQt6 desktop app (with a CLI mode) for analysing document-view logs: it parses user-agent strings, aggregates readers by country and continent, builds "also like" recommendation graphs with Graphviz, and renders tables and matplotlib charts.',
    githubUrl: 'https://github.com/oscaroguledo/dta',
    tags: ['Python', 'PyQt6', 'Qt', 'matplotlib', 'pandas', 'Graphviz', 'user-agents', 'pycountry-convert', 'Desktop App', 'CLI', 'pytest']
  },
  {
    name: 'Weather-App',
    description: 'A Python weather application using the Open-Meteo API with support for hourly, daily, current, and 15-minutely weather data. Features pressure level variables (1000hPa to 30hPa), multiple weather models comparison, solar radiation data for PV planning, agricultural monitoring, and marine weather. Includes Pandas DataFrame integration with caching and retry logic.',
    githubUrl: 'https://github.com/oscaroguledo/Weather-App',
    tags: ['Python', 'Open-Meteo API', 'openmeteo-requests SDK', 'pandas', 'NumPy', 'requests-cache', 'retry-requests', 'Weather Forecast', 'Data Analysis', 'Meteorology']
  },
  {
    name: 'Webbrowser',
    description: 'A web browser built in C# with basic browser functionality including refresh, home page, history navigation (next/previous), favorites, and bulk downloads.',
    githubUrl: 'https://github.com/oscaroguledo/webbrowser',
    tags: ['C#', '.NET Framework 4.7.2', 'WinForms', 'WebView2', 'SQLite', 'Entity Framework 6', 'Web Browser', 'Desktop App']
  },
  {
    name: 'el-deras-writes',
    description: 'A full-stack blog platform built with FastAPI, React, Vite, and PostgreSQL. Features role-based access, JWT authentication, category and tag management, article filtering, email notifications via Brevo, and admin workflows. Deployed on Render (backend) and Cloudflare Pages (frontend) with automated migrations and smoke tests in CI.',
    tags: ['FastAPI', 'Uvicorn', 'SQLAlchemy (async)', 'asyncpg', 'Alembic', 'Pydantic', 'python-jose (JWT)', 'Passlib', 'React 19', 'Vite', 'TypeScript', 'Tailwind CSS', 'Axios', 'PostgreSQL', 'Brevo', 'GitHub Actions', 'Docker', 'Render', 'Cloudflare Pages', 'pytest'],
    githubUrl: 'https://github.com/oscaroguledo/el-deras-writes',
  },
  {
    name: 'Cabine de Français',
    description: 'A speech-driven French learning platform built with React and the Web Speech API, designed to prepare learners for TCF Canada and TEF Canada proficiency exams. Features 989 vocabulary entries across three proficiency tiers (A1–C2 based on CEFR), 26 grammar chapters with interactive quizzes, exam-practice modes matching official formats, pre-rendered native-quality audio clips, real-time pronunciation scoring via speech recognition with fuzzy matching, and a Foundation Score dashboard mapped to Canadian Language Benchmarks. Fully client-side with offline support via service workers.',
    tags: ['React 19', 'Vite', 'TypeScript', 'Web Speech API', 'SpeechRecognition', 'SpeechSynthesis', 'Fuzzy Matching', 'CEFR', 'localStorage', 'marked', 'Service Workers', 'Offline Support', 'PWA', 'Vitest', 'Testing Library', 'oxlint'],
    githubUrl: 'https://github.com/oscaroguledo/cabine-de-francais',
  },
  {
    name: 'G1 Guru',
    description: 'A free Ontario G1 knowledge test practice app with 365 questions, a timed mock exam, road-sign quiz, and progress tracking. Fully offline-capable with 100% test coverage, deployed as a progressive web app. Built from the Official MTO Driver\'s Handbook, features spaced-review weak-question drilling, exam history tracking, and responsive design that works on mobile and desktop.',
    tags: ['React 19', 'Vite', 'JavaScript', '365 Practice Questions', 'Spaced Review', 'Vitest', 'Testing Library', 'vite-plugin-pwa', 'Service Workers', 'PWA', 'localStorage', 'GitHub Actions', 'Responsive Design'],
    githubUrl: 'https://github.com/oscaroguledo/G1-Guru',
  },
  {
    name: 'Necrolink',
    description: 'An AI-powered link checker that detects and resurrects dead and "zombie" links from documents using the Internet Archive\'s Wayback Machine. Accepts PDF, Markdown, and web pages, classifies links into ghosts (404), lost souls (unrecoverable), zombies (content-drifted), and living. Replaces broken links with archived snapshots and flags zombie links with AI-detected drift explanations. Built with Next.js, features property-based testing with fast-check and custom MCP server integration.',
    tags: ['Next.js 14', 'React', 'TypeScript', 'Node.js', 'PDF', 'Markdown', 'Kiro API', 'Internet Archive Wayback Machine', 'fast-check', 'Property-Based Testing', 'Vitest', 'MCP Server', 'AWS', 'Vercel'],
    githubUrl: 'https://github.com/oscaroguledo/Necrolink',
  },
  {
    name: 'GitHub-User-Activity',
    description: 'A lightweight Java CLI tool that fetches and displays recent GitHub user activity in the terminal. Parses GitHub API responses and formats activity logs (push events, pull requests, issues, forks) with clean console output.',
    tags: ['Java', 'GitHub API', 'CLI', 'JSON Parsing'],
    githubUrl: 'https://github.com/oscaroguledo/GitHub-User-Activity',
  },
  {
    name: 'Task-Tracker',
    description: 'A pure-Java command-line task tracker built with no external libraries or frameworks. Stores tasks in JSON, supports full CRUD operations, task status management (todo/in-progress/done), timestamps, and filtering. Includes a shell wrapper for convenient invocation.',
    tags: ['Java 11+', 'JSON', 'CLI', 'File I/O', 'Collections', 'Standard Library'],
    githubUrl: 'https://github.com/oscaroguledo/Task-Tracker',
  },
  {
    name: 'image-recognition-model',
    description: 'An agricultural produce image recognition model built with AI to identify and classify crops, fruits, and vegetables based on visual features. Aids in sorting, quality control, and efficient management of produce in farming and supply chain processes.',
    tags: ['Python', 'Jupyter Notebook', 'Deep Learning', 'Computer Vision', 'TensorFlow', 'Keras', 'Image Classification', 'Agriculture', 'CNN', 'pandas', 'NumPy', 'matplotlib'],
    githubUrl: 'https://github.com/oscaroguledo/image-recognition-model',
  },
  {
    name: 'Simple-Contacts',
    description: 'A full-stack contact management web application built with React frontend and Django backend. Features CRUD operations for contacts with image upload, name, address, and phone number. Uses SQLite for data persistence and Django REST Framework for API endpoints.',
    tags: ['Django', 'Django REST Framework', 'React', 'JavaScript', 'SQLite', 'Axios', 'CSS', 'REST API', 'Full-Stack'],
    githubUrl: 'https://github.com/oscaroguledo/Simple-Contacts',
  },
  {
    name: 'scanner',
    description: 'A Python CLI tool for generating and scanning QR codes and barcodes. Supports embedding logos in generated codes, saving as PNG images or base64-encoded strings, and scanning from image files. Uses pyzbar for scanning and qrcode for generation.',
    tags: ['Python', 'CLI', 'QR Code', 'Barcode', 'pyzbar', 'qrcode', 'Pillow', 'Image Processing', 'argparse'],
    githubUrl: 'https://github.com/oscaroguledo/scanner',
  },
  {
    name: 'W Play',
    description: 'An Android music player and downloader built with React Native. Downloads audio via yt-dlp, converts to tagged MP3 with cover art, auto-detects genres using an on-device ML model (Discogs-EffNet), and provides background playback with notification and lock-screen controls. Everything runs on-device with no backend server or account required.',
    tags: ['React Native', 'TypeScript', 'Kotlin', 'Android', 'yt-dlp', 'FFmpeg', 'MP3 Metadata', 'Media3', 'ExoPlayer', 'ONNX Runtime', 'Discogs-EffNet', 'yt-dlp-android', 'Chaquopy', 'Background Playback', 'Jest', 'GitHub Actions', 'Gradle'],
    githubUrl: 'https://github.com/oscaroguledo/wplay',
  }
];

// Keep the newest projects first in the portfolio.
const projectOrder = [
  'W Play',
  'Necrolink',
  'customer-churn-predictor',
  'movie-reservation-system-2',
  'Cabine de Français',
  'movie-reservation-system',
  'distributed-inventory-engine',
  'GitHub-User-Activity',
  'Task-Tracker',
  'Blog-Platform',
  'Weather-App',
  'TodoApp',
  'Health and Fitness Club Management System',
  'G1 Guru',
  'el-deras-writes',
  'image-recognition-model',
  'Simple-Contacts',
  'scanner',
  'DTA',
  'Prime Generator in Assembly and C',
  'Public Key Encryption Algorithm',
  'Firewall',
  'Webbrowser',
];

const projects = projectOrder.map((name) => {
  const project = projectDefinitions.find((definition) => definition.name === name);

  if (!project) {
    throw new Error(`Missing project definition for "${name}"`);
  }

  return project;
});

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

const TAG_LIMIT = 8;

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  const [showAllTags, setShowAllTags] = useState(false);
  const hiddenCount = project.tags.length - TAG_LIMIT;
  const visibleTags = showAllTags ? project.tags : project.tags.slice(0, TAG_LIMIT);

  const collapse = () => setShowAllTags(false);

  return (
    <motion.a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      custom={idx}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      onMouseLeave={collapse}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) collapse();
      }}
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

        <p
        className="text-muted-text text-sm leading-relaxed mb-6 flex-1 line-clamp-[7]"
        title={project.description}>

          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {visibleTags.map((tag, tagIdx) =>
        <span
          key={tagIdx}
          className="font-mono text-xs text-muted-text/80 bg-background px-2.5 py-1 rounded">

              {tag}
            </span>
        )}
          {!showAllTags && hiddenCount > 0 &&
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowAllTags(true);
          }}
          className="font-mono text-xs text-accent/80 hover:text-accent bg-background px-2.5 py-1 rounded transition-colors duration-200"
          aria-label={`Show ${hiddenCount} more tags`}>

              +{hiddenCount}
            </button>
        }
        </div>
      </div>
    </motion.a>);

}

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
              <ProjectCard key={project.name} project={project} idx={idx} />
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