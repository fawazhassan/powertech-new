#!/usr/bin/env node

/**
 * Asset Download Script for PowerTech Digital
 * Downloads images and assets from the existing powertech.digital website
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Create assets directory
const assetsDir = path.join(__dirname, 'public', 'assets');
const imagesDir = path.join(assetsDir, 'images');
const iconsDir = path.join(assetsDir, 'icons');

[assetsDir, imagesDir, iconsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Download function
function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirects
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

// List of common assets to try downloading from powertech.digital
const assetsToDownload = [
  // Logos and branding
  { url: 'https://powertech.digital/logo.png', dest: 'images/logo.png' },
  { url: 'https://powertech.digital/logo.svg', dest: 'images/logo.svg' },
  { url: 'https://powertech.digital/favicon.ico', dest: 'images/favicon.ico' },

  // About us assets
  { url: 'https://powertech.digital/assets/team/profile.jpg', dest: 'images/profile.jpg' },
  { url: 'https://powertech.digital/assets/profile.jpg', dest: 'images/profile-alt.jpg' },
  { url: 'https://powertech.digital/images/profile.jpg', dest: 'images/profile-alt2.jpg' },

  // Power Platform icons
  { url: 'https://powertech.digital/assets/icons/power-apps.png', dest: 'icons/power-apps.png' },
  { url: 'https://powertech.digital/assets/icons/power-automate.png', dest: 'icons/power-automate.png' },
  { url: 'https://powertech.digital/assets/icons/power-bi.png', dest: 'icons/power-bi.png' },
  { url: 'https://powertech.digital/assets/icons/power-pages.png', dest: 'icons/power-pages.png' },
  { url: 'https://powertech.digital/images/power-platform.png', dest: 'icons/power-platform.png' },

  // Hero/banner images
  { url: 'https://powertech.digital/assets/hero.jpg', dest: 'images/hero.jpg' },
  { url: 'https://powertech.digital/assets/hero.png', dest: 'images/hero.png' },
  { url: 'https://powertech.digital/images/hero-background.jpg', dest: 'images/hero-background.jpg' },
];

async function downloadAssets() {
  console.log('🔍 Downloading assets from powertech.digital...\n');

  const results = {
    success: [],
    failed: []
  };

  for (const asset of assetsToDownload) {
    const filepath = path.join(assetsDir, asset.dest);

    // Ensure directory exists
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    try {
      await downloadFile(asset.url, filepath);
      results.success.push(asset.url);
    } catch (error) {
      results.failed.push({ url: asset.url, error: error.message });
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`✓ Successfully downloaded: ${results.success.length} files`);
  console.log(`✗ Failed to download: ${results.failed.length} files`);

  if (results.failed.length > 0) {
    console.log('\nFailed downloads (these may not exist on the server):');
    results.failed.forEach(f => console.log(`  - ${f.url}`));
  }

  console.log('\n💡 Note: You may need to manually save images by:');
  console.log('   1. Opening powertech.digital in your browser');
  console.log('   2. Right-clicking on images and selecting "Save image as..."');
  console.log('   3. Saving them to the public/assets directory\n');
}

// Run the script
downloadAssets().catch(console.error);
