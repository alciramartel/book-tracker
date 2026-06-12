# 📚 Book Tracker

A personal book tracker to browse a catalog of books and manage your own reading list — built with React, TypeScript, and Vite.

> **Status:** In active development. Building in public as part of my transition into design engineering.

<!-- TODO: add a screenshot or GIF once the UI is further along.
     Example: ![Book Tracker screenshot](./docs/preview.png) -->

<!-- TODO: add the live demo link once deployed (Vercel / Netlify)
**🔗 [Live Demo](https://your-deploy-url.com)** -->

## About

Book Tracker lets you browse a curated catalog of books and build a personal library, marking each title as *want to read*, *reading*, or *read*. The project focuses on clean component architecture, type-safe state management, and a carefully designed UI.

This is a portfolio project where I'm applying both my frontend engineering background and a design-systems mindset: consistent spacing, deliberate visual hierarchy, and accessible color contrast.

## Features

- **Book catalog** — responsive grid of book cards with cover, title, author, and category tags
- **Personal library** — add books and track their reading status
- _(in progress)_ Filtering by reading status
- _(planned)_ Persistent data via a lightweight backend

## Tech Stack

- **React** — component-based UI
- **TypeScript** — type-safe data models and props
- **Vite** — build tooling and dev server
- **CSS** — custom styling with a token-based approach (spacing scale, semantic colors)

## Getting Started

### Prerequisites

- Node.js (LTS version)

### Installation

```bash
# Clone the repository
git clone https://github.com/alciramartel/book-tracker.git

# Navigate into the project
cd book-tracker

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

## Project Structure

```
src/
├── components/   # Reusable UI components (BookCard, ...)
├── pages/        # Page-level components (BookCatalog, ...)
├── models/       # TypeScript interfaces and types (Book, ...)
├── mock/         # Local sample data
└── ...
```

## What I'm practicing here

- Lifting state up and managing shared state immutably
- Type-safe modeling with TypeScript (interfaces, union types)
- Responsive layouts with CSS Grid and Flexbox
- Applying design fundamentals: 8-point spacing, typographic hierarchy, WCAG-aware contrast

---

Built by [Alcira Martel](https://github.com/alciramartel)