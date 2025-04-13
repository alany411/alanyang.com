import { cn } from '~/utils/cn'

type SubheadingProps = {
  children: string
  className?: string
}

export default function Subheading({ children, className }: SubheadingProps) {
  return <div className={cn('-mt-5', className)}>{children}</div>
}
