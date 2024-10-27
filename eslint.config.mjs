import { includeIgnoreFile } from '@eslint/compat'
import eslint from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import importPlugin from 'eslint-plugin-import'
import prettierPluginConfig from 'eslint-plugin-prettier/recommended'
import reactPlugin from 'eslint-plugin-react'
import reactCompilerPlugin from 'eslint-plugin-react-compiler'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import readableTailwindPlugin from 'eslint-plugin-readable-tailwind'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import path from 'path'
import tseslint from 'typescript-eslint'

const baseConfig = tseslint.config(
  includeIgnoreFile(path.join(import.meta.dirname, './.gitignore')),
  {
    files: ['**/*.{js,ts,tsx}'],
    plugins: {
      import: importPlugin,
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        { allowConstantLoopConditions: true },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    },
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  }
)

const reactConfig = [
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-compiler': reactCompilerPlugin,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooksPlugin.configs.recommended.rules,
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
      'react-compiler/react-compiler': 'error',
    },
    languageOptions: {
      globals: {
        React: 'writable',
      },
    },
  },
]

const nextjsConfig = [
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      // TypeError: context.getAncestors is not a function
      '@next/next/no-duplicate-head': 'off',
    },
  },
  {
    files: ['next.config.ts'],
    rules: {
      '@typescript-eslint/require-await': 'off',
    },
  },
]

const readableTailwindConfig = [
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'readable-tailwind': readableTailwindPlugin,
    },
    rules: {
      ...readableTailwindPlugin.configs.warning.rules,
      ...readableTailwindPlugin.configs.error.rules,
    },
  },
]

const simpleImportSortConfig = [
  {
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
    },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
    },
  },
]

const prettierConfig = [prettierPluginConfig]

export default [
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...readableTailwindConfig,
  ...simpleImportSortConfig,
  ...prettierConfig,
]
