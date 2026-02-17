export const runtime = "nodejs"

function getClientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for")
  if (!xff) return undefined
  return xff.split(",")[0]?.trim()
}

export async function POST(req: Request) {
  const pixelId = process.env.META_PIXEL_ID
  const token = process.env.META_CAPI_ACCESS_TOKEN
  const testEventCode = process.env.META_TEST_EVENT_CODE // optional

  if (!pixelId || !token) {
    return Response.json({ ok: false, error: "Missing META_PIXEL_ID or META_CAPI_ACCESS_TOKEN" }, { status: 500 })
  }

  const body = await req.json().catch(() => null)
  if (!body?.event_name) {
    return Response.json({ ok: false, error: "Missing event_name" }, { status: 400 })
  }

  // Only allow the events you want to track
  const allowed = new Set(["Lead", "Contact", "PageView"])
  if (!allowed.has(body.event_name)) {
    return Response.json({ ok: false, error: "Event not allowed" }, { status: 400 })
  }

  const userAgent = req.headers.get("user-agent") || ""
  const ip = getClientIp(req)

  // CAPI web events require at least: action_source + event_source_url + client_user_agent :contentReference[oaicite:3]{index=3}
  const payload: any = {
    data: [
      {
        event_name: body.event_name,
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: body.event_source_url || "https://dubanronald.com",
        event_id: body.event_id, // used for dedup with Pixel :contentReference[oaicite:4]{index=4}
        user_data: {
          client_user_agent: userAgent, // required for web events :contentReference[oaicite:5]{index=5}
          client_ip_address: ip,
          fbp: body.fbp, // helps matching/dedup (if available)
          fbc: body.fbc,
        },
        custom_data: body.custom_data || {},
      },
    ],
  }

  if (testEventCode) payload.test_event_code = testEventCode

  const url = `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${token}`
  // Meta: POST to /{PIXEL_ID}/events?access_token=... :contentReference[oaicite:6]{index=6}
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const json = await res.json().catch(() => ({}))
  return Response.json({ ok: res.ok, meta: json }, { status: res.ok ? 200 : 400 })
}
