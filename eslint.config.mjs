import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import prettierPluginConfig from 'eslint-plugin-prettier/recommended'
import reactPlugin from 'eslint-plugin-react'
import reactCompiler from 'eslint-plugin-react-compiler'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import readableTailwindPlugin from 'eslint-plugin-readable-tailwind'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import path from 'path'
import tseslint from 'typescript-eslint'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const nextjsConfig = [...compat.extends('plugin:@next/next/recommended')]

const typescriptConfig = tseslint.config(
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
      'react-compiler': reactCompiler,
      'react-hooks': reactHooksPlugin,
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
      'react-hooks/exhaustive-deps': [
        'warn',
        {
          additionalHooks: 'useMutation',
        },
      ],
    },
    languageOptions: {
      globals: {
        React: 'writable',
      },
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
  { ignores: ['.next/**'] },
  ...nextjsConfig,
  ...typescriptConfig,
  ...reactConfig,
  ...readableTailwindConfig,
  ...simpleImportSortConfig,
  ...prettierConfig,
]
