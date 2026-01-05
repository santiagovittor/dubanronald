import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0b0b",
          color: "#eaeaea",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "-0.02em",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div style={{ fontSize: 160, fontWeight: 700, lineHeight: 1 }}>DR</div>

          <div
            style={{
              fontSize: 26,
              color: "#b3b3b3",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Duban Ronald
          </div>
        </div>
      </div>
    ),
    size
  )
}
