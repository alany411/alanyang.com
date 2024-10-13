import Image from 'next/image'
import { Link } from 'next-view-transitions'

import { cn } from '~/utils/cn'

export default function Home() {
  return (
    <div>
      <div className={cn('inline-flex flex-col')}>
        <Image
          alt='Alan Yang profile'
          height={144}
          id='profile-picture'
          priority={true}
          src='/me.jpg'
          width={144}
          className={cn(`
            mb-4 mt-0 h-36 w-36 select-none overflow-hidden rounded-full
          `)}
        />
        <h1 className={cn('mb-0 text-center text-2xl')}>Alan Yang</h1>
      </div>
      <p>
        I am a software engineer who enjoys learning and building. I currently
        work at the{' '}
        <a
          aria-label='University of Florida, opens in a new tab'
          className={cn('whitespace-nowrap')}
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
