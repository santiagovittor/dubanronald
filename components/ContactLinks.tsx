"use client"

import type React from "react"

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
    gtag?: (...args: any[]) => void
  }
}

type ContactLinksProps = {
  locale?: "en" | "es"
}

const EMAIL = "hello@dubanronald.com"
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER // digits only, e.g. 573001234567

function getCookie(name: string) {
  if (typeof document === "undefined") return undefined
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"))
  return match ? decodeURIComponent(match[2]) : undefined
}

function makeEventId() {
  // crypto.randomUUID is supported in modern browsers; fallback for older ones
  // This ID is used for dedup between Pixel + CAPI
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const c = (globalThis as any).crypto
  if (c?.randomUUID) return c.randomUUID()
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`
}

function trackGA(eventName: string) {
  try {
    window.gtag?.("event", eventName, { page_path: window.location.pathname })
  } catch {
    // no-op
  }
}

// Optional: fire Pixel too (if not blocked) using eventID for dedup
function trackPixel(eventName: "Lead" | "Contact", eventId: string, params?: Record<string, any>) {
  try {
    if (typeof window.fbq !== "function") return
    // Pixel supports passing eventID in the 4th argument for dedup
    window.fbq("track", eventName, params ?? {}, { eventID: eventId })
  } catch {
    // no-op
  }
}

async function sendCapi(eventName: "Lead" | "Contact", eventId: string) {
  const payload = {
    event_name: eventName,
    event_id: eventId,
    event_source_url: typeof window !== "undefined" ? window.location.href : undefined,
    fbp: getCookie("_fbp"),
    fbc: getCookie("_fbc"),
    custom_data: {
      method: eventName === "Lead" ? "whatsapp" : "email",
    },
  }

  try {
    // Best effort for navigation-triggered events
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(payload)], { type: "application/json" })
      navigator.sendBeacon("/api/meta/capi", blob)
      return
    }

    await fetch("/api/meta/capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    })
  } catch {
    // no-op
  }
}

export default function ContactLinks({ locale = "en" }: ContactLinksProps) {
  const msg =
    locale === "es"
      ? "Hola, me gustaría hablar sobre growth systems para mi negocio."
      : "Hello, I’d like to discuss growth systems for my business."

  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
    : null

  const whatsappLabel = locale === "es" ? "WhatsApp (consultas)" : "WhatsApp (inquiries)"

  const onEmailClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const eventId = makeEventId()

    trackGA("contact_email_click")
    trackPixel("Contact", eventId, { method: "email", language: locale })
    await sendCapi("Contact", eventId)

    // tiny delay to help the request flush before navigating
    setTimeout(() => {
      window.location.href = `mailto:${EMAIL}`
    }, 200)
  }

  const onWhatsAppClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!whatsappHref) return
    e.preventDefault()

    const eventId = makeEventId()

    trackGA("contact_whatsapp_click")
    trackPixel("Lead", eventId, { method: "whatsapp", language: locale })
    await sendCapi("Lead", eventId)

    setTimeout(() => {
      window.open(whatsappHref, "_blank", "noopener,noreferrer")
    }, 200)
  }

  return (
    <div className="space-y-3">
      <a
        href={`mailto:${EMAIL}`}
        aria-label="Email"
        onClick={onEmailClick}
        className="inline-flex items-center px-1 py-2 text-sm text-neutral-200 underline-offset-4 transition hover:text-[var(--fg)] hover:underline"
      >
        {EMAIL}
      </a>

      {whatsappHref ? (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWhatsAppClick}
          className="inline-flex items-center px-1 py-2 text-sm text-[var(--muted)] underline-offset-4 transition hover:text-[var(--fg)] hover:underline"
        >
          {whatsappLabel}
        </a>
      ) : null}
    </div>
  )
}
