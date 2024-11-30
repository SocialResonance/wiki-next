import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.WEBSITE_URL || 'http://localhost:3010',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
