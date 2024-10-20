import { Link } from 'next-view-transitions'

import ProfilePicture from '~/components/ProfilePicture'
import { cn } from '~/utils/cn'

export default function Home() {
  return (
    <div>
      <div className={cn('inline-flex flex-col')}>
        <ProfilePicture
          className={cn('mb-4 size-36')}
          height={144}
          width={144}
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
