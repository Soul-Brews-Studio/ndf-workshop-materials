# Bun Runtime Requirement for oracle-skills-cli

**Issue**: https://github.com/Soul-Brews-Studio/oracle-skills-cli/issues/2

## Problem

Workshop attendees tried running oracle-skills with Node.js instead of Bun, and got confusing errors.

Skills use Bun-specific features:
- `import { $ } from 'bun'` (Bun Shell)
- Direct `.ts` execution

Running with `npx` or `node` will fail with cryptic errors.

## Solution

Add runtime check at CLI startup:

```typescript
// src/index.ts - at the top
if (typeof Bun === 'undefined') {
  console.error(`
❌ oracle-skills requires Bun runtime

You're running with Node.js, but this CLI uses Bun-specific features.

To fix:
  1. Install Bun: curl -fsSL https://bun.sh/install | bash
  2. Run with: bunx oracle-skills install -g -y

More info: https://bun.sh
`);
  process.exit(1);
}
```

## Quick Reference

```bash
# ❌ Don't use
npx oracle-skills install
node oracle-skills

# ✅ Use this
bunx oracle-skills install -g -y

# If Bun not installed
curl -fsSL https://bun.sh/install | bash
```

## Why Bun?

| Feature | Bun | Node.js |
|---------|-----|---------|
| TypeScript | Native (no build) | Requires tsc/esbuild |
| Shell commands | `import { $ } from 'bun'` | Needs child_process |
| Speed | ~3x faster startup | Slower |
| Package manager | Built-in (bunx) | Separate (npx) |

---

*Discovered at NDF Workshop Jan 20, 2026*
