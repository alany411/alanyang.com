import './styles/globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ViewTransitions } from 'next-view-transitions'

import { cn } from '~/utils/cn'

import SocialLinks from './components/SocialLinks'

const geistSans = localFont({
  src: './assets/GeistVF.woff',
  variable: '--font-geist-sans',
})
const geistMono = localFont({
  src: './assets/GeistMonoVF.woff',
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://alanyang.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Alan Yang - Software Engineer',
    template: '%s | Alan Yang',
  },
  description:
    'Alan Yang is a software engineer. Contact him at me@alanyang.com.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon-black-192.png',
        href: '/icon-black-192.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icon-white-192.png',
        href: '/icon-white-192.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body
          className={cn(
            geistSans.variable,
            geistMono.variable,
            'bg-white font-sans antialiased dark:bg-neutral-900'
          )}
        >
          <div className='flex flex-col px-8 pb-8 pt-24'>
            <div className='mx-auto w-full max-w-[55ch] space-y-6'>
              <main
                className={cn(
                  'prose prose-neutral max-w-none dark:prose-invert',
                  'prose-a:decoration-transparent prose-a:decoration-2 prose-a:underline-offset-[3px] prose-a:transition-colors hover:prose-a:decoration-sky-400 focus:prose-a:outline-none focus:prose-a:ring-2 focus:prose-a:ring-sky-400 focus:prose-a:ring-offset-0 focus:prose-a:ring-offset-white dark:focus:prose-a:ring-offset-neutral-900',
                  'prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-h5:text-base prose-h6:text-base',
                  'prose-p:text-pretty'
                )}
              >
                {children}
              </main>
              <footer className='border-t border-neutral-200 pt-4 dark:border-neutral-800'>
                <SocialLinks />
                <svg
                  aria-hidden={true}
                  className='m-0 select-none dark:invert'
                  height={144}
                  preserveAspectRatio='xMidYMid meet'
                  version='1.0'
                  viewBox='0 0 400 400'
                  width={144}
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g fill='#000' stroke='none'>
                    <path
                      d='M3116 3485 c-53 -19 -102 -69 -136 -140 -101 -213 -73 -440 82 -666 l46 -66 -39 -46 c-53 -62 -155 -141 -220 -172 -78 -36 -138 -34 -183 5 -60 53 -71 104 -71 338 0 188 -1 205 -19 217 -23 18 -53 4 -66 -30 -5 -13 -12 -62 -16 -109 -4 -47 -11 -86 -16 -86 -6 0 -52 -16 -103 -35 -81 -30 -296 -95 -316 -95 -14 0 -176 153 -252 238 -111 125 -176 222 -166 247 25 64 -5 120 -51 95 -18 -10 -22 -6 -41 37 -11 26 -27 80 -36 118 -21 104 -31 120 -73 120 -32 0 -35 -3 -38 -32 -2 -17 9 -89 24 -160 25 -124 26 -135 19 -349 -5 -166 -12 -249 -29 -338 -13 -64 -27 -121 -32 -125 -16 -15 -379 -81 -555 -102 -209 -24 -238 -31 -270 -65 l-24 -26 25 -20 c22 -18 33 -19 105 -13 44 4 136 17 205 30 111 21 195 31 433 51 l67 5 -6 -53 c-4 -38 -2 -64 10 -91 13 -33 19 -38 43 -35 34 4 51 35 61 115 l7 58 45 -3 c25 -2 179 -30 344 -63 538 -109 696 -116 696 -34 0 32 -57 79 -256 212 -90 59 -163 110 -164 113 0 3 52 20 115 37 64 18 142 43 174 56 l57 23 12 -90 c32 -254 181 -345 391 -240 68 34 193 133 244 193 l28 33 72 -70 c40 -39 144 -126 232 -193 226 -172 299 -234 402 -342 225 -236 203 -365 -82 -475 -121 -46 -240 -66 -360 -58 -241 14 -493 122 -577 247 -56 83 -59 157 -13 249 52 103 247 277 348 311 48 16 52 20 55 53 3 31 0 36 -24 42 -63 16 -189 -60 -330 -201 -132 -131 -169 -201 -169 -320 0 -65 5 -90 26 -136 80 -169 328 -301 641 -339 159 -20 337 14 507 97 123 59 193 126 216 207 21 71 14 115 -31 205 -69 138 -187 253 -509 499 -99 75 -217 172 -262 215 l-82 78 45 70 c91 141 124 238 124 371 0 191 -66 365 -158 415 -53 29 -82 33 -126 18z m94 -112 c85 -71 126 -319 77 -463 -21 -63 -105 -220 -116 -220 -4 0 -21 23 -40 51 -91 139 -133 292 -113 409 17 97 50 180 88 218 39 39 63 40 104 5z m-1393 -673 c67 -68 120 -126 117 -129 -4 -4 -409 -100 -425 -101 -7 0 -3 56 12 173 8 62 44 204 75 295 2 8 23 -12 51 -50 26 -34 103 -119 170 -188z m328 -281 c61 -44 143 -101 183 -126 40 -25 71 -47 70 -48 -4 -3 -355 56 -553 93 -88 17 -188 34 -223 38 -35 4 -60 10 -55 14 4 4 55 17 113 29 58 12 155 35 215 50 61 16 117 29 125 30 9 1 65 -35 125 -80z'
                      transform='translate(-40.000000,440.000000) scale(0.100000,-0.100000)'
                    />
                    <path
                      d='M3864 2366 c-39 -33 -39 -89 0 -122 40 -35 68 -31 110 16 42 47 44 59 14 87 -54 48 -85 53 -124 19z'
                      transform='translate(-40.000000,440.000000) scale(0.100000,-0.100000)'
                    />
                  </g>
                </svg>
              </footer>
            </div>
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
