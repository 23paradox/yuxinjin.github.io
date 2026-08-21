# AGENTS.md

## Project purpose

This repository contains the long-term academic homepage of an early-career
mathematical researcher applying for postdoctoral positions.

The research identity is **Stochastic Control and Games with Imperfect
Information**. The current research arc is:

> Imperfect Information → Information Identification → Strategy Revision

The primary audiences, in order, are:

1. potential postdoctoral supervisors;
2. professors and researchers in stochastic control and game theory;
3. potential collaborators;
4. mathematics and control researchers;
5. selected industry researchers.

Optimize for readers who want to establish research fit, mathematical
substance, and credibility quickly. This is an academic website, not a product
landing page or startup portfolio.

## Non-negotiable content integrity

- Never invent or infer publications, preprints, awards, affiliations,
  collaborators, dates, research claims, metrics, biography, contact details,
  or links.
- Use an explicit placeholder such as `TODO: provide affiliation` when verified
  information is unavailable. Do not disguise placeholder copy as fact.
- Treat unpublished or privately supplied research as non-public unless the
  user explicitly marks it public. Do not expose it in pages, metadata, feeds,
  generated files, fixtures, screenshots, or examples.
- Do not strengthen, broaden, sensationalize, or simplify mathematical claims
  in a way that changes their meaning. Preserve qualifications and uncertainty.
- Keep academic prose concise, factual, and specific. Do not add generic
  AI-written slogans or unsupported statements about impact, novelty, or
  expertise.
- Prefer primary, user-supplied sources for academic facts. When sources
  disagree or a status is unclear, flag the conflict instead of resolving it by
  assumption.
- Distinguish publication states accurately (for example: working paper,
  preprint, submitted, accepted, forthcoming, published). Do not present one
  state as another.
- Never commit secrets, private correspondence, unpublished manuscripts, or
  sensitive personal data to the public-site repository.

## Visual direction

The visual character should be young, mathematically serious, quiet,
editorial, restrained, polished, and warm.

Use:

- a warm off-white background;
- charcoal text;
- deep forest green as the primary accent;
- slate gray for metadata;
- burgundy only as a very sparse secondary accent;
- serif display typography paired with a clean sans-serif body face;
- generous whitespace, disciplined typographic hierarchy, and an editorial
  academic layout.

Do not use:

- gradients, glow effects, or glassmorphism;
- excessive rounded cards or iconography;
- oversized animated hero typography;
- tech-startup visual language;
- fake statistics counters;
- decorative or unnecessary animation;
- generic AI-generated slogans;
- emoji in the academic interface.

Prefer typography, spacing, rules, and careful composition over decorative UI
containers. Any motion must have a functional purpose and respect
`prefers-reduced-motion`.

## Technology and architecture

- Build with Astro as a static site. Use TypeScript where it improves content
  safety, maintainability, or build-time validation.
- Keep the output compatible with GitHub Pages, including project-site base
  paths when applicable. Do not assume deployment at the domain root.
- Store publications and projects as structured content with validated schemas;
  never hard-code their records into page components.
- Prefer Astro content collections for authored academic content and a small,
  typed site-data module for global facts such as name, affiliation, navigation,
  and external profiles.
- Define each build-time collection in `src/content.config.ts` with an explicit
  local loader and schema; do not use legacy content-collection conventions.
- Keep content, presentation, and configuration separate. Components may render
  content records but must not become the source of truth for academic facts.
- Use the least client-side JavaScript necessary. Default to server-rendered
  Astro components at build time; add hydrated components only for a clear
  interaction need.
- Preserve a simple, durable URL structure. Avoid unnecessary routing layers or
  dependencies.
- Centralize design tokens (color, typography, spacing, measure, borders, and
  breakpoints) and use them consistently. Do not scatter unexplained literal
  values across components.
- Keep dependencies minimal and justify additions that affect bundle size,
  privacy, accessibility, or long-term maintenance.

## Approved information architecture

The initial public routes are:

- `/` — homepage;
- `/research/` — research agenda and fuller research narrative;
- `/publications/` — complete public publication record;
- `/about/` — academic path, visiting experience, concise personal
  introduction, and a restrained Beyond Research section;
- `/cv.pdf` — public CV asset when the user supplies it.

Do not create a public `/projects/` route at this stage. Structured research or
project records may exist internally and may support Selected Research on the
homepage and Research page. The About page is intentional and must not be
dismissed as an unnecessary lifestyle page.

Do not add Teaching, Blog, News, or a separate Awards page unless explicitly
requested later.

The approved initial homepage hierarchy is:

1. Hero;
2. Research Agenda;
3. Selected Research;
4. Selected Publications;
5. Selected Recognition;
6. Beyond Research;
7. Footer.

The Hero establishes academic identity and current research focus. Research
Agenda communicates the coherent intellectual program. Selected Research
explains a small number of representative public first-author works as research
questions and factual results, rather than only as citations. Selected
Publications supplies conventional bibliographic information. Selected
Recognition contains only a small number of verified distinctions. Beyond
Research adds restrained personal warmth and may later include user-supplied
travel photography. Never fabricate content to fill any section.

## Recommended repository shape

Unless the existing implementation later provides a strong reason otherwise,
use this structure:

```text
/
├─ .github/
│  └─ workflows/
│     └─ deploy.yml        # GitHub Pages build/deployment
├─ public/                  # static public assets (CV, favicon, images)
├─ src/
│  ├─ assets/              # optimized source-controlled media
│  ├─ components/          # reusable presentational components
│  ├─ content/
│  │  ├─ publications/    # one structured entry per work
│  │  └─ projects/        # one structured entry per project
│  ├─ data/                # typed global/public site facts
│  ├─ layouts/             # shared page and document layouts
│  ├─ pages/               # approved public route entry points
│  ├─ styles/              # tokens, global styles, utilities
│  ├─ content.config.ts    # content collection schemas
│  └─ env.d.ts
├─ astro.config.mjs
├─ package.json
├─ tsconfig.json
└─ AGENTS.md
```

Do not create empty directories merely to mirror this proposal. Add them when a
real implementation or content need appears.

## Structured content rules

- Define and validate schemas before adding publication or project records.
- Prefer one file per publication/project so changes remain reviewable.
- Use stable identifiers or slugs; do not derive identity solely from a title
  that may change.
- Model only real distinctions. Optional fields should remain absent rather
  than receiving fabricated filler values.
- Publication fields should support, as needed: title, authors in display order,
  year, status, venue, abstract/summary, links, citation data, tags, and display
  order. Do not require fields the user cannot yet verify.
- Project fields should support, as needed: title, concise factual description,
  status, dates, collaborators, related publications, links, tags, and display
  order. Keep private projects out of the public content tree.
- Represent links explicitly by purpose (paper, preprint, journal, code, slides,
  DOI, or other) rather than guessing their meaning in components.
- Keep author order, capitalization, mathematical notation, and citation text as
  supplied unless the user approves normalization.
- Support both a complete chronological/all-publications view and optional
  thematic grouping when verified research content supports it.
- Keep publication themes configurable. Do not invent a thematic taxonomy or
  force records into inaccurate categories to fit the broader research arc.
- The site may represent the arc Imperfect Information → Information
  Identification → Strategy Revision, but each publication must retain its
  factually supported classification.

## Accessibility, semantics, and responsive behavior

- Use semantic HTML landmarks, a logical heading hierarchy, meaningful link
  text, and keyboard-accessible interactions.
- Provide a visible focus state and a skip link. Do not encode meaning through
  color alone.
- Maintain readable line lengths, adequate contrast, and comfortable text sizes
  on both desktop and mobile.
- Supply informative alternative text for meaningful images and empty `alt`
  text for decorative images. Do not fabricate descriptions of people or work.
- Respect zoom, text resizing, reduced-motion preferences, and forced-colors
  modes where practical.
- Treat mobile as a first-class reading experience. Avoid horizontal overflow
  in equations, publication metadata, navigation, and long URLs.
- Prefer progressive enhancement; core academic content and navigation must work
  without client-side JavaScript.

## Metadata, privacy, and external services

- Metadata, structured data, feeds, and social preview content are subject to
  the same no-invention rules as visible page copy.
- Do not add analytics, trackers, remote fonts, embedded third-party widgets, or
  form services without explicit approval and a privacy review.
- Prefer self-hosted font files with appropriate licenses, or a robust system
  font fallback, over runtime third-party font requests.
- Remove image metadata when it could reveal private information, and do not
  publish source-resolution personal images unnecessarily.
- External links must be factual and verified. Use safe attributes where a new
  browsing context is genuinely needed.

## Working agreement for future agents

1. Read this file and inspect the relevant files before editing.
2. Preserve the existing project structure and public interfaces unless a
   change is necessary and approved.
3. Before major implementation or redesign work, briefly describe the intended
   changes and affected files. For multiple substantive steps, keep a short
   implementation plan current.
4. Prefer minimal, localized, reviewable changes over broad rewrites. Do not
   reformat or rename unrelated files.
5. Ask before deleting files, renaming public routes, changing content schemas
   incompatibly, or making a wide architectural change.
6. When several reasonable choices exist, choose the most conservative option
   that preserves content integrity, accessibility, static delivery, and ease
   of maintenance.
7. Do not begin visual implementation from a vague brief. Inventory verified
   content and agree on the information architecture first; use clearly marked
   placeholders for missing facts.
8. Do not introduce sample academic achievements or fictional publication data
   as design fixtures. If development fixtures are unavoidable, label them
   unmistakably as non-public test data and keep them out of production output.
9. After implementation, run the smallest relevant checks. For nontrivial work,
   normally run formatting/linting (when configured), Astro/TypeScript checks,
   the production build, and targeted accessibility or link checks.
10. Verify the built site under the intended GitHub Pages base path, not only at
    `/`. Report exactly which checks ran and any remaining warnings or issues.
11. Report the files changed and summarize actual modifications. Surface
    uncertainties and unverified content explicitly.

## Current implementation phase boundary

Phase 2 is approved only for the structural skeleton and technical foundation:
Astro setup, strict TypeScript, static routing, typed global data, empty
validated content collections, shared semantic structure, basic reset/global
CSS, functional navigation, and sound desktop/mobile document flow.

Until the user explicitly approves Phase 3, do not implement final typography,
the final palette, portrait composition, publication visual styling, research
diagrams, a gallery, animations, decorative cards, or the final spacing system.
Do not create a CV or public academic records from placeholder information.
