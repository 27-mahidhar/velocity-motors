# VELOCITY MOTORS

A premium, responsive luxury-car showroom built around a cinematic Porsche 918 Spyder experience. The site includes an eight-car collection, model detail pages, a dedicated 918 showcase, an interactive virtual showroom, saved favourites, galleries, and enquiry/test-drive flows.

## Stack

- Next.js App Router, React and TypeScript
- Tailwind CSS and custom responsive styling
- Framer Motion and Lucide icons
- Supabase server-side enquiry storage (optional)
- Docker production deployment using Next.js standalone output

## Local development

Requires Node.js 20.9 or newer and pnpm 11.25.0.

```bash
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install
pnpm dev
```

The development server listens on `http://localhost:3000`.

```bash
pnpm typecheck
pnpm build
pnpm start
```

## Routes

- `/` — Home, collection, filters, virtual showroom, brand story and enquiry form
- `/918-spyder` — Porsche 918 Spyder showcase and gallery
- `/cars/[slug]` — Individual vehicle detail pages (statically generated for the collection)
- `/api/health` — Unauthenticated health check for deployment readiness
- `/api/enquiries` — Server-side enquiry endpoint

## Enquiry storage

Without credentials, accepted enquiries are saved only in the visitor’s browser and the response clearly identifies this demo behavior. For durable storage, set these **server-only** environment variables:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Create an `enquiries` table with columns matching the insert in `app/api/enquiries/route.ts`: `name`, `email`, `phone`, `interested_car`, `message`, `enquiry_type`, `preferred_date`, and `source`. Do not expose the service-role key to client-side code. `.env.example` documents the variable names without values.

## Production container

The committed `Dockerfile` pins pnpm, installs from the lockfile with the repository’s lifecycle-script policy, builds Next.js standalone output, and launches the server on `PORT` (default `3000`). The container health endpoint is `/api/health`.

```bash
docker build -t velocity-motors .
docker run --rm -p 3000:3000 velocity-motors
```

## Vehicle photos and specifications

Local optimized WebP photos are in `public/images/`. Creator, source, license, and source-image details for the ten Wikimedia Commons images are recorded in `public/image-credits.json` and surfaced in the site footer. Vehicle specifications identify trims/years and retain market/unit qualifications in `data/cars.ts`.
