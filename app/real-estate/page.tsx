import type { Metadata } from "next"
import Nav from "@/components/Nav"
import ContactLinks from "@/components/ContactLinks"

export const metadata: Metadata = {
  title: "Duban Ronald | Real estate acquisition systems",
  description:
    "Paid media, landing environments, and measurement for real estate teams with high-consideration sales cycles.",
  alternates: {
    languages: {
      en: "https://dubanronald.com/real-estate",
      es: "https://dubanronald.com/es/real-estate",
    },
  },
}

export default function RealEstatePage() {
  return (
    <>
      <Nav locale="en" />

      <main className="mx-auto max-w-5xl px-6 pt-16 pb-24 md:pb-32 space-y-24 md:space-y-32">
        <section className="max-w-2xl space-y-6">
          <h1 className="text-[clamp(2.5rem,6vw,3.5rem)] font-semibold tracking-tight leading-[1.05]">
            Real estate acquisition systems.
          </h1>

          <p className="text-[var(--muted)] leading-relaxed">
            We build paid acquisition, landing environments, and measurement for
            high-consideration sales cycles. The goal is qualified demand and clean
            attribution, not lead volume.
          </p>
        </section>

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">What we optimize for</h2>

          <div className="space-y-3 text-sm">
            <div className="flex gap-6">
              <span className="w-32 shrink-0 font-medium text-neutral-200">
                Lead quality
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Forms and flows designed to filter intent. Qualification is part of the
                funnel, not an afterthought.
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-32 shrink-0 font-medium text-neutral-200">
                Speed to lead
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Clear next steps and tight handoff. Response time and follow-up affect
                conversion more than creative changes.
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-32 shrink-0 font-medium text-neutral-200">
                Attribution
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Consistent tracking and definitions so decisions are based on stable
                numbers, not platform screenshots.
              </span>
            </div>
          </div>
        </section>

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">What we build</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            Work depends on the asset and the sales model. Typical deliverables include:
          </p>

          <div className="space-y-2 text-sm text-[var(--muted)]">
            <div className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-500">01</span>
              <span>Account structure and testing plan across search and paid social</span>
            </div>
            <div className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-500">02</span>
              <span>Landing environments and offer framing aligned with buyer intent</span>
            </div>
            <div className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-500">03</span>
              <span>GA4 events, conversions, and UTM standards for clean reporting</span>
            </div>
            <div className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-500">04</span>
              <span>Lead quality loops with the sales team and CRM handoff checks</span>
            </div>
            <div className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-500">05</span>
              <span>Reporting that shows what changed, why, and what we do next</span>
            </div>
          </div>
        </section>

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">Fit</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            We work best with teams that can handle leads properly and want a measured,
            repeatable acquisition system. If you need volume at any cost, we are not a fit.
          </p>

          <p className="text-[var(--muted)] leading-relaxed">
            We do not provide social media management.
          </p>
        </section>

        <section id="contact" className="max-w-2xl space-y-6 scroll-mt-24">
          <h2 className="text-xl font-medium">Contact</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            If you believe there may be a fit, send a short note. We review all inquiries
            and respond selectively.
          </p>

          <div className="space-y-3 text-sm">
            <p className="text-neutral-300">Useful details to include:</p>

            <div className="space-y-2 text-[var(--muted)]">
              <div className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-500">01</span>
                <span>Market, asset type, and price range</span>
              </div>
              <div className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-500">02</span>
                <span>Current acquisition channels and lead handling process</span>
              </div>
              <div className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-500">03</span>
                <span>Approximate monthly budget and constraints</span>
              </div>
              <div className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-500">04</span>
                <span>Timeline and what a successful outcome looks like</span>
              </div>
            </div>
          </div>

          <ContactLinks locale="en" />
        </section>
      </main>
    </>
  )
}
