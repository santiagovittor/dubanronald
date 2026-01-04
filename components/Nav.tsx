export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-[var(--bg)]">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">
          DUBAN RONALD
        </span>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <a href="/" className="transition hover:text-[var(--fg)]">
              EN
            </a>
            <span className="text-neutral-700">/</span>
            <a href="/es" className="transition hover:text-[var(--fg)]">
              ES
            </a>
          </div>

          <a
            href="#contact"
            className="text-sm text-[var(--muted)] underline-offset-4 transition hover:text-[var(--fg)] hover:underline"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
