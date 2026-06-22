import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://andybanguiau.github.io/netandip-site',
  base: '/netandip-site/',
  integrations: [sitemap()],
  output: 'static',
});
