/* eslint-disable @typescript-eslint/unbound-method -- Tailwind plugins trigger this */

import typographyPlugin from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './mdx-components.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-jetbrains-mono)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('scrollbar', '&::-webkit-scrollbar')
      addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb')
    }),
  ],
}
export default config
