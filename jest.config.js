module.exports = {
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.js$': 'babel-jest'
    },
    testEnvironment: 'jest-environment-jsdom-sixteen',
    globals: {
      'ts-jest': {
        tsconfig: {
          esModuleInterop: true
        }
      }
    }
  };