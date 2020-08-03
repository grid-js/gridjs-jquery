module.exports = {
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json'
    }
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "ts",
    "js",
    "json",
    "node",
  ],
  setupFiles: [
    './tests/setup.ts'
  ],
  "moduleNameMapper": {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
    '!src/**/*.test.ts',
  ],
};
