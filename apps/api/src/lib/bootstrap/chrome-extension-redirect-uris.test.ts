import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { chromeExtensionRedirectUris } from "./chrome-extension-redirect-uris.js";

describe("chromeExtensionRedirectUris", () => {
  it("registers both slash variants for chrome.identity", () => {
    assert.deepEqual(chromeExtensionRedirectUris("lpcmokfekjjejnpobhbkgmjkodfhpmha"), [
      "https://lpcmokfekjjejnpobhbkgmjkodfhpmha.chromiumapp.org/",
      "https://lpcmokfekjjejnpobhbkgmjkodfhpmha.chromiumapp.org",
    ]);
  });
});
