import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: This fixes the blank screen on GitHub Pages.
  // It ensures assets are loaded relatively (e.g., "./assets/index.js")
  // instead of from the root (e.g., "/assets/index.js").
  base: './', 
});