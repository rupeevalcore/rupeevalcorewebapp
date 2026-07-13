// scripts/optimize-images.js
// Run: node scripts/optimize-images.js
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, '..', 'public');

const tasks = [
  // Founder image: 2.1MB PNG → WebP <200KB
  {
    input: path.join(publicDir, 'images', 'founder-shanthi-chitrarasu.png'),
    output: path.join(publicDir, 'images', 'founder-shanthi-chitrarasu.webp'),
    options: { quality: 82, width: 800 },
  },
  // 3D PNGs: ~550KB each → WebP ~50-80KB
  {
    input: path.join(publicDir, 'schools_3d.png'),
    output: path.join(publicDir, 'schools_3d.webp'),
    options: { quality: 85, width: 600 },
  },
  {
    input: path.join(publicDir, 'colleges_3d.png'),
    output: path.join(publicDir, 'colleges_3d.webp'),
    options: { quality: 85, width: 600 },
  },
  {
    input: path.join(publicDir, 'corporate_3d.png'),
    output: path.join(publicDir, 'corporate_3d.webp'),
    options: { quality: 85, width: 600 },
  },
  {
    input: path.join(publicDir, 'individual_3d.png'),
    output: path.join(publicDir, 'individual_3d.webp'),
    options: { quality: 85, width: 600 },
  },
  {
    input: path.join(publicDir, 'ai_3d.png'),
    output: path.join(publicDir, 'ai_3d.webp'),
    options: { quality: 85, width: 600 },
  },
  // Collage photo: 377KB JPEG → WebP
  {
    input: path.join(publicDir, 'collage_photos.jpg'),
    output: path.join(publicDir, 'collage_photos.webp'),
    options: { quality: 80, width: 1600 },
  },
];

async function run() {
  for (const task of tasks) {
    if (!fs.existsSync(task.input)) {
      console.warn(`SKIP: ${task.input} not found`);
      continue;
    }
    try {
      const before = fs.statSync(task.input).size;
      let pipeline = sharp(task.input);
      if (task.options.width) {
        pipeline = pipeline.resize(task.options.width, null, { withoutEnlargement: true });
      }
      await pipeline.webp({ quality: task.options.quality }).toFile(task.output);
      const after = fs.statSync(task.output).size;
      const reduction = (((before - after) / before) * 100).toFixed(1);
      console.log(
        `✓ ${path.basename(task.input)} → ${path.basename(task.output)} | ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (-${reduction}%)`
      );
    } catch (err) {
      console.error(`✗ ${task.input}:`, err.message);
    }
  }
  console.log('\nDone. Update image references in code to use .webp extensions.');
}

run();
