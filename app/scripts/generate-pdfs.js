const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const downloadsDir = path.join(publicDir, 'downloads');
const proposalsDir = path.join(publicDir, 'proposals');

// Create directories if they don't exist
if (!fs.existsSync(downloadsDir)) fs.mkdirSync(downloadsDir, { recursive: true });
if (!fs.existsSync(proposalsDir)) fs.mkdirSync(proposalsDir, { recursive: true });

// Minimal valid PDF base64
const emptyPdfBase64 = 'JVBERi0xLjAKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA1OTUuMjggODQxLjg5XQo+PgplbmRvYmoKeHJlZgowIDQKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTYgMDAwMDAgbiAKMDAwMDAwMDExMSAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDQKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjE5OQolJUVPRgo=';
const pdfBuffer = Buffer.from(emptyPdfBase64, 'base64');

const filesToCreate = [
  path.join(downloadsDir, 'Individual_Financial_Literacy_Programme.pdf'),
  path.join(proposalsDir, 'corporate-proposal-2026.pdf'),
  path.join(proposalsDir, 'college-proposal-2026.pdf'),
  path.join(proposalsDir, 'school-proposal-2026.pdf'),
  path.join(publicDir, 'AI_for_Schools.pdf'),
  path.join(publicDir, 'AI_for_Colleges.pdf')
];

for (const file of filesToCreate) {
  fs.writeFileSync(file, pdfBuffer);
  console.log('Created:', file);
}
