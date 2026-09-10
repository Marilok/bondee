import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { parseFsdProfileUrnFromComponentKey } from "./sduiProfile";

describe("parseFsdProfileUrnFromComponentKey", () => {
  it("reads the ACo id before an SDUI section suffix", () => {
    assert.equal(
      parseFsdProfileUrnFromComponentKey(
        "profile-component-refACoAAABbCU8BZ1u7ldnivR0qeqOY0lnnhiyUDswTopcard",
      ),
      "urn:li:fsd_profile:ACoAAABbCU8BZ1u7ldnivR0qeqOY0lnnhiyUDsw",
    );
  });

  it("reads an embedded fsd_profile URN", () => {
    assert.equal(
      parseFsdProfileUrnFromComponentKey(
        "entity-urn:li:fsd_profile:ACoAAABbCU8BZ1u7ldnivR0qeqOY0lnnhiyUDsw",
      ),
      "urn:li:fsd_profile:ACoAAABbCU8BZ1u7ldnivR0qeqOY0lnnhiyUDsw",
    );
  });

  it("reads a bare ACo token when there is no section suffix", () => {
    assert.equal(
      parseFsdProfileUrnFromComponentKey("ACoAAABbCU8BZ1u7ldnivR0qeqOY0lnnhiyUDsw"),
      "urn:li:fsd_profile:ACoAAABbCU8BZ1u7ldnivR0qeqOY0lnnhiyUDsw",
    );
  });

  it("returns null for empty or unrelated keys", () => {
    assert.equal(parseFsdProfileUrnFromComponentKey(null), null);
    assert.equal(parseFsdProfileUrnFromComponentKey(""), null);
    assert.equal(parseFsdProfileUrnFromComponentKey("TopcardOnly"), null);
  });
});
