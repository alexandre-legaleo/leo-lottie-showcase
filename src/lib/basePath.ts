// Matches next.config.ts's `basePath` — needed to prefix manual fetch()
// calls to /public assets, since Next only auto-prefixes <Link>/<Image>.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
