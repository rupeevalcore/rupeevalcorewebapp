const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Map --font-heading to --font-ibm-plex-sans
css = css.replace('--font-heading: var(--font-outfit);', '--font-heading: var(--font-ibm-plex-sans);');

// Replace the heading styles
const headingStylesRegex = /h1, h2, h3, h4, h5, h6 {\s*font-family: var\(--font-heading\);\s*}/;
const newHeadingStyles = `h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
  }
  h1 { font-weight: 700; }
  h2, h3 { font-weight: 600; }
  h4, h5, h6 { font-weight: 500; }
  
  body {
    font-size: 16px;
  }`;

css = css.replace(headingStylesRegex, newHeadingStyles);

fs.writeFileSync('src/app/globals.css', css);
console.log('Updated typography in globals.css');
