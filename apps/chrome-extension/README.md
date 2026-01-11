# Bondee Chrome Extension

A Chrome extension built with **React** and **TypeScript** to enhance the Bondee experience.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Webpack 5** - Module bundler
- **Sharp** - Image processing for icon generation

## Features

- Quick access to Bondee app
- **Instagram Integration**: Automatically adds "Open in Bondee" button on Instagram profiles
- Content script integration with Bondee web app
- Background service worker for persistent functionality
- Custom context menus
- Settings storage

## Instagram Integration

When you visit an Instagram profile page, the extension will:

1. Detect the Instagram username from the URL
2. Add an "Open in Bondee" button after the profile section (class `.x14vqqas`)
3. When clicked, it redirects to your Bondee app
4. Automatically looks up or creates a contact for that Instagram user

## Development

### Prerequisites

Make sure you've installed dependencies from the monorepo root:

```bash
cd ../..
npm install
```

### Build the Extension

From the monorepo root:

```bash
npm run build --filter=chrome-extension
```

Or from this directory:

```bash
npm run build
```

This will create a `dist` folder with the compiled extension.

### Development Mode (Watch)

To automatically rebuild on file changes:

```bash
npm run dev --filter=chrome-extension
```

Or from this directory:

```bash
npm run dev
```

## Loading the Extension in Chrome

### Step 1: Build the Extension

From the monorepo root:

```bash
npm run build --filter=chrome-extension
```

Or from the chrome-extension directory:

```bash
cd apps/chrome-extension
npm run build
```

This creates a `dist` folder with the compiled extension.

### Step 2: Load in Chrome

1. **Open Chrome Extensions page**:
   - Navigate to `chrome://extensions/`
   - Or click the three dots (⋮) → More tools → Extensions

2. **Enable Developer Mode**:
   - Toggle the "Developer mode" switch in the top-right corner

3. **Load the Extension**:
   - Click the "Load unpacked" button
   - Click "Select Folder"

4. **Verify Installation**:
   - You should see "Bondee Extension" in your extensions list
   - The extension icon should appear in your Chrome toolbar
   - Status should show "Enabled"

### Step 3: Test the Extension

1. **Test on Instagram**:
   - Visit any Instagram profile (e.g., `https://www.instagram.com/instagram/`)
   - Look for the "Open in Bondee" button in the profile section
   - Click it to test the integration

2. **Test the Popup**:
   - Click the extension icon in the toolbar
   - Click "Open Bondee" to verify it opens your app

### Troubleshooting Loading Issues

**Extension not showing up:**
- Make sure you selected the `dist` folder, not the root `chrome-extension` folder
- Check that the build completed successfully without errors

**Permission errors:**
- Go to `chrome://extensions/`
- Find "Bondee Extension"
- Click "Details"
- Ensure all permissions are granted

**Button not appearing on Instagram:**
- Refresh the Instagram page after loading the extension
- Open the browser console (F12) and check for any errors
- Make sure you're on a profile page (not the home feed)

### Development Workflow

When making changes:

1. **Edit source files** in `src/`
2. **Rebuild**: Run `npm run build` or `npm run dev` (for watch mode)
3. **Reload extension** in Chrome:
   - Go to `chrome://extensions/`
   - Click the refresh icon (⟳) on the Bondee Extension card
4. **Refresh the webpage** you're testing on

### Using Watch Mode

For active development:

```bash
npm run dev
```

This automatically rebuilds when you save changes. You still need to:
1. Click refresh (⟳) on the extension in `chrome://extensions/`
2. Reload the webpage

## Testing

1. **Test on Instagram**:
   - Visit any Instagram profile (e.g., `https://www.instagram.com/instagram/`)
   - Look for the "Open in Bondee" button in the profile section
   - Click it to test the integration

2. **Test the Popup**:
   - Click the extension icon in Chrome toolbar
   - Click "Open Bondee" to open the web app

3. **Test on Bondee**:
   - Navigate to `http://localhost:3000` to see the content script in action
   - Look for the "Extension Active" badge that appears briefly

## Project Structure

```
chrome-extension/
├── public/
│   ├── icons/              # Extension icons (auto-generated)
│   └── manifest.json       # Chrome extension manifest
├── src/
│   ├── popup/             # React popup app
│   │   ├── App.tsx        # Main popup component
│   │   ├── index.tsx      # React entry point
│   │   ├── popup.html     # HTML template
│   │   └── styles.css     # Popup styles
│   ├── instagram/         # React Instagram integration
│   │   ├── InstagramButton.tsx  # Button component
│   │   └── index.tsx      # Content script entry
│   ├── background.ts      # Background service worker
│   └── content.ts         # Content script for Bondee pages
├── scripts/
│   └── generate-icons.js  # SVG to PNG icon generator
├── dist/                  # Built extension (generated)
├── package.json
├── tsconfig.json
├── webpack.config.js
└── README.md
```
├── package.json
├── tsconfig.json
├── webpack.config.js
└── README.md
```

## Manifest V3

This extension uses Manifest V3, the latest Chrome extension platform. Key features:

- Service workers instead of background pages
- Enhanced security and performance
- Modern API structure

## Customization

### Adding New Permissions

Edit `public/manifest.json` and add required permissions:

```json
{
  "permissions": [
    "storage",
    "activeTab",
    "notifications"  // Add new permissions here
  ]
}
```

### Adding Content Script Features

Edit `src/content.ts` to add functionality that runs on Bondee pages.

### Adding Background Tasks

Edit `src/background.ts` to add persistent background functionality.

## Building for Production

```bash
npm run build
```

The production build will be optimized and placed in the `dist` folder.

## Publishing

To publish to the Chrome Web Store:

1. Build the extension for production
2. Create a ZIP file of the `dist` folder
3. Visit [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
4. Upload the ZIP file
5. Fill in the required metadata
6. Submit for review

## Troubleshooting

### Extension Not Loading

- Make sure you've built the extension first
- Check that you're loading the `dist` folder, not the source folder
- Look for errors in `chrome://extensions/`

### Content Script Not Working

- Verify the URL matches in `manifest.json`
- Check the browser console for errors
- Ensure the web app is running on the correct port

### Build Errors

```bash
# Clean and rebuild
rm -rf dist node_modules
npm install
npm run build
```

## Resources

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Chrome Web Store](https://chrome.google.com/webstore)
