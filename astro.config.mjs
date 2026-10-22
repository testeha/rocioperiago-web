// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rocioperiago.com',
  // Todas las URLs con barra final (/trabajos/). Vercel redirige las variantes sin barra (ver vercel.json).
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // Las fichas de proyecto (/servicios/<proyecto>) ya no se enlazan desde ninguna página.
      filter: (page) => !/\/servicios\/[^/]+\/?$/.test(new URL(page).pathname),
    }),
  ],
});
