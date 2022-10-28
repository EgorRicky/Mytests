/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: '<appUrl>',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    creationFlowPage: './pages/creationFlow.js'
  },
  name: 'code cept'
}