import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { cn } from '~/utils/cn'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
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
    <html lang='en'>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'font-sans antialiased'
        )}
      >
        {children}
      </body>
    </html>
  )
}
