---
title: ## Timeline Timestamps in Retrospectives are Non-Negotiable
tags: [retrospective, rrr, timeline, timestamp, traceability, oracle, workshop]
created: 2026-01-20
source: NDF Workshop Jan 20, 2026 - Nat reminder
---

# ## Timeline Timestamps in Retrospectives are Non-Negotiable

## Timeline Timestamps in Retrospectives are Non-Negotiable

**Context**: NDF Workshop (Jan 20, 2026) - reminder from Nat about rrr format

**The Pattern**:
Retrospectives MUST have Timeline section with **real timestamps**, not placeholders.

**Why It Matters**:
1. Traceability - can reconstruct session flow
2. Duration awareness - know how long each task took
3. Oracle searchability - timestamps help find "what happened when"

**Anti-Pattern**:
```markdown
| Time | Event |
|------|-------|
| HH:MM | Did something |  ← BAD: placeholder
```

**Correct Pattern**:
```markdown
| Time (GMT+7) | Event | Reference |
|--------------|-------|-----------|
| 11:20 | Started trace | /trace --deep |
| 11:35 | Created issue | #2 |
```

**Minimum Requirements**:
- At least 3 timeline entries (start, key milestone, end)
- Real times from Step 0 timestamp
- References (commits, issues, commands)
- GMT+7 timezone

---
*Added via Oracle Learn*
