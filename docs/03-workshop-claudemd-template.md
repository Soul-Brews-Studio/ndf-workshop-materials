# Workshop CLAUDE.md Template

**Source Gist**: https://gist.github.com/nazt/3f9188eb0a5114fffa5d8cb4f14fe5a4
- 18 stars, 12 forks
- Workshop-friendly structure

**Issue**: https://github.com/Soul-Brews-Studio/oracle-skills-cli/issues/3

## Core Short Codes (Simplified)

| Code | Purpose |
|------|---------|
| `ccc` | Create context issue + compact |
| `nnn` | Create implementation plan (NO CODING) |
| `gogogo` | Execute plan step-by-step |
| `lll` | List project status (WORKSHOP EXERCISE) |
| `rrr` | Session retrospective |

## Two-Issue Pattern

```
ccc (context) → nnn (plan) = separation of concerns
```

1. **Context Issues** (`ccc`): Preserve session state
2. **Task Issues** (`nnn`): Contain implementation plans

## Workshop Exercise: `lll`

> **Attendees create this command themselves!**

Hint: Use `gh` and `git` commands in parallel to get:
- Open issues
- Recent PRs
- Current git status
- Recent commits

## Safety Rules

```markdown
## Critical Safety Rules

### NEVER use force flags
- ❌ `git push --force`
- ❌ `git checkout -f`
- ❌ `rm -rf`

### NEVER merge without permission
- ❌ `gh pr merge` without explicit user approval
- ✅ Always wait for user review

### NEVER push to main directly
- ✅ Create feature branch + PR
```

## Retrospective Requirements

**MANDATORY sections**:
- **AI Diary**: 150+ words with vulnerability
- **Honest Feedback**: 100+ words with 3 friction points

## Differences: Workshop vs Full Oracle

| Workshop Version | Full Oracle Version |
|------------------|---------------------|
| Generic template | Nat-specific patterns |
| 5 short codes | 15+ commands + skills |
| No Oracle MCP | Full Oracle integration |
| No ψ/ structure | Complete ψ-brain |
| No subagents | Multi-agent (MAW) |

## Progressive Disclosure

Workshop template is good for teaching because:
1. Self-contained (single file)
2. Fill-in-the-blank sections
3. Workshop exercise built-in
4. Clear safety rules
5. Progressive complexity

---

*Logged at NDF Workshop Jan 20, 2026*
