type FooterProps = {
  locale?: "en" | "es"
}

export default function Footer({ locale = "en" }: FooterProps) {
  const year = new Date().getFullYear()
  const emailLabel = locale === "es" ? "Email" : "Email"

  return (
    <footer className="mx-auto max-w-5xl px-6 pb-14 md:pb-16">
      <div className="max-w-2xl border-t border-neutral-800 pt-8 text-xs text-[var(--muted)]">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Duban Ronald</span>

          <a
            href="mailto:hello@dubanronald.com"
            aria-label={emailLabel}
            className="underline-offset-4 transition hover:text-[var(--fg)] hover:underline"
          >
            hello@dubanronald.com
          </a>
        </div>
      </div>
    </footer>
  )
}
