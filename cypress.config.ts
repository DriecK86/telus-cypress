import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: "https://www.telusinternational.ai/cmp",
    chromeWebSecurity: false,
    video: false,
    viewportHeight: 1300,
    viewportWidth: 1500,
    excludeSpecPattern: ["*.{.js,ts}", "*.md"],
    specPattern: ["**/*.{feature,features}"],
    supportFile: false,
    defaultCommandTimeout: 15000,
    setupNodeEvents,
  },
});
