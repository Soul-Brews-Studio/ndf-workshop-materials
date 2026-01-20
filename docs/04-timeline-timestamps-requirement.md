# Timeline Timestamps in Retrospectives - Non-Negotiable

**Context**: NDF Workshop (Jan 20, 2026) - reminder from Nat about rrr format

## The Pattern

Retrospectives MUST have Timeline section with **real timestamps**, not placeholders.

## Why It Matters

1. **Traceability** - can reconstruct session flow
2. **Duration awareness** - know how long each task took
3. **Oracle searchability** - timestamps help find "what happened when"

## Anti-Pattern

```markdown
| Time | Event |
|------|-------|
| HH:MM | Did something |  ← BAD: placeholder
```

## Correct Pattern

```markdown
## Timeline
| Time | Event | Reference |
|------|-------|-----------|
| 11:20 | Started trace | /trace --deep |
| 11:35 | Created issue | #2 |
| 12:00 | Updated skill | rrr/skill.md |
```

## Minimum Requirements

- At least **3 timeline entries** (start, key milestone, end)
- **Real times** from Step 0 timestamp
- **References** (commits, issues, commands)
- **GMT+7 timezone** (Bangkok)

## Updated rrr Skill

Added to `~/.claude/skills/rrr/skill.md`:

```markdown
## Timeline Section (NEVER FORGET!)

The retrospective **MUST** include a Timeline table with **real timestamps**:

| Time (GMT+7) | Event | Reference |
|--------------|-------|-----------|
| 11:20 | Started session | /trace --deep |
| 11:35 | Created issue | #2 |

**Rules**:
1. Use actual times (check Step 0 timestamp)
2. Include commit hashes or issue numbers
3. Minimum 3 entries
4. GMT+7 timezone
```

---

*Pattern learned at NDF Workshop Jan 20, 2026*
