import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://example.com', // À remplacer avec ton domaine
  integrations: [tailwind(), react()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
