"use client"

import { useEffect, useRef } from "react"

const COLORS = ["#14B8A6", "#FF7A18", "#14B8A6", "#FF7A18", "#14B8A6"]

interface BlobConfig {
  color: string
  xPhase: number
  yPhase: number
  rPhase: number
  xSpeed: number
  ySpeed: number
  rSpeed: number
  baseR: number
  opacity: number
}

function initBlobs(count: number): BlobConfig[] {
  return Array.from({ length: count }, (_, i) => ({
    color: COLORS[i % COLORS.length],
    xPhase: (i / count) * Math.PI * 2,
    yPhase: (i / count) * Math.PI * 2 + 1.3,
    rPhase: i * 0.7,
    xSpeed: 0.00006 + i * 0.000015,
    ySpeed: 0.00007 + i * 0.000012,
    rSpeed: 0.00003 + i * 0.000008,
    baseR: 0.216 + (i % 3) * 0.06,
    opacity: 0.45 + (i % 2) * 0.1,
  }))
}

function drawOrganic(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  color: string,
  opacity: number,
  t: number,
  idx: number,
) {
  const pts = 12
  ctx.save()
  ctx.globalAlpha = opacity
  ctx.beginPath()

  for (let i = 0; i <= pts; i++) {
    const a = (i / pts) * Math.PI * 2
    const wobble =
      1 +
      0.2 * Math.sin(a * 3 + t * 0.00052 + idx * 1.1) +
      0.1 * Math.sin(a * 6 + t * 0.00078 + idx * 2.3)
    const px = cx + Math.cos(a) * r * wobble
    const py = cy + Math.sin(a) * r * wobble
    if (i === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
  }
  ctx.closePath()

  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 1.3)
  grad.addColorStop(0, color)
  grad.addColorStop(1, color + "00")
  ctx.fillStyle = grad
  ctx.fill()
  ctx.restore()
}

export default function MeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isMobile = window.innerWidth < 768

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const blobs = initBlobs(isMobile ? 3 : 5)
    let animId = 0

    const render = (t: number) => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      blobs.forEach((b, i) => {
        const x = w * (0.1 + 0.8 * (0.5 + 0.5 * Math.sin(b.xPhase + t * b.xSpeed)))
        const y = h * (0.1 + 0.8 * (0.5 + 0.5 * Math.sin(b.yPhase + t * b.ySpeed)))
        const rRatio = b.baseR + 0.025 * Math.sin(b.rPhase + t * b.rSpeed)
        const r = Math.min(w, h) * rRatio
        drawOrganic(ctx, x, y, r, b.color, b.opacity, t, i)
      })

      if (!reduced) animId = requestAnimationFrame(render)
    }

    if (reduced) {
      render(8000)
    } else {
      animId = requestAnimationFrame(render)
    }

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        filter: "blur(25px) saturate(0.55)",
        mixBlendMode: "multiply",
      }}
    />
  )
}
