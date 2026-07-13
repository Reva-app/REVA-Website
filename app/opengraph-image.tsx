import { ImageResponse } from "next/og";

export const alt = "REVA — Grip op je herstel";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#18181a",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "#e8632a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            R
          </div>
          <div style={{ fontSize: "36px", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.02em" }}>
            REVA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Grip op je herstel
          </div>
          <div style={{ fontSize: "30px", color: "#9ca3af", maxWidth: "820px" }}>
            Persoonlijk herstel dashboard voor revalidatie na een knieblessure,
            operatie of langdurig hersteltraject.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
