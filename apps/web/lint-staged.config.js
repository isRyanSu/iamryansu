import path from 'node:path'

import baseConfig from '../../lint-staged.config.js'

/**
 * @see https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration
 * @type {import('lint-staged').Configuration}
 */
const config = {
  ...baseConfig,
  '*.css': 'stylelint --fix --color --aei',
  '*.{js,ts,jsx,tsx}': buildNextLintCommand,
}

function buildNextLintCommand(filenames) {
  return `next lint --fix --file ${filenames.map((filename) => path.relative(process.cwd(), filename)).join(' --file ')}`
}

export default config
