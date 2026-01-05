import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import ContactLinks from "@/components/ContactLinks"

export default function Home() {
  return (
    <>
      <Nav />

      <main className="mx-auto max-w-5xl px-6 pt-16 pb-24 md:pb-32 space-y-24 md:space-y-32">
        <Hero locale="en" />

        <section className="max-w-2xl space-y-6">
          <h2 className="text-xl font-medium">How we work</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            We design and operate marketing systems focused on acquisition,
            visibility, and conversion, built to perform consistently over time.
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex gap-6">
              <span className="w-28 shrink-0 font-medium text-neutral-200">
                Acquisition
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Paid search and social, landing environments, and testing loops built
                for compounding effect.
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-28 shrink-0 font-medium text-neutral-200">
                Positioning
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Search intent, messaging, and offer structure aligned with how buyers
                actually evaluate options.
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-28 shrink-0 font-medium text-neutral-200">
                Infrastructure
              </span>
              <span className="text-[var(--muted)] leading-relaxed">
                Analytics, tracking, and operational systems that treat marketing as a
                continuous process, not a campaign.
              </span>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-2xl space-y-6 scroll-mt-24">
          <h2 className="text-xl font-medium">Contact</h2>

          <p className="text-[var(--muted)] leading-relaxed">
            If you believe there may be a fit, introduce your business and objectives.
            We review all inquiries and respond selectively.
          </p>

          <div className="space-y-3 text-sm">
            <p className="text-neutral-300">Useful details to include:</p>

            <div className="space-y-2 text-[var(--muted)]">
              <div className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-500">01</span>
                <span>What you sell and to whom</span>
              </div>
              <div className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-500">02</span>
                <span>Current acquisition channels</span>
              </div>
              <div className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-500">03</span>
                <span>Approximate monthly budget</span>
              </div>
              <div className="flex gap-3">
                <span className="w-6 shrink-0 text-neutral-500">04</span>
                <span>Timeline or constraints</span>
              </div>
            </div>
          </div>

          <ContactLinks locale="en" />
        </section>
      </main>
    </>
  )
}
