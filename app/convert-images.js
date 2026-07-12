/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'public');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach((file) => {
        const ext = path.extname(file).toLowerCase();
        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
            const inputPath = path.join(directoryPath, file);
            const outputPath = path.join(directoryPath, file.replace(ext, '.webp'));
            
            sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath)
                .then(() => {
                    console.log('Converted:', file, 'to', path.basename(outputPath));
                })
                .catch(err => {
                    console.error('Error converting', file, err);
                });
        }
    });
});
