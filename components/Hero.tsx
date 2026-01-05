"use client"

import { useEffect, useRef, useState } from "react"

type HeroProps = {
  locale?: "en" | "es"
}

export default function Hero({ locale = "en" }: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null)

  const overlayRef = useRef<HTMLDivElement | null>(null)
  const headlineRef = useRef<HTMLHeadingElement | null>(null)
  const subcopyRef = useRef<HTMLParagraphElement | null>(null)
  const dotRef = useRef<HTMLSpanElement | null>(null)

  const rafScrollRef = useRef<number | null>(null)
  const rafAnimRef = useRef<number | null>(null)

  const targetPRef = useRef(0)

  const scaleRef = useRef(1)
  const heroOpacityRef = useRef(1)
  const subOpacityRef = useRef(1)
  const subShiftRef = useRef(0)

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
    const overlay = overlayRef.current
    const headline = headlineRef.current
    const subcopy = subcopyRef.current
    const dot = dotRef.current

    if (!section || !overlay || !headline || !subcopy || !dot) return

    const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

    // This is the “resistance” mapping (same spirit as your original):
    // 0–0.70: grow
    // 0.70–0.92: keep growing slightly + start fading subcopy
    // 0.92–1.00: fade hero to 0 (ONLY when the next content is already present)
    const computeTargets = (p: number) => {
      const growEnd = 0.7
      const subFadeStart = 0.62
      const subFadeEnd = 0.9
      const fadeStart = 0.9

      let targetScale = 1
      if (p <= growEnd) {
        const t = p / growEnd
        targetScale = 1 + t * 0.22 // strong enough to feel it
      } else {
        const t = (p - growEnd) / (1 - growEnd)
        targetScale = 1.22 + t * 0.06 // -> ~1.28
      }

      let heroOpacity = 1
      if (p > fadeStart) {
        const t = (p - fadeStart) / (1 - fadeStart)
        heroOpacity = 1 - clamp01(t)
      }

      let subOpacity = 1
      if (p <= subFadeStart) subOpacity = 1
      else if (p >= subFadeEnd) subOpacity = 0
      else {
        const t = (p - subFadeStart) / (subFadeEnd - subFadeStart)
        subOpacity = 1 - clamp01(t)
      }

      const subShift = Math.min(72, (targetScale - 1) * 240)

      return { targetScale, heroOpacity, subOpacity, subShift }
    }

    const apply = () => {
      rafAnimRef.current = null

      const p = reducedMotion ? 0 : targetPRef.current
      const { targetScale, heroOpacity, subOpacity, subShift } = computeTargets(p)

      // Smoothing = resistance feel.
      // Lower = heavier. Higher = snappier.
      const alpha = 0.14

      scaleRef.current = scaleRef.current + (targetScale - scaleRef.current) * alpha
      heroOpacityRef.current =
        heroOpacityRef.current + (heroOpacity - heroOpacityRef.current) * alpha
      subOpacityRef.current = subOpacityRef.current + (subOpacity - subOpacityRef.current) * alpha
      subShiftRef.current = subShiftRef.current + (subShift - subShiftRef.current) * alpha

      headline.style.transform = `translate3d(0,0,0) scale(${scaleRef.current})`
      overlay.style.opacity = String(heroOpacityRef.current)

      subcopy.style.opacity = String(subOpacityRef.current)
      subcopy.style.transform = `translate3d(0, ${subShiftRef.current}px, 0)`

      // Dot bounce only at top (before scroll)
      const atTop = p <= 0.001
      if (!reducedMotion) dot.classList.toggle("dr-dot-bounce", atTop)
      else dot.classList.remove("dr-dot-bounce")

      // Hide overlay completely once essentially invisible (so it stops intercepting anything)
      overlay.style.pointerEvents = heroOpacityRef.current <= 0.02 ? "none" : "auto"

      const still =
        Math.abs(targetScale - scaleRef.current) > 0.001 ||
        Math.abs(heroOpacity - heroOpacityRef.current) > 0.002 ||
        Math.abs(subOpacity - subOpacityRef.current) > 0.003 ||
        Math.abs(subShift - subShiftRef.current) > 0.25

      if (still) rafAnimRef.current = window.requestAnimationFrame(apply)
    }

    const scheduleApply = () => {
      if (rafAnimRef.current !== null) return
      rafAnimRef.current = window.requestAnimationFrame(apply)
    }

    const updateProgress = () => {
      rafScrollRef.current = null

      const viewportHeight = window.innerHeight || 1
      const sectionHeight = section.offsetHeight || viewportHeight
      const scrollRange = sectionHeight - viewportHeight

      if (scrollRange <= 0) {
        targetPRef.current = 0
        scheduleApply()
        return
      }

      const rect = section.getBoundingClientRect()
      // rect.top goes from 0 -> -scrollRange as you scroll through it
      const raw = -rect.top / scrollRange
      targetPRef.current = clamp01(raw)

      scheduleApply()
    }

    const onScrollOrResize = () => {
      if (rafScrollRef.current !== null) return
      rafScrollRef.current = window.requestAnimationFrame(updateProgress)
    }

    onScrollOrResize()
    window.addEventListener("scroll", onScrollOrResize, { passive: true })
    window.addEventListener("resize", onScrollOrResize)

    return () => {
      window.removeEventListener("scroll", onScrollOrResize)
      window.removeEventListener("resize", onScrollOrResize)
      if (rafScrollRef.current !== null) window.cancelAnimationFrame(rafScrollRef.current)
      if (rafAnimRef.current !== null) window.cancelAnimationFrame(rafAnimRef.current)
      rafScrollRef.current = null
      rafAnimRef.current = null
    }
  }, [reducedMotion])

  const isEs = locale === "es"
  const line1 = isEs ? "Construimos" : "We build"
  const line2 = isEs ? "sistemas de growth" : "growth systems"
  const subcopy = isEs
    ? "Sistemas de growth, paid media y analytics para equipos que tratan al marketing como un sistema continuo, no como campañas aisladas."
    : "Digital acquisition, paid media, and performance infrastructure for teams that treat marketing as a system, not a campaign."

  return (
    <>
      {/* Scroll driver: this provides scroll distance, but does not move the hero visually */}
      <section ref={sectionRef} className="relative h-[160vh]" />

      {/* Fixed overlay: the hero is truly pinned */}
      <div
        ref={overlayRef}
        className="fixed left-0 right-0 top-16 z-10 flex h-[calc(100svh-4rem)] items-center"
        style={{
          opacity: 1,
          willChange: "opacity",
          pointerEvents: "auto",
        }}
      >
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="max-w-3xl space-y-5">
            <h1
              ref={headlineRef}
              className="text-[clamp(4.25rem,8vw,6rem)] font-semibold tracking-tight leading-[0.9]"
              style={{
                transform: "translate3d(0,0,0) scale(1)",
                transformOrigin: "left center",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              <span className="block">{line1}</span>
              <span className="block">
                {line2}
                <span ref={dotRef}>.</span>
              </span>
            </h1>

            <p
              ref={subcopyRef}
              className="text-sm text-neutral-400 leading-relaxed"
              style={{
                opacity: 1,
                transform: "translate3d(0,0,0)",
                willChange: "transform, opacity",
              }}
            >
              {subcopy}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
