import { renderHeader } from './header.js';
import { renderFooter } from './footer.js';

export function initLayout() {
    // Inject Header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = renderHeader();
    }

    // Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = renderFooter();
    }

    // Initialize UI Interactions
    initStickyHeader();
    initMobileMenu();
    initScrollAnimations();
}

function initStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const closeBtn = document.querySelector('.mobile-menu-close');
    const drawer = document.querySelector('.mobile-drawer');

    if (toggleBtn && drawer && closeBtn) {
        toggleBtn.addEventListener('click', () => {
            drawer.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            drawer.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observer.observe(el));
}
