import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import perfectionist from 'eslint-plugin-perfectionist'
import turbo from 'eslint-plugin-turbo'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import ts from 'typescript-eslint'

/**
 * @see https://eslint.org/docs/latest/use/configure
 */
const config = ts.config(
  js.configs.recommended,
  ts.configs.recommended,
  unicorn.configs.recommended,
  turbo.configs['flat/recommended'],
  perfectionist.configs['recommended-natural'],
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    rules: {
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  {
    ignores: ['**/build/**', '**/dist/**', '**/node_modules/**', '**/out/**'],
  },
  prettier,
)

export default config
