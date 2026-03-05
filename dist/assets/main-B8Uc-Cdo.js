(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();function n(){return`
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
  `}function l(){return`
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
  `}function c(){const t=document.getElementById("header-placeholder");t&&(t.innerHTML=n());const o=document.getElementById("footer-placeholder");o&&(o.innerHTML=l()),d(),f(),h()}function d(){const t=document.querySelector(".site-header");t&&window.addEventListener("scroll",()=>{window.scrollY>50?t.classList.add("scrolled"):t.classList.remove("scrolled")})}function f(){const t=document.querySelector(".mobile-menu-toggle"),o=document.querySelector(".mobile-menu-close"),r=document.querySelector(".mobile-drawer");t&&r&&o&&(t.addEventListener("click",()=>{r.classList.add("active"),document.body.style.overflow="hidden"}),o.addEventListener("click",()=>{r.classList.remove("active"),document.body.style.overflow=""}))}function h(){const t=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting&&(i.target.classList.add("visible"),t.unobserve(i.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".fade-in").forEach(r=>t.observe(r))}document.addEventListener("DOMContentLoaded",()=>{c()});
