# Oscar Oguledo — Portfolio

Personal portfolio website for Oscar Oguledo, a full-stack developer working across
web applications, event-driven backend systems, systems programming, and applied
machine learning.

[![Live site](https://img.shields.io/badge/Live%20site-Portfolio-445E86)](#building-and-deploying)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vite.dev/)

## Contents

- [Overview](#overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Architecture](#architecture)
- [Projects](#projects)
- [Building and deploying](#building-and-deploying)
- [Contact](#contact)

## Overview

The site presents a curated selection of software projects, technical skills, and
contact information in a responsive single-page experience. The projects section is
ordered newest first and uses pagination so the complete portfolio remains easy to
browse.

The design emphasizes:

- Clear presentation of full-stack, backend, and machine-learning work
- Responsive layouts for desktop and mobile
- Accessible navigation, links, buttons, and project cards
- Lightweight production output through Vite and code-split sections
- Subtle motion and interaction without obscuring content

## Features

- Hero section with introduction and primary calls to action
- About section describing experience and engineering focus
- Categorized technology overview
- Paginated project cards with GitHub links
- Expandable project technology tags
- Contact section with email, GitHub, LinkedIn, and résumé links
- Lazy-loaded page sections with loading states
- Responsive Tailwind CSS styling
- Framer Motion transitions and hover states

## Tech stack

| Area | Technology |
| --- | --- |
| Language | TypeScript |
| UI framework | React 18 |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| CSS processing | PostCSS and Autoprefixer |
| Deployment output | Static files in `dist/` |

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Install and run

```bash
git clone https://github.com/oscaroguledo/portfolio.git
cd portfolio
npm install
npm run dev
```

Vite starts the development server and prints the local URL in the terminal.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project structure

```text
portfolio/
├── public/
│   ├── Oscar's_resume.pdf
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Technologies.tsx
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Architecture

The application is a single-page React experience composed from focused sections:

1. `App.tsx` provides the page shell and navigation order.
2. `Navbar` and `Hero` load immediately for a fast initial render.
3. `About`, `Technologies`, `Projects`, and `Contact` are lazy-loaded with
   `React.lazy` and `Suspense`.
4. `Projects` owns the project catalogue, newest-first ordering, pagination, and
   expandable tag behavior.
5. Tailwind utility classes and the shared theme in `tailwind.config.js` provide
   the visual system.

There is no application backend or runtime database. Project content and contact
details are maintained in the React source, while résumé and branding assets are
served from `public/`.

## Projects

Projects are displayed newest first in the website. The current selection includes:

| Project | Focus | Repository |
| --- | --- | --- |
| W Play | React Native music player with on-device genre detection | [wplay](https://github.com/oscaroguledo/wplay) |
| Necrolink | AI-assisted dead-link detection and recovery | [Necrolink](https://github.com/oscaroguledo/Necrolink) |
| Customer Churn Predictor | Classification, model evaluation, and churn analysis | [Customer-Churn-Predictor](https://github.com/oscaroguledo/Customer-Churn-Predictor) |
| Movie Reservation System 2 | Spring Boot services, Kafka, PostgreSQL, and Redis | [Movie-Reservation-System-2](https://github.com/oscaroguledo/Movie-Reservation-System-2) |
| Cabine de Français | Speech-driven French learning PWA | [cabine-de-francais](https://github.com/oscaroguledo/cabine-de-francais) |
| Movie Reservation System | FastAPI reservation platform with event-driven services | [Movie-Reservation-System](https://github.com/oscaroguledo/Movie-Reservation-System) |
| Distributed Inventory Engine | Concurrent inventory processing and observability | [distributed-inventory-engine](https://github.com/oscaroguledo/distributed-inventory-engine) |
| GitHub User Activity | Java CLI for GitHub activity | [GitHub-User-Activity](https://github.com/oscaroguledo/GitHub-User-Activity) |
| Task Tracker | Pure Java CLI task manager | [Task-Tracker](https://github.com/oscaroguledo/Task-Tracker) |
| Blog Platform | FastAPI and React publishing platform | [blog-app-fastapi-react](https://github.com/oscaroguledo/blog-app-fastapi-react) |
| Weather App | Open-Meteo client with data analysis features | [Weather-App](https://github.com/oscaroguledo/Weather-App) |
| TodoApp | React, Express, and MongoDB task manager | [TodoApp](https://github.com/oscaroguledo/TodoApp) |
| Health & Fitness Club Management | Role-based club operations platform | [EGEN5208W-Databases-for-Soft-Engineers](https://github.com/oscaroguledo/EGEN5208W-Databases-for-Soft-Engineers) |
| G1 Guru | Offline Ontario G1 practice PWA | [G1-Guru](https://github.com/oscaroguledo/G1-Guru) |
| El Deras Writes | Full-stack blog with deployment and CI workflows | [el-deras-writes](https://github.com/oscaroguledo/el-deras-writes) |
| Image Recognition Model | Agricultural image classification | [image-recognition-model](https://github.com/oscaroguledo/image-recognition-model) |
| Simple Contacts | Django and React contact manager | [Simple-Contacts](https://github.com/oscaroguledo/Simple-Contacts) |
| Scanner | QR code and barcode CLI utility | [scanner](https://github.com/oscaroguledo/scanner) |
| DTA | Document-view log analysis and recommendations | [dta](https://github.com/oscaroguledo/dta) |
| Prime Generator | x86-64 assembly and C systems programming | [prime_to_a_limit_assembly_and_sc](https://github.com/oscaroguledo/prime_to_a_limit_assembly_and_sc) |
| Public Key Encryption Algorithm | Python modular-arithmetic encryption project | [publickeyalgorithm](https://github.com/oscaroguledo/publickeyalgorithm) |
| Firewall | IPv4 firewall rule manager | [Firewall](https://github.com/oscaroguledo/Firewall) |
| Web Browser | C# desktop browser | [webbrowser](https://github.com/oscaroguledo/webbrowser) |

## Building and deploying

Create the production bundle with:

```bash
npm run build
```

The generated `dist/` directory is a static site and can be deployed to any
static hosting provider, including GitHub Pages, Netlify, Vercel, Cloudflare Pages,
or an object-storage CDN.

To inspect the production build locally:

```bash
npm run preview
```

## Contact

- **Email:** [oscarchiagoziem@gmail.com](mailto:oscarchiagoziem@gmail.com)
- **GitHub:** [oscaroguledo](https://github.com/oscaroguledo)
- **LinkedIn:** [Oscar Oguledo](https://www.linkedin.com/in/oscar-oguledo-341bb2206)
- **Résumé:** [`public/Oscar's_resume.pdf`](./public/Oscar%27s_resume.pdf)

Open to full-stack, backend, and machine-learning opportunities.

## License and ownership

This is a personal portfolio project. Project descriptions and links are maintained
by Oscar Oguledo. Individual projects linked above may have their own licenses and
ownership terms.
