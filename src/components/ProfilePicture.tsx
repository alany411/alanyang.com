import Image from 'next/image'

import { cn } from '~/utils/cn'

type ProfilePictureProps = {
  className?: string
  height: number
  width: number
}
export default function ProfilePicture({
  className,
  height,
  width,
}: ProfilePictureProps) {
  return (
    <Image
      alt='Alan Yang profile'
      height={height}
      priority={true}
      src='/me.jpg'
      width={width}
      className={cn(
        `
          m-0 select-none overflow-hidden rounded-full

          [view-transition-name:profile-picture]
        `,
        className
      )}
    />
  )
}
