# juan-portfolio

Production-grade split-screen developer portfolio (Borys Khomych). Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Static export-ready.

**Layout:** 50/50 split on desktop (≥1024px): left = fixed intro + portrait + CTAs; right = scrollable Project Archive. On mobile: stacked, full-width, normal scroll.

---

## Folder tree (after refactor)

```
juan-portfolio/
├── app/
│   ├── globals.css      ← split-root, desktop scroll containment, reduced-motion
│   ├── layout.tsx       ← global styles only (fonts, metadata, skip link)
│   └── page.tsx         ← split layout: LeftPane + RightPaneProjects
├── components/
│   ├── LeftPane.tsx           ← portrait, name, title, one-liner, two CTAs (fixed on desktop)
│   ├── RightPaneProjects.tsx ← Project Archive header (🇺🇦), grid of cards
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Section.tsx
│   └── Terminal.tsx
├── public/
│   ├── Borys.png              ← left pane portrait
│   ├── Borys_Khomych_CV.pdf   ← add your CV here
│   ├── favicon.svg
│   └── …
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── next.config.mjs
├── package.json
├── postcss.config.cjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Run commands

```bash
cd juan-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Production build:

```bash
npm run build
npm run start
```

Static export: `npm run build` → output in `out/`. Lint/format: `npm run lint`, `npm run format`.

---

## Where to replace portrait and CV

- **Portrait:** Put your photo at `public/Borys.png`. The portfolio image uses `src="/Borys.png"`.
- **CV:** Put your PDF at `public/Borys_Khomych_CV.pdf`. Update the Download CV link in `LeftPane.tsx` if needed.

---

## How to add more projects

Edit the `PROJECTS` array in `components/RightPaneProjects.tsx`. Each item has:

- `title` — project name
- `impact` — one-line description
- `stack` — array of tech strings (e.g. `["Next.js", "Node", "AWS"]`)

Add new objects to the array; cards render in order with the same stagger and hover behavior.

---

## Commands to run locally (npm) [legacy]

From the project root:

```bash
cd juan-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Build and run a production build:

```bash
npm run build
npm run start
```

Static export (output in `out/`):

```bash
npm run build
# Serve the static export, e.g.:
npx serve out
```

Lint and format:

```bash
npm run lint
npm run format
```

---

## Deploy to Vercel

1. Push the repo to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com) and sign in.
3. **Add New Project** → import the `juan-portfolio` repo.
4. Leave **Framework Preset** as Next.js and **Root Directory** as `.`
5. **Deploy**. Vercel will use `next build`; with `output: "export"` you get a static export automatically.

Or via CLI:

```bash
npm i -g vercel
cd juan-portfolio
vercel
```

Follow the prompts (link to existing project or create new). For production:

```bash
vercel --prod
```

---

## Where to drop assets and update content

- **Portrait**  
  The portfolio uses `public/Borys.png`. Replace that file to update the portrait.

- **CV**  
  Put your PDF in `public/Borys_Khomych_CV.pdf`. Update the Download CV link in `LeftPane.tsx` if needed.

- **Project list**  
  Edit the `PROJECTS` array in `components/Projects.tsx`. Each item has `title`, `impact`, and `stack` (array of strings). Add/remove entries and adjust copy as needed.

- **Experience**  
  Edit the `EXPERIENCES` array in `components/Experience.tsx` (role, company, period, description).

- **Favicon**  
  Replace `public/favicon.svg` with your own (e.g. monogram or logo). Layout already uses `/favicon.svg` in metadata.

---

## Reduced motion

Animations respect `prefers-reduced-motion: reduce`:

- **Framer Motion**: `useReducedMotion()` is used in Header, Hero, Section, Projects, and Experience. When reduced motion is preferred, entrance/reveal and hover animations are disabled or simplified (e.g. no stagger, no lift/scale).
- **Terminal**: When reduced motion is preferred, the typing animation is skipped and all lines are shown at once.
- **Scroll**: Smooth scroll is disabled in `app/globals.css` when reduced motion is preferred; anchor links jump without animation.
- **Header**: The scroll progress bar is not rendered when reduced motion is preferred.

To test: enable “Reduce motion” in your OS (e.g. Windows: Settings → Accessibility → Visual effects; macOS: System Preferences → Accessibility → Display). No code changes are required to toggle or remove animations; the site reacts to the user’s system preference.

---

## Tech stack

- Next.js 14+ (App Router), TypeScript  
- Tailwind CSS, PostCSS, Autoprefixer  
- Framer Motion (entrance, section reveal, card hover)  
- ESLint, Prettier  
- Next Fonts: Inter (headings/body), JetBrains Mono (code/terminal)  
- Static export (`output: "export"`); no server DB; contact via mailto  

Design tokens (CSS variables) and typography are defined in `app/globals.css` and `tailwind.config.ts`. Container max width is 1100px. Aim for Lighthouse 95+ on Performance, Accessibility, Best Practices, and SEO.
