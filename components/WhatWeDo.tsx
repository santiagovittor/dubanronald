"use client"

import { useEffect, useRef } from "react"
import { GeistSans } from "geist/font/sans"

type WhatWeDoProps = {
  locale?: "en" | "es"
}

const content = {
  en: {
    label: "What we do",
    services: [
      {
        num: "01",
        name: "Paid media",
        desc: "We run Meta and Google ads with one goal: generating leads from people ready to act. Impressions and follower counts don't make payroll; leads do. We write the ads, manage targeting, and optimize around cost per lead.",
      },
      {
        num: "02",
        name: "Landing pages",
        desc: "An ad that sends traffic to your homepage is burning money. We build dedicated landing pages for each campaign, written to match exactly what the ad promised, with one purpose: turn an interested visitor into a contact.",
      },
      {
        num: "03",
        name: "Tracking and reporting",
        desc: "You should know, at any point, which campaign is producing leads and what each one costs. We set up the tracking to make that possible: conversion events, backend confirmations, clean attribution. No guessing.",
      },
    ],
  },
  es: {
    label: "Qué hacemos",
    services: [
      {
        num: "01",
        name: "Pauta digital",
        desc: "Corremos anuncios en Meta y Google con un solo objetivo: generar leads de personas listas para actuar. Las impresiones y los seguidores no pagan las cuentas; los leads sí. Escribimos los anuncios, manejamos la segmentación y optimizamos alrededor del costo por lead.",
      },
      {
        num: "02",
        name: "Páginas de destino",
        desc: "Un anuncio que lleva tráfico a tu página de inicio está quemando dinero. Construimos páginas de destino dedicadas para cada campaña, escritas para cumplir exactamente lo que el anuncio prometió, con un solo propósito: convertir a una persona interesada en un contacto.",
      },
      {
        num: "03",
        name: "Tracking y reportes",
        desc: "Deberías saber, en cualquier momento, qué campaña está produciendo leads y a qué costo. Configuramos el tracking para que eso sea posible: eventos de conversión, confirmaciones del backend, atribución limpia. Sin adivinar.",
      },
    ],
  },
}

export default function WhatWeDo({ locale = "en" }: WhatWeDoProps) {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])
  const { label, services } = content[locale]

  useEffect(() => {
    let killed = false
    const kills: Array<() => void> = []

    void (async () => {
      const { default: gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      if (killed) return
      gsap.registerPlugin(ScrollTrigger)

      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

      rowRefs.current.forEach((row, i) => {
        if (!row) return

        if (prefersReduced) {
          gsap.set(row, { y: 0, opacity: 1 })
          return
        }

        const tween = gsap.fromTo(
          row,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        )
        kills.push(() => tween.kill())
      })
    })()

    return () => {
      killed = true
      kills.forEach((k) => k())
    }
  }, [])

  return (
    <section style={{ padding: "6rem 0" }}>
      <div className="mx-auto max-w-6xl px-6" style={{ marginBottom: "3rem" }}>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "var(--muted)",
            textTransform: "uppercase",
          }}
        >
          {label}
        </p>
      </div>

      {services.map((svc, i) => {
        const isLast = i === services.length - 1
        return (
          <div
            key={svc.num}
            ref={(el) => {
              rowRefs.current[i] = el
            }}
            className="group"
            style={{
              borderTop: "1px solid var(--border)",
              ...(isLast ? { borderBottom: "1px solid var(--border)" } : {}),
              padding: "4rem 0",
              willChange: "transform, opacity",
            }}
          >
            <div className="mx-auto max-w-6xl px-6" style={{ position: "relative" }}>
              <span
                className="group-hover:text-[var(--orange)] group-hover:-rotate-45"
                style={{
                  position: "absolute",
                  top: 0,
                  right: "1.5rem",
                  color: "var(--muted)",
                  fontSize: "1.25rem",
                  display: "inline-block",
                  transition: "color 0.3s ease, transform 0.3s ease",
                  lineHeight: 1,
                }}
              >
                →
              </span>

              <span
                style={{
                  display: "block",
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  marginBottom: "0.75rem",
                }}
              >
                {svc.num}
              </span>

              <p
                className={`${GeistSans.className} group-hover:text-[var(--orange)]`}
                style={{
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  fontWeight: "bold",
                  color: "var(--cream)",
                  lineHeight: "var(--leading-tight)",
                  transition: "color 0.3s ease",
                }}
              >
                {svc.name}
              </p>

              <p
                className="md:opacity-0 md:-translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0"
                style={{
                  fontSize: "1rem",
                  color: "var(--muted)",
                  maxWidth: "480px",
                  marginTop: "1rem",
                  lineHeight: "var(--leading-body)",
                  transition: "opacity 0.25s ease, transform 0.25s ease",
                }}
              >
                {svc.desc}
              </p>
            </div>
          </div>
        )
      })}
    </section>
  )
}
