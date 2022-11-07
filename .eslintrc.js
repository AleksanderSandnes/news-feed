module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/style-prop-object': 0,
    'no-nested-ternary': 0,
    'global-require': 0,
    'import/prefer-default-export': 0,
    'no-unsafe-optional-chaining': 0,
    'react/no-unstable-nested-components': 0,
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
