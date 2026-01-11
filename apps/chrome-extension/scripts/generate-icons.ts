import sharp from "sharp";
import { existsSync } from "fs";
import { join } from "path";

const sizes = [16, 48, 128];
const svgPath = join(__dirname, "../../../packages/branding/src/icon.svg");
const outputDir = join(__dirname, "../public/icons");

async function generateIcons() {
  console.log("🎨 Generating PNG icons from SVG...");

  if (!existsSync(svgPath)) {
    console.error("❌ SVG icon not found at:", svgPath);
    process.exit(1);
  }

  try {
    for (const size of sizes) {
      const outputPath = join(outputDir, `icon${size}.png`);

      await sharp(svgPath).resize(size, size).png().toFile(outputPath);

      console.log(`✅ Generated icon${size}.png`);
    }

    console.log("✨ All icons generated successfully!");
  } catch (error) {
    console.error("❌ Error generating icons:", error);
    process.exit(1);
  }
}

generateIcons();
