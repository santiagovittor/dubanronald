"use client"

import { useEffect, useState } from "react"

type NavProps = {
  locale?: "en" | "es"
  enHref?: string
  esHref?: string
}

export default function Nav({ locale = "en", enHref = "/", esHref = "/es" }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const isEn = locale === "en"
  const contactLabel = locale === "es" ? "Contacto" : "Contact"
  const homeHref = isEn ? "/" : "/es"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-20"
      style={{
        background: scrolled ? "rgba(42,42,42,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition:
          "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href={homeHref}
          className="min-w-0 truncate whitespace-nowrap uppercase"
          style={{
            color: "var(--cream)",
            fontWeight: 700,
            letterSpacing: "0.08em",
            fontSize: "0.875rem",
            transition: "opacity 0.2s",
          }}
          aria-label="Duban Ronald home"
        >
          DUBAN RONALD
        </a>

        <div className="ml-6 flex min-w-0 items-center justify-end gap-4 sm:gap-5 whitespace-nowrap">
          <div className="flex items-center gap-2 text-xs">
            <a
              href={enHref}
              aria-current={isEn ? "page" : undefined}
              className="px-1 py-2"
              style={{
                color: isEn ? "var(--cream)" : "var(--muted)",
                transition: "color 0.2s",
              }}
            >
              EN
            </a>
            <span style={{ color: "var(--muted)" }}>/</span>
            <a
              href={esHref}
              aria-current={!isEn ? "page" : undefined}
              className="px-1 py-2"
              style={{
                color: !isEn ? "var(--cream)" : "var(--muted)",
                transition: "color 0.2s",
              }}
            >
              ES
            </a>
          </div>

          <a
            href="#contact"
            className="px-1 py-2 text-sm"
            style={{ color: "var(--muted)", transition: "color 0.2s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--orange)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--muted)")
            }
          >
            {contactLabel}
          </a>
        </div>
      </div>
    </nav>
  )
}
