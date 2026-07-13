const fs = require('fs');

const files = [
  'src/components/sections/TeamSection.tsx',
  'src/components/sections/LearningDeliveryModels.tsx',
  'src/components/layout/Footer.tsx',
  'src/components/audience/ContextualDownloadCard.tsx',
  'src/app/layout.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/text-xs/g, 'text-sm');
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
