export default function SkipToMain() {
  return (
    <a
      aria-label='Skip to main content'
      href='#main-content'
      className={`
        prose prose-neutral absolute -top-full left-4 p-2 decoration-transparent
        decoration-2 underline-offset-[3px] transition-all
        dark:prose-invert dark:focus:ring-offset-neutral-900
        focus:top-4 focus:outline-none focus:ring-2 focus:ring-sky-400
        focus:ring-offset-0 focus:ring-offset-white
        hover:decoration-sky-400
      `}
    >
      Skip to main content
    </a>
  )
}
