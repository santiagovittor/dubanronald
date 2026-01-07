type NavProps = {
  locale?: "en" | "es"
  enHref?: string
  esHref?: string
}

export default function Nav({ locale = "en", enHref = "/", esHref = "/es" }: NavProps) {
  const isEn = locale === "en"
  const contactLabel = locale === "es" ? "Contacto" : "Contact"
  const homeHref = isEn ? "/" : "/es"

  const linkBase = "transition hover:text-[var(--fg)]"
  const linkActive =
    "text-[var(--fg)] underline decoration-[var(--accent)] decoration-[1px] underline-offset-4"
  const linkInactive = "text-neutral-400"

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-[var(--bg)] border-b border-[var(--rule)]">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href={homeHref}
          className="min-w-0 truncate text-xs font-medium uppercase tracking-[0.22em] text-neutral-300 whitespace-nowrap transition hover:text-[var(--fg)]"
          aria-label="Duban Ronald home"
        >
          DUBAN RONALD
        </a>

        <div className="ml-6 flex min-w-0 items-center justify-end gap-4 sm:gap-5 whitespace-nowrap">
          <div className="flex items-center gap-2 text-xs">
            <a
              href={enHref}
              aria-current={isEn ? "page" : undefined}
              className={`${linkBase} ${isEn ? linkActive : linkInactive} px-1 py-2`}
            >
              EN
            </a>
            <span className="text-neutral-500">/</span>
            <a
              href={esHref}
              aria-current={!isEn ? "page" : undefined}
              className={`${linkBase} ${!isEn ? linkActive : linkInactive} px-1 py-2`}
            >
              ES
            </a>
          </div>

          <a
            href="#contact"
            className="text-sm text-[var(--muted)] underline-offset-4 transition hover:text-[var(--fg)] hover:underline px-1 py-2"
          >
            {contactLabel}
          </a>
        </div>
      </div>
    </nav>
  )
}
