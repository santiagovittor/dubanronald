export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-[var(--bg)] px-4 md:px-6">
      <div className="flex h-16 items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">
          DUBAN RONALD
        </span>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <a href="/en" className="hover:text-[var(--fg)] transition">
              EN
            </a>
            <span className="text-neutral-600">/</span>
            <a href="/es" className="hover:text-[var(--fg)] transition">
              ES
            </a>
          </div>

          <a
            href="#contact"
            className="text-sm text-[var(--muted)] underline-offset-4 hover:text-[var(--fg)] hover:underline transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
