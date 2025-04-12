import Image from 'next/image'

import Nav from '~/components/Nav'
import { cn } from '~/utils/cn'
import { getPhotos } from '~/utils/getPhotos'
export default async function Photos() {
  const photos = await getPhotos()

  return (
    <div>
      <Nav />
      <div className={cn('mb-6 flex')}>
        <h1 className={cn('mt-0 mb-0')}>Photos</h1>
      </div>
      <div className={cn(`mt-10 grid grid-cols-2 gap-1`)}>
        {photos.map((photo) => {
          return (
            <Image
              key={`${photo.date}-${photo.title}`}
              alt={photo.title}
              loading='lazy'
              src={photo.src}
              className={cn(
                `mt-0 mb-0 aspect-square overflow-hidden object-cover`
              )}
            />
          )
        })}
      </div>
    </div>
  )
}
