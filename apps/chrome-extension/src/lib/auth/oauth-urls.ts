/**
 * chrome.identity and some Node fetches fail when `localhost` resolves to
 * IPv6 `::1`. Pin loopback HTTP to 127.0.0.1. Do not use this for the RFC
 * 8707 `resource` parameter — that identifier must match `BONDERY_PUBLIC_API_URL`.
 */
export function oauthHttpBaseUrl(apiUrl: string): string {
  return apiUrl.replace("http://localhost:", "http://127.0.0.1:").replace(/\/+$/, "");
}

/** Canonical protected-resource identifier (RFC 8707). */
export function oauthResourceIdentifier(apiUrl: string): string {
  return apiUrl.replace(/\/+$/, "");
}

/**
 * MV3 `host_permissions` match origins exactly. Token/authorize fetches pin
 * loopback HTTP to 127.0.0.1 while env is usually `localhost` — list both.
 */
export function loopbackHostPermissionPatterns(url: string): string[] {
  try {
    const parsed = new URL(url);
    const port = parsed.port ? `:${parsed.port}` : "";
    const patterns = [`${parsed.origin}/*`];
    if (parsed.hostname === "localhost") {
      patterns.push(`${parsed.protocol}//127.0.0.1${port}/*`);
    } else if (parsed.hostname === "127.0.0.1") {
      patterns.push(`${parsed.protocol}//localhost${port}/*`);
    }
    return [...new Set(patterns)];
  } catch {
    return [];
  }
}
