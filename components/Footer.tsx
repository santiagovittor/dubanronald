type FooterProps = {
  locale?: "en" | "es"
}

export default function Footer({ locale = "en" }: FooterProps) {
  const year = new Date().getFullYear()
  const emailLabel = locale === "es" ? "Email" : "Email"
  const tagline = locale === "es" ? "Sistemas de growth." : "Growth systems."

  return (
    <footer className="mx-auto max-w-5xl px-6 pb-14 md:pb-16">
      <div className="border-t border-neutral-800 pt-8 text-xs text-[var(--muted)]">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-3">
            <span>© {year} Duban Ronald</span>
            <span className="text-neutral-400">{tagline}</span>
          </div>

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
