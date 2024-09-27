/** @type {import('eslint').Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: { attributes: false },
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        reservedFirst: true,
        multiline: 'last',
        ignoreCase: true,
        noSortAlphabetically: false,
        locale: 'en',
      },
    ],
  },
}

module.exports = config
