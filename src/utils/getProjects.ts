import path from 'path'

import { getMetadata } from './getMetadata'
import { getSlugs } from './getSlugs'

export async function getProjects() {
  const projectsDirectory = path.join(
    process.cwd(),
    'src',
    'app',
    'projects',
    '(projects)'
  )

  const projectsPromises = getSlugs(projectsDirectory).map(async (slug) => {
    const metadata = await getMetadata('projects', slug)
    return metadata
  })

  const projects = await Promise.all(projectsPromises)

  const sortedProjects = projects.sort((a, b) => {
    return b.date.localeCompare(a.date)
  })

  return sortedProjects
}
