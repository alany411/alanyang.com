import Nav from '~/components/Nav'

export const metadata: Metadata = {
  alternates: {
    canonical: './',
  },
}

const links = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/posts',
    title: 'Posts',
  },
]

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Nav links={links} />
      {children}
    </div>
  )
}
