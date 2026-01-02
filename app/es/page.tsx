import type { Metadata } from "next"
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"

export const metadata: Metadata = {
  title: "Duban Ronald — agencia de marketing digital y growth",
  description:
    "Sistemas de growth, paid media y analytics para equipos que tratan al marketing como un sistema continuo, no como campañas aisladas.",
}

export default function HomeEs() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-5xl px-6 pt-16 md:pt-20 pb-24 md:pb-32 space-y-24 md:space-y-32">
        <Hero locale="es" />

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">Cómo trabajamos</h2>

          <p className="text-neutral-500 leading-relaxed">
            Diseñamos y operamos sistemas de marketing enfocados en adquisición,
            visibilidad y conversión, pensados para rendir de forma consistente en el tiempo.
          </p>

          <div className="space-y-2 text-sm text-neutral-400">
            <div className="flex gap-3">
              <span className="w-28 shrink-0 font-medium text-neutral-300">
                Adquisición
              </span>
              <span>
                Búsqueda y redes de pago, entornos de destino y ciclos de testeo
                diseñados para generar efecto compuesto.
              </span>
            </div>

            <div className="flex gap-3">
              <span className="w-28 shrink-0 font-medium text-neutral-300">
                Posicionamiento
              </span>
              <span>
                Intención de búsqueda, mensajes y estructura de oferta alineados
                con cómo los compradores realmente evalúan alternativas.
              </span>
            </div>

            <div className="flex gap-3">
              <span className="w-28 shrink-0 font-medium text-neutral-300">
                Infraestructura
              </span>
              <span>
                Analytics, tracking y procesos operativos que tratan al marketing
                como un sistema continuo, no como una campaña aislada.
              </span>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-2xl space-y-6 scroll-mt-24">
          <h2 className="text-xl font-medium">Contacto</h2>

          <p className="text-neutral-500 leading-relaxed">
            Si ves posible encaje, contanos brevemente de tu negocio y objetivos.
            Revisamos cada mensaje y respondemos de forma selectiva.
          </p>

          <div className="text-sm text-neutral-400 space-y-1">
            <p>Información útil para incluir:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Qué vendés y a quién</li>
              <li>Canales de adquisición actuales</li>
              <li>Presupuesto mensual aproximado</li>
              <li>Plazos o restricciones relevantes</li>
            </ul>
          </div>

          <a
            href="mailto:hello@dubanronald.com"
            className="inline-block underline underline-offset-4"
          >
            hello@dubanronald.com
          </a>
        </section>
      </main>
    </>
  )
}
