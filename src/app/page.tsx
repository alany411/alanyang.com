import Image from 'next/image'
import { Link } from 'next-view-transitions'

export default function Home() {
  return (
    <div>
      <div className='inline-flex flex-col'>
        <Image
          alt='Alan Yang profile'
          className='mb-4 h-36 w-36 select-none overflow-hidden rounded-full'
          height={144}
          priority={true}
          src='/me.jpg'
          width={144}
        />
        <h1 className='mb-0 text-center text-2xl'>Alan Yang</h1>
      </div>
      <p>
        I am a software engineer who enjoys learning and building. I currently
        work at the{' '}
        <a
          aria-label='University of Florida, opens in a new tab'
          className='whitespace-nowrap'
          href='https://www.ufl.edu/'
        >
          University of Florida
        </a>
        , where I develop accessible web and mobile solutions with a focus on
        user experience.
      </p>
      <p>
        Occasionally, I write <Link href='/posts'>posts</Link> about coding,
        tutorials, and challenges I have encountered. Outside of programming, I
        enjoy traveling, photography, and gaming.
      </p>
    </div>
  )
}
