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
          priority={true}
          src='/me.jpg'
          width={144}
          className={cn(`
            mb-4 mt-0 h-36 w-36 select-none overflow-hidden rounded-full

            [view-transition-name:profile-picture]
          `)}
        />
        <h1 className={cn('mb-0 text-center text-2xl')}>Alan Yang</h1>
      </div>
      <p>
        I am a software engineer driven by curiosity and a passion for creating.
        I currently <Link href='/work'>work</Link> at the University of Florida,
        where I develop accessible web and mobile applications that prioritize
        user experience and inclusivity.
      </p>
      <p>
        Occasionally, I share <Link href='/posts'>posts</Link> about coding,
        tutorials, and the challenges I have faced along the way. Outside of
        programming, I enjoy traveling, photography, and gaming.
      </p>
    </div>
  )
}
