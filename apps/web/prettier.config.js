import baseConfig from '../../prettier.config.js'

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...baseConfig,
  overrides: [
    {
      files: ['*.css', '*.jsx', '*.tsx'],
      options: {
        plugins: ['prettier-plugin-tailwindcss'],
        tailwindFunctions: ['cn'],
        tailwindPreserveDuplicates: false,
        tailwindPreserveWhitespace: false,
        tailwindStylesheet: 'src/styles/global.css',
      },
    },
  ],
}

export default config
