import type { Metadata } from "next"
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import ContactLinks from "@/components/ContactLinks"

export const metadata: Metadata = {
  title: "Duban Ronald | Agencia de marketing digital y growth",
  description:
    "Sistemas de growth, paid media y analytics para equipos que tratan al marketing como un sistema continuo, no como campañas aisladas.",
  openGraph: {
    title: "Duban Ronald | Sistemas de growth para adquisición digital",
    description:
      "Adquisición digital, paid media e infraestructura de performance para equipos que tratan al marketing como un sistema, no como campañas aisladas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duban Ronald | Sistemas de growth para adquisición digital",
    description:
      "Adquisición digital, paid media e infraestructura de performance para equipos que tratan al marketing como un sistema, no como campañas aisladas.",
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
            Diseñamos y operamos sistemas de marketing enfocados en adquisición,
            visibilidad y conversión, pensados para rendir de forma consistente en el tiempo.
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex gap-6">
              <span className="w-28 shrink-0 font-medium text-neutral-200">
                Adquisición
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Búsqueda y redes de pago, entornos de destino y ciclos de testeo
                diseñados para generar efecto compuesto.
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-28 shrink-0 font-medium text-neutral-200">
                Posicionamiento
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Intención de búsqueda, mensajes y estructura de oferta alineados
                con cómo los compradores realmente evalúan alternativas.
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-28 shrink-0 font-medium text-neutral-200">
                Infraestructura
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Analytics, tracking y procesos operativos que tratan al marketing
                como un sistema continuo, no como una campaña aislada.
              </span>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-2xl space-y-6 scroll-mt-24">
          <h2 className="text-xl font-medium">Contacto</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            Si ves posible encaje, contanos brevemente de tu negocio y objetivos.
            Revisamos cada mensaje y respondemos de forma selectiva.
          </p>

          <div className="space-y-3 text-sm">
            <p className="text-neutral-300">Información útil para incluir:</p>

            <div className="space-y-2 text-[var(--muted)]">
              <div className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-500">01</span>
                <span>Qué vendés y a quién</span>
              </div>
              <div className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-500">02</span>
                <span>Canales de adquisición actuales</span>
              </div>
              <div className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-500">03</span>
                <span>Presupuesto mensual aproximado</span>
              </div>
              <div className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-500">04</span>
                <span>Plazos o restricciones relevantes</span>
              </div>
            </div>
          </div>

          <ContactLinks locale="es" />
        </section>
      </main>
    </>
  )
}
