export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: '<app url>',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: "./custom_steps.ts",
    creationFlowPage: "./pages/creationFlow.ts"
  },
  name: 'Myproj'
}