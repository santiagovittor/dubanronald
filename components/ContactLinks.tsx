"use client"

import { trackMeta } from "@/lib/metaPixel"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

type ContactLinksProps = {
  locale?: "en" | "es"
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

export default function ContactLinks({ locale = "en" }: ContactLinksProps) {
  const text =
    locale === "es"
      ? "Hola, me gustaría hablar sobre sistemas de growth para nuestro negocio."
      : "Hello, I’d like to discuss growth systems for our business."

  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    : null

  const whatsappLabel = locale === "es" ? "WhatsApp (consultas)" : "WhatsApp (inquiries)"
  const emailLabel = locale === "es" ? "Email" : "Email"

  const trackGA = (eventName: string) => {
    try {
      window.gtag?.("event", eventName, { page_path: window.location.pathname })
    } catch {
      // no-op
    }
  }

  const onEmailClick = () => {
    trackGA("contact_email_click")
    trackMeta("Contact", { method: "email", language: locale })
  }

  const onWhatsAppClick = () => {
    trackGA("contact_whatsapp_click")
    // WhatsApp click is high intent → treat as Lead
    trackMeta("Lead", { method: "whatsapp", language: locale })
  }

  return (
    <div className="space-y-3">
      <a
        href="mailto:hello@dubanronald.com"
        aria-label={emailLabel}
        onClick={onEmailClick}
        className="inline-flex items-center px-1 py-2 text-sm text-neutral-200 underline-offset-4 transition hover:text-[var(--fg)] hover:underline"
      >
        hello@dubanronald.com
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
