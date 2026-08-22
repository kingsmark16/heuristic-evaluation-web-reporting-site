# Heuristic Evaluation Web Reporting Site

A React + Vite web app that presents a heuristic evaluation report for a **Water Billing Management System**.  
The site organizes evaluator details, DECIDE framework outputs, usability findings, workbook PDFs, and proposed UI improvements in a single navigable interface.

## Features

- Sidebar-driven navigation across report sections
- DECIDE framework pages (Determine, Explore, Choose, Identify, Decide, Evaluate)
- Evaluation results pages for:
  - Usability problems found
  - Heuristic evaluation workbooks
  - Tasks used during evaluation
  - Evaluation conclusion
- Proposed UI improvement section
- Animated UI elements (GSAP + Framer Motion)
- Theme switching support (DaisyUI themes)

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router
- **Styling:** Tailwind CSS + DaisyUI + Flowbite
- **Animation:** GSAP + Framer Motion
- **PDF Rendering:** react-pdf
- **Icons:** lucide-react

## Project Structure

```text
src/
  components/          Reusable UI components
  pages/               Route-based pages
  data/                Report content and page data
  assets/              Images used in the report
public/                Heuristic evaluation workbook PDFs
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local URL shown by Vite (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` – Start local development server
- `npm run host` – Start dev server exposed on local network
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Run ESLint

## Deployment Notes

- SPA rewrite rules are configured in `vercel.json`.
- Base path can be configured with `VITE_BASE_PATH`.
