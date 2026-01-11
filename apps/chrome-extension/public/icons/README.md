# Chrome Extension Icons

## Auto-Generated PNG Icons

The PNG icons are automatically generated from the @bondee/branding package during the build process:

- `icon16.png` (16x16) - Auto-generated ✨
- `icon48.png` (48x48) - Auto-generated ✨
- `icon128.png` (128x128) - Auto-generated ✨

**Source:** `packages/branding/src/icon.svg`

## How It Works

When you run `npm run build` or `npm run dev`, the build script:

1. Reads `icon.svg` from the @bondee/branding package
2. Generates PNG versions at 16px, 48px, and 128px using Sharp
3. Saves them to this directory
4. Parcel bundles them with the extension

## Customizing Icons

To change the extension icon:

1. Edit `packages/branding/src/icon.svg` in the monorepo root
2. Run `npm run generate-icons` from the chrome-extension directory
3. The PNG files will be automatically regenerated

## Manual Generation

To regenerate icons without a full build:

```bash
npm run generate-icons
```

## Technology

- **SVG Source:** Shared branding package (@bondee/branding)
- **Sharp:** High-performance image processing library
- **Automated:** Runs automatically before each build
