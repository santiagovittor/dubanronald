import type { Metadata } from "next"
import Nav from "@/components/Nav"
import ContactLinks from "@/components/ContactLinks"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Duban Ronald | Acquisition systems for real estate",
  description:
    "Paid media, landings, and measurement for real estate teams with high-consideration sales cycles.",
  alternates: {
    canonical: "https://dubanronald.com/real-estate",
    languages: {
      en: "https://dubanronald.com/real-estate",
      es: "https://dubanronald.com/es/real-estate",
    },
  },
  openGraph: {
    title: "Duban Ronald | Acquisition systems for real estate",
    description:
      "Paid media, landings, and measurement for real estate teams with high-consideration sales cycles.",
    type: "website",
    url: "https://dubanronald.com/real-estate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duban Ronald | Acquisition systems for real estate",
    description:
      "Paid media, landings, and measurement for real estate teams with high-consideration sales cycles.",
  },
}

export default function RealEstatePage() {
  return (
    <>
      <Nav locale="en" />

      <main className="mx-auto max-w-5xl px-6 pt-16 pb-24 md:pb-32 space-y-24 md:space-y-32">
        <section className="max-w-2xl space-y-6">
          <h1 className="text-[clamp(2.5rem,6vw,3.5rem)] font-semibold tracking-tight leading-[1.05]">
            Acquisition systems for real estate.
          </h1>

          <p className="text-[var(--muted)] leading-relaxed">
            We build paid acquisition, landings, and measurement for high-consideration
            sales cycles. The goal is qualified demand and clean attribution, not lead
            volume.
          </p>
        </section>

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">What we optimize</h2>

          <div className="space-y-3 text-sm">
            <div className="flex gap-6">
              <span className="w-32 shrink-0 font-medium text-neutral-200">
                Lead quality
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Forms and flows designed to filter intent. Qualification is part of the
                funnel.
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-32 shrink-0 font-medium text-neutral-200">
                Speed to response
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Clear next steps and a clean handoff to sales. Response time and follow-up
                matter more than small creative changes.
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-32 shrink-0 font-medium text-neutral-200">
                Attribution
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Tracking and consistent definitions so decisions rely on stable numbers,
                not platform screenshots.
              </span>
            </div>
          </div>
        </section>

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">What we build</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            Scope depends on the asset and business model. Typical deliverables:
          </p>

          <ol className="space-y-2 text-sm text-[var(--muted)] list-none">
            <li className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-400">01</span>
              <span>Account structure and testing plan across search and paid social</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-400">02</span>
              <span>Landings and offer framing aligned with intent</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-400">03</span>
              <span>GA4 events and conversions, plus UTM standards</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-400">04</span>
              <span>Quality loops with sales and CRM checks</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-400">05</span>
              <span>Reporting that shows what changed, why, and what is next</span>
            </li>
          </ol>
        </section>

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">Fit</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            We work best with teams that can handle leads with discipline and want a
            measurable, repeatable acquisition system. If you need volume at any cost, we
            are not a fit.
          </p>

          <p className="text-[var(--muted)] leading-relaxed">
            We do not do social media management.
          </p>
        </section>

        <section id="contact" className="max-w-2xl space-y-6 scroll-mt-24">
          <h2 className="text-xl font-medium">Contact</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            If you see a possible fit, send a short note. We review inquiries and respond
            selectively.
          </p>

          <div className="space-y-3 text-sm">
            <p className="text-neutral-300">Useful details to include:</p>

            <ol className="space-y-2 text-[var(--muted)] list-none">
              <li className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-400">01</span>
                <span>Market, asset type, and price range</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-400">02</span>
                <span>Current channels and lead handling process</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-400">03</span>
                <span>Approximate monthly budget and constraints</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-400">04</span>
                <span>Timeline and what a good outcome looks like</span>
              </li>
            </ol>
          </div>

          <ContactLinks locale="en" />
        </section>
      </main>

      <Footer locale="en" />
    </>
  )
}
