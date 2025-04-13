import Nav from '~/components/Nav'
import PhotoGrid from '~/components/PhotoGrid'
import { cn } from '~/utils/cn'
import { getPhotos } from '~/utils/getPhotos'

export const metadata: Metadata = {
  title: 'Photos',
}

export default async function Photos() {
  const photos = await getPhotos()

  return (
    <div>
      <Nav />
      <div className={cn('mb-6 flex')}>
        <h1 className={cn('mt-0 mb-0')}>Photos</h1>
      </div>
      <div className={cn('mt-10')}>
        <PhotoGrid photos={photos} />
      </div>
    </div>
  )
}
