/**
 * Application configuration constants
 */

export const INPUT_MAX_LENGTHS = {
  firstName: 50,
  middleName: 50,
  lastName: 50,
  title: 100,
  place: 100,
  description: 500,
  dateName: 50,
} as const;

export const FEATURES = {
  birthdayNotifications: true,
} as const;

export const LIMITS = {
  maxImportantDates: 3,
} as const;

/**
 * Get the base URL based on the current environment
 * - Development: Uses NEXT_PUBLIC_APP_URL
 * - Production: Uses NEXT_PUBLIC_VERCEL_URL with https://
 */
export function getBaseUrl(): string {
  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    return process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  }

  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  return vercelUrl ? `https://${vercelUrl}` : "";
}
