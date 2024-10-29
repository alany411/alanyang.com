import '~/styles/globals.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'

import Footer from '~/components/Footer'
import SkipToMain from '~/components/SkipToMain'
import { cn } from '~/utils/cn'

const JetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://alanyang.com'),
  alternates: {
    canonical: './',
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
  openGraph: {
    siteName: 'Alan Yang',
    url: './',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html className={cn('overflow-y-scroll scroll-smooth')} lang='en'>
        <body
          className={cn(
            GeistSans.variable,
            JetBrainsMono.variable,
            `
              bg-white font-sans antialiased

              dark:bg-neutral-900 dark:scrollbar-thumb:bg-neutral-700

              scrollbar-thumb:rounded-full scrollbar-thumb:bg-neutral-300

              scrollbar:w-3.5 scrollbar:bg-transparent
            `
          )}
        >
          <SkipToMain />
          <div className={cn('flex flex-col px-8 pb-8 pt-24')}>
            <div className={cn('mx-auto w-full max-w-[55ch] space-y-6')}>
              <main
                id='main-content'
                className={cn(`
                  prose prose-neutral max-w-none

                  dark:prose-invert dark:hover:prose-a:decoration-sky-400
                  dark:focus:prose-a:ring-sky-400
                  dark:focus:prose-a:ring-offset-neutral-900

                  focus:prose-a:outline-none focus:prose-a:ring-2
                  focus:prose-a:ring-sky-500 focus:prose-a:ring-offset-0
                  focus:prose-a:ring-offset-white

                  hover:prose-a:decoration-sky-500

                  prose-a:decoration-transparent prose-a:decoration-2
                  prose-a:underline-offset-[3.5px] prose-a:transition-colors

                  prose-h1:text-2xl

                  prose-h2:text-xl

                  prose-h3:text-lg

                  prose-h4:text-base

                  prose-h5:text-base

                  prose-h6:text-base

                  prose-p:text-pretty
                `)}
              >
                {children}
                <Analytics />
                <SpeedInsights />
              </main>
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
