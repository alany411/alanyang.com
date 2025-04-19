'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

import Lightbox from '~/components/Lightbox'
import { cn } from '~/utils/cn'

type PhotoGridProps = {
  photos: Photo[]
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const selectedButtonRef = useRef<HTMLButtonElement | null>(null)

  const onClick = (index: number) => {
    setSelectedIndex(index)
  }

  const onClose = () => {
    setSelectedIndex(-1)
    if (selectedButtonRef.current) {
      selectedButtonRef.current.focus()
    }
  }

  const onNext = () => {
    setSelectedIndex((prev) => (prev >= photos.length - 1 ? 0 : prev + 1))
  }

  const onPrevious = () => {
    setSelectedIndex((prev) => (prev <= 0 ? photos.length - 1 : prev - 1))
  }

  const selectedPhoto = selectedIndex >= 0 ? photos[selectedIndex] : null

  return (
    <>
      <div className={cn(`group grid grid-cols-2 gap-1`)}>
        {photos.map((photo, index) => (
          <button
            key={`${photo.date}-${photo.title}`}
            ref={index === selectedIndex ? selectedButtonRef : null}
            aria-label={photo.title}
            className={cn(
              `
                transition-all
                group-hover:opacity-50
                hover:!opacity-100
                focus:ring-2 focus:ring-sky-500 focus:outline-hidden
                dark:focus:ring-sky-400
              `,
              selectedPhoto &&
                `
                  opacity-50
                  focus:ring-0
                `
            )}
            onClick={() => {
              onClick(index)
            }}
          >
            <Image
              alt={photo.title}
              loading='lazy'
              placeholder='blur'
              src={photo.src}
              className={cn(
                `mt-0 mb-0 aspect-square overflow-hidden object-cover`
              )}
            />
          </button>
        ))}
      </div>
      {selectedPhoto && (
        <Lightbox
          hasNext={selectedIndex < photos.length - 1}
          hasPrevious={selectedIndex > 0}
          photo={selectedPhoto}
          onClose={onClose}
          onNext={onNext}
          onPrevious={onPrevious}
        />
      )}
    </>
  )
}
