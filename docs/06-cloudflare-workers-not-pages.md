# Cloudflare: Workers over Pages (Official)

**Source**: https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/

## Why Workers > Pages

Cloudflare officially recommends migrating from Pages to Workers.

| Feature | Workers | Pages |
|---------|---------|-------|
| Durable Objects | ✅ | 🟡 |
| Cron Triggers | ✅ | ❌ |
| Workers Logs | ✅ | ❌ |
| Logpush | ✅ | ❌ |
| Tail Workers | ✅ | ❌ |
| Source Maps | ✅ | ❌ |
| Queue Consumers | ✅ | ❌ |
| Rate Limiting | ✅ | ❌ |
| Gradual Deployments | ✅ | ❌ |
| Remote Development | ✅ | ❌ |
| Email Workers | ✅ | ❌ |

## Key Quote

> "Unlike Pages, Workers has a distinctly broader set of features available to it"

## Cost

> "Like Pages, requests for static assets on Workers are free"

Same pricing, more features.

## Configuration

```toml
# wrangler.toml (Workers)
name = "my-worker"
compatibility_date = "2025-04-01"

[assets]
directory = "./dist"
```

## Commands

```bash
# ❌ Pages (old)
wrangler pages dev
wrangler pages deploy

# ✅ Workers (new)
wrangler dev
wrangler deploy
```

## Domain

| Type | Pages | Workers |
|------|-------|---------|
| Subdomain | `.pages.dev` | `.workers.dev` |
| Custom domain | ✅ | ✅ |
| Outside CF zones | ✅ | ❌ |

## Rule

**Always use Workers (`wrangler deploy`), never Pages (`wrangler pages deploy`)**

---

*Logged at NDF Workshop Jan 20, 2026*
