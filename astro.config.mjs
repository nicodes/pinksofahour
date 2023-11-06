import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  integrations: [svelte()],
});
