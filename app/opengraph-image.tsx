import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site-data";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "14px",
          }}
        >
          <span style={{ fontSize: 64, fontWeight: 600, color: "#0B1220" }}>
            Guest<span style={{ color: "#9C7E33" }}>Squad</span>
          </span>
          <span style={{ fontSize: 24, color: "#7C8398" }}>by Raptric</span>
        </div>

        <div
          style={{
            marginTop: "32px",
            width: "84px",
            height: "4px",
            backgroundColor: "#C7A24A",
          }}
        />

        <div
          style={{
            marginTop: "36px",
            fontSize: 40,
            fontWeight: 500,
            color: "#0B1220",
            maxWidth: "880px",
            lineHeight: 1.25,
          }}
        >
          {SITE.tagline}
        </div>

        <div
          style={{
            marginTop: "28px",
            fontSize: 22,
            color: "#48516B",
            maxWidth: "820px",
          }}
        >
          24/7 guest operations for hotels, boutique properties, resorts, serviced apartments &amp; Airbnb operators.
        </div>
      </div>
    ),
    { ...size }
  );
}
