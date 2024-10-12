import { cn } from '~/utils/cn'

export default function Date({ children }: { children: string }) {
  return <div className={cn('-mt-5')}>{children}</div>
}
