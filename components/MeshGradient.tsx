export default function MeshGradient() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
        backgroundColor: "var(--bg)",
      }}
      aria-hidden="true"
    >
      <div
        className="mesh-blob-1"
        style={{
          position: "absolute",
          top: "-20%",
          left: "-20%",
          width: "70vw",
          height: "70vw",
          background: "radial-gradient(circle, #0B525B 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.7,
          animation: "meshBlob1 18s ease-in-out infinite alternate",
        }}
      />
      <div
        className="mesh-blob-2"
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-20%",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, #F26A1B 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.5,
          animation: "meshBlob2 22s ease-in-out infinite alternate",
        }}
      />
    </div>
  )
}
