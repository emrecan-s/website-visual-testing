//REF: https://jestjs.io/docs/en/configuration
//REF: https://medium.com/better-programming/how-to-use-puppeteer-with-jest-typescript-530a139ffe40
module.exports = {
    preset: 'jest-puppeteer',
    testMatch: ["**/?(*.)+(spec|test).[t]s"],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
        "^.+\\.ts?$": "ts-jest"
    },
    verbose: true,

    //Create an HTML report for email
  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", {
        "pageTitle": "Test Report"
    }]
],

}