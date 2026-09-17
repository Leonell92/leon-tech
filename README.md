# Leon Tech — Bridgeway Technologies

> **"Technology built around the way your business works."**

A full-stack web application and API platform for Bridgeway Technologies — offering custom software engineering, business automation, data analytics, systems integrations, and technical support.

---

## Overview

- **Frontend**: React 19, TypeScript, Vite 8, Tailwind CSS v4, React Router v8.
- **Backend API**: Node.js, Express, TypeScript (`tsx`), CORS, JSON file-based persistence for contact inquiries and consultation requests.
- **Key Features**:
  - Fully responsive, accessible, modern UI architecture.
  - Interactive hero showcase with real-time operational views.
  - Directional, immersive workspace visual section with photographic art-direction.
  - 5-stage interactive process explorer (*Understand, Design, Build, Launch, Support*).
  - 8 interactive service visual modules and service detail views.
  - Problem-solving solutions catalog across 6 core operational bottlenecks.
  - Industry solutions spanning Financial Services, Logistics, Education, Healthcare, Retail, and Professional Services.
  - Real-world case studies and operational insight articles.
  - Verified contact inquiries pipeline with backend API validation.
  - Client portal authentication layout.

---

## Project Structure

```text
Leon Tech/
├── public/                 # Static assets and media
│   └── images/             # Photographic assets (workspace, etc.)
├── server/                 # Express backend API
│   ├── data/               # Inquiries and user state storage
│   └── src/
│       ├── index.ts        # Express server entrypoint & API routes
│       └── ...
├── src/                    # React frontend application
│   ├── components/         # Reusable UI, layout & interactive components
│   │   ├── home/           # Homepage hero showcase & process section
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Global CTA and section blocks
│   │   ├── services/       # Interactive service visualizers
│   │   └── ui/             # Search modal, icons, breadcrumbs
│   ├── data/               # Structured data (services, company, case studies, etc.)
│   ├── hooks/              # Custom React hooks (meta, search, etc.)
│   ├── pages/              # Routed pages (Home, Services, About, Contact, etc.)
│   ├── App.tsx             # Main routing and layout shell
│   ├── index.css           # Tailwind CSS v4 global styling
│   └── main.tsx            # Application entrypoint
├── package.json            # Scripts & dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration with Tailwind CSS v4 & React plugins
```

---

## Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- pnpm (v9+ recommended)

### Installation

```bash
# Clone repository
git clone https://github.com/Leonell92/leon-tech.git
cd leon-tech

# Install dependencies
pnpm install
```

### Running Locally

```bash
# Run both Vite frontend and Express backend concurrently
pnpm run dev
```

- **Frontend Preview**: [http://localhost:8443](http://localhost:8443)
- **Backend API**: [http://localhost:3001](http://localhost:3001)

### Building for Production

```bash
pnpm run build
```

---

## License

Private / All rights reserved © Bridgeway Technologies.
