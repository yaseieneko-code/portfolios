'use strict';

/* ------------------------------------------------
   Scroll fade-in observer
   ------------------------------------------------ */
const fadeTargets = document.querySelectorAll('.section');
fadeTargets.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    }),
    { threshold: 0.08 }
);
fadeTargets.forEach(el => observer.observe(el));

/* ------------------------------------------------
   Walking cat — occasional sit-and-blink pause
   ------------------------------------------------ */
const walkingCat = document.getElementById('walkingCat');

(function schedulePause() {
    const nextPause = 6000 + Math.random() * 10000;
    setTimeout(() => {
        walkingCat.style.animationPlayState = 'paused';
        walkingCat.style.filter = 'drop-shadow(2px 2px 4px rgba(0,0,0,0.25))';

        const sitDuration = 800 + Math.random() * 1500;
        setTimeout(() => {
            walkingCat.style.animationPlayState = 'running';
            schedulePause();
        }, sitDuration);
    }, nextPause);
}());

/* ------------------------------------------------
   Cat button — ear-twitch on hover
   ------------------------------------------------ */
document.querySelectorAll('.cat-link-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        const svg = btn.querySelector('.cat-head-svg');
        if (!svg) return;
        svg.style.animation = 'none';
        void svg.offsetWidth; // reflow
        svg.style.animation = 'headWiggle 0.38s ease-in-out forwards';
    });
});

/* ------------------------------------------------
   Book cover — shimmer on hover
   ------------------------------------------------ */
document.querySelectorAll('.book-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.filter = 'brightness(1.04) saturate(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.filter = '';
    });
});

/* ------------------------------------------------
   Paw print trail on click (fun extra)
   ------------------------------------------------ */
document.addEventListener('click', spawnPaw);
document.addEventListener('touchend', e => spawnPaw(e.changedTouches[0]));

function spawnPaw(e) {
    const paw = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    paw.setAttribute('viewBox', '0 0 40 40');
    paw.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    paw.innerHTML = `
        <ellipse cx="20" cy="28" rx="9" ry="7" fill="#6B4C2A" opacity="0.35"/>
        <circle cx="11" cy="18" r="3.5" fill="#6B4C2A" opacity="0.35"/>
        <circle cx="20" cy="14" r="4"   fill="#6B4C2A" opacity="0.35"/>
        <circle cx="29" cy="18" r="3.5" fill="#6B4C2A" opacity="0.35"/>`;

    Object.assign(paw.style, {
        position: 'fixed',
        left: (e.clientX - 20) + 'px',
        top:  (e.clientY - 20) + 'px',
        width: '40px',
        height: '40px',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'opacity 0.9s ease, transform 0.9s ease',
        transform: `rotate(${Math.random() * 60 - 30}deg) scale(1)`,
    });

    document.body.appendChild(paw);

    requestAnimationFrame(() => requestAnimationFrame(() => {
        paw.style.opacity = '0';
        paw.style.transform = paw.style.transform.replace('scale(1)', 'scale(1.4)');
    }));

    setTimeout(() => paw.remove(), 1000);
}
