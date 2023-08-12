import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 780,
  viewportWidth: 1024,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
