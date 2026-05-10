"use client"

import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReducedMotion } from "motion/react"
import { GeistSans } from "geist/font/sans"

type HowItWorksProps = {
  locale?: "en" | "es"
}

const content = {
  en: {
    label: "How it works",
    intro:
      "Before we touch an ad account, we map the full path: where people see your ads, where they land, and what happens after they arrive. Most businesses lose qualified buyers somewhere between the ad click and the contact form — not because the ad was bad, but because nobody built what comes after it with the same intent.",
    steps: [
      {
        num: "01",
        name: "Find the gap",
        desc: "We audit the full acquisition path and identify where qualified people are dropping off. Sometimes it's the targeting. Often it's the page they land on. Frequently it's that there's no clean data to tell either way.",
      },
      {
        num: "02",
        name: "Build the full path",
        desc: "We don't hand over a set of ads and leave; we build the landing pages too, written to match exactly what the ad promised rather than redirecting people to a homepage that wasn't made for them. The tracking gets set up to show which campaign produced which lead, not just which campaign got clicks.",
      },
      {
        num: "03",
        name: "Run it, then improve it",
        desc: "Every week, the data tells us what's working, and we use it: adjust the ads, test the pages, move budget toward what's producing leads. The system gets sharper over time.",
      },
    ],
  },
  es: {
    label: "Cómo funciona",
    intro:
      "Antes de tocar una cuenta de anuncios, analizamos todo el proceso: dónde ve la gente tu anuncio, a qué página llega, y qué pasa después de que entra. La mayoría de los negocios pierde clientes calificados en algún punto entre el clic en el anuncio y el formulario de contacto; no porque el anuncio fuera malo, sino porque nadie construyó lo que sigue con la misma intención.",
    steps: [
      {
        num: "01",
        name: "Identificar el problema",
        desc: "Auditamos el proceso completo e identificamos dónde se pierde la gente calificada. A veces el problema está en la segmentación; muchas veces está en la página de destino; con frecuencia, en que no existen datos limpios que digan qué está fallando.",
      },
      {
        num: "02",
        name: "Construir el proceso completo",
        desc: "No entregamos un conjunto de anuncios y nos vamos; construimos también las páginas de destino, escritas para cumplir exactamente lo que el anuncio prometió, no para mandar a la gente a un sitio web que nadie diseñó para ellos. Configuramos el tracking para mostrar qué campaña produjo qué lead, no solo cuál tuvo más clics.",
      },
      {
        num: "03",
        name: "Correrlo y mejorarlo",
        desc: "Cada semana, los datos nos dicen qué está funcionando, y los usamos: ajustamos los anuncios, probamos las páginas, movemos el presupuesto hacia lo que está produciendo leads. El sistema se vuelve más preciso con el tiempo.",
      },
    ],
  },
}

type StepState = { opacity: number; y: number }

// Maps scroll progress p to opacity and y-offset for one step.
// inStart/inEnd: fade-in range. outStart/outEnd: fade-out range.
// Use inStart < 0 to start fully visible. Use outStart > 1 to never fade out.
function stepState(
  p: number,
  inStart: number,
  inEnd: number,
  outStart: number,
  outEnd: number,
): StepState {
  if (p <= inStart) return { opacity: 0, y: 20 }
  if (p < inEnd) {
    const t = (p - inStart) / (inEnd - inStart)
    return { opacity: t, y: (1 - t) * 20 }
  }
  if (p <= outStart) return { opacity: 1, y: 0 }
  if (p < outEnd) {
    const t = (p - outStart) / (outEnd - outStart)
    return { opacity: 1 - t, y: -t * 12 }
  }
  return { opacity: 0, y: -12 }
}

export default function HowItWorks({ locale = "en" }: HowItWorksProps) {
  const reduced = useReducedMotion()
  const noAnim = reduced === true
  const { label, intro, steps } = content[locale]

  const scrollZoneRef = useRef<HTMLDivElement>(null)
  const progressFillRef = useRef<HTMLDivElement>(null)
  const stepLayerRefs = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    if (noAnim || !scrollZoneRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: scrollZoneRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate(self) {
          const p = self.progress

          // Transitions centred at 1/3 and 2/3, each spanning 8% of scroll
          const states: StepState[] = [
            stepState(p, -1, 0, 0.28, 0.36),      // step 0: visible from start, fades out 0.28→0.36
            stepState(p, 0.28, 0.36, 0.61, 0.69),  // step 1: fades in 0.28→0.36, fades out 0.61→0.69
            stepState(p, 0.61, 0.69, 2, 3),         // step 2: fades in 0.61→0.69, stays visible
          ]

          stepLayerRefs.current.forEach((el, i) => {
            const s = states[i]
            if (el && s !== undefined) gsap.set(el, { opacity: s.opacity, y: s.y })
          })

          if (progressFillRef.current) {
            gsap.set(progressFillRef.current, { scaleY: p })
          }
        },
      })
    }, scrollZoneRef)

    return () => ctx.revert()
  }, [noAnim])

  // ── Reduced-motion: static stacked layout ──────────────────────────────────
  if (noAnim) {
    return (
      <section style={{ padding: "8rem 0" }}>
        <div className="mx-auto max-w-6xl px-6">
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              color: "var(--muted)",
              textTransform: "uppercase",
              marginBottom: "3rem",
            }}
          >
            {label}
          </p>
          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--cream)",
              maxWidth: "640px",
              marginBottom: "4rem",
              lineHeight: "var(--leading-body)",
            }}
          >
            {intro}
          </p>
          <div>
            {steps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  padding: "2rem 0",
                  borderTop: "1px solid var(--border)",
                  ...(i === steps.length - 1
                    ? { borderBottom: "1px solid var(--border)" }
                    : {}),
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "6rem",
                    fontWeight: "bold",
                    color: "var(--teal-mid)",
                    opacity: 0.15,
                    lineHeight: 1,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {step.num}
                </span>
                <p
                  className={`${GeistSans.className} text-[1.75rem] md:text-[2.5rem]`}
                  style={{
                    fontWeight: "bold",
                    color: "var(--cream)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.name}
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--muted)",
                    lineHeight: "var(--leading-body)",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // ── Animated: sticky scroll experience ────────────────────────────────────
  return (
    <section>
      {/* Intro — normal scroll, above sticky zone */}
      <div style={{ padding: "8rem 0 4rem" }}>
        <div className="mx-auto max-w-6xl px-6">
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              color: "var(--muted)",
              textTransform: "uppercase",
              marginBottom: "3rem",
            }}
          >
            {label}
          </p>
          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--cream)",
              maxWidth: "640px",
              lineHeight: "var(--leading-body)",
            }}
          >
            {intro}
          </p>
        </div>
      </div>

      {/* 300vh scroll zone — gives 200vh of pinned scroll travel */}
      <div ref={scrollZoneRef} style={{ height: "300vh" }}>
        {/* Sticky viewport — top:4rem clears the fixed nav */}
        <div
          style={{
            position: "sticky",
            top: "4rem",
            height: "calc(100vh - 4rem)",
            overflow: "hidden",
          }}
        >
          <div
            className="relative mx-auto max-w-6xl px-6 h-full"
            style={{ display: "flex" }}
          >
            {/* Left panel — crossfading step layers */}
            <div
              className="relative h-full"
              style={{ flex: 1 }}
            >
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  ref={(el: HTMLDivElement | null) => {
                    stepLayerRefs.current[i] = el
                  }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingRight: "2rem",
                    paddingBottom: "8rem",
                    opacity: i === 0 ? 1 : 0,
                    willChange: "opacity, transform",
                  }}
                >
                  {/* Decorative step number — bottom-left */}
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      bottom: "2rem",
                      left: 0,
                      fontSize: "6rem",
                      fontWeight: "bold",
                      color: "var(--teal-mid)",
                      opacity: 0.15,
                      lineHeight: 1,
                      pointerEvents: "none",
                      userSelect: "none",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {step.num}
                  </span>

                  {/* Step name */}
                  <p
                    className={GeistSans.className}
                    style={{
                      fontSize: "var(--text-display)",
                      fontWeight: "bold",
                      color: "var(--cream)",
                      lineHeight: "var(--leading-tight)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {step.name}
                  </p>

                  {/* Step description */}
                  <p
                    style={{
                      fontSize: "1.125rem",
                      color: "var(--muted)",
                      lineHeight: "var(--leading-body)",
                      maxWidth: "480px",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right panel spacer — desktop only */}
            <div className="hidden md:block" style={{ width: "50%" }} />

            {/* Vertical progress bar — right edge of container */}
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: "2px",
                height: "100%",
                background: "var(--border)",
              }}
            >
              <div
                ref={progressFillRef}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "2px",
                  height: "100%",
                  background: "var(--orange)",
                  transformOrigin: "top",
                  transform: "scaleY(0)",
                  willChange: "transform",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
