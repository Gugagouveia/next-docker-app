import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gustavo Gouveia — Desenvolvedor Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "66px 76px", position: "relative", overflow: "hidden", background: "#f0f3fc", color: "#202238", fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", width: 550, height: 550, right: 10, top: 35, borderRadius: "50%", background: "rgba(91,79,233,.08)", border: "1px solid rgba(91,79,233,.15)", display: "flex" }} />
      <div style={{ position: "absolute", width: 420, height: 420, right: 75, top: 100, borderRadius: "50%", border: "1px solid rgba(91,79,233,.12)", display: "flex" }} />
      <div style={{ display: "flex", flexDirection: "column", zIndex: 1, maxWidth: 720 }}>
        <div style={{ width: 60, height: 6, borderRadius: 6, background: "#5b4fe9", marginBottom: 26, display: "flex" }} />
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3, display: "flex", flexDirection: "column" }}>
          <span>Gustavo</span><span style={{ color: "#5b4fe9" }}>Gouveia</span>
        </div>
        <div style={{ marginTop: 26, fontSize: 24, color: "#596074", display: "flex" }}>Desenvolvedor Full Stack</div>
        <div style={{ marginTop: 42, fontSize: 16, letterSpacing: 2, color: "#73778a", display: "flex" }}>gustavogouveia.lat</div>
      </div>
      <div style={{ position: "absolute", right: 190, bottom: 74, display: "flex", alignItems: "center", justifyContent: "center", width: 170, height: 170, borderRadius: 40, background: "#5b4fe9", color: "white", fontSize: 64, fontWeight: 700, letterSpacing: -7, transform: "rotate(-8deg)" }}>GG.</div>
    </div>,
    size,
  );
}
