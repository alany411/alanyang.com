import fs from 'fs'
import path from 'path'

export async function getPhotos() {
  const photosDir = path.join(process.cwd(), 'src/assets/photos')
  const files = fs.readdirSync(photosDir)

  const photos = await Promise.all(
    files.map(async (file) => {
      const imageModule = (await import(`~/assets/photos/${file}`)) as {
        default: string
      }

      return {
        src: imageModule.default,
        date: file.split('-')[0] ?? '',
        title: file
          .replace(/\d{8}-/, '')
          .replace(/-/g, ' ')
          .replace(/\.[^.]+$/, '')
          .replace(/\b\w/g, (char) => char.toUpperCase()),
      }
    })
  )

  const sortedPhotos = photos.sort((a, b) => {
    return b.date.localeCompare(a.date)
  })

  return sortedPhotos
}
