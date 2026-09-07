# Oscar Oguledo — Portfolio

Full-Stack Developer working across web applications, event-driven backend systems, and applied machine learning.

**Live site:** _(add deployment URL)_ &nbsp;•&nbsp; **GitHub:** [github.com/oscaroguledo](https://github.com/oscaroguledo) &nbsp;•&nbsp; **LinkedIn:** [Oscar Oguledo](https://www.linkedin.com/in/oscar-oguledo-341bb2206)

---

## Overview

This repository contains the source for my personal portfolio site. It presents a curated
selection of my work spanning full-stack products, distributed backend services, systems
programming, and data science.

I focus on building software that is correct under load, cleanly architected, and
maintainable over time.

## About This Site

| | |
|---|---|
| **Framework** | React 18 + TypeScript |
| **Build** | Vite 6 |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Icons** | Lucide |

```bash
npm install     # install dependencies
npm run dev     # start the dev server
npm run build   # produce a production build
npm run preview # preview the production build locally
```

## Technical Skills

**Languages** — Python, JavaScript, TypeScript, Java, C#, C, R, SQL, x86-64 Assembly

**Frontend** — React, Vite, Tailwind CSS, Framer Motion, React Router, Recharts

**Backend** — FastAPI, Spring Boot, Node.js / Express, Django; RESTful APIs, JWT auth,
event-driven services

**Data & Infrastructure** — PostgreSQL, MySQL, MongoDB, SQLite; SQLAlchemy, Alembic,
Hibernate / JPA, Flyway; Apache Kafka, Redis, Celery; Docker, GitHub Actions, CI/CD;
Prometheus, Grafana, OpenTelemetry, Jaeger; AWS, Heroku, DigitalOcean

**Machine Learning & Data Science** — scikit-learn, pandas, NumPy, tidymodels, matplotlib,
seaborn, TensorFlow, OpenCV; classification & regression, ensemble methods, cross-validation,
hyperparameter tuning, model evaluation (ROC-AUC, RMSE, feature importance); Jupyter
Notebook, R Markdown

**Testing** — pytest, Vitest, Playwright, JUnit 5, Testcontainers

## Selected Projects

### Machine Learning & Data Science

| Project | Summary | Stack |
|---|---|---|
| [Customer Churn Predictor](https://github.com/oscaroguledo/Customer-Churn-Predictor) | Predicts subscription churn on the Telco dataset; compares Logistic Regression, Decision Tree, and Random Forest on precision / recall / F1 / ROC-AUC with churn-driver analysis. | Python, scikit-learn, pandas, Jupyter |
| [ECMP5005 Housing Regression](https://github.com/oscaroguledo/ecmp5005-housing-regression) | Predicts Ames house prices; benchmarks a pruned regression tree, bagged ensemble, and random forest on test-set RMSE with permutation feature importance. | R, tidymodels, ranger, rpart |

### Backend & Distributed Systems

| Project | Summary | Stack |
|---|---|---|
| [Movie Reservation System 2](https://github.com/oscaroguledo/Movie-Reservation-System-2) | Java rewrite split into `auth-api` and `movie-api` services synced over Kafka, with Postgres storage and Redis-backed seat locks. | Java 21, Spring Boot 3, Kafka, PostgreSQL, Redis |
| [Movie Reservation System](https://github.com/oscaroguledo/Movie-Reservation-System) | Reservation platform with real-time seat holds, guest and authenticated bookings, and admin revenue reporting. | FastAPI, PostgreSQL, Kafka, Redis |
| [Distributed Inventory Engine](https://github.com/oscaroguledo/distributed-inventory-engine) | High-concurrency inventory and order engine using Redis atomic Lua scripts and PgBouncer, with a full metrics and tracing stack. | FastAPI, Redis, PostgreSQL, Prometheus, Grafana, Jaeger |

### Full-Stack Applications

| Project | Summary | Stack |
|---|---|---|
| [Blog Platform](https://github.com/oscaroguledo/blog-app-fastapi-react) | Blog with authentication, categories and tags, nested comments, an analytics dashboard, and containerised deployment. | FastAPI, React, PostgreSQL, Celery, Docker |
| [Health & Fitness Club Management System](https://github.com/oscaroguledo/EGEN5208W-Databases-for-Soft-Engineers) | Role-based club management for members, trainers, and admins covering scheduling, enrolment, and equipment maintenance. | FastAPI, PostgreSQL / PL/pgSQL, React |
| [TodoApp](https://github.com/oscaroguledo/TodoApp) | Full-stack task manager with search, priority and due-date sorting, pagination, and dark mode. | React, TypeScript, Express, MongoDB |

### Systems, Security & Tooling

| Project | Summary | Stack |
|---|---|---|
| [Prime Generator in Assembly and C](https://github.com/oscaroguledo/prime_to_a_limit_assembly_and_sc) | x86-64 assembly primality routine called from a C wrapper, alongside a C Sieve of Eratosthenes. | x86-64 Assembly, NASM, C |
| [Public Key Encryption Algorithm](https://github.com/oscaroguledo/publickeyalgorithm) | From-scratch public-key encryption using modular arithmetic and prime selection, with CLI and file input. | Python |
| [Firewall](https://github.com/oscaroguledo/Firewall) | CLI firewall rule manager for IPv4 ranges with JSON persistence. | Python |
| [DTA](https://github.com/oscaroguledo/dta) | Desktop and CLI tool for analysing document-view logs, with country and continent aggregation and "also like" recommendation graphs. | Python, PyQt6, pandas, Graphviz |
| [Weather App](https://github.com/oscaroguledo/Weather-App) | Open-Meteo client for hourly, daily, marine, and agricultural weather data with pandas integration. | Python, Open-Meteo API, pandas |
| [Web Browser](https://github.com/oscaroguledo/webbrowser) | Windows browser with history navigation, favorites, and bulk downloads. | C#, .NET, WinForms, WebView2 |

## Contact

- **Email** — [oscarchiagoziem@gmail.com](mailto:oscarchiagoziem@gmail.com)
- **GitHub** — [oscaroguledo](https://github.com/oscaroguledo)
- **LinkedIn** — [Oscar Oguledo](https://www.linkedin.com/in/oscar-oguledo-341bb2206)

Open to full-stack, backend, and machine learning opportunities.
