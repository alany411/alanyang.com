'use client'

import type { IconType } from '@icons-pack/react-simple-icons'
import { useTransitionRouter } from 'next-view-transitions'
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentProps,
  ReactElement,
} from 'react'
import { Email } from 'react-obfuscate-email'

import { cn } from '~/utils/cn'

type IconProps = {
  component: ReactElement<IconType>
}

const Icon = ({ component }: IconProps) => (
  <span
    aria-hidden={true}
    className={cn(`
      transition-colors

      dark:group-hover:text-sky-400 dark:group-focus:text-sky-400

      group-focus:text-sky-500

      group-hover:text-sky-500
    `)}
  >
    {component}
  </span>
)

type ButtonContentProps = {
  children: string
  icon: {
    component: IconProps['component']
    position: 'left' | 'right'
  }
}

const ButtonContent = ({ children, icon }: ButtonContentProps) => {
  return (
    <>
      {icon.position === 'left' && <Icon component={icon.component} />}
      <span>{children}</span>
      {icon.position === 'right' && <Icon component={icon.component} />}
    </>
  )
}

type ButtonVariants = {
  email: {
    variant: 'email'
    email: string
  } & Omit<ComponentProps<typeof Email>, 'children' | 'email'>
  external: {
    variant: 'external'
    href: string
  } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'href'>
  internal: {
    variant: 'internal'
    href: string
  } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onClick'>
  function: {
    variant: 'function'
  } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>
}

type IconButtonProps = ButtonContentProps &
  {
    [K in keyof ButtonVariants]: ButtonVariants[K]
  }[keyof ButtonVariants]

const containerClasses = cn(`
  group prose prose-neutral inline-flex items-center justify-center space-x-1
  bg-neutral-200 p-2 text-xs font-semibold transition-all

  dark:prose-invert dark:bg-neutral-800 dark:focus:ring-sky-400

  focus:outline-none focus:ring-2 focus:ring-sky-500
`)

export default function IconButton(props: IconButtonProps) {
  const router = useTransitionRouter()

  const { variant } = props

  if (variant === 'email') {
    const {
      children,
      className,
      email,
      icon,
      variant: _variant,
      ...otherProps
    } = props

    return (
      <Email
        className={cn(containerClasses, className)}
        email={email}
        {...otherProps}
      >
        <ButtonContent icon={icon}>{children}</ButtonContent>
      </Email>
    )
  }

  if (variant === 'external') {
    const {
      'aria-label': ariaLabel,
      children,
      className,
      href,
      icon,
      variant: _variant,
      ...otherProps
    } = props

    return (
      <a
        aria-label={ariaLabel ?? children}
        className={cn(containerClasses, className)}
        href={href}
        rel='noopener noreferrer'
        target='_blank'
        {...otherProps}
      >
        <ButtonContent icon={icon}>{children}</ButtonContent>
      </a>
    )
  }

  if (variant === 'internal') {
    const {
      'aria-label': ariaLabel,
      children,
      className,
      href,
      icon,
      variant: _variant,
      ...otherProps
    } = props

    return (
      <button
        aria-label={ariaLabel ?? children}
        className={cn(containerClasses, className)}
        type='button'
        onClick={() => {
          router.push(href)
        }}
        {...otherProps}
      >
        <ButtonContent icon={icon}>{children}</ButtonContent>
      </button>
    )
  }

  const {
    'aria-label': ariaLabel,
    children,
    className,
    icon,
    onClick,
    variant: _variant,
    ...otherProps
  } = props

  return (
    <button
      aria-label={ariaLabel ?? children}
      className={cn(containerClasses, className)}
      type='button'
      onClick={onClick}
      {...otherProps}
    >
      <ButtonContent icon={icon}>{children}</ButtonContent>
    </button>
  )
}
