# Product Owner Portfolio Case Study (React + TypeScript)

This project rebuilds `uxpilot.html` as a production-ready, single-page React case study with:

- Modular React components + CSS Modules
- Data-driven content from `src/content/caseStudy.ts`
- Glossary system from `src/content/glossary.ts` with inline term tooltips
- Artifact PDF integration from `public/artifacts/*.pdf`
- Sticky navigation, active-section highlighting, smooth scrolling, and hash sync

## Tech

- React + TypeScript + Vite
- CSS Modules (no Tailwind runtime)
- Font Awesome React icons

## Run locally

```bash
npm install
npm run dev
```

## Update content

Edit `src/content/caseStudy.ts`.

This is the single source of truth for:

- Site metadata and navigation items
- Hero content
- Philosophy and framework cards
- Numbered sections (Vision, Goals, Personas, Risks, Journey, Story Map, Stories, Traceability, Reflection)
- KPI cards
- Persona definitions
- User stories + acceptance criteria
- Traceability rows
- Artifact file names

No body copy should be hard-coded in section components.

## Add or update glossary terms

Edit `src/content/glossary.ts`.

Each term must include:

- `term`
- `aliases`
- `shortDefinition`
- `longDefinition` (3 to 6 sentences)
- `whyItMatters` bullets

`TooltipTerm` is injected automatically when terms appear in section body text. Desktop uses hover/click tooltip behavior; mobile uses the glossary drawer.

## Add or replace PDFs

1. Place files in `public/artifacts/`.
2. Update the matching `filename` entries in `src/content/caseStudy.ts`.

Example path at runtime:

- `public/artifacts/vision.pdf` -> `/artifacts/vision.pdf`

The UI supports:

- Expandable artifacts panel per section
- In-app PDF modal embed (iframe)
- Fallback `Open in new tab`

## Quality checks

```bash
npm run format
npm run lint
npm run typecheck
npm run build
```

## Optional deployment

Any static host that supports Vite `dist/` output works, including:

- Vercel
- Netlify
- GitHub Pages

Build command:

```bash
npm run build
```

Update Website command:
```bash
npm run deploy
```

Output directory:

```txt
dist
```
