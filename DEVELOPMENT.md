# AIMORELOGY Website - Development Guide

This is the official development documentation for the AIMORELOGY corporate website. The project is built using modern web technologies focusing on performance, modularity, and a premium B2B aesthetic similar to NVIDIA.

## 1. Technology Stack

*   **Framework**: React 19
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **Routing**: React Router DOM (HashRouter)
*   **Icons**: Lucide React
*   **Fonts**: Roboto / Montserrat (via Google Fonts)
*   **Build Tool**: Vite

## 2. Project Structure

```text
/
├── assets/             # Static assets (images, logos)
├── components/         # Reusable UI components
│   ├── Header.tsx      # Main navigation with Mega Menu
│   ├── Footer.tsx      # Site footer with Contact Form
│   ├── ProductCard.tsx # Standard card for product/solution display
│   ├── BlogCard.tsx    # Card for news and insights
│   └── Layout.tsx      # Wrapper for pages
├── pages/              # Route views
│   ├── Home.tsx        # Landing page with Carousels
│   ├── Products.tsx    # All Solutions listing
│   ├── News.tsx        # Press releases
│   ├── Blog.tsx        # Articles
│   └── Contact.tsx     # Contact information
├── constants.ts        # Mock data (Products, News, Blogs)
├── types.ts            # TypeScript interfaces
├── App.tsx             # Main router configuration
├── index.tsx           # Entry point
├── index.html          # HTML template
└── vite.config.ts      # Vite configuration
```

## 3. Key Components Implementation

### Header (Mega Menu)
*   **Desktop**: Uses a hover/click-based Mega Menu that spans the full width. The content is dynamically rendered based on `MENU_DATA`.
*   **Mobile**: Uses an Accordion style expansion. When a user clicks a top-level category, it expands vertically to show sub-items.

### Home Page Carousels
*   Implemented using a custom `CarouselSection` component in `pages/Home.tsx`.
*   **Behavior**: Horizontal scroll with snap points.
*   **Desktop**: Navigated via Arrow buttons (Top-Right).
*   **Mobile**: Navigated via touch swipe.
*   **Progress Indicator**: A custom scrollbar/progress line below the carousel content that visualizes the current viewport position.

### Product Spotlight (CV184XH V1)
*   Located on the Home Page.
*   Responsive layout: Stacked on mobile, Split-screen on desktop.
*   Image handling: Object-cover with specific aspect ratios for different breakpoints to avoid cropping issues.

## 4. Customization Guide

### Adding New Menu Items
Edit `MENU_DATA` in `components/Header.tsx`. The structure supports nested groups.

### Updating Content
Modify `constants.ts` to add or remove:
*   `PRODUCTS`: Enterprise solutions data.
*   `BLOG_POSTS`: Articles for the carousel.
*   `NEWS_ITEMS`: Press releases.

### Theming
Tailwind classes are used throughout. Key brand colors are:
*   **Primary Purple**: `bg-[#4f4398]`, `text-[#4f4398]`
*   **NVIDIA-style Green (Accent)**: `border-[#76b900]` (Used in active menu states)
*   **Dark Backgrounds**: `bg-gray-900` or `bg-[#111]`

## 5. Deployment Guide (Fixing Blank Screen)

If you see a blank screen (404) when deploying to GitHub Pages, it is usually because the asset paths are incorrect.

### Step 1: Vite Config
Ensure you have a `vite.config.ts` file in the root with `base: './'`. This forces Vite to use relative paths for scripts and styles, which works regardless of your repository name.

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', 
});
```

### Step 2: Build
Run your build command:
```bash
npm run build
```

### Step 3: Deploy
Upload the contents of the `dist/` folder to your GitHub repository (or use the `gh-pages` branch).

### Step 4: Routing
Since this is a Single Page Application (SPA), we use `HashRouter` in `App.tsx`. This ensures that reloading the page on sub-routes (e.g., `/#/products`) works correctly on static hosts like GitHub Pages without needing server-side redirects.
