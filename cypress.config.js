const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
      "file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin(config)],
      })
  );

  on("before:browser:launch", (browser, launchOptions) => {

    if (browser.family === "chromium") {

      launchOptions.args.push("--disable-blink-features=AutomationControlled");
      launchOptions.args.push("--disable-dev-shm-usage");
      launchOptions.args.push("--no-sandbox");
    }
    return launchOptions;
  });

  return config;
}

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://www.automationexercise.com",
    specPattern: "cypress/e2e/features/**/*.feature",
    setupNodeEvents,
  },
});
