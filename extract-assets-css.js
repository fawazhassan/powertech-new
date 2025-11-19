#!/usr/bin/env node

/**
 * Enhanced Asset & CSS Extraction Script for PowerTech Digital
 * Extracts images, CSS, and style information from the website
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create directories
const assetsDir = path.join(__dirname, 'public', 'assets');
const imagesDir = path.join(assetsDir, 'images');
const iconsDir = path.join(assetsDir, 'icons');
const cssDir = path.join(__dirname, 'extracted-css');

[assetsDir, imagesDir, iconsDir, cssDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Download function
function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': '*/*'
      }
    };

    protocol.get(url, options, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        downloadFile(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✓ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

// Fetch text content
function fetchText(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,text/css,application/javascript'
      }
    };

    protocol.get(url, options, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        if (response.statusCode === 200) {
          resolve(data);
        } else {
          reject(new Error(`Failed to fetch ${url}: ${response.statusCode}`));
        }
      });
    }).on('error', reject);
  });
}

async function extractCSSAndAssets() {
  console.log('🔍 Extracting CSS and assets from powertech.digital...\n');

  // Try to fetch the main HTML to find CSS and JS files
  try {
    console.log('Fetching main HTML...');
    const html = await fetchText('https://powertech.digital');

    // Save HTML for inspection
    fs.writeFileSync(path.join(cssDir, 'index.html'), html);
    console.log('✓ Saved index.html\n');

    // Extract CSS file references
    const cssMatches = html.match(/<link[^>]*href="([^"]*\.css)"[^>]*>/g) || [];
    const cssUrls = cssMatches.map(match => {
      const hrefMatch = match.match(/href="([^"]*)"/);
      if (hrefMatch) {
        const href = hrefMatch[1];
        return href.startsWith('http') ? href : `https://powertech.digital${href}`;
      }
      return null;
    }).filter(Boolean);

    console.log(`Found ${cssUrls.length} CSS files:`);

    // Download CSS files
    for (const cssUrl of cssUrls) {
      try {
        console.log(`Fetching ${cssUrl}...`);
        const cssContent = await fetchText(cssUrl);
        const filename = path.basename(new URL(cssUrl).pathname);
        fs.writeFileSync(path.join(cssDir, filename), cssContent);
        console.log(`✓ Saved ${filename}\n`);

        // Extract colors from CSS
        const colorMatches = cssContent.match(/(#[0-9A-Fa-f]{3,6}|rgb\([^)]+\)|rgba\([^)]+\)|hsl\([^)]+\))/g) || [];
        if (colorMatches.length > 0) {
          const uniqueColors = [...new Set(colorMatches)];
          fs.writeFileSync(
            path.join(cssDir, 'extracted-colors.txt'),
            `Colors found in ${filename}:\n${uniqueColors.join('\n')}\n\n`,
            { flag: 'a' }
          );
        }

        // Extract image URLs from CSS
        const imageMatches = cssContent.match(/url\(['"]?([^'"()]+)['"]?\)/g) || [];
        imageMatches.forEach(match => {
          const urlMatch = match.match(/url\(['"]?([^'"()]+)['"]?\)/);
          if (urlMatch) {
            console.log(`Found image in CSS: ${urlMatch[1]}`);
          }
        });

      } catch (error) {
        console.log(`✗ Failed to fetch CSS: ${error.message}`);
      }
    }

    // Try to fetch JavaScript files to find asset paths
    const jsMatches = html.match(/<script[^>]*src="([^"]*\.js)"[^>]*>/g) || [];
    const jsUrls = jsMatches.map(match => {
      const srcMatch = match.match(/src="([^"]*)"/);
      if (srcMatch) {
        const src = srcMatch[1];
        return src.startsWith('http') ? src : `https://powertech.digital${src}`;
      }
      return null;
    }).filter(Boolean);

    console.log(`\nFound ${jsUrls.length} JavaScript files`);

    // Try common asset paths
    console.log('\n📸 Trying common image paths...\n');
    const commonPaths = [
      '/static/media/logo',
      '/static/images/logo',
      '/assets/logo',
      '/logo',
      '/images/logo',
      '/static/media/profile',
      '/images/profile',
      '/assets/images/logo',
      '/assets/images/profile',
    ];

    const extensions = ['.png', '.jpg', '.jpeg', '.svg', '.webp'];

    for (const basePath of commonPaths) {
      for (const ext of extensions) {
        const url = `https://powertech.digital${basePath}${ext}`;
        const filename = path.basename(basePath) + ext;
        const filepath = path.join(imagesDir, filename);

        try {
          await downloadFile(url, filepath);
        } catch (error) {
          // Silently continue
        }
      }
    }

  } catch (error) {
    console.error(`Error: ${error.message}`);
  }

  console.log('\n' + '='.repeat(50));
  console.log('\n✓ Extraction complete!');
  console.log(`\nCheck these locations:`);
  console.log(`  - CSS files: ${cssDir}`);
  console.log(`  - Extracted colors: ${path.join(cssDir, 'extracted-colors.txt')}`);
  console.log(`  - Downloaded images: ${imagesDir}`);
  console.log('\n💡 Next steps:');
  console.log('  1. Check extracted-css/extracted-colors.txt for your color scheme');
  console.log('  2. Review CSS files for design patterns');
  console.log('  3. Manually download any missing images from your browser\n');
}

extractCSSAndAssets().catch(console.error);
