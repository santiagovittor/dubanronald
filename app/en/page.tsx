// app/en/page.tsx
import type { Metadata } from "next"
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"

export const metadata: Metadata = {
  title: "Duban Ronald — growth systems for digital acquisition",
  description:
    "Digital acquisition, paid media, and performance infrastructure for teams that treat marketing as a system, not a campaign.",
}

export default function HomeEn() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-5xl px-6 pt-16 md:pt-20 pb-24 md:pb-32 space-y-24 md:space-y-32">
        <Hero locale="en" />

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">How we work</h2>

          <p className="text-neutral-500 leading-relaxed">
            We design and operate marketing systems focused on acquisition,
            visibility, and conversion, built to perform consistently over time.
          </p>

          <div className="space-y-2 text-sm text-neutral-400">
            <div className="flex gap-3">
              <span className="w-28 shrink-0 font-medium text-neutral-300">
                Acquisition
              </span>
              <span>
                Paid search and social, landing environments, and testing loops built
                for compounding effect.
              </span>
            </div>

            <div className="flex gap-3">
              <span className="w-28 shrink-0 font-medium text-neutral-300">
                Positioning
              </span>
              <span>
                Search intent, messaging, and offer structure aligned with how buyers
                actually evaluate options.
              </span>
            </div>

            <div className="flex gap-3">
              <span className="w-28 shrink-0 font-medium text-neutral-300">
                Infrastructure
              </span>
              <span>
                Analytics, tracking, and operational systems that treat marketing as a
                continuous process, not a campaign.
              </span>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-2xl space-y-6 scroll-mt-24">
          <h2 className="text-xl font-medium">Contact</h2>

          <p className="text-neutral-500 leading-relaxed">
            If you believe there may be a fit, introduce your business and objectives.
            We review all inquiries and respond selectively.
          </p>

          <div className="text-sm text-neutral-400 space-y-1">
            <p>Useful details to include:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>What you sell and to whom</li>
              <li>Current acquisition channels</li>
              <li>Approximate monthly budget</li>
              <li>Timeline or constraints</li>
            </ul>
          </div>

          <a
            href="mailto:contact@youragency.com"
            className="inline-block underline underline-offset-4"
          >
            contact@youragency.com
          </a>
        </section>
      </main>
    </>
  )
}
