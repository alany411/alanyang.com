'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

import { cn } from '~/utils/cn'

type LightboxProps = {
  hasNext?: boolean
  hasPrevious?: boolean
  onClose: () => void
  onNext?: () => void
  onPrevious?: () => void
  photo: Photo
}

export default function Lightbox({
  hasNext,
  hasPrevious,
  onClose,
  onNext,
  onPrevious,
  photo,
}: LightboxProps) {
  const [isVisible, setIsVisible] = useState(false)
  const lightboxRef = useRef<HTMLDivElement>(null)

  const handleClose = useCallback(() => {
    setIsVisible(false)
    setTimeout(onClose, 100)
  }, [onClose])

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setIsVisible(true)
      if (lightboxRef.current) {
        lightboxRef.current.focus()
      }
    }, 50)

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          if (hasPrevious && onPrevious) {
            e.preventDefault()
            onPrevious()
          }
          break
        case 'ArrowRight':
          if (hasNext && onNext) {
            e.preventDefault()
            onNext()
          }
          break
        case 'Enter':
        case 'Escape':
        case 'Tab':
          e.preventDefault()
          handleClose()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      clearTimeout(animationTimer)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleClose, hasNext, hasPrevious, onNext, onPrevious])

  return (
    <div
      ref={lightboxRef}
      aria-label={`Image lightbox for ${photo.title}`}
      aria-modal='true'
      role='dialog'
      className={cn(
        `
          fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm
          transition-all duration-250 ease-in-out
          focus:outline-none
        `,
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
      onClick={handleClose}
    >
      <div className={cn('flex h-full w-full items-center justify-center p-4')}>
        <div
          className={cn(
            `relative h-full w-full transition-all duration-100 ease-in-out`,
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          )}
        >
          <Image
            alt={photo.title}
            className={cn('mt-0 mb-0 h-full w-full object-contain')}
            priority={true}
            src={photo.src}
          />
        </div>
      </div>
    </div>
  )
}
