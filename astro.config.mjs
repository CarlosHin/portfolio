import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import astroI18next from "astro-i18next";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), astroI18next(), partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"]
    }
  })]
});