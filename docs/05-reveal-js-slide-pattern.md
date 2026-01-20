# Reveal.js Slide Pattern (SIIT Style)

**Tech Stack**: Reveal.js 5.0.4 (NOT Marp)

## Core Config

```javascript
Reveal.initialize({
    hash: true,
    transition: 'none',        // NO animation
    backgroundTransition: 'none',
    plugins: [RevealHighlight]
});
```

## Theme/Style (SIIT Dark)

```css
:root {
    --r-main-font: 'Sarabun', 'Inter', sans-serif;
    --r-heading-color: #00d9ff;      /* Cyan headings */
    --r-background-color: #0d1117;   /* Dark background */
}

.highlight-cyan { color: #00d9ff; }
.highlight-green { color: #00ff9f; }
```

## CDN Links

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.0.4/reveal.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.0.4/theme/black.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.0.4/reveal.min.js"></script>
```

## Key Patterns

| Pattern | Description |
|---------|-------------|
| Markdown = Ground Truth | Edit content in .md files |
| HTML = Presentation | Reveal.js for display, regeneratable |
| NO fragments | Instant display, no click-to-reveal |
| transition: 'none' | Clean instant slide changes |
| NO Marp | Hand-written Reveal.js HTML is simpler |
| 5 Parallel Subagents | For bulk md→HTML conversion |

## Anti-Patterns

| ❌ Wrong | ✅ Right |
|----------|----------|
| Marp CLI | Hand-written Reveal.js |
| Fragment animations | Instant display |
| Heavy tooling | Pure static HTML |

## HTML Template

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Slide Title</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.0.4/reveal.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.0.4/theme/black.min.css">
    <style>
        :root {
            --r-heading-color: #00d9ff;
            --r-background-color: #0d1117;
        }
        .highlight-cyan { color: #00d9ff; }
        .highlight-green { color: #00ff9f; }
    </style>
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>
                <h1>Slide 1</h1>
            </section>
            <section>
                <h2>Slide 2</h2>
            </section>
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.0.4/reveal.min.js"></script>
    <script>
        Reveal.initialize({
            hash: true,
            transition: 'none',
            backgroundTransition: 'none'
        });
    </script>
</body>
</html>
```

## Directory Structure

```
workshop-materials/
├── slides/          # Markdown source (ground truth)
│   └── 01-topic.md
└── public/          # HTML presentations
    └── 01-topic.html
```

---

*Traced from SIIT workshop, ThirdPint demo, Oracle workshop creation*
