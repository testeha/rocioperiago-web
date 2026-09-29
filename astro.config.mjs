// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rocioperiago.com',
  integrations: [
    sitemap({
      // Las fichas de proyecto (/servicios/<proyecto>) ya no se enlazan desde ninguna página.
      filter: (page) => !/\/servicios\/[^/]+\/?$/.test(new URL(page).pathname),
    }),
  ],
});
