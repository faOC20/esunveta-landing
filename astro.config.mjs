import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://esunveta.com",
  integrations: [tailwind()],
  adapter: vercel({
    webAnalytics: { enabled: true },
    speedInsights: { enabled: true },
  }),
  trailingSlash: "never",
  server: {
    allowedHosts: ["rpsdgr-ip-200-82-141-151.tunnelmole.net"],
  },
});
