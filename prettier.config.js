/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-packagejson', 'prettier-plugin-sh', 'prettier-plugin-sort-json'],
  printWidth: 96,
  proseWrap: 'never',
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
}

export default config
