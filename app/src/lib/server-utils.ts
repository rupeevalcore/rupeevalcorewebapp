import fs from 'fs';
import path from 'path';

export function getFileSize(relativePath: string): string | undefined {
  try {
    const fullPath = path.join(process.cwd(), 'public', relativePath);
    if (!fs.existsSync(fullPath)) return undefined;
    
    const stats = fs.statSync(fullPath);
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(1);
    
    // If it's less than 0.1 MB, show KB
    if (parseFloat(sizeInMB) < 0.1) {
      const sizeInKB = (stats.size / 1024).toFixed(0);
      return `${sizeInKB} KB`;
    }
    
    return `${sizeInMB} MB`;
  } catch (_) {
    return undefined;
  }
}
