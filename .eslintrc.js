module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
