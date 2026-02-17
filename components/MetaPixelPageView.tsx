"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useRef } from "react"

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
    _fbq?: (...args: any[]) => void
  }
}

export default function MetaPixelPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const firstRun = useRef(true)

  const params = useMemo(() => searchParams.toString(), [searchParams])

  useEffect(() => {
    // Base pixel fires PageView once on initial load; avoid double-counting
    if (firstRun.current) {
      firstRun.current = false
      return
    }

    if (!window.fbq) return
    window.fbq("track", "PageView")
  }, [pathname, params])

  return null
}
