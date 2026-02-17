"use client"

import type React from "react"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
  }
}

type ContactLinksProps = {
  locale?: "en" | "es"
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
const EMAIL = "hello@dubanronald.com"

export default function ContactLinks({ locale = "en" }: ContactLinksProps) {
  const text =
    locale === "es"
      ? "Hola, me gustaría hablar sobre sistemas de growth para nuestro negocio."
      : "Hello, I’d like to discuss growth systems for our business."

  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    : null

  const whatsappLabel = locale === "es" ? "WhatsApp (consultas)" : "WhatsApp (inquiries)"
  const emailLabel = "Email"

  const trackGA = (eventName: string) => {
    try {
      window.gtag?.("event", eventName, { page_path: window.location.pathname })
    } catch {
      // no-op
    }
  }

  const trackMeta = (eventName: "Lead" | "Contact", params: Record<string, any>) => {
    try {
      // If fbq is blocked by extensions, this safely does nothing
      window.fbq?.("track", eventName, params)
    } catch {
      // no-op
    }
  }

  const onEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    trackGA("contact_email_click")
    trackMeta("Contact", { method: "email", language: locale })

    setTimeout(() => {
      window.location.href = `mailto:${EMAIL}`
    }, 200)
  }

  const onWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!whatsappHref) return
    e.preventDefault()
    trackGA("contact_whatsapp_click")
    trackMeta("Lead", { method: "whatsapp", language: locale })

    setTimeout(() => {
      window.open(whatsappHref, "_blank", "noopener,noreferrer")
    }, 200)
  }

  return (
    <div className="space-y-3">
      <a
        href={`mailto:${EMAIL}`}
        aria-label={emailLabel}
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
