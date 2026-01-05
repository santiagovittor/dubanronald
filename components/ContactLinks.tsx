"use client"

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
      ? "Hola — me gustaría hablar sobre sistemas de growth para nuestro negocio."
      : "Hello — I’d like to discuss growth systems for our business."

  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    : null

  const track = (eventName: string) => {
    try {
      window.gtag?.("event", eventName, { page_path: window.location.pathname })
    } catch {
      // no-op
    }
  }

  return (
    <div className="space-y-3">
      <a
        href="mailto:hello@dubanronald.com"
        onClick={() => track("contact_email_click")}
        className="inline-block underline underline-offset-4"
      >
        hello@dubanronald.com
      </a>

      {whatsappHref ? (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("contact_whatsapp_click")}
          className="block text-sm text-[var(--muted)] underline-offset-4 transition hover:text-[var(--fg)] hover:underline"
        >
          WhatsApp
        </a>
      ) : null}
    </div>
  )
}
