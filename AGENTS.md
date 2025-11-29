# Repository Guidelines

## Project Structure & Module Organization
- React 19 + TypeScript via Vite; entrypoint `index.tsx` renders `App.tsx` with `HashRouter` routing through `RoutePath` enums.
- `components/` holds shared UI (Header, Footer, Layout, ProductCard, BlogCard) and should stay presentational.
- `pages/` contains route screens (Home, Products, News, Blog, Contact, About) that read mock data from `constants.ts` and shared types from `types.ts`.
- Static assets live in `public/assets/`; add new images there and reference by relative path so Vite copies them on build.

## Build, Test, and Development Commands
- `npm install` installs dependencies (React 19, React Router, Tailwind utility usage, Lucide icons).
- `npm run dev` starts Vite with hot reload; ensure `.env.local` sets `GEMINI_API_KEY` before hitting Gemini-backed features.
- `npm run build` outputs the production bundle to `dist/` using the `base: './'` setting in `vite.config.ts` for static hosting.
- `npm run preview` serves the built assets locally to validate deploy behavior.
- No automated tests are wired yet; when added, expose them via `npm test` (Vitest is recommended for TS + Vite).

## Coding Style & Naming Conventions
- Use functional React components typed with `React.FC`; prefer 2-space indentation, single quotes, and trailing semicolons to match existing files.
- Name components and files in PascalCase; hooks/utilities in camelCase; constants in SCREAMING_SNAKE_CASE when shared.
- Co-locate UI-specific styles as Tailwind utility strings; keep markup semantic and aria-friendly (e.g., label inputs, describe nav toggles).
- Keep data shapes centralized in `types.ts`; extend enums instead of hardcoding route strings.

## Testing Guidelines
- Place future specs alongside components (`Header.test.tsx`) or in a sibling `__tests__/` folder; use `.test.tsx` suffix.
- Cover routing flows (hash URLs), menu interactions, and card rendering using mock data from `constants.ts`.
- For networked features, prefer mocked services (e.g., MSW) so PRs stay deterministic.

## Commit & Pull Request Guidelines
- Use imperative, scoped commit subjects (e.g., "Add header mega menu state fix"); avoid bundling unrelated changes.
- PRs should state the problem, the solution, and verification steps (`npm run dev`, `npm run build`, any tests). Include screenshots/gifs for UI changes and note `.env.local` updates.
- Request review for navigation or layout changes that affect multiple pages; link issues or task IDs when available.

## Security & Configuration Tips
- Keep secrets out of git; `.env.local` is ignored and should hold `GEMINI_API_KEY` and any future tokens.
- When deploying to static hosts, keep hash-based routing intact and ensure `base` in `vite.config.ts` remains `./` so asset paths resolve from `dist/`.
