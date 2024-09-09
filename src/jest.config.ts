module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  testMatch: [
    '(/test/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
};

