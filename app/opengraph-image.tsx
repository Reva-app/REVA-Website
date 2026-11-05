import { ImageResponse } from "next/og";
import { revaLogoDataUri } from "@/lib/brand";

export const alt = "REVA: het patiëntenportaal voor fysiotherapiepraktijken";
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
        <img src={revaLogoDataUri("#ffffff")} width={212} height={72} alt="REVA" />

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "68px",
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            <span>Overzicht over je patiënten,</span>
            <span style={{ color: "#e8632a" }}>zonder extra telefoontjes.</span>
          </div>
          <div style={{ fontSize: "28px", color: "#9ca3af", maxWidth: "900px", lineHeight: 1.4 }}>
            Het patiëntenportaal voor fysiotherapiepraktijken. Patiënten loggen zelf
            hun herstel, jij ziet direct wie aandacht nodig heeft.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
