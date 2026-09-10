/**
 * First-party OAuth clients (Chrome extension) are provisioned without a
 * userId. Better Auth's GET /oauth2/get-client is an owner-admin lookup and
 * returns 401 for those rows — do not use it to render consent.
 */
export type OAuthConsentRequestDetails = {
  clientId: string;
  redirectUri: string;
  scope: string;
};

export function resolveOAuthConsentRequestDetails(
  search: string,
): OAuthConsentRequestDetails | null {
  const query = search.startsWith("?") ? search.slice(1) : search;
  const params = new URLSearchParams(query);
  const clientId = params.get("client_id");
  if (!clientId) {
    return null;
  }

  return {
    clientId,
    redirectUri: params.get("redirect_uri") ?? "",
    scope: params.get("scope") ?? "",
  };
}
