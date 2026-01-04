"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"

type HeroProps = {
  locale?: "en" | "es"
}

export default function Hero({ locale = "en" }: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [progress, setProgress] = useState(0)

  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    } catch {
      return false
    }
  })

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches)

    mq.addEventListener("change", handleChange)
    return () => mq.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const section = sectionRef.current
    if (!section) return

    let frameId: number | null = null

    const updateProgress = () => {
      frameId = null

      const viewportHeight = window.innerHeight || 1
      const sectionHeight = section.offsetHeight || viewportHeight
      const scrollRange = sectionHeight - viewportHeight

      if (scrollRange <= 0) {
        setProgress(0)
        return
      }

      const sectionTop = section.offsetTop
      const scrollY = window.scrollY

      const raw = (scrollY - sectionTop) / scrollRange
      const clamped = Math.min(1, Math.max(0, raw))
      setProgress(clamped)
    }

    const handleScrollOrResize = () => {
      if (frameId !== null) return
      frameId = window.requestAnimationFrame(updateProgress)
    }

    handleScrollOrResize()

    window.addEventListener("scroll", handleScrollOrResize, { passive: true })
    window.addEventListener("resize", handleScrollOrResize)

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize)
      window.removeEventListener("resize", handleScrollOrResize)
      if (frameId !== null) window.cancelAnimationFrame(frameId)
    }
  }, [])

  const effectiveProgress = reducedMotion ? 0 : progress

  const growEnd = 0.7
  const fadeEnd = 0.9

  let scale = 1
  let opacity = 1

  if (effectiveProgress <= growEnd) {
    const t = effectiveProgress / growEnd
    scale = 1 + t * 0.18
    opacity = 1
  } else if (effectiveProgress <= fadeEnd) {
    const t = (effectiveProgress - growEnd) / (fadeEnd - growEnd)
    scale = 1.18 + t * 0.06
    opacity = 1 - t
  } else {
    scale = 1.24
    opacity = 0
  }

  const blockStyle: CSSProperties = {
    transform: `translate3d(0,0,0) scale(${scale})`,
    opacity,
    transformOrigin: "left top", // critical: grow downward, not into the fixed nav
    willChange: "transform, opacity",
    backfaceVisibility: "hidden",
  }

  const isEs = locale === "es"
  const line1 = isEs ? "Construimos" : "We build"
  const line2 = isEs ? "sistemas de growth." : "growth systems."
  const subcopy = isEs
    ? "Sistemas de growth, paid media y analytics para equipos que tratan al marketing como un sistema continuo, no como campañas aisladas."
    : "Digital acquisition, paid media, and performance infrastructure for teams that treat marketing as a system, not a campaign."

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      <div className="sticky top-16 flex h-[calc(100svh-4rem)] items-center pb-[env(safe-area-inset-bottom)]">
        {/* clip X overflow here so sticky stays reliable */}
        <div className="hero-clip w-full">
          {/* small headroom so big type never visually hits the nav */}
          <div className="pt-6">
            <div className="max-w-3xl space-y-5 origin-left" style={blockStyle}>
              <h1 className="text-[clamp(4.25rem,8vw,6rem)] font-semibold tracking-tight leading-[0.9]">
                <span className="block">{line1}</span>
                <span className="block">{line2}</span>
              </h1>

              <p className="text-sm text-neutral-400 leading-relaxed">{subcopy}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
