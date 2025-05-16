/**
 * @see https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*': 'prettier --write --ignore-unknown',
  '*.{html,css,js,ts,jsx,tsx,json,md,mdx,yml}':
    'cspell --color --no-must-find-files --no-progress --no-summary --show-suggestions',
  '*.{js,ts}': 'eslint --fix',
}

export default config
