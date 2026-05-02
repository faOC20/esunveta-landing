import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://veta.tech',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [tailwind()],
});