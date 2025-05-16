/**
 * @see https://stylelint.io/user-guide/configure
 * @type {import("stylelint").Config}
 */
const config = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-tailwindcss',
    'stylelint-config-clean-order',
  ],
}

export default config
