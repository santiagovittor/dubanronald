import type { Metadata } from "next"
import Nav from "@/components/Nav"
import ContactLinks from "@/components/ContactLinks"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Duban Ronald | Analytics and tracking",
  description:
    "GA4 events, conversion tracking, and reporting systems built for decisions, not screenshots.",
  alternates: {
    canonical: "https://dubanronald.com/analytics-tracking",
    languages: {
      en: "https://dubanronald.com/analytics-tracking",
      es: "https://dubanronald.com/es/analytics-tracking",
    },
  },
  openGraph: {
    title: "Duban Ronald | Analytics and tracking",
    description:
      "GA4 events, conversion tracking, and reporting systems built for decisions, not screenshots.",
    type: "website",
    url: "https://dubanronald.com/analytics-tracking",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duban Ronald | Analytics and tracking",
    description:
      "GA4 events, conversion tracking, and reporting systems built for decisions, not screenshots.",
  },
}

export default function AnalyticsTrackingPage() {
  return (
    <>
      <Nav locale="en" enHref="/analytics-tracking" esHref="/es/analytics-tracking" />

      <main className="mx-auto max-w-5xl px-6 pt-16 pb-24 md:pb-32 space-y-24 md:space-y-32">
        <section className="max-w-2xl space-y-6">
          <h1 className="text-[clamp(2.5rem,6vw,3.5rem)] font-semibold tracking-tight leading-[1.05]">
            Analytics and tracking.
          </h1>

          <p className="text-[var(--muted)] leading-relaxed">
            We implement measurement systems that support decisions. Clear definitions,
            consistent tracking, and reporting that can survive scrutiny.
          </p>
        </section>

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">Common failure modes</h2>

          <div className="space-y-3 text-sm">
            <div className="flex gap-6">
              <span className="w-40 shrink-0 font-medium text-neutral-200">
                Unstable numbers
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Mismatched sources, inconsistent UTMs, and duplicated events produce
                conflicting reports.
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-40 shrink-0 font-medium text-neutral-200">
                Wrong conversions
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Tracking clicks and pageviews while ignoring qualified actions leads to
                false optimization.
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-40 shrink-0 font-medium text-neutral-200">
                No ownership
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Dashboards exist, but nobody can explain what a metric means or why it
                changed.
              </span>
            </div>
          </div>
        </section>

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">What we implement</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            The scope depends on your stack, but the baseline is consistent.
          </p>

          <ol className="space-y-2 text-sm text-[var(--muted)] list-none">
            <li className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-400">01</span>
              <span>Event map aligned with the funnel and sales process</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-400">02</span>
              <span>GA4 configuration with clean conversions and deduplication</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-400">03</span>
              <span>UTM standard and channel grouping rules</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-400">04</span>
              <span>Reporting template with stable definitions and notes</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 shrink-0 text-neutral-400">05</span>
              <span>Ongoing QA to keep tracking consistent as campaigns evolve</span>
            </li>
          </ol>
        </section>

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">Fit</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            This is for teams that want clear attribution and are willing to enforce
            standards. If you need a dashboard for optics, we are not a fit.
          </p>
        </section>

        <section id="contact" className="max-w-2xl space-y-6 scroll-mt-24">
          <h2 className="text-xl font-medium">Contact</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            Send a short note with your stack and goals. We respond selectively.
          </p>

          <div className="space-y-3 text-sm">
            <p className="text-neutral-300">Useful details to include:</p>

            <ol className="space-y-2 text-[var(--muted)] list-none">
              <li className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-400">01</span>
                <span>Website platform and forms</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-400">02</span>
                <span>CRM and what counts as a qualified lead</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-400">03</span>
                <span>Acquisition channels and monthly spend range</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-400">04</span>
                <span>What is currently unreliable or missing</span>
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
