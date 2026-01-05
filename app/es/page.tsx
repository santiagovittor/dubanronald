import type { Metadata } from "next"
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"

export const metadata: Metadata = {
  title: "Duban Ronald | agencia de marketing digital y growth",
  description:
    "Sistemas de growth, paid media y analytics para equipos que tratan al marketing como un sistema continuo, no como campañas aisladas.",
  alternates: {
    canonical: "/es",
  },
  openGraph: {
    title: "Duban Ronald — agencia de marketing digital y growth",
    description:
      "Sistemas de growth, paid media y analytics para equipos que tratan al marketing como un sistema continuo, no como campañas aisladas.",
    type: "website",
    url: "/es",
    siteName: "Duban Ronald",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duban Ronald — agencia de marketing digital y growth",
    description:
      "Sistemas de growth, paid media y analytics para equipos que tratan al marketing como un sistema continuo, no como campañas aisladas.",
  },
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

export default function HomeEs() {
  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hola, me gustaría hablar sobre sistemas de growth para nuestro negocio."
      )}`
    : null

  return (
    <>
      <Nav />

      <main className="mx-auto max-w-5xl px-6 pt-16 pb-24 md:pb-32 space-y-20 md:space-y-28">
        <Hero locale="es" />

        <section className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
            Cómo trabajamos
          </h2>

          <p className="mt-5 max-w-[56ch] text-base text-neutral-400 leading-relaxed">
            Diseñamos y operamos sistemas de marketing enfocados en adquisición,
            visibilidad y conversión, pensados para rendir de forma consistente en
            el tiempo.
          </p>

          <dl className="mt-10 border-y border-neutral-800/70 divide-y divide-neutral-800/70">
            <div className="grid grid-cols-[7.5rem_1fr] gap-x-8 py-6">
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-300">
                Adquisición
              </dt>
              <dd className="text-sm text-neutral-400 leading-relaxed">
                Búsqueda y redes de pago, entornos de destino y ciclos de testeo
                diseñados para generar efecto compuesto.
              </dd>
            </div>

            <div className="grid grid-cols-[7.5rem_1fr] gap-x-8 py-6">
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-300">
                Posicionamiento
              </dt>
              <dd className="text-sm text-neutral-400 leading-relaxed">
                Intención de búsqueda, mensajes y estructura de oferta alineados
                con cómo los compradores realmente evalúan alternativas.
              </dd>
            </div>

            <div className="grid grid-cols-[7.5rem_1fr] gap-x-8 py-6">
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-300">
                Infraestructura
              </dt>
              <dd className="text-sm text-neutral-400 leading-relaxed">
                Analytics, tracking y procesos operativos que tratan al marketing
                como un sistema continuo, no como una campaña aislada.
              </dd>
            </div>
          </dl>
        </section>

        <section id="contact" className="max-w-2xl scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
            Contacto
          </h2>

          <p className="mt-5 max-w-[56ch] text-base text-neutral-400 leading-relaxed">
            Si ves posible encaje, contanos brevemente de tu negocio y objetivos.
            Revisamos cada mensaje y respondemos de forma selectiva.
          </p>

          <div className="mt-10 border-y border-neutral-800/70 py-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-300">
              Información útil para incluir
            </p>

            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li className="flex gap-3">
                <span className="text-neutral-700">—</span>
                <span>Qué vendés y a quién</span>
              </li>
              <li className="flex gap-3">
                <span className="text-neutral-700">—</span>
                <span>Canales de adquisición actuales</span>
              </li>
              <li className="flex gap-3">
                <span className="text-neutral-700">—</span>
                <span>Presupuesto mensual aproximado</span>
              </li>
              <li className="flex gap-3">
                <span className="text-neutral-700">—</span>
                <span>Plazos o restricciones relevantes</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 space-y-3">
            <a
              href="mailto:hello@dubanronald.com"
              className="inline-block text-base text-neutral-200 underline-offset-4 transition hover:underline"
            >
              hello@dubanronald.com
            </a>

            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-neutral-400 underline-offset-4 transition hover:text-neutral-200 hover:underline"
              >
                WhatsApp
              </a>
            ) : null}
          </div>
        </section>
      </main>
    </>
  )
}
