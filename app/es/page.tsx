import type { Metadata } from "next"
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import ContactLinks from "@/components/ContactLinks"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Duban Ronald | Agencia de marketing digital y growth",
  description:
    "Sistemas de growth, paid media y analytics para equipos que trabajan el marketing como un sistema continuo, no como campañas sueltas.",
  alternates: {
    canonical: "https://dubanronald.com/es",
    languages: {
      en: "https://dubanronald.com/",
      es: "https://dubanronald.com/es",
    },
  },
  openGraph: {
    title: "Duban Ronald | Sistemas de growth para adquisición digital",
    description:
      "Adquisición digital, paid media e infraestructura de performance para equipos que operan el marketing como un sistema continuo, no como campañas sueltas.",
    type: "website",
    url: "https://dubanronald.com/es",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duban Ronald | Sistemas de growth para adquisición digital",
    description:
      "Adquisición digital, paid media e infraestructura de performance para equipos que operan el marketing como un sistema continuo, no como campañas sueltas.",
  },
}

export default function HomeEs() {
  return (
    <>
      <Nav locale="es" />

      <main className="mx-auto max-w-5xl px-6 pt-16 pb-24 md:pb-32 space-y-24 md:space-y-32">
        <Hero locale="es" />

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">Cómo trabajamos</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            Diseñamos y operamos sistemas orientados a adquisición, visibilidad y
            conversión. Performance sostenida, no campañas sueltas.
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex gap-6">
              <span className="w-28 shrink-0 font-medium text-neutral-200">
                Adquisición
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Search y paid social, landings y ciclos de testing pensados para
                construir efecto compuesto.
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-28 shrink-0 font-medium text-neutral-200">
                Posicionamiento
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Intención de búsqueda, mensaje y framing de oferta alineados con cómo
                los compradores evalúan alternativas.
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-28 shrink-0 font-medium text-neutral-200">
                Infraestructura
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Analytics, tracking y procesos para sostener estándares y tomar decisiones
                con números estables.
              </span>
            </div>
          </div>

          <div className="space-y-3 border-t border-neutral-800 pt-6 text-sm">
            <a
              href="/es/real-estate"
              aria-label="Sistemas de adquisición para real estate"
              className="group flex gap-6 underline-offset-4 transition hover:underline"
            >
              <span className="w-28 shrink-0 font-medium text-neutral-400 transition group-hover:text-[var(--fg)]">
                Real estate
              </span>
              <span className="text-neutral-300 leading-relaxed transition group-hover:text-[var(--fg)]">
                Sistemas de adquisición para ciclos de venta largos y de alta consideración.
              </span>
            </a>

            <a
              href="/es/analytics-tracking"
              aria-label="Analytics y tracking"
              className="group flex gap-6 underline-offset-4 transition hover:underline"
            >
              <span className="w-28 shrink-0 font-medium text-neutral-400 transition group-hover:text-[var(--fg)]">
                Analytics
              </span>
              <span className="text-neutral-300 leading-relaxed transition group-hover:text-[var(--fg)]">
                Medición y tracking para decidir con atribución clara.
              </span>
            </a>
          </div>
        </section>

        <section id="contact" className="max-w-2xl space-y-6 scroll-mt-24">
          <h2 className="text-xl font-medium">Contacto</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            Si ves posible encaje, mandanos un mensaje breve con tu negocio y objetivos.
            Revisamos cada consulta y respondemos de forma selectiva.
          </p>

          <div className="space-y-3 text-sm">
            <p className="text-neutral-300">Información útil para incluir:</p>

            <ol className="space-y-2 text-[var(--muted)] list-none">
              <li className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-400">01</span>
                <span>Qué vendés y a quién</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-400">02</span>
                <span>Canales actuales y cómo gestionan los leads</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-400">03</span>
                <span>Rango de inversión mensual y restricciones</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-400">04</span>
                <span>Plazos y qué sería un buen resultado</span>
              </li>
            </ol>
          </div>

          <ContactLinks locale="es" />
        </section>
      </main>

      <Footer locale="es" />
    </>
  )
}
