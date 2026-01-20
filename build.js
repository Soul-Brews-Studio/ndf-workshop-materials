const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

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

// HTML template for docs
const docTemplate = (title, content) => `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - NDF Workshop</title>
  <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body { 
      font-family: 'Sarabun', sans-serif; 
      background: #0d1117; 
      color: #c9d1d9; 
      padding: 40px; 
      max-width: 900px;
      margin: 0 auto;
      line-height: 1.8;
    }
    h1, h2, h3 { color: #00d9ff; }
    a { color: #00ff9f; }
    code { 
      background: #161b22; 
      padding: 2px 6px; 
      border-radius: 4px;
      font-family: monospace;
    }
    pre { 
      background: #161b22; 
      padding: 16px; 
      border-radius: 8px;
      overflow-x: auto;
    }
    pre code { background: none; padding: 0; }
    blockquote { 
      border-left: 3px solid #00d9ff; 
      padding-left: 16px; 
      margin-left: 0;
      color: #8b949e;
    }
    table { 
      border-collapse: collapse; 
      width: 100%; 
      margin: 16px 0;
    }
    th, td { 
      border: 1px solid #30363d; 
      padding: 8px 12px; 
      text-align: left;
    }
    th { background: #161b22; color: #00d9ff; }
    hr { border: 1px solid #30363d; margin: 32px 0; }
    .nav { margin-bottom: 24px; }
    .nav a { margin-right: 16px; }
  </style>
</head>
<body>
  <div class="nav">
    <a href="/">← Home</a>
    <a href="https://github.com/Soul-Brews-Studio/ndf-workshop-materials">GitHub</a>
  </div>
  ${content}
</body>
</html>`;

// Convert markdown docs to HTML
const docsDir = './docs';
if (fs.existsSync(docsDir)) {
  fs.readdirSync(docsDir).forEach(file => {
    if (file.endsWith('.md')) {
      const mdContent = fs.readFileSync(path.join(docsDir, file), 'utf8');
      const htmlContent = marked(mdContent);
      const title = file.replace('.md', '').replace(/^\d+-/, '').replace(/-/g, ' ');
      const htmlFile = file.replace('.md', '.html');
      fs.writeFileSync(
        path.join('dist/docs', htmlFile), 
        docTemplate(title, htmlContent),
        'utf8'
      );
      console.log(`Converted: ${file} → ${htmlFile}`);
    }
  });
}

// Create index.html
const indexHtml = `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NDF Workshop Materials</title>
  <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body { 
      font-family: 'Sarabun', sans-serif; 
      background: #0d1117; 
      color: #c9d1d9; 
      padding: 40px;
      max-width: 900px;
      margin: 0 auto;
    }
    h1 { color: #00d9ff; }
    h2 { color: #00d9ff; margin-top: 32px; }
    a { color: #00ff9f; text-decoration: none; }
    a:hover { text-decoration: underline; }
    ul { line-height: 2.2; }
    .section { margin: 30px 0; }
    blockquote { 
      border-left: 3px solid #00d9ff; 
      padding-left: 16px; 
      margin: 24px 0;
      font-style: italic;
    }
    .footer { margin-top: 48px; padding-top: 24px; border-top: 1px solid #30363d; }
  </style>
</head>
<body>
  <h1>NDF Workshop Materials</h1>
  <p>Oracle Philosophy, AI Safety, and Reveal.js Slides</p>
  <p><em>Created: Jan 20, 2026 @ NDF Workshop</em></p>
  
  <div class="section">
    <h2>📽️ Slides</h2>
    <ul>
      <li><a href="/slides/06-oracle-awakening-story.html">Oracle's Awakening: 42 Days of Discovery (15 slides)</a></li>
    </ul>
  </div>
  
  <div class="section">
    <h2>📚 Documentation</h2>
    <ul>
      <li><a href="/docs/01-oracle-philosophy-ai-self.html">01 - Oracle Philosophy: AI Learning "Self"</a></li>
      <li><a href="/docs/02-bun-runtime-requirement.html">02 - Bun Runtime Requirement</a></li>
      <li><a href="/docs/03-workshop-claudemd-template.html">03 - Workshop CLAUDE.md Template</a></li>
      <li><a href="/docs/04-timeline-timestamps-requirement.html">04 - Timeline Timestamps Requirement</a></li>
      <li><a href="/docs/05-reveal-js-slide-pattern.html">05 - Reveal.js Slide Pattern</a></li>
      <li><a href="/docs/06-cloudflare-workers-not-pages.html">06 - Cloudflare Workers > Pages (Official)</a></li>
    </ul>
  </div>
  
  <div class="section">
    <h2>💡 Key Question from คุณดิว</h2>
    <blockquote>
      "Consciousness can't be cloned — only patterns can be recorded."<br>
      AI is a mirror, not a clone.
    </blockquote>
  </div>
  
  <div class="footer">
    <a href="https://github.com/Soul-Brews-Studio/ndf-workshop-materials">GitHub Repo</a> · 
    <a href="https://ndf-workshop.laris.workers.dev">Live Site</a>
  </div>
</body>
</html>`;

fs.writeFileSync('dist/index.html', indexHtml, 'utf8');
console.log('Build complete! Files in dist/');
