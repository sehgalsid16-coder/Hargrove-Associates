export function renderFooter() {
    return `
    <footer class="site-footer section-dark">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col brand-col">
            <div class="footer-logo">HARGROVE & ASSOCIATES</div>
            <p>Attorneys at Law<br>Los Angeles, California</p>
          </div>
          <div class="footer-col links-col">
            <h4>Quick Links</h4>
            <nav>
              <a href="/">Home</a>
              <a href="/practice-areas.html">Practice Areas</a>
              <a href="/attorneys.html">Our Attorneys</a>
              <a href="/results.html">Case Results</a>
              <a href="/about.html">About</a>
              <a href="/contact.html">Contact</a>
            </nav>
          </div>
          <div class="footer-col practices-col">
            <h4>Practice Areas</h4>
            <nav>
              <a href="/civil-litigation.html">Civil Litigation</a>
              <a href="/corporate-disputes.html">Corporate Disputes</a>
              <a href="/family-divorce.html">Divorce & Family Law</a>
              <a href="/estate-litigation.html">Estate Litigation</a>
            </nav>
          </div>
          <div class="footer-col contact-col">
            <h4>Contact</h4>
            <p>
              <a href="tel:2135550100">(213) 555-0100</a><br>
              <a href="mailto:consultations@hargrovellp.com">consultations@hargrovellp.com</a><br>
              One California Plaza, Suite 2900<br>
              Los Angeles, CA 90071
            </p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container footer-bottom-inner">
          <div class="legal-disclaimer">
            &copy; 2025 Hargrove & Associates LLP. All Rights Reserved. &middot; Hargrove & Associates is a California limited liability partnership. Attorney Advertising. Prior results do not guarantee a similar outcome. This website does not constitute legal advice and does not create an attorney-client relationship.
          </div>
          <div class="footer-meta-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#" class="linkedin-icon" aria-label="LinkedIn">IN</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
