# Headlines Fetch & Frontend Consumption (Demo Notes)

This repo auto-fetches external headlines and renders them on-site without sending users off-page. When the frontend is rebuilt later, keep these pieces in mind.

## Data Flow Overview
- **Source feed**: RSS/Atom provided via secret `HEADLINES_FEED_URL` (defaults to `https://hnrss.org/frontpage` if unset).
- **Fetcher script**: `scripts/fetch-headlines.mjs` (Node 20) pulls the feed, normalizes fields, and writes `public/data/latest-headlines.json`.
- **Frontend usage**: `hooks/useHeadlines.ts` reads that JSON at runtime (served statically by Vite) and maps items to internal routes so clicks stay on `/news`.

## Fetcher Script (`scripts/fetch-headlines.mjs`)
- Uses `rss-parser` to read the feed with custom fields `media:thumbnail` and `content:encoded`.
- For each item it writes:
  - `id`: index-based fallback if missing
  - `title`, `summary` (trimmed `contentSnippet`/`content`)
  - `content`: raw `content:encoded` or `content`
  - `date`: `isoDate`/`pubDate` fallback to now
  - `source`: host of the link or feed title
  - `link`: original article URL (also stored as `originalLink` on the client)
  - `image`: picked from enclosure, media:thumbnail, or first `<img>` in the content
- Output file: `public/data/latest-headlines.json` (static, versioned in git).
- Script params (env):
  - `FEED_URL`: override source feed
  - `MAX_ITEMS`: default 10 (workflow sets 12)
- Run locally: `npm run fetch:headlines` (requires deps installed).

## GitHub Action (`.github/workflows/fetch-headlines.yml`)
- Triggers: daily cron `0 2 * * *` and manual dispatch.
- Steps:
  1) Checkout
  2) Setup Node 20
  3) `npm install --no-package-lock`
  4) `npm run fetch:headlines` with `FEED_URL=${{ secrets.HEADLINES_FEED_URL }}` and `MAX_ITEMS=12`
  5) If `public/data/latest-headlines.json` changed, commit/push with bot identity
- Permissions: `contents: write`
- Deployment picks up the committed JSON on the next build from `main`.

## Frontend Consumption
- `useHeadlines`:
  - Fetches `/data/latest-headlines.json` (served from Vite `base: './'`).
  - Falls back to `BLOG_POSTS` when the fetch fails.
  - Rewrites `link` to internal `#/news?headline=:id`; keeps `originalLink` for “View Source”.
  - Keeps `image`/`content` from the feed.
- `pages/News.tsx`:
  - Reads `?headline=` to select item; defaults to first item.
  - Renders sanitized HTML (whitelisted tags: p/br/strong/em/b/i/ul/ol/li/h1-h4/a/img; attrs for `a`: href/target/rel; for `img`: src/alt/width/height/loading).
  - No hero image; inline images display in-article. External source link remains optional.
- `components/BlogCard`:
  - Uses internal `Link` for rewritten URLs; external links still open in new tab.

## What to redo when rebuilding the frontend
1) Reuse or adapt the fetcher script; it’s feed-agnostic. Keep the image/content extraction logic.
2) Keep the Action (or similar CI job) to produce `public/data/latest-headlines.json` so the frontend stays static (no runtime network).
3) Preserve `BASE_URL`-relative JSON fetch (`import.meta.env.BASE_URL`) so GitHub Pages works (`base: './'`).
4) Keep link rewriting to site routes, and expose the original source link separately.
5) Ensure your renderer sanitizes feed HTML; update `ALLOWED_TAGS/attrs` if you need richer formatting.

## Quick commands
- Fetch once locally: `npm run fetch:headlines`
- Manual GitHub Action run: Actions > `Fetch Latest Headlines` > Run workflow

