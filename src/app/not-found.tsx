export const metadata = {
  title: 'Not Found',
}

export default function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <p>You seem to be lost... This path does not exist.</p>
      <p>
        Maybe it was moved or deleted.{' '}
        <span className='whitespace-nowrap font-semibold'>¯\_(ツ)_/¯</span>
      </p>
    </div>
  )
}
