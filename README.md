# my-personal-docs

This repository contains a personal documentation site built with Next.js and Nextra. It stores documentation and example pages under `src/app/docs` and includes a small set of UI components in `src/components`.

## Quick start

Recommended package manager: pnpm (this repo contains a `pnpm-lock.yaml`). From the project root run:

```pwsh
pnpm dev
```

You can also use npm, yarn or bun if you prefer:

```pwsh
npm run dev
# or
yarn dev
# or
bun dev
```

Then open http://localhost:3000 in your browser.

Edit the app entry at `app/page.tsx` or the MDX pages under `src/app/docs` to modify site content. The dev server supports hot reload.

## Scripts

This project exposes the following scripts (defined in `package.json`):

- `pnpm dev` / `npm run dev` — run the Next.js dev server (this project uses Turbopack by default).
- `pnpm build` / `npm run build` — build the production app.
- `pnpm start` / `npm start` — start the production server after build.
- `pnpm lint` / `npm run lint` — run ESLint.

There is also a `postbuild` step that runs `pagefind` to generate the static search index into `public/_pagefind`:

```
pnpm build
# then the postbuild runs automatically: pagefind --site .next/server/app --output-path public/_pagefind
```

## Notes and tech

- Next.js: v15
- React: v19
- Bundler: Turbopack (used for `dev` and `build` by default in `package.json`).
- Static search: `pagefind` is configured (see `postbuild` script) to create a client-side search index.
- MDX/Nextra: the site uses `nextra` and `nextra-theme-docs` for documentation layout.

Important files and folders:

- `app/` — top-level Next.js app directory and routes.
- `src/app/docs` — documentation MDX pages.
- `src/components` — UI components used across the site.
- `public/` — static assets and the generated Pagefind index at `public/_pagefind`.

## Build & deploy

1. Build the site:

```pwsh
pnpm build
```

2. The `postbuild` step will generate the Pagefind index into `public/_pagefind` automatically.

3. Deploy the `.next` output and `public/` folder to your hosting provider (Vercel, Netlify, or any static host that supports Next.js).

Tip: Vercel is the easiest to use for Next.js apps; for static export or other providers, verify the server/runtime you need depending on dynamic features.

## Contributing

1. Fork or branch from `main`.
2. Make your changes and run the dev server locally.
3. Run linting and ensure the site builds:

```pwsh
pnpm lint
pnpm build
```

4. Open a PR with a short description of changes.

If you'd like me to add tests, CI, or a deployment pipeline (GitHub Actions / Vercel configuration), tell me what you'd prefer and I can add it.

## License

This repository currently has no license file. Add a `LICENSE` if you want to specify terms for reuse.
