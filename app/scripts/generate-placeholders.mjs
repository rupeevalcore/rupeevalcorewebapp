import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const OUT_DIR = path.join(process.cwd(), 'public', 'images', 'workshops');

async function createPlaceholders() {
  try {
    await fs.mkdir(OUT_DIR, { recursive: true });

    for (let i = 1; i <= 4; i++) {
      const baseName = `workshop-${String(i).padStart(2, '0')}`;
      
      // Create Gallery version (1200px)
      const galleryOutPath = path.join(OUT_DIR, `gallery-${baseName}.webp`);
      await sharp({
        create: {
          width: 1200,
          height: 800,
          channels: 4,
          background: { r: 50, g: 50, b: 50 + (i * 20), alpha: 1 }
        }
      })
      .webp({ quality: 80 })
      .toFile(galleryOutPath);
      
      console.log(`Created placeholder ${galleryOutPath}`);
    }

    console.log("Placeholders generated successfully!");
  } catch (error) {
    console.error("Error creating placeholders:", error);
  }
}

createPlaceholders();
