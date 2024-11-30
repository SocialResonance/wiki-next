import { defineConfig } from "cypress";
import process from 'process';

export default defineConfig({
  e2e: {
    baseUrl: process.env.WEBSITE_URL || 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
