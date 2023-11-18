import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [svelte()],
  vite: {
    css: {
      modules: {
        hash:
          import.meta.env.VERCEL_ENV === "production" ? "base64:5" : undefined,
      },
    },
  },
  experimental: {
    assets: true,
    viewTransitions: true,
  },
});
