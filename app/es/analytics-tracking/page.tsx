import type { Metadata } from "next"
import Nav from "@/components/Nav"
import ContactLinks from "@/components/ContactLinks"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Duban Ronald | Analytics y tracking",
  description:
    "Eventos en GA4, tracking de conversiones y sistemas de reporting pensados para decidir, no para capturas.",
  alternates: {
    languages: {
      en: "https://dubanronald.com/analytics-tracking",
      es: "https://dubanronald.com/es/analytics-tracking",
    },
  },
}

export default function AnalyticsTrackingPageEs() {
  return (
    <>
      <Nav locale="es" />

      <main className="mx-auto max-w-5xl px-6 pt-16 pb-24 md:pb-32 space-y-24 md:space-y-32">
        <section className="max-w-2xl space-y-6">
          <h1 className="text-[clamp(2.5rem,6vw,3.5rem)] font-semibold tracking-tight leading-[1.05]">
            Analytics y tracking.
          </h1>

          <p className="text-[var(--muted)] leading-relaxed">
            Implementamos sistemas de medición para tomar decisiones. Definiciones claras,
            tracking consistente y reporting que soporta revisión.
          </p>
        </section>

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">Fallos comunes</h2>

          <div className="space-y-3 text-sm">
            <div className="flex gap-6">
              <span className="w-40 shrink-0 font-medium text-neutral-200">
                Números inestables
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Fuentes mezcladas, UTMs inconsistentes y eventos duplicados generan
                reportes que no cierran.
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-40 shrink-0 font-medium text-neutral-200">
                Conversiones equivocadas
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Medir clics y pageviews mientras se ignoran acciones calificadas lleva a
                optimización falsa.
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-40 shrink-0 font-medium text-neutral-200">
                Sin ownership
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Hay dashboards, pero nadie puede explicar qué mide un número o por qué
                cambió.
              </span>
            </div>
          </div>
        </section>

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">Qué implementamos</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            El alcance depende de tu stack, pero la base es consistente.
          </p>

          <div className="space-y-2 text-sm text-[var(--muted)]">
            <div className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-500">01</span>
              <span>Mapa de eventos alineado al embudo y proceso comercial</span>
            </div>
            <div className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-500">02</span>
              <span>Configuración de GA4 con conversiones limpias y deduplicación</span>
            </div>
            <div className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-500">03</span>
              <span>Estándar de UTM y reglas de agrupación de canales</span>
            </div>
            <div className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-500">04</span>
              <span>Template de reporting con definiciones estables y notas</span>
            </div>
            <div className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-500">05</span>
              <span>QA continuo para mantener el tracking consistente</span>
            </div>
          </div>
        </section>

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">Encaje</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            Esto es para equipos que quieren atribución clara y están dispuestos a hacer
            cumplir estándares. Si necesitás un dashboard para mostrar, no hay encaje.
          </p>
        </section>

        <section id="contact" className="max-w-2xl space-y-6 scroll-mt-24">
          <h2 className="text-xl font-medium">Contacto</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            Mandanos un mensaje breve con tu stack y objetivos. Respondemos de forma selectiva.
          </p>

          <div className="space-y-3 text-sm">
            <p className="text-neutral-300">Información útil para incluir:</p>

            <div className="space-y-2 text-[var(--muted)]">
              <div className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-500">01</span>
                <span>Plataforma del sitio y formularios</span>
              </div>
              <div className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-500">02</span>
                <span>CRM y qué cuenta como lead calificado</span>
              </div>
              <div className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-500">03</span>
                <span>Canales actuales y rango de inversión mensual</span>
              </div>
              <div className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-500">04</span>
                <span>Qué está fallando o falta hoy</span>
              </div>
            </div>
          </div>

          <ContactLinks locale="es" />
        </section>
      </main>

      <Footer locale="es" />
    </>
  )
}
