import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://esunveta.com",
  integrations: [tailwind()],
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
