import '~/styles/globals.css'

import { GoogleAnalytics } from '@next/third-parties/google'
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
              scrollbar:w-3.5 scrollbar:bg-transparent
              scrollbar-thumb:rounded-full scrollbar-thumb:bg-neutral-300
              dark:scrollbar-thumb:bg-neutral-700 dark:bg-neutral-900
              bg-white font-sans antialiased
            `
          )}
        >
          <SkipToMain />
          <div className={cn('flex flex-col px-8 pt-24 pb-8')}>
            <div className={cn('mx-auto w-full max-w-[55ch] space-y-6')}>
              <main
                id='main-content'
                className={cn(`
                  prose prose-neutral max-w-none
                  dark:prose-invert dark:prose-a:hover:decoration-sky-400
                  dark:prose-a:focus:ring-sky-400
                  dark:prose-a:focus:ring-offset-neutral-900
                  prose-h1:text-2xl
                  prose-h2:text-xl
                  prose-h3:text-lg
                  prose-h4:text-base
                  prose-h5:text-base
                  prose-h6:text-base
                  prose-p:text-pretty
                  prose-a:decoration-sky-500 prose-a:decoration-2
                  prose-a:underline-offset-[3.5px] prose-a:transition-colors
                  prose-a:hover:decoration-sky-500 prose-a:focus:outline-hidden
                  prose-a:focus:ring-2 prose-a:focus:ring-sky-500
                  prose-a:focus:ring-offset-0 prose-a:focus:ring-offset-white
                `)}
              >
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </body>
        {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' &&
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
            <GoogleAnalytics
              gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
            />
          )}
      </html>
    </ViewTransitions>
  )
}
