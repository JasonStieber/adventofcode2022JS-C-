module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/'],
  testMatch: ['**/?(*.)+(spec|test).+(js|jsx)'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
};
