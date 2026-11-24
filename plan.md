# VELOCITY MOTORS — Implementation Plan

## Product and implementation approach

Build a polished, responsive automotive showroom as a Next.js App Router application with React and TypeScript. Use Tailwind CSS for the design system, Framer Motion for restrained transitions, and optional Three.js only if it improves performance and fidelity; the core cinematic experience will remain robust without WebGL. A secure Next.js route will accept enquiries and forward them to Supabase only when server-side environment credentials are configured. Until those credentials and the expected `enquiries` table are supplied, the forms will offer a clear local demonstration mode rather than implying remote persistence. Vercel compatibility will be maintained, but deployment is not included in this task.

## Design

- **Design movement:** Contemporary automotive editorial, borrowing the quiet precision of premium marque campaign photography without copying Porsche site layouts.
- **Core principles:** Lead with the car; use deliberate negative space; keep technical information precise; make every interaction feel calm and tactile.
- **Color philosophy:** Ink-black and graphite create a dark gallery; warm white keeps long copy legible; restrained Guards red signals performance and action; brushed silver carries the specification language.
- **Layout paradigm:** Full-bleed hero and showroom interludes, interrupted by offset editorial compositions and a horizontally expressive collection rather than repeated centered cards.
- **Signature elements:** A thin red instrument-line motif; oversized condensed vehicle numerals/labels; soft floor reflections and light-sweep transitions.
- **Interaction philosophy:** Motion is purposeful and skippable. Search and filters respond immediately. Modals and fullscreen media remain keyboard-accessible and closable.
- **Animation:** Use short, eased opacity/position transitions, slow image scale for cinematic emphasis, and reduced-motion fallbacks. Avoid blocking scroll after the intro; allow skip/replay and avoid audio autoplay assumptions.
- **Typography system:** Use a high-contrast editorial serif for selected campaign headlines, a clean geometric sans for navigation/body, and a compact mono face for specifications; use local or reliably loaded open web fonts with system fallbacks.
- **Brand essence:** An appointment-led destination for collectors seeking exceptional performance cars; assured, exacting, cinematic.
- **Brand voice:** Sparse, confident, specific. Example lines: “Born to perform. Designed to inspire.” and “Eight icons. One considered collection.”
- **Wordmark & logo:** A custom typographic VELOCITY wordmark paired with a small split-speedline V monogram, drawn as a scalable inline vector/CSS mark rather than relying on generated text.
- **Signature brand color:** Deep signal red `#D71920`.

## Routes and component structure

- `/` — cinematic entry, featured collection, virtual showroom, marque story and contact section.
- `/918-spyder` — dedicated Porsche 918 exterior, interior, hybrid-performance, specification and gallery narrative.
- `/cars/:slug` — model detail page for each collection entry, with specs, gallery, favourite and enquiry actions.
- `public/manus-routes.json` — synchronized route manifest for the above routes.

Expected source structure:

- `app/` — Next.js routes, layout, metadata, and enquiry API route.
- `components/` — navigation, intro/hero, cards, filter/search, showroom, gallery/lightbox, forms, and shared UI primitives.
- `data/cars.ts` — typed car catalogue, model-specific factory specifications, qualifications, source credits, image references, and explicitly indicative filter bands.
- `public/images/` — downloaded and optimized vehicle photography with a companion attribution record.
- `lib/` — Supabase server adapter, form validation, and local demo persistence helpers.
- `plan.md`, `TODO.md` — approved design/implementation plan and outcome criteria.

## Functional and content decisions

The first visit begins in near-black and reveals an authentic red Porsche 918 through timed light, image crops and slow camera-style movement; users may skip or replay it. The engine-start cue is initiated in response to an explicit user gesture where browser autoplay policy requires that. Collection cards retain manufacturer-published power units (PS, cv, or SAE hp as specified), model/trim context, and approximate/market-dependent notes. Price filtering uses clearly labelled indicative USD market tiers only; no exact asking prices or live inventory claims will be presented. Images will be real, accurately identified photographs whose source and reuse terms are verified and credited; avoid unverifiable or broken external placeholders.

The wishlist persists in browser storage. Collection filter state, detail links, image fullscreen viewing, enquiry/test-drive validation, and mobile navigation operate in the client. WhatsApp uses a safe share/message link because a showroom-specific phone number was not provided. Location copy remains appointment-led and does not invent an address. The enquiry API does not expose Supabase credentials to the browser. If the environment is not configured, submissions are explicitly stored only in the local demo state.

## Dependencies and serving

Use a pinned pnpm toolchain, Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Lucide icons, and `@supabase/supabase-js` for optional server-side enquiry storage. Configure a Next development command on the initialized port 3000 through Webdev runtime settings. Preserve all user/project files. Set a useful site metadata logo URL before checkpointing. Run available diagnostics and a production build; keep preview distinct from publication and do not publish unless separately requested.
