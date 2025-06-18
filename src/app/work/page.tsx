import type { Metadata } from 'next'

import Nav from '~/components/Nav'
import { cn } from '~/utils/cn'

export const metadata: Metadata = {
  title: 'Work',
}

export default function Work() {
  return (
    <div>
      <Nav />
      <div className={cn('mb-6 flex')}>
        <h1 className={cn('mt-0 mb-0')}>Work</h1>
      </div>
      <div>
        <h2 className={cn('mb-0')}>
          <div>University of Florida</div>
          <div className={cn('text-sm font-normal')}>
            Warrington College of Business Technology Solutions
          </div>
        </h2>
        <ul>
          <li className={cn('mt-0 mb-0 pl-0')}>
            <small>Senior Software Engineer, 2025 - Present</small>
          </li>
        </ul>
        <p>
          The Technology Solutions team supports the{' '}
          <a
            aria-label='Warrington College of Business, opens in a new tab'
            href='https://warrington.ufl.edu/'
            rel='noopener noreferrer'
            target='_blank'
          >
            Warrington College of Business
          </a>{' '}
          by delivering custom applications, data services, and web solutions
          that enhance the educational experience, improve business processes,
          and provide valuable insights through reporting and integration tools.
        </p>
      </div>
      <div>
        <h2 className={cn('mb-0')}>
          <div>University of Florida</div>
          <div className={cn('text-sm font-normal')}>
            User Experience and Portal Solutions
          </div>
        </h2>
        <ul>
          <li className={cn('mt-0 mb-0 pl-0')}>
            <small>Senior Software Engineer, 2022 - 2025</small>
          </li>
        </ul>
        <p>
          The User Experience and Portal Solutions team is responsible for the
          design and development of the university&apos;s central platform,{' '}
          <a
            aria-label='ONE.UF, opens in a new tab'
            href='https://one.uf.edu/'
            rel='noopener noreferrer'
            target='_blank'
          >
            ONE.UF
          </a>
          , and other apps, ensuring alignment with the university&apos;s goals
          while advocating for best practices in user experience and
          accessibility.
        </p>
        <p>
          Since joining this team, I have played a pivotal role in several
          high-impact projects. I successfully spearheaded the development of
          one of the university&apos;s first mobile apps, overseeing the process
          from initial concept to launch. Additionally, I led the frontend
          development of the university&apos;s first embeddable AI chatbot
          widget, ensuring seamless integration and user-friendly experience.
        </p>
      </div>
      <div>
        <h2 className={cn('mb-0')}>
          <div>University of Florida</div>
          <div className={cn('text-sm font-normal')}>
            Institute of Food and Agricultural Sciences
          </div>
        </h2>
        <ul>
          <li className={cn('mt-0 mb-0 pl-0')}>
            <small>Software Engineer, 2019 - 2022</small>
          </li>
          <li className={cn('mt-0 mb-0 pl-0')}>
            <small>IT Professional, 2017 - 2019</small>
          </li>
        </ul>
        <p>
          The{' '}
          <a
            aria-label='University of Florida Institute of Food and Agricultural Sciences, opens in a new tab'
            href='https://ifas.ufl.edu/'
            rel='noopener noreferrer'
            target='_blank'
          >
            Institute of Food and Agricultural Sciences
          </a>{' '}
          is a leading research institution with extension services in every
          Florida county, dedicated to advancing agricultural science and
          technology to enhance and sustain the quality of life.
        </p>
        <p>
          During my time there, I worked with many different researchers and
          labs to provide technical support and assistance. I gained valuable
          experience with a wide range of software tools and technologies, while
          also contributing to the development of tools, automation processes,
          and comprehensive documentation.
        </p>
      </div>
    </div>
  )
}
