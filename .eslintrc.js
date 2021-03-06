module.exports = {
  env: { 
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['warn', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
    'quote-props': ['warn', 'as-needed'],
  },
  overrides: [
    {
      files: ['src/main.js'],
      env: {
        browser: true,
      },
    },
  ],
};
