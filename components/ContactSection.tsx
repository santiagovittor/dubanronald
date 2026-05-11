"use client"

import { motion, useReducedMotion } from "motion/react"
import { GeistSans } from "geist/font/sans"

type ContactSectionProps = {
  locale?: "en" | "es"
}

const content = {
  en: {
    label: "Work with us",
    heading: "If you're putting money into ads and not getting the leads you expected, write to us.",
    subtext: "We review every inquiry and respond to the ones where there's a real fit.",
    ctaHeading: "Ready to talk?",
    ctaSubtext: "Three questions. Two minutes.",
    ctaButton: "Introduce your business →",
    fallbackPrefix: "Prefer email?",
  },
  es: {
    label: "Trabaja con nosotros",
    heading: "Si estás invirtiendo en anuncios y no estás obteniendo los leads que esperabas, escríbenos.",
    subtext: "Revisamos todas las consultas y respondemos a las que tienen un encaje real.",
    ctaHeading: "¿Listo para hablar?",
    ctaSubtext: "Tres preguntas. Dos minutos.",
    ctaButton: "Preséntanos tu negocio →",
    fallbackPrefix: "¿Prefieres el email?",
  },
}

export default function ContactSection({ locale = "en" }: ContactSectionProps) {
  const reduced = useReducedMotion()
  const noAnim = reduced === true
  const { label, heading, subtext, ctaHeading, ctaSubtext, ctaButton, fallbackPrefix } =
    content[locale]

  const headingEl = (
    <h2
      className={GeistSans.className}
      style={{
        fontSize: "var(--text-display)",
        color: "var(--text)",
        lineHeight: "var(--leading-tight)",
        maxWidth: "700px",
        fontWeight: "bold",
      }}
    >
      {heading}
    </h2>
  )

  return (
    <section id="contact" style={{ padding: "8rem 0" }}>
      <div className="mx-auto max-w-6xl px-6">
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "var(--muted)",
            textTransform: "uppercase",
            marginBottom: "3rem",
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
          }}
        >
          {label}
        </p>

        {noAnim ? (
          headingEl
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5 }}
          >
            {headingEl}
          </motion.div>
        )}

        <p
          style={{
            color: "var(--muted)",
            marginTop: "1.5rem",
            lineHeight: "var(--leading-body)",
          }}
        >
          {subtext}
        </p>

        {/* CTA card */}
        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_auto]"
          style={{
            backgroundColor: "var(--teal-deep)",
            borderRadius: "2px",
            padding: "3rem",
            marginTop: "3rem",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "var(--cream)",
                fontSize: "2rem",
                fontWeight: "bold",
                lineHeight: "var(--leading-tight)",
              }}
            >
              {ctaHeading}
            </p>
            <p
              style={{
                color: "rgba(240,232,216,0.6)",
                fontSize: "1rem",
                marginTop: "0.5rem",
              }}
            >
              {ctaSubtext}
            </p>
          </div>

          <button
            data-tf-popup="D4JyowCQ"
            data-tf-size="60"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--bg)",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              padding: "1rem 1.5rem",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
              borderRadius: "2px",
            }}
          >
            {ctaButton}
          </button>
        </div>

        <p style={{ color: "var(--muted)", fontSize: "0.875rem", marginTop: "1.5rem" }}>
          {fallbackPrefix}{" "}
          <a
            href="mailto:hello@dubanronald.com"
            className="hover:underline"
            style={{ color: "var(--muted)" }}
          >
            hello@dubanronald.com
          </a>
        </p>
      </div>
    </section>
  )
}
