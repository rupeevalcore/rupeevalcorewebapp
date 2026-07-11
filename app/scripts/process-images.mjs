import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const MEDIA_DIR = 'C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\63bad93e-2e83-4b41-83c5-cfe460adbdd2';
const OUT_DIR = path.join(process.cwd(), 'public', 'images', 'workshops');

// Map uploaded files to descriptive gallery names
const fileMap = [
  { src: 'media__1783793877901.jpg', name: 'gallery-workshop-01' }, // auditorium overview
  { src: 'media__1783793877960.jpg', name: 'gallery-workshop-02' }, // full room, speaker silhouette
  { src: 'media__1783793877976.jpg', name: 'gallery-workshop-03' }, // presenter at podium
  { src: 'media__1783793878090.jpg', name: 'gallery-workshop-04' }, // live presentation with slide visible
  { src: 'media__1783793878119.jpg', name: 'gallery-workshop-05' }, // audience engagement
];

async function processImages() {
  try {
    await fs.mkdir(OUT_DIR, { recursive: true });
    console.log(`Output directory: ${OUT_DIR}`);

    for (const { src, name } of fileMap) {
      const inputPath = path.join(MEDIA_DIR, src);
      
      // Check file exists
      try {
        await fs.access(inputPath);
      } catch {
        console.error(`Source not found: ${inputPath}`);
        continue;
      }

      // Gallery version: 1200px wide WebP
      const galleryOut = path.join(OUT_DIR, `${name}.webp`);
      await sharp(inputPath)
        .resize(1200, null, { withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(galleryOut);
      
      const galleryStats = await fs.stat(galleryOut);
      console.log(`✓ ${name}.webp — ${Math.round(galleryStats.size / 1024)}KB`);
    }

    console.log('\n✅ All workshop images processed successfully!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

processImages();
