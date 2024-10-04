import { type Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '--background',
        'heading-color': '--heading-color',
        'body-color': '--body-color',
        'link-color': '--link-color',
        'link-underline-color': '--link-underline-color',
        'link-underline-hover-color': '--link-underline-hover-color',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
}
export default config
