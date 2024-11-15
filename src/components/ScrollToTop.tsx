'use client'

import { CircleArrowUpIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cn } from '~/utils/cn'

import IconButton from './IconButton'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <span
      className={cn(
        'absolute -top-4 right-0 z-10 shrink-0 transition-opacity',
        isVisible
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      )}
    >
      <IconButton
        aria-hidden={!isVisible}
        aria-label='Scroll to top'
        tabIndex={isVisible ? 0 : -1}
        icon={{
          lucideIcon: (
            <CircleArrowUpIcon absoluteStrokeWidth={true} size={16} />
          ),
          position: 'right',
        }}
        onClick={handleOnClick}
      >
        Scroll to top
      </IconButton>
    </span>
  )
}
