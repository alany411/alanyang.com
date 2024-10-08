import { Link } from 'next-view-transitions'

export const metadata = {
  title: 'Not Found',
}

export default function NotFound() {
  return (
    <div>
      <div className='text-lg'>
        <Link aria-label='Back to home page' href='/'>
          Home
        </Link>
      </div>
      <div className='mb-6 flex'>
        <h1 className='m-0'>Not Found</h1>
      </div>
      <p>You seem to be lost... This path does not exist.</p>
      <p>
        Maybe it was moved or deleted.{' '}
        <span className='whitespace-nowrap font-semibold'>¯\_(ツ)_/¯</span>
      </p>
    </div>
  )
}
