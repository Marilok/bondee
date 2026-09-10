import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { resolveOAuthConsentRequestDetails } from "./oauth-consent-request.js";

describe("resolveOAuthConsentRequestDetails", () => {
  it("reads client_id, redirect_uri, and scope from the signed consent query", () => {
    const search =
      "client_id=ext-public&redirect_uri=https://abc.chromiumapp.org/&scope=openid+profile&sig=abc&ba_param=client_id";

    assert.deepEqual(resolveOAuthConsentRequestDetails(search), {
      clientId: "ext-public",
      redirectUri: "https://abc.chromiumapp.org/",
      scope: "openid profile",
    });
  });

  it("returns null when client_id is missing", () => {
    assert.equal(resolveOAuthConsentRequestDetails("sig=abc&ba_param=scope"), null);
  });
});
