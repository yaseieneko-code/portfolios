'use strict';

/* Scroll fade-in for sections */
const sections = document.querySelectorAll('.section, .hero');
sections.forEach(s => {
    s.style.opacity = '0';
    s.style.transform = 'translateY(28px)';
    s.style.transition = 'opacity 0.85s ease, transform 0.85s ease';
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.05 });

sections.forEach(s => observer.observe(s));
