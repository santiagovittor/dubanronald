"use client"

import { motion, useReducedMotion } from "motion/react"
import { GeistSans } from "geist/font/sans"
import ContactLinks from "@/components/ContactLinks"

type ContactSectionProps = {
  locale?: "en" | "es"
}

const content = {
  en: {
    label: "Work with us",
    heading: "If you're putting money into ads and not getting the leads you expected, write to us.",
    subtext: "We review every inquiry and respond to the ones where there's a real fit.",
    details: [
      { num: "01", text: "What you sell and who buys it" },
      { num: "02", text: "Where you're currently running ads, if anywhere" },
      { num: "03", text: "Approximate monthly ad budget" },
      { num: "04", text: "Any deadline or constraint worth knowing" },
    ],
  },
  es: {
    label: "Trabaja con nosotros",
    heading: "Si estás invirtiendo en anuncios y no estás obteniendo los leads que esperabas, escríbenos.",
    subtext: "Revisamos todas las consultas y respondemos a las que tienen un encaje real.",
    details: [
      { num: "01", text: "Qué vendes y a quién" },
      { num: "02", text: "Dónde estás pautando actualmente, si es que lo estás haciendo" },
      { num: "03", text: "Presupuesto mensual aproximado en pauta" },
      { num: "04", text: "Algún plazo o restricción que valga la pena mencionar" },
    ],
  },
}

export default function ContactSection({ locale = "en" }: ContactSectionProps) {
  const reduced = useReducedMotion()
  const noAnim = reduced === true
  const { label, heading, subtext, details } = content[locale]

  const headingEl = (
    <h2
      className={GeistSans.className}
      style={{
        fontSize: "var(--text-display)",
        color: "var(--cream)",
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

        <div style={{ marginTop: "2rem" }}>
          {details.map((item) => (
            <div
              key={item.num}
              style={{
                display: "grid",
                gridTemplateColumns: "3rem 1fr",
                padding: "1rem 0",
                borderTop: "1px solid var(--border)",
              }}
            >
              <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
                {item.num}
              </span>
              <span
                style={{
                  fontSize: "0.9rem",
                  color: "var(--muted)",
                  lineHeight: "var(--leading-body)",
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
          <div style={{ borderBottom: "1px solid var(--border)" }} />
        </div>

        {locale === "es" ? (
          <div style={{ marginTop: "2.5rem" }}>
            <ContactLinks locale="es" />
          </div>
        ) : (
          <a
            href="mailto:hello@dubanronald.com"
            style={{
              display: "inline-block",
              fontSize: "1.5rem",
              color: "var(--orange)",
              marginTop: "2.5rem",
              textDecoration: "none",
              transition: "text-decoration 0.15s ease",
            }}
            className="hover:underline"
          >
            hello@dubanronald.com
          </a>
        )}
      </div>
    </section>
  )
}
