import { writeFileSync } from "fs";
import { resolve } from "path";
import dotenv from "dotenv";

// Load environment variables from root .env
dotenv.config({ path: resolve(__dirname, "../../../.env") });

const DEV_URL = process.env.DEV_APP_URL!;
const PROD_URL = process.env.PROD_APP_URL!;

// Determine which URL to use based on NODE_ENV
const APP_URL = process.env.NODE_ENV === "production" ? PROD_URL : DEV_URL;

// Extract origin from URL for host permissions
const getOrigin = (url: string) => {
  try {
    const urlObj = new URL(url);
    return `${urlObj.origin}/*`;
  } catch {
    return url;
  }
};

const manifest = {
  manifest_version: 3,
  name: "Bondee Instagram Integration",
  version: "0.1.0",
  description: "Import Instagram contacts directly to Bondee",
  permissions: ["storage"],
  host_permissions: ["https://www.instagram.com/*", getOrigin(APP_URL)],
  icons: {
    "16": "../public/icons/icon16.png",
    "48": "../public/icons/icon48.png",
    "128": "../public/icons/icon128.png",
  },
  content_scripts: [
    {
      matches: ["https://www.instagram.com/*"],
      js: ["instagram/index.tsx"],
    },
  ],
};

// Write manifest.json
const manifestPath = resolve(__dirname, "../src/manifest.json");
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

console.log(
  `✅ Generated manifest.json with host permission: ${getOrigin(APP_URL)}`
);
