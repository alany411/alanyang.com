import Nav from '~/components/Nav'

export default function PostLayout({
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
