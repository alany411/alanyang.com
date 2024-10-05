import { Link } from 'next-view-transitions'

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div className='space-x-1 text-lg'>
        <Link aria-label='Back to home page' href='/'>
          Home
        </Link>
        <span>/</span>
        <Link aria-label='Go to posts page' href='/posts'>
          Posts
        </Link>
      </div>
      {children}
    </div>
  )
}
