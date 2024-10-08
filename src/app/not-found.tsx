import Nav from '~/components/Nav'

export const metadata = {
  title: 'Not Found',
}

const links = [
  {
    href: '/',
    title: 'Home',
  },
]

export default function NotFound() {
  return (
    <div>
      <Nav links={links} />
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
