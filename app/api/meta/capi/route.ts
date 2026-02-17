export const runtime = "nodejs"

function getClientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for")
  if (!xff) return undefined
  return xff.split(",")[0]?.trim()
}

async function readJsonBody(req: Request) {
  // sendBeacon can arrive with odd content-types; be defensive
  const contentType = req.headers.get("content-type") || ""
  if (contentType.includes("application/json")) {
    return await req.json().catch(() => null)
  }
  const text = await req.text().catch(() => "")
  if (!text) return null
  try {
    return JSON.parse(text)
  } catch {
    return null
  }
}

export async function POST(req: Request) {
  const pixelId = process.env.META_PIXEL_ID
  const token = process.env.META_CAPI_ACCESS_TOKEN
  const testEventCode = process.env.META_TEST_EVENT_CODE // optional

  if (!pixelId || !token) {
    return Response.json(
      { ok: false, error: "Missing META_PIXEL_ID or META_CAPI_ACCESS_TOKEN" },
      { status: 500 }
    )
  }

  const body = await readJsonBody(req)
  if (!body?.event_name) {
    return Response.json({ ok: false, error: "Missing event_name" }, { status: 400 })
  }

  const allowed = new Set(["Lead", "Contact", "PageView"])
  if (!allowed.has(body.event_name)) {
    return Response.json({ ok: false, error: "Event not allowed" }, { status: 400 })
  }

  const userAgent = req.headers.get("user-agent") || ""
  const ip = getClientIp(req)

  const payload: any = {
    data: [
      {
        event_name: body.event_name,
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: body.event_source_url || "https://dubanronald.com",
        event_id: body.event_id, // for dedup with browser Pixel (if available)
        user_data: {
          client_user_agent: userAgent,
          client_ip_address: ip,
          fbp: body.fbp,
          fbc: body.fbc,
        },
        custom_data: body.custom_data || {},
      },
    ],
  }

  if (testEventCode) payload.test_event_code = testEventCode

  const url = `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${token}`

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const json = await res.json().catch(() => ({}))
  return Response.json({ ok: res.ok, meta: json }, { status: res.ok ? 200 : 400 })
}
