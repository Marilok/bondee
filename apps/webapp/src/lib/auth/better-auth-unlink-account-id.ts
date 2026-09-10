/**
 * Better Auth 1.7 `unlinkAccount.accountId` is the local `Account.id`.
 * Settings identities expose that as `id`; `identity_id` is providerAccountId.
 */
export function betterAuthUnlinkAccountId(identity: { id: string; identity_id?: string }): string {
  return identity.id;
}
