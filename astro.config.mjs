import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Inconsolata",
      cssVariable: "--font-inconsolata",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Inconsolata.woff2"],
          },
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
