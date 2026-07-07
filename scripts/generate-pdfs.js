// Run: node scripts/generate-pdfs.js
// Generates branded PDF files from the live guestsquad.com asset pages

const puppeteer = require("puppeteer-core");
const path = require("path");
const fs = require("fs");

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const BASE_URL = "https://guestsquad.com";

const ASSETS = [
  {
    slug: "after-hours-checklist",
    filename: "after-hours-checklist.pdf",
    path: "/resources/after-hours-checklist",
  },
  {
    slug: "guest-messaging-sop",
    filename: "guest-messaging-sop.pdf",
    path: "/resources/guest-messaging-sop",
  },
  {
    slug: "ota-inbox-response-checklist",
    filename: "ota-inbox-response-checklist.pdf",
    path: "/resources/ota-inbox-response-checklist",
  },
  {
    slug: "coverage-gap-assessment",
    filename: "coverage-gap-assessment.pdf",
    path: "/resources/coverage-gap-assessment",
  },
  {
    slug: "sample-weekly-report",
    filename: "sample-weekly-report.pdf",
    path: "/resources/sample-weekly-report",
  },
];

const OUTPUT_DIR = path.resolve(__dirname, "../public/downloads");

async function generatePdf(browser, asset) {
  const url = `${BASE_URL}${asset.path}`;
  const outputPath = path.join(OUTPUT_DIR, asset.filename);

  console.log(`Generating: ${asset.filename}`);
  console.log(`  URL: ${url}`);

  const page = await browser.newPage();

  await page.setViewport({ width: 1200, height: 900 });

  await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

  // Wait for fonts and images to settle
  await new Promise((r) => setTimeout(r, 1500));

  const pdf = await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
    },
  });

  await page.close();
  console.log(`  Saved to: ${outputPath}`);
  return outputPath;
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const results = [];

  for (const asset of ASSETS) {
    try {
      const filePath = await generatePdf(browser, asset);
      results.push({ slug: asset.slug, status: "ok", path: filePath });
    } catch (err) {
      console.error(`  ERROR: ${err.message}`);
      results.push({ slug: asset.slug, status: "error", error: err.message });
    }
  }

  await browser.close();

  console.log("\n=== Summary ===");
  for (const r of results) {
    const icon = r.status === "ok" ? "✓" : "✗";
    console.log(`${icon} ${r.slug}`);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
