export function renderHeader() {
    return `
    <header class="site-header">
      <div class="container header-inner">
        <a href="/" class="logo">HARGROVE & ASSOCIATES</a>
        <nav class="desktop-nav">
          <a href="/">Home</a>
          <a href="/practice-areas.html">Practice Areas</a>
          <a href="/attorneys.html">Attorneys</a>
          <a href="/results.html">Results</a>
          <a href="/about.html">About</a>
        </nav>
        <div class="header-actions">
          <a href="tel:2135550100" class="phone-link">📞 (213) 555-0100</a>
          <a href="/contact.html" class="btn btn-header">Book Consultation</a>
        </div>
        <button class="mobile-menu-toggle" aria-label="Toggle menu">
          <span class="hamburger"></span>
        </button>
      </div>
    </header>
    
    <div class="mobile-drawer">
      <div class="mobile-drawer-inner">
        <button class="mobile-menu-close" aria-label="Close menu">&times;</button>
        <nav class="mobile-nav">
          <a href="/">Home</a>
          <a href="/practice-areas.html">Practice Areas</a>
          <a href="/attorneys.html">Attorneys</a>
          <a href="/results.html">Results</a>
          <a href="/about.html">About</a>
        </nav>
        <div class="mobile-actions">
          <a href="tel:2135550100" class="phone-link">📞 (213) 555-0100</a>
          <a href="/contact.html" class="btn">Book Consultation</a>
        </div>
      </div>
    </div>
  `;
}
