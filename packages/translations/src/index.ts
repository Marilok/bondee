/**
 * Bondee translations package
 *
 * Exports translation files for internationalization
 */

export const SUPPORTED_LOCALES = ["en", "cs"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
