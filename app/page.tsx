import Nav from "@/components/Nav"
import Hero from "@/components/Hero"

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

export default function Home() {
  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hello, I'd like to discuss growth systems for our business."
      )}`
    : null

  return (
    <>
      <Nav />

      <main className="mx-auto max-w-5xl px-6 pt-16 pb-24 md:pb-32 space-y-20 md:space-y-28">
        <Hero locale="en" />

        <section className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
            How we work
          </h2>

          <p className="mt-5 max-w-[56ch] text-base text-neutral-400 leading-relaxed">
            We design and operate marketing systems focused on acquisition,
            visibility, and conversion, built to perform consistently over time.
          </p>

          <dl className="mt-10 border-y border-neutral-800/70 divide-y divide-neutral-800/70">
            <div className="grid grid-cols-[7.5rem_1fr] gap-x-8 py-6">
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-300">
                Acquisition
              </dt>
              <dd className="text-sm text-neutral-400 leading-relaxed">
                Paid search and social, landing environments, and testing loops built
                for compounding effect.
              </dd>
            </div>

            <div className="grid grid-cols-[7.5rem_1fr] gap-x-8 py-6">
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-300">
                Positioning
              </dt>
              <dd className="text-sm text-neutral-400 leading-relaxed">
                Search intent, messaging, and offer structure aligned with how buyers
                actually evaluate options.
              </dd>
            </div>

            <div className="grid grid-cols-[7.5rem_1fr] gap-x-8 py-6">
              <dt className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-300">
                Infrastructure
              </dt>
              <dd className="text-sm text-neutral-400 leading-relaxed">
                Analytics, tracking, and operational systems that treat marketing as a
                continuous process, not a campaign.
              </dd>
            </div>
          </dl>
        </section>

        <section id="contact" className="max-w-2xl scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
            Contact
          </h2>

          <p className="mt-5 max-w-[56ch] text-base text-neutral-400 leading-relaxed">
            If you believe there may be a fit, introduce your business and objectives.
            We review all inquiries and respond selectively.
          </p>

          <div className="mt-10 border-y border-neutral-800/70 py-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-300">
              Useful details to include
            </p>

            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li className="flex gap-3">
                <span className="text-neutral-700">—</span>
                <span>What you sell and to whom</span>
              </li>
              <li className="flex gap-3">
                <span className="text-neutral-700">—</span>
                <span>Current acquisition channels</span>
              </li>
              <li className="flex gap-3">
                <span className="text-neutral-700">—</span>
                <span>Approximate monthly budget</span>
              </li>
              <li className="flex gap-3">
                <span className="text-neutral-700">—</span>
                <span>Timeline or constraints</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 space-y-3">
            <a
              href="mailto:hello@dubanronald.com"
              className="inline-block text-base text-neutral-200 underline-offset-4 transition hover:underline"
            >
              hello@dubanronald.com
            </a>

            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-neutral-400 underline-offset-4 transition hover:text-neutral-200 hover:underline"
              >
                WhatsApp
              </a>
            ) : null}
          </div>
        </section>
      </main>
    </>
  )
}
