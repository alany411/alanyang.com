import type { Metadata } from 'next'

import Nav from '~/components/Nav'
import ProjectCard from '~/components/ProjectCard'
import { cn } from '~/utils/cn'
import { getProjects } from '~/utils/getProjects'

export const metadata: Metadata = {
  title: 'Projects',
}

export default async function Projects() {
  const projects = await getProjects()

  return (
    <div>
      <Nav />
      <div className={cn('mb-6 flex')}>
        <h1
          className={cn(`
            mt-0 mb-0
            [view-transition-name:projects-title]
          `)}
        >
          Projects
        </h1>
      </div>
      <ul
        className={cn(`
          mt-10 mb-0 list-none
          [padding-inline-start:0]
        `)}
      >
        {projects.map((project) => (
          <li
            key={project.slug}
            className={cn(`
              mt-0
              [padding-inline-start:0]
              last:mb-0
            `)}
          >
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </div>
  )
}
