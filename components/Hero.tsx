"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react"
import { GeistSans } from "geist/font/sans"

type HeroProps = { locale?: "en" | "es" }

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

export default function Hero({ locale = "en" }: HeroProps) {
  const isEs = locale === "es"
  const reduced = useReducedMotion()
  const noAnim = reduced === true

  const [scrolled, setScrolled] = useState(false)
  const [isFineMouse, setIsFineMouse] = useState(false)

  const dotRef = useRef<HTMLSpanElement | null>(null)
  const btnRef = useRef<HTMLAnchorElement | null>(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 300, damping: 30 })
  const springY = useSpring(my, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)")
    setIsFineMouse(mq.matches)
    const h = (e: MediaQueryListEvent) => setIsFineMouse(e.matches)
    mq.addEventListener("change", h)
    return () => mq.removeEventListener("change", h)
  }, [])

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 100)
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return
    const r = btnRef.current.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    mx.set(Math.max(-8, Math.min(8, ((e.clientX - cx) / (r.width / 2)) * 8)))
    my.set(Math.max(-8, Math.min(8, ((e.clientY - cy) / (r.height / 2)) * 8)))
  }

  const handleMouseLeave = () => {
    mx.set(0)
    my.set(0)
  }

  const subcopy = isEs
    ? "Sistemas de growth, paid media y analytics para equipos que tratan al marketing como un sistema continuo, no como campañas aisladas."
    : "Most ad accounts don't fail because of budget. They fail because the ad sends people to a page that wasn't built to convert, and nothing in the tracking tells you where you're losing them. We build acquisition systems that close the gap."

  const ctaText = isEs ? "Escríbenos" : "Introduce your business"

  const wSpan = (
    word: string,
    idx: number,
    delay: number,
    trailing = true,
    extraStyle?: React.CSSProperties,
  ) => {
    const inner = (
      <>
        {word}
        {trailing ? " " : ""}
      </>
    )
    if (noAnim) {
      return (
        <span key={idx} style={{ display: "inline-block", ...extraStyle }}>
          {inner}
        </span>
      )
    }
    return (
      <motion.span
        key={idx}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay, ease: EASE }}
        style={{ display: "inline-block", ...extraStyle }}
      >
        {inner}
      </motion.span>
    )
  }

  const dotClass = noAnim ? "" : "dr-dot-bounce"

  const headlineEn = (
    <>
      {["Your", "budget", "isn't", "the"].map((w, i) => wSpan(w, i, i * 0.07))}
      {noAnim ? (
        <span style={{ display: "inline-block", color: "var(--orange)" }}>
          problem
          <span ref={dotRef} className={dotClass}>.</span>
        </span>
      ) : (
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 4 * 0.07, ease: EASE }}
          style={{ display: "inline-block", color: "var(--orange)" }}
        >
          problem
          <span ref={dotRef} className={dotClass}>.</span>
        </motion.span>
      )}
    </>
  )

  const headlineEs = (
    <>
      <span className="block">
        {wSpan("Construimos", 0, 0, false)}
      </span>
      <span className="block">
        {["sistemas", "de"].map((w, i) => wSpan(w, i, (1 + i) * 0.07))}
        {noAnim ? (
          <span style={{ display: "inline-block" }}>
            growth
            <span ref={dotRef} className={dotClass} style={{ color: "var(--orange)" }}>.</span>
          </span>
        ) : (
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 3 * 0.07, ease: EASE }}
            style={{ display: "inline-block" }}
          >
            growth
            <span ref={dotRef} className={dotClass} style={{ color: "var(--orange)" }}>.</span>
          </motion.span>
        )}
      </span>
    </>
  )

  return (
    <section className="relative flex h-[calc(100svh-4rem)] items-center">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h1
          className={`${GeistSans.className} font-bold`}
          style={{
            fontSize: "var(--text-hero)",
            color: "var(--cream)",
            lineHeight: "var(--leading-tight)",
          }}
        >
          {isEs ? headlineEs : headlineEn}
        </h1>

        {noAnim ? (
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--muted)",
              maxWidth: "520px",
              marginTop: "1.5rem",
              lineHeight: "var(--leading-body)",
            }}
          >
            {subcopy}
          </p>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontSize: "1.125rem",
              color: "var(--muted)",
              maxWidth: "520px",
              marginTop: "1.5rem",
              lineHeight: "var(--leading-body)",
            }}
          >
            {subcopy}
          </motion.p>
        )}

        {noAnim ? (
          <div style={{ marginTop: "2.5rem", display: "inline-block" }}>
            <a
              ref={btnRef}
              href="mailto:hello@dubanronald.com"
              className={`${GeistSans.className} font-bold inline-block uppercase`}
              style={{
                backgroundColor: "var(--orange)",
                color: "var(--bg)",
                letterSpacing: "0.08em",
                padding: "1rem 2.5rem",
              }}
            >
              {ctaText}
            </a>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ marginTop: "2.5rem", display: "inline-block" }}
          >
            <motion.div
              style={{
                display: "inline-block",
                x: isFineMouse ? springX : 0,
                y: isFineMouse ? springY : 0,
              }}
              onMouseMove={isFineMouse ? handleMouseMove : undefined}
              onMouseLeave={isFineMouse ? handleMouseLeave : undefined}
            >
              <a
                ref={btnRef}
                href="mailto:hello@dubanronald.com"
                className={`${GeistSans.className} font-bold inline-block uppercase`}
                style={{
                  backgroundColor: "var(--orange)",
                  color: "var(--bg)",
                  letterSpacing: "0.08em",
                  padding: "1rem 2.5rem",
                }}
              >
                {ctaText}
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity: scrolled ? 0 : 1, transition: "opacity 0.4s ease" }}
      >
        {noAnim ? (
          <div
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "var(--muted)",
            }}
          />
        ) : (
          <motion.div
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "var(--muted)",
              transformOrigin: "top",
            }}
          />
        )}
      </div>
    </section>
  )
}
