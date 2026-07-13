const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Replace the broken part between line 80 and the accessibility block
const regex = /--glass-border: rgba\(255, 255, 255, 0\.07\);.*?animation-iteration-count: 1 !important;/s;
const fixed = `--glass-border: rgba(255, 255, 255, 0.07);
    --glass-shadow: none;
    --btn-secondary-bg: rgba(255, 255, 255, 0.05);
    --btn-secondary-border: rgba(255, 255, 255, 0.10);
    --btn-secondary-text: #fafafa;
    --btn-secondary-hover: rgba(255, 255, 255, 0.10);
    --icon-bg: rgba(255, 255, 255, 0.05);
    --toggle-bg: rgba(255, 255, 255, 0.05);
    --toggle-border: rgba(255, 255, 255, 0.10);
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    overflow-x: hidden;
    /* Safe area support for iOS notch */
    padding-env: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
  }

  ::selection {
    background: rgba(212, 164, 77, 0.3);
    color: var(--color-foreground);
  }

  /* WCAG AA accessible focus states */
  :focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* Accessibility: Global reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;`;

css = css.replace(regex, fixed);
fs.writeFileSync('src/app/globals.css', css);
console.log('Fixed globals.css');
