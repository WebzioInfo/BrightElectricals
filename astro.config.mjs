import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://brightwork.in',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  image: {
    domains: [],
    remotePatterns: [],
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
