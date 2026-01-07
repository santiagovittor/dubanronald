import type { Metadata } from "next"
import Nav from "@/components/Nav"
import ContactLinks from "@/components/ContactLinks"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Duban Ronald | Sistemas de adquisición para real estate",
  description:
    "Paid media, landings y medición para equipos de real estate con ciclos de venta de alta consideración.",
  alternates: {
    canonical: "https://dubanronald.com/es/real-estate",
    languages: {
      en: "https://dubanronald.com/real-estate",
      es: "https://dubanronald.com/es/real-estate",
    },
  },
  openGraph: {
    title: "Duban Ronald | Sistemas de adquisición para real estate",
    description:
      "Paid media, landings y medición para equipos de real estate con ciclos de venta de alta consideración.",
    type: "website",
    url: "https://dubanronald.com/es/real-estate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duban Ronald | Sistemas de adquisición para real estate",
    description:
      "Paid media, landings y medición para equipos de real estate con ciclos de venta de alta consideración.",
  },
}

export default function RealEstatePage() {
  return (
    <>
      <Nav locale="es" enHref="/real-estate" esHref="/es/real-estate" />

      <main className="mx-auto max-w-5xl px-6 pt-16 pb-24 md:pb-32 space-y-24 md:space-y-32">
        <section className="max-w-2xl space-y-6">
          <h1 className="text-[clamp(2.5rem,6vw,3.5rem)] font-semibold tracking-tight leading-[1.05]">
            Sistemas de adquisición para real estate.
          </h1>

          <p className="text-[var(--muted)] leading-relaxed">
            Armamos paid media, landings y medición para ciclos de venta largos. Buscamos
            demanda calificada y atribución limpia, no volumen de leads.
          </p>
        </section>

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">Qué optimizamos</h2>

          <div className="space-y-3 text-sm">
            <div className="flex gap-6">
              <span className="w-32 shrink-0 font-medium text-neutral-200">
                Calidad del lead
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Formularios y flujos para filtrar intención. La calificación es parte del
                embudo.
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-32 shrink-0 font-medium text-neutral-200">
                Tiempo de respuesta
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Pasos siguientes claros y derivación limpia a ventas. El tiempo de
                respuesta y el seguimiento pesan más que microajustes creativos.
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-32 shrink-0 font-medium text-neutral-200">
                Atribución
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Tracking y definiciones consistentes para decidir con números estables, no
                con capturas de plataforma.
              </span>
            </div>
          </div>
        </section>

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">Qué construimos</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            El alcance depende del activo y del modelo de negocio. Entregables típicos:
          </p>

          <ol className="space-y-2 text-sm text-[var(--muted)] list-none">
            <li className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-400">01</span>
              <span>Estructura de cuenta y plan de testeo en Search y Paid Social</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-400">02</span>
              <span>Landings y framing de oferta alineados con intención</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-400">03</span>
              <span>Eventos y conversiones en GA4, más estándar de UTM</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-400">04</span>
              <span>Loops de calidad con ventas y chequeos en CRM</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-400">05</span>
              <span>Reporting con qué cambió, por qué y qué sigue</span>
            </li>
          </ol>
        </section>

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">Encaje</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            Funciona mejor con equipos que gestionan leads con disciplina y quieren un
            sistema de adquisición medible y repetible. Si necesitás volumen a cualquier
            costo, no hay encaje.
          </p>

          <p className="text-[var(--muted)] leading-relaxed">
            No hacemos gestión de redes sociales.
          </p>
        </section>

        <section id="contact" className="max-w-2xl space-y-6 scroll-mt-24">
          <h2 className="text-xl font-medium">Contacto</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            Si ves posible encaje, mandanos un mensaje breve. Revisamos consultas y
            respondemos de forma selectiva.
          </p>

          <div className="space-y-3 text-sm">
            <p className="text-neutral-300">Información útil para incluir:</p>

            <ol className="space-y-2 text-[var(--muted)] list-none">
              <li className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-400">01</span>
                <span>Mercado, tipo de activo y rango de precios</span>
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
