/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  jsxSingleQuote: true,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
