const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',

  reporterOptions: {
    reportDir: 'reports/mochawesome',
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    setupNodeEvents(on, config) {
    }
  },

  video: true,
  screenshotOnRunFailure: true
})