module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true,
    },
  },
  plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'no-nested-ternary': 0,
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        tsx: 'never',
        ts: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['arrowFunctions'] },
    ],
  },
};
