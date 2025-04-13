import Nav from '~/components/Nav'

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}
