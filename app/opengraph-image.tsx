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
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="100" height="100" viewBox="0 0 256 256">
            <path
              fill="#0F172A"
              d="M128 24c-54.1 0-98 43.9-98 98 0 51 39 92.8 88.8 97.3-3.4 8.4-9.4 16.2-18.3 23.3h32.4c11.7-9.5 19-21 21.7-34.3V171h-26.7v23.7c-34.5 0-62.7-28.2-62.7-62.7S93.4 69.3 128 69.3h54.1c19.7 0 35.7-16 35.7-35.7V24H128Z"
            />
            <path
              fill="#C89B3C"
              d="M163.4 98.6c-18.2 0-33 14.8-33 33h57.2v25.3c0 20.9-17 37.9-37.9 37.9h-20.4v23.7h20.4c34 0 61.6-27.6 61.6-61.6V98.6h-47.9Z"
            />
          </svg>
          <div style={{ display: "flex", alignItems: "baseline", fontSize: 72, fontWeight: 700 }}>
            <span style={{ color: "#0F172A" }}>Guest</span>
            <span style={{ color: "#C89B3C" }}>Squad</span>
          </div>
        </div>

        <div
          style={{
            marginTop: "28px",
            fontSize: 30,
            fontWeight: 500,
            color: "#64748B",
          }}
        >
          {SITE.subtitle}
        </div>

        <div
          style={{
            marginTop: "40px",
            width: "84px",
            height: "4px",
            backgroundColor: "#C89B3C",
          }}
        />

        <div
          style={{
            marginTop: "36px",
            fontSize: 38,
            fontWeight: 500,
            color: "#0F172A",
            maxWidth: "880px",
            lineHeight: 1.25,
          }}
        >
          {SITE.tagline}
        </div>

        <div
          style={{
            marginTop: "24px",
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
