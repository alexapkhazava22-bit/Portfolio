
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            const siblings = Array.from(parent.querySelectorAll(':scope > .reveal'));
            const idx = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${idx * 60}ms`;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 40 ? 'rgba(46,46,52,0.8)' : 'var(--border)';
});

function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    btn.textContent = 'Message sent ✓';
    btn.style.background = '#22c55e';
    btn.style.color = '#fff';
    setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.style.background = '';
        btn.style.color = '';
        e.target.reset();
    }, 3000);
}

function handleSubmit(e) {
    e.preventDefault();
}