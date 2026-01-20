const fs = require('fs');
const path = require('path');

// Create dist directory
if (!fs.existsSync('dist')) fs.mkdirSync('dist');
if (!fs.existsSync('dist/slides')) fs.mkdirSync('dist/slides');
if (!fs.existsSync('dist/docs')) fs.mkdirSync('dist/docs');

// Copy public (slides HTML) to dist/slides
const publicDir = './public';
if (fs.existsSync(publicDir)) {
  fs.readdirSync(publicDir).forEach(file => {
    fs.copyFileSync(path.join(publicDir, file), path.join('dist/slides', file));
  });
}

// Copy docs to dist/docs  
const docsDir = './docs';
if (fs.existsSync(docsDir)) {
  fs.readdirSync(docsDir).forEach(file => {
    fs.copyFileSync(path.join(docsDir, file), path.join('dist/docs', file));
  });
}

// Create index.html
const indexHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>NDF Workshop Materials</title>
  <style>
    body { font-family: 'Sarabun', sans-serif; background: #0d1117; color: #fff; padding: 40px; }
    h1 { color: #00d9ff; }
    a { color: #00ff9f; }
    ul { line-height: 2; }
    .section { margin: 30px 0; }
  </style>
</head>
<body>
  <h1>NDF Workshop Materials</h1>
  <p>Oracle Philosophy, AI Safety, and Reveal.js Slides</p>
  <p><em>Created: Jan 20, 2026 @ NDF Workshop</em></p>
  
  <div class="section">
    <h2>Slides</h2>
    <ul>
      <li><a href="/slides/06-anthropic-oracle-safety.html">Anthropic vs Oracle Safety (15 slides)</a></li>
    </ul>
  </div>
  
  <div class="section">
    <h2>Documentation</h2>
    <ul>
      <li><a href="/docs/01-oracle-philosophy-ai-self.md">01 - Oracle Philosophy: AI Learning "Self"</a></li>
      <li><a href="/docs/02-bun-runtime-requirement.md">02 - Bun Runtime Requirement</a></li>
      <li><a href="/docs/03-workshop-claudemd-template.md">03 - Workshop CLAUDE.md Template</a></li>
      <li><a href="/docs/04-timeline-timestamps-requirement.md">04 - Timeline Timestamps Requirement</a></li>
      <li><a href="/docs/05-reveal-js-slide-pattern.md">05 - Reveal.js Slide Pattern</a></li>
    </ul>
  </div>
  
  <div class="section">
    <h2>Key Question</h2>
    <blockquote style="border-left: 3px solid #00d9ff; padding-left: 15px;">
      "Consciousness can't be cloned — only patterns can be recorded."<br>
      AI is a mirror, not a clone.
    </blockquote>
  </div>
  
  <div class="section">
    <a href="https://github.com/Soul-Brews-Studio/ndf-workshop-materials">GitHub Repo</a>
  </div>
</body>
</html>`;

fs.writeFileSync('dist/index.html', indexHtml);
console.log('Build complete! Files in dist/');
