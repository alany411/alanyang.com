import Image from 'next/image'

import TextLink from './components/TextLink'

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
        <h1 className='mb-6 text-center text-xl font-medium'>Alan Yang</h1>
      </div>
      <div className='space-y-4'>
        <p className='text-pretty'>
          I am a software engineer who enjoys learning and building. I currently
          work at the{' '}
          <TextLink
            ariaLabel='University of Florida, opens in new tab'
            external={true}
            href='https://www.ufl.edu/'
          >
            University of Florida
          </TextLink>
          , where I develop accessible web and mobile solutions with a focus on
          user experience.
        </p>
        <p>
          Occasionally, I write{' '}
          <TextLink ariaLabel='posts' href='/posts'>
            posts
          </TextLink>{' '}
          about coding, tutorials, and challenges I have encountered. Outside of
          programming, I enjoy traveling, photography, and gaming.
        </p>
      </div>
    </div>
  )
}
