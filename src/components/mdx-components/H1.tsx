import type { HTMLAttributes } from 'react'

export default function H1({
  children,
  ...otherProps
}: HTMLAttributes<HTMLHeadingElement>) {
  const id =
    typeof children === 'string'
      ? children.toLowerCase().replace(/\s/g, '-')
      : undefined

  return (
    <h1 {...otherProps} id={id}>
      {children}
    </h1>
  )
}
