import { ImageResponse } from "next/og";

// Social preview card (1200x630) shown when vishalbuilds.com is shared on
// LinkedIn, WhatsApp, Slack, X, etc. Generated at build time, no asset file.
export const alt = "Vishal Builds. Experiments in AI, data, and automation.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "linear-gradient(135deg, #0a0f1e 0%, #0c111d 58%, #0b1426 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: "26px",
            letterSpacing: "8px",
            color: "#6aa6ff",
            fontWeight: 600,
          }}
        >
          <div style={{ width: "16px", height: "16px", borderRadius: "9999px", background: "#2563eb" }} />
          PRODUCT STUDIO
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "120px",
            fontWeight: 800,
            letterSpacing: "-5px",
            marginTop: "26px",
          }}
        >
          Vishal Builds
        </div>
        <div style={{ display: "flex", fontSize: "44px", color: "#9fb0c8", marginTop: "16px" }}>
          Experiments in AI, data, and automation.
        </div>
        <div style={{ display: "flex", fontSize: "28px", color: "#7d8aa3", marginTop: "64px" }}>
          Echoes · Dak · InvestCore · Tax Finder · Cricket Hub
        </div>
      </div>
    ),
    { ...size }
  );
}
