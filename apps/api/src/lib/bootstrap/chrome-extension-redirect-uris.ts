/** chrome.identity.getRedirectURL() may include or omit the trailing slash. */
export function chromeExtensionRedirectUris(extensionId: string): string[] {
  const origin = `https://${extensionId}.chromiumapp.org`;
  return [`${origin}/`, origin];
}
