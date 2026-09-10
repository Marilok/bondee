import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { betterAuthUnlinkAccountId } from "./better-auth-unlink-account-id";

describe("betterAuthUnlinkAccountId", () => {
  it("uses the local Account.id, not providerAccountId", () => {
    assert.equal(
      betterAuthUnlinkAccountId({
        id: "acct_local_row",
        identity_id: "github-user-123",
      }),
      "acct_local_row",
    );
  });
});
