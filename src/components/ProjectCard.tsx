import { MoveRightIcon } from 'lucide-react'
import { Link } from 'next-view-transitions'

import { cn } from '~/utils/cn'

export default function ProjectCard({ title, description, slug }: Project) {
  return (
    <div
      className={cn(`
        group bg-neutral-100 p-4
        dark:bg-neutral-800
      `)}
    >
      <h2 className={cn('mt-0 mb-0')}>{title}</h2>
      <p className={cn('mt-0 mb-4')}>{description}</p>
      <div className={cn('inline-block')}>
        <Link
          aria-label={`View details for ${title}`}
          className='inline align-baseline'
          href={`/projects/${slug}`}
        >
          View Details
        </Link>
        <MoveRightIcon
          aria-hidden={true}
          className={cn(`
            ml-1 inline size-4 align-middle transition-all
            group-hover:translate-x-0.5 group-hover:text-sky-500
            group-focus:text-sky-500
            dark:group-hover:text-sky-400 dark:group-focus:text-sky-400
          `)}
        />
      </div>
    </div>
  )
}
