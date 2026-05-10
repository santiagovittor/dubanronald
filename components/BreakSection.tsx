"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type BreakSectionProps = {
  locale?: "en" | "es"
}

const content = {
  en: {
    line1: "Impressions don't make payroll.",
    line2: "Leads do.",
  },
  es: {
    line1: "Las impresiones no pagan las cuentas.",
    line2: "Los leads sí.",
  },
}

export default function BreakSection({ locale = "en" }: BreakSectionProps) {
  const line1Ref = useRef<HTMLParagraphElement>(null)
  const line2Ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      if (line1Ref.current) line1Ref.current.style.opacity = "1"
      if (line2Ref.current) line2Ref.current.style.opacity = "1"
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line1Ref.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line1Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      )

      gsap.fromTo(
        line2Ref.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line2Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  const { line1, line2 } = content[locale]

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "var(--teal-deep)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* radial vignette — center lighter, edges near-black */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(27,154,170,0.18) 0%, rgba(0,0,0,0.72) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* film grain scoped to this section */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.06,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "0 1.5rem",
          maxWidth: "56rem",
          width: "100%",
        }}
      >
        <p
          ref={line1Ref}
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            color: "var(--cream)",
            fontWeight: "bold",
            lineHeight: "var(--leading-tight)",
            margin: 0,
            opacity: 0,
          }}
        >
          {line1}
        </p>
        <p
          ref={line2Ref}
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            color: "var(--orange)",
            fontWeight: "bold",
            lineHeight: "var(--leading-tight)",
            margin: 0,
            opacity: 0,
          }}
        >
          {line2}
        </p>
      </div>
    </section>
  )
}
