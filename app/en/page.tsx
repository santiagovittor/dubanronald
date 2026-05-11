// app/en/page.tsx
import type { Metadata } from "next"
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import FilmRebate from "@/components/FilmRebate"
import HowItWorks from "@/components/HowItWorks"
import WhatWeDo from "@/components/WhatWeDo"
import BreakSection from "@/components/BreakSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Duban Ronald | Growth systems for digital acquisition",
  description:
    "Digital acquisition, paid media, and performance infrastructure for teams that treat marketing as a system, not a campaign.",
}

export default function HomeEn() {
  return (
    <>
      <Nav />
      <Hero locale="en" />
      <FilmRebate />
      <HowItWorks />
      <BreakSection locale="en" />
      <WhatWeDo />
      <ContactSection />
      <Footer />
    </>
  )
}
