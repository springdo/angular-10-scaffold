// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  collectCoverage: true,
  coverageReporters: [
    "text",
    "lcov"
  ],
  coverageDirectory: 'reports/coverage',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@env': '<rootDir>/src/environments/environment'
  },
  // Do not ignore librairies such as ionic, ionic-native or bootstrap to transform them during unit testing.
  transformIgnorePatterns: ['node_modules/(?!(jest-test|@ng-bootstrap))'],
  reporters: ["default", ["jest-junit", {
    suiteName: "jest tests"
  }]]
};
