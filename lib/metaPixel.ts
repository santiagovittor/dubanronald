export function trackMeta(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return
  const fbq = (window as any).fbq
  if (typeof fbq !== "function") return
  fbq("track", eventName, params)
}
