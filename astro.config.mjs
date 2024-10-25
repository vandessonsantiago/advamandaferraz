import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import alpinejs from "@astrojs/alpinejs";

import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  image: {
    domains: ["astro.build"],
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    react(),
    vue(),
    alpinejs(),
  ],
  vite: {
    plugins: [react()],
  },
  adapter: vercelServerless(),
});

