/**
 * Chrome Extension Configuration
 */

export const config = {
  // App URL - switches between development and production based on NODE_ENV
  appUrl:
    process.env.NODE_ENV === "production"
      ? process.env.PROD_APP_URL!
      : process.env.DEV_APP_URL!,
} as const;
