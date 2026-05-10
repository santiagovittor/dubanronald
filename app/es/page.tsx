import type { Metadata } from "next"
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import WhatWeDo from "@/components/WhatWeDo"
import BreakSection from "@/components/BreakSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Duban Ronald | Agencia de marketing digital y growth",
  description:
    "Sistemas de growth, paid media y analytics para equipos que trabajan el marketing como un sistema continuo, no como campañas sueltas.",
  alternates: {
    canonical: "https://dubanronald.com/es",
    languages: {
      en: "https://dubanronald.com/",
      es: "https://dubanronald.com/es",
    },
  },
  openGraph: {
    title: "Duban Ronald | Sistemas de growth para adquisición digital",
    description:
      "Adquisición digital, paid media e infraestructura de performance para equipos que operan el marketing como un sistema continuo, no como campañas sueltas.",
    type: "website",
    url: "https://dubanronald.com/es",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duban Ronald | Sistemas de growth para adquisición digital",
    description:
      "Adquisición digital, paid media e infraestructura de performance para equipos que operan el marketing como un sistema continuo, no como campañas sueltas.",
  },
}

export default function HomeEs() {
  return (
    <>
      <Nav locale="es" />
      <Hero locale="es" />
      <HowItWorks locale="es" />
      <BreakSection locale="es" />
      <WhatWeDo locale="es" />
      <ContactSection locale="es" />
      <Footer locale="es" />
    </>
  )
}
