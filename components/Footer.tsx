import FilmRebate from "@/components/FilmRebate"

type FooterProps = {
  locale?: "en" | "es"
}

export default function Footer({ locale: _locale = "en" }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: "var(--bg-warm)" }}>
      <FilmRebate />
      <div className="max-w-6xl mx-auto px-6" style={{ padding: "3rem 0" }}>
        <div
          className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
          style={{ paddingTop: "2rem" }}
        >
          <div className="flex flex-col">
            <span
              className="uppercase"
              style={{
                color: "var(--text)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                fontSize: "0.875rem",
              }}
            >
              DUBAN RONALD
            </span>
            <span
              style={{
                color: "var(--muted)",
                fontSize: "0.875rem",
                marginTop: "0.25rem",
              }}
            >
              Performance media. Built to compound.
            </span>
          </div>

          <span
            style={{
              color: "var(--muted)",
              fontSize: "0.875rem",
            }}
          >
            © {year} Duban Ronald
          </span>
        </div>
      </div>
    </footer>
  )
}
